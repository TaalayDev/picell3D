/** Canvas dimensions for each orthographic view. */
export function getViewSize(view, width, height, depth) {
  if (view === 'top' || view === 'bottom') return { w: width, h: depth }
  if (view === 'left' || view === 'right') return { w: depth, h: height }
  return { w: width, h: height }
}

/** Number of voxels along the camera ray for an orthographic view. */
export function getViewDepthSize(view, width, height, depth) {
  if (view === 'left' || view === 'right') return width
  if (view === 'top' || view === 'bottom') return height
  return depth
}

export function makeFullEditBounds(width, height, depth) {
  return {
    minX: 0, maxX: width - 1,
    minY: 0, maxY: height - 1,
    minZ: 0, maxZ: depth - 1,
  }
}

export function isVoxelInsideEditBounds(x, y, z, bounds) {
  return !bounds || (
    x >= bounds.minX && x <= bounds.maxX
    && y >= bounds.minY && y <= bounds.maxY
    && z >= bounds.minZ && z <= bounds.maxZ
  )
}

/** Project the shared 3D edit box into the coordinate system of a 2D view. */
export function projectEditBoundsToView(bounds, view, width, height, depth) {
  const box = bounds || makeFullEditBounds(width, height, depth)
  switch (view) {
    case 'front': return { x1: box.minX, y1: box.minY, x2: box.maxX, y2: box.maxY }
    case 'back': return { x1: width - 1 - box.maxX, y1: box.minY, x2: width - 1 - box.minX, y2: box.maxY }
    case 'left': return { x1: box.minZ, y1: box.minY, x2: box.maxZ, y2: box.maxY }
    case 'right': return { x1: depth - 1 - box.maxZ, y1: box.minY, x2: depth - 1 - box.minZ, y2: box.maxY }
    case 'top':
    case 'bottom': return { x1: box.minX, y1: box.minZ, x2: box.maxX, y2: box.maxZ }
    default: return { x1: 0, y1: 0, x2: width - 1, y2: height - 1 }
  }
}

export function boundsFromViewRect(bounds, view, rect, width, height, depth) {
  const next = { ...(bounds || makeFullEditBounds(width, height, depth)) }
  const x1 = Math.min(rect.x1, rect.x2)
  const x2 = Math.max(rect.x1, rect.x2)
  const y1 = Math.min(rect.y1, rect.y2)
  const y2 = Math.max(rect.y1, rect.y2)
  if (view === 'front') Object.assign(next, { minX: x1, maxX: x2, minY: y1, maxY: y2 })
  if (view === 'back') Object.assign(next, { minX: width - 1 - x2, maxX: width - 1 - x1, minY: y1, maxY: y2 })
  if (view === 'left') Object.assign(next, { minZ: x1, maxZ: x2, minY: y1, maxY: y2 })
  if (view === 'right') Object.assign(next, { minZ: depth - 1 - x2, maxZ: depth - 1 - x1, minY: y1, maxY: y2 })
  if (view === 'top' || view === 'bottom') Object.assign(next, { minX: x1, maxX: x2, minZ: y1, maxZ: y2 })
  return next
}

export function applyEditBoundsAxisLocks(current, next, locks = {}) {
  const result = { ...next }
  for (const axis of ['X', 'Y', 'Z']) {
    if (!locks[axis.toLowerCase()]) continue
    result[`min${axis}`] = current[`min${axis}`]
    result[`max${axis}`] = current[`max${axis}`]
  }
  return result
}

export const OPPOSITE_VIEW = {
  front: 'back', back: 'front',
  left: 'right', right: 'left',
  top: 'bottom', bottom: 'top',
}

/** Ordered camera-to-back voxel coordinates for one canvas ray. */
export function getViewRayCoords(col, row, view, width, height, depth, bounds = null) {
  const box = bounds || makeFullEditBounds(width, height, depth)
  const result = []
  const add = (x, y, z) => {
    if (isVoxelInsideEditBounds(x, y, z, box)) result.push({ x, y, z })
  }
  if (view === 'front') for (let z = box.maxZ; z >= box.minZ; z--) add(col, row, z)
  if (view === 'back') for (let z = box.minZ; z <= box.maxZ; z++) add(width - 1 - col, row, z)
  if (view === 'left') for (let x = box.minX; x <= box.maxX; x++) add(x, row, col)
  if (view === 'right') for (let x = box.maxX; x >= box.minX; x--) add(x, row, depth - 1 - col)
  if (view === 'top') for (let y = box.minY; y <= box.maxY; y++) add(col, y, row)
  if (view === 'bottom') for (let y = box.maxY; y >= box.minY; y--) add(col, y, row)
  return result
}

/** Resolve a depth range at one canvas coordinate into voxel coordinates. */
export function getVoxelTargets(col, row, view, paintDepth, width, height, depth, bounds = null, range = null) {
  const ray = getViewRayCoords(col, row, view, width, height, depth, bounds)
  const start = Math.max(1, Math.round(range?.start ?? 1))
  const end = Math.max(start, Math.round(range?.end ?? paintDepth))
  const direction = range?.direction ?? 'inward'
  const slice = source => source.slice(start - 1, end)
  if (direction === 'outward') return slice([...ray].reverse())
  if (direction === 'both') {
    const targets = [...slice(ray), ...slice([...ray].reverse())]
    return targets.filter((voxel, index) => targets.findIndex(other =>
      other.x === voxel.x && other.y === voxel.y && other.z === voxel.z
    ) === index)
  }
  return slice(ray)
}

/** Return up to maxCount occupied voxels from the visible side of a ray. */
export function getExistingVoxelTargets(voxels, col, row, view, maxCount, width, height, depth, bounds = null) {
  return getViewRayCoords(col, row, view, width, height, depth, bounds)
    .filter(({ x, y, z }) => {
      const color = voxels[y]?.[x]?.[z]
      return color && color !== 'transparent'
    })
    .slice(0, maxCount)
}

export function getThroughVoxelTargets(voxels, col, row, view, variant, width, height, depth, bounds = null) {
  const ray = getViewRayCoords(col, row, view, width, height, depth, bounds)
  if (variant === 'solid') return ray
  const occupied = ({ x, y, z }) => {
    const color = voxels[y]?.[x]?.[z]
    return Boolean(color && color !== 'transparent')
  }
  if (variant === 'contiguous') {
    const result = []
    let started = false
    for (const voxel of ray) {
      if (!occupied(voxel)) {
        if (started) break
        continue
      }
      started = true
      result.push(voxel)
    }
    return result
  }
  return ray.filter(occupied)
}

/** Place voxels relative to the first visible surface along a view ray. */
export function getSurfaceVoxelTargets(voxels, col, row, view, paintDepth, width, height, depth, bounds = null, range = null) {
  const results = []
  const box = bounds || makeFullEditBounds(width, height, depth)

  const scanAndPlace = (fromIndex, toIndex, getCoords) => {
    const directionStep = fromIndex <= toIndex ? 1 : -1
    let surfaceIndex = null
    for (let index = fromIndex; directionStep > 0 ? index <= toIndex : index >= toIndex; index += directionStep) {
      const [x, y, z] = getCoords(index)
      const color = voxels[y]?.[x]?.[z]
      if (color && color !== 'transparent') {
        surfaceIndex = index
        break
      }
    }

    const placementStart = surfaceIndex !== null ? surfaceIndex - directionStep : fromIndex
    const startDepth = Math.max(1, Math.round(range?.start ?? 1))
    const endDepth = Math.max(startDepth, Math.round(range?.end ?? paintDepth))
    const direction = range?.direction ?? 'outward'
    const offsets = []
    for (let value = startDepth - 1; value < endDepth; value++) {
      if (direction === 'inward' || direction === 'both') offsets.push(directionStep * value)
      if (direction === 'outward' || direction === 'both') offsets.push(-directionStep * value)
    }
    for (const offset of new Set(offsets)) {
      const [x, y, z] = getCoords(placementStart + offset)
      if (x < 0 || x >= width || y < 0 || y >= height || z < 0 || z >= depth) continue
      if (!results.some(target => target.x === x && target.y === y && target.z === z)) results.push({ x, y, z })
    }
  }

  switch (view) {
    case 'front': scanAndPlace(box.maxZ, box.minZ, index => [col, row, index]); break
    case 'back': scanAndPlace(box.minZ, box.maxZ, index => [width - 1 - col, row, index]); break
    case 'left': scanAndPlace(box.minX, box.maxX, index => [index, row, col]); break
    case 'right': scanAndPlace(box.maxX, box.minX, index => [index, row, depth - 1 - col]); break
    case 'top': scanAndPlace(box.minY, box.maxY, index => [col, index, row]); break
    case 'bottom': scanAndPlace(box.maxY, box.minY, index => [col, index, row]); break
    default: return getVoxelTargets(col, row, view, paintDepth, width, height, depth, box, range)
  }
  return results
}
