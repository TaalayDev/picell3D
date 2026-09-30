/**
 * Utilities for transforming 2D pixel grids and 3D voxel lists:
 * Rotation, Scaling, Depth shifting, and Anchor calculations.
 */

/**
 * Returns exact trigonometric values for multiples of 90 degrees (pi/2)
 * to avoid floating-point inaccuracies.
 */
export function cleanAngle(rad) {
  const quarter = Math.PI / 2
  const rem = Math.round(rad / quarter)
  if (Math.abs(rad - rem * quarter) < 1e-4) {
    return {
      cos: Math.round(Math.cos(rad)),
      sin: Math.round(Math.sin(rad)),
    }
  }
  return {
    cos: Math.cos(rad),
    sin: Math.sin(rad),
  }
}

/**
 * Computes default center anchor for a box or selection rect.
 * @param {{x1: number, y1: number, x2: number, y2: number}} box 
 * @returns {{x: number, y: number}}
 */
export function getDefaultAnchor(box) {
  if (!box) return { x: 0, y: 0 }
  return {
    x: (box.x1 + box.x2 + 1) / 2,
    y: (box.y1 + box.y2 + 1) / 2,
  }
}

/**
 * Computes anchor coordinates for a box based on a 3x3 alignment preset.
 * Preset names: 'nw', 'n', 'ne', 'w', 'center', 'e', 'sw', 's', 'se'
 */
export function getPresetAnchor(box, preset) {
  if (!box) return { x: 0, y: 0 }
  const x1 = box.x1
  const x2 = box.x2 + 1
  const y1 = box.y1
  const y2 = box.y2 + 1
  const midX = (x1 + x2) / 2
  const midY = (y1 + y2) / 2

  switch (preset) {
    case 'nw': return { x: x1, y: y1 }
    case 'n':  return { x: midX, y: y1 }
    case 'ne': return { x: x2, y: y1 }
    case 'w':  return { x: x1, y: midY }
    case 'center': return { x: midX, y: midY }
    case 'e':  return { x: x2, y: midY }
    case 'sw': return { x: x1, y: y2 }
    case 's':  return { x: midX, y: y2 }
    case 'se': return { x: x2, y: y2 }
    default:   return { x: midX, y: midY }
  }
}

/**
 * Rotates a 2D color grid and optional 3D voxelList around (anchorX, anchorY) by angleRad.
 * Uses inverse nearest-neighbor sampling to guarantee continuous pixel-art results.
 * 
 * @param {{col: number, row: number, w: number, h: number, colors: string[][], voxelList?: Array}} item
 * @param {number} angleRad - Rotation angle in radians
 * @param {number} anchorX - Canvas coordinate X of anchor
 * @param {number} anchorY - Canvas coordinate Y of anchor
 * @returns {{col: number, row: number, w: number, h: number, colors: string[][], voxelList: Array|null}}
 */
export function rotateBox(item, angleRad, anchorX, anchorY) {
  const { col: originCol, row: originRow, w: W, h: H, colors, voxelList } = item
  if (!colors || colors.length === 0 || !colors[0]) return item

  const { cos, sin } = cleanAngle(angleRad)
  const { cos: invCos, sin: invSin } = cleanAngle(-angleRad)

  // 4 corners of the source rectangle in canvas space
  const corners = [
    { x: originCol, y: originRow },
    { x: originCol + W, y: originRow },
    { x: originCol + W, y: originRow + H },
    { x: originCol, y: originRow + H },
  ]

  // Rotate corners around anchor
  const rotCorners = corners.map(p => ({
    x: anchorX + cos * (p.x - anchorX) - sin * (p.y - anchorY),
    y: anchorY + sin * (p.x - anchorX) + cos * (p.y - anchorY),
  }))

  const minX = Math.round(Math.min(...rotCorners.map(p => p.x)))
  const maxX = Math.round(Math.max(...rotCorners.map(p => p.x)))
  const minY = Math.round(Math.min(...rotCorners.map(p => p.y)))
  const maxY = Math.round(Math.max(...rotCorners.map(p => p.y)))

  const newCol = minX
  const newRow = minY
  const newW = Math.max(1, maxX - minX)
  const newH = Math.max(1, maxY - minY)

  const newColors = Array.from({ length: newH }, () => Array(newW).fill('transparent'))
  const newVoxelList = []

  // Fast voxel lookup index
  const voxelMap = new Map()
  if (voxelList && voxelList.length > 0) {
    for (const v of voxelList) {
      const k = `${v.dcol},${v.drow}`
      if (!voxelMap.has(k)) voxelMap.set(k, [])
      voxelMap.get(k).push(v)
    }
  }

  for (let r = 0; r < newH; r++) {
    for (let c = 0; c < newW; c++) {
      const worldX = newCol + c + 0.5
      const worldY = newRow + r + 0.5

      // Inverse map from rotated world coordinate back to source
      const srcX = anchorX + invCos * (worldX - anchorX) - invSin * (worldY - anchorY)
      const srcY = anchorY + invSin * (worldX - anchorX) + invCos * (worldY - anchorY)

      const oldDcol = Math.floor(srcX - originCol)
      const oldDrow = Math.floor(srcY - originRow)

      if (oldDcol >= 0 && oldDcol < W && oldDrow >= 0 && oldDrow < H) {
        const color = colors[oldDrow]?.[oldDcol]
        if (color && color !== 'transparent') {
          newColors[r][c] = color
          const matching = voxelMap.get(`${oldDcol},${oldDrow}`)
          if (matching) {
            for (const mv of matching) {
              newVoxelList.push({ dcol: c, drow: r, z: mv.z, color: mv.color })
            }
          }
        }
      }
    }
  }

  return {
    ...item,
    col: newCol,
    row: newRow,
    w: newW,
    h: newH,
    colors: newColors,
    voxelList: newVoxelList.length > 0 ? newVoxelList : null,
  }
}

/**
 * Scales a 2D color grid and optional 3D voxelList relative to (anchorX, anchorY).
 * Uses nearest-neighbor sampling suitable for pixel art.
 * 
 * @param {{col: number, row: number, w: number, h: number, colors: string[][], voxelList?: Array}} item
 * @param {number} scaleX - Scaling factor along X axis (> 0)
 * @param {number} scaleY - Scaling factor along Y axis (> 0)
 * @param {number} anchorX - Canvas coordinate X of anchor
 * @param {number} anchorY - Canvas coordinate Y of anchor
 * @returns {{col: number, row: number, w: number, h: number, colors: string[][], voxelList: Array|null}}
 */
export function scaleBox(item, scaleX, scaleY, anchorX, anchorY) {
  const { col: originCol, row: originRow, w: W, h: H, colors, voxelList } = item
  if (!colors || colors.length === 0 || !colors[0]) return item

  const sx = Math.max(0.05, Math.abs(scaleX))
  const sy = Math.max(0.05, Math.abs(scaleY))

  const newW = Math.max(1, Math.round(W * sx))
  const newH = Math.max(1, Math.round(H * sy))

  const newCol = Math.round(anchorX + (originCol - anchorX) * sx)
  const newRow = Math.round(anchorY + (originRow - anchorY) * sy)

  const newColors = Array.from({ length: newH }, () => Array(newW).fill('transparent'))
  const newVoxelList = []

  const voxelMap = new Map()
  if (voxelList && voxelList.length > 0) {
    for (const v of voxelList) {
      const k = `${v.dcol},${v.drow}`
      if (!voxelMap.has(k)) voxelMap.set(k, [])
      voxelMap.get(k).push(v)
    }
  }

  for (let r = 0; r < newH; r++) {
    for (let c = 0; c < newW; c++) {
      const srcCol = Math.min(W - 1, Math.max(0, Math.floor((c + 0.5) / sx)))
      const srcRow = Math.min(H - 1, Math.max(0, Math.floor((r + 0.5) / sy)))

      const color = colors[srcRow]?.[srcCol]
      if (color && color !== 'transparent') {
        newColors[r][c] = color
        const matching = voxelMap.get(`${srcCol},${srcRow}`)
        if (matching) {
          for (const mv of matching) {
            newVoxelList.push({ dcol: c, drow: r, z: mv.z, color: mv.color })
          }
        }
      }
    }
  }

  return {
    ...item,
    col: newCol,
    row: newRow,
    w: newW,
    h: newH,
    colors: newColors,
    voxelList: newVoxelList.length > 0 ? newVoxelList : null,
  }
}

/**
 * Shifts z depth coordinates of all voxels in voxelList.
 */
export function shiftVoxelListDepth(voxelList, delta, maxDepth) {
  if (!voxelList || voxelList.length === 0) return null
  return voxelList.map(v => ({
    ...v,
    z: Math.max(0, Math.min(maxDepth - 1, v.z + delta)),
  }))
}
