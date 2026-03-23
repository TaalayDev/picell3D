import * as THREE from 'three'

const UNIT = 0.1
const H2   = UNIT / 2

/**
 * High-quality voxel mesh builder.
 * Groups faces by color → one MeshStandardMaterial per unique color.
 * Better for render page (PBR lighting) and GLB export (proper materials).
 */
export function buildVoxelMeshHQ(voxels, W, H, D) {
  const group     = new THREE.Group()
  const materials = []

  function occ(x, y, z) {
    if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return false
    return voxels[y]?.[x]?.[z] !== 'transparent'
  }

  // Gather geometry per color
  const byColor = new Map() // hex -> { verts:[], normals:[] }

  function addFace(color, quad, nx, ny, nz) {
    if (!byColor.has(color)) byColor.set(color, { verts: [], normals: [] })
    const { verts, normals } = byColor.get(color)
    const [a, b, c, d] = quad
    for (const v of [a, b, c, a, c, d]) {
      verts.push(v[0], v[1], v[2])
      normals.push(nx, ny, nz)
    }
  }

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      for (let z = 0; z < D; z++) {
        const color = voxels[y]?.[x]?.[z]
        if (!color || color === 'transparent') continue

        const cx = (x - W / 2 + 0.5) * UNIT
        const cy = (H - 1 - y) * UNIT + H2
        const cz = (z - D / 2 + 0.5) * UNIT

        if (!occ(x, y, z + 1)) addFace(color, [
          [cx-H2, cy-H2, cz+H2], [cx+H2, cy-H2, cz+H2],
          [cx+H2, cy+H2, cz+H2], [cx-H2, cy+H2, cz+H2],
        ], 0, 0, 1)
        if (!occ(x, y, z - 1)) addFace(color, [
          [cx+H2, cy-H2, cz-H2], [cx-H2, cy-H2, cz-H2],
          [cx-H2, cy+H2, cz-H2], [cx+H2, cy+H2, cz-H2],
        ], 0, 0, -1)
        if (!occ(x, y - 1, z)) addFace(color, [
          [cx-H2, cy+H2, cz-H2], [cx+H2, cy+H2, cz-H2],
          [cx+H2, cy+H2, cz+H2], [cx-H2, cy+H2, cz+H2],
        ], 0, 1, 0)
        if (!occ(x, y + 1, z)) addFace(color, [
          [cx-H2, cy-H2, cz+H2], [cx+H2, cy-H2, cz+H2],
          [cx+H2, cy-H2, cz-H2], [cx-H2, cy-H2, cz-H2],
        ], 0, -1, 0)
        if (!occ(x + 1, y, z)) addFace(color, [
          [cx+H2, cy-H2, cz+H2], [cx+H2, cy-H2, cz-H2],
          [cx+H2, cy+H2, cz-H2], [cx+H2, cy+H2, cz+H2],
        ], 1, 0, 0)
        if (!occ(x - 1, y, z)) addFace(color, [
          [cx-H2, cy-H2, cz-H2], [cx-H2, cy-H2, cz+H2],
          [cx-H2, cy+H2, cz+H2], [cx-H2, cy+H2, cz-H2],
        ], -1, 0, 0)
      }
    }
  }

  for (const [hex, { verts, normals }] of byColor) {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals, 3))

    const mat = new THREE.MeshStandardMaterial({
      color:     new THREE.Color(r, g, b),
      roughness: 0.75,
      metalness: 0.08,
    })
    materials.push(mat)
    group.add(new THREE.Mesh(geo, mat))
  }

  function dispose() {
    materials.forEach(m => m.dispose())
    group.traverse(obj => { if (obj.geometry) obj.geometry.dispose() })
  }

  return { group, dispose }
}
