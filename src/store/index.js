import { create } from 'zustand'
import { nanoid } from 'nanoid'

const DEFAULT_PALETTE = [
  '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00',
  '#ff00ff', '#00ffff', '#ff8800', '#8800ff', '#00ff88', '#ff0088',
  '#884400', '#004488', '#448800', '#888888',
  '#444444', '#cccccc', '#662200', '#002266',
]

const OVERLAY_COLORS = [
  '#ff4444', '#ff8844', '#ffcc44', '#88ff44', '#44ffcc',
  '#44aaff', '#8844ff', '#ff44cc', '#ff6644', '#44ff88',
]

function makeEmptyGrid(w, h) {
  return Array.from({ length: h }, () => Array(w).fill('transparent'))
}

const CANVAS_W = 32
const CANVAS_H = 32

export const useStore = create((set, get) => ({
  // ── Canvas ──────────────────────────────────────────────────────────────
  canvasWidth: CANVAS_W,
  canvasHeight: CANVAS_H,
  pixels: makeEmptyGrid(CANVAS_W, CANVAS_H),
  pixelSize: 14,
  showGrid: true,
  currentColor: '#c8860a',
  activeTool: 'pencil',
  palette: DEFAULT_PALETTE,
  undoStack: [],
  redoStack: [],

  pushUndo() {
    const { pixels, undoStack } = get()
    set({
      undoStack: [...undoStack.slice(-49), pixels.map(r => [...r])],
      redoStack: [],
    })
  },

  setPixel(col, row, color) {
    const { pixels, canvasWidth, canvasHeight } = get()
    if (col < 0 || row < 0 || col >= canvasWidth || row >= canvasHeight) return
    const next = pixels.map(r => [...r])
    next[row][col] = color
    set({ pixels: next })
  },

  floodFill(col, row, newColor) {
    const { pixels, canvasWidth, canvasHeight } = get()
    const target = pixels[row][col]
    if (target === newColor) return
    get().pushUndo()
    const next = pixels.map(r => [...r])
    const stack = [[col, row]]
    while (stack.length) {
      const [c, r] = stack.pop()
      if (c < 0 || r < 0 || c >= canvasWidth || r >= canvasHeight) continue
      if (next[r][c] !== target) continue
      next[r][c] = newColor
      stack.push([c + 1, r], [c - 1, r], [c, r + 1], [c, r - 1])
    }
    set({ pixels: next })
  },

  setCurrentColor: (color) => set({ currentColor: color }),
  setActiveTool: (tool) => set({ activeTool: tool }),
  setPixelSize: (size) => set({ pixelSize: Math.max(4, Math.min(32, size)) }),
  toggleGrid: () => set(s => ({ showGrid: !s.showGrid })),

  clearCanvas() {
    const { canvasWidth, canvasHeight } = get()
    get().pushUndo()
    set({ pixels: makeEmptyGrid(canvasWidth, canvasHeight) })
  },

  undo() {
    const { undoStack, pixels, redoStack } = get()
    if (!undoStack.length) return
    const prev = undoStack[undoStack.length - 1]
    set({
      pixels: prev,
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack.slice(-49), pixels.map(r => [...r])],
    })
  },

  redo() {
    const { redoStack, pixels, undoStack } = get()
    if (!redoStack.length) return
    const next = redoStack[redoStack.length - 1]
    set({
      pixels: next,
      redoStack: redoStack.slice(0, -1),
      undoStack: [...undoStack.slice(-49), pixels.map(r => [...r])],
    })
  },

  addToPalette(color) {
    const { palette } = get()
    if (!palette.includes(color)) {
      set({ palette: [...palette, color] })
    }
  },

  // ── Depth ────────────────────────────────────────────────────────────────
  selections: [],
  activeSelectionId: null,
  showDepthOverlay: false,
  addSelection(pixels) {
    const id = nanoid()
    const idx = get().selections.length
    const color = OVERLAY_COLORS[idx % OVERLAY_COLORS.length]
    const sel = {
      id,
      name: `Layer ${idx + 1}`,
      pixels: pixels.map(([c, r]) => `${c},${r}`),
      depth: 2,
      direction: 'front',
      profile: 'flat',
      active: true,
      color,
    }
    set(s => ({ selections: [...s.selections, sel], activeSelectionId: id }))
    return id
  },

  removeSelection(id) {
    set(s => ({
      selections: s.selections.filter(sel => sel.id !== id),
      activeSelectionId: s.activeSelectionId === id ? null : s.activeSelectionId,
    }))
  },

  updateSelection(id, patch) {
    set(s => ({
      selections: s.selections.map(sel => sel.id === id ? { ...sel, ...patch } : sel),
    }))
  },

  addPixelsToSelection(id, pixels) {
    const keys = pixels.map(([c, r]) => `${c},${r}`)
    set(s => ({
      selections: s.selections.map(sel => {
        if (sel.id !== id) return sel
        const existing = new Set(sel.pixels)
        keys.forEach(k => existing.add(k))
        return { ...sel, pixels: [...existing] }
      }),
    }))
  },

  removePixelsFromSelection(id, pixels) {
    const keys = new Set(pixels.map(([c, r]) => `${c},${r}`))
    set(s => ({
      selections: s.selections.map(sel =>
        sel.id !== id ? sel : { ...sel, pixels: sel.pixels.filter(k => !keys.has(k)) }
      ),
    }))
  },

  clearSelectionPixels(id) {
    set(s => ({
      selections: s.selections.map(sel =>
        sel.id === id ? { ...sel, pixels: [] } : sel
      ),
    }))
  },

  setActiveSelection: (id) => set({ activeSelectionId: id }),
  toggleSelectionActive: (id) => {
    set(s => ({
      selections: s.selections.map(sel =>
        sel.id === id ? { ...sel, active: !sel.active } : sel
      ),
    }))
  },
  toggleDepthOverlay: () => set(s => ({ showDepthOverlay: !s.showDepthOverlay })),

  magicSelectFloodFill(col, row, selectionId) {
    const { pixels, canvasWidth, canvasHeight, selections } = get()
    const target = pixels[row][col]
    const visited = new Set()
    const result = []
    // Collect all pixels already in any selection
    const allTaken = new Set(selections.flatMap(s => s.pixels))
    const stack = [[col, row]]
    while (stack.length) {
      const [c, r] = stack.pop()
      if (c < 0 || r < 0 || c >= canvasWidth || r >= canvasHeight) continue
      const key = `${c},${r}`
      if (visited.has(key)) continue
      visited.add(key)
      if (pixels[r][c] !== target) continue
      result.push([c, r])
      stack.push([c + 1, r], [c - 1, r], [c, r + 1], [c, r - 1])
    }
    if (selectionId) {
      get().addPixelsToSelection(selectionId, result)
    } else {
      get().addSelection(result)
    }
  },

  // ── UI ───────────────────────────────────────────────────────────────────
  viewMode: 'split', // 'split' | 'canvas-only' | 'preview-only'
  activeTheme: 'steampunk',
  showDepthPanel: true,
  depthBrushMode: 'add', // 'add' | 'remove'

  setViewMode: (mode) => set({ viewMode: mode }),
  setActiveTheme: (theme) => set({ activeTheme: theme }),
  toggleDepthPanel: () => set(s => ({ showDepthPanel: !s.showDepthPanel })),
  setDepthBrushMode: (mode) => set({ depthBrushMode: mode }),
}))

// Derived: pixel → depth lookup map (used by mesh builder)
export function buildPixelDepthMap(selections) {
  const map = new Map()
  for (const sel of selections) {
    if (!sel.active) continue
    for (const key of sel.pixels) {
      map.set(key, { depth: sel.depth, direction: sel.direction, selectionId: sel.id, color: sel.color })
    }
  }
  return map
}
