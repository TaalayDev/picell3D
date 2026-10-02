import test from 'node:test'
import assert from 'node:assert/strict'
import { makeEmptyVoxels } from '../src/store/layerModel.js'
import { renderDepthMap2D, renderView2D } from '../src/store/viewProjection.js'

const W = 2
const H = 2
const D = 3

test('opposite projections choose the nearest voxel from opposite directions', () => {
  const voxels = makeEmptyVoxels(W, H, D)
  voxels[0][0][0] = '#back'
  voxels[0][0][2] = '#front'
  assert.equal(renderView2D(voxels, 'front', W, H, D)[0][0], '#front')
  assert.equal(renderView2D(voxels, 'back', W, H, D)[0][W - 1], '#back')
})

test('side and vertical projections have the dimensions of their visible axes', () => {
  const voxels = makeEmptyVoxels(W, H, D)
  assert.deepEqual(renderView2D(voxels, 'left', W, H, D).map(row => row.length), [D, D])
  assert.equal(renderView2D(voxels, 'top', W, H, D).length, D)
})

test('depth maps report view-relative depth and null for empty cells', () => {
  const voxels = makeEmptyVoxels(W, H, D)
  voxels[0][0][2] = '#fff'
  const front = renderDepthMap2D(voxels, 'front', W, H, D)
  assert.equal(front[0][0], 1)
  assert.equal(front[1][1], null)

  voxels[1][1][0] = '#fff'
  assert.equal(renderDepthMap2D(voxels, 'bottom', W, H, D)[0][1], 0)
})
