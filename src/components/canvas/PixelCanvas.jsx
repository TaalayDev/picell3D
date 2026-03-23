import { useRef, useEffect, useMemo } from 'react'
import { useStore } from '../../store/index.js'
import { renderView2D, getViewSize } from '../../store/index.js'
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
    voxels, pixelSize, canvasWidth, canvasHeight, depthDimension,
    showGrid, activeTool, activeView,
  } = useStore()

  const D = depthDimension

  const view2d = useMemo(
    () => renderView2D(voxels, activeView, canvasWidth, canvasHeight, D),
    [voxels, activeView, canvasWidth, canvasHeight, D]
  )
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

    const label = VIEW_LABELS[activeView]
    if (label && pw > 60) {
      ctx.font = `${Math.max(8, pixelSize * 0.55)}px monospace`
      ctx.fillStyle = gridColor + 'aa'
      ctx.textAlign = 'left'
      ctx.fillText(label, 4, 12)
    }
  }, [view2d, viewW, viewH, pixelSize, showGrid, activeView])

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
