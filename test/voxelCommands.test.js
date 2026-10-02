import test from 'node:test'
import assert from 'node:assert/strict'
import { makeEmptyVoxels } from '../src/store/layerModel.js'
import {
  applyVoxelColor,
  applyVoxelMaterial,
  collectFloodFillTargets,
  normalizeVoxelTargets,
} from '../src/store/voxelCommands.js'

const W = 3
const H = 3
const D = 3

function layer(id, entries = [], visible = true) {
  const voxels = makeEmptyVoxels(W, H, D)
  for (const { x, y, z, color = '#fff' } of entries) voxels[y][x][z] = color
  return { id, name: id, visible, opacity: 1, voxels, voxelMaterials: {} }
}

const command = overrides => ({
  activeLayerId: 'bottom',
  scope: 'active',
  targets: [{ x: 1, y: 1, z: 1 }],
  width: W,
  height: H,
  depth: D,
  ...overrides,
})

test('target normalization rounds, deduplicates, and applies edit bounds', () => {
  const bounds = { minX: 1, maxX: 2, minY: 0, maxY: 2, minZ: 0, maxZ: 2 }
  assert.deepEqual(normalizeVoxelTargets([
    { x: 0, y: 1, z: 1 },
    { x: 1.2, y: 1, z: 1 },
    { x: 1, y: 1, z: 1 },
    { x: 20, y: 1, z: 1 },
    { x: Number.NaN, y: 1, z: 1 },
  ], W, H, D, bounds), [{ x: 1, y: 1, z: 1 }])
})

test('color commands use copy-on-write and return null for a no-op', () => {
  const source = layer('bottom')
  const result = applyVoxelColor(command({ layers: [source], color: '#f00' }))
  assert.equal(result.affectedCount, 1)
  assert.equal(result.layers[0].voxels[1][1][1], '#f00')
  assert.equal(source.voxels[1][1][1], 'transparent')
  assert.equal(result.layers[0].voxels[0], source.voxels[0])

  assert.equal(applyVoxelColor(command({ layers: result.layers, color: '#f00' })), null)
})

test('color commands respect visible and topmost layer scopes', () => {
  const occupied = [{ x: 1, y: 1, z: 1 }]
  const bottom = layer('bottom', occupied)
  const top = layer('top', occupied)
  const hidden = layer('hidden', occupied, false)
  const allVisible = applyVoxelColor(command({
    layers: [bottom, top, hidden], scope: 'all-visible', color: '#0f0',
  }))
  assert.equal(allVisible.affectedCount, 2)
  assert.equal(allVisible.layers[0].voxels[1][1][1], '#0f0')
  assert.equal(allVisible.layers[1].voxels[1][1][1], '#0f0')
  assert.equal(allVisible.layers[2], hidden)

  const topmost = applyVoxelColor(command({ layers: [bottom, top], scope: 'topmost', color: '#00f' }))
  assert.equal(topmost.layers[0], bottom)
  assert.equal(topmost.layers[1].voxels[1][1][1], '#00f')
})

test('erasing also removes per-voxel material', () => {
  const source = layer('bottom', [{ x: 1, y: 1, z: 1 }])
  source.voxelMaterials['1,1,1'] = 'metal'
  const result = applyVoxelColor(command({ layers: [source], color: 'transparent' }))
  assert.equal(result.layers[0].voxels[1][1][1], 'transparent')
  assert.equal(result.layers[0].voxelMaterials['1,1,1'], undefined)
  assert.equal(source.voxelMaterials['1,1,1'], 'metal')
})

test('material commands affect occupied targets and solid removes overrides', () => {
  const source = layer('bottom', [{ x: 1, y: 1, z: 1 }])
  const painted = applyVoxelMaterial(command({ layers: [source], material: 'metal' }))
  assert.equal(painted.affectedCount, 1)
  assert.equal(painted.layers[0].voxelMaterials['1,1,1'], 'metal')
  assert.equal(source.voxelMaterials['1,1,1'], undefined)

  const solid = applyVoxelMaterial(command({ layers: painted.layers, material: 'solid' }))
  assert.equal(solid.layers[0].voxelMaterials['1,1,1'], undefined)
  assert.equal(applyVoxelMaterial(command({
    layers: [source], material: 'metal', targets: [{ x: 0, y: 0, z: 0 }],
  })), null)
})

test('volume flood fill follows only the connected matching color', () => {
  const voxels = makeEmptyVoxels(W, H, D)
  voxels[1][1][1] = '#f00'
  voxels[1][2][1] = '#f00'
  voxels[0][0][0] = '#f00'
  voxels[1][1][2] = '#00f'
  const targets = collectFloodFillTargets({
    voxels, start: { x: 1, y: 1, z: 1 }, scope: 'all', width: W, height: H, depth: D,
  })
  assert.deepEqual(new Set(targets.map(({ x, y, z }) => `${x},${y},${z}`)), new Set(['1,1,1', '2,1,1']))
})

test('surface flood fill stays coplanar and skips faces hidden by another voxel', () => {
  const voxels = makeEmptyVoxels(W, H, D)
  voxels[1][0][1] = '#f00'
  voxels[1][1][1] = '#f00'
  voxels[1][1][2] = '#00f'
  const targets = collectFloodFillTargets({
    voxels,
    start: { x: 0, y: 1, z: 1 },
    scope: 'side',
    faceNormal: { x: 0, y: 0, z: 1 },
    width: W,
    height: H,
    depth: D,
  })
  assert.deepEqual(targets, [{ x: 0, y: 1, z: 1 }])
})
