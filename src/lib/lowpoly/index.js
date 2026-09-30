// Voxel → low poly conversion pipeline (pure; safe to run inside a Web Worker).
//
//   voxels → density field → blur → surface nets → Taubin smooth → decimate
//          → per-face colour from nearest voxel → flat/smooth normals → buffers per material
import { BufferGeometry, Float32BufferAttribute } from 'three'
import { SimplifyModifier } from 'three/addons/modifiers/SimplifyModifier.js'
import { buildField, blurField } from './field.js'
import { surfaceNets } from './surfaceNets.js'
import { taubinSmooth } from './smooth.js'
import { makeVoxelLookup, hexToRgb } from './colorize.js'
import { materialColor } from '../meshBuilder.js'

const UNIT = 0.1 // world units per voxel (matches meshBuilder)

export const DEFAULT_LOWPOLY_PARAMS = {
  roundness:      0.8,     // blur sigma in voxels
  threshold:      0.5,     // iso level; lower = fatter, keeps thin parts
  upsample:       1,       // 1 or 2 field cells per voxel
  keepThin:       true,    // every original voxel stays inside the surface
  iterations:     6,       // Taubin smoothing passes
  keepColorEdges: true,    // don't smooth across colour borders
  detail:         0.4,     // fraction of vertices kept by decimation (1 = no decimation)
  shading:        'flat',  // 'flat' | 'smooth'
  colorMode:      'crisp', // 'crisp' (one colour per face) | 'blended' (per vertex)
}

export const LOWPOLY_PRESETS = {
  faceted: { label: 'Faceted', roundness: 0.8, threshold: 0.5, upsample: 1, iterations: 6,  detail: 0.3,  shading: 'flat',   colorMode: 'crisp' },
  soft:    { label: 'Soft',    roundness: 1.2, threshold: 0.45, upsample: 2, iterations: 12, detail: 1,    shading: 'smooth', colorMode: 'blended' },
  chunky:  { label: 'Chunky',  roundness: 0.5, threshold: 0.5, upsample: 1, iterations: 3,  detail: 0.15, shading: 'flat',   colorMode: 'crisp' },
  minimal: { label: 'Minimal', roundness: 0,   threshold: 0.5, upsample: 1, iterations: 2,  detail: 0.5,  shading: 'flat',   colorMode: 'crisp' },
}

function decimate(positions, indices, keep) {
  const geo = new BufferGeometry()
  geo.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geo.setIndex(Array.from(indices))
  const vertexCount = positions.length / 3
  const remove = Math.floor(vertexCount * (1 - keep))
  if (remove <= 0) return { positions, indices }
  const out = new SimplifyModifier().modify(geo, remove)
  return {
    positions: new Float32Array(out.getAttribute('position').array),
    indices: new Uint32Array(out.getIndex().array),
  }
}

/**
 * @param input  { voxels, voxelMaterials, W, H, D }
 * @param params see DEFAULT_LOWPOLY_PARAMS
 * @returns { groups: [{ mat, positions, normals, colors, faceHex }], stats }
 */
export function computeLowPoly(input, params = {}) {
  const p = { ...DEFAULT_LOWPOLY_PARAMS, ...params }
  const { voxels, voxelMaterials = {}, W, H, D } = input
  const scale = p.upsample >= 2 ? 2 : 1
  const sigma = p.roundness * scale
  const pad = Math.ceil(sigma * 2) + 2

  // 1–3. Field → blur → surface
  const field = buildField(voxels, W, H, D, scale, pad)
  const solid = p.keepThin ? field.data.slice() : null
  blurField(field, sigma)
  if (solid) {
    // Blurring erodes 1-voxel-thin parts below the iso level; lift them back just above it
    const floor = Math.min(0.99, p.threshold + 0.05)
    for (let i = 0; i < solid.length; i++) if (solid[i] && field.data[i] < floor) field.data[i] = floor
  }
  let { positions, indices } = surfaceNets(field, p.threshold)
  const rawTriangles = indices.length / 3

  // Field cell → voxel units (voxel x spans [x, x+1))
  for (let i = 0; i < positions.length; i++) positions[i] = (positions[i] - pad + 0.5) / scale

  const nearest = makeVoxelLookup(voxels, W, H, D, voxelMaterials)

  // 4. Smooth (optionally locked to colour regions)
  let labels = null
  if (p.keepColorEdges) {
    const ids = new Map()
    labels = new Int32Array(positions.length / 3)
    for (let v = 0; v < labels.length; v++) {
      const n = nearest(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2])
      const key = n ? n.color + n.mat : ''
      if (!ids.has(key)) ids.set(key, ids.size)
      labels[v] = ids.get(key)
    }
  }
  taubinSmooth(positions, indices, p.iterations, { labels })

  // 5. Decimate
  if (p.detail < 0.999 && indices.length) ({ positions, indices } = decimate(positions, indices, p.detail))

  // Smooth-shading normals (area weighted), computed on the indexed mesh
  let vertexNormals = null
  if (p.shading === 'smooth') {
    vertexNormals = new Float32Array(positions.length)
    for (let t = 0; t < indices.length; t += 3) {
      const n = faceNormal(positions, indices[t], indices[t + 1], indices[t + 2], false)
      for (let c = 0; c < 3; c++) {
        const v = indices[t + c]
        vertexNormals[v * 3] += n[0]; vertexNormals[v * 3 + 1] += n[1]; vertexNormals[v * 3 + 2] += n[2]
      }
    }
    for (let v = 0; v < vertexNormals.length; v += 3) {
      const l = Math.hypot(vertexNormals[v], vertexNormals[v + 1], vertexNormals[v + 2]) || 1
      vertexNormals[v] /= l; vertexNormals[v + 1] /= l; vertexNormals[v + 2] /= l
    }
  }

  // Per-vertex colours for blended mode
  const vertexInfo = p.colorMode === 'blended'
    ? Array.from({ length: positions.length / 3 }, (_, v) =>
        nearest(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]))
    : null

  // 6–7. Emit per-material buffers in world space
  const groups = new Map()
  const group = (mat) => {
    if (!groups.has(mat)) groups.set(mat, { mat, positions: [], normals: [], colors: [], faceHex: [] })
    return groups.get(mat)
  }
  const toWorld = (v) => [
    (positions[v * 3] - W / 2) * UNIT,
    positions[v * 3 + 1] * UNIT,
    (positions[v * 3 + 2] - D / 2) * UNIT,
  ]

  for (let t = 0; t < indices.length; t += 3) {
    const a = indices[t], b = indices[t + 1], c = indices[t + 2]
    const cx = (positions[a * 3] + positions[b * 3] + positions[c * 3]) / 3
    const cy = (positions[a * 3 + 1] + positions[b * 3 + 1] + positions[c * 3 + 1]) / 3
    const cz = (positions[a * 3 + 2] + positions[b * 3 + 2] + positions[c * 3 + 2]) / 3
    const face = nearest(cx, cy, cz)
    if (!face) continue
    const g = group(face.mat)
    const flatN = faceNormal(positions, a, b, c, true)
    g.faceHex.push(face.color)
    for (const v of [a, b, c]) {
      g.positions.push(...toWorld(v))
      if (vertexNormals) g.normals.push(vertexNormals[v * 3], vertexNormals[v * 3 + 1], vertexNormals[v * 3 + 2])
      else g.normals.push(...flatN)
      const src = vertexInfo?.[v] && vertexInfo[v].mat === face.mat ? vertexInfo[v].color : face.color
      g.colors.push(...materialColor(hexToRgb(src), face.mat))
    }
  }

  const out = [...groups.values()].map(g => ({
    mat: g.mat,
    positions: new Float32Array(g.positions),
    normals: new Float32Array(g.normals),
    colors: new Float32Array(g.colors),
    faceHex: g.faceHex,
  }))
  const triangles = out.reduce((n, g) => n + g.positions.length / 9, 0)

  return { groups: out, stats: { rawTriangles, triangles, vertices: positions.length / 3 } }
}

function faceNormal(pos, a, b, c, normalize) {
  const ux = pos[b * 3] - pos[a * 3], uy = pos[b * 3 + 1] - pos[a * 3 + 1], uz = pos[b * 3 + 2] - pos[a * 3 + 2]
  const vx = pos[c * 3] - pos[a * 3], vy = pos[c * 3 + 1] - pos[a * 3 + 1], vz = pos[c * 3 + 2] - pos[a * 3 + 2]
  const n = [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx]
  if (!normalize) return n
  const l = Math.hypot(n[0], n[1], n[2]) || 1
  return [n[0] / l, n[1] / l, n[2] / l]
}
