import { useRef, useEffect, useMemo } from 'react'
import { useStore, renderView2D, renderDepthMap2D, getViewSize, getCompositedVoxels } from '../../store/index.js'
import { useCanvasInput } from '../../hooks/useCanvasInput.js'

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
  const containerRef = useRef(null)

  const {
    layers, pixelSize, canvasWidth, canvasHeight, depthDimension,
    showGrid, activeTool, activeView,
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

  const { onPointerDown, onPointerMove, onPointerUp } = useCanvasInput(containerRef)

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

    // Depth shadow pass — inner shadows on edges where adjacent pixels are shallower (protrude in front)
    if (depthMap.length) {
      const maxAlpha  = 0.65
      const shadowReach = 0.6 // fraction of pixelSize the shadow reaches inward

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

          if (dL !== null && dL !== undefined && dL < d) {
            const a = Math.min((d - dL) / D, 1) * maxAlpha
            drawEdgeShadow(px, py, px + reach, py, a)
          }
          if (dT !== null && dT !== undefined && dT < d) {
            const a = Math.min((d - dT) / D, 1) * maxAlpha
            drawEdgeShadow(px, py, px, py + reach, a)
          }
          if (dR !== null && dR !== undefined && dR < d) {
            const a = Math.min((d - dR) / D, 1) * maxAlpha
            drawEdgeShadow(px + pixelSize, py, px + pixelSize - reach, py, a)
          }
          if (dB !== null && dB !== undefined && dB < d) {
            const a = Math.min((d - dB) / D, 1) * maxAlpha
            drawEdgeShadow(px, py + pixelSize, px, py + pixelSize - reach, a)
          }
        }
      }
    }

    if (showGrid && pixelSize >= 5) {
      ctx.strokeStyle = gridColor + '44'
      ctx.lineWidth   = 0.5
      for (let col = 0; col <= viewW; col++) {
        ctx.beginPath()
        ctx.moveTo(col * pixelSize, 0)
        ctx.lineTo(col * pixelSize, ph)
        ctx.stroke()
      }
      for (let row = 0; row <= viewH; row++) {
        ctx.beginPath()
        ctx.moveTo(0, row * pixelSize)
        ctx.lineTo(pw, row * pixelSize)
        ctx.stroke()
      }
    }

    // Depth numbers — only when pixels are large enough to be readable
    if (pixelSize >= 10 && depthMap.length) {
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
          // shadow for readability
          ctx.fillStyle = 'rgba(0,0,0,0.55)'
          ctx.fillText(d, cx + 0.5, cy + 0.5)
          ctx.fillStyle = 'rgba(255,255,255,0.85)'
          ctx.fillText(d, cx, cy)
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
  }, [view2d, depthMap, viewW, viewH, pixelSize, showGrid, activeView])

  return (
    <div className="flex items-center justify-center w-full h-full overflow-auto p-4">
      <div
        ref={containerRef}
        className="relative flex-shrink-0"
        style={{
          boxShadow: '0 0 0 2px var(--color-border), 0 0 0 4px var(--color-surface), 0 8px 40px rgba(0,0,0,0.9)',
          cursor: getCursor(activeTool),
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <canvas
          ref={canvasRef}
          style={{
            width:          viewW * pixelSize,
            height:         viewH * pixelSize,
            imageRendering: 'pixelated',
            display:        'block',
          }}
        />
      </div>
    </div>
  )
}

function getCursor(tool) {
  switch (tool) {
    case 'pencil': return 'crosshair'
    case 'eraser': return 'cell'
    case 'fill':   return 'copy'
    default:       return 'crosshair'
  }
}
