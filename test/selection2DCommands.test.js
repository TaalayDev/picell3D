import test from 'node:test'
import assert from 'node:assert/strict'
import { makeEmptyVoxels } from '../src/store/layerModel.js'
import { getViewSize } from '../src/store/viewGeometry.js'
import { rotateBox, scaleBox } from '../src/lib/selectionTransform.js'
import {
  applyPasteTargets,
  collectPasteTargets,
  collectSelectionTargets,
  createSelectionClipboard,
  eraseSelectionTargets,
  flipClipboard,
  getSelectionVolumeBounds,
  normalizeSelection,
  shiftVoxelListZ,
} from '../src/store/selection2DCommands.js'

const dimensions = { width: 4, height: 3, depth: 5 }

function layer(id = 'active') {
  return {
    id,
    name: id,
    visible: true,
    opacity: 1,
    voxels: makeEmptyVoxels(dimensions.width, dimensions.height, dimensions.depth),
    voxelMaterials: {},
  }
}

test('2D selection normalization preserves mask metadata', () => {
  const mask = [[true, false], [true, true]]
  assert.deepEqual(normalizeSelection({ x1: 3, y1: 2, x2: 2, y2: 1, type: 'lasso', mask }), {
    x1: 2, y1: 1, x2: 3, y2: 2, type: 'lasso', mask, polygon: null,
  })
  assert.equal(normalizeSelection({ x1: Number.NaN, y1: 0, x2: 1, y2: 1 }), null)
})

test('selection targets honor masks and shared edit bounds', () => {
  const targets = collectSelectionTargets({
    selection: { x1: 0, y1: 0, x2: 1, y2: 0, mask: [[true, false]] },
    view: 'front',
    ...dimensions,
    bounds: { minX: 0, maxX: 3, minY: 0, maxY: 2, minZ: 1, maxZ: 2 },
  })
  assert.deepEqual(targets, [{ x: 0, y: 0, z: 2 }, { x: 0, y: 0, z: 1 }])
})

test('selection targets honor start, end, and direction depth controls', () => {
  const selection = { x1: 1, y1: 1, x2: 1, y2: 1 }
  const inward = collectSelectionTargets({
    selection, view: 'front', ...dimensions,
    range: { start: 2, end: 3, direction: 'inward' },
  })
  assert.deepEqual(inward, [{ x: 1, y: 1, z: 3 }, { x: 1, y: 1, z: 2 }])

  const outward = collectSelectionTargets({
    selection, view: 'front', ...dimensions,
    range: { start: 2, end: 3, direction: 'outward' },
  })
  assert.deepEqual(outward, [{ x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 2 }])
})

test('2D and 3D selections resolve to a shared 3D volume', () => {
  assert.deepEqual(getSelectionVolumeBounds({
    selection: { x1: 1, y1: 0, x2: 2, y2: 1 },
    view: 'front',
    ...dimensions,
    editBoundsEnabled: true,
    editBounds: { minX: 0, maxX: 3, minY: 0, maxY: 2, minZ: 1, maxZ: 3 },
  }), { minX: 1, maxX: 2, minY: 0, maxY: 1, minZ: 1, maxZ: 3 })

  assert.deepEqual(getSelectionVolumeBounds({
    selection3D: { voxels: [{ x: 3, y: 2, z: 4 }, { x: 1, y: 0, z: 2 }] },
    selection: { x1: 0, y1: 0, x2: 0, y2: 0 },
    view: 'front',
    ...dimensions,
  }), { minX: 1, maxX: 3, minY: 0, maxY: 2, minZ: 2, maxZ: 4 })
})

test('clipboard retains full voxel depth in every orthographic view', () => {
  for (const view of ['front', 'back', 'left', 'right', 'top', 'bottom']) {
    const source = layer('source')
    source.voxels[1][2][3] = '#f00'
    const size = getViewSize(view, dimensions.width, dimensions.height, dimensions.depth)
    const clipboard = createSelectionClipboard({
      selection: { x1: 0, y1: 0, x2: size.w - 1, y2: size.h - 1 },
      layers: [source],
      view,
      ...dimensions,
    })
    assert.equal(clipboard.voxelList.length, 1, view)
    assert.ok(Number.isInteger(clipboard.voxelList[0].depthIndex), view)
    const floatingPaste = { col: 0, row: 0, ...clipboard }
    const targets = collectPasteTargets({ floatingPaste, view, ...dimensions })
    assert.deepEqual(targets, [{ x: 2, y: 1, z: 3, color: '#f00' }], view)
  }
})

test('clipboard copies only the active layer and selected depth range', () => {
  const active = layer('active')
  const overlay = layer('overlay')
  active.voxels[1][1][3] = '#active'
  active.voxels[1][1][1] = '#outside-range'
  overlay.voxels[1][1][3] = '#overlay'
  const clipboard = createSelectionClipboard({
    selection: { x1: 1, y1: 1, x2: 1, y2: 1 },
    layers: [active, overlay],
    sourceLayerId: 'active',
    view: 'front',
    ...dimensions,
    range: { start: 2, end: 2, direction: 'inward' },
  })
  assert.deepEqual(clipboard.colors, [['#active']])
  assert.deepEqual(clipboard.voxelList.map(voxel => voxel.color), ['#active'])
})

test('erase removes voxel materials without mutating the source layer', () => {
  const source = layer()
  source.voxels[1][2][3] = '#f00'
  source.voxelMaterials['1,2,3'] = 'metal'
  const result = eraseSelectionTargets([source], 'active', [{ x: 2, y: 1, z: 3 }])
  assert.equal(result.affectedCount, 1)
  assert.equal(result.layers[0].voxels[1][2][3], 'transparent')
  assert.equal(result.layers[0].voxelMaterials['1,2,3'], undefined)
  assert.equal(source.voxels[1][2][3], '#f00')
  assert.equal(source.voxelMaterials['1,2,3'], 'metal')
})

test('paste is immutable, reports no-ops, and respects bounds', () => {
  const source = layer()
  const paste = {
    col: 1, row: 1, w: 1, h: 1, colors: [['#0f0']],
    voxelList: [{ dcol: 0, drow: 0, depthIndex: 0, color: '#0f0' }],
  }
  const targets = collectPasteTargets({
    floatingPaste: paste,
    view: 'front',
    ...dimensions,
    bounds: { minX: 0, maxX: 3, minY: 0, maxY: 2, minZ: 4, maxZ: 4 },
  })
  const result = applyPasteTargets([source], 'active', targets)
  assert.equal(result.affectedCount, 1)
  assert.equal(result.layers[0].voxels[1][1][4], '#0f0')
  assert.equal(source.voxels[1][1][4], 'transparent')
  assert.equal(applyPasteTargets(result.layers, 'active', targets).affectedCount, 0)
})

test('clipboard flipping updates colors and voxel offsets', () => {
  const clipboard = {
    w: 2,
    h: 2,
    colors: [['a', 'b'], ['c', 'd']],
    voxelList: [{ dcol: 0, drow: 1, depthIndex: 2, color: 'c' }],
  }
  const horizontal = flipClipboard(clipboard, 'h')
  assert.deepEqual(horizontal.colors, [['b', 'a'], ['d', 'c']])
  assert.deepEqual([horizontal.voxelList[0].dcol, horizontal.voxelList[0].drow], [1, 1])
  assert.deepEqual(flipClipboard(clipboard, 'v').colors, [['c', 'd'], ['a', 'b']])
})

test('depth shifting follows the absolute Z axis in projected views', () => {
  const front = shiftVoxelListZ([
    { dcol: 0, drow: 0, z: 3, depthIndex: 1, color: '#fff' },
  ], 1, 'front', dimensions.depth)
  assert.deepEqual([front[0].z, front[0].depthIndex], [4, 0])

  const left = shiftVoxelListZ([
    { dcol: 1, drow: 0, z: 1, depthIndex: 2, color: '#fff' },
  ], 2, 'left', dimensions.depth)
  assert.deepEqual([left[0].z, left[0].dcol, left[0].depthIndex], [3, 3, 2])

  const bottom = shiftVoxelListZ([
    { dcol: 0, drow: 4, z: 4, depthIndex: 1, color: '#fff' },
  ], 1, 'bottom', dimensions.depth)
  assert.deepEqual([bottom[0].z, bottom[0].drow], [4, 4], 'clamping must not move projected offsets')
})

test('selection transforms preserve view-depth metadata', () => {
  const item = {
    col: 0,
    row: 0,
    w: 1,
    h: 1,
    colors: [['#fff']],
    voxelList: [{ dcol: 0, drow: 0, z: 2, depthIndex: 3, color: '#fff' }],
  }
  const rotated = rotateBox(item, Math.PI / 2, 0.5, 0.5)
  const scaled = scaleBox(item, 2, 2, 0, 0)
  assert.equal(rotated.voxelList[0].depthIndex, 3)
  assert.ok(scaled.voxelList.every(voxel => voxel.depthIndex === 3))
})
