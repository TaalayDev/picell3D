import {
  areVoxelsInBounds,
  collectVoxelsInBox,
  flipVoxels,
  moveVoxels,
  rotateVoxels90,
} from '../lib/voxelSelection3D.js'
import { layerHasVoxel } from './layerModel.js'
import { isVoxelInsideEditBounds } from './viewGeometry.js'

function voxelsFit(voxels, width, height, depth, bounds) {
  return areVoxelsInBounds(voxels, width, height, depth) &&
    (!bounds || voxels.every(voxel => isVoxelInsideEditBounds(voxel.x, voxel.y, voxel.z, bounds)))
}

export function createSelection3D(layer, layerId, start, end, bounds = null) {
  const voxels = collectVoxelsInBox(layer, start, end).filter(voxel =>
    !bounds || isVoxelInsideEditBounds(voxel.x, voxel.y, voxel.z, bounds)
  )
  return voxels.length
    ? { layerId, source: voxels.map(voxel => ({ ...voxel })), voxels }
    : null
}

export function transformSelection3D(selection, transform, {
  width,
  height,
  depth,
  bounds = null,
}) {
  if (!selection) return null
  let voxels
  if (transform.type === 'move') {
    voxels = moveVoxels(selection.voxels, transform.dx, transform.dy, transform.dz)
  } else if (transform.type === 'flip') {
    voxels = flipVoxels(selection.voxels, transform.axis)
  } else if (transform.type === 'rotate') {
    voxels = rotateVoxels90(selection.voxels, transform.axis, transform.direction)
  } else {
    return null
  }
  return voxelsFit(voxels, width, height, depth, bounds) ? { ...selection, voxels } : null
}

export function applySelection3DToLayers(layers, selection, dimensions, bounds = null) {
  if (!selection || !voxelsFit(
    selection.voxels, dimensions.width, dimensions.height, dimensions.depth, bounds,
  )) return null
  const layerIndex = layers.findIndex(layer => layer.id === selection.layerId)
  if (layerIndex < 0) return null

  const affectedKeys = new Set([
    ...selection.source.map(voxel => `${voxel.x},${voxel.y},${voxel.z}`),
    ...selection.voxels.map(voxel => `${voxel.x},${voxel.y},${voxel.z}`),
  ])
  const layer = layers[layerIndex]
  const affectedRows = new Set([
    ...selection.source.map(voxel => voxel.y),
    ...selection.voxels.map(voxel => voxel.y),
  ])
  const voxels = layer.voxels.map((row, y) =>
    affectedRows.has(y) ? row.map(column => [...column]) : row
  )
  const voxelMaterials = { ...(layer.voxelMaterials || {}) }

  for (const voxel of selection.source) {
    voxels[voxel.y][voxel.x][voxel.z] = 'transparent'
    delete voxelMaterials[`${voxel.y},${voxel.x},${voxel.z}`]
  }
  for (const voxel of selection.voxels) {
    voxels[voxel.y][voxel.x][voxel.z] = voxel.color
    const key = `${voxel.y},${voxel.x},${voxel.z}`
    if (voxel.material && voxel.material !== 'solid') voxelMaterials[key] = voxel.material
    else delete voxelMaterials[key]
  }

  const nextLayers = [...layers]
  nextLayers[layerIndex] = { ...layer, voxels, voxelMaterials }
  return { layers: nextLayers, affectedCount: affectedKeys.size }
}

export function deleteSelection3DFromLayers(layers, selection) {
  if (!selection) return null
  const layerIndex = layers.findIndex(layer => layer.id === selection.layerId)
  if (layerIndex < 0) return null
  const layer = layers[layerIndex]
  const changedVoxels = selection.source.filter(voxel =>
    layerHasVoxel(layer, voxel.x, voxel.y, voxel.z)
  )
  if (!changedVoxels.length) return { layers, affectedCount: 0 }

  const affectedRows = new Set(changedVoxels.map(voxel => voxel.y))
  const voxels = layer.voxels.map((row, y) =>
    affectedRows.has(y) ? row.map(column => [...column]) : row
  )
  const voxelMaterials = { ...(layer.voxelMaterials || {}) }
  for (const voxel of changedVoxels) {
    voxels[voxel.y][voxel.x][voxel.z] = 'transparent'
    delete voxelMaterials[`${voxel.y},${voxel.x},${voxel.z}`]
  }
  const nextLayers = [...layers]
  nextLayers[layerIndex] = { ...layer, voxels, voxelMaterials }
  return { layers: nextLayers, affectedCount: changedVoxels.length }
}
