import {
  getCompositedVoxels,
  layerHasVoxel,
  resolveOperationLayerIndexes,
} from './layerModel.js'
import { isVoxelInsideEditBounds } from './viewGeometry.js'

function materialKey({ x, y, z }) {
  return `${y},${x},${z}`
}

export function normalizeVoxelTargets(targets, width, height, depth, bounds = null) {
  const unique = new Map()
  for (const target of targets || []) {
    const x = Math.round(target?.x)
    const y = Math.round(target?.y)
    const z = Math.round(target?.z)
    if (![x, y, z].every(Number.isFinite)) continue
    if (x < 0 || x >= width || y < 0 || y >= height || z < 0 || z >= depth) continue
    if (bounds && !isVoxelInsideEditBounds(x, y, z, bounds)) continue
    unique.set(`${x},${y},${z}`, { x, y, z })
  }
  return [...unique.values()]
}

/** Apply a color command without mutating the source layers. Returns null for a no-op. */
export function applyVoxelColor({
  layers,
  activeLayerId,
  scope = 'active',
  targets,
  color,
  width,
  height,
  depth,
  bounds = null,
}) {
  const normalized = normalizeVoxelTargets(targets, width, height, depth, bounds)
  const assignments = new Map()

  for (const voxel of normalized) {
    const key = materialKey(voxel)
    for (const layerIndex of resolveOperationLayerIndexes(layers, activeLayerId, scope, voxel)) {
      const layer = layers[layerIndex]
      const currentColor = layer?.voxels?.[voxel.y]?.[voxel.x]?.[voxel.z] ?? 'transparent'
      const removesMaterial = color === 'transparent' && Boolean(layer?.voxelMaterials?.[key])
      if (currentColor === color && !removesMaterial) continue
      if (!assignments.has(layerIndex)) assignments.set(layerIndex, [])
      assignments.get(layerIndex).push(voxel)
    }
  }
  if (!assignments.size) return null

  const nextLayers = [...layers]
  let affectedCount = 0
  for (const [layerIndex, voxelsToPaint] of assignments) {
    const layer = layers[layerIndex]
    const affectedRows = new Set(voxelsToPaint.map(voxel => voxel.y))
    const voxels = layer.voxels.map((row, y) =>
      affectedRows.has(y) ? row.map(column => [...column]) : row
    )
    const voxelMaterials = { ...(layer.voxelMaterials || {}) }
    for (const voxel of voxelsToPaint) {
      voxels[voxel.y][voxel.x][voxel.z] = color
      if (color === 'transparent') delete voxelMaterials[materialKey(voxel)]
      affectedCount += 1
    }
    nextLayers[layerIndex] = { ...layer, voxels, voxelMaterials }
  }
  return { layers: nextLayers, affectedCount }
}

/** Apply a material command to occupied voxels. Returns null for a no-op. */
export function applyVoxelMaterial({
  layers,
  activeLayerId,
  scope = 'active',
  targets,
  material,
  width,
  height,
  depth,
  bounds = null,
}) {
  if (!layers.some(layer => layer.id === activeLayerId)) return null
  const composited = getCompositedVoxels(layers, width, height, depth)
  const normalized = normalizeVoxelTargets(targets, width, height, depth, bounds)
  const assignments = new Map()

  for (const voxel of normalized) {
    if (!layerHasVoxel({ voxels: composited }, voxel.x, voxel.y, voxel.z)) continue
    for (const layerIndex of resolveOperationLayerIndexes(layers, activeLayerId, scope, voxel)) {
      const layer = layers[layerIndex]
      if (!layerHasVoxel(layer, voxel.x, voxel.y, voxel.z)) continue
      const currentMaterial = layer.voxelMaterials?.[materialKey(voxel)] ?? 'solid'
      if (currentMaterial === material) continue
      if (!assignments.has(layerIndex)) assignments.set(layerIndex, [])
      assignments.get(layerIndex).push(voxel)
    }
  }
  if (!assignments.size) return null

  const nextLayers = [...layers]
  let affectedCount = 0
  for (const [layerIndex, voxelsToPaint] of assignments) {
    const layer = layers[layerIndex]
    const voxelMaterials = { ...(layer.voxelMaterials || {}) }
    for (const voxel of voxelsToPaint) {
      const key = materialKey(voxel)
      if (material === 'solid') delete voxelMaterials[key]
      else voxelMaterials[key] = material
      affectedCount += 1
    }
    nextLayers[layerIndex] = { ...layer, voxelMaterials }
  }
  return { layers: nextLayers, affectedCount }
}

/** Collect a 3D flood-fill region without changing any layer data. */
export function collectFloodFillTargets({
  voxels,
  start,
  scope = 'side',
  faceNormal,
  width,
  height,
  depth,
  bounds = null,
}) {
  const [startVoxel] = normalizeVoxelTargets([start], width, height, depth, bounds)
  if (!startVoxel) return []
  const { x, y, z } = startVoxel
  const targetColor = voxels[y]?.[x]?.[z]
  if (!targetColor || targetColor === 'transparent') return []

  const inside = (vx, vy, vz) => vx >= 0 && vx < width && vy >= 0 && vy < height &&
    vz >= 0 && vz < depth && (!bounds || isVoxelInsideEditBounds(vx, vy, vz, bounds))
  const colorAt = (vx, vy, vz) => inside(vx, vy, vz) ? voxels[vy][vx][vz] : 'transparent'
  const targets = []
  const visited = new Set()
  const stack = [[x, y, z]]

  if (scope === 'all') {
    const neighbors = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
    while (stack.length) {
      const [vx, vy, vz] = stack.pop()
      const key = `${vx},${vy},${vz}`
      if (visited.has(key) || colorAt(vx, vy, vz) !== targetColor) continue
      visited.add(key)
      targets.push({ x: vx, y: vy, z: vz })
      for (const [dx, dy, dz] of neighbors) stack.push([vx + dx, vy + dy, vz + dz])
    }
    return targets
  }

  const normal = faceNormal || { x: 0, y: 0, z: 1 }
  const magnitudes = [Math.abs(normal.x || 0), Math.abs(normal.y || 0), Math.abs(normal.z || 0)]
  const axis = magnitudes[0] >= magnitudes[1] && magnitudes[0] >= magnitudes[2]
    ? 'x'
    : magnitudes[1] >= magnitudes[2] ? 'y' : 'z'
  const sign = (normal[axis] || 0) >= 0 ? 1 : -1
  // World +Y points toward decreasing voxel Y.
  const outward = axis === 'x' ? [sign, 0, 0] : axis === 'y' ? [0, -sign, 0] : [0, 0, sign]
  const planeNeighbors = axis === 'x'
    ? [[0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
    : axis === 'y'
      ? [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]
      : [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0]]
  const planeValue = axis === 'x' ? x : axis === 'y' ? y : z

  while (stack.length) {
    const [vx, vy, vz] = stack.pop()
    const key = `${vx},${vy},${vz}`
    if (visited.has(key)) continue
    visited.add(key)
    if ((axis === 'x' ? vx : axis === 'y' ? vy : vz) !== planeValue) continue
    if (colorAt(vx, vy, vz) !== targetColor) continue
    if (colorAt(vx + outward[0], vy + outward[1], vz + outward[2]) !== 'transparent') continue
    targets.push({ x: vx, y: vy, z: vz })
    for (const [dx, dy, dz] of planeNeighbors) stack.push([vx + dx, vy + dy, vz + dz])
  }
  return targets
}
