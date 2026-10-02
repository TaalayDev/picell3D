import test from 'node:test'
import assert from 'node:assert/strict'
import { makeEmptyVoxels } from '../src/store/layerModel.js'
import {
  applySelection3DToLayers,
  createSelection3D,
  deleteSelection3DFromLayers,
  duplicateSelection3DToLayers,
  moveSelection3DToNewLayer,
  transformSelection3D,
} from '../src/store/selection3DCommands.js'

const dimensions = { width: 4, height: 4, depth: 4 }

function makeLayer() {
  const voxels = makeEmptyVoxels(dimensions.width, dimensions.height, dimensions.depth)
  voxels[1][1][1] = '#f00'
  voxels[1][2][1] = '#0f0'
  return {
    id: 'layer', name: 'Layer', visible: true, opacity: 1, voxels,
    voxelMaterials: { '1,1,1': 'metal' },
  }
}

test('3D selection creation captures colors and materials inside the box', () => {
  const selection = createSelection3D(
    makeLayer(), 'layer', { x: 0, y: 0, z: 0 }, { x: 1, y: 2, z: 2 },
  )
  assert.equal(selection.voxels.length, 1)
  assert.deepEqual(selection.voxels[0], {
    x: 1, y: 1, z: 1, color: '#f00', material: 'metal',
  })
  assert.notEqual(selection.source[0], selection.voxels[0])
})

test('3D transforms reject movement outside the canvas or edit bounds', () => {
  const selection = createSelection3D(
    makeLayer(), 'layer', { x: 1, y: 1, z: 1 }, { x: 2, y: 1, z: 1 },
  )
  const moved = transformSelection3D(selection, { type: 'move', dx: 0, dy: 1, dz: 0 }, dimensions)
  assert.deepEqual(moved.voxels.map(({ x, y, z }) => [x, y, z]), [[1, 2, 1], [2, 2, 1]])
  assert.equal(transformSelection3D(
    selection, { type: 'move', dx: -2, dy: 0, dz: 0 }, dimensions,
  ), null)

  const bounds = { minX: 0, maxX: 3, minY: 0, maxY: 1, minZ: 0, maxZ: 3 }
  assert.equal(transformSelection3D(
    selection, { type: 'move', dx: 0, dy: 1, dz: 0 }, { ...dimensions, bounds },
  ), null)
})

test('applying a 3D transform moves voxel color and material immutably', () => {
  const layer = makeLayer()
  const selection = createSelection3D(
    layer, 'layer', { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 },
  )
  const moved = transformSelection3D(selection, { type: 'move', dx: 0, dy: 1, dz: 0 }, dimensions)
  const result = applySelection3DToLayers([layer], moved, dimensions)
  assert.equal(result.affectedCount, 2)
  assert.equal(result.layers[0].voxels[1][1][1], 'transparent')
  assert.equal(result.layers[0].voxels[2][1][1], '#f00')
  assert.equal(result.layers[0].voxelMaterials['1,1,1'], undefined)
  assert.equal(result.layers[0].voxelMaterials['2,1,1'], 'metal')
  assert.equal(layer.voxels[1][1][1], '#f00')
})

test('deleting a 3D selection clears only original occupied voxels', () => {
  const layer = makeLayer()
  const selection = createSelection3D(
    layer, 'layer', { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 },
  )
  const result = deleteSelection3DFromLayers([layer], selection)
  assert.equal(result.affectedCount, 1)
  assert.equal(result.layers[0].voxels[1][1][1], 'transparent')
  assert.equal(result.layers[0].voxels[1][2][1], '#0f0')
  assert.equal(layer.voxels[1][1][1], '#f00')
})

test('duplicating a transformed selection keeps the source voxels', () => {
  const source = makeLayer()
  const selection = createSelection3D(
    source, 'layer', { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 },
  )
  const moved = transformSelection3D(selection, { type: 'move', dx: 0, dy: 1, dz: 0 }, dimensions)
  const result = duplicateSelection3DToLayers([source], moved, dimensions)
  assert.equal(result.affectedCount, 1)
  assert.equal(result.layers[0].voxels[1][1][1], '#f00')
  assert.equal(result.layers[0].voxels[2][1][1], '#f00')
  assert.equal(result.layers[0].voxelMaterials['2,1,1'], 'metal')
})

test('moving a selection to a new layer clears its source and activates the new layer', () => {
  const source = makeLayer()
  const selection = createSelection3D(
    source, 'layer', { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 },
  )
  const result = moveSelection3DToNewLayer([source], selection, dimensions)
  assert.equal(result.layers.length, 2)
  assert.equal(result.layers[0].voxels[1][1][1], 'transparent')
  assert.equal(result.layers[1].voxels[1][1][1], '#f00')
  assert.equal(result.layers[1].voxelMaterials['1,1,1'], 'metal')
  assert.equal(result.activeLayerId, result.layers[1].id)
})
