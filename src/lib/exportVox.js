import { getCompositedVoxels } from '../store/index.js'

/**
 * Export voxel data as MagicaVoxel .vox (version 150).
 * Coordinate mapping: VOX x=x, VOX y=z(depth), VOX z=H-1-y (flip to Y-up).
 */
export function buildVoxBuffer(layers, W, H, D) {
  const voxels = getCompositedVoxels(layers, W, H, D)

  const colorMap = new Map() // hex -> 1-based index (1..255)
  const palette  = new Uint8Array(256 * 4) // RGBA × 256 entries
  let nextIdx = 1

  const voxelData = [] // flat bytes [x, y, z, colorIdx, ...]

  for (let vy = 0; vy < H; vy++) {
    for (let vx = 0; vx < W; vx++) {
      for (let vz = 0; vz < D; vz++) {
        const color = voxels[vy]?.[vx]?.[vz]
        if (!color || color === 'transparent') continue

        let idx = colorMap.get(color)
        if (idx === undefined) {
          if (nextIdx > 255) continue // max 255 unique colors
          idx = nextIdx++
          colorMap.set(color, idx)
          const r = parseInt(color.slice(1, 3), 16)
          const g = parseInt(color.slice(3, 5), 16)
          const b = parseInt(color.slice(5, 7), 16)
          palette[(idx - 1) * 4 + 0] = r
          palette[(idx - 1) * 4 + 1] = g
          palette[(idx - 1) * 4 + 2] = b
          palette[(idx - 1) * 4 + 3] = 255
        }

        // VOX x=vx, y=vz, z=H-1-vy  (makes model Y-up in MagicaVoxel)
        voxelData.push(vx, vz, H - 1 - vy, idx)
      }
    }
  }

  const numVoxels       = voxelData.length / 4
  const sizeContent     = 12               // 3 × uint32
  const xyziContent     = 4 + numVoxels * 4
  const rgbaContent     = 1024             // 256 × 4
  const childrenSize    = (12 + sizeContent) + (12 + xyziContent) + (12 + rgbaContent)
  const totalSize       = 8 + 12 + childrenSize // file header + MAIN + children

  const buf = new ArrayBuffer(totalSize)
  const dv  = new DataView(buf)
  let off   = 0

  const str = s => { for (const c of s) dv.setUint8(off++, c.charCodeAt(0)) }
  const u32 = n => { dv.setUint32(off, n, true); off += 4 }
  const u8  = n => { dv.setUint8(off++, n) }

  // File header
  str('VOX '); u32(150)

  // MAIN chunk
  str('MAIN'); u32(0); u32(childrenSize)

  // SIZE chunk
  str('SIZE'); u32(sizeContent); u32(0)
  u32(W); u32(D); u32(H)

  // XYZI chunk
  str('XYZI'); u32(xyziContent); u32(0)
  u32(numVoxels)
  for (let i = 0; i < numVoxels; i++) {
    u8(voxelData[i * 4 + 0])
    u8(voxelData[i * 4 + 1])
    u8(voxelData[i * 4 + 2])
    u8(voxelData[i * 4 + 3])
  }

  // RGBA chunk (256-entry palette)
  str('RGBA'); u32(rgbaContent); u32(0)
  for (let i = 0; i < 256; i++) {
    u8(palette[i * 4 + 0])
    u8(palette[i * 4 + 1])
    u8(palette[i * 4 + 2])
    u8(palette[i * 4 + 3])
  }

  return buf
}

export function downloadVox(layers, W, H, D, filename = 'model.vox') {
  const buf  = buildVoxBuffer(layers, W, H, D)
  const blob = new Blob([buf], { type: 'application/octet-stream' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}
