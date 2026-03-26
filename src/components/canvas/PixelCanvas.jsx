import { useRef, useEffect, useMemo } from 'react'
import { useStore, renderView2D, renderDepthMap2D, getViewSize, getCompositedVoxels } from '../../store/index.js'
import { useCanvasInput } from '../../hooks/useCanvasInput.js'
import { useShapeInput, SHAPE_TOOLS } from '../../hooks/useShapeInput.js'
import { useSelectionInput } from '../../hooks/useSelectionInput.js'
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

  const {
    layers, pixelSize, canvasWidth, canvasHeight, depthDimension,
    showGrid, showDepthText, activeTool, activeView, currentColor,
    selection, floatingPaste,
  } = useStore()

  const D = depthDimension

  const { view2d, depthMap } = useMemo(() => {
    const composited = getCompositedVoxels(layers, canvasWidth, canvasHeight, D)
    return {
      view2d:   renderView2D(composited, activeView, canvasWidth, canvasHeight, D),
      depthMap: renderDepthMap2D(composited, activeView, canvasWidth, canvasHeight, D),
    }
  }, [layers, activeView, canvasWidth, canvasHeight, D])

  const { w: viewW, h: viewH } = getViewSize(activeView, canvasWidth, canvasHeight, D)

  // ── Tool handlers ───────────────────────────────────────────────────────────
  const canvasInput   = useCanvasInput(containerRef)
  const shapeInput    = useShapeInput(containerRef)
  const selectInput   = useSelectionInput(containerRef)

  const isShape  = SHAPE_TOOLS.has(activeTool)
  const isSelect = activeTool === 'select'

  function routeDown(e)  {
    if (isSelect) return selectInput.onPointerDown(e)
    isShape ? shapeInput.handlers.onPointerDown(e)  : canvasInput.onPointerDown(e)
  }
  function routeMove(e)  {
    if (isSelect) return selectInput.onPointerMove(e)
    isShape ? shapeInput.handlers.onPointerMove(e)  : canvasInput.onPointerMove(e)
  }
  function routeUp(e)    {
    if (isSelect) return selectInput.onPointerUp(e)
    isShape ? shapeInput.handlers.onPointerUp(e)    : canvasInput.onPointerUp(e)
  }

  // ── Main canvas render ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !view2d.length) return
    const ctx = canvas.getContext('2d')
    const pw = viewW * pixelSize
    const ph = viewH * pixelSize
    canvas.width  = pw
    canvas.height = ph

    const checkerDark  = getCSSVar('--color-surface')  || '#1a130a'
    const checkerLight = getCSSVar('--color-canvasBg') || '#241a0c'
    const gridColor    = getCSSVar('--color-border')   || '#7a5c2e'

    for (let row = 0; row < viewH; row++) {
      for (let col = 0; col < viewW; col++) {
        const x = col * pixelSize
        const y = row * pixelSize
        const color = view2d[row]?.[col] ?? 'transparent'
        ctx.fillStyle = color === 'transparent'
          ? (col + row) % 2 === 0 ? checkerDark : checkerLight
          : color
        ctx.fillRect(x, y, pixelSize, pixelSize)
      }
    }

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
  }, [view2d, depthMap, viewW, viewH, pixelSize, showGrid, showDepthText, activeView])

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

    // Ghost preview pixels (shape tools)
    if (previewPixels.length > 0) {
      ctx.fillStyle = currentColor + 'b0'
      for (const { col, row } of previewPixels) {
        ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
      }
    }

    // Selection rect
    if (selection) {
      const sx = selection.x1 * pixelSize
      const sy = selection.y1 * pixelSize
      const sw = (selection.x2 - selection.x1 + 1) * pixelSize
      const sh = (selection.y2 - selection.y1 + 1) * pixelSize
      ctx.save()
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

    // Line handles (only in editing mode)
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

      // Midpoint handles (hollow diamonds)
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
  }, [previewPixels, lineState, pixelSize, viewW, viewH, currentColor, selection, floatingPaste])

  return (
    <div className="flex items-center justify-center w-full h-full overflow-auto p-4">
      <div
        ref={containerRef}
        className="relative flex-shrink-0"
        style={{
          boxShadow: '0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)',
          cursor: getCursor(activeTool, shapeInput.isEditing, floatingPaste),
        }}
        onPointerDown={routeDown}
        onPointerMove={routeMove}
        onPointerUp={routeUp}
        onPointerLeave={(e) => {
          if (isSelect) selectInput.onPointerUp(e)
          else if (!isShape) canvasInput.onPointerUp(e)
        }}
      >
        {/* Main voxel canvas */}
        <canvas
          ref={canvasRef}
          style={{ width: viewW * pixelSize, height: viewH * pixelSize, imageRendering: 'pixelated', display: 'block' }}
        />

        {/* Shape preview overlay (pointer-events: none so container receives all events) */}
        <canvas
          ref={overlayRef}
          style={{
            position: 'absolute', inset: 0,
            width: viewW * pixelSize, height: viewH * pixelSize,
            imageRendering: 'pixelated', pointerEvents: 'none',
          }}
        />

        <ReferenceOverlay pixelSize={pixelSize} />
      </div>
    </div>
  )
}

function getCursor(tool, isLineEditing, floatingPaste) {
  if (isLineEditing) return 'default'
  if (tool === 'select') return floatingPaste ? 'move' : 'crosshair'
  switch (tool) {
    case 'pencil':   return 'crosshair'
    case 'eraser':   return 'cell'
    case 'fill':     return 'copy'
    case 'rect':
    case 'circle':
    case 'ellipse':
    case 'line':     return 'crosshair'
    default:         return 'crosshair'
  }
}
