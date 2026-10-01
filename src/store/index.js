import { create } from 'zustand'
import { rotateBox, scaleBox, shiftVoxelListDepth, getDefaultAnchor, getPresetAnchor } from '../lib/selectionTransform.js'
import { clampBrushSize } from '../lib/brushFootprint.js'
import {
  areVoxelsInBounds, collectVoxelsInBox, flipVoxels, moveVoxels, rotateVoxels90,
} from '../lib/voxelSelection3D.js'

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

function snapshotHistory(state) {
  return {
    layers: snapshotLayers(state.layers),
    editBounds: { ...state.editBounds },
    editBoundsEnabled: state.editBoundsEnabled,
  }
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

export function getViewDepthSize(view, W, H, D) {
  if (view === 'left' || view === 'right') return W
  if (view === 'top' || view === 'bottom') return H
  return D
}

export function makeFullEditBounds(W, H, D) {
  return { minX: 0, maxX: W - 1, minY: 0, maxY: H - 1, minZ: 0, maxZ: D - 1 }
}

export function isVoxelInsideEditBounds(x, y, z, bounds) {
  return !bounds || (
    x >= bounds.minX && x <= bounds.maxX &&
    y >= bounds.minY && y <= bounds.maxY &&
    z >= bounds.minZ && z <= bounds.maxZ
  )
}

/** Project the shared 3D edit box into the coordinate system of a 2D view. */
export function projectEditBoundsToView(bounds, view, W, H, D) {
  if (!bounds) bounds = makeFullEditBounds(W, H, D)
  switch (view) {
    case 'front':  return { x1: bounds.minX, y1: bounds.minY, x2: bounds.maxX, y2: bounds.maxY }
    case 'back':   return { x1: W - 1 - bounds.maxX, y1: bounds.minY, x2: W - 1 - bounds.minX, y2: bounds.maxY }
    case 'left':   return { x1: bounds.minZ, y1: bounds.minY, x2: bounds.maxZ, y2: bounds.maxY }
    case 'right':  return { x1: D - 1 - bounds.maxZ, y1: bounds.minY, x2: D - 1 - bounds.minZ, y2: bounds.maxY }
    case 'top':
    case 'bottom': return { x1: bounds.minX, y1: bounds.minZ, x2: bounds.maxX, y2: bounds.maxZ }
    default:       return { x1: 0, y1: 0, x2: W - 1, y2: H - 1 }
  }
}

function boundsFromViewRect(bounds, view, rect, W, H, D) {
  const next = { ...(bounds || makeFullEditBounds(W, H, D)) }
  const x1 = Math.min(rect.x1, rect.x2), x2 = Math.max(rect.x1, rect.x2)
  const y1 = Math.min(rect.y1, rect.y2), y2 = Math.max(rect.y1, rect.y2)
  if (view === 'front') Object.assign(next, { minX: x1, maxX: x2, minY: y1, maxY: y2 })
  if (view === 'back') Object.assign(next, { minX: W - 1 - x2, maxX: W - 1 - x1, minY: y1, maxY: y2 })
  if (view === 'left') Object.assign(next, { minZ: x1, maxZ: x2, minY: y1, maxY: y2 })
  if (view === 'right') Object.assign(next, { minZ: D - 1 - x2, maxZ: D - 1 - x1, minY: y1, maxY: y2 })
  if (view === 'top' || view === 'bottom') Object.assign(next, { minX: x1, maxX: x2, minZ: y1, maxZ: y2 })
  return next
}

function applyEditBoundsAxisLocks(current, next, locks = {}) {
  const result = { ...next }
  for (const axis of ['X', 'Y', 'Z']) {
    if (!locks[axis.toLowerCase()]) continue
    result[`min${axis}`] = current[`min${axis}`]
    result[`max${axis}`] = current[`max${axis}`]
  }
  return result
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
export function getVoxelTargets(col, row, view, paintDepth, W, H, D, bounds = null, range = null) {
  const ray = getViewRayCoords(col, row, view, W, H, D, bounds)
  const start = Math.max(1, Math.round(range?.start ?? 1))
  const end = Math.max(start, Math.round(range?.end ?? paintDepth))
  const direction = range?.direction ?? 'inward'
  const slice = source => source.slice(start - 1, end)
  if (direction === 'outward') return slice([...ray].reverse())
  if (direction === 'both') {
    const targets = [...slice(ray), ...slice([...ray].reverse())]
    return targets.filter((voxel, index) => targets.findIndex(other =>
      other.x === voxel.x && other.y === voxel.y && other.z === voxel.z
    ) === index)
  }
  return slice(ray)
}

// ── Non-front view helpers ─────────────────────────────────────────────────────

/**
 * For non-front views: find existing (already occupied) voxels along the
 * view ray at canvas position (col, row), returning up to `maxCount`.
 * Used for pencil (recolor nearest) and eraser (remove nearest).
 */
export function getExistingVoxelTargets(voxels, col, row, view, maxCount, W, H, D, bounds = null) {
  const results = []
  const b = bounds || makeFullEditBounds(W, H, D)

  const push = (x, y, z) => {
    if (!isVoxelInsideEditBounds(x, y, z, b)) return false
    const c = voxels[y]?.[x]?.[z]
    if (c && c !== 'transparent') results.push({ x, y, z })
    return results.length >= maxCount
  }

  if (view === 'front') {
    for (let z = b.maxZ; z >= b.minZ; z--) { if (push(col, row, z)) break }
  } else if (view === 'back') {
    // Back camera is at -Z: z=0 is closest to the back camera, scan upward.
    const x = W - 1 - col
    for (let z = b.minZ; z <= b.maxZ; z++) { if (push(x, row, z)) break }
  } else if (view === 'left') {
    for (let x = b.minX; x <= b.maxX; x++) { if (push(x, row, col)) break }
  } else if (view === 'right') {
    const z = D - 1 - col
    for (let x = b.maxX; x >= b.minX; x--) { if (push(x, row, z)) break }
  } else if (view === 'top') {
    for (let y = b.minY; y <= b.maxY; y++) { if (push(col, y, row)) break }
  } else if (view === 'bottom') {
    for (let y = b.maxY; y >= b.minY; y--) { if (push(col, y, row)) break }
  }

  return results
}

/** Ordered camera-to-back voxel coordinates for one canvas ray. */
export function getViewRayCoords(col, row, view, W, H, D, bounds = null) {
  const b = bounds || makeFullEditBounds(W, H, D)
  const result = []
  const add = (x, y, z) => {
    if (isVoxelInsideEditBounds(x, y, z, b)) result.push({ x, y, z })
  }
  if (view === 'front')  for (let z = b.maxZ; z >= b.minZ; z--) add(col, row, z)
  if (view === 'back')   for (let z = b.minZ; z <= b.maxZ; z++) add(W - 1 - col, row, z)
  if (view === 'left')   for (let x = b.minX; x <= b.maxX; x++) add(x, row, col)
  if (view === 'right')  for (let x = b.maxX; x >= b.minX; x--) add(x, row, D - 1 - col)
  if (view === 'top')    for (let y = b.minY; y <= b.maxY; y++) add(col, y, row)
  if (view === 'bottom') for (let y = b.maxY; y >= b.minY; y--) add(col, y, row)
  return result
}

export function getThroughVoxelTargets(voxels, col, row, view, variant, W, H, D, bounds = null) {
  const ray = getViewRayCoords(col, row, view, W, H, D, bounds)
  if (variant === 'solid') return ray
  const occupied = voxel => {
    const color = voxels[voxel.y]?.[voxel.x]?.[voxel.z]
    return Boolean(color && color !== 'transparent')
  }
  if (variant === 'contiguous') {
    const result = []
    let started = false
    for (const voxel of ray) {
      if (!occupied(voxel)) {
        if (started) break
        continue
      }
      started = true
      result.push(voxel)
    }
    return result
  }
  return ray.filter(occupied)
}

/**
 * For side views (left/right/top/bottom) in draw mode:
 * Scans the ray from the camera and returns empty voxel position(s) just in
 * front of the first visible surface (toward the camera). Falls back to the
 * face position when the ray is fully empty.
 */
export function getSurfaceVoxelTargets(voxels, col, row, view, paintDepth, W, H, D, bounds = null, range = null) {
  const results = []
  const b = bounds || makeFullEditBounds(W, H, D)

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
    const startDepth = Math.max(1, Math.round(range?.start ?? 1))
    const endDepth = Math.max(startDepth, Math.round(range?.end ?? paintDepth))
    const direction = range?.direction ?? 'outward'
    const offsets = []
    for (let d = startDepth - 1; d < endDepth; d++) {
      if (direction === 'inward' || direction === 'both') offsets.push(dir * d)
      if (direction === 'outward' || direction === 'both') offsets.push(-dir * d)
    }
    for (const offset of [...new Set(offsets)]) {
      const [x, y, z] = getCoords(startI + offset)
      if (x >= 0 && x < W && y >= 0 && y < H && z >= 0 && z < D)
        if (!results.some(t => t.x === x && t.y === y && t.z === z))
          results.push({ x, y, z })
    }
  }

  switch (view) {
    case 'front':  scanAndPlace(b.maxZ, b.minZ, i => [col, row, i           ]); break
    // Back camera at -Z: z=0 is the face closest to back camera, scan inward toward z=D-1.
    case 'back':   scanAndPlace(b.minZ, b.maxZ, i => [W - 1 - col, row, i   ]); break
    case 'left':   scanAndPlace(b.minX, b.maxX, i => [i, row, col           ]); break
    case 'right':  scanAndPlace(b.maxX, b.minX, i => [i, row, D - 1 - col   ]); break
    case 'top':    scanAndPlace(b.minY, b.maxY, i => [col, i, row           ]); break
    case 'bottom': scanAndPlace(b.maxY, b.minY, i => [col, i, row           ]); break
    default:       return getVoxelTargets(col, row, view, paintDepth, W, H, D, b)
  }

  return results
}

// ── Store ──────────────────────────────────────────────────────────────────────

const _initLayer = makeLayer(CANVAS_W, CANVAS_H, DEPTH_D)

function layerHasVoxel(layer, x, y, z) {
  const color = layer?.voxels?.[y]?.[x]?.[z]
  return Boolean(color && color !== 'transparent')
}

function resolveOperationLayerIndexes(layers, activeLayerId, scope, voxel) {
  const activeIdx = layers.findIndex(layer => layer.id === activeLayerId)
  if (activeIdx < 0) return []
  if (scope === 'all-visible') {
    const occupied = layers
      .map((layer, index) => ({ layer, index }))
      .filter(({ layer }) => layer.visible && layerHasVoxel(layer, voxel.x, voxel.y, voxel.z))
      .map(({ index }) => index)
    return occupied.length ? occupied : [activeIdx]
  }
  if (scope === 'topmost') {
    for (let index = layers.length - 1; index >= 0; index--) {
      if (layers[index].visible && layerHasVoxel(layers[index], voxel.x, voxel.y, voxel.z)) return [index]
    }
  }
  return [activeIdx]
}

export const useStore = create((set, get) => ({
  // ── Canvas / Voxels ──────────────────────────────────────────────────────────
  canvasWidth:    CANVAS_W,
  canvasHeight:   CANVAS_H,
  depthDimension: DEPTH_D,
  editBoundsEnabled: false,
  editBounds: makeFullEditBounds(CANVAS_W, CANVAS_H, DEPTH_D),
  editBoundsAxisLocks: { x: false, y: false, z: false },
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
    } = get()
    let next = null
    if (selection3D?.voxels?.length) {
      next = {
        minX: Math.min(...selection3D.voxels.map(v => v.x)),
        maxX: Math.max(...selection3D.voxels.map(v => v.x)),
        minY: Math.min(...selection3D.voxels.map(v => v.y)),
        maxY: Math.max(...selection3D.voxels.map(v => v.y)),
        minZ: Math.min(...selection3D.voxels.map(v => v.z)),
        maxZ: Math.max(...selection3D.voxels.map(v => v.z)),
      }
    } else {
      const source = floatingPaste || selection
      if (source) {
        const x1 = source.col ?? source.x1
        const y1 = source.row ?? source.y1
        const x2 = source.col != null ? source.col + source.w - 1 : source.x2
        const y2 = source.row != null ? source.row + source.h - 1 : source.y2
        if ([x1, y1, x2, y2].every(Number.isFinite)) {
          next = boundsFromViewRect(editBounds, activeView, {
            x1, y1, x2, y2,
          }, W, H, D)
        }
      }
    }
    if (!next) return
    get().pushUndo()
    get().setEditBounds(applyEditBoundsAxisLocks(editBounds, next, editBoundsAxisLocks))
  },

  pushUndo() {
    const state = get()
    set({ undoStack: [...state.undoStack.slice(-49), snapshotHistory(state)], redoStack: [] })
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
    selection3D: tool === 'select' ? s.selection3D : null,
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

  undo() {
    const state = get()
    const { undoStack, redoStack } = state
    if (!undoStack.length) return
    const prev = undoStack[undoStack.length - 1]
    set({
      layers:    prev.layers,
      editBounds: prev.editBounds,
      editBoundsEnabled: prev.editBoundsEnabled,
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack.slice(-49), snapshotHistory(state)],
    })
  },

  redo() {
    const state = get()
    const { redoStack, undoStack } = state
    if (!redoStack.length) return
    const next = redoStack[redoStack.length - 1]
    set({
      layers:    next.layers,
      editBounds: next.editBounds,
      editBoundsEnabled: next.editBoundsEnabled,
      redoStack: redoStack.slice(0, -1),
      undoStack: [...undoStack.slice(-49), snapshotHistory(state)],
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
    const unique = new Map()
    for (const voxel of targets || []) {
      const x = Math.round(voxel.x), y = Math.round(voxel.y), z = Math.round(voxel.z)
      if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) continue
      if (editBoundsEnabled && !isVoxelInsideEditBounds(x, y, z, editBounds)) continue
      unique.set(`${x},${y},${z}`, { x, y, z })
    }
    if (!unique.size) return

    const assignments = new Map()
    for (const voxel of unique.values()) {
      for (const layerIdx of resolveOperationLayerIndexes(layers, activeLayerId, operationLayerScope, voxel)) {
        const currentColor = layers[layerIdx]?.voxels?.[voxel.y]?.[voxel.x]?.[voxel.z] ?? 'transparent'
        const materialKey = `${voxel.y},${voxel.x},${voxel.z}`
        const removesMaterial = color === 'transparent' && Boolean(layers[layerIdx]?.voxelMaterials?.[materialKey])
        if (currentColor === color && !removesMaterial) continue
        if (!assignments.has(layerIdx)) assignments.set(layerIdx, [])
        assignments.get(layerIdx).push(voxel)
      }
    }
    if (!assignments.size) return

    const newLayers = [...layers]
    for (const [layerIdx, voxelsToPaint] of assignments) {
      const layer = layers[layerIdx]
      const affectedY = new Set(voxelsToPaint.map(voxel => voxel.y))
      const voxels = layer.voxels.map((plane, iy) =>
        affectedY.has(iy) ? plane.map(xRow => [...xRow]) : plane
      )
      const voxelMaterials = { ...(layer.voxelMaterials || {}) }
      for (const { x, y, z } of voxelsToPaint) {
        voxels[y][x][z] = color
        if (color === 'transparent') delete voxelMaterials[`${y},${x},${z}`]
      }
      newLayers[layerIdx] = { ...layer, voxels, voxelMaterials }
    }
    set({ layers: newLayers })
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
    const targetColor = composited[y]?.[x]?.[z]
    if (!targetColor || targetColor === 'transparent' || targetColor === newColor) return

    const inside = (vx, vy, vz) => vx >= 0 && vx < W && vy >= 0 && vy < H && vz >= 0 && vz < D &&
      (!editBoundsEnabled || isVoxelInsideEditBounds(vx, vy, vz, editBounds))
    const colorAt = (vx, vy, vz) => inside(vx, vy, vz) ? composited[vy][vx][vz] : 'transparent'
    const targets = []
    const visited = new Set()
    const stack = [[x, y, z]]

    if (fillScope === 'all') {
      const neighbors = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]
      while (stack.length) {
        const [vx, vy, vz] = stack.pop()
        const key = `${vx},${vy},${vz}`
        if (visited.has(key) || colorAt(vx, vy, vz) !== targetColor) continue
        visited.add(key)
        targets.push({ x: vx, y: vy, z: vz })
        for (const [dx, dy, dz] of neighbors) stack.push([vx + dx, vy + dy, vz + dz])
      }
    } else {
      const normal = faceNormal || { x: 0, y: 0, z: 1 }
      const abs = [Math.abs(normal.x || 0), Math.abs(normal.y || 0), Math.abs(normal.z || 0)]
      const axis = abs[0] >= abs[1] && abs[0] >= abs[2] ? 'x' : abs[1] >= abs[2] ? 'y' : 'z'
      const sign = (normal[axis] || 0) >= 0 ? 1 : -1
      // World +Y points toward decreasing voxel Y.
      const outward = axis === 'x' ? [sign, 0, 0] : axis === 'y' ? [0, -sign, 0] : [0, 0, sign]
      const planeNeighbors = axis === 'x'
        ? [[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]
        : axis === 'y'
          ? [[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]]
          : [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]]
      const planeValue = axis === 'x' ? x : axis === 'y' ? y : z

      while (stack.length) {
        const [vx, vy, vz] = stack.pop()
        const key = `${vx},${vy},${vz}`
        if (visited.has(key)) continue
        visited.add(key)
        if ((axis === 'x' ? vx : axis === 'y' ? vy : vz) !== planeValue) continue
        if (colorAt(vx, vy, vz) !== targetColor) continue
        if (colorAt(vx + outward[0], vy + outward[1], vz + outward[2]) !== 'transparent') continue
        targets.push({ x: vx, y: vy, z: vz })
        for (const [dx, dy, dz] of planeNeighbors) stack.push([vx + dx, vy + dy, vz + dz])
      }
    }

    if (!targets.length) return
    get().paintVoxelsDirect(targets, newColor)
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
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const composited = getCompositedVoxels(layers, W, H, D)
    const visited = new Set()
    const assignments = new Map()
    for (const voxel of targets || []) {
      const x = Math.round(voxel.x), y = Math.round(voxel.y), z = Math.round(voxel.z)
      if (x < 0 || x >= W || y < 0 || y >= H || z < 0 || z >= D) continue
      if (editBoundsEnabled && !isVoxelInsideEditBounds(x, y, z, editBounds)) continue
      const voxelKey = `${x},${y},${z}`
      if (visited.has(voxelKey)) continue
      visited.add(voxelKey)
      if (!composited[y]?.[x]?.[z] || composited[y][x][z] === 'transparent') continue
      for (const targetLayerIdx of resolveOperationLayerIndexes(layers, activeLayerId, operationLayerScope, { x, y, z })) {
        if (!layerHasVoxel(layers[targetLayerIdx], x, y, z)) continue
        const materialKey = `${y},${x},${z}`
        const currentMaterial = layers[targetLayerIdx].voxelMaterials?.[materialKey] ?? 'solid'
        if (currentMaterial === activeMaterial) continue
        if (!assignments.has(targetLayerIdx)) assignments.set(targetLayerIdx, [])
        assignments.get(targetLayerIdx).push({ x, y, z })
      }
    }
    if (!assignments.size) return
    const newLayers = [...layers]
    for (const [targetLayerIdx, voxels] of assignments) {
      const layer = layers[targetLayerIdx]
      const voxelMaterials = { ...(layer.voxelMaterials || {}) }
      for (const { x, y, z } of voxels) {
        const materialKey = `${y},${x},${z}`
        if (activeMaterial === 'solid') delete voxelMaterials[materialKey]
        else voxelMaterials[materialKey] = activeMaterial
      }
      newLayers[targetLayerIdx] = { ...layer, voxelMaterials }
    }
    set({ layers: newLayers })
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
  selection3D: null, // {layerId, source: Voxel[], voxels: Voxel[]}

  setSelection3DBox(start, end) {
    const { layers, activeLayerId, editBoundsEnabled, editBounds } = get()
    const layer = layers.find(item => item.id === activeLayerId)
    const voxels = collectVoxelsInBox(layer, start, end).filter(v =>
      !editBoundsEnabled || isVoxelInsideEditBounds(v.x, v.y, v.z, editBounds)
    )
    set({
      selection3D: voxels.length
        ? { layerId: activeLayerId, source: voxels.map(v => ({ ...v })), voxels }
        : null,
    })
  },

  clearSelection3D() {
    set({ selection3D: null })
  },

  moveSelection3D(dx, dy, dz) {
    const { selection3D, canvasWidth: W, canvasHeight: H, depthDimension: D, editBoundsEnabled, editBounds } = get()
    if (!selection3D) return
    const voxels = moveVoxels(selection3D.voxels, dx, dy, dz)
    if (areVoxelsInBounds(voxels, W, H, D) && (!editBoundsEnabled || voxels.every(v => isVoxelInsideEditBounds(v.x, v.y, v.z, editBounds)))) set({ selection3D: { ...selection3D, voxels } })
  },

  flipSelection3D(axis) {
    const { selection3D } = get()
    if (!selection3D) return
    set({ selection3D: { ...selection3D, voxels: flipVoxels(selection3D.voxels, axis) } })
  },

  rotateSelection3D(axis, direction = 1) {
    const { selection3D, canvasWidth: W, canvasHeight: H, depthDimension: D, editBoundsEnabled, editBounds } = get()
    if (!selection3D) return
    const voxels = rotateVoxels90(selection3D.voxels, axis, direction)
    if (areVoxelsInBounds(voxels, W, H, D) && (!editBoundsEnabled || voxels.every(v => isVoxelInsideEditBounds(v.x, v.y, v.z, editBounds)))) set({ selection3D: { ...selection3D, voxels } })
  },

  applySelection3D() {
    const { selection3D, layers, canvasWidth: W, canvasHeight: H, depthDimension: D, editBoundsEnabled, editBounds } = get()
    if (!selection3D || !areVoxelsInBounds(selection3D.voxels, W, H, D)) return
    if (editBoundsEnabled && !selection3D.voxels.every(v => isVoxelInsideEditBounds(v.x, v.y, v.z, editBounds))) return
    const layerIdx = layers.findIndex(layer => layer.id === selection3D.layerId)
    if (layerIdx < 0) return
    const affectedKeys = new Set([
      ...selection3D.source.map(v => `${v.x},${v.y},${v.z}`),
      ...selection3D.voxels.map(v => `${v.x},${v.y},${v.z}`),
    ])
    if (!get().confirmLargeOperation('Apply 3D selection transform?', affectedKeys.size)) return
    get().pushUndo()
    const layer = layers[layerIdx]
    const affectedY = new Set([
      ...selection3D.source.map(v => v.y),
      ...selection3D.voxels.map(v => v.y),
    ])
    const voxels = layer.voxels.map((plane, y) =>
      affectedY.has(y) ? plane.map(row => [...row]) : plane
    )
    const materials = { ...(layer.voxelMaterials || {}) }
    for (const voxel of selection3D.source) {
      voxels[voxel.y][voxel.x][voxel.z] = 'transparent'
      delete materials[`${voxel.y},${voxel.x},${voxel.z}`]
    }
    for (const voxel of selection3D.voxels) {
      voxels[voxel.y][voxel.x][voxel.z] = voxel.color
      const key = `${voxel.y},${voxel.x},${voxel.z}`
      if (voxel.material && voxel.material !== 'solid') materials[key] = voxel.material
      else delete materials[key]
    }
    const nextLayers = [...layers]
    nextLayers[layerIdx] = { ...layer, voxels, voxelMaterials: materials }
    set({ layers: nextLayers, selection3D: null })
  },

  deleteSelection3D() {
    const { selection3D, layers } = get()
    if (!selection3D) return
    const layerIdx = layers.findIndex(layer => layer.id === selection3D.layerId)
    if (layerIdx < 0) return
    const changedVoxels = selection3D.source.filter(v => layerHasVoxel(layers[layerIdx], v.x, v.y, v.z))
    if (!changedVoxels.length) {
      set({ selection3D: null })
      return
    }
    if (!get().confirmLargeOperation('Delete 3D selection?', changedVoxels.length)) return
    get().pushUndo()
    const layer = layers[layerIdx]
    const affectedY = new Set(changedVoxels.map(v => v.y))
    const voxels = layer.voxels.map((plane, y) =>
      affectedY.has(y) ? plane.map(row => [...row]) : plane
    )
    const materials = { ...(layer.voxelMaterials || {}) }
    for (const voxel of changedVoxels) {
      voxels[voxel.y][voxel.x][voxel.z] = 'transparent'
      delete materials[`${voxel.y},${voxel.x},${voxel.z}`]
    }
    const nextLayers = [...layers]
    nextLayers[layerIdx] = { ...layer, voxels, voxelMaterials: materials }
    set({ layers: nextLayers, selection3D: null })
  },

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
    const { x1, y1, x2, y2, type = 'rect', mask = null, polygon = null } = sel
    const normalized = {
      x1: Math.min(x1, x2), y1: Math.min(y1, y2),
      x2: Math.max(x1, x2), y2: Math.max(y1, y2),
      type,
      mask,
      polygon,
    }
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
    get().cutSelection()
    get().pasteFromClipboard()
    const fp = get().floatingPaste
    if (fp) {
      set({
        floatingPaste: { ...fp, col: x1, row: y1 },
        selectionAnchor: savedAnchor,
      })
    }
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
      newVoxelList = shiftVoxelListDepth(fp.voxelList, delta, D)
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
    const { selection, layers, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = get()
    if (!selection) return
    const { x1, y1, x2, y2, mask } = selection
    const tw = x2 - x1 + 1, th = y2 - y1 + 1
    const composited = getCompositedVoxels(layers, W, H, D)
    const view2d = renderView2D(composited, activeView, W, H, D)

    // 2D visible-face colors (for floating paste overlay display)
    const colors = Array.from({ length: th }, (_, drow) =>
      Array.from({ length: tw }, (_, dcol) => {
        if (mask && !mask[drow]?.[dcol]) return 'transparent'
        return view2d[y1 + drow]?.[x1 + dcol] ?? 'transparent'
      })
    )

    // Full 3D voxel list — preserves depth for front/back views.
    // Stores (dcol, drow, z, color) where dcol/drow are canvas offsets
    // and z is the absolute voxel depth coordinate.
    const voxelList = []
    if (activeView === 'front') {
      for (let drow = 0; drow < th; drow++)
        for (let dcol = 0; dcol < tw; dcol++) {
          if (mask && !mask[drow]?.[dcol]) continue
          for (let z = 0; z < D; z++) {
            const c = composited[y1 + drow]?.[x1 + dcol]?.[z]
            if (c && c !== 'transparent') voxelList.push({ dcol, drow, z, color: c })
          }
        }
    } else if (activeView === 'back') {
      for (let drow = 0; drow < th; drow++)
        for (let dcol = 0; dcol < tw; dcol++) {
          if (mask && !mask[drow]?.[dcol]) continue
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
    const { selection, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, editBoundsEnabled, editBounds } = get()
    if (!selection) return
    const { x1, y1, x2, y2, mask } = selection
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)
    const layerVoxels = layers[layerIdx].voxels
    const allTargets = []
    for (let row = y1; row <= y2; row++) {
      for (let col = x1; col <= x2; col++) {
        if (col < 0 || col >= viewW || row < 0 || row >= viewH) continue
        if (mask && !mask[row - y1]?.[col - x1]) continue
        const targets = getVoxelTargets(col, row, activeView, D, W, H, D)
        allTargets.push(...targets.filter(t => !editBoundsEnabled || isVoxelInsideEditBounds(t.x, t.y, t.z, editBounds)))
      }
    }
    const changedTargets = [...new Map(allTargets
      .filter(({ x, y, z }) => layerHasVoxel(layers[layerIdx], x, y, z))
      .map(voxel => [`${voxel.x},${voxel.y},${voxel.z}`, voxel])).values()]
    if (!changedTargets.length) {
      set({ selection: null, selectionAnchor: null })
      return
    }
    if (!get().confirmLargeOperation('Cut selected voxels?', changedTargets.length)) return
    get().copySelection()
    get().pushUndo()
    const affectedY = new Set(changedTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z } of changedTargets) newVoxels[y][x][z] = 'transparent'
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
    const { floatingPaste, selectionAnchor } = get()
    if (!floatingPaste) return
    const dcol = col - floatingPaste.col
    const drow = row - floatingPaste.row
    set({
      floatingPaste: { ...floatingPaste, col, row },
      selectionAnchor: selectionAnchor
        ? { x: selectionAnchor.x + dcol, y: selectionAnchor.y + drow }
        : null,
    })
  },

  commitPaste() {
    const { floatingPaste, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, editBoundsEnabled, editBounds } = get()
    if (!floatingPaste) return
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
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
        if (vx >= 0 && vx < W && vy >= 0 && vy < H && z >= 0 && z < D &&
          (!editBoundsEnabled || isVoxelInsideEditBounds(vx, vy, z, editBounds)))
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
          for (const t of targets)
            if (!editBoundsEnabled || isVoxelInsideEditBounds(t.x, t.y, t.z, editBounds)) allTargets.push({ ...t, color })
        }
      }
    }

    const changedTargets = [...new Map(allTargets
      .filter(({ x, y, z, color }) => layerVoxels[y]?.[x]?.[z] !== color)
      .map(voxel => [`${voxel.x},${voxel.y},${voxel.z}`, voxel])).values()]
    if (!changedTargets.length) {
      set({ floatingPaste: null, selectionAnchor: null })
      return
    }
    if (!get().confirmLargeOperation('Paste voxels?', changedTargets.length)) return
    get().pushUndo()
    const affectedY = new Set(changedTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z, color } of changedTargets) newVoxels[y][x][z] = color
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers, floatingPaste: null, selectionAnchor: null })
  },

  cancelPaste() { set({ floatingPaste: null, selectionAnchor: null }) },

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
    const { floatingPaste } = get()
    if (floatingPaste) {
      set({ floatingPaste: null, selection: null, selectionAnchor: null })
      return
    }
    const { selection, layers, activeLayerId, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, editBoundsEnabled, editBounds } = get()
    if (!selection) return
    const { x1, y1, x2, y2, mask } = selection
    const layerIdx = layers.findIndex(l => l.id === activeLayerId)
    if (layerIdx < 0) return
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)
    const layerVoxels = layers[layerIdx].voxels
    const allTargets = []
    for (let row = y1; row <= y2; row++) {
      for (let col = x1; col <= x2; col++) {
        if (col < 0 || col >= viewW || row < 0 || row >= viewH) continue
        if (mask && !mask[row - y1]?.[col - x1]) continue
        allTargets.push(...getVoxelTargets(col, row, activeView, D, W, H, D).filter(t =>
          !editBoundsEnabled || isVoxelInsideEditBounds(t.x, t.y, t.z, editBounds)
        ))
      }
    }
    const changedTargets = [...new Map(allTargets
      .filter(({ x, y, z }) => layerHasVoxel(layers[layerIdx], x, y, z))
      .map(voxel => [`${voxel.x},${voxel.y},${voxel.z}`, voxel])).values()]
    if (!changedTargets.length) {
      set({ selection: null, selectionAnchor: null })
      return
    }
    if (!get().confirmLargeOperation('Delete selected voxels?', changedTargets.length)) return
    get().pushUndo()
    const affectedY = new Set(changedTargets.map(t => t.y))
    const newVoxels = [...layerVoxels]
    for (const y of affectedY) newVoxels[y] = layerVoxels[y].map(xRow => [...xRow])
    for (const { x, y, z } of changedTargets) newVoxels[y][x][z] = 'transparent'
    const newLayers = [...layers]
    newLayers[layerIdx] = { ...layers[layerIdx], voxels: newVoxels }
    set({ layers: newLayers, selection: null, selectionAnchor: null })
  },
}))
