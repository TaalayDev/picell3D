import { getCompositedVoxels, layerHasVoxel } from './layerModel.js'
import {
  getViewRayCoords,
  getViewSize,
  getVoxelTargets,
  isVoxelInsideEditBounds,
} from './viewGeometry.js'

const voxelKey = ({ x, y, z }) => `${x},${y},${z}`
const materialKey = ({ x, y, z }) => `${y},${x},${z}`

export function normalizeSelection(selection) {
  if (!selection) return null
  const { x1, y1, x2, y2, type = 'rect', mask = null, polygon = null } = selection
  if (![x1, y1, x2, y2].every(Number.isFinite)) return null
  return {
    x1: Math.min(x1, x2),
    y1: Math.min(y1, y2),
    x2: Math.max(x1, x2),
    y2: Math.max(y1, y2),
    type,
    mask,
    polygon,
  }
}

export function getSelectionVolumeBounds({
  selection3D,
  selection,
  floatingPaste,
  view,
  width,
  height,
  depth,
  editBoundsEnabled = false,
  editBounds = null,
  range = null,
}) {
  if (selection3D?.voxels?.length) {
    return {
      minX: Math.min(...selection3D.voxels.map(voxel => voxel.x)),
      maxX: Math.max(...selection3D.voxels.map(voxel => voxel.x)),
      minY: Math.min(...selection3D.voxels.map(voxel => voxel.y)),
      maxY: Math.max(...selection3D.voxels.map(voxel => voxel.y)),
      minZ: Math.min(...selection3D.voxels.map(voxel => voxel.z)),
      maxZ: Math.max(...selection3D.voxels.map(voxel => voxel.z)),
    }
  }
  const source = floatingPaste || selection
  if (!source) return null
  const bounds = editBoundsEnabled && editBounds ? editBounds : null
  const targets = floatingPaste
    ? collectPasteTargets({ floatingPaste, view, width, height, depth, bounds })
    : collectSelectionTargets({ selection, view, width, height, depth, bounds, range })
  if (!targets.length) return null
  return {
    minX: Math.min(...targets.map(voxel => voxel.x)),
    maxX: Math.max(...targets.map(voxel => voxel.x)),
    minY: Math.min(...targets.map(voxel => voxel.y)),
    maxY: Math.max(...targets.map(voxel => voxel.y)),
    minZ: Math.min(...targets.map(voxel => voxel.z)),
    maxZ: Math.max(...targets.map(voxel => voxel.z)),
  }
}

function selectedCells(selection, viewWidth, viewHeight) {
  const cells = []
  for (let row = selection.y1; row <= selection.y2; row++) {
    for (let col = selection.x1; col <= selection.x2; col++) {
      if (col < 0 || col >= viewWidth || row < 0 || row >= viewHeight) continue
      if (selection.mask && !selection.mask[row - selection.y1]?.[col - selection.x1]) continue
      cells.push({ col, row, dcol: col - selection.x1, drow: row - selection.y1 })
    }
  }
  return cells
}

function selectionRay(col, row, view, width, height, depth, bounds, range) {
  if (!range) return getViewRayCoords(col, row, view, width, height, depth, bounds)
  return getVoxelTargets(col, row, view, range.end, width, height, depth, bounds, range)
}

export function createSelectionClipboard({
  selection,
  layers,
  sourceLayerId = null,
  width,
  height,
  depth,
  view,
  bounds = null,
  range = null,
}) {
  const normalized = normalizeSelection(selection)
  if (!normalized) return null
  const clipboardWidth = normalized.x2 - normalized.x1 + 1
  const clipboardHeight = normalized.y2 - normalized.y1 + 1
  const sourceVoxels = sourceLayerId
    ? layers.find(layer => layer.id === sourceLayerId)?.voxels
    : getCompositedVoxels(layers, width, height, depth)
  if (!sourceVoxels) return null
  const colors = Array.from({ length: clipboardHeight }, () =>
    Array(clipboardWidth).fill('transparent')
  )
  const { w: viewWidth, h: viewHeight } = getViewSize(view, width, height, depth)
  const voxelList = []
  for (const cell of selectedCells(normalized, viewWidth, viewHeight)) {
    const fullRay = getViewRayCoords(cell.col, cell.row, view, width, height, depth)
    const ray = selectionRay(cell.col, cell.row, view, width, height, depth, bounds, range)
    for (const voxel of ray) {
      const color = sourceVoxels[voxel.y]?.[voxel.x]?.[voxel.z]
      if (color && color !== 'transparent') {
        if (colors[cell.drow][cell.dcol] === 'transparent') colors[cell.drow][cell.dcol] = color
        voxelList.push({
          dcol: cell.dcol,
          drow: cell.drow,
          depthIndex: fullRay.findIndex(candidate => voxelKey(candidate) === voxelKey(voxel)),
          z: voxel.z,
          color,
        })
      }
    }
  }
  return { w: clipboardWidth, h: clipboardHeight, colors, voxelList, sourceView: view }
}

export function collectSelectionTargets({ selection, view, width, height, depth, bounds = null, range = null }) {
  const normalized = normalizeSelection(selection)
  if (!normalized) return []
  const { w: viewWidth, h: viewHeight } = getViewSize(view, width, height, depth)
  const targets = new Map()
  for (const cell of selectedCells(normalized, viewWidth, viewHeight)) {
    for (const voxel of selectionRay(cell.col, cell.row, view, width, height, depth, bounds, range)) {
      targets.set(voxelKey(voxel), voxel)
    }
  }
  return [...targets.values()]
}

export function eraseSelectionTargets(layers, activeLayerId, targets) {
  const layerIndex = layers.findIndex(layer => layer.id === activeLayerId)
  if (layerIndex < 0) return null
  const layer = layers[layerIndex]
  const changed = targets.filter(voxel => layerHasVoxel(layer, voxel.x, voxel.y, voxel.z))
  if (!changed.length) return { layers, affectedCount: 0 }
  const affectedRows = new Set(changed.map(voxel => voxel.y))
  const voxels = layer.voxels.map((row, y) =>
    affectedRows.has(y) ? row.map(column => [...column]) : row
  )
  const voxelMaterials = { ...(layer.voxelMaterials || {}) }
  for (const voxel of changed) {
    voxels[voxel.y][voxel.x][voxel.z] = 'transparent'
    delete voxelMaterials[materialKey(voxel)]
  }
  const nextLayers = [...layers]
  nextLayers[layerIndex] = { ...layer, voxels, voxelMaterials }
  return { layers: nextLayers, affectedCount: changed.length }
}

export function createCenteredFloatingPaste(clipboard, view, width, height, depth) {
  if (!clipboard) return null
  const { w: viewWidth, h: viewHeight } = getViewSize(view, width, height, depth)
  return {
    col: Math.floor((viewWidth - clipboard.w) / 2),
    row: Math.floor((viewHeight - clipboard.h) / 2),
    w: clipboard.w,
    h: clipboard.h,
    colors: clipboard.colors,
    voxelList: clipboard.voxelList?.length ? clipboard.voxelList : null,
    copyView: clipboard.sourceView ?? (clipboard.voxelList?.length ? view : null),
  }
}

export function moveFloatingPaste(floatingPaste, anchor, col, row) {
  if (!floatingPaste) return null
  const dcol = col - floatingPaste.col
  const drow = row - floatingPaste.row
  return {
    floatingPaste: { ...floatingPaste, col, row },
    anchor: anchor ? { x: anchor.x + dcol, y: anchor.y + drow } : null,
  }
}

export function flipClipboard(clipboard, axis) {
  if (!clipboard) return null
  const horizontal = axis === 'h'
  const colors = horizontal
    ? clipboard.colors.map(row => [...row].reverse())
    : [...clipboard.colors].reverse()
  const voxelList = clipboard.voxelList?.map(voxel => ({
    ...voxel,
    dcol: horizontal ? clipboard.w - 1 - voxel.dcol : voxel.dcol,
    drow: horizontal ? voxel.drow : clipboard.h - 1 - voxel.drow,
  })) ?? null
  return { ...clipboard, colors, voxelList }
}

/** Shift clipboard voxels along the model's absolute Z axis in any source view. */
export function shiftVoxelListZ(voxelList, delta, sourceView, depth) {
  if (!voxelList?.length) return null
  return voxelList.map(voxel => {
    const z = Math.max(0, Math.min(depth - 1, (voxel.z ?? 0) + delta))
    const appliedDelta = z - (voxel.z ?? 0)
    const next = { ...voxel, z }
    if (sourceView === 'front' && Number.isInteger(next.depthIndex)) next.depthIndex -= appliedDelta
    if (sourceView === 'back' && Number.isInteger(next.depthIndex)) next.depthIndex += appliedDelta
    if (sourceView === 'left') next.dcol += appliedDelta
    if (sourceView === 'right') next.dcol -= appliedDelta
    if (sourceView === 'top' || sourceView === 'bottom') next.drow += appliedDelta
    return next
  })
}

export function collectPasteTargets({ floatingPaste, view, width, height, depth, bounds = null }) {
  if (!floatingPaste) return []
  const targets = new Map()
  const add = voxel => {
    if (bounds && !isVoxelInsideEditBounds(voxel.x, voxel.y, voxel.z, bounds)) return
    targets.set(voxelKey(voxel), voxel)
  }

  if (floatingPaste.voxelList?.length) {
    for (const source of floatingPaste.voxelList) {
      const col = floatingPaste.col + source.dcol
      const row = floatingPaste.row + source.drow
      const ray = getViewRayCoords(col, row, view, width, height, depth)
      let target = Number.isInteger(source.depthIndex) ? ray[source.depthIndex] : null
      // Compatibility with older front/back clipboard data that only stored absolute Z.
      if (!target && (view === 'front' || view === 'back')) {
        target = ray.find(voxel => voxel.z === source.z)
      }
      if (target) add({ ...target, color: source.color })
    }
    return [...targets.values()]
  }

  const { w: viewWidth, h: viewHeight } = getViewSize(view, width, height, depth)
  for (let drow = 0; drow < floatingPaste.h; drow++) {
    for (let dcol = 0; dcol < floatingPaste.w; dcol++) {
      const color = floatingPaste.colors[drow]?.[dcol]
      if (!color || color === 'transparent') continue
      const col = floatingPaste.col + dcol
      const row = floatingPaste.row + drow
      if (col < 0 || col >= viewWidth || row < 0 || row >= viewHeight) continue
      const [target] = getViewRayCoords(col, row, view, width, height, depth)
      if (target) add({ ...target, color })
    }
  }
  return [...targets.values()]
}

export function applyPasteTargets(layers, activeLayerId, targets) {
  const layerIndex = layers.findIndex(layer => layer.id === activeLayerId)
  if (layerIndex < 0) return null
  const layer = layers[layerIndex]
  const changed = targets.filter(voxel =>
    layer.voxels[voxel.y]?.[voxel.x]?.[voxel.z] !== voxel.color
  )
  if (!changed.length) return { layers, affectedCount: 0 }
  const affectedRows = new Set(changed.map(voxel => voxel.y))
  const voxels = layer.voxels.map((row, y) =>
    affectedRows.has(y) ? row.map(column => [...column]) : row
  )
  for (const voxel of changed) voxels[voxel.y][voxel.x][voxel.z] = voxel.color
  const nextLayers = [...layers]
  nextLayers[layerIndex] = { ...layer, voxels }
  return { layers: nextLayers, affectedCount: changed.length }
}
