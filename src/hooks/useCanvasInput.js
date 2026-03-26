import { useRef, useCallback, useEffect } from 'react'
import { useStore, getViewSize, getCompositedVoxels, renderView2D } from '../store/index.js'

/** Bresenham's line — returns all integer coords between (x0,y0) and (x1,y1) */
function bresenham(x0, y0, x1, y1) {
  const points = []
  let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1
  let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1
  let err = dx + dy
  while (true) {
    points.push({ col: x0, row: y0 })
    if (x0 === x1 && y0 === y1) break
    const e2 = 2 * err
    if (e2 >= dy) { err += dy; x0 += sx }
    if (e2 <= dx) { err += dx; y0 += sy }
  }
  return points
}

/** Linearly interpolate between two hex colors */
function lerpColor(c1, c2, t) {
  if (!c1 || c1 === 'transparent') return c2
  if (!c2 || c2 === 'transparent') return c1
  const p = (hex, pos) => parseInt(hex.slice(pos, pos + 2), 16)
  const r  = Math.round(p(c1, 1) + (p(c2, 1) - p(c1, 1)) * t)
  const g  = Math.round(p(c1, 3) + (p(c2, 3) - p(c1, 3)) * t)
  const b  = Math.round(p(c1, 5) + (p(c2, 5) - p(c1, 5)) * t)
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}

export function useCanvasInput(containerRef) {
  const isDrawing      = useRef(false)
  const lastPixel      = useRef(null)
  const blendDragStart = useRef(null) // {col, row} where blend stroke started
  // Track Alt key for temporary draw-mode override on non-front views
  const isAltHeld   = useRef(false)
  // Track Shift key for full-depth erase
  const isShiftHeld = useRef(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Alt')   { e.preventDefault(); isAltHeld.current   = true }
      if (e.key === 'Shift') { isShiftHeld.current = true }
    }
    const onKeyUp = (e) => {
      if (e.key === 'Alt')   isAltHeld.current   = false
      if (e.key === 'Shift') isShiftHeld.current = false
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup',   onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup',   onKeyUp)
    }
  }, [])

  const getPixelCoords = useCallback((e) => {
    const { pixelSize } = useStore.getState()
    const rect = containerRef.current.getBoundingClientRect()
    const col = Math.floor((e.clientX - rect.left) / pixelSize)
    const row = Math.floor((e.clientY - rect.top)  / pixelSize)
    return { col, row }
  }, [])

  /** Pick the visible color at canvas position and set as currentColor */
  const pickColor = useCallback(({ col, row }) => {
    const s = useStore.getState()
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = s
    const composited = getCompositedVoxels(layers, W, H, D)
    const view2d     = renderView2D(composited, activeView, W, H, D)
    const color      = view2d[row]?.[col]
    if (color && color !== 'transparent') s.setCurrentColor(color)
  }, [])

  const applyTool = useCallback(({ col, row }) => {
    const s = useStore.getState()
    const { activeTool, currentColor, blendEndColor, activeView, canvasWidth: W, canvasHeight: H, depthDimension: D, sideDrawMode } = s
    const { w, h } = getViewSize(activeView, W, H, D)
    if (col < 0 || row < 0 || col >= w || row >= h) return

    // Alt held → temporarily flip the side draw mode
    const sideDrawModeOverride = (isAltHeld.current && activeView !== 'front')
      ? (sideDrawMode === 'edit' ? 'draw' : 'edit')
      : null

    switch (activeTool) {
      case 'pencil':
        s.paintAt(col, row, currentColor, { sideDrawModeOverride })
        break
      case 'eraser':
        s.paintAt(col, row, 'transparent', { sideDrawModeOverride, fullDepthErase: isShiftHeld.current })
        break
      case 'material':
        s.paintMaterialAt(col, row)
        break
      case 'blend': {
        const origin = blendDragStart.current ?? { col, row }
        const dist   = Math.sqrt((col - origin.col) ** 2 + (row - origin.row) ** 2)
        const maxDist = Math.max(W, H)
        const t       = Math.min(dist / maxDist, 1)
        s.paintAt(col, row, lerpColor(currentColor, blendEndColor, t), { sideDrawModeOverride })
        break
      }
    }
  }, [])

  const onPointerDown = useCallback((e) => {
    // Right-click → eyedropper
    if (e.button === 2) {
      e.preventDefault()
      pickColor(getPixelCoords(e))
      return
    }
    if (e.button !== 0) return
    try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}

    const s      = useStore.getState()
    const coords = getPixelCoords(e)

    if (s.activeTool === 'fill') {
      s.floodFillVoxel(coords.col, coords.row, s.currentColor)
      return
    }

    isDrawing.current  = true
    lastPixel.current  = coords
    if (s.activeTool === 'blend') blendDragStart.current = coords

    if (['pencil', 'eraser', 'material', 'blend'].includes(s.activeTool)) {
      s.pushUndo()
    }

    applyTool(coords)
  }, [getPixelCoords, applyTool, pickColor])

  const onPointerMove = useCallback((e) => {
    if (!isDrawing.current) return
    const coords = getPixelCoords(e)
    const prev   = lastPixel.current
    if (!prev || (coords.col === prev.col && coords.row === prev.row)) return

    const points = bresenham(prev.col, prev.row, coords.col, coords.row)
    for (const pt of points) applyTool(pt)
    lastPixel.current = coords
  }, [getPixelCoords, applyTool])

  const onPointerUp = useCallback(() => {
    isDrawing.current      = false
    lastPixel.current      = null
    blendDragStart.current = null
  }, [])

  // Prevent context menu on right-click
  const onContextMenu = useCallback((e) => e.preventDefault(), [])

  return { onPointerDown, onPointerMove, onPointerUp, onContextMenu }
}
