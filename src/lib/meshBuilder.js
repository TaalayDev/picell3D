import * as THREE from 'three'

const UNIT = 0.1  // world units per voxel

// ── Color helpers ────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ]
}

function lerp3([r, g, b], [tr, tg, tb], t) {
  return [r + (tr - r) * t, g + (tg - g) * t, b + (tb - b) * t]
}

/** Shading factor per face for solid/metal materials */
const FACE_SHADE = {
  front:  1.00,
  back:   0.78,
  top:    1.18,
  bottom: 0.62,
  right:  0.88,
  left:   0.88,
}

/** Adjust base color for a material type */
function materialColor(rgb, type) {
  switch (type) {
    case 'emissive': return lerp3(rgb, [1, 1, 1], 0.38)   // slightly boosted
    case 'neon':     return lerp3(rgb, [1, 1, 1], 0.72)   // heavily boosted → bloom
    case 'metal': {                                         // desaturate 45%
      const lum = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114
      return lerp3(rgb, [lum, lum, lum], 0.45)
    }
    default: return rgb  // solid, glass
  }
}

function shade(rgb, f) {
  return [Math.min(1, rgb[0] * f), Math.min(1, rgb[1] * f), Math.min(1, rgb[2] * f)]
}

// ── Geometry helpers ─────────────────────────────────────────────────────────

function pushQuad(verts, colors, a, b, c, d, rgb) {
  verts.push(...a, ...b, ...c, ...a, ...c, ...d)
  for (let i = 0; i < 6; i++) colors.push(...rgb)
}

function makeMesh(verts, colors, material) {
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  geo.setAttribute('color',    new THREE.Float32BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  return new THREE.Mesh(geo, material)
}

// ── Main builder ─────────────────────────────────────────────────────────────

/**
 * Build a Three.js Group from a voxels[y][x][z] grid.
 * colorMaterials:  { hexColor: matType }   — per-color fallback
 * voxelMaterials:  { 'y,x,z': matType }    — per-voxel override (takes priority)
 */
export function buildVoxelMesh(voxels, W, H, D, colorMaterials = {}, voxelMaterials = {}) {
  const h = UNIT / 2
  const group = new THREE.Group()
  const allMaterials = []

  // Separate geometry buffers per material type
  const buf = {}
  for (const t of ['solid', 'emissive', 'neon', 'metal', 'glass']) {
    buf[t] = { verts: [], colors: [] }
  }

  function getMatType(x, y, z, hexColor) {
    const key = `${y},${x},${z}`
    return voxelMaterials[key] || colorMaterials[hexColor] || 'solid'
  }

  function occ(x, y, z) {
    if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return false
    const c = voxels[y]?.[x]?.[z]
    if (!c || c === 'transparent') return false
    return getMatType(x, y, z, c) !== 'glass'  // glass is non-occluding
  }

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      for (let z = 0; z < D; z++) {
        const hexColor = voxels[y]?.[x]?.[z]
        if (!hexColor || hexColor === 'transparent') continue

        const matType = getMatType(x, y, z, hexColor)
        const base    = hexToRgb(hexColor)
        const matRgb  = materialColor(base, matType)
        const b       = buf[matType]

        const cx = (x - W / 2 + 0.5) * UNIT
        const cy = (H - 1 - y) * UNIT + h
        const cz = (z - D / 2 + 0.5) * UNIT

        // Self-lit materials skip per-face shading
        const selfLit = matType === 'emissive' || matType === 'neon'

        const fc = (f) => selfLit ? matRgb : shade(matRgb, FACE_SHADE[f])

        // +Z front
        if (!occ(x, y, z + 1)) pushQuad(b.verts, b.colors,
          [cx-h, cy-h, cz+h], [cx+h, cy-h, cz+h],
          [cx+h, cy+h, cz+h], [cx-h, cy+h, cz+h], fc('front'))
        // -Z back
        if (!occ(x, y, z - 1)) pushQuad(b.verts, b.colors,
          [cx+h, cy-h, cz-h], [cx-h, cy-h, cz-h],
          [cx-h, cy+h, cz-h], [cx+h, cy+h, cz-h], fc('back'))
        // +Y top (y-1 in grid = up in world)
        if (!occ(x, y - 1, z)) pushQuad(b.verts, b.colors,
          [cx-h, cy+h, cz+h], [cx+h, cy+h, cz+h],
          [cx+h, cy+h, cz-h], [cx-h, cy+h, cz-h], fc('top'))
        // -Y bottom
        if (!occ(x, y + 1, z)) pushQuad(b.verts, b.colors,
          [cx+h, cy-h, cz+h], [cx-h, cy-h, cz+h],
          [cx-h, cy-h, cz-h], [cx+h, cy-h, cz-h], fc('bottom'))
        // +X right
        if (!occ(x + 1, y, z)) pushQuad(b.verts, b.colors,
          [cx+h, cy-h, cz+h], [cx+h, cy-h, cz-h],
          [cx+h, cy+h, cz-h], [cx+h, cy+h, cz+h], fc('right'))
        // -X left
        if (!occ(x - 1, y, z)) pushQuad(b.verts, b.colors,
          [cx-h, cy-h, cz-h], [cx-h, cy-h, cz+h],
          [cx-h, cy+h, cz+h], [cx-h, cy+h, cz-h], fc('left'))
      }
    }
  }

  // ── Build meshes from buffers ──────────────────────────────────────────────

  if (buf.solid.verts.length) {
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, metalness: 0.05 })
    allMaterials.push(mat)
    group.add(makeMesh(buf.solid.verts, buf.solid.colors, mat))
  }

  if (buf.emissive.verts.length) {
    // Self-lit: MeshBasicMaterial so it isn't affected by scene lighting
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true })
    allMaterials.push(mat)
    group.add(makeMesh(buf.emissive.verts, buf.emissive.colors, mat))
  }

  if (buf.neon.verts.length) {
    // Heavily boosted colors → exceeds UnrealBloomPass threshold → bloom
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true })
    allMaterials.push(mat)
    group.add(makeMesh(buf.neon.verts, buf.neon.colors, mat))
  }

  if (buf.metal.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      metalness: 0.88,
      roughness: 0.12,
      envMapIntensity: 1.2,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.metal.verts, buf.metal.colors, mat))
  }

  if (buf.glass.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      side: THREE.DoubleSide,
      roughness: 0.05,
      metalness: 0.1,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.glass.verts, buf.glass.colors, mat))
  }

  function dispose() {
    allMaterials.forEach(m => m.dispose())
    group.traverse(obj => { if (obj.geometry) obj.geometry.dispose() })
  }

  return { group, dispose }
}
