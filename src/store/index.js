import { create } from 'zustand'
import { rotateBox, scaleBox, getDefaultAnchor, getPresetAnchor } from '../lib/selectionTransform.js'
import { clampBrushSize } from '../lib/brushFootprint.js'
import {
  OPPOSITE_VIEW,
  applyEditBoundsAxisLocks,
  boundsFromViewRect,
  getExistingVoxelTargets,
  getSurfaceVoxelTargets,
  getThroughVoxelTargets,
  getViewDepthSize,
  getViewSize,
  getVoxelTargets,
  isVoxelInsideEditBounds,
  makeFullEditBounds,
} from './viewGeometry.js'
import {
  createLayer,
  getCompositedMaterials,
  getCompositedVoxels,
  layerHasVoxel,
  makeEmptyVoxels,
  resizeLayerCanvases,
  resizeLayerDepth,
  syncLayerSequence,
} from './layerModel.js'
import { applyVoxelColor, applyVoxelMaterial, collectFloodFillTargets } from './voxelCommands.js'
import {
  applyPasteTargets,
  collectPasteTargets,
  collectSelectionTargets,
  createCenteredFloatingPaste,
  createSelectionClipboard,
  eraseSelectionTargets,
  flipClipboard as flipSelectionClipboard,
  getSelectionVolumeBounds,
  moveFloatingPaste as moveSelectionPaste,
  normalizeSelection,
  shiftVoxelListZ,
} from './selection2DCommands.js'
import { createHistorySlice } from './slices/historySlice.js'
import { createLayerSlice } from './slices/layerSlice.js'
import { createSelection3DSlice } from './slices/selection3DSlice.js'
import { renderDepthMap2D, renderView2D } from './viewProjection.js'

export { renderDepthMap2D, renderView2D }

export { getCompositedMaterials, getCompositedVoxels } from './layerModel.js'

export {
  OPPOSITE_VIEW,
  getExistingVoxelTargets,
  getSurfaceVoxelTargets,
  getThroughVoxelTargets,
  getViewDepthSize,
  getViewRayCoords,
  getViewSize,
  getVoxelTargets,
  isVoxelInsideEditBounds,
  makeFullEditBounds,
  projectEditBoundsToView,
} from './viewGeometry.js'

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

// ── Store ──────────────────────────────────────────────────────────────────────

const _initLayer = createLayer(CANVAS_W, CANVAS_H, DEPTH_D)

export const useStore = create((set, get) => ({
  // ── Canvas / Voxels ──────────────────────────────────────────────────────────
  canvasWidth:    CANVAS_W,
  canvasHeight:   CANVAS_H,
  depthDimension: DEPTH_D,
  editBoundsEnabled: false,
  editBounds: makeFullEditBounds(CANVAS_W, CANVAS_H, DEPTH_D),
  editBoundsAxisLocks: { x: false, y: false, z: false },
  pixelSize:      14,
  showGrid:       true,
  currentColor:   '#c8860a',
  activeTool:     'pencil',
  blendEndColor:  '#003366',
  palette:        DEFAULT_PALETTE,
  recentColors:   [],
  ...createLayerSlice(set, get, _initLayer),
  ...createHistorySlice(set, get),
  ...createSelection3DSlice(set, get),

  setEditBoundsEnabled(enabled) {
    get().pushUndo()
    set({ editBoundsEnabled: Boolean(enabled) })
  },

  resetEditBounds() {
    const { canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    get().pushUndo()
    set({ editBounds: makeFullEditBounds(W, H, D), editBoundsEnabled: true })
  },

  setEditBounds(nextBounds) {
    const { canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    const clampPair = (min, max, size) => {
      const a = Math.max(0, Math.min(size - 1, Math.round(Number(min) || 0)))
      const b = Math.max(0, Math.min(size - 1, Math.round(Number(max) || 0)))
      return [Math.min(a, b), Math.max(a, b)]
    }
    const [minX, maxX] = clampPair(nextBounds.minX, nextBounds.maxX, W)
    const [minY, maxY] = clampPair(nextBounds.minY, nextBounds.maxY, H)
    const [minZ, maxZ] = clampPair(nextBounds.minZ, nextBounds.maxZ, D)
    set({ editBounds: { minX, maxX, minY, maxY, minZ, maxZ }, editBoundsEnabled: true })
  },

  setEditBoundsFromView(view, rect) {
    const { editBounds, editBoundsAxisLocks, canvasWidth: W, canvasHeight: H, depthDimension: D } = get()
    const next = boundsFromViewRect(editBounds, view, rect, W, H, D)
    get().setEditBounds(applyEditBoundsAxisLocks(editBounds, next, editBoundsAxisLocks))
  },

  setEditBoundsAxisLock(axis, locked) {
    if (!['x', 'y', 'z'].includes(axis)) return
    set(state => ({ editBoundsAxisLocks: { ...state.editBoundsAxisLocks, [axis]: Boolean(locked) } }))
  },

  fitEditBoundsToModel() {
    const { layers, editBounds, editBoundsAxisLocks } = get()
    let minX = Infinity, minY = Infinity, minZ = Infinity
    let maxX = -1, maxY = -1, maxZ = -1
    for (const layer of layers) {
      if (!layer.visible) continue
      for (let y = 0; y < layer.voxels.length; y++) {
        for (let x = 0; x < (layer.voxels[y]?.length || 0); x++) {
          for (let z = 0; z < (layer.voxels[y]?.[x]?.length || 0); z++) {
            if (!layerHasVoxel(layer, x, y, z)) continue
            minX = Math.min(minX, x); maxX = Math.max(maxX, x)
            minY = Math.min(minY, y); maxY = Math.max(maxY, y)
            minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z)
          }
        }
      }
    }
    if (maxX < 0) return
    get().pushUndo()
    get().setEditBounds(applyEditBoundsAxisLocks(
      editBounds,
      { minX, maxX, minY, maxY, minZ, maxZ },
      editBoundsAxisLocks,
    ))
  },

  fitEditBoundsToSelection() {
    const {
      selection3D, selection, floatingPaste, activeView,
      editBounds, editBoundsAxisLocks,
      canvasWidth: W, canvasHeight: H, depthDimension: D,
      paintDepthStart, paintDepthEnd, paintDirection,
    } = get()
    const next = getSelectionVolumeBounds({
      selection3D, selection, floatingPaste, view: activeView,
      width: W, height: H, depth: D,
      editBoundsEnabled: get().editBoundsEnabled,
      editBounds,
      range: { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection },
    })
    if (!next) return
    get().pushUndo()
    get().setEditBounds(applyEditBoundsAxisLocks(editBounds, next, editBoundsAxisLocks))
  },

  confirmLargeOperation(label, affectedCount) {
    const { confirmLargeOperations, largeOperationThreshold } = get()
    if (affectedCount <= 0) return false
    if (!confirmLargeOperations || affectedCount < largeOperationThreshold) return true
    if (typeof window === 'undefined' || typeof window.confirm !== 'function') return true
    return window.confirm(`${label}\n\nThis operation will affect ${affectedCount.toLocaleString()} voxels.`)
  },

  /** Paint (or erase) voxels at a canvas click position. Does NOT push undo.
   *  @param {string|null} opts.sideDrawModeOverride  Temporarily override sideDrawMode ('edit'|'draw'|null)
   *  @param {boolean}     opts.fullDepthErase         Erase all voxels along the full ray depth
   */
  paintAt(col, row, color, { sideDrawModeOverride = null, fullDepthErase = false, operationMode = null } = {}) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeView, paintDepth, paintDepthStart, paintDepthEnd, paintDirection,
      sideDrawMode, pencilMode, eraserMode,
      operationLayerScope, throughMode,
      symmetryX, symmetryY, symmetryOpposite,
      editBoundsEnabled, editBounds,
    } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layerVoxels = layers[layerIdx].voxels
    const effectiveMode = sideDrawModeOverride ?? sideDrawMode
    const { w, h } = getViewSize(activeView, W, H, D)
    const depthCount = fullDepthErase ? D : paintDepth
    const depthRange = fullDepthErase
      ? { start: 1, end: D, direction: 'both' }
      : { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection }
    const activeBounds = editBoundsEnabled ? editBounds : null
    const rayMode = operationMode ?? (color === 'transparent' ? eraserMode : pencilMode)

    // Lazy composited voxels — only computed when a side-draw mode is needed.
    let _composited = null
    const getComposited = () => _composited ?? (_composited = getCompositedVoxels(layers, W, H, D))
    const getRayVoxels = () => operationLayerScope === 'active' ? layerVoxels : getComposited()

    // Returns 3D voxel targets for a canvas position in the given view.
    // front is always face-based. back and all side views respect effectiveMode.
    const getTargets = (c, r, view, forceDrawMode = false) => {
      if (rayMode === 'surface')
        return getSurfaceVoxelTargets(getComposited(), c, r, view, depthCount, W, H, D, activeBounds, depthRange)
      if (rayMode === 'through')
        return getThroughVoxelTargets(getRayVoxels(), c, r, view, throughMode, W, H, D, activeBounds)
      if (rayMode === 'visible')
        return getExistingVoxelTargets(getRayVoxels(), c, r, view, 1, W, H, D, activeBounds)
      if (view === 'front') return getVoxelTargets(c, r, view, depthCount, W, H, D, activeBounds, depthRange)
      const mode = forceDrawMode ? 'draw' : effectiveMode
      return mode === 'draw'
        ? getSurfaceVoxelTargets(getComposited(), c, r, view, depthCount, W, H, D, activeBounds, depthRange)
        : getVoxelTargets(c, r, view, depthCount, W, H, D, activeBounds, depthRange)
          .filter(({ x, y, z }) => layerHasVoxel(layers[layerIdx], x, y, z))
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
      if (editBoundsEnabled && !isVoxelInsideEditBounds(t.x, t.y, t.z, editBounds)) return
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
    get().paintVoxelsDirect(allTargets, color)
  },

  floodFillVoxel(col, row, newColor) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeView, paintDepth, paintDepthStart, paintDepthEnd, paintDirection, sideDrawMode,
      symmetryX, symmetryY, symmetryOpposite,
      editBoundsEnabled, editBounds,
      operationLayerScope,
    } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const layerVoxels = layers[layerIdx].voxels
    const scopeVoxels = operationLayerScope === 'active'
      ? layerVoxels
      : getCompositedVoxels(layers, W, H, D)

    const view2d = renderView2D(scopeVoxels, activeView, W, H, D)
    const { w, h } = getViewSize(activeView, W, H, D)
    const projectedBounds = editBoundsEnabled ? projectEditBoundsToView(editBounds, activeView, W, H, D) : null
    const target = view2d[row]?.[col]
    if (!target || target === newColor) return

    const undoTransaction = get().beginUndoTransaction()

    const visited = new Set()
    const stack = [[col, row]]
    const matching = []
    while (stack.length) {
      const [c, r] = stack.pop()
      if (c < 0 || r < 0 || c >= w || r >= h) continue
      if (projectedBounds && (c < projectedBounds.x1 || c > projectedBounds.x2 || r < projectedBounds.y1 || r > projectedBounds.y2)) continue
      const key = `${c},${r}`
      if (visited.has(key)) continue
      visited.add(key)
      if (view2d[r]?.[c] !== target) continue
      matching.push([c, r])
      stack.push([c+1,r],[c-1,r],[c,r+1],[c,r-1])
    }

    let _composited = null
    const getComposited = () => _composited ?? (_composited = getCompositedVoxels(layers, W, H, D))
    const activeBounds = editBoundsEnabled ? editBounds : null
    const depthRange = { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection }

    const getTargets = (c, r, view, forceDrawMode = false) => {
      if (view === 'front') return getVoxelTargets(c, r, view, paintDepth, W, H, D, activeBounds, depthRange)
      const mode = forceDrawMode ? 'draw' : sideDrawMode
      return mode === 'draw'
        ? getSurfaceVoxelTargets(getComposited(), c, r, view, paintDepth, W, H, D, activeBounds, depthRange)
        : getVoxelTargets(c, r, view, paintDepth, W, H, D, activeBounds, depthRange)
          .filter(({ x, y, z }) => {
            const color = scopeVoxels[y]?.[x]?.[z]
            return color && color !== 'transparent'
          })
    }

    const seenVox = new Set()
    const allTargets = []
    const addTarget = (t) => {
      if (editBoundsEnabled && !isVoxelInsideEditBounds(t.x, t.y, t.z, editBounds)) return
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
    if (!allTargets.length) {
      get().finishUndoTransaction(undoTransaction)
      return
    }

    get().paintVoxelsDirect(allTargets, newColor)
    get().finishUndoTransaction(undoTransaction)
  },

  setCurrentColor(color) {
    set(s => ({
      currentColor: color,
      recentColors: [color, ...s.recentColors.filter(c => c !== color)].slice(0, 10),
    }))
  },
  setActiveTool:   (tool)  => set(s => ({
    activeTool: tool,
    flyMode: ['select', 'bounds', 'rect', 'circle', 'ellipse', 'line', 'box3d', 'sphere3d', 'cylinder3d'].includes(tool)
      ? false
      : s.flyMode,
  })),
  setPixelSize:    (size)  => set({ pixelSize: Math.max(4, Math.min(32, size)) }),
  toggleGrid:      ()      => set(s => ({ showGrid: !s.showGrid })),

  clearCanvas({ skipConfirmation = false } = {}) {
    const { layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, editBoundsEnabled, editBounds } = get()
    const activeLayer = layers.find(layer => layer.id === activeLayerId)
    if (!activeLayer) return
    let affectedCount = 0
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        for (let z = 0; z < D; z++) {
          if (editBoundsEnabled && !isVoxelInsideEditBounds(x, y, z, editBounds)) continue
          if (layerHasVoxel(activeLayer, x, y, z)) affectedCount++
        }
    if (!skipConfirmation && !get().confirmLargeOperation(
      editBoundsEnabled ? 'Clear voxels inside Edit Bounds?' : 'Clear the active layer?',
      affectedCount,
    )) return
    if (affectedCount <= 0) return
    get().pushUndo()
    const newLayers = layers.map(l => {
      if (l.id !== activeLayerId) return l
      if (!editBoundsEnabled) return { ...l, voxels: makeEmptyVoxels(W, H, D), voxelMaterials: {} }
      const voxels = l.voxels.map((plane, y) => plane.map((row, x) => row.map((color, z) =>
        isVoxelInsideEditBounds(x, y, z, editBounds) ? 'transparent' : color
      )))
      const voxelMaterials = Object.fromEntries(Object.entries(l.voxelMaterials || {}).filter(([key]) => {
        const [y, x, z] = key.split(',').map(Number)
        return !isVoxelInsideEditBounds(x, y, z, editBounds)
      }))
      return { ...l, voxels, voxelMaterials }
    })
    set({ layers: newLayers })
  },

  resizeCanvas(newW, newH) {
    newW = Math.max(4, Math.min(256, Math.round(newW)))
    newH = Math.max(4, Math.min(256, Math.round(newH)))
    const {
      layers, canvasWidth: W, canvasHeight: H, depthDimension: D,
      planeAxis, planeDepth, editBounds, activeView, paintDepthStart, paintDepthEnd,
    } = get()
    get().pushUndo()

    const { layers: newLayers, offsetX: offX, offsetY: offY } = resizeLayerCanvases(
      layers, W, H, newW, newH, D,
    )

    const planeSize = planeAxis === 'x' ? newW : planeAxis === 'y' ? newH : D
    const maxPaintDepth = getViewDepthSize(activeView, newW, newH, D)
    const shiftedBounds = {
      ...editBounds,
      minX: Math.max(0, Math.min(newW - 1, editBounds.minX + offX)),
      maxX: Math.max(0, Math.min(newW - 1, editBounds.maxX + offX)),
      minY: Math.max(0, Math.min(newH - 1, editBounds.minY + offY)),
      maxY: Math.max(0, Math.min(newH - 1, editBounds.maxY + offY)),
    }
    set({
      canvasWidth: newW,
      canvasHeight: newH,
      layers: newLayers,
      editBounds: shiftedBounds,
      planeDepth: Math.max(0, Math.min(planeSize - 1, planeDepth)),
      paintDepthStart: Math.min(paintDepthStart, maxPaintDepth),
      paintDepthEnd: Math.min(paintDepthEnd, maxPaintDepth),
    })
  },

  setDepthDimension(newD) {
    newD = Math.max(4, Math.min(256, Math.round(newD)))
    const {
      layers, canvasWidth: W, canvasHeight: H, depthDimension: D, paintDepth,
      paintDepthStart, paintDepthEnd,
      planeAxis, planeDepth, editBounds, activeView,
    } = get()
    get().pushUndo()

    const { layers: newLayers, offsetZ: offZ } = resizeLayerDepth(layers, W, H, D, newD)

    const maxPaintDepth = getViewDepthSize(activeView, W, H, newD)
    set({
      depthDimension: newD,
      layers: newLayers,
      editBounds: {
        ...editBounds,
        minZ: Math.max(0, Math.min(newD - 1, editBounds.minZ + offZ)),
        maxZ: Math.max(0, Math.min(newD - 1, editBounds.maxZ + offZ)),
      },
      paintDepth: Math.min(paintDepth, newD),
      paintDepthStart: Math.min(paintDepthStart, maxPaintDepth),
      paintDepthEnd: Math.min(paintDepthEnd, maxPaintDepth),
      planeDepth: planeAxis === 'z'
        ? Math.max(0, Math.min(newD - 1, planeDepth))
        : planeDepth,
    })
  },

  addToPalette(color) {
    const { palette } = get()
    if (!palette.includes(color)) set({ palette: [...palette, color] })
  },

  /** Directly set a single voxel in the active layer (used by 3D editor). Does NOT push undo. */
  paintVoxelDirect(x, y, z, color) {
    get().paintVoxelsDirect([{ x, y, z }], color)
  },

  /** Set a batch of voxels in one immutable layer update (used by 3D shapes). */
  paintVoxelsDirect(targets, color) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      editBoundsEnabled, editBounds, operationLayerScope,
    } = get()
    const result = applyVoxelColor({
      layers, activeLayerId, scope: operationLayerScope, targets, color,
      width: W, height: H, depth: D,
      bounds: editBoundsEnabled ? editBounds : null,
    })
    if (result) set({ layers: result.layers })
  },

  /** Flood-fill existing voxels from a picked face in the 3D editor.
   *  `side` fills the connected coplanar surface under the clicked face.
   *  `all` fills the full 6-connected component of the picked color.
   *  Does NOT push undo; the 3D pointer handler owns the stroke snapshot.
   */
  floodFillVoxel3D(x, y, z, newColor, faceNormal) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      fillScope, editBoundsEnabled, editBounds,
    } = get()
    if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) return
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return

    const composited = getCompositedVoxels(layers, W, H, D)
    if (composited[y]?.[x]?.[z] === newColor) return
    const targets = collectFloodFillTargets({
      voxels: composited, start: { x, y, z }, scope: fillScope, faceNormal,
      width: W, height: H, depth: D,
      bounds: editBoundsEnabled ? editBounds : null,
    })
    if (!targets.length) return
    get().paintVoxelsDirect(targets, newColor)
  },

  // ── Voxel view ───────────────────────────────────────────────────────────────
  activeView:     'front',
  paintDepth:     1,
  paintDepthStart: 1,
  paintDepthEnd:   1,
  paintDirection: 'inward',

  // 'edit' = only modify existing voxels (default for all non-front views)
  // 'draw' = freely place new voxels
  sideDrawMode: 'edit',

  // Brush ray behavior, shared by all orthographic views and the 3D editor.
  // surface = add outside the first visible face; visible = replace frontmost;
  // through = replace/remove every occupied voxel along the ray.
  pencilMode: 'surface',
  eraserMode: 'visible',
  throughMode: 'occupied',
  operationLayerScope: 'active',

  // 3D fill: one picked planar face, or the whole connected color volume.
  fillScope: 'side',

  // Optional 3D drawing plane. Depth is a zero-based voxel coordinate on its axis.
  planeLock:  false,
  planeAxis:  'z',
  planeDepth: DEPTH_D - 1,

  // Shape rendering shared by the 2D canvas and the 3D editor.
  shapeMode:      'outline',
  shapeThickness: 1,
  primitiveDepth: 4,

  brushSize: 1,

  // Symmetry flags
  symmetryX:        false,
  symmetryY:        false,
  symmetryOpposite: false,

  setActiveView:      (view) => set(s => {
    const maxDepth = getViewDepthSize(view, s.canvasWidth, s.canvasHeight, s.depthDimension)
    return {
      activeView: view,
      paintDepthStart: Math.min(s.paintDepthStart, maxDepth),
      paintDepthEnd: Math.min(s.paintDepthEnd, maxDepth),
    }
  }),
  setPaintDepth:      (d)    => set(s => ({
    paintDepth: Math.max(1, Math.min(s.depthDimension, Math.round(d))),
    paintDepthStart: 1,
    paintDepthEnd: Math.max(1, Math.min(s.depthDimension, Math.round(d))),
  })),
  setPaintDepthStart: (value) => set(s => {
    const maxDepth = getViewDepthSize(s.activeView, s.canvasWidth, s.canvasHeight, s.depthDimension)
    const start = Math.max(1, Math.min(maxDepth, Math.round(value)))
    return { paintDepthStart: start, paintDepthEnd: Math.max(start, s.paintDepthEnd) }
  }),
  setPaintDepthEnd: (value) => set(s => {
    const maxDepth = getViewDepthSize(s.activeView, s.canvasWidth, s.canvasHeight, s.depthDimension)
    const end = Math.max(1, Math.min(maxDepth, Math.round(value)))
    return { paintDepthEnd: end, paintDepthStart: Math.min(end, s.paintDepthStart), paintDepth: end }
  }),
  setPaintDirection:  (dir)  => set({
    paintDirection: ['inward', 'outward', 'both'].includes(dir) ? dir : 'inward',
  }),
  setSideDrawMode:    (mode) => set({ sideDrawMode: mode }),
  setPencilMode:      (mode) => set({ pencilMode: ['surface', 'visible', 'through'].includes(mode) ? mode : 'surface' }),
  setEraserMode:      (mode) => set({ eraserMode: mode === 'through' ? 'through' : 'visible' }),
  setThroughMode:     (mode) => set({
    throughMode: ['occupied', 'solid', 'contiguous'].includes(mode) ? mode : 'occupied',
  }),
  setOperationLayerScope: (scope) => set({
    operationLayerScope: ['active', 'all-visible', 'topmost'].includes(scope) ? scope : 'active',
  }),
  setFillScope:       (scope) => set({ fillScope: scope === 'all' ? 'all' : 'side' }),
  setPlaneLock:       (locked) => set({ planeLock: Boolean(locked) }),
  setPlaneAxis:       (axis) => set(s => {
    const nextAxis = axis === 'x' || axis === 'y' ? axis : 'z'
    const size = nextAxis === 'x' ? s.canvasWidth : nextAxis === 'y' ? s.canvasHeight : s.depthDimension
    return {
      planeAxis: nextAxis,
      planeDepth: Math.max(0, Math.min(size - 1, s.planeDepth)),
    }
  }),
  setPlaneDepth:      (depth) => set(s => {
    const size = s.planeAxis === 'x'
      ? s.canvasWidth
      : s.planeAxis === 'y' ? s.canvasHeight : s.depthDimension
    return { planeDepth: Math.max(0, Math.min(size - 1, Math.round(depth))) }
  }),
  setShapeMode:       (mode) => set({ shapeMode: mode === 'fill' ? 'fill' : 'outline' }),
  setShapeThickness:  (value) => set({
    shapeThickness: Math.max(1, Math.min(8, Math.round(value))),
  }),
  setPrimitiveDepth:  (value) => set({
    primitiveDepth: Math.max(1, Math.min(64, Math.round(value))),
  }),
  setBrushSize:       (value) => set({ brushSize: clampBrushSize(value) }),
  setSymmetryX:       (v)    => set({ symmetryX: v }),
  setSymmetryY:       (v)    => set({ symmetryY: v }),
  setSymmetryOpposite:(v)    => set({ symmetryOpposite: v }),

  activeMaterial:    'solid',
  setActiveMaterial: (mat) => set({ activeMaterial: mat }),

  paintMaterialAt(col, row) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeView, paintDepth, paintDepthStart, paintDepthEnd, paintDirection,
      activeMaterial, editBoundsEnabled, editBounds,
    } = get()
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const targets = getVoxelTargets(
      col, row, activeView, paintDepth, W, H, D,
      editBoundsEnabled ? editBounds : null,
      { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection },
    )
    get().paintMaterialsDirect(targets)
  },

  /** Directly apply or remove material on a single voxel (used by 3D viewport) */
  paintMaterialDirect(x, y, z) {
    get().paintMaterialsDirect([{ x, y, z }])
  },

  /** Apply the active material to a batch of existing voxels in one update. */
  paintMaterialsDirect(targets) {
    const {
      layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D,
      activeMaterial, editBoundsEnabled, editBounds, operationLayerScope,
    } = get()
    const result = applyVoxelMaterial({
      layers, activeLayerId, scope: operationLayerScope, targets, material: activeMaterial,
      width: W, height: H, depth: D,
      bounds: editBoundsEnabled ? editBounds : null,
    })
    if (result) set({ layers: result.layers })
  },

  // ── Reference image overlay ──────────────────────────────────────────────────
  referenceImage: null, // { src, x, y, width, height, opacity }

  setReferenceImage:  (data) => set({ referenceImage: data }),
  clearReferenceImage: ()    => set({ referenceImage: null }),

  // ── UI ───────────────────────────────────────────────────────────────────────
  viewMode:          'split',
  flyMode:           false,
  activeTheme:       'synthwave',
  showDepthText:     true,
  showShortcutsPanel: false,
  showLockedVoxels: false,
  confirmLargeOperations: true,
  largeOperationThreshold: 256,

  setViewMode:           (mode)  => set(s => ({ viewMode: mode, flyMode: mode === 'canvas-only' ? false : s.flyMode })),
  setFlyMode:            (v)     => set({ flyMode: Boolean(v) }),
  toggleFlyMode:         ()      => set(s => ({ flyMode: !s.flyMode })),
  setActiveTheme:        (theme) => set({ activeTheme: theme }),
  setShowDepthText:      (v)     => set({ showDepthText: v }),
  setShowLockedVoxels:   (v)     => set({ showLockedVoxels: Boolean(v) }),
  setConfirmLargeOperations: (v) => set({ confirmLargeOperations: Boolean(v) }),
  setLargeOperationThreshold: (value) => set({
    largeOperationThreshold: Math.max(1, Math.min(1000000, Math.round(value) || 1)),
  }),
  setBlendEndColor:      (c)     => set({ blendEndColor: c }),
  toggleShortcutsPanel:  ()      => set(s => ({ showShortcutsPanel: !s.showShortcutsPanel })),

  // ── Project I/O ──────────────────────────────────────────────────────────────

  getProjectData() {
    const {
      layers, canvasWidth, canvasHeight, depthDimension,
      palette, activeTheme, activeLayerId, editBoundsEnabled, editBounds,
    } = get()
    return {
      version: 2,
      canvasWidth, canvasHeight, depthDimension,
      activeLayerId, palette, activeTheme, layers, editBoundsEnabled, editBounds,
    }
  },

  loadProjectData(data) {
    if (!data || ![1, 2].includes(data.version) || !Array.isArray(data.layers)) return false
    const W = data.canvasWidth ?? CANVAS_W
    const H = data.canvasHeight ?? CANVAS_H
    const D = data.depthDimension ?? DEPTH_D
    syncLayerSequence(data.layers)
    set({
      layers:         data.layers,
      canvasWidth:    W,
      canvasHeight:   H,
      depthDimension: D,
      editBoundsEnabled: Boolean(data.editBoundsEnabled),
      editBounds: data.editBounds ?? makeFullEditBounds(W, H, D),
      palette:        data.palette        ?? DEFAULT_PALETTE,
      activeTheme:    data.activeTheme    ?? 'synthwave',
      activeLayerId:  data.activeLayerId  ?? data.layers[0]?.id,
      undoStack:      [],
      redoStack:      [],
      selection:      null,
      selection3D:    null,
      floatingPaste:  null,
      lassoPreview:   null,
      selectionAnchor: null,
    })
    return true
  },

  // ── Selection tool ───────────────────────────────────────────────────────────
  selectionMode:   'rect', // 'rect' | 'lasso'
  selection:       null,   // {x1, y1, x2, y2, type, mask, polygon} in canvas 2D coords
  clipboard:       null,   // {w, h, colors: string[][]} visible colors
  floatingPaste:   null,   // {col, row, w, h, colors: string[][]}
  lassoPreview:    null,   // [{col, row}, ...] points while dragging lasso
  selectionAnchor: null,   // {x, y} anchor/pivot point in canvas coordinates

  setSelectionMode(mode) {
    set({ selectionMode: mode, activeTool: 'select' })
  },

  setLassoPreview(points) {
    set({ lassoPreview: points })
  },

  setFloatingPaste(fp) {
    set({ floatingPaste: fp })
  },

  setSelection(sel) {
    if (!sel) { set({ selection: null, lassoPreview: null, selectionAnchor: null }); return }
    const normalized = normalizeSelection(sel)
    if (!normalized) return
    const defaultAnchor = getDefaultAnchor(normalized)
    set({
      selection: normalized,
      selectionAnchor: defaultAnchor,
      lassoPreview: null,
    })
  },

  setSelectionAnchor(anchor) {
    set({ selectionAnchor: anchor })
  },

  setAnchorPreset(preset) {
    const { selection, floatingPaste } = get()
    let box = null
    if (floatingPaste) {
      box = { x1: floatingPaste.col, y1: floatingPaste.row, x2: floatingPaste.col + floatingPaste.w - 1, y2: floatingPaste.row + floatingPaste.h - 1 }
    } else if (selection) {
      box = selection
    }
    if (!box) return
    const anchor = getPresetAnchor(box, preset)
    set({ selectionAnchor: anchor })
  },

  resetSelectionAnchor() {
    const { selection, floatingPaste } = get()
    let box = null
    if (floatingPaste) {
      box = { x1: floatingPaste.col, y1: floatingPaste.row, x2: floatingPaste.col + floatingPaste.w - 1, y2: floatingPaste.row + floatingPaste.h - 1 }
    } else if (selection) {
      box = selection
    }
    if (!box) return
    set({ selectionAnchor: getDefaultAnchor(box) })
  },

  liftSelectionToFloating() {
    const { selection, floatingPaste } = get()
    if (floatingPaste || !selection) return
    const { x1, y1 } = selection
    const savedAnchor = get().selectionAnchor || getDefaultAnchor(selection)
    if (!get().cutSelection()) return false
    get().pasteFromClipboard()
    const fp = get().floatingPaste
    if (fp) {
      set({
        floatingPaste: { ...fp, col: x1, row: y1 },
        selectionAnchor: savedAnchor,
      })
      return true
    }
    return false
  },

  rotateSelection(angleRad) {
    const { selection, floatingPaste } = get()
    if (!floatingPaste && selection) {
      get().liftSelectionToFloating()
    }
    const fp = get().floatingPaste
    if (!fp) return
    const anchor = get().selectionAnchor || { x: fp.col + fp.w / 2, y: fp.row + fp.h / 2 }
    const rotated = rotateBox(fp, angleRad, anchor.x, anchor.y)
    set({ floatingPaste: rotated })
  },

  scaleSelection(scaleX, scaleY) {
    const { selection, floatingPaste } = get()
    if (!floatingPaste && selection) {
      get().liftSelectionToFloating()
    }
    const fp = get().floatingPaste
    if (!fp) return
    const anchor = get().selectionAnchor || { x: fp.col + fp.w / 2, y: fp.row + fp.h / 2 }
    const scaled = scaleBox(fp, scaleX, scaleY, anchor.x, anchor.y)
    set({ floatingPaste: scaled })
  },

  shiftSelectionDepth(delta) {
    const { selection, floatingPaste, depthDimension: D } = get()
    if (!floatingPaste && selection) {
      get().liftSelectionToFloating()
    }
    const fp = get().floatingPaste
    if (!fp) return
    let newVoxelList = null
    if (fp.voxelList && fp.voxelList.length > 0) {
      newVoxelList = shiftVoxelListZ(fp.voxelList, delta, fp.copyView || get().activeView, D)
    } else {
      newVoxelList = []
      const baseZ = Math.max(0, Math.min(D - 1, Math.floor(D / 2) + delta))
      for (let r = 0; r < fp.h; r++) {
        for (let c = 0; c < fp.w; c++) {
          const color = fp.colors[r]?.[c]
          if (color && color !== 'transparent') {
            newVoxelList.push({ dcol: c, drow: r, z: baseZ, color })
          }
        }
      }
    }
    set({ floatingPaste: { ...fp, voxelList: newVoxelList } })
  },

  clearSelection() {
    set({
      selection: null,
      floatingPaste: null,
      lassoPreview: null,
      selectionAnchor: null,
    })
  },

  copySelection() {
    const {
      selection, layers, activeLayerId,
      canvasWidth: W, canvasHeight: H, depthDimension: D, activeView,
      editBoundsEnabled, editBounds, paintDepthStart, paintDepthEnd, paintDirection,
    } = get()
    const clipboard = createSelectionClipboard({
      selection, layers, sourceLayerId: activeLayerId,
      width: W, height: H, depth: D, view: activeView,
      bounds: editBoundsEnabled ? editBounds : null,
      range: { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection },
    })
    if (clipboard) set({ clipboard })
  },

  cutSelection() {
    const {
      selection, layers, activeLayerId,
      canvasWidth: W, canvasHeight: H, depthDimension: D, activeView,
      editBoundsEnabled, editBounds, paintDepthStart, paintDepthEnd, paintDirection,
    } = get()
    if (!selection) return false
    const bounds = editBoundsEnabled ? editBounds : null
    const targets = collectSelectionTargets({
      selection, view: activeView, width: W, height: H, depth: D, bounds,
      range: { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection },
    })
    const result = eraseSelectionTargets(layers, activeLayerId, targets)
    if (!result) return false
    if (!result.affectedCount) {
      set({ clipboard: null })
      return false
    }
    if (!get().confirmLargeOperation('Cut selected voxels?', result.affectedCount)) return false
    const clipboard = createSelectionClipboard({
      selection, layers, sourceLayerId: activeLayerId,
      width: W, height: H, depth: D, view: activeView, bounds,
      range: { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection },
    })
    get().pushUndo()
    set({ layers: result.layers, clipboard, selection: null })
    return true
  },

  pasteFromClipboard() {
    const { clipboard, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!clipboard) return
    const floatingPaste = createCenteredFloatingPaste(clipboard, activeView, W, H, D)
    set({
      floatingPaste,
      selection: null,
    })
  },

  moveFloatingPaste(col, row) {
    const { floatingPaste, selectionAnchor } = get()
    if (!floatingPaste) return
    const moved = moveSelectionPaste(floatingPaste, selectionAnchor, col, row)
    set({
      floatingPaste: moved.floatingPaste,
      selectionAnchor: moved.anchor,
    })
  },

  commitPaste() {
    const { floatingPaste, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, editBoundsEnabled, editBounds } = get()
    if (!floatingPaste) return
    const targets = collectPasteTargets({
      floatingPaste, view: activeView, width: W, height: H, depth: D,
      bounds: editBoundsEnabled ? editBounds : null,
    })
    const result = applyPasteTargets(layers, activeLayerId, targets)
    if (!result) return
    if (!result.affectedCount) {
      set({ floatingPaste: null, selectionAnchor: null })
      return
    }
    if (!get().confirmLargeOperation('Paste voxels?', result.affectedCount)) return
    get().pushUndo()
    set({ layers: result.layers, floatingPaste: null, selectionAnchor: null })
  },

  cancelPaste() { set({ floatingPaste: null, selectionAnchor: null }) },

  flipClipboard(axis) {
    const { clipboard } = get()
    if (!clipboard) return
    const newClip = flipSelectionClipboard(clipboard, axis)
    const { floatingPaste } = get()
    set({
      clipboard: newClip,
      floatingPaste: floatingPaste
        ? { ...floatingPaste, colors: newClip.colors, voxelList: newClip.voxelList }
        : null,
    })
  },

  deleteSelection() {
    const { floatingPaste } = get()
    if (floatingPaste) {
      set({ floatingPaste: null, selection: null, selectionAnchor: null })
      return
    }
    const {
      selection, layers, activeLayerId,
      canvasWidth: W, canvasHeight: H, depthDimension: D, activeView,
      editBoundsEnabled, editBounds, paintDepthStart, paintDepthEnd, paintDirection,
    } = get()
    if (!selection) return
    const targets = collectSelectionTargets({
      selection, view: activeView, width: W, height: H, depth: D,
      bounds: editBoundsEnabled ? editBounds : null,
      range: { start: paintDepthStart, end: paintDepthEnd, direction: paintDirection },
    })
    const result = eraseSelectionTargets(layers, activeLayerId, targets)
    if (!result) return
    if (!result.affectedCount) {
      set({ selection: null, selectionAnchor: null })
      return
    }
    if (!get().confirmLargeOperation('Delete selected voxels?', result.affectedCount)) return
    get().pushUndo()
    set({ layers: result.layers, selection: null, selectionAnchor: null })
  },
}))
