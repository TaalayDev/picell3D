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
