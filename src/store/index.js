import { create } from 'zustand'

const DEFAULT_PALETTE = [
  // Blacks & whites
  '#000000', '#1a1a1a', '#333333',
  '#555555', '#888888', '#aaaaaa',
  '#cccccc', '#e8e8e8', '#ffffff',

  // Reds
  '#ff0000', '#cc0000', '#880000',
  '#ff4444', '#ff8888', '#ffcccc',

  // Oranges
  '#ff8800', '#cc6600', '#884400',
  '#ffaa44', '#ffcc88', '#ffe4c0',

  // Yellows
  '#ffff00', '#cccc00', '#888800',
  '#ffff66', '#ffff99', '#ffffcc',

  // Greens
  '#00ff00', '#00cc00', '#008800',
  '#44ff44', '#88ff88', '#ccffcc',

  // Teals / Cyans
  '#00ffcc', '#00ccaa', '#008866',
  '#00ffff', '#00cccc', '#008888',

  // Blues
  '#0000ff', '#0000cc', '#000088',
  '#4444ff', '#8888ff', '#ccccff',

  // Purples / Magentas
  '#8800ff', '#6600cc', '#440088',
  '#ff00ff', '#cc00cc', '#880088',
  '#ff44ff', '#ff88ff', '#ffccff',

  // Pinks
  '#ff0088', '#cc0066', '#880044',
  '#ff66aa', '#ffaacc', '#ffddee',

  // Browns / Skin tones
  '#662200', '#8b4513', '#a0522d',
  '#c68642', '#d2a679', '#f5deb3',
  '#ffe0bd', '#ffcd94', '#e8b88a',

  // Nature / Earthy
  '#228b22', '#3a5f0b', '#556b2f',
  '#8b7355', '#a08060', '#c4a882',
  '#4a3728', '#6b4c3b', '#8b6050',

  // Sky / Water
  '#87ceeb', '#4488cc', '#1a6699',
  '#003366', '#004488', '#1155aa',

  // Neon / Accent
  '#ff6600', '#ff3300', '#cc2200',
  '#00ff88', '#00cc66', '#009944',
  '#ff00aa', '#cc0088', '#990066',
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
    opacity: 1,
    voxels: makeEmptyVoxels(W, H, D),
    voxelMaterials: {},  // 'y,x,z' → 'solid'|'emissive'|'neon'|'metal'|'glass'
  }
}

function snapshotLayers(layers) {
  return layers.map(l => ({
    ...l,
    voxels: l.voxels.map(plane => plane.map(row => [...row])),
    voxelMaterials: { ...l.voxelMaterials },
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
 * Composite voxelMaterials from all visible layers into a flat map { 'y,x,z': matType }.
 * Only non-solid entries are stored. Upper layers override lower.
 */
export function getCompositedMaterials(layers) {
  const result = {}
  for (const layer of layers) {
    if (!layer.visible) continue
    for (const [key, mat] of Object.entries(layer.voxelMaterials || {})) {
      if (mat && mat !== 'solid') result[key] = mat
      else if (mat === 'solid') delete result[key]
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
      // Camera is at +Z. High z = closest to camera = rendered first.
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          for (let z = D - 1; z >= 0; z--) {
            const c = voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') return c
          }
          return 'transparent'
        })
      )

    case 'back':
      // Camera is at -Z. Low z = closest to camera = rendered first.
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, col) => {
          const x = W - 1 - col
          for (let z = 0; z < D; z++) {
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
 * Front/back: signed offset from center (Math.floor(D/2)). Side views: axis coordinate.
 */
export function renderDepthMap2D(voxels, view, W, H, D) {
  const center = Math.floor(D / 2)
  switch (view) {
    case 'front':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          for (let z = D - 1; z >= 0; z--) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return z - center
          return null
        })
      )
    case 'back':
      return Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, col) => {
          const x = W - 1 - col
          for (let z = 0; z < D; z++) if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return z - center
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

// Maps each view to its opposite face view
export const OPPOSITE_VIEW = {
  front: 'back',  back: 'front',
  left:  'right', right: 'left',
  top:   'bottom', bottom: 'top',
}

/**
 * Returns voxel coords {x,y,z}[] to paint when the user clicks
 * canvas pixel (col, row) in the given view.
 * Front/back are now face-based (start from the visible surface, go inward).
 */
export function getVoxelTargets(col, row, view, paintDepth, W, H, D) {
  const targets = []

  switch (view) {
    case 'front': {
      // Front face at z = D-1 (+Z camera). Paint inward (toward -Z).
      const zEnd   = D - 1
      const zStart = Math.max(0, D - paintDepth)
      for (let z = zEnd; z >= zStart; z--)
        targets.push({ x: col, y: row, z })
      break
    }
    case 'back': {
      // Back face at z = 0 (-Z camera). Paint inward (toward +Z).
      const zEnd = Math.min(D - 1, paintDepth - 1)
      for (let z = 0; z <= zEnd; z++)
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
    // Back camera is at -Z: z=0 is closest to the back camera, scan upward.
    const x = W - 1 - col
    for (let z = 0; z < D; z++) { if (push(x, row, z)) break }
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

/**
 * For side views (left/right/top/bottom) in draw mode:
 * Scans the ray from the camera and returns empty voxel position(s) just in
 * front of the first visible surface (toward the camera). Falls back to the
 * face position when the ray is fully empty.
 */
export function getSurfaceVoxelTargets(voxels, col, row, view, paintDepth, W, H, D) {
  const results = []

  // Scan from fromIdx toward toIdx (inclusive). getCoords(i) → [x, y, z].
  // Finds the first filled voxel and places paintDepth slots just in front of it.
  const scanAndPlace = (fromIdx, toIdx, getCoords) => {
    const dir = fromIdx <= toIdx ? 1 : -1
    let surfaceI = null
    for (let i = fromIdx; dir > 0 ? i <= toIdx : i >= toIdx; i += dir) {
      const [x, y, z] = getCoords(i)
      const c = voxels[y]?.[x]?.[z]
      if (c && c !== 'transparent') { surfaceI = i; break }
    }
    // Start placing one step in front of surface (toward camera), or at face if empty.
    const startI = surfaceI !== null ? surfaceI - dir : fromIdx
    for (let d = 0; d < paintDepth; d++) {
      const [x, y, z] = getCoords(startI - dir * d)
      if (x >= 0 && x < W && y >= 0 && y < H && z >= 0 && z < D)
        if (!results.some(t => t.x === x && t.y === y && t.z === z))
          results.push({ x, y, z })
    }
  }

  switch (view) {
    // Back camera at -Z: z=0 is the face closest to back camera, scan inward toward z=D-1.
    case 'back':   scanAndPlace(0,     D - 1, i => [W - 1 - col, row, i        ]); break
    case 'left':   scanAndPlace(0,     W - 1, i => [i,   row, col              ]); break
    case 'right':  scanAndPlace(W - 1, 0,     i => [i,   row, D - 1 - col      ]); break
    case 'top':    scanAndPlace(0,     H - 1, i => [col, i,   row              ]); break
    case 'bottom': scanAndPlace(H - 1, 0,     i => [col, i,   row              ]); break
    default:       return getVoxelTargets(col, row, view, paintDepth, W, H, D)
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
  blendEndColor:  '#003366',
  palette:        DEFAULT_PALETTE,
  recentColors:   [],
  undoStack:      [],
  redoStack:      [],

  pushUndo() {
    const { layers, undoStack } = get()
    set({ undoStack: [...undoStack.slice(-49), snapshotLayers(layers)], redoStack: [] })
  },

  /** Paint (or erase) voxels at a canvas click position. Does NOT push undo.
   *  @param {string|null} opts.sideDrawModeOverride  Temporarily override sideDrawMode ('edit'|'draw'|null)
   *  @param {boolean}     opts.fullDepthErase         Erase all voxels along the full ray depth
   */
  paintAt(col, row, color, { sideDrawModeOverride = null, fullDepthErase = false } = {}) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeView, paintDepth, sideDrawMode,
      symmetryX, symmetryY, symmetryOpposite,
    } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layerVoxels = layers[layerIdx].voxels
    const effectiveMode = sideDrawModeOverride ?? sideDrawMode
    const { w, h } = getViewSize(activeView, W, H, D)
    const editCount  = fullDepthErase ? D : paintDepth
    const depthCount = fullDepthErase ? D : paintDepth

    // Lazy composited voxels — only computed when a side-draw mode is needed.
    let _composited = null
    const getComposited = () => _composited ?? (_composited = getCompositedVoxels(layers, W, H, D))

    // Returns 3D voxel targets for a canvas position in the given view.
    // front is always face-based. back and all side views respect effectiveMode.
    const getTargets = (c, r, view, forceDrawMode = false) => {
      if (view === 'front') return getVoxelTargets(c, r, view, depthCount, W, H, D)
      const mode = forceDrawMode ? 'draw' : effectiveMode
      return mode === 'draw'
        ? getSurfaceVoxelTargets(getComposited(), c, r, view, depthCount, W, H, D)
        : getExistingVoxelTargets(layerVoxels, c, r, view, editCount, W, H, D)
    }

    // Build primary canvas positions including X/Y symmetry mirrors
    const posList = []
    const seenPos = new Set()
    const addPos = (c, r) => {
      if (c < 0 || c >= w || r < 0 || r >= h) return
      const k = `${c},${r}`
      if (seenPos.has(k)) return
      seenPos.add(k)
      posList.push([c, r])
    }
    addPos(col, row)
    if (symmetryX) addPos(w - 1 - col, row)
    if (symmetryY) addPos(col, h - 1 - row)
    if (symmetryX && symmetryY) addPos(w - 1 - col, h - 1 - row)

    // Collect all 3D targets (deduplicated)
    const allTargets = []
    const seenVox = new Set()
    const addTarget = (t) => {
      const k = `${t.x},${t.y},${t.z}`
      if (!seenVox.has(k)) { seenVox.add(k); allTargets.push(t) }
    }

    for (const [c, r] of posList)
      getTargets(c, r, activeView).forEach(addTarget)

    // Opposite-side symmetry: same canvas positions but for the opposite view.
    // When active view is front (always draw), force draw mode for opposite too.
    if (symmetryOpposite) {
      const oppView = OPPOSITE_VIEW[activeView]
      const { w: ow, h: oh } = getViewSize(oppView, W, H, D)
      const forceOpp = activeView === 'front'
      for (const [c, r] of posList) {
        if (c >= 0 && c < ow && r >= 0 && r < oh)
          getTargets(c, r, oppView, forceOpp).forEach(addTarget)
      }
    }

    if (!allTargets.length) return
    const affectedY = new Set(allTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z } of allTargets) newVoxels[y][x][z] = color
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers })
  },

  floodFillVoxel(col, row, newColor) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeView, paintDepth, sideDrawMode,
      symmetryX, symmetryY, symmetryOpposite,
    } = get()
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

    let _composited = null
    const getComposited = () => _composited ?? (_composited = getCompositedVoxels(layers, W, H, D))

    const getTargets = (c, r, view, forceDrawMode = false) => {
      if (view === 'front') return getVoxelTargets(c, r, view, paintDepth, W, H, D)
      const mode = forceDrawMode ? 'draw' : sideDrawMode
      return mode === 'draw'
        ? getSurfaceVoxelTargets(getComposited(), c, r, view, paintDepth, W, H, D)
        : getExistingVoxelTargets(layerVoxels, c, r, view, paintDepth, W, H, D)
    }

    const seenVox = new Set()
    const allTargets = []
    const addTarget = (t) => {
      const k = `${t.x},${t.y},${t.z}`
      if (!seenVox.has(k)) { seenVox.add(k); allTargets.push(t) }
    }

    for (const [c, r] of matching) {
      getTargets(c, r, activeView).forEach(addTarget)
      if (symmetryX) { const mc = w - 1 - c; if (mc !== c) getTargets(mc, r, activeView).forEach(addTarget) }
      if (symmetryY) { const mr = h - 1 - r; if (mr !== r) getTargets(c, mr, activeView).forEach(addTarget) }
      if (symmetryX && symmetryY) getTargets(w - 1 - c, h - 1 - r, activeView).forEach(addTarget)
      if (symmetryOpposite) {
        const oppView = OPPOSITE_VIEW[activeView]
        const { w: ow, h: oh } = getViewSize(oppView, W, H, D)
        const forceOpp = activeView === 'front'
        const opp = [[c,r]]
        if (symmetryX) opp.push([ow-1-c, r])
        if (symmetryY) opp.push([c, oh-1-r])
        if (symmetryX && symmetryY) opp.push([ow-1-c, oh-1-r])
        for (const [oc, or_] of opp)
          if (oc >= 0 && oc < ow && or_ >= 0 && or_ < oh)
            getTargets(oc, or_, oppView, forceOpp).forEach(addTarget)
      }
    }
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

  setCurrentColor(color) {
    set(s => ({
      currentColor: color,
      recentColors: [color, ...s.recentColors.filter(c => c !== color)].slice(0, 10),
    }))
  },
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

  /** Directly set a single voxel in the active layer (used by 3D editor). Does NOT push undo. */
  paintVoxelDirect(x, y, z, color) {
    const { layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layer = layers[layerIdx]
    const newVoxels = layer.voxels.map((plane, iy) => {
      if (iy !== y) return plane
      return plane.map((xRow, ix) => {
        if (ix !== x) return xRow
        const row = [...xRow]
        row[z] = color
        return row
      })
    })
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layer, voxels: newVoxels }
    set({ layers: newLayers })
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

  duplicateLayer(id) {
    const { layers } = get()
    const idx = layers.findIndex(l => l.id === id)
    if (idx < 0) return
    const src = layers[idx]
    _layerSeq++
    const dup = {
      ...src,
      id: `layer-${_layerSeq}`,
      name: `${src.name} copy`,
      voxels: src.voxels.map(plane => plane.map(row => [...row])),
      voxelMaterials: { ...src.voxelMaterials },
    }
    const next = [...layers]
    next.splice(idx + 1, 0, dup)
    set({ layers: next, activeLayerId: dup.id })
  },

  setLayerOpacity(id, opacity) {
    const { layers } = get()
    set({ layers: layers.map(l => l.id === id ? { ...l, opacity: Math.max(0, Math.min(1, opacity)) } : l) })
  },

  mergeLayers() {
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    const visible = layers.filter(l => l.visible)
    if (visible.length <= 1) return
    get().pushUndo()
    const merged = makeEmptyVoxels(W, H, D)
    for (const layer of visible) {
      for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++)
          for (let z = 0; z < D; z++) {
            const c = layer.voxels[y]?.[x]?.[z]
            if (c && c !== 'transparent') merged[y][x][z] = c
          }
    }
    _layerSeq++
    const mergedLayer = {
      id: `layer-${_layerSeq}`, name: 'Merged', visible: true, opacity: 1,
      voxels: merged, voxelMaterials: {},
    }
    set({ layers: [mergedLayer, ...layers.filter(l => !l.visible)], activeLayerId: mergedLayer.id })
  },

  // ── Voxel view ───────────────────────────────────────────────────────────────
  activeView:     'front',
  paintDepth:     1,
  paintDirection: 'both', // kept for compat; no longer used for front/back

  // 'edit' = only modify existing voxels (default for all non-front views)
  // 'draw' = freely place new voxels
  sideDrawMode: 'edit',

  // Symmetry flags
  symmetryX:        false,
  symmetryY:        false,
  symmetryOpposite: false,

  setActiveView:      (view) => set({ activeView: view }),
  setPaintDepth:      (d)    => set(s => ({
    paintDepth: Math.max(1, Math.min(s.depthDimension, Math.round(d)))
  })),
  setPaintDirection:  (dir)  => set({ paintDirection: dir }),
  setSideDrawMode:    (mode) => set({ sideDrawMode: mode }),
  setSymmetryX:       (v)    => set({ symmetryX: v }),
  setSymmetryY:       (v)    => set({ symmetryY: v }),
  setSymmetryOpposite:(v)    => set({ symmetryOpposite: v }),

  activeMaterial:    'solid',
  setActiveMaterial: (mat) => set({ activeMaterial: mat }),

  paintMaterialAt(col, row) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeView, paintDepth, activeMaterial,
    } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layer = layers[layerIdx]
    const composited = getCompositedVoxels(layers, W, H, D)
    const targets = getVoxelTargets(col, row, activeView, paintDepth, W, H, D)
    const newMaterials = { ...(layer.voxelMaterials || {}) }
    let changed = false
    for (const { x, y, z } of targets) {
      if (!composited[y]?.[x]?.[z] || composited[y][x][z] === 'transparent') continue
      const key = `${y},${x},${z}`
      if (activeMaterial === 'solid') {
        if (key in newMaterials) { delete newMaterials[key]; changed = true }
      } else if (newMaterials[key] !== activeMaterial) {
        newMaterials[key] = activeMaterial; changed = true
      }
    }
    if (!changed) return
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layer, voxelMaterials: newMaterials }
    set({ layers: newLayers })
  },

  // ── Reference image overlay ──────────────────────────────────────────────────
  referenceImage: null, // { src, x, y, width, height, opacity }

  setReferenceImage:  (data) => set({ referenceImage: data }),
  clearReferenceImage: ()    => set({ referenceImage: null }),

  // ── UI ───────────────────────────────────────────────────────────────────────
  viewMode:          'split',
  activeTheme:       'synthwave',
  showDepthText:     true,
  showShortcutsPanel: false,

  setViewMode:           (mode)  => set({ viewMode: mode }),
  setActiveTheme:        (theme) => set({ activeTheme: theme }),
  setShowDepthText:      (v)     => set({ showDepthText: v }),
  setBlendEndColor:      (c)     => set({ blendEndColor: c }),
  toggleShortcutsPanel:  ()      => set(s => ({ showShortcutsPanel: !s.showShortcutsPanel })),

  // ── Project I/O ──────────────────────────────────────────────────────────────

  getProjectData() {
    const {
      layers, canvasWidth, canvasHeight, depthDimension,
      palette, activeTheme, activeLayerId,
    } = get()
    return {
      version: 1,
      canvasWidth, canvasHeight, depthDimension,
      activeLayerId, palette, activeTheme, layers,
    }
  },

  loadProjectData(data) {
    if (!data || data.version !== 1 || !Array.isArray(data.layers)) return false
    set({
      layers:         data.layers,
      canvasWidth:    data.canvasWidth    ?? CANVAS_W,
      canvasHeight:   data.canvasHeight   ?? CANVAS_H,
      depthDimension: data.depthDimension ?? DEPTH_D,
      palette:        data.palette        ?? DEFAULT_PALETTE,
      activeTheme:    data.activeTheme    ?? 'synthwave',
      activeLayerId:  data.activeLayerId  ?? data.layers[0]?.id,
      undoStack:      [],
      redoStack:      [],
      selection:      null,
      floatingPaste:  null,
    })
    return true
  },

  // ── Selection tool ───────────────────────────────────────────────────────────
  selection:     null,   // {x1, y1, x2, y2} in canvas 2D coords (normalized)
  clipboard:     null,   // {w, h, colors: string[][]} visible colors
  floatingPaste: null,   // {col, row, w, h, colors: string[][]}

  setSelection(rect) {
    if (!rect) { set({ selection: null }); return }
    const { x1, y1, x2, y2 } = rect
    set({
      selection: {
        x1: Math.min(x1, x2), y1: Math.min(y1, y2),
        x2: Math.max(x1, x2), y2: Math.max(y1, y2),
      },
    })
  },

  clearSelection() { set({ selection: null, floatingPaste: null }) },

  copySelection() {
    const { selection, layers, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!selection) return
    const { x1, y1, x2, y2 } = selection
    const tw = x2 - x1 + 1, th = y2 - y1 + 1
    const composited = getCompositedVoxels(layers, W, H, D)
    const view2d = renderView2D(composited, activeView, W, H, D)

    // 2D visible-face colors (for floating paste overlay display)
    const colors = Array.from({ length: th }, (_, drow) =>
      Array.from({ length: tw }, (_, dcol) =>
        view2d[y1 + drow]?.[x1 + dcol] ?? 'transparent'
      )
    )

    // Full 3D voxel list — preserves depth for front/back views.
    // Stores (dcol, drow, z, color) where dcol/drow are canvas offsets
    // and z is the absolute voxel depth coordinate.
    const voxelList = []
    if (activeView === 'front') {
      for (let drow = 0; drow < th; drow++)
        for (let dcol = 0; dcol < tw; dcol++)
          for (let z = 0; z < D; z++) {
            const c = composited[y1 + drow]?.[x1 + dcol]?.[z]
            if (c && c !== 'transparent') voxelList.push({ dcol, drow, z, color: c })
          }
    } else if (activeView === 'back') {
      for (let drow = 0; drow < th; drow++)
        for (let dcol = 0; dcol < tw; dcol++) {
          const vx = W - 1 - (x1 + dcol)
          for (let z = 0; z < D; z++) {
            const c = composited[y1 + drow]?.[vx]?.[z]
            if (c && c !== 'transparent') voxelList.push({ dcol, drow, z, color: c })
          }
        }
    }
    // Side views fall back to colors-only (voxelList stays empty → 2D fallback in commitPaste)

    set({ clipboard: { w: tw, h: th, colors, voxelList } })
  },

  cutSelection() {
    const { selection, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!selection) return
    get().copySelection()
    const { x1, y1, x2, y2 } = selection
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)
    get().pushUndo()
    const layerVoxels = layers[layerIdx].voxels
    const allTargets = []
    for (let row = y1; row <= y2; row++) {
      for (let col = x1; col <= x2; col++) {
        if (col < 0 || col >= viewW || row < 0 || row >= viewH) continue
        const targets = getVoxelTargets(col, row, activeView, D, W, H, D)
        allTargets.push(...targets)
      }
    }
    const affectedY = new Set(allTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z } of allTargets) newVoxels[y][x][z] = 'transparent'
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers, selection: null })
  },

  pasteFromClipboard() {
    const { clipboard, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!clipboard) return
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)
    const col = Math.floor((viewW - clipboard.w) / 2)
    const row = Math.floor((viewH - clipboard.h) / 2)
    set({
      floatingPaste: {
        col, row,
        w: clipboard.w, h: clipboard.h,
        colors: clipboard.colors,
        voxelList: clipboard.voxelList?.length ? clipboard.voxelList : null,
        copyView: clipboard.voxelList?.length ? activeView : null,
      },
      selection: null,
    })
  },

  moveFloatingPaste(col, row) {
    const { floatingPaste } = get()
    if (!floatingPaste) return
    set({ floatingPaste: { ...floatingPaste, col, row } })
  },

  commitPaste() {
    const { floatingPaste, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!floatingPaste) return
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    get().pushUndo()
    const { col: startCol, row: startRow, w, h, colors, voxelList } = floatingPaste
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)
    const layerVoxels = layers[layerIdx].voxels
    const allTargets = []

    if (voxelList?.length) {
      // Full 3D paste — preserves depth
      for (const { dcol, drow, z, color } of voxelList) {
        const col = startCol + dcol
        const row = startRow + drow
        let vx, vy
        if (activeView === 'front') {
          vx = col; vy = row
        } else if (activeView === 'back') {
          vx = W - 1 - col; vy = row
        } else {
          continue // other views: skip 3D, handled by 2D fallback below
        }
        if (vx >= 0 && vx < W && vy >= 0 && vy < H && z >= 0 && z < D)
          allTargets.push({ x: vx, y: vy, z, color })
      }
    } else {
      // 2D fallback — single depth layer
      for (let drow = 0; drow < h; drow++) {
        for (let dcol = 0; dcol < w; dcol++) {
          const color = colors[drow]?.[dcol]
          if (!color || color === 'transparent') continue
          const col = startCol + dcol
          const row = startRow + drow
          if (col < 0 || col >= viewW || row < 0 || row >= viewH) continue
          const targets = getVoxelTargets(col, row, activeView, 1, W, H, D)
          for (const t of targets) allTargets.push({ ...t, color })
        }
      }
    }

    const affectedY = new Set(allTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z, color } of allTargets) newVoxels[y][x][z] = color
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers, floatingPaste: null })
  },

  cancelPaste() { set({ floatingPaste: null }) },

  flipClipboard(axis) {
    const { clipboard } = get()
    if (!clipboard) return
    const { w, h } = clipboard

    const flippedColors = axis === 'h'
      ? clipboard.colors.map(row => [...row].reverse())
      : [...clipboard.colors].reverse()

    const flippedVoxelList = clipboard.voxelList?.map(v => ({
      ...v,
      dcol: axis === 'h' ? (w - 1 - v.dcol) : v.dcol,
      drow: axis === 'v' ? (h - 1 - v.drow) : v.drow,
    })) ?? null

    const newClip = { ...clipboard, colors: flippedColors, voxelList: flippedVoxelList }
    const { floatingPaste } = get()
    set({
      clipboard: newClip,
      floatingPaste: floatingPaste
        ? { ...floatingPaste, colors: flippedColors, voxelList: flippedVoxelList }
        : null,
    })
  },

  deleteSelection() {
    const { selection, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!selection) return
    const { x1, y1, x2, y2 } = selection
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)
    get().pushUndo()
    const layerVoxels = layers[layerIdx].voxels
    const allTargets = []
    for (let row = y1; row <= y2; row++) {
      for (let col = x1; col <= x2; col++) {
        if (col < 0 || col >= viewW || row < 0 || row >= viewH) continue
        allTargets.push(...getVoxelTargets(col, row, activeView, D, W, H, D))
      }
    }
    const affectedY = new Set(allTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z } of allTargets) newVoxels[y][x][z] = 'transparent'
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers, selection: null })
  },
}))
