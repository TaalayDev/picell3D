import { create } from 'zustand'

const DEFAULT_PALETTE = [
  '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00',
  '#ff00ff', '#00ffff', '#ff8800', '#8800ff', '#00ff88', '#ff0088',
  '#884400', '#004488', '#448800', '#888888',
  '#444444', '#cccccc', '#662200', '#002266',
]

const CANVAS_W = 32
const CANVAS_H = 32
const DEPTH_D  = 16

// voxels[y][x][z]
function makeEmptyVoxels(W, H, D) {
  return Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(D).fill('transparent'))
  )
}

// ── View helpers (exported for canvas rendering) ───────────────────────────────

/**
 * Canvas pixel dimensions for each of the 6 views.
 * Front/Back: W×H  |  Left/Right: D×H  |  Top/Bottom: W×D
 */
export function getViewSize(view, W, H, D) {
  if (view === 'top'   || view === 'bottom') return { w: W, h: D }
  if (view === 'left'  || view === 'right')  return { w: D, h: H }
  return { w: W, h: H } // front, back
}

/** Compute 2D projection for any of the 6 views. Returns grid[row][col] of colors. */
export function renderView2D(voxels, view, W, H, D) {
  switch (view) {
    case 'front':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          for (let z = 0; z < D; z++) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    case 'back':
      // Looking from behind — x is mirrored. col = W-1-x
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, col) => {
          const x = W - 1 - col
          for (let z = D - 1; z >= 0; z--) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    case 'left':
      // Looking from -X inward. col = z (front at col 0).
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: D }, (_, z) => {
          for (let x = 0; x < W; x++) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    case 'right':
      // Looking from +X inward. col = D-1-z (back at col 0, front at col D-1).
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: D }, (_, col) => {
          const z = D - 1 - col
          for (let x = W - 1; x >= 0; x--) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    case 'top':
      // Looking from above (-Y). col = x, row = z.
      return Array.from({ length: D }, (_, z) =>
        Array.from({ length: W }, (_, x) => {
          for (let y = 0; y < H; y++) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    case 'bottom':
      // Looking from below (+Y). col = x, row = z.
      return Array.from({ length: D }, (_, z) =>
        Array.from({ length: W }, (_, x) => {
          for (let y = H - 1; y >= 0; y--) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    default:
      return []
  }
}

/**
 * Returns voxel coords {x,y,z}[] to paint when the user clicks
 * canvas pixel (col, row) in the given view.
 */
export function getVoxelTargets(col, row, view, paintDepth, W, H, D) {
  const targets = []

  switch (view) {
    case 'front':
      for (let i = 0; i < paintDepth; i++) targets.push({ x: col, y: row, z: i })
      break
    case 'back':
      for (let i = 0; i < paintDepth; i++) targets.push({ x: W - 1 - col, y: row, z: D - 1 - i })
      break
    case 'left':
      for (let i = 0; i < paintDepth; i++) targets.push({ x: i, y: row, z: col })
      break
    case 'right':
      for (let i = 0; i < paintDepth; i++) targets.push({ x: W - 1 - i, y: row, z: D - 1 - col })
      break
    case 'top':
      for (let i = 0; i < paintDepth; i++) targets.push({ x: col, y: i, z: row })
      break
    case 'bottom':
      for (let i = 0; i < paintDepth; i++) targets.push({ x: col, y: H - 1 - i, z: row })
      break
  }

  return targets.filter(({ x, y, z }) =>
    x >= 0 && x < W && y >= 0 && y < H && z >= 0 && z < D
  )
}

// ── Store ──────────────────────────────────────────────────────────────────────

export const useStore = create((set, get) => ({
  // ── Canvas / Voxels ──────────────────────────────────────────────────────────
  canvasWidth:    CANVAS_W,
  canvasHeight:   CANVAS_H,
  depthDimension: DEPTH_D,
  voxels:         makeEmptyVoxels(CANVAS_W, CANVAS_H, DEPTH_D),
  pixelSize:      14,
  showGrid:       true,
  currentColor:   '#c8860a',
  activeTool:     'pencil',
  palette:        DEFAULT_PALETTE,
  undoStack:      [],
  redoStack:      [],

  pushUndo() {
    const { voxels, undoStack } = get()
    const snapshot = voxels.map(plane => plane.map(row => [...row]))
    set({ undoStack: [...undoStack.slice(-49), snapshot], redoStack: [] })
  },

  /** Paint (or erase) voxels at a canvas click position. Does NOT push undo. */
  paintAt(col, row, color) {
    const { voxels, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, paintDepth } = get()
    const targets = getVoxelTargets(col, row, activeView, paintDepth, W, H, D)
    if (!targets.length) return

    const affectedY = new Set(targets.map(t => t.y))
    const next = [...voxels]
    for (const y of affectedY) {
      next[y] = voxels[y].map(xRow => [...xRow])
    }
    for (const { x, y, z } of targets) {
      next[y][x][z] = color
    }
    set({ voxels: next })
  },

  floodFillVoxel(col, row, newColor) {
    const { voxels, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, paintDepth } = get()
    const view2d = renderView2D(voxels, activeView, W, H, D)
    const { w, h } = getViewSize(activeView, W, H, D)
    const target = view2d[row]?.[col]
    if (!target || target === newColor) return

    get().pushUndo()

    const visited = new Set()
    const stack = [[col, row]]
    const matching = []
    while (stack.length) {
      const [c, r] = stack.pop()
      if (c < 0 || r < 0 || c >= w || r >= h) continue
      const key = `${c},${r}`
      if (visited.has(key)) continue
      visited.add(key)
      if (view2d[r]?.[c] !== target) continue
      matching.push([c, r])
      stack.push([c+1,r],[c-1,r],[c,r+1],[c,r-1])
    }

    const allTargets = matching.flatMap(([c, r]) =>
      getVoxelTargets(c, r, activeView, paintDepth, W, H, D)
    )
    if (!allTargets.length) return

    const affectedY = new Set(allTargets.map(t => t.y))
    const next = voxels.map((plane, y) =>
      affectedY.has(y) ? plane.map(xRow => [...xRow]) : plane
    )
    for (const { x, y, z } of allTargets) {
      next[y][x][z] = newColor
    }
    set({ voxels: next })
  },

  setCurrentColor: (color) => set({ currentColor: color }),
  setActiveTool:   (tool)  => set({ activeTool: tool }),
  setPixelSize:    (size)  => set({ pixelSize: Math.max(4, Math.min(32, size)) }),
  toggleGrid:      ()      => set(s => ({ showGrid: !s.showGrid })),

  clearCanvas() {
    const { canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    get().pushUndo()
    set({ voxels: makeEmptyVoxels(W, H, D) })
  },

  resizeCanvas(newW, newH) {
    newW = Math.max(4, Math.min(256, Math.round(newW)))
    newH = Math.max(4, Math.min(256, Math.round(newH)))
    const { voxels, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    get().pushUndo()

    const offX = newW > W ? Math.floor((newW - W) / 2) : 0
    const offY = newH > H ? Math.floor((newH - H) / 2) : 0

    const next = makeEmptyVoxels(newW, newH, D)
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        for (let z = 0; z < D; z++) {
          const ny = y + offY, nx = x + offX
          if (ny >= 0 && ny < newH && nx >= 0 && nx < newW) {
            next[ny][nx][z] = voxels[y][x][z]
          }
        }
      }
    }

    set({ canvasWidth: newW, canvasHeight: newH, voxels: next })
  },

  setDepthDimension(newD) {
    newD = Math.max(4, Math.min(256, Math.round(newD)))
    const { voxels, canvasWidth: W, canvasHeight: H, depthDimension: D, paintDepth } = get()
    get().pushUndo()

    const offZ = newD > D ? Math.floor((newD - D) / 2) : 0
    const next = makeEmptyVoxels(W, H, newD)
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        for (let z = 0; z < D; z++) {
          const nz = z + offZ
          if (nz >= 0 && nz < newD) {
            next[y][x][nz] = voxels[y][x][z]
          }
        }
      }
    }

    set({
      depthDimension: newD,
      voxels: next,
      paintDepth: Math.min(paintDepth, newD),
    })
  },

  undo() {
    const { undoStack, voxels, redoStack } = get()
    if (!undoStack.length) return
    const prev = undoStack[undoStack.length - 1]
    const current = voxels.map(plane => plane.map(row => [...row]))
    set({
      voxels:    prev,
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack.slice(-49), current],
    })
  },

  redo() {
    const { redoStack, voxels, undoStack } = get()
    if (!redoStack.length) return
    const next = redoStack[redoStack.length - 1]
    const current = voxels.map(plane => plane.map(row => [...row]))
    set({
      voxels:    next,
      redoStack: redoStack.slice(0, -1),
      undoStack: [...undoStack.slice(-49), current],
    })
  },

  addToPalette(color) {
    const { palette } = get()
    if (!palette.includes(color)) set({ palette: [...palette, color] })
  },

  // ── Voxel view ───────────────────────────────────────────────────────────────
  activeView:  'front',
  paintDepth:  1,

  setActiveView:  (view) => set({ activeView: view }),
  setPaintDepth:  (d)    => set(s => ({
    paintDepth: Math.max(1, Math.min(s.depthDimension, Math.round(d)))
  })),

  // ── UI ───────────────────────────────────────────────────────────────────────
  viewMode:    'split',
  activeTheme: 'synthwave',

  setViewMode:    (mode)  => set({ viewMode: mode }),
  setActiveTheme: (theme) => set({ activeTheme: theme }),
}))
