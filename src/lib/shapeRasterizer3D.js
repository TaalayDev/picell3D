import { computeShapePixels } from './shapeRasterizer.js'

export const SHAPE_TOOLS_3D = new Set(['rect', 'circle', 'ellipse', 'line'])

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
