let layerSequence = 0

export function makeEmptyVoxels(width, height, depth) {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () => Array(depth).fill('transparent'))
  )
}

export function nextLayerId() {
  layerSequence += 1
  return `layer-${layerSequence}`
}

/** Keep generated IDs ahead of IDs restored from a project file. */
export function syncLayerSequence(layers) {
  for (const layer of layers || []) {
    const match = /^layer-(\d+)$/.exec(layer.id)
    if (match) layerSequence = Math.max(layerSequence, Number(match[1]))
  }
}

export function createLayer(width, height, depth, name) {
  const id = nextLayerId()
  return {
    id,
    name: name ?? `Layer ${layerSequence}`,
    visible: true,
    opacity: 1,
    voxels: makeEmptyVoxels(width, height, depth),
    voxelMaterials: {},
  }
}

export function cloneLayer(layer) {
  return {
    ...layer,
    voxels: layer.voxels.map(plane => plane.map(row => [...row])),
    voxelMaterials: { ...(layer.voxelMaterials || {}) },
  }
}

export function snapshotLayers(layers) {
  return layers.map(cloneLayer)
}

export function layerHasVoxel(layer, x, y, z) {
  const color = layer?.voxels?.[y]?.[x]?.[z]
  return Boolean(color && color !== 'transparent')
}

export function resolveOperationLayerIndexes(layers, activeLayerId, scope, voxel) {
  const activeIndex = layers.findIndex(layer => layer.id === activeLayerId)
  if (activeIndex < 0) return []
  if (scope === 'all-visible') {
    const occupied = layers
      .map((layer, index) => ({ layer, index }))
      .filter(({ layer }) => layer.visible && layerHasVoxel(layer, voxel.x, voxel.y, voxel.z))
      .map(({ index }) => index)
    return occupied.length ? occupied : [activeIndex]
  }
  if (scope === 'topmost') {
    for (let index = layers.length - 1; index >= 0; index--) {
      if (layers[index].visible && layerHasVoxel(layers[index], voxel.x, voxel.y, voxel.z)) return [index]
    }
  }
  return [activeIndex]
}

export function getCompositedVoxels(layers, width, height, depth) {
  const result = makeEmptyVoxels(width, height, depth)
  for (const layer of layers) {
    if (!layer.visible) continue
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++)
        for (let z = 0; z < depth; z++) {
          const color = layer.voxels[y]?.[x]?.[z]
          if (color && color !== 'transparent') result[y][x][z] = color
        }
  }
  return result
}

export function getCompositedMaterials(layers) {
  const result = {}
  for (const layer of layers) {
    if (!layer.visible) continue
    for (const [key, material] of Object.entries(layer.voxelMaterials || {})) {
      if (material && material !== 'solid') result[key] = material
      else if (material === 'solid') delete result[key]
    }
  }
  return result
}

export function duplicateLayerById(layers, id) {
  const index = layers.findIndex(layer => layer.id === id)
  if (index < 0) return null
  const source = layers[index]
  const duplicate = {
    ...cloneLayer(source),
    id: nextLayerId(),
    name: `${source.name} copy`,
  }
  const next = [...layers]
  next.splice(index + 1, 0, duplicate)
  return { layers: next, activeLayerId: duplicate.id }
}

export function mergeVisibleLayers(layers, width, height, depth) {
  const visible = layers.filter(layer => layer.visible)
  if (visible.length <= 1) return null
  const mergedLayer = {
    id: nextLayerId(),
    name: 'Merged',
    visible: true,
    opacity: 1,
    voxels: getCompositedVoxels(visible, width, height, depth),
    voxelMaterials: {},
  }
  return {
    layers: [mergedLayer, ...layers.filter(layer => !layer.visible)],
    activeLayerId: mergedLayer.id,
  }
}

export function resizeLayerCanvases(layers, oldWidth, oldHeight, newWidth, newHeight, depth) {
  const offsetX = newWidth > oldWidth ? Math.floor((newWidth - oldWidth) / 2) : 0
  const offsetY = newHeight > oldHeight ? Math.floor((newHeight - oldHeight) / 2) : 0
  const resized = layers.map(layer => {
    const voxels = makeEmptyVoxels(newWidth, newHeight, depth)
    for (let y = 0; y < oldHeight; y++)
      for (let x = 0; x < oldWidth; x++)
        for (let z = 0; z < depth; z++) {
          const nextY = y + offsetY
          const nextX = x + offsetX
          if (nextY >= 0 && nextY < newHeight && nextX >= 0 && nextX < newWidth) {
            voxels[nextY][nextX][z] = layer.voxels[y][x][z]
          }
        }
    return { ...layer, voxels }
  })
  return { layers: resized, offsetX, offsetY }
}

export function resizeLayerDepth(layers, width, height, oldDepth, newDepth) {
  const offsetZ = newDepth > oldDepth ? Math.floor((newDepth - oldDepth) / 2) : 0
  const resized = layers.map(layer => {
    const voxels = makeEmptyVoxels(width, height, newDepth)
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++)
        for (let z = 0; z < oldDepth; z++) {
          const nextZ = z + offsetZ
          if (nextZ >= 0 && nextZ < newDepth) voxels[y][x][nextZ] = layer.voxels[y][x][z]
        }
    return { ...layer, voxels }
  })
  return { layers: resized, offsetZ }
}
