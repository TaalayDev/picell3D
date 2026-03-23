import { create } from 'zustand'

const DEFAULT_PALETTE = [
  '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00',
  '#ff00ff', '#00ffff', '#ff8800', '#8800ff', '#00ff88', '#ff0088',
  '#884400', '#004488', '#448800', '#888888',
  '#444444', '#cccccc', '#662200', '#002266',
]

const CANVAS_W = 32
const CANVAS_H = 32
const DEPTH_D  = 5

// voxels[y][x][z]
function makeEmptyVoxels(W, H, D) {
  return Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(D).fill('transparent'))
  )
}

let _layerSeq = 0
function makeLayer(W, H, D, name) {
  _layerSeq++
  return {
    id: `layer-${_layerSeq}`,
    name: name ?? `Layer ${_layerSeq}`,
    visible: true,
    voxels: makeEmptyVoxels(W, H, D),
  }
}

function snapshotLayers(layers) {
  return layers.map(l => ({
    ...l,
    voxels: l.voxels.map(plane => plane.map(row => [...row])),
  }))
}

// ── View helpers (exported for canvas rendering) ───────────────────────────────

/**
 * Composite all visible layers into a single voxels grid.
 * layers[0] = bottom, layers[last] = top.
 */
export function getCompositedVoxels(layers, W, H, D) {
  const result = makeEmptyVoxels(W, H, D)
  for (const layer of layers) {
    if (!layer.visible) continue
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        for (let z = 0; z < D; z++) {
          const c = layer.voxels[y]?.[x]?.[z]
          if (c && c !== 'transparent') result[y][x][z] = c
        }
  }
  return result
}

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
 * Returns a 2D grid of depth-axis values (number | null) for the frontmost
 * visible voxel in each canvas cell. null = transparent (no voxel).
 * "Depth" = the coordinate along the view's look-at axis.
 */
export function renderDepthMap2D(voxels, view, W, H, D) {
  switch (view) {
    case 'front':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          for (let z = 0; z < D; z++) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return z
          return null
        })
      )
    case 'back':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, col) => {
          const x = W - 1 - col
          for (let z = D - 1; z >= 0; z--) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return D - 1 - z
          return null
        })
      )
    case 'left':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: D }, (_, z) => {
          for (let x = 0; x < W; x++) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return x
          return null
        })
      )
    case 'right':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: D }, (_, col) => {
          const z = D - 1 - col
          for (let x = W - 1; x >= 0; x--) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return W - 1 - x
          return null
        })
      )
    case 'top':
      return Array.from({ length: D }, (_, z) =>
        Array.from({ length: W }, (_, x) => {
          for (let y = 0; y < H; y++) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return y
          return null
        })
      )
    case 'bottom':
      return Array.from({ length: D }, (_, z) =>
        Array.from({ length: W }, (_, x) => {
          for (let y = H - 1; y >= 0; y--) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return H - 1 - y
          return null
        })
      )
    default:
      return []
  }
}

/**
 * Returns voxel coords {x,y,z}[] to paint when the user clicks
 * canvas pixel (col, row) in the given view (front only).
 * paintDirection: 'both' | 'front' | 'back' — only used for front/back view.
 */
export function getVoxelTargets(col, row, view, paintDepth, W, H, D, paintDirection = 'both') {
  const targets = []

  switch (view) {
    case 'front': {
      const center = Math.floor(D / 2)
      const zStart = paintDirection === 'back'  ? center : center - paintDepth
      const zEnd   = paintDirection === 'front' ? center : center + paintDepth
      for (let z = Math.max(0, zStart); z <= Math.min(D - 1, zEnd); z++)
        targets.push({ x: col, y: row, z })
      break
    }
    case 'back': {
      const center = Math.floor(D / 2)
      // back view: z=D-1 is nearest; "front" direction for back = toward z=D-1
      const zStart = paintDirection === 'front' ? center : center - paintDepth
      const zEnd   = paintDirection === 'back'  ? center : center + paintDepth
      for (let z = Math.max(0, zStart); z <= Math.min(D - 1, zEnd); z++)
        targets.push({ x: W - 1 - col, y: row, z })
      break
    }
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

// ── Non-front view helpers ─────────────────────────────────────────────────────

/**
 * For non-front views: find existing (already occupied) voxels along the
 * view ray at canvas position (col, row), returning up to `maxCount`.
 * Used for pencil (recolor nearest) and eraser (remove nearest).
 */
export function getExistingVoxelTargets(voxels, col, row, view, maxCount, W, H, D) {
  const results = []

  const push = (x, y, z) => {
    const c = voxels[y]?.[x]?.[z]
    if (c && c !== 'transparent') results.push({ x, y, z })
    return results.length >= maxCount
  }

  if (view === 'back') {
    const x = W - 1 - col
    for (let z = D - 1; z >= 0; z--) { if (push(x, row, z)) break }
  } else if (view === 'left') {
    for (let x = 0; x < W; x++)       { if (push(x, row, col)) break }
  } else if (view === 'right') {
    const z = D - 1 - col
    for (let x = W - 1; x >= 0; x--) { if (push(x, row, z)) break }
  } else if (view === 'top') {
    for (let y = 0; y < H; y++)       { if (push(col, y, row)) break }
  } else if (view === 'bottom') {
    for (let y = H - 1; y >= 0; y--) { if (push(col, y, row)) break }
  }

  return results
}

// ── Store ──────────────────────────────────────────────────────────────────────

const _initLayer = makeLayer(CANVAS_W, CANVAS_H, DEPTH_D)

export const useStore = create((set, get) => ({
  // ── Canvas / Voxels ──────────────────────────────────────────────────────────
  canvasWidth:    CANVAS_W,
  canvasHeight:   CANVAS_H,
  depthDimension: DEPTH_D,
  layers:         [_initLayer],
  activeLayerId:  _initLayer.id,
  pixelSize:      14,
  showGrid:       true,
  currentColor:   '#c8860a',
  activeTool:     'pencil',
  palette:        DEFAULT_PALETTE,
  undoStack:      [],
  redoStack:      [],

  pushUndo() {
    const { layers, undoStack } = get()
    set({ undoStack: [...undoStack.slice(-49), snapshotLayers(layers)], redoStack: [] })
  },

  /** Paint (or erase) voxels at a canvas click position. Does NOT push undo. */
  paintAt(col, row, color) {
    const { layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, paintDepth, paintDirection } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layerVoxels = layers[layerIdx].voxels

    const applyTargets = (targets) => {
      if (!targets.length) return false
      const affectedY = new Set(targets.map(t => t.y))
      const newVoxels = [...layerVoxels]
      for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
      for (const { x, y, z } of targets) newVoxels[y][x][z] = color
      const newLayers = [...layers]
      newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
      set({ layers: newLayers })
      return true
    }

    if (activeView !== 'front' && activeView !== 'back') {
      // Non-front/back: operate only on existing voxels in the active layer
      const targets = getExistingVoxelTargets(layerVoxels, col, row, activeView, 1, W, H, D)
      applyTargets(targets)
      return
    }

    // Front/back view: unrestricted, centered depth
    applyTargets(getVoxelTargets(col, row, activeView, paintDepth, W, H, D, paintDirection))
  },

  floodFillVoxel(col, row, newColor) {
    const { layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, paintDepth, paintDirection } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layerVoxels = layers[layerIdx].voxels

    const view2d = renderView2D(layerVoxels, activeView, W, H, D)
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
      (activeView === 'front' || activeView === 'back')
        ? getVoxelTargets(c, r, activeView, paintDepth, W, H, D, paintDirection)
        : getExistingVoxelTargets(layerVoxels, c, r, activeView, 1, W, H, D)
    )
    if (!allTargets.length) return

    const affectedY = new Set(allTargets.map(t => t.y))
    const newVoxels = layerVoxels.map((plane, y) =>
      affectedY.has(y) ? plane.map(xRow => [...xRow]) : plane
    )
    for (const { x, y, z } of allTargets) newVoxels[y][x][z] = newColor
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers })
  },

  setCurrentColor: (color) => set({ currentColor: color }),
  setActiveTool:   (tool)  => set({ activeTool: tool }),
  setPixelSize:    (size)  => set({ pixelSize: Math.max(4, Math.min(32, size)) }),
  toggleGrid:      ()      => set(s => ({ showGrid: !s.showGrid })),

  clearCanvas() {
    const { layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    get().pushUndo()
    const newLayers = layers.map(l =>
      l.id === activeLayerId ? { ...l, voxels: makeEmptyVoxels(W, H, D) } : l
    )
    set({ layers: newLayers })
  },

  resizeCanvas(newW, newH) {
    newW = Math.max(4, Math.min(256, Math.round(newW)))
    newH = Math.max(4, Math.min(256, Math.round(newH)))
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    get().pushUndo()

    const offX = newW > W ? Math.floor((newW - W) / 2) : 0
    const offY = newH > H ? Math.floor((newH - H) / 2) : 0

    const newLayers = layers.map(layer => {
      const next = makeEmptyVoxels(newW, newH, D)
      for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++)
          for (let z = 0; z < D; z++) {
            const ny = y + offY, nx = x + offX
            if (ny >= 0 && ny < newH && nx >= 0 && nx < newW)
              next[ny][nx][z] = layer.voxels[y][x][z]
          }
      return { ...layer, voxels: next }
    })

    set({ canvasWidth: newW, canvasHeight: newH, layers: newLayers })
  },

  setDepthDimension(newD) {
    newD = Math.max(4, Math.min(256, Math.round(newD)))
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D, paintDepth } = get()
    get().pushUndo()

    const offZ = newD > D ? Math.floor((newD - D) / 2) : 0
    const newLayers = layers.map(layer => {
      const next = makeEmptyVoxels(W, H, newD)
      for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++)
          for (let z = 0; z < D; z++) {
            const nz = z + offZ
            if (nz >= 0 && nz < newD) next[y][x][nz] = layer.voxels[y][x][z]
          }
      return { ...layer, voxels: next }
    })

    set({
      depthDimension: newD,
      layers: newLayers,
      paintDepth: Math.min(paintDepth, newD),
    })
  },

  undo() {
    const { undoStack, layers, redoStack } = get()
    if (!undoStack.length) return
    const prev = undoStack[undoStack.length - 1]
    set({
      layers:    prev,
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack.slice(-49), snapshotLayers(layers)],
    })
  },

  redo() {
    const { redoStack, layers, undoStack } = get()
    if (!redoStack.length) return
    const next = redoStack[redoStack.length - 1]
    set({
      layers:    next,
      redoStack: redoStack.slice(0, -1),
      undoStack: [...undoStack.slice(-49), snapshotLayers(layers)],
    })
  },

  addToPalette(color) {
    const { palette } = get()
    if (!palette.includes(color)) set({ palette: [...palette, color] })
  },

  // ── Layer actions ─────────────────────────────────────────────────────────────

  addLayer() {
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    const newLayer = makeLayer(W, H, D)
    set({ layers: [...layers, newLayer], activeLayerId: newLayer.id })
  },

  deleteLayer(id) {
    const { layers, activeLayerId } = get()
    if (layers.length <= 1) return
    const newLayers = layers.filter(l => l.id !== id)
    const newActive = id === activeLayerId
      ? (newLayers[newLayers.length - 1]?.id ?? newLayers[0].id)
      : activeLayerId
    set({ layers: newLayers, activeLayerId: newActive })
  },

  setActiveLayer:    (id) => set({ activeLayerId: id }),

  toggleLayerVisible(id) {
    const { layers } = get()
    set({ layers: layers.map(l => l.id === id ? { ...l, visible: !l.visible } : l) })
  },

  renameLayer(id, name) {
    const { layers } = get()
    set({ layers: layers.map(l => l.id === id ? { ...l, name: name.trim() || l.name } : l) })
  },

  moveLayerUp(id) {
    const { layers } = get()
    const idx = layers.findIndex(l => l.id === id)
    if (idx >= layers.length - 1) return
    const next = [...layers]
    ;[next[idx], next[idx + 1]] = [next[idx + 1], next[idx]]
    set({ layers: next })
  },

  moveLayerDown(id) {
    const { layers } = get()
    const idx = layers.findIndex(l => l.id === id)
    if (idx <= 0) return
    const next = [...layers]
    ;[next[idx], next[idx - 1]] = [next[idx - 1], next[idx]]
    set({ layers: next })
  },

  // ── Voxel view ───────────────────────────────────────────────────────────────
  activeView:     'front',
  paintDepth:     1,
  paintDirection: 'both',

  setActiveView:     (view) => set({ activeView: view }),
  setPaintDepth:     (d)    => set(s => ({
    paintDepth: Math.max(1, Math.min(s.depthDimension, Math.round(d)))
  })),
  setPaintDirection: (dir)  => set({ paintDirection: dir }),

  // ── UI ───────────────────────────────────────────────────────────────────────
  viewMode:    'split',
  activeTheme: 'synthwave',

  setViewMode:    (mode)  => set({ viewMode: mode }),
  setActiveTheme: (theme) => set({ activeTheme: theme }),
}))
