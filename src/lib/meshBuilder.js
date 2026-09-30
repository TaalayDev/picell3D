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

/** Shading factor per face for opaque materials */
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
    case 'emissive':
      return lerp3(rgb, [1, 1, 1], 0.38)   // slightly boosted
    case 'neon':
      return lerp3(rgb, [1, 1, 1], 0.72)   // heavily boosted → bloom
    case 'magma': {
      // Warm thermal radiation: shift towards glowing orange-yellow
      const r = Math.min(1, rgb[0] * 1.35 + 0.22)
      const g = Math.min(1, rgb[1] * 1.15 + 0.10)
      const b = Math.min(1, rgb[2] * 0.40)
      return lerp3([r, g, b], [1, 0.95, 0.55], 0.48)
    }
    case 'hologram': {
      // Ethereal electric cyan-blue tint shift
      return lerp3(rgb, [0.1, 0.92, 1.0], 0.45)
    }
    case 'gold': {
      // Warm gilded golden sheen
      const lum = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114
      const goldRgb = [Math.min(1, lum * 1.25), Math.min(1, lum * 0.95), Math.min(1, lum * 0.42)]
      return lerp3(rgb, goldRgb, 0.60)
    }
    case 'crystal': {
      // Vivid saturated jewel vibrance
      return [
        Math.min(1, rgb[0] * 1.15),
        Math.min(1, rgb[1] * 1.15),
        Math.min(1, rgb[2] * 1.15),
      ]
    }
    case 'metal': {
      // Desaturate 45% for metallic chrome look
      const lum = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114
      return lerp3(rgb, [lum, lum, lum], 0.45)
    }
    default:
      return rgb  // solid, glossy, matte, glass
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

const ALL_MATERIAL_TYPES = [
  'solid',
  'glossy',
  'matte',
  'metal',
  'gold',
  'glass',
  'crystal',
  'hologram',
  'emissive',
  'neon',
  'magma',
]

const NON_OCCLUDING = new Set(['glass', 'crystal', 'hologram'])

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
  for (const t of ALL_MATERIAL_TYPES) {
    buf[t] = { verts: [], colors: [] }
  }

  function getMatType(x, y, z, hexColor) {
    const key = `${y},${x},${z}`
    const t = voxelMaterials[key] || colorMaterials[hexColor] || 'solid'
    return buf[t] ? t : 'solid'
  }

  function occ(x, y, z) {
    if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return false
    const c = voxels[y]?.[x]?.[z]
    if (!c || c === 'transparent') return false
    const mat = getMatType(x, y, z, c)
    return !NON_OCCLUDING.has(mat)
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
        const selfLit = matType === 'emissive' || matType === 'neon' || matType === 'magma'

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

  // 1. Solid (standard matte diffuse)
  if (buf.solid.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.75,
      metalness: 0.05,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.solid.verts, buf.solid.colors, mat))
  }

  // 2. Glossy (Shiny Plastic / Toy / Vinyl)
  if (buf.glossy.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.14,
      metalness: 0.02,
      envMapIntensity: 1.1,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.glossy.verts, buf.glossy.colors, mat))
  }

  // 3. Matte (Clay / Chalk / Velvet)
  if (buf.matte.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.98,
      metalness: 0.0,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.matte.verts, buf.matte.colors, mat))
  }

  // 4. Metal (Chrome / Steel)
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

  // 5. Gold (Polished Gilded Gold / Brass)
  if (buf.gold.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      metalness: 0.96,
      roughness: 0.08,
      envMapIntensity: 1.6,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.gold.verts, buf.gold.colors, mat))
  }

  // 6. Glass (Clear Semi-Transparent)
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

  // 7. Crystal (Gemstone / Prism)
  if (buf.crystal.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: true,
      side: THREE.DoubleSide,
      roughness: 0.06,
      metalness: 0.22,
      envMapIntensity: 1.8,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.crystal.verts, buf.crystal.colors, mat))
  }

  // 8. Hologram (Cyber Projection)
  if (buf.hologram.verts.length) {
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.60,
      depthWrite: false,
      side: THREE.DoubleSide,
      roughness: 0.2,
      metalness: 0.1,
      emissive: new THREE.Color(0x004466),
      emissiveIntensity: 0.7,
    })
    allMaterials.push(mat)
    group.add(makeMesh(buf.hologram.verts, buf.hologram.colors, mat))
  }

  // 9. Emissive (Soft Glow)
  if (buf.emissive.verts.length) {
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true })
    allMaterials.push(mat)
    group.add(makeMesh(buf.emissive.verts, buf.emissive.colors, mat))
  }

  // 10. Neon (Bright Bloom)
  if (buf.neon.verts.length) {
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true })
    allMaterials.push(mat)
    group.add(makeMesh(buf.neon.verts, buf.neon.colors, mat))
  }

  // 11. Magma (Molten Thermal Bloom)
  if (buf.magma.verts.length) {
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true })
    allMaterials.push(mat)
    group.add(makeMesh(buf.magma.verts, buf.magma.colors, mat))
  }

  function dispose() {
    allMaterials.forEach(m => m.dispose())
    group.traverse(obj => { if (obj.geometry) obj.geometry.dispose() })
  }

  return { group, dispose }
}
