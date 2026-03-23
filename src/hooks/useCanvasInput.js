import { useRef, useCallback } from 'react'
import { useStore, getViewSize } from '../store/index.js'

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

export function useCanvasInput(containerRef) {
  const isDrawing = useRef(false)
  const lastPixel = useRef(null)

  const getPixelCoords = useCallback((e) => {
    const { pixelSize } = useStore.getState()
    const rect = containerRef.current.getBoundingClientRect()
    const col = Math.floor((e.clientX - rect.left) / pixelSize)
    const row = Math.floor((e.clientY - rect.top)  / pixelSize)
    return { col, row }
  }, [])

  const applyTool = useCallback(({ col, row }) => {
    const s = useStore.getState()
    const { activeTool, currentColor, activeView, canvasWidth: W, canvasHeight: H, depthDimension: D } = s
    const { w, h } = getViewSize(activeView, W, H, D)
    if (col < 0 || row < 0 || col >= w || row >= h) return

    switch (activeTool) {
      case 'pencil':
        s.paintAt(col, row, currentColor)
        break
      case 'eraser':
        s.paintAt(col, row, 'transparent')
        break
    }
  }, [])

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return
    try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}

    const s = useStore.getState()
    const coords = getPixelCoords(e)

    if (s.activeTool === 'fill') {
      s.floodFillVoxel(coords.col, coords.row, s.currentColor)
      return
    }

    isDrawing.current = true
    lastPixel.current = coords

    if (s.activeTool === 'pencil' || s.activeTool === 'eraser') {
      s.pushUndo()
    }

    applyTool(coords)
  }, [getPixelCoords, applyTool])

  const onPointerMove = useCallback((e) => {
    if (!isDrawing.current) return
    const coords = getPixelCoords(e)
    const prev = lastPixel.current
    if (!prev || (coords.col === prev.col && coords.row === prev.row)) return

    const points = bresenham(prev.col, prev.row, coords.col, coords.row)
    for (const pt of points) applyTool(pt)
    lastPixel.current = coords
  }, [getPixelCoords, applyTool])

  const onPointerUp = useCallback(() => {
    isDrawing.current = false
    lastPixel.current = null
  }, [])

  return { onPointerDown, onPointerMove, onPointerUp }
}
