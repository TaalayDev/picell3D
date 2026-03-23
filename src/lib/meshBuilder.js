import * as THREE from 'three'

const UNIT = 0.1 // world units per pixel

// ── Voxel mesh ─────────────────────────────────────────────────────────────────

/**
 * Build a Three.js Group from a voxels[y][x][z] grid.
 * Emits only visible (exposed) faces. Returns { group, dispose }.
 */
export function buildVoxelMesh(voxels, W, H, D) {
  const group = new THREE.Group()
  const materials = []

  const verts = [], colors = []
  const h = UNIT / 2

  function occ(x, y, z) {
    if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return false
    return voxels[y]?.[x]?.[z] !== 'transparent'
  }

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      for (let z = 0; z < D; z++) {
        const color = voxels[y]?.[x]?.[z]
        if (!color || color === 'transparent') continue

        const rgb = hexToRgb(color)
        const cx = (x - W / 2 + 0.5) * UNIT
        const cy = (H / 2 - y - 0.5) * UNIT
        const cz = (z - D / 2 + 0.5) * UNIT

        if (!occ(x, y, z + 1)) {
          pushQuad(verts, colors,
            [cx-h, cy-h, cz+h], [cx+h, cy-h, cz+h],
            [cx+h, cy+h, cz+h], [cx-h, cy+h, cz+h], rgb)
        }
        if (!occ(x, y, z - 1)) {
          pushQuad(verts, colors,
            [cx+h, cy-h, cz-h], [cx-h, cy-h, cz-h],
            [cx-h, cy+h, cz-h], [cx+h, cy+h, cz-h], shadeRgb(rgb, 0.82))
        }
        if (!occ(x, y - 1, z)) {
          pushQuad(verts, colors,
            [cx-h, cy+h, cz-h], [cx+h, cy+h, cz-h],
            [cx+h, cy+h, cz+h], [cx-h, cy+h, cz+h], shadeRgb(rgb, 1.15))
        }
        if (!occ(x, y + 1, z)) {
          pushQuad(verts, colors,
            [cx-h, cy-h, cz+h], [cx+h, cy-h, cz+h],
            [cx+h, cy-h, cz-h], [cx-h, cy-h, cz-h], shadeRgb(rgb, 0.70))
        }
        if (!occ(x + 1, y, z)) {
          pushQuad(verts, colors,
            [cx+h, cy-h, cz+h], [cx+h, cy-h, cz-h],
            [cx+h, cy+h, cz-h], [cx+h, cy+h, cz+h], shadeRgb(rgb, 0.85))
        }
        if (!occ(x - 1, y, z)) {
          pushQuad(verts, colors,
            [cx-h, cy-h, cz-h], [cx-h, cy-h, cz+h],
            [cx-h, cy+h, cz+h], [cx-h, cy+h, cz-h], shadeRgb(rgb, 0.85))
        }
      }
    }
  }

  if (verts.length) {
    const mesh = buildMesh(verts, colors)
    materials.push(mesh.material)
    group.add(mesh)
  }

  function dispose() {
    materials.forEach(m => m.dispose())
    group.traverse(obj => { if (obj.geometry) obj.geometry.dispose() })
  }

  return { group, dispose }
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function pushQuad(verts, colors, a, b, c, d, rgb) {
  verts.push(...a, ...b, ...c, ...a, ...c, ...d)
  colors.push(...rgb, ...rgb, ...rgb, ...rgb, ...rgb, ...rgb)
}

function buildMesh(verts, colors) {
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true })
  return new THREE.Mesh(geo, mat)
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

function shadeRgb([r, g, b], factor) {
  return [Math.min(1, r * factor), Math.min(1, g * factor), Math.min(1, b * factor)]
}
