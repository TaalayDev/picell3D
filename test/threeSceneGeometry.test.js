import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import {
  EDIT_UNIT,
  getDrawingPlaneSpec,
  isLockedPlaneActive,
  isPointInsideVoxelBounds,
  voxelCenterWorld,
  worldToVoxel,
} from '../src/components/preview/threeSceneGeometry.js'

test('voxel centers convert back to their voxel coordinates', () => {
  const dimensions = [7, 6, 5]
  for (const voxel of [[0, 0, 0], [3, 2, 4], [6, 5, 2]]) {
    const center = voxelCenterWorld(...voxel, ...dimensions)
    assert.deepEqual(worldToVoxel(center.x, center.y, center.z, ...dimensions), {
      x: voxel[0], y: voxel[1], z: voxel[2],
    })
  }
})

test('world coordinates clamp to the voxel grid', () => {
  assert.deepEqual(worldToVoxel(-100, 100, 100, 4, 3, 2), { x: 0, y: 0, z: 1 })
})

test('drawing plane normal and dimensions follow the selected axis', () => {
  const base = { canvasWidth: 8, canvasHeight: 6, depthDimension: 4, planeDepth: 2 }
  const xPlane = getDrawingPlaneSpec({ ...base, planeAxis: 'x' })
  assert.equal(xPlane.axis, 'x')
  assert.equal(xPlane.width, 4 * EDIT_UNIT)
  assert.equal(xPlane.height, 6 * EDIT_UNIT)
  assert.deepEqual(xPlane.normal.toArray(), [1, 0, 0])

  const yPlane = getDrawingPlaneSpec({ ...base, planeAxis: 'y' })
  assert.equal(yPlane.width, 8 * EDIT_UNIT)
  assert.equal(yPlane.height, 4 * EDIT_UNIT)
  assert.deepEqual(yPlane.normal.toArray(), [0, 1, 0])
})

test('locked plane activation is limited to compatible tools', () => {
  assert.equal(isLockedPlaneActive({ planeLock: true, activeTool: 'pencil' }), true)
  assert.equal(isLockedPlaneActive({ planeLock: true, activeTool: 'fill' }), false)
  assert.equal(isLockedPlaneActive({ planeLock: false, activeTool: 'pencil' }), false)
})

test('point bounds include model edges and reject outside points', () => {
  assert.equal(isPointInsideVoxelBounds(new THREE.Vector3(0, 0, 0), 4, 3, 2), true)
  assert.equal(isPointInsideVoxelBounds(new THREE.Vector3(4, 0, 0), 4, 3, 2), false)
})
