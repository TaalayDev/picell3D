import test from 'node:test'
import assert from 'node:assert/strict'
import { makeEmptyVoxels } from '../src/store/layerModel.js'
import { useStore } from '../src/store/index.js'

test('failed selection lift keeps the selection and clears stale clipboard data', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const voxels = makeEmptyVoxels(2, 2, 2)
  useStore.setState({
    canvasWidth: 2,
    canvasHeight: 2,
    depthDimension: 2,
    layers: [{
      id: 'active', name: 'Active', visible: true, opacity: 1, voxels, voxelMaterials: {},
    }],
    activeLayerId: 'active',
    activeView: 'front',
    selection: { x1: 0, y1: 0, x2: 0, y2: 0, type: 'rect', mask: null, polygon: null },
    selectionAnchor: { x: 0.5, y: 0.5 },
    clipboard: { w: 1, h: 1, colors: [['#old']], voxelList: [] },
    editBoundsEnabled: false,
    paintDepthStart: 1,
    paintDepthEnd: 2,
    paintDirection: 'inward',
  })

  const didCut = useStore.getState().cutSelection()

  assert.equal(didCut, false)
  assert.equal(useStore.getState().clipboard, null)
  assert.notEqual(useStore.getState().selection, null)
})

test('switching editing tools does not cancel a 3D selection', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const selection3D = {
    layerId: 'active',
    source: [{ x: 0, y: 0, z: 0, color: '#fff' }],
    voxels: [{ x: 0, y: 0, z: 0, color: '#fff' }],
  }
  useStore.setState({ activeTool: 'select', selection3D })
  useStore.getState().setActiveTool('pencil')
  assert.equal(useStore.getState().selection3D, selection3D)
})

test('paintAt restricts edits to active selection mask and honors depth', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const W = 4, H = 4, D = 4
  const voxels = makeEmptyVoxels(W, H, D)
  useStore.setState({
    canvasWidth: W,
    canvasHeight: H,
    depthDimension: D,
    layers: [{ id: 'l1', name: 'Layer 1', visible: true, opacity: 1, voxels, voxelMaterials: {} }],
    activeLayerId: 'l1',
    activeView: 'front',
    paintDepthStart: 1,
    paintDepthEnd: 1,
    paintDirection: 'inward',
    activeTool: 'pencil',
    editBoundsEnabled: false,
  })

  // Set selection on col 1..2, row 1..2
  useStore.getState().setSelection({ x1: 1, y1: 1, x2: 2, y2: 2, type: 'rect' })

  // Painting outside selection should do nothing
  useStore.getState().paintAt(0, 0, '#ff0000')
  const layer = useStore.getState().layers[0]
  assert.equal(layer.voxels[0][0][3], 'transparent')

  // Painting inside selection should paint the voxel
  useStore.getState().paintAt(1, 1, '#ff0000')
  assert.equal(useStore.getState().layers[0].voxels[1][1][3], '#ff0000')
})

test('floodFillVoxel is constrained to active selection boundary', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const W = 4, H = 4, D = 4
  const voxels = makeEmptyVoxels(W, H, D)
  // Fill all with #ffffff
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      voxels[y][x][3] = '#ffffff'
    }
  }

  useStore.setState({
    canvasWidth: W,
    canvasHeight: H,
    depthDimension: D,
    layers: [{ id: 'l1', name: 'Layer 1', visible: true, opacity: 1, voxels, voxelMaterials: {} }],
    activeLayerId: 'l1',
    activeView: 'front',
    paintDepthStart: 1,
    paintDepthEnd: 1,
    paintDirection: 'inward',
    editBoundsEnabled: false,
  })

  useStore.getState().setSelection({ x1: 1, y1: 1, x2: 2, y2: 2, type: 'rect' })
  useStore.getState().floodFillVoxel(1, 1, '#00ff00')

  const l = useStore.getState().layers[0]
  // Inside selection should be #00ff00
  assert.equal(l.voxels[1][1][3], '#00ff00')
  assert.equal(l.voxels[1][2][3], '#00ff00')
  assert.equal(l.voxels[2][1][3], '#00ff00')
  assert.equal(l.voxels[2][2][3], '#00ff00')

  // Outside selection should remain #ffffff
  assert.equal(l.voxels[0][0][3], '#ffffff')
  assert.equal(l.voxels[0][1][3], '#ffffff')
  assert.equal(l.voxels[3][3][3], '#ffffff')
})

test('paintMaterialAt is constrained to active selection', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const W = 4, H = 4, D = 4
  const voxels = makeEmptyVoxels(W, H, D)
  voxels[0][0][3] = '#fff'
  voxels[1][1][3] = '#fff'

  useStore.setState({
    canvasWidth: W,
    canvasHeight: H,
    depthDimension: D,
    layers: [{ id: 'l1', name: 'Layer 1', visible: true, opacity: 1, voxels, voxelMaterials: {} }],
    activeLayerId: 'l1',
    activeView: 'front',
    paintDepthStart: 1,
    paintDepthEnd: 1,
    paintDirection: 'inward',
    activeMaterial: 'glass',
    editBoundsEnabled: false,
  })

  useStore.getState().setSelection({ x1: 1, y1: 1, x2: 2, y2: 2, type: 'rect' })

  // Target outside selection
  useStore.getState().paintMaterialAt(0, 0)
  // Target inside selection
  useStore.getState().paintMaterialAt(1, 1)

  const mats = useStore.getState().layers[0].voxelMaterials
  assert.equal(mats['0,0,3'], undefined)
  assert.equal(mats['1,1,3'], 'glass')
})

test('liftSelectionToFloating and moveFloatingPaste move both content and selection', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const W = 6, H = 6, D = 4
  const voxels = makeEmptyVoxels(W, H, D)
  voxels[1][1][3] = '#112233'

  useStore.setState({
    canvasWidth: W,
    canvasHeight: H,
    depthDimension: D,
    layers: [{ id: 'l1', name: 'Layer 1', visible: true, opacity: 1, voxels, voxelMaterials: {} }],
    activeLayerId: 'l1',
    activeView: 'front',
    paintDepthStart: 1,
    paintDepthEnd: 1,
    paintDirection: 'inward',
    editBoundsEnabled: false,
  })

  useStore.getState().setSelection({ x1: 1, y1: 1, x2: 2, y2: 2, type: 'rect' })
  const lifted = useStore.getState().liftSelectionToFloating()
  assert.equal(lifted, true)
  assert.notEqual(useStore.getState().floatingPaste, null)
  assert.notEqual(useStore.getState().selection, null)

  // Move floating paste by (2, 3)
  useStore.getState().moveFloatingPaste(3, 4)
  const fp = useStore.getState().floatingPaste
  const sel = useStore.getState().selection
  assert.equal(fp.col, 3)
  assert.equal(fp.row, 4)
  assert.equal(sel.x1, 3)
  assert.equal(sel.y1, 4)
  assert.equal(sel.x2, 4)
  assert.equal(sel.y2, 5)
})

test('selection preserves paintDepthStart, paintDepthEnd, and paintDirection', t => {
  const original = useStore.getState()
  t.after(() => useStore.setState(original, true))
  const W = 4, H = 4, D = 8

  useStore.setState({
    canvasWidth: W,
    canvasHeight: H,
    depthDimension: D,
    activeView: 'front',
    paintDepthStart: 2,
    paintDepthEnd: 4,
    paintDirection: 'inward',
  })

  useStore.getState().setSelection({ x1: 1, y1: 1, x2: 2, y2: 2, type: 'rect' })
  const sel = useStore.getState().selection
  assert.equal(sel.depthStart, 2)
  assert.equal(sel.depthEnd, 4)
  assert.equal(sel.direction, 'inward')
  assert.deepEqual(sel.range, { start: 2, end: 4, direction: 'inward' })

  // Updating depth sliders updates active selection range
  useStore.getState().setPaintDepthStart(3)
  assert.equal(useStore.getState().selection.depthStart, 3)
  assert.equal(useStore.getState().selection.range.start, 3)
})
