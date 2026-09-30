import { useRef, useCallback, useState } from 'react'
import { useStore, getViewSize } from '../store/index.js'
import { isPointInSelection, rasterizeLasso } from '../lib/selectionRasterizer.js'
import { rotateBox, scaleBox } from '../lib/selectionTransform.js'

export function useSelectionInput(containerRef) {
  const phase          = useRef('idle') // 'idle' | 'drawing-rect' | 'drawing-lasso' | 'dragging' | 'dragging-anchor' | 'rotating' | 'scaling'
  const start          = useRef(null)   // {col, row} where draw started (rect)
  const lassoPoints    = useRef([])     // [{col, row}, ...] points in lasso
  const dragOrig       = useRef(null)   // {col, row, fpCol, fpRow}
  const transformStart = useRef(null)   // snapshot & initial geometry for rotate/scale
  const [hoverHandle, setHoverHandle] = useState(null)

  const getPixelCoords = useCallback((e) => {
    const { pixelSize } = useStore.getState()
    const rect = containerRef.current.getBoundingClientRect()
    return {
      col: Math.floor((e.clientX - rect.left) / pixelSize),
      row: Math.floor((e.clientY - rect.top)  / pixelSize),
      px: e.clientX - rect.left,
      py: e.clientY - rect.top,
    }
  }, [containerRef])

  // Helper to find the active bounding box and handles
  const getHandles = useCallback(() => {
    const s = useStore.getState()
    const { selection, floatingPaste, selectionAnchor, pixelSize } = s
    let box = null
    if (floatingPaste) {
      box = {
        x1: floatingPaste.col,
        y1: floatingPaste.row,
        x2: floatingPaste.col + floatingPaste.w - 1,
        y2: floatingPaste.row + floatingPaste.h - 1,
      }
    } else if (selection) {
      box = {
        x1: selection.x1,
        y1: selection.y1,
        x2: selection.x2,
        y2: selection.y2,
      }
    }
    if (!box) return null

    const bx1 = box.x1 * pixelSize
    const by1 = box.y1 * pixelSize
    const bx2 = (box.x2 + 1) * pixelSize
    const by2 = (box.y2 + 1) * pixelSize
    const midX = (bx1 + bx2) / 2

    const anchor = selectionAnchor || {
      x: (box.x1 + box.x2 + 1) / 2,
      y: (box.y1 + box.y2 + 1) / 2,
    }

    return {
      box,
      anchor,
      anchorPos: { x: anchor.x * pixelSize, y: anchor.y * pixelSize },
      rotatePos: { x: midX, y: by1 - 22 },
      corners: {
        nw: { x: bx1, y: by1, canvasX: box.x1, yCanvas: box.y1 },
        ne: { x: bx2, y: by1, canvasX: box.x2 + 1, yCanvas: box.y1 },
        se: { x: bx2, y: by2, canvasX: box.x2 + 1, yCanvas: box.y2 + 1 },
        sw: { x: bx1, y: by2, canvasX: box.x1, yCanvas: box.y2 + 1 },
      },
    }
  }, [])

  // Detect which handle (if any) is under (px, py)
  const hitTestHandle = useCallback((px, py) => {
    const handles = getHandles()
    if (!handles) return null

    // 1. Anchor
    if (Math.hypot(px - handles.anchorPos.x, py - handles.anchorPos.y) <= 10) {
      return { type: 'anchor', handles }
    }

    // 2. Rotate handle
    if (Math.hypot(px - handles.rotatePos.x, py - handles.rotatePos.y) <= 11) {
      return { type: 'rotate', handles }
    }

    // 3. Corner scale handles
    for (const [key, pt] of Object.entries(handles.corners)) {
      if (Math.hypot(px - pt.x, py - pt.y) <= 10) {
        return { type: `scale-${key}`, key, handles }
      }
    }

    return null
  }, [getHandles])

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return
    try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}

    const s = useStore.getState()
    const { col, row, px, py } = getPixelCoords(e)
    const { selection, floatingPaste, selectionMode, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView, pixelSize } = s
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)

    const hit = hitTestHandle(px, py)

    // A. Interacting with Handles
    if (hit) {
      if (hit.type === 'anchor') {
        phase.current = 'dragging-anchor'
        return
      }

      if (hit.type === 'rotate') {
        if (!floatingPaste && selection) {
          s.liftSelectionToFloating()
        }
        const fp = useStore.getState().floatingPaste
        if (!fp) return
        const anchor = useStore.getState().selectionAnchor || { x: fp.col + fp.w / 2, y: fp.row + fp.h / 2 }
        transformStart.current = {
          fpSnapshot: {
            ...fp,
            colors: fp.colors.map(r => [...r]),
            voxelList: fp.voxelList ? fp.voxelList.map(v => ({ ...v })) : null,
          },
          anchor: { ...anchor },
          startAngle: Math.atan2(py - anchor.y * pixelSize, px - anchor.x * pixelSize),
        }
        phase.current = 'rotating'
        return
      }

      if (hit.type.startsWith('scale-')) {
        if (!floatingPaste && selection) {
          s.liftSelectionToFloating()
        }
        const fp = useStore.getState().floatingPaste
        if (!fp) return
        const anchor = useStore.getState().selectionAnchor || { x: fp.col + fp.w / 2, y: fp.row + fp.h / 2 }
        const corner = hit.handles.corners[hit.key]
        transformStart.current = {
          fpSnapshot: {
            ...fp,
            colors: fp.colors.map(r => [...r]),
            voxelList: fp.voxelList ? fp.voxelList.map(v => ({ ...v })) : null,
          },
          anchor: { ...anchor },
          cornerKey: hit.key,
          initHandleCanvas: { x: corner.canvasX, y: corner.yCanvas },
        }
        phase.current = 'scaling'
        return
      }
    }

    // B. Floating paste dragging or committing
    if (floatingPaste) {
      const fp = floatingPaste
      const insidePaste = col >= fp.col && col < fp.col + fp.w && row >= fp.row && row < fp.row + fp.h
      if (!insidePaste) {
        s.commitPaste()
        // Start new selection
        const clampedCol = Math.max(0, Math.min(viewW - 1, col))
        const clampedRow = Math.max(0, Math.min(viewH - 1, row))
        if (selectionMode === 'lasso') {
          phase.current = 'drawing-lasso'
          lassoPoints.current = [{ col: clampedCol, row: clampedRow }]
          s.setLassoPreview([{ col: clampedCol, row: clampedRow }])
        } else {
          phase.current = 'drawing-rect'
          start.current = { col, row }
          s.setSelection({ x1: col, y1: row, x2: col, y2: row, type: 'rect' })
        }
        return
      }
      phase.current = 'dragging'
      dragOrig.current = { col, row, fpCol: fp.col, fpRow: fp.row }
      return
    }

    // C. Click inside existing selection → lift & drag
    if (isPointInSelection(col, row, selection)) {
      const sel = selection
      const anchorCol = sel.x1
      const anchorRow = sel.y1
      s.cutSelection()
      const clip = useStore.getState().clipboard
      if (clip) {
        s.pasteFromClipboard()
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

    // D. Start drawing new selection
    if (col < 0 || col >= viewW || row < 0 || row >= viewH) return
    if (selection) s.setSelection(null)

    const clampedCol = Math.max(0, Math.min(viewW - 1, col))
    const clampedRow = Math.max(0, Math.min(viewH - 1, row))

    if (selectionMode === 'lasso') {
      phase.current = 'drawing-lasso'
      lassoPoints.current = [{ col: clampedCol, row: clampedRow }]
      s.setLassoPreview([{ col: clampedCol, row: clampedRow }])
    } else {
      phase.current = 'drawing-rect'
      start.current = { col, row }
      s.setSelection({ x1: col, y1: row, x2: col, y2: row, type: 'rect' })
    }
  }, [containerRef, getPixelCoords, hitTestHandle])

  const onPointerMove = useCallback((e) => {
    const { col, row, px, py } = getPixelCoords(e)
    const s = useStore.getState()
    const { pixelSize, canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = s
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)

    // Update hovered handle indicator when idle
    if (phase.current === 'idle') {
      const hit = hitTestHandle(px, py)
      setHoverHandle(hit ? hit.type : null)
      return
    }

    // 1. Dragging Anchor
    if (phase.current === 'dragging-anchor') {
      const canvasX = Math.round((px / pixelSize) * 2) / 2
      const canvasY = Math.round((py / pixelSize) * 2) / 2
      s.setSelectionAnchor({ x: canvasX, y: canvasY })
      return
    }

    // 2. Rotating
    if (phase.current === 'rotating' && transformStart.current) {
      const { fpSnapshot, anchor, startAngle } = transformStart.current
      const currAngle = Math.atan2(py - anchor.y * pixelSize, px - anchor.x * pixelSize)
      let deltaAngle = currAngle - startAngle
      if (e.shiftKey) {
        const snap = Math.PI / 12 // 15 deg snap
        deltaAngle = Math.round(deltaAngle / snap) * snap
      }
      const rotated = rotateBox(fpSnapshot, deltaAngle, anchor.x, anchor.y)
      s.setFloatingPaste(rotated)
      return
    }

    // 3. Scaling
    if (phase.current === 'scaling' && transformStart.current) {
      const { fpSnapshot, anchor, initHandleCanvas } = transformStart.current
      const currCanvasX = px / pixelSize
      const currCanvasY = py / pixelSize
      const origDx = initHandleCanvas.x - anchor.x
      const origDy = initHandleCanvas.y - anchor.y
      const currDx = currCanvasX - anchor.x
      const currDy = currCanvasY - anchor.y
      let sx = Math.abs(origDx) > 0.1 ? currDx / origDx : 1
      let sy = Math.abs(origDy) > 0.1 ? currDy / origDy : 1

      if (e.shiftKey) {
        const maxS = Math.max(Math.abs(sx), Math.abs(sy))
        sx = Math.sign(sx) * maxS
        sy = Math.sign(sy) * maxS
      }

      const scaled = scaleBox(fpSnapshot, sx, sy, anchor.x, anchor.y)
      s.setFloatingPaste(scaled)
      return
    }

    // 4. Dragging floating paste
    if (phase.current === 'dragging' && dragOrig.current) {
      const { col: origCol, row: origRow, fpCol, fpRow } = dragOrig.current
      s.moveFloatingPaste(fpCol + (col - origCol), fpRow + (row - origRow))
      return
    }

    // 5. Drawing rect
    if (phase.current === 'drawing-rect' && start.current) {
      s.setSelection({ x1: start.current.col, y1: start.current.row, x2: col, y2: row, type: 'rect' })
      return
    }

    // 6. Drawing lasso
    if (phase.current === 'drawing-lasso') {
      const clampedCol = Math.max(0, Math.min(viewW - 1, col))
      const clampedRow = Math.max(0, Math.min(viewH - 1, row))
      const pts = lassoPoints.current
      const last = pts[pts.length - 1]
      if (!last || last.col !== clampedCol || last.row !== clampedRow) {
        pts.push({ col: clampedCol, row: clampedRow })
        s.setLassoPreview([...pts])
      }
      return
    }
  }, [getPixelCoords, hitTestHandle])

  const onPointerUp = useCallback(() => {
    const s = useStore.getState()
    const { canvasWidth: W, canvasHeight: H, depthDimension: D, activeView } = s
    const { w: viewW, h: viewH } = getViewSize(activeView, W, H, D)

    if (phase.current === 'drawing-lasso') {
      const pts = lassoPoints.current || []
      s.setLassoPreview(null)
      if (pts.length > 0) {
        const result = rasterizeLasso(pts, viewW, viewH)
        if (result) {
          s.setSelection({
            ...result,
            polygon: [...pts],
          })
        } else {
          s.setSelection(null)
        }
      }
      lassoPoints.current = []
    }

    phase.current = 'idle'
    start.current = null
    dragOrig.current = null
    transformStart.current = null
  }, [])

  return { onPointerDown, onPointerMove, onPointerUp, hoverHandle }
}
