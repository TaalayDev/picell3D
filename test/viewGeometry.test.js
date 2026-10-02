import test from 'node:test'
import assert from 'node:assert/strict'
import {
  applyEditBoundsAxisLocks,
  boundsFromViewRect,
  getExistingVoxelTargets,
  getThroughVoxelTargets,
  getViewDepthSize,
  getViewRayCoords,
  getViewSize,
  getVoxelTargets,
  makeFullEditBounds,
  projectEditBoundsToView,
} from '../src/store/viewGeometry.js'

const W = 4
const H = 3
const D = 5

function emptyVoxels() {
  return Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(D).fill('transparent'))
  )
}

test('view sizes and ray depths follow their projected axes', () => {
  assert.deepEqual(getViewSize('front', W, H, D), { w: W, h: H })
  assert.deepEqual(getViewSize('left', W, H, D), { w: D, h: H })
  assert.deepEqual(getViewSize('top', W, H, D), { w: W, h: D })
  assert.equal(getViewDepthSize('front', W, H, D), D)
  assert.equal(getViewDepthSize('left', W, H, D), W)
  assert.equal(getViewDepthSize('top', W, H, D), H)
})

test('opposite views traverse the same ray in reverse order', () => {
  const front = getViewRayCoords(1, 2, 'front', W, H, D)
  const back = getViewRayCoords(W - 1 - 1, 2, 'back', W, H, D)
  assert.deepEqual(back, [...front].reverse())

  const left = getViewRayCoords(3, 1, 'left', W, H, D)
  const right = getViewRayCoords(D - 1 - 3, 1, 'right', W, H, D)
  assert.deepEqual(right, [...left].reverse())
})

test('edit bounds projection round-trips for mirrored views', () => {
  const bounds = { minX: 1, maxX: 2, minY: 0, maxY: 1, minZ: 1, maxZ: 3 }
  for (const view of ['front', 'back', 'left', 'right', 'top', 'bottom']) {
    const rect = projectEditBoundsToView(bounds, view, W, H, D)
    assert.deepEqual(boundsFromViewRect(bounds, view, rect, W, H, D), bounds)
  }
})

test('axis locks preserve only locked coordinates', () => {
  const current = makeFullEditBounds(W, H, D)
  const next = { minX: 1, maxX: 2, minY: 1, maxY: 1, minZ: 2, maxZ: 3 }
  assert.deepEqual(applyEditBoundsAxisLocks(current, next, { x: true, z: true }), {
    minX: 0, maxX: 3, minY: 1, maxY: 1, minZ: 0, maxZ: 4,
  })
})

test('depth range supports inward, outward, and both directions', () => {
  assert.deepEqual(getVoxelTargets(1, 1, 'front', 2, W, H, D), [
    { x: 1, y: 1, z: 4 }, { x: 1, y: 1, z: 3 },
  ])
  assert.deepEqual(getVoxelTargets(1, 1, 'front', 2, W, H, D, null, { start: 1, end: 2, direction: 'outward' }), [
    { x: 1, y: 1, z: 0 }, { x: 1, y: 1, z: 1 },
  ])
  assert.equal(getVoxelTargets(1, 1, 'front', 3, W, H, D, null, { start: 1, end: 3, direction: 'both' }).length, 5)
})

test('through variants distinguish occupied, solid, and contiguous rays', () => {
  const voxels = emptyVoxels()
  voxels[1][1][4] = '#fff'
  voxels[1][1][3] = '#aaa'
  voxels[1][1][1] = '#333'

  assert.equal(getThroughVoxelTargets(voxels, 1, 1, 'front', 'solid', W, H, D).length, D)
  assert.deepEqual(getExistingVoxelTargets(voxels, 1, 1, 'front', 2, W, H, D), [
    { x: 1, y: 1, z: 4 }, { x: 1, y: 1, z: 3 },
  ])
  assert.deepEqual(getThroughVoxelTargets(voxels, 1, 1, 'front', 'contiguous', W, H, D), [
    { x: 1, y: 1, z: 4 }, { x: 1, y: 1, z: 3 },
  ])
  assert.equal(getThroughVoxelTargets(voxels, 1, 1, 'front', 'occupied', W, H, D).length, 3)
})
