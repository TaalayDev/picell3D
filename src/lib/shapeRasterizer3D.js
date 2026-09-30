import { computeShapePixels } from './shapeRasterizer.js'

export const SHAPE_TOOLS_3D = new Set(['rect', 'circle', 'ellipse', 'line'])
export const VOLUME_PRIMITIVE_TOOLS_3D = new Set(['box3d', 'sphere3d', 'cylinder3d'])

export function dominantAxis(normal) {
  const ax = Math.abs(normal?.x || 0)
  const ay = Math.abs(normal?.y || 0)
  const az = Math.abs(normal?.z || 0)
  return ax >= ay && ax >= az ? 'x' : ay >= az ? 'y' : 'z'
}

export function lockVoxelToPlane(voxel, origin, axis) {
  return {
    x: axis === 'x' ? origin.x : voxel.x,
    y: axis === 'y' ? origin.y : voxel.y,
    z: axis === 'z' ? origin.z : voxel.z,
  }
}

function toPlanePoint(voxel, axis) {
  if (axis === 'x') return { col: voxel.z, row: voxel.y }
  if (axis === 'y') return { col: voxel.x, row: voxel.z }
  return { col: voxel.x, row: voxel.y }
}

function fromPlanePoint(point, origin, axis) {
  if (axis === 'x') return { x: origin.x, y: point.row, z: point.col }
  if (axis === 'y') return { x: point.col, y: origin.y, z: point.row }
  return { x: point.col, y: point.row, z: origin.z }
}

function axisCoord(voxel, axis) {
  return voxel[axis]
}

function fromPlaneAndAxis(col, row, depth, axis) {
  if (axis === 'x') return { x: depth, y: row, z: col }
  if (axis === 'y') return { x: col, y: depth, z: row }
  return { x: col, y: row, z: depth }
}

function insideBounds(voxel, W, H, D) {
  return voxel.x >= 0 && voxel.x < W && voxel.y >= 0 && voxel.y < H && voxel.z >= 0 && voxel.z < D
}

/** Rasterize a 2D shape onto one axis-aligned voxel plane. */
export function compute3DShapeVoxels(tool, origin, end, axis, W, H, D, filled = false, thickness = 1) {
  if (!SHAPE_TOOLS_3D.has(tool)) return []
  const pixels = computeShapePixels(
    tool,
    [toPlanePoint(origin, axis), toPlanePoint(end, axis)],
    filled,
    thickness,
  )
  const seen = new Set()
  const result = []
  for (const pixel of pixels) {
    const voxel = fromPlanePoint(pixel, origin, axis)
    if (voxel.x < 0 || voxel.x >= W || voxel.y < 0 || voxel.y >= H || voxel.z < 0 || voxel.z >= D) continue
    const key = `${voxel.x},${voxel.y},${voxel.z}`
    if (seen.has(key)) continue
    seen.add(key)
    result.push(voxel)
  }
  return result
}

/** Rasterize a solid or hollow primitive from a face-plane gesture. */
export function computeVolumePrimitiveVoxels(
  tool,
  origin,
  end,
  axis,
  W,
  H,
  D,
  { filled = true, thickness = 1, depth = 1, direction = 1 } = {},
) {
  if (!VOLUME_PRIMITIVE_TOOLS_3D.has(tool)) return []
  const a = toPlanePoint(origin, axis)
  const b = toPlanePoint(end, axis)
  const shell = Math.max(1, Math.round(thickness))
  const height = Math.max(1, Math.round(depth))
  const startDepth = axisCoord(origin, axis)
  const axial = Array.from({ length: height }, (_, i) => startDepth + i * (direction < 0 ? -1 : 1))
  const result = []
  const seen = new Set()
  const add = (col, row, axialDepth) => {
    const voxel = fromPlaneAndAxis(col, row, axialDepth, axis)
    if (!insideBounds(voxel, W, H, D)) return
    const key = `${voxel.x},${voxel.y},${voxel.z}`
    if (!seen.has(key)) { seen.add(key); result.push(voxel) }
  }

  if (tool === 'box3d') {
    const minCol = Math.min(a.col, b.col), maxCol = Math.max(a.col, b.col)
    const minRow = Math.min(a.row, b.row), maxRow = Math.max(a.row, b.row)
    for (let ai = 0; ai < axial.length; ai++)
      for (let row = minRow; row <= maxRow; row++)
        for (let col = minCol; col <= maxCol; col++) {
          const boundaryDistance = Math.min(
            col - minCol, maxCol - col,
            row - minRow, maxRow - row,
            ai, axial.length - 1 - ai,
          )
          if (filled || boundaryDistance < shell) add(col, row, axial[ai])
        }
    return result
  }

  const radius = Math.max(0, Math.round(Math.hypot(b.col - a.col, b.row - a.row)))
  if (tool === 'sphere3d') {
    for (let da = -radius; da <= radius; da++)
      for (let row = a.row - radius; row <= a.row + radius; row++)
        for (let col = a.col - radius; col <= a.col + radius; col++) {
          const dist = Math.hypot(col - a.col, row - a.row, da)
          if (dist <= radius + 0.001 && (filled || dist > radius - shell)) {
            add(col, row, startDepth + da)
          }
        }
    return result
  }

  for (let ai = 0; ai < axial.length; ai++)
    for (let row = a.row - radius; row <= a.row + radius; row++)
      for (let col = a.col - radius; col <= a.col + radius; col++) {
        const radial = Math.hypot(col - a.col, row - a.row)
        const onCap = ai < shell || axial.length - 1 - ai < shell
        const onWall = radial > radius - shell
        if (radial <= radius + 0.001 && (filled || onCap || onWall)) add(col, row, axial[ai])
      }
  return result
}
