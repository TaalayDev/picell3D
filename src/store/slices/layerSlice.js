import {
  createLayer,
  duplicateLayerById,
  mergeVisibleLayers,
} from '../layerModel.js'

export function createLayerSlice(set, get, initialLayer) {
  return {
    layers: [initialLayer],
    activeLayerId: initialLayer.id,

    addLayer() {
      const state = get()
      const layer = createLayer(state.canvasWidth, state.canvasHeight, state.depthDimension)
      set({ layers: [...state.layers, layer], activeLayerId: layer.id })
    },

    deleteLayer(id) {
      const { layers, activeLayerId } = get()
      if (layers.length <= 1) return
      const next = layers.filter(layer => layer.id !== id)
      const nextActiveId = id === activeLayerId
        ? (next[next.length - 1]?.id ?? next[0].id)
        : activeLayerId
      set({ layers: next, activeLayerId: nextActiveId })
    },

    setActiveLayer(id) {
      set({ activeLayerId: id })
    },

    toggleLayerVisible(id) {
      set(state => ({
        layers: state.layers.map(layer => layer.id === id ? { ...layer, visible: !layer.visible } : layer),
      }))
    },

    renameLayer(id, name) {
      set(state => ({
        layers: state.layers.map(layer =>
          layer.id === id ? { ...layer, name: name.trim() || layer.name } : layer
        ),
      }))
    },

    moveLayerUp(id) {
      const { layers } = get()
      const index = layers.findIndex(layer => layer.id === id)
      if (index < 0 || index >= layers.length - 1) return
      const next = [...layers]
      ;[next[index], next[index + 1]] = [next[index + 1], next[index]]
      set({ layers: next })
    },

    moveLayerDown(id) {
      const { layers } = get()
      const index = layers.findIndex(layer => layer.id === id)
      if (index <= 0) return
      const next = [...layers]
      ;[next[index], next[index - 1]] = [next[index - 1], next[index]]
      set({ layers: next })
    },

    duplicateLayer(id) {
      const result = duplicateLayerById(get().layers, id)
      if (result) set(result)
    },

    setLayerOpacity(id, opacity) {
      const value = Math.max(0, Math.min(1, opacity))
      set(state => ({
        layers: state.layers.map(layer => layer.id === id ? { ...layer, opacity: value } : layer),
      }))
    },

    mergeLayers() {
      const state = get()
      const result = mergeVisibleLayers(
        state.layers, state.canvasWidth, state.canvasHeight, state.depthDimension,
      )
      if (!result) return
      get().pushUndo()
      set(result)
    },
  }
}
