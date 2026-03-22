import { useRef, useCallback } from 'react'
import { useStore } from '../store/index.js'

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

/**
 * All store reads happen inside event handlers via useStore.getState()
 * so there are no reactive subscriptions and no stale closure issues.
 *
 * Depth brush smart toggle:
 *   - First pixel of every stroke decides the mode for that stroke:
 *     already in active selection → remove for whole stroke
 *     not in active selection    → add for whole stroke
 *   - This overrides the depthBrushMode toolbar setting while dragging.
 */
export function useCanvasInput(containerRef) {
  const isDrawing = useRef(false)
  const lastPixel = useRef(null)   // { col, row }
  const drawingSelectionId = useRef(null)
  const strokeMode = useRef(null)   // 'add' | 'remove' — resolved on pointer down

  const getPixelCoords = useCallback((e) => {
    const { pixelSize } = useStore.getState()
    const rect = containerRef.current.getBoundingClientRect()
    const col = Math.floor((e.clientX - rect.left) / pixelSize)
    const row = Math.floor((e.clientY - rect.top) / pixelSize)
    return { col, row }
  }, [])

  const applyTool = useCallback(({ col, row }) => {
    const s = useStore.getState()
    const { activeTool, currentColor, canvasWidth, canvasHeight, selections } = s
    if (col < 0 || row < 0 || col >= canvasWidth || row >= canvasHeight) return

    switch (activeTool) {
      case 'pencil':
        s.setPixel(col, row, currentColor)
        break

      case 'eraser':
        s.setPixel(col, row, 'transparent')
        break

      case 'depth': {
        const key = `${col},${row}`
        // strokeMode is set on pointer-down; use it for the whole drag
        const mode = strokeMode.current ?? s.depthBrushMode

        if (mode === 'add') {
          if (drawingSelectionId.current) {
            s.addPixelsToSelection(drawingSelectionId.current, [[col, row]])
          } else {
            const activeId = s.activeSelectionId
            if (activeId) {
              drawingSelectionId.current = activeId
              s.addPixelsToSelection(activeId, [[col, row]])
            } else {
              const newId = s.addSelection([[col, row]])
              drawingSelectionId.current = newId
            }
          }
        } else {
          // remove mode — remove from whichever layer owns this pixel
          for (const sel of selections) {
            if (sel.pixels.includes(key)) {
              s.removePixelsFromSelection(sel.id, [[col, row]])
              break
            }
          }
        }
        break
      }
    }
  }, [])

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return
    try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}

    const s = useStore.getState()
    const coords = getPixelCoords(e)

    if (s.activeTool === 'fill') {
      s.pushUndo()
      s.floodFill(coords.col, coords.row, s.currentColor)
      return
    }
    if (s.activeTool === 'magic-depth') {
      s.magicSelectFloodFill(coords.col, coords.row, s.activeSelectionId)
      return
    }

    isDrawing.current = true
    drawingSelectionId.current = null
    lastPixel.current = coords

    if (s.activeTool === 'pencil' || s.activeTool === 'eraser') {
      s.pushUndo()
    }

    // Smart toggle: decide stroke mode based on whether first pixel is already selected
    if (s.activeTool === 'depth') {
      const key = `${coords.col},${coords.row}`
      const activeId = s.activeSelectionId
      const activeSel = s.selections.find(sel => sel.id === activeId)
      const alreadySelected = activeSel?.pixels.includes(key) ?? false
      strokeMode.current = alreadySelected ? 'remove' : 'add'
    } else {
      strokeMode.current = null
    }

    applyTool(coords)
  }, [getPixelCoords, applyTool])

  const onPointerMove = useCallback((e) => {
    if (!isDrawing.current) return
    const coords = getPixelCoords(e)
    const prev = lastPixel.current
    if (!prev || (coords.col === prev.col && coords.row === prev.row)) return

    // Interpolate all pixels between last and current position
    const points = bresenham(prev.col, prev.row, coords.col, coords.row)
    for (const pt of points) {
      applyTool(pt)
    }
    lastPixel.current = coords
  }, [getPixelCoords, applyTool])

  const onPointerUp = useCallback(() => {
    isDrawing.current = false
    drawingSelectionId.current = null
    lastPixel.current = null
    strokeMode.current = null
  }, [])


  return { onPointerDown, onPointerMove, onPointerUp }
}
