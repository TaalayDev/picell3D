import { useRef, useEffect, useMemo, useCallback } from 'react'
import { RotateCw, RotateCcw, Layers, Trash2, Check, X } from 'lucide-react'
import { useStore, renderView2D, renderDepthMap2D, getViewSize, getCompositedVoxels, projectEditBoundsToView } from '../../store/index.js'
import { useCanvasInput } from '../../hooks/useCanvasInput.js'
import { useShapeInput, SHAPE_TOOLS } from '../../hooks/useShapeInput.js'
import { useSelectionInput } from '../../hooks/useSelectionInput.js'
import { useEditBoundsInput } from '../../hooks/useEditBoundsInput.js'
import ReferenceOverlay from './ReferenceOverlay.jsx'

function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

const VIEW_LABELS = {
  front:  '← left   right →',
  back:   '← right  left →',
  left:   '← front  back →',
  right:  '← back   front →',
  top:    '← left   right →',
  bottom: '← left   right →',
}

export default function PixelCanvas() {
  const canvasRef    = useRef(null)
  const overlayRef   = useRef(null)
  const containerRef = useRef(null)
  const scrollRef    = useRef(null)   // the outer overflow-auto div
  const isSpaceHeld  = useRef(false)
  const isPanning    = useRef(false)
  const panStart     = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 })

  const {
    layers, pixelSize, setPixelSize, canvasWidth, canvasHeight, depthDimension,
    showGrid, showDepthText, activeTool, activeView, currentColor,
    selection, floatingPaste, lassoPreview, selectionAnchor,
    editBoundsEnabled, editBounds,
    showLockedVoxels,
    rotateSelection, scaleSelection, shiftSelectionDepth, deleteSelection, commitPaste,
  } = useStore()

  const D = depthDimension

  // Compute per-layer views (for opacity support) + composited depthMap
  const { layerViews, depthMap, view2d } = useMemo(() => {
    const composited = getCompositedVoxels(layers, canvasWidth, canvasHeight, D)
    return {
      layerViews: layers
        .filter(l => l.visible)
        .map(l => ({
          view2d:  renderView2D(l.voxels, activeView, canvasWidth, canvasHeight, D),
          opacity: l.opacity ?? 1,
        })),
      depthMap: renderDepthMap2D(composited, activeView, canvasWidth, canvasHeight, D),
      view2d:   renderView2D(composited, activeView, canvasWidth, canvasHeight, D),
    }
  }, [layers, activeView, canvasWidth, canvasHeight, D])

  const { w: viewW, h: viewH } = getViewSize(activeView, canvasWidth, canvasHeight, D)

  // ── Space+drag pan ───────────────────────────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === ' ' && document.activeElement === containerRef.current) {
        e.preventDefault()
        isSpaceHeld.current = true
      }
    }
    const onKeyUp = (e) => { if (e.key === ' ') isSpaceHeld.current = false }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup',   onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup',   onKeyUp)
    }
  }, [])

  // ── Zoom to fit ──────────────────────────────────────────────────────────────
  const zoomToFit = useCallback(() => {
    if (!scrollRef.current) return
    const rect = scrollRef.current.getBoundingClientRect()
    const pad  = 32
    const fit  = Math.floor(Math.min((rect.width - pad) / viewW, (rect.height - pad) / viewH))
    setPixelSize(Math.max(2, Math.min(fit, 64)))
  }, [viewW, viewH, setPixelSize])

  // Listen for Ctrl+0 zoom-to-fit event from keyboard shortcuts
  useEffect(() => {
    const handler = () => zoomToFit()
    document.addEventListener('picell-zoom-fit', handler)
    return () => document.removeEventListener('picell-zoom-fit', handler)
  }, [zoomToFit])

  function handlePanDown(e) {
    if (!isSpaceHeld.current) return
    isPanning.current = true
    panStart.current  = {
      x: e.clientX, y: e.clientY,
      scrollLeft: scrollRef.current.scrollLeft,
      scrollTop:  scrollRef.current.scrollTop,
    }
    e.preventDefault()
    e.stopPropagation()
  }
  function handlePanMove(e) {
    if (!isPanning.current) return
    scrollRef.current.scrollLeft = panStart.current.scrollLeft - (e.clientX - panStart.current.x)
    scrollRef.current.scrollTop  = panStart.current.scrollTop  - (e.clientY - panStart.current.y)
    e.preventDefault()
  }
  function handlePanUp() { isPanning.current = false }

  // ── Tool handlers ───────────────────────────────────────────────────────────
  const canvasInput   = useCanvasInput(containerRef)
  const shapeInput    = useShapeInput(containerRef)
  const selectInput   = useSelectionInput(containerRef)
  const boundsInput   = useEditBoundsInput(containerRef)

  const isShape  = SHAPE_TOOLS.has(activeTool)
  const isSelect = activeTool === 'select'
  const isBounds = activeTool === 'bounds'

  function routeDown(e)  {
    containerRef.current?.focus({ preventScroll: true })
    if (isSpaceHeld.current) { handlePanDown(e); return }
    if (isBounds) return boundsInput.onPointerDown(e)
    if (isSelect) return selectInput.onPointerDown(e)
    isShape ? shapeInput.handlers.onPointerDown(e)  : canvasInput.onPointerDown(e)
  }
  function routeMove(e)  {
    if (isPanning.current) { handlePanMove(e); return }
    if (isBounds) return boundsInput.onPointerMove(e)
    if (isSelect) return selectInput.onPointerMove(e)
    isShape ? shapeInput.handlers.onPointerMove(e)  : canvasInput.onPointerMove(e)
  }
  function routeUp(e)    {
    handlePanUp()
    if (isBounds) return boundsInput.onPointerUp(e)
    if (isSelect) return selectInput.onPointerUp(e)
    isShape ? shapeInput.handlers.onPointerUp(e)    : canvasInput.onPointerUp(e)
  }

  // ── Main canvas render ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const pw = viewW * pixelSize
    const ph = viewH * pixelSize
    canvas.width  = pw
    canvas.height = ph

    const checkerDark  = getCSSVar('--color-surface')  || '#1a130a'
    const checkerLight = getCSSVar('--color-canvasBg') || '#241a0c'
    const gridColor    = getCSSVar('--color-border')   || '#7a5c2e'

    // Draw checker background first
    for (let row = 0; row < viewH; row++) {
      for (let col = 0; col < viewW; col++) {
        ctx.fillStyle = (col + row) % 2 === 0 ? checkerDark : checkerLight
        ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
      }
    }

    // Draw each visible layer with its opacity
    for (const { view2d: lv, opacity } of layerViews) {
      ctx.globalAlpha = opacity
      for (let row = 0; row < viewH; row++) {
        for (let col = 0; col < viewW; col++) {
          const color = lv[row]?.[col]
          if (!color || color === 'transparent') continue
          ctx.fillStyle = color
          ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
        }
      }
    }
    ctx.globalAlpha = 1

    // Depth shadow pass
    if (depthMap.length) {
      const maxAlpha   = 0.65
      const shadowReach = 0.6

      for (let row = 0; row < viewH; row++) {
        for (let col = 0; col < viewW; col++) {
          const d = depthMap[row]?.[col]
          if (d === null || d === undefined) continue

          const px = col * pixelSize
          const py = row * pixelSize

          const dL = depthMap[row]?.[col - 1]
          const dR = depthMap[row]?.[col + 1]
          const dT = depthMap[row - 1]?.[col]
          const dB = depthMap[row + 1]?.[col]

          const drawEdgeShadow = (x0, y0, x1, y1, alpha) => {
            const g = ctx.createLinearGradient(x0, y0, x1, y1)
            g.addColorStop(0, `rgba(0,0,0,${alpha.toFixed(3)})`)
            g.addColorStop(1, 'rgba(0,0,0,0)')
            ctx.fillStyle = g
            ctx.fillRect(px, py, pixelSize, pixelSize)
          }

          const reach = pixelSize * shadowReach

          if (dL !== null && dL !== undefined && dL < d)
            drawEdgeShadow(px, py, px + reach, py, Math.min((d - dL) / D, 1) * maxAlpha)
          if (dT !== null && dT !== undefined && dT < d)
            drawEdgeShadow(px, py, px, py + reach, Math.min((d - dT) / D, 1) * maxAlpha)
          if (dR !== null && dR !== undefined && dR < d)
            drawEdgeShadow(px + pixelSize, py, px + pixelSize - reach, py, Math.min((d - dR) / D, 1) * maxAlpha)
          if (dB !== null && dB !== undefined && dB < d)
            drawEdgeShadow(px, py + pixelSize, px, py + pixelSize - reach, Math.min((d - dB) / D, 1) * maxAlpha)
        }
      }
    }

    // Grid
    if (showGrid && pixelSize >= 5) {
      ctx.strokeStyle = gridColor + '44'
      ctx.lineWidth   = 0.5
      for (let col = 0; col <= viewW; col++) {
        ctx.beginPath(); ctx.moveTo(col * pixelSize, 0); ctx.lineTo(col * pixelSize, ph); ctx.stroke()
      }
      for (let row = 0; row <= viewH; row++) {
        ctx.beginPath(); ctx.moveTo(0, row * pixelSize); ctx.lineTo(pw, row * pixelSize); ctx.stroke()
      }
    }

    // Depth numbers
    if (showDepthText && pixelSize >= 10 && depthMap.length) {
      const fontSize = Math.max(7, Math.floor(pixelSize * 0.38))
      ctx.font = `bold ${fontSize}px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      for (let row = 0; row < viewH; row++) {
        for (let col = 0; col < viewW; col++) {
          const d = depthMap[row]?.[col]
          if (d === null || d === undefined) continue
          const cx = col * pixelSize + pixelSize / 2
          const cy = row * pixelSize + pixelSize / 2
          const label = d > 0 ? `+${d}` : String(d)
          ctx.fillStyle = 'rgba(0,0,0,0.55)'
          ctx.fillText(label, cx + 0.5, cy + 0.5)
          ctx.fillStyle = 'rgba(255,255,255,0.85)'
          ctx.fillText(label, cx, cy)
        }
      }
    }

    const label = VIEW_LABELS[activeView]
    if (label && pw > 60) {
      ctx.font = `${Math.max(8, pixelSize * 0.55)}px monospace`
      ctx.fillStyle = gridColor + 'aa'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.fillText(label, 4, 4)
    }
  }, [layerViews, depthMap, viewW, viewH, pixelSize, showGrid, showDepthText, activeView])

  // ── Overlay canvas — shape preview + line handles + selection ───────────────
  const { previewPixels, lineState } = shapeInput

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const pw = viewW * pixelSize
    const ph = viewH * pixelSize
    overlay.width  = pw
    overlay.height = ph
    const ctx = overlay.getContext('2d')
    ctx.clearRect(0, 0, pw, ph)

    // Shared 3D edit volume projected into the active orthographic view.
    if (editBoundsEnabled) {
      const boundsRect = projectEditBoundsToView(editBounds, activeView, canvasWidth, canvasHeight, D)
      const bx = boundsRect.x1 * pixelSize
      const by = boundsRect.y1 * pixelSize
      const bw = (boundsRect.x2 - boundsRect.x1 + 1) * pixelSize
      const bh = (boundsRect.y2 - boundsRect.y1 + 1) * pixelSize

      ctx.save()
      ctx.fillStyle = activeTool === 'bounds' ? 'rgba(0,0,0,0.48)' : 'rgba(0,0,0,0.28)'
      ctx.beginPath()
      ctx.rect(0, 0, pw, ph)
      ctx.rect(bx, by, bw, bh)
      ctx.fill('evenodd')
      ctx.strokeStyle = activeTool === 'bounds' ? '#00e5ff' : 'rgba(0,229,255,0.72)'
      ctx.lineWidth = activeTool === 'bounds' ? 2 : 1
      ctx.setLineDash(activeTool === 'bounds' ? [] : [5, 4])
      ctx.strokeRect(bx + 0.5, by + 0.5, Math.max(0, bw - 1), Math.max(0, bh - 1))
      if (showLockedVoxels) {
        ctx.fillStyle = 'rgba(255, 106, 32, 0.58)'
        ctx.strokeStyle = 'rgba(255, 210, 120, 0.9)'
        ctx.lineWidth = 1
        for (let row = 0; row < viewH; row++) {
          for (let col = 0; col < viewW; col++) {
            const outside = col < boundsRect.x1 || col > boundsRect.x2 || row < boundsRect.y1 || row > boundsRect.y2
            if (!outside || !view2d[row]?.[col] || view2d[row][col] === 'transparent') continue
            const x = col * pixelSize, y = row * pixelSize
            ctx.fillRect(x, y, pixelSize, pixelSize)
            ctx.beginPath()
            ctx.moveTo(x + 2, y + pixelSize - 2)
            ctx.lineTo(x + pixelSize - 2, y + 2)
            ctx.stroke()
          }
        }
      }
      if (activeTool === 'bounds') {
        const handle = Math.max(5, Math.min(9, pixelSize * 0.55))
        ctx.setLineDash([])
        const handles = [
          ['nw', bx, by], ['n', bx + bw / 2, by], ['ne', bx + bw, by],
          ['e', bx + bw, by + bh / 2], ['se', bx + bw, by + bh],
          ['s', bx + bw / 2, by + bh], ['sw', bx, by + bh], ['w', bx, by + bh / 2],
        ]
        for (const [name, x, y] of handles) {
          ctx.fillStyle = boundsInput.hoverHandle === name ? '#00e5ff' : '#ffffff'
          ctx.strokeStyle = '#00a8d8'
          ctx.fillRect(x - handle / 2, y - handle / 2, handle, handle)
          ctx.strokeRect(x - handle / 2, y - handle / 2, handle, handle)
        }
        ctx.beginPath()
        ctx.arc(bx + bw / 2, by + bh / 2, Math.max(2.5, handle * 0.35), 0, Math.PI * 2)
        ctx.fillStyle = boundsInput.hoverHandle === 'move' ? '#00e5ff' : 'rgba(255,255,255,0.85)'
        ctx.fill()
      }
      ctx.restore()
    }

    // Ghost preview pixels (shape tools)
    if (previewPixels.length > 0) {
      ctx.fillStyle = currentColor + 'b0'
      for (const { col, row } of previewPixels) {
        ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
      }
    }

    // Live lasso drawing preview
    if (lassoPreview && lassoPreview.length > 0) {
      ctx.save()
      const pts = lassoPreview
      ctx.beginPath()
      ctx.moveTo((pts[0].col + 0.5) * pixelSize, (pts[0].row + 0.5) * pixelSize)
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo((pts[i].col + 0.5) * pixelSize, (pts[i].row + 0.5) * pixelSize)
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.95)'
      ctx.lineWidth   = 1.5
      ctx.setLineDash([4, 3])
      ctx.stroke()

      ctx.strokeStyle = 'rgba(0,140,255,0.85)'
      ctx.setLineDash([4, 3])
      ctx.lineDashOffset = 4
      ctx.stroke()

      // Preview closing segment back to start point
      if (pts.length >= 3) {
        ctx.beginPath()
        ctx.moveTo((pts[pts.length - 1].col + 0.5) * pixelSize, (pts[pts.length - 1].row + 0.5) * pixelSize)
        ctx.lineTo((pts[0].col + 0.5) * pixelSize, (pts[0].row + 0.5) * pixelSize)
        ctx.strokeStyle = 'rgba(100,200,255,0.45)'
        ctx.setLineDash([2, 3])
        ctx.stroke()
      }

      // Small starting anchor marker
      ctx.fillStyle = '#00e5ff'
      ctx.beginPath()
      ctx.arc(
        (pts[0].col + 0.5) * pixelSize,
        (pts[0].row + 0.5) * pixelSize,
        Math.max(2, pixelSize * 0.25),
        0,
        Math.PI * 2
      )
      ctx.fill()
      ctx.restore()
    }

    // Selection
    if (selection) {
      ctx.save()
      if (selection.type === 'lasso' && selection.polygon?.length > 1) {
        // 1. Tint selected pixels inside mask
        if (selection.mask) {
          ctx.fillStyle = 'rgba(100,160,255,0.12)'
          const { x1, y1, mask } = selection
          for (let r = 0; r < mask.length; r++) {
            for (let c = 0; c < mask[r].length; c++) {
              if (mask[r][c]) {
                ctx.fillRect((x1 + c) * pixelSize, (y1 + r) * pixelSize, pixelSize, pixelSize)
              }
            }
          }
        }
        // 2. Stroke lasso polygon outline
        const poly = selection.polygon
        ctx.beginPath()
        ctx.moveTo((poly[0].col + 0.5) * pixelSize, (poly[0].row + 0.5) * pixelSize)
        for (let i = 1; i < poly.length; i++) {
          ctx.lineTo((poly[i].col + 0.5) * pixelSize, (poly[i].row + 0.5) * pixelSize)
        }
        ctx.closePath()
        ctx.strokeStyle = 'rgba(255,255,255,0.9)'
        ctx.lineWidth   = 1.5
        ctx.setLineDash([4, 3])
        ctx.stroke()

        ctx.strokeStyle = 'rgba(0,100,255,0.6)'
        ctx.setLineDash([4, 3])
        ctx.lineDashOffset = 4
        ctx.stroke()
      } else {
        // Rectangle or single pixel selection
        const sx = selection.x1 * pixelSize
        const sy = selection.y1 * pixelSize
        const sw = (selection.x2 - selection.x1 + 1) * pixelSize
        const sh = (selection.y2 - selection.y1 + 1) * pixelSize
        ctx.strokeStyle = 'rgba(255,255,255,0.9)'
        ctx.lineWidth   = 1.5
        ctx.setLineDash([4, 3])
        ctx.strokeRect(sx + 0.5, sy + 0.5, sw - 1, sh - 1)
        ctx.strokeStyle = 'rgba(0,100,255,0.6)'
        ctx.setLineDash([4, 3])
        ctx.lineDashOffset = 4
        ctx.strokeRect(sx + 0.5, sy + 0.5, sw - 1, sh - 1)
        ctx.fillStyle = 'rgba(100,160,255,0.07)'
        ctx.fillRect(sx, sy, sw, sh)
      }
      ctx.setLineDash([])
      ctx.restore()
    }

    // Floating paste preview
    if (floatingPaste) {
      const { col: fc, row: fr, w: fw, h: fh, colors } = floatingPaste
      for (let drow = 0; drow < fh; drow++) {
        for (let dcol = 0; dcol < fw; dcol++) {
          const color = colors[drow]?.[dcol]
          if (!color || color === 'transparent') continue
          ctx.fillStyle = color + 'cc'
          ctx.fillRect((fc + dcol) * pixelSize, (fr + drow) * pixelSize, pixelSize, pixelSize)
        }
      }
      // Blue dashed border around floating paste
      ctx.save()
      ctx.strokeStyle = 'rgba(100,200,255,0.9)'
      ctx.lineWidth   = 1.5
      ctx.setLineDash([4, 3])
      ctx.strokeRect(fc * pixelSize + 0.5, fr * pixelSize + 0.5, fw * pixelSize - 1, fh * pixelSize - 1)
      ctx.setLineDash([])
      ctx.restore()
    }

    // Selection transform handles (Scale corners, Rotate handle & stem, Moveable Anchor)
    if (activeTool === 'select' && (selection || floatingPaste)) {
      const activeBox = floatingPaste
        ? { x1: floatingPaste.col, y1: floatingPaste.row, x2: floatingPaste.col + floatingPaste.w - 1, y2: floatingPaste.row + floatingPaste.h - 1 }
        : selection

      if (activeBox) {
        const bx1 = activeBox.x1 * pixelSize
        const by1 = activeBox.y1 * pixelSize
        const bx2 = (activeBox.x2 + 1) * pixelSize
        const by2 = (activeBox.y2 + 1) * pixelSize
        const midX = (bx1 + bx2) / 2

        ctx.save()

        // 1. Rotate stem and handle
        ctx.strokeStyle = 'rgba(0, 160, 255, 0.85)'
        ctx.lineWidth   = 1.5
        ctx.setLineDash([2, 2])
        ctx.beginPath()
        ctx.moveTo(midX, by1)
        ctx.lineTo(midX, by1 - 22)
        ctx.stroke()
        ctx.setLineDash([])

        ctx.fillStyle   = '#ffffff'
        ctx.strokeStyle = '#0070f3'
        ctx.lineWidth   = 1.5
        ctx.beginPath()
        ctx.arc(midX, by1 - 22, 4.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // 2. Corner scale handles (white squares with blue borders)
        const cornerPts = [
          [bx1, by1],
          [bx2, by1],
          [bx2, by2],
          [bx1, by2],
        ]
        const hs = Math.max(6, Math.min(10, pixelSize * 0.5))
        ctx.fillStyle   = '#ffffff'
        ctx.strokeStyle = '#0070f3'
        ctx.lineWidth   = 1.5
        for (const [cx, cy] of cornerPts) {
          ctx.fillRect(cx - hs / 2, cy - hs / 2, hs, hs)
          ctx.strokeRect(cx - hs / 2, cy - hs / 2, hs, hs)
        }

        // 3. Moveable Anchor (Crosshair target circle ⊕)
        const anchor = selectionAnchor || {
          x: (activeBox.x1 + activeBox.x2 + 1) / 2,
          y: (activeBox.y1 + activeBox.y2 + 1) / 2,
        }
        const ax = anchor.x * pixelSize
        const ay = anchor.y * pixelSize

        // High-contrast background shadow
        ctx.strokeStyle = 'rgba(0,0,0,0.65)'
        ctx.lineWidth   = 3.5
        ctx.beginPath()
        ctx.arc(ax, ay, 6.5, 0, Math.PI * 2)
        ctx.stroke()

        // Anchor ring
        ctx.strokeStyle = '#00e5ff'
        ctx.lineWidth   = 1.5
        ctx.beginPath()
        ctx.arc(ax, ay, 6.5, 0, Math.PI * 2)
        ctx.stroke()

        // Crosshair ticks
        ctx.strokeStyle = '#00e5ff'
        ctx.lineWidth   = 1.5
        ctx.beginPath()
        ctx.moveTo(ax - 10, ay); ctx.lineTo(ax - 3.5, ay)
        ctx.moveTo(ax + 3.5, ay); ctx.lineTo(ax + 10, ay)
        ctx.moveTo(ax, ay - 10); ctx.lineTo(ax, ay - 3.5)
        ctx.moveTo(ax, ay + 3.5); ctx.lineTo(ax, ay + 10)
        ctx.stroke()

        // Center pivot dot
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(ax, ay, 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    // Shape anchor handles (only in editing mode)
    if (lineState.isEditing && lineState.points.length >= 2) {
      const pts = lineState.points
      const hs  = Math.max(5, Math.round(pixelSize * 0.55)) // handle size
      const mhs = Math.max(4, Math.round(pixelSize * 0.38)) // midpoint handle size

      // Draw line in accent color
      ctx.strokeStyle = 'rgba(255,255,255,0.5)'
      ctx.lineWidth   = 1.5
      ctx.setLineDash([3, 3])
      ctx.beginPath()
      ctx.moveTo((pts[0].col + 0.5) * pixelSize, (pts[0].row + 0.5) * pixelSize)
      for (let i = 1; i < pts.length; i++)
        ctx.lineTo((pts[i].col + 0.5) * pixelSize, (pts[i].row + 0.5) * pixelSize)
      ctx.stroke()
      ctx.setLineDash([])

      // Midpoint handles (hollow diamonds) let lines gain bend points.
      if (lineState.allowMidpoints) {
        ctx.strokeStyle = 'rgba(255,255,255,0.7)'
        ctx.fillStyle   = 'rgba(30,30,60,0.75)'
        ctx.lineWidth   = 1
        for (let i = 0; i < pts.length - 1; i++) {
          const mx = (pts[i].col + pts[i + 1].col + 1) / 2 * pixelSize
          const my = (pts[i].row + pts[i + 1].row + 1) / 2 * pixelSize
          ctx.beginPath()
          ctx.moveTo(mx, my - mhs)
          ctx.lineTo(mx + mhs, my)
          ctx.lineTo(mx, my + mhs)
          ctx.lineTo(mx - mhs, my)
          ctx.closePath()
          ctx.fill(); ctx.stroke()
        }
      }

      // Vertex handles (solid squares — start/end bigger)
      for (let i = 0; i < pts.length; i++) {
        const hx = (pts[i].col + 0.5) * pixelSize
        const hy = (pts[i].row + 0.5) * pixelSize
        const sz = (i === 0 || i === pts.length - 1) ? hs : hs * 0.8
        ctx.fillStyle   = currentColor
        ctx.strokeStyle = '#fff'
        ctx.lineWidth   = 1.5
        ctx.fillRect(hx - sz / 2, hy - sz / 2, sz, sz)
        ctx.strokeRect(hx - sz / 2, hy - sz / 2, sz, sz)
      }

      // "Press Enter to commit" hint
      if (pw > 80) {
        ctx.font      = `${Math.max(9, pixelSize * 0.45)}px monospace`
        ctx.fillStyle = 'rgba(255,255,255,0.5)'
        ctx.textAlign = 'right'
        ctx.textBaseline = 'bottom'
        ctx.fillText('Enter ↵  commit · Esc  cancel', pw - 4, ph - 4)
      }
    }
  }, [previewPixels, lineState, pixelSize, viewW, viewH, view2d, currentColor, selection, floatingPaste, lassoPreview, selectionAnchor, activeTool, activeView, canvasWidth, canvasHeight, D, editBoundsEnabled, editBounds, showLockedVoxels, boundsInput.hoverHandle])

  return (
    <div ref={scrollRef} className="flex items-center justify-center w-full h-full overflow-auto p-4 relative">
      {/* Zoom to fit button */}
      <button
        type="button"
        aria-label="Zoom canvas to fit"
        onClick={zoomToFit}
        title="Zoom to fit (Ctrl+0)"
        className="absolute top-2 right-2 z-10 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors"
        style={{ background: 'color-mix(in srgb, var(--color-surface) 90%, transparent)' }}
      >
        Fit
      </button>
      <div
        ref={containerRef}
        data-canvas-keyboard-scope="true"
        role="application"
        aria-label={`${activeView} 2D voxel canvas. Use the selected drawing tool with the pointer. Press question mark for keyboard shortcuts.`}
        tabIndex={0}
        className="relative flex-shrink-0"
        style={{
          boxShadow: '0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)',
          cursor: getCursor(activeTool, shapeInput.isEditing, floatingPaste, isSpaceHeld, selectInput.hoverHandle, boundsInput.hoverHandle),
        }}
        onPointerDown={routeDown}
        onPointerMove={routeMove}
        onPointerUp={routeUp}
        onPointerLeave={(e) => {
          handlePanUp()
          if (isSelect) selectInput.onPointerUp(e)
          else if (isBounds) boundsInput.onPointerUp(e)
          else if (!isShape) canvasInput.onPointerUp(e)
        }}
        onContextMenu={canvasInput.onContextMenu}
      >
        {/* Main voxel canvas */}
        <canvas
          ref={canvasRef}
          data-main-canvas="true"
          aria-hidden="true"
          style={{ width: viewW * pixelSize, height: viewH * pixelSize, imageRendering: 'pixelated', display: 'block' }}
        />

        {/* Shape preview overlay (pointer-events: none so container receives all events) */}
        <canvas
          ref={overlayRef}
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: viewW * pixelSize, height: viewH * pixelSize,
            imageRendering: 'pixelated', pointerEvents: 'none',
          }}
        />

        <ReferenceOverlay pixelSize={pixelSize} />
      </div>

      {/* Pending shape confirmation */}
      {isShape && shapeInput.isEditing && (
        <div
          className="absolute bottom-5 z-20 flex items-center gap-1 px-2.5 py-1.5 rounded-xl border shadow-2xl backdrop-blur-md"
          style={{
            background: 'color-mix(in srgb, var(--color-surface) 94%, transparent)',
            borderColor: 'var(--color-border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.85)',
          }}
        >
          <span className="px-1.5 text-xs text-text-muted">Drag handles to edit</span>
          <button
            type="button"
            onClick={shapeInput.cancel}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-muted hover:text-red-400 hover:bg-red-950/40 transition-colors"
            title="Cancel shape (Esc)"
          >
            <X size={13} /> Cancel
          </button>
          <button
            type="button"
            onClick={shapeInput.commit}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium"
            style={{ background: 'var(--color-accent)', color: 'var(--color-canvasBg, #000)' }}
            title="Confirm shape (Enter)"
          >
            <Check size={13} /> Confirm
          </button>
        </div>
      )}

      {/* Floating Selection Action Bar */}
      {activeTool === 'select' && (selection || floatingPaste) && (
        <div
          className="absolute bottom-5 z-20 flex items-center gap-1 px-2.5 py-1.5 rounded-xl border shadow-2xl backdrop-blur-md"
          style={{
            background: 'color-mix(in srgb, var(--color-surface) 94%, transparent)',
            borderColor: 'var(--color-border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.85)',
          }}
        >
          {/* Rotate CCW */}
          <button
            onClick={() => rotateSelection(-Math.PI / 2)}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors"
            title="Rotate 90° CCW"
          >
            <RotateCcw size={13} />
            <span>-90°</span>
          </button>

          {/* Rotate CW */}
          <button
            onClick={() => rotateSelection(Math.PI / 2)}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors"
            title="Rotate 90° CW"
          >
            <RotateCw size={13} />
            <span>+90°</span>
          </button>

          <div className="w-[1px] h-4 bg-border/60 mx-0.5" />

          {/* Scale 0.5x */}
          <button
            onClick={() => scaleSelection(0.5, 0.5)}
            className="px-2 py-1 rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors font-mono"
            title="Scale 0.5x"
          >
            ½×
          </button>

          {/* Scale 2x */}
          <button
            onClick={() => scaleSelection(2, 2)}
            className="px-2 py-1 rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors font-mono"
            title="Scale 2x"
          >
            2×
          </button>

          <div className="w-[1px] h-4 bg-border/60 mx-0.5" />

          {/* Depth -1 */}
          <button
            onClick={() => shiftSelectionDepth(-1)}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors"
            title="Shift Depth backward (Z - 1)"
          >
            <Layers size={13} />
            <span>Depth -</span>
          </button>

          {/* Depth +1 */}
          <button
            onClick={() => shiftSelectionDepth(1)}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors"
            title="Shift Depth forward (Z + 1)"
          >
            <Layers size={13} />
            <span>Depth +</span>
          </button>

          <div className="w-[1px] h-4 bg-border/60 mx-0.5" />

          {/* Clear / Delete */}
          <button
            onClick={deleteSelection}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-muted hover:text-red-400 hover:bg-red-950/50 transition-colors"
            title="Clear / Delete selection (Delete key)"
          >
            <Trash2 size={13} />
            <span>Clear</span>
          </button>

          {/* Commit if floating */}
          {floatingPaste && (
            <>
              <div className="w-[1px] h-4 bg-border/60 mx-0.5" />
              <button
                onClick={commitPaste}
                className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-colors"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-canvasBg, #000)',
                }}
                title="Commit paste (Enter)"
              >
                <Check size={13} />
                <span>Commit</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function getCursor(tool, isLineEditing, floatingPaste, isSpaceHeld, hoverHandle, boundsHandle) {
  if (isSpaceHeld?.current) return 'grab'
  if (isLineEditing) return 'default'
  if (tool === 'bounds') {
    if (boundsHandle === 'move') return 'move'
    if (boundsHandle === 'n' || boundsHandle === 's') return 'ns-resize'
    if (boundsHandle === 'e' || boundsHandle === 'w') return 'ew-resize'
    if (boundsHandle === 'nw' || boundsHandle === 'se') return 'nwse-resize'
    if (boundsHandle === 'ne' || boundsHandle === 'sw') return 'nesw-resize'
    return 'crosshair'
  }
  if (tool === 'select') {
    if (hoverHandle === 'anchor') return 'all-scroll'
    if (hoverHandle === 'rotate') return 'grab'
    if (hoverHandle === 'scale-nw' || hoverHandle === 'scale-se') return 'nwse-resize'
    if (hoverHandle === 'scale-ne' || hoverHandle === 'scale-sw') return 'nesw-resize'
    return floatingPaste ? 'move' : 'crosshair'
  }
  switch (tool) {
    case 'pencil':   return 'crosshair'
    case 'eraser':   return 'cell'
    case 'fill':     return 'copy'
    case 'eyedropper': return 'copy'
    case 'blend':    return 'crosshair'
    case 'rect':
    case 'circle':
    case 'ellipse':
    case 'line':     return 'crosshair'
    default:         return 'crosshair'
  }
}
