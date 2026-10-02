import {
  applySelection3DToLayers,
  createSelection3D,
  deleteSelection3DFromLayers,
  duplicateSelection3DToLayers,
  moveSelection3DToNewLayer as extractSelection3DToNewLayer,
  transformSelection3D,
} from '../selection3DCommands.js'

function dimensions(state) {
  return {
    width: state.canvasWidth,
    height: state.canvasHeight,
    depth: state.depthDimension,
  }
}

function activeBounds(state) {
  return state.editBoundsEnabled ? state.editBounds : null
}

export function createSelection3DSlice(set, get) {
  const transform = command => {
    const state = get()
    const selection3D = transformSelection3D(
      state.selection3D, command, { ...dimensions(state), bounds: activeBounds(state) },
    )
    if (selection3D) set({ selection3D })
  }

  return {
    selection3D: null,

    setSelection3DBox(start, end) {
      const state = get()
      const layer = state.layers.find(item => item.id === state.activeLayerId)
      set({
        selection: null,
        floatingPaste: null,
        selectionAnchor: null,
        selection3D: createSelection3D(
          layer, state.activeLayerId, start, end, activeBounds(state),
        ),
      })
    },

    setSelection3DFromEditBounds() {
      const state = get()
      const layer = state.layers.find(item => item.id === state.activeLayerId)
      const bounds = state.editBounds
      set({
        activeTool: 'select',
        selection: null,
        floatingPaste: null,
        selectionAnchor: null,
        selection3D: createSelection3D(
          layer,
          state.activeLayerId,
          { x: bounds.minX, y: bounds.minY, z: bounds.minZ },
          { x: bounds.maxX, y: bounds.maxY, z: bounds.maxZ },
          bounds,
        ),
      })
    },

    clearSelection3D() {
      set({ selection3D: null })
    },

    moveSelection3D(dx, dy, dz) {
      transform({ type: 'move', dx, dy, dz })
    },

    flipSelection3D(axis) {
      transform({ type: 'flip', axis })
    },

    rotateSelection3D(axis, direction = 1) {
      transform({ type: 'rotate', axis, direction })
    },

    applySelection3D() {
      const state = get()
      const result = applySelection3DToLayers(
        state.layers, state.selection3D, dimensions(state), activeBounds(state),
      )
      if (!result) return
      if (!state.confirmLargeOperation('Apply 3D selection transform?', result.affectedCount)) return
      state.pushUndo()
      set({ layers: result.layers, selection3D: null })
    },

    duplicateSelection3D() {
      const state = get()
      const result = duplicateSelection3DToLayers(
        state.layers, state.selection3D, dimensions(state), activeBounds(state),
      )
      if (!result?.affectedCount) return
      if (!state.confirmLargeOperation('Duplicate transformed selection?', result.affectedCount)) return
      state.pushUndo()
      set({ layers: result.layers, selection3D: null })
    },

    moveSelection3DToNewLayer() {
      const state = get()
      const result = extractSelection3DToNewLayer(
        state.layers, state.selection3D, dimensions(state), activeBounds(state),
      )
      if (!result) return
      if (!state.confirmLargeOperation('Move selection to a new layer?', result.affectedCount)) return
      state.pushUndo()
      set({ layers: result.layers, activeLayerId: result.activeLayerId, selection3D: null })
    },

    deleteSelection3D() {
      const state = get()
      const result = deleteSelection3DFromLayers(state.layers, state.selection3D)
      if (!result) return
      if (!result.affectedCount) {
        set({ selection3D: null })
        return
      }
      if (!state.confirmLargeOperation('Delete 3D selection?', result.affectedCount)) return
      state.pushUndo()
      set({ layers: result.layers, selection3D: null })
    },
  }
}
