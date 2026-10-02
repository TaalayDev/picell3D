import { appendHistory, snapshotHistory } from '../history.js'

export function createHistorySlice(set, get) {
  return {
    undoStack: [],
    redoStack: [],

    pushUndo() {
      const state = get()
      set({ undoStack: appendHistory(state.undoStack, snapshotHistory(state)), redoStack: [] })
    },

    beginUndoTransaction() {
      const state = get()
      const token = { layers: state.layers, undoStack: state.undoStack, redoStack: state.redoStack }
      get().pushUndo()
      return token
    },

    finishUndoTransaction(token) {
      if (!token || get().layers !== token.layers) return true
      set({ undoStack: token.undoStack, redoStack: token.redoStack })
      return false
    },

    undo() {
      const state = get()
      if (!state.undoStack.length) return
      const previous = state.undoStack[state.undoStack.length - 1]
      set({
        layers: previous.layers,
        editBounds: previous.editBounds,
        editBoundsEnabled: previous.editBoundsEnabled,
        undoStack: state.undoStack.slice(0, -1),
        redoStack: appendHistory(state.redoStack, snapshotHistory(state)),
      })
    },

    redo() {
      const state = get()
      if (!state.redoStack.length) return
      const next = state.redoStack[state.redoStack.length - 1]
      set({
        layers: next.layers,
        editBounds: next.editBounds,
        editBoundsEnabled: next.editBoundsEnabled,
        redoStack: state.redoStack.slice(0, -1),
        undoStack: appendHistory(state.undoStack, snapshotHistory(state)),
      })
    },
  }
}
