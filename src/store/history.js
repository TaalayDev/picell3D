import { snapshotLayers } from './layerModel.js'

export const HISTORY_LIMIT = 50

export function snapshotHistory(state) {
  return {
    layers: snapshotLayers(state.layers),
    editBounds: { ...state.editBounds },
    editBoundsEnabled: state.editBoundsEnabled,
  }
}

export function appendHistory(stack, snapshot) {
  return [...stack.slice(-(HISTORY_LIMIT - 1)), snapshot]
}
