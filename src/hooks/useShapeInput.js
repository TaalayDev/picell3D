import { useRef, useState, useCallback, useEffect } from 'react'
import { useStore } from '../store/index.js'
import { computeShapePixels } from '../lib/shapeRasterizer.js'

export const SHAPE_TOOLS = new Set(['rect', 'circle', 'ellipse', 'line'])

// Pixel radius for handle hit-detection
const HIT_PX = 10

function getCoords(e, containerRef, pixelSize) {
  const rect = containerRef.current.getBoundingClientRect()
  const px = e.clientX - rect.left
  const py = e.clientY - rect.top
  return {
    col: Math.floor(px / pixelSize),
    row: Math.floor(py / pixelSize),
    px,
    py,
  }
}

/**
 * Manages state for shape drawing tools: rect, circle, ellipse, line.
 *
 * The line tool has an extra "editing" phase — after initial drag the user
 * can drag vertex handles (solid squares) or midpoint handles (hollow
 * diamonds) to bend the line. Pressing Enter or clicking outside commits.
 *
 * Returns:
 *   previewPixels  — pixels to draw as a ghost on the overlay canvas
 *   lineState      — {points, isEditing} for rendering handles
 *   shapeFilled    — current fill toggle (for rect/circle/ellipse)
 *   toggleFilled   — toggle fill mode
 *   handlers       — {onPointerDown, onPointerMove, onPointerUp}
 *   cancel / commit — imperative controls
 */
export function useShapeInput(containerRef) {
  const phase       = useRef('idle')     // 'idle' | 'drawing' | 'editing'
  const points      = useRef([])          // [{col,row}] — all vertices
  const dragging    = useRef(null)        // null | {type:'vertex'|'midpoint', index}

  const [previewPixels, setPreviewPixels] = useState([])
  const [lineState, setLineState]         = useState({ points: [], isEditing: false })
  const [shapeFilled, setShapeFilled]     = useState(false)

  const toggleFilled = useCallback(() => setShapeFilled(v => !v), [])

  // ── Internal helpers ────────────────────────────────────────────────────────

  function refresh() {
    const tool = useStore.getState().activeTool
    const pts  = points.current
    setPreviewPixels(pts.length >= 2 ? computeShapePixels(tool, pts, filledRef.current) : [])
    if (tool === 'line') {
      setLineState({ points: [...pts], isEditing: phase.current === 'editing' })
    } else {
      setLineState({ points: [], isEditing: false })
    }
  }

  // We need shapeFilled to be accessible inside refresh without stale closure.
  // Use a ref so we can always read the latest value.
  const filledRef = useRef(shapeFilled)
  useEffect(() => { filledRef.current = shapeFilled }, [shapeFilled])

  function refreshWithFilled(filled) {
    const tool = useStore.getState().activeTool
    const pts  = points.current
    setPreviewPixels(pts.length >= 2 ? computeShapePixels(tool, pts, filled) : [])
  }

  function findHandle(px, py, pixelSize) {
    if (phase.current !== 'editing') return null
    const pts = points.current

    // Vertex handles (solid squares) — take priority
    for (let i = 0; i < pts.length; i++) {
      const hx = (pts[i].col + 0.5) * pixelSize
      const hy = (pts[i].row + 0.5) * pixelSize
      if (Math.abs(px - hx) <= HIT_PX && Math.abs(py - hy) <= HIT_PX)
        return { type: 'vertex', index: i }
    }

    // Midpoint handles (hollow diamonds)
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].col + pts[i + 1].col + 1) / 2 * pixelSize
      const my = (pts[i].row + pts[i + 1].row + 1) / 2 * pixelSize
      if (Math.abs(px - mx) <= HIT_PX && Math.abs(py - my) <= HIT_PX)
        return { type: 'midpoint', index: i }
    }

    return null
  }

  const doCommit = useCallback(() => {
    const s   = useStore.getState()
    const pts = points.current
    if (pts.length < 2) {
      phase.current  = 'idle'
      points.current = []
      dragging.current = null
      setPreviewPixels([])
      setLineState({ points: [], isEditing: false })
      return
    }
    const pixels = computeShapePixels(s.activeTool, pts, filledRef.current)
    s.pushUndo()
    for (const { col, row } of pixels) s.paintAt(col, row, s.currentColor)
    phase.current  = 'idle'
    points.current = []
    dragging.current = null
    setPreviewPixels([])
    setLineState({ points: [], isEditing: false })
  }, [])

  const cancel = useCallback(() => {
    phase.current  = 'idle'
    points.current = []
    dragging.current = null
    setPreviewPixels([])
    setLineState({ points: [], isEditing: false })
  }, [])

  // ── Keyboard: Enter = commit, Escape = cancel ────────────────────────────────
  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (phase.current === 'editing') {
        if (e.key === 'Enter')  { e.preventDefault(); doCommit() }
        if (e.key === 'Escape') { e.preventDefault(); cancel() }
      } else if (phase.current === 'drawing') {
        if (e.key === 'Escape') { e.preventDefault(); cancel() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [doCommit, cancel])

  // ── Pointer handlers ─────────────────────────────────────────────────────────

  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return
    const { pixelSize, activeTool } = useStore.getState()
    if (!SHAPE_TOOLS.has(activeTool)) return

    const { col, row, px, py } = getCoords(e, containerRef, pixelSize)

    // ── Line editing mode ──
    if (phase.current === 'editing') {
      const handle = findHandle(px, py, pixelSize)
      if (handle) {
        if (handle.type === 'midpoint') {
          // Insert vertex at midpoint position
          const pts = points.current
          const newPts = [
            ...pts.slice(0, handle.index + 1),
            { col, row },
            ...pts.slice(handle.index + 1),
          ]
          points.current = newPts
          dragging.current = { type: 'vertex', index: handle.index + 1 }
        } else {
          dragging.current = handle
        }
        try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}
        refresh()
        return
      }
      // Clicked outside → commit current line, then start fresh
      doCommit()
      // Fall through to start new drawing
    }

    // ── Start drawing ──
    try { containerRef.current?.setPointerCapture(e.pointerId) } catch {}
    phase.current  = 'drawing'
    points.current = [{ col, row }, { col, row }]
    dragging.current = null
    refresh()
  }, [containerRef, doCommit])

  const onPointerMove = useCallback((e) => {
    const { pixelSize } = useStore.getState()
    const { col, row } = getCoords(e, containerRef, pixelSize)

    if (phase.current === 'drawing') {
      const pts = points.current
      points.current = [pts[0], { col, row }]
      refresh()
      return
    }

    if (phase.current === 'editing' && dragging.current) {
      const { type, index } = dragging.current
      if (type === 'vertex') {
        const pts = [...points.current]
        pts[index] = { col, row }
        points.current = pts
        refresh()
      }
    }
  }, [containerRef])

  const onPointerUp = useCallback((e) => {
    const { activeTool } = useStore.getState()

    if (phase.current === 'drawing') {
      if (activeTool === 'line') {
        // Enter line-edit mode instead of committing immediately
        phase.current    = 'editing'
        dragging.current = null
        refresh()
      } else {
        doCommit()
      }
      return
    }

    if (phase.current === 'editing') {
      dragging.current = null
    }
  }, [doCommit])

  // Re-run preview when shapeFilled changes
  useEffect(() => {
    if (phase.current !== 'idle') refreshWithFilled(shapeFilled)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapeFilled])

  return {
    previewPixels,
    lineState,
    shapeFilled,
    toggleFilled,
    handlers: { onPointerDown, onPointerMove, onPointerUp },
    cancel,
    commit: doCommit,
    isEditing: lineState.isEditing,
  }
}
