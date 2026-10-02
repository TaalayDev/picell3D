import test from 'node:test'
import assert from 'node:assert/strict'
import {
  cloneLayer,
  getCompositedMaterials,
  getCompositedVoxels,
  makeEmptyVoxels,
  mergeVisibleLayers,
  resizeLayerCanvases,
  resizeLayerDepth,
  resolveOperationLayerIndexes,
} from '../src/store/layerModel.js'
import { appendHistory, snapshotHistory } from '../src/store/history.js'

function layer(id, color = 'transparent', visible = true) {
  const voxels = makeEmptyVoxels(2, 2, 3)
  voxels[0][0][1] = color
  return { id, name: id, visible, opacity: 1, voxels, voxelMaterials: {} }
}

test('layer cloning and history snapshots do not share mutable voxel data', () => {
  const source = layer('source', '#fff')
  const clone = cloneLayer(source)
  clone.voxels[0][0][1] = '#000'
  assert.equal(source.voxels[0][0][1], '#fff')

  const snapshot = snapshotHistory({ layers: [source], editBounds: { minX: 0 }, editBoundsEnabled: true })
  snapshot.layers[0].voxels[0][0][1] = '#f00'
  assert.equal(source.voxels[0][0][1], '#fff')
})

test('compositing respects visibility and top-layer order', () => {
  const bottom = layer('bottom', '#111')
  const top = layer('top', '#eee')
  assert.equal(getCompositedVoxels([bottom, top], 2, 2, 3)[0][0][1], '#eee')
  top.visible = false
  assert.equal(getCompositedVoxels([bottom, top], 2, 2, 3)[0][0][1], '#111')
})

test('material compositing supports upper-layer solid overrides', () => {
  const bottom = layer('bottom')
  const top = layer('top')
  bottom.voxelMaterials['0,0,1'] = 'metal'
  top.voxelMaterials['0,0,1'] = 'solid'
  assert.deepEqual(getCompositedMaterials([bottom, top]), {})
})

test('operation layer scope resolves active, visible, and topmost layers', () => {
  const bottom = layer('bottom', '#111')
  const top = layer('top', '#eee')
  const voxel = { x: 0, y: 0, z: 1 }
  assert.deepEqual(resolveOperationLayerIndexes([bottom, top], 'bottom', 'active', voxel), [0])
  assert.deepEqual(resolveOperationLayerIndexes([bottom, top], 'bottom', 'all-visible', voxel), [0, 1])
  assert.deepEqual(resolveOperationLayerIndexes([bottom, top], 'bottom', 'topmost', voxel), [1])
})

test('canvas and depth resizing preserve voxel placement rules', () => {
  const source = layer('source', '#fff')
  const canvas = resizeLayerCanvases([source], 2, 2, 4, 4, 3)
  assert.deepEqual([canvas.offsetX, canvas.offsetY], [1, 1])
  assert.equal(canvas.layers[0].voxels[1][1][1], '#fff')

  const depth = resizeLayerDepth([source], 2, 2, 3, 5)
  assert.equal(depth.offsetZ, 1)
  assert.equal(depth.layers[0].voxels[0][0][2], '#fff')
})

test('merging keeps hidden layers and composites visible layers', () => {
  const bottom = layer('bottom', '#111')
  const top = layer('top', '#eee')
  const hidden = layer('hidden', '#f00', false)
  const result = mergeVisibleLayers([bottom, top, hidden], 2, 2, 3)
  assert.equal(result.layers[0].voxels[0][0][1], '#eee')
  assert.equal(result.layers[1], hidden)
})

test('history is capped at fifty entries', () => {
  let stack = []
  for (let index = 0; index < 60; index++) stack = appendHistory(stack, index)
  assert.equal(stack.length, 50)
  assert.equal(stack[0], 10)
  assert.equal(stack[49], 59)
})
