export const VOXEL_UNIT = 0.1
export const VOXEL_CHUNK_SIZE = 8

export const VOXEL_MATERIAL_TYPES = [
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

const NON_OCCLUDING_IDS = new Set([
  VOXEL_MATERIAL_TYPES.indexOf('glass'),
  VOXEL_MATERIAL_TYPES.indexOf('crystal'),
  VOXEL_MATERIAL_TYPES.indexOf('hologram'),
])

const FACE_SHADE = {
  front: 1,
  back: 0.78,
  top: 1.18,
  bottom: 0.62,
  right: 0.88,
  left: 0.88,
}

function unpackColor(packed) {
  return [
    ((packed >>> 16) & 255) / 255,
    ((packed >>> 8) & 255) / 255,
    (packed & 255) / 255,
  ]
}

function lerp3([r, g, b], [tr, tg, tb], t) {
  return [r + (tr - r) * t, g + (tg - g) * t, b + (tb - b) * t]
}

function materialColor(rgb, type) {
  switch (type) {
    case 'emissive':
      return lerp3(rgb, [1, 1, 1], 0.38)
    case 'neon':
      return lerp3(rgb, [1, 1, 1], 0.72)
    case 'magma': {
      const r = Math.min(1, rgb[0] * 1.35 + 0.22)
      const g = Math.min(1, rgb[1] * 1.15 + 0.1)
      const b = Math.min(1, rgb[2] * 0.4)
      return lerp3([r, g, b], [1, 0.95, 0.55], 0.48)
    }
    case 'hologram':
      return lerp3(rgb, [0.1, 0.92, 1], 0.45)
    case 'gold': {
      const lum = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114
      return lerp3(rgb, [Math.min(1, lum * 1.25), Math.min(1, lum * 0.95), Math.min(1, lum * 0.42)], 0.6)
    }
    case 'crystal':
      return rgb.map(value => Math.min(1, value * 1.15))
    case 'metal': {
      const lum = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114
      return lerp3(rgb, [lum, lum, lum], 0.45)
    }
    default:
      return rgb
  }
}

function shade(rgb, factor) {
  return rgb.map(value => Math.min(1, value * factor))
}

function pushQuad(buffer, a, b, c, d, rgb, normal) {
  buffer.positions.push(...a, ...b, ...c, ...a, ...c, ...d)
  for (let i = 0; i < 6; i++) {
    buffer.colors.push(...rgb)
    buffer.normals.push(...normal)
  }
}

function flatIndex(x, y, z, width, depth) {
  return (y * width + x) * depth + z
}

/** Build transferable geometry buffers for one chunk from a flattened voxel volume. */
export function buildChunkGeometry({ colors, materials, width, height, depth, chunk, chunkSize = VOXEL_CHUNK_SIZE }) {
  const buffers = VOXEL_MATERIAL_TYPES.map(() => ({ positions: [], colors: [], normals: [] }))
  const half = VOXEL_UNIT / 2
  const x0 = chunk.x * chunkSize
  const y0 = chunk.y * chunkSize
  const z0 = chunk.z * chunkSize
  const x1 = Math.min(width, x0 + chunkSize)
  const y1 = Math.min(height, y0 + chunkSize)
  const z1 = Math.min(depth, z0 + chunkSize)

  const isOccluding = (x, y, z) => {
    if (x < 0 || x >= width || y < 0 || y >= height || z < 0 || z >= depth) return false
    const index = flatIndex(x, y, z, width, depth)
    return colors[index] !== 0 && !NON_OCCLUDING_IDS.has(materials[index])
  }

  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      for (let z = z0; z < z1; z++) {
        const index = flatIndex(x, y, z, width, depth)
        const packed = colors[index]
        if (packed === 0) continue

        const materialId = materials[index] < buffers.length ? materials[index] : 0
        const materialType = VOXEL_MATERIAL_TYPES[materialId]
        const base = materialColor(unpackColor(packed), materialType)
        const buffer = buffers[materialId]
        const cx = (x - width / 2 + 0.5) * VOXEL_UNIT
        const cy = (height - 1 - y) * VOXEL_UNIT + half
        const cz = (z - depth / 2 + 0.5) * VOXEL_UNIT
        const selfLit = materialType === 'emissive' || materialType === 'neon' || materialType === 'magma'
        const faceColor = face => selfLit ? base : shade(base, FACE_SHADE[face])

        if (!isOccluding(x, y, z + 1)) pushQuad(buffer,
          [cx-half, cy-half, cz+half], [cx+half, cy-half, cz+half],
          [cx+half, cy+half, cz+half], [cx-half, cy+half, cz+half], faceColor('front'), [0, 0, 1])
        if (!isOccluding(x, y, z - 1)) pushQuad(buffer,
          [cx+half, cy-half, cz-half], [cx-half, cy-half, cz-half],
          [cx-half, cy+half, cz-half], [cx+half, cy+half, cz-half], faceColor('back'), [0, 0, -1])
        if (!isOccluding(x, y - 1, z)) pushQuad(buffer,
          [cx-half, cy+half, cz+half], [cx+half, cy+half, cz+half],
          [cx+half, cy+half, cz-half], [cx-half, cy+half, cz-half], faceColor('top'), [0, 1, 0])
        if (!isOccluding(x, y + 1, z)) pushQuad(buffer,
          [cx+half, cy-half, cz+half], [cx-half, cy-half, cz+half],
          [cx-half, cy-half, cz-half], [cx+half, cy-half, cz-half], faceColor('bottom'), [0, -1, 0])
        if (!isOccluding(x + 1, y, z)) pushQuad(buffer,
          [cx+half, cy-half, cz+half], [cx+half, cy-half, cz-half],
          [cx+half, cy+half, cz-half], [cx+half, cy+half, cz+half], faceColor('right'), [1, 0, 0])
        if (!isOccluding(x - 1, y, z)) pushQuad(buffer,
          [cx-half, cy-half, cz-half], [cx-half, cy-half, cz+half],
          [cx-half, cy+half, cz+half], [cx-half, cy+half, cz-half], faceColor('left'), [-1, 0, 0])
      }
    }
  }

  return buffers.flatMap((buffer, materialId) => {
    if (buffer.positions.length === 0) return []
    return [{
      materialId,
      positions: new Float32Array(buffer.positions),
      colors: new Float32Array(buffer.colors),
      normals: new Float32Array(buffer.normals),
    }]
  })
}
