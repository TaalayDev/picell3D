import { useRef, useCallback } from 'react'
import { useStore, getViewSize } from '../store/index.js'

export function useSelectionInput(containerRef) {
  const phase    = useRef('idle') // 'idle' | 'drawing' | 'dragging'
  const start    = useRef(null)   // {col, row} where draw started
  const dragOrig = useRef(null)   // {col, row} where drag started

  const getPixelCoords = useCallback((e) => {
    const { pixelSize } = useStore.getState()
    const rect = containerRef.current.getBoundingClientRect()
    return {
      col: Math.floor((e.clientX - rect.left) / pixelSize),
      row: Math.floor((e.clientY - rect.top)  / pixelSize),
    }
  }, [])

  const isInsideSelection = (col, row, sel) =>
    sel && col >= sel.x1 && col <= sel.x2 && row >= sel.y1 && row <= sel.y2

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return
    try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}

    const s = useStore.getState()
    const { col, row } = getPixelCoords(e)
    const { selection, floatingPaste, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = s
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)

    // If there's a floating paste, clicking commits it at click location and starts new selection
    if (floatingPaste) {
      // Click outside floating paste → commit it
      const fp = floatingPaste
      const insidePaste = col >= fp.col && col < fp.col + fp.w && row >= fp.row && row < fp.row + fp.h
      if (!insidePaste) {
        s.commitPaste()
        phase.current = 'drawing'
        start.current = { col, row }
        s.setSelection({ x1: col, y1: row, x2: col, y2: row })
        return
      }
      // Click inside floating paste → start dragging it
      phase.current = 'dragging'
      dragOrig.current = { col, row, fpCol: fp.col, fpRow: fp.row }
      return
    }

    // Click inside existing selection → cut + start drag
    if (isInsideSelection(col, row, selection)) {
      s.cutSelection() // copies + erases, clears selection
      const clip = useStore.getState().clipboard
      if (clip) {
        // Start floating paste anchored at where user clicked within the selection
        const s2 = useStore.getState()
        const sel = selection // original selection before cut
        const anchorCol = sel.x1
        const anchorRow = sel.y1
        s2.pasteFromClipboard()
        // Move floating paste so it aligns with the mouse cursor's relative position
        const fp = useStore.getState().floatingPaste
        if (fp) {
          const relCol = col - anchorCol
          const relRow = row - anchorRow
          useStore.getState().moveFloatingPaste(col - relCol, row - relRow)
          phase.current = 'dragging'
          dragOrig.current = {
            col, row,
            fpCol: col - relCol,
            fpRow: row - relRow,
          }
          return
        }
      }
    }

    // Start drawing a new selection rect
    if (col < 0 || col >= viewW || row < 0 || row >= viewH) return
    phase.current = 'drawing'
    start.current = { col, row }
    if (selection) s.setSelection(null)
    s.setSelection({ x1: col, y1: row, x2: col, y2: row })
  }, [getPixelCoords])

  const onPointerMove = useCallback((e) => {
    const { col, row } = getPixelCoords(e)
    const s = useStore.getState()

    if (phase.current === 'drawing' && start.current) {
      s.setSelection({ x1: start.current.col, y1: start.current.row, x2: col, y2: row })
      return
    }

    if (phase.current === 'dragging' && dragOrig.current) {
      const { col: origCol, row: origRow, fpCol, fpRow } = dragOrig.current
      const newFpCol = fpCol + (col - origCol)
      const newFpRow = fpRow + (row - origRow)
      s.moveFloatingPaste(newFpCol, newFpRow)
      return
    }
  }, [getPixelCoords])

  const onPointerUp = useCallback(() => {
    phase.current = 'idle'
    start.current = null
    dragOrig.current = null
  }, [])

  return { onPointerDown, onPointerMove, onPointerUp }
}
