// The voxel model as-is: one quad (2 triangles) per exposed voxel face, no smoothing or decimation.
// Used as the starting point for manual editing. Output matches computeLowPoly().
import { materialColor } from '../meshBuilder.js'
import { hexToRgb } from './colorize.js'

const UNIT = 0.1 // world units per voxel (matches meshBuilder)

// Axes are (x, height, z); (u, v) follow cyclic order so u × v points along +axis.
const AXES = [[1, 2], [2, 0], [0, 1]]

export function computeVoxelMesh({ voxels, voxelMaterials = {}, W, H, D }) {
  const size = [W, H, D]
  const at = (x, h, z) => {
    if (x < 0 || x >= W || h < 0 || h >= H || z < 0 || z >= D) return null
    const c = voxels[H - 1 - h]?.[x]?.[z]
    return c && c !== 'transparent' ? c : null
  }
  const groups = new Map()
  const group = (mat) => {
    if (!groups.has(mat)) groups.set(mat, { mat, positions: [], normals: [], colors: [], faceHex: [] })
    return groups.get(mat)
  }

  for (let h = 0; h < H; h++) for (let x = 0; x < W; x++) for (let z = 0; z < D; z++) {
    const color = at(x, h, z)
    if (!color) continue
    const mat = voxelMaterials[`${H - 1 - h},${x},${z}`] || 'solid'
    const rgb = materialColor(hexToRgb(color), mat)
    const g = group(mat)
    const cell = [x, h, z]

    for (let a = 0; a < 3; a++) for (const s of [1, -1]) {
      const nb = [x, h, z]; nb[a] += s
      if (at(nb[0], nb[1], nb[2])) continue
      const [ua, va] = AXES[a]
      const base = cell.slice(); if (s > 0) base[a] += 1
      const corner = (du, dv) => { const p = base.slice(); p[ua] += du; p[va] += dv; return p }
      const quad = [corner(0, 0), corner(1, 0), corner(1, 1), corner(0, 1)]
      const order = s > 0 ? [0, 1, 2, 0, 2, 3] : [0, 2, 1, 0, 3, 2]
      const n = [0, 0, 0]; n[a] = s
      for (const i of order) {
        const p = quad[i]
        g.positions.push((p[0] - W / 2) * UNIT, p[1] * UNIT, (p[2] - D / 2) * UNIT)
        g.normals.push(...n)
        g.colors.push(...rgb)
      }
      g.faceHex.push(color, color)
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
  return { groups: out, shading: 'flat', stats: { rawTriangles: triangles, triangles, vertices: triangles * 3 } }
}
