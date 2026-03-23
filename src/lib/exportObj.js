import { getCompositedVoxels } from '../store/index.js'

const UNIT = 0.1
const H2   = UNIT / 2

function occ(voxels, x, y, z, W, H, D) {
  if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return false
  return voxels[y]?.[x]?.[z] !== 'transparent'
}

/**
 * Export voxels to Wavefront OBJ + MTL text.
 * Returns { obj: string, mtl: string }.
 * The OBJ references "model.mtl" so save both with filenames model.obj + model.mtl.
 */
export function buildObjMtl(layers, W, H, D) {
  const voxels   = getCompositedVoxels(layers, W, H, D)
  const colorMap = new Map() // hex -> matName
  let colorIdx   = 0

  const mtlLines = ['# Picell3D export', '']
  // per-material vertex/face accumulators
  const matVerts = new Map() // matName -> Float32Array-like array
  const matFaces = new Map() // matName -> [[v1,v2,v3,v4], ...]
  let vi = 1 // 1-based OBJ vertex counter

  const allVerts = [] // [x,y,z, x,y,z, ...] interleaved

  function ensureMat(color) {
    if (colorMap.has(color)) return colorMap.get(color)
    const name = `c${colorIdx++}`
    colorMap.set(color, name)
    const r = (parseInt(color.slice(1, 3), 16) / 255).toFixed(4)
    const g = (parseInt(color.slice(3, 5), 16) / 255).toFixed(4)
    const b = (parseInt(color.slice(5, 7), 16) / 255).toFixed(4)
    mtlLines.push(`newmtl ${name}`, `Kd ${r} ${g} ${b}`, `Ka 0.05 0.05 0.05`, `Ks 0.0 0.0 0.0`, `d 1.0`, '')
    matFaces.set(name, [])
    return name
  }

  function addFace(mat, corners) {
    const indices = []
    for (const [x, y, z] of corners) {
      allVerts.push(x, y, z)
      indices.push(vi++)
    }
    matFaces.get(mat).push(indices)
  }

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      for (let z = 0; z < D; z++) {
        const color = voxels[y]?.[x]?.[z]
        if (!color || color === 'transparent') continue

        const cx = (x - W / 2 + 0.5) * UNIT
        const cy = (H - 1 - y) * UNIT
        const cz = (z - D / 2 + 0.5) * UNIT
        const mat = ensureMat(color)

        // +Z front
        if (!occ(voxels, x, y, z + 1, W, H, D)) addFace(mat, [
          [cx - H2, cy,        cz + H2],
          [cx + H2, cy,        cz + H2],
          [cx + H2, cy + UNIT, cz + H2],
          [cx - H2, cy + UNIT, cz + H2],
        ])
        // -Z back
        if (!occ(voxels, x, y, z - 1, W, H, D)) addFace(mat, [
          [cx + H2, cy,        cz - H2],
          [cx - H2, cy,        cz - H2],
          [cx - H2, cy + UNIT, cz - H2],
          [cx + H2, cy + UNIT, cz - H2],
        ])
        // +Y top
        if (!occ(voxels, x, y - 1, z, W, H, D)) addFace(mat, [
          [cx - H2, cy + UNIT, cz - H2],
          [cx + H2, cy + UNIT, cz - H2],
          [cx + H2, cy + UNIT, cz + H2],
          [cx - H2, cy + UNIT, cz + H2],
        ])
        // -Y bottom
        if (!occ(voxels, x, y + 1, z, W, H, D)) addFace(mat, [
          [cx - H2, cy, cz + H2],
          [cx + H2, cy, cz + H2],
          [cx + H2, cy, cz - H2],
          [cx - H2, cy, cz - H2],
        ])
        // +X right
        if (!occ(voxels, x + 1, y, z, W, H, D)) addFace(mat, [
          [cx + H2, cy,        cz + H2],
          [cx + H2, cy,        cz - H2],
          [cx + H2, cy + UNIT, cz - H2],
          [cx + H2, cy + UNIT, cz + H2],
        ])
        // -X left
        if (!occ(voxels, x - 1, y, z, W, H, D)) addFace(mat, [
          [cx - H2, cy,        cz - H2],
          [cx - H2, cy,        cz + H2],
          [cx - H2, cy + UNIT, cz + H2],
          [cx - H2, cy + UNIT, cz - H2],
        ])
      }
    }
  }

  const objLines = ['# Picell3D export', 'mtllib model.mtl', '', '# Vertices']
  for (let i = 0; i < allVerts.length; i += 3) {
    objLines.push(`v ${allVerts[i].toFixed(5)} ${allVerts[i + 1].toFixed(5)} ${allVerts[i + 2].toFixed(5)}`)
  }
  objLines.push('')
  for (const [mat, faces] of matFaces) {
    if (!faces.length) continue
    objLines.push(`usemtl ${mat}`)
    for (const q of faces) objLines.push(`f ${q.join(' ')}`)
    objLines.push('')
  }

  return { obj: objLines.join('\n'), mtl: mtlLines.join('\n') }
}

function triggerDownload(content, filename, mime) {
  const blob = new Blob([content], { type: mime })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}

export function downloadObjMtl(layers, W, H, D, stem = 'model') {
  const { obj, mtl } = buildObjMtl(layers, W, H, D)
  triggerDownload(obj, `${stem}.obj`, 'text/plain')
  // slight delay so both dialogs appear
  setTimeout(() => triggerDownload(mtl, `${stem}.mtl`, 'text/plain'), 150)
}
