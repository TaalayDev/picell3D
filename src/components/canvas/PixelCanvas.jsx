import { useRef, useEffect, useState } from 'react'
import { useStore } from '../../store/index.js'
import { useCanvasInput } from '../../hooks/useCanvasInput.js'

const CHECKER_DARK = '#1a130a'
const CHECKER_LIGHT = '#241a0c'

export default function PixelCanvas() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [marchOffset, setMarchOffset] = useState(0)

  const {
    pixels, pixelSize, canvasWidth, canvasHeight,
    showGrid, selections, showDepthOverlay, activeSelectionId, activeTool,
  } = useStore()

  const { onPointerDown, onPointerMove, onPointerUp } = useCanvasInput(containerRef)

  // Animate marching ants
  useEffect(() => {
    if (!activeSelectionId) return
    const id = setInterval(() => setMarchOffset(o => (o + 1) % 16), 80)
    return () => clearInterval(id)
  }, [activeSelectionId])

  // Draw everything to canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const w = canvasWidth * pixelSize
    const h = canvasHeight * pixelSize

    canvas.width = w
    canvas.height = h

    // Build depth overlay map
    const depthPixelMap = new Map()
    if (showDepthOverlay) {
      for (const sel of selections) {
        if (!sel.active) continue
        for (const key of sel.pixels) {
          depthPixelMap.set(key, sel.color)
        }
      }
    }

    // Build all-selections map for highlight borders
    const selectionPixelMap = new Map()
    for (const sel of selections) {
      for (const key of sel.pixels) {
        selectionPixelMap.set(key, sel.color)
      }
    }

    // Active selection pixels
    const activePixels = new Set()
    if (activeSelectionId) {
      const sel = selections.find(s => s.id === activeSelectionId)
      if (sel) sel.pixels.forEach(k => activePixels.add(k))
    }

    // --- Draw pixels ---
    for (let row = 0; row < canvasHeight; row++) {
      for (let col = 0; col < canvasWidth; col++) {
        const x = col * pixelSize
        const y = row * pixelSize
        const color = pixels[row][col]

        // Checkerboard for transparent
        if (color === 'transparent') {
          ctx.fillStyle = (col + row) % 2 === 0 ? CHECKER_DARK : CHECKER_LIGHT
        } else {
          ctx.fillStyle = color
        }
        ctx.fillRect(x, y, pixelSize, pixelSize)

        // Depth overlay tint
        const key = `${col},${row}`
        if (showDepthOverlay && depthPixelMap.has(key)) {
          ctx.fillStyle = depthPixelMap.get(key) + '66'
          ctx.fillRect(x, y, pixelSize, pixelSize)
        } else if (!showDepthOverlay && selectionPixelMap.has(key) && key !== activePixels.has(key)) {
          // Subtle dim tint for all selection pixels when overlay off
          ctx.fillStyle = selectionPixelMap.get(key) + '22'
          ctx.fillRect(x, y, pixelSize, pixelSize)
        }
      }
    }

    // --- Grid ---
    if (showGrid && pixelSize >= 5) {
      ctx.strokeStyle = 'rgba(122,92,46,0.2)'
      ctx.lineWidth = 0.5
      for (let col = 0; col <= canvasWidth; col++) {
        ctx.beginPath()
        ctx.moveTo(col * pixelSize, 0)
        ctx.lineTo(col * pixelSize, h)
        ctx.stroke()
      }
      for (let row = 0; row <= canvasHeight; row++) {
        ctx.beginPath()
        ctx.moveTo(0, row * pixelSize)
        ctx.lineTo(w, row * pixelSize)
        ctx.stroke()
      }
    }

    // --- Marching ants for active selection ---
    if (activePixels.size > 0) {
      ctx.lineWidth = 1.5

      for (const key of activePixels) {
        const [c, r] = key.split(',').map(Number)
        const x = c * pixelSize
        const y = r * pixelSize

        const edges = [
          [c - 1, r, x, y, x, y + pixelSize],
          [c + 1, r, x + pixelSize, y, x + pixelSize, y + pixelSize],
          [c, r - 1, x, y, x + pixelSize, y],
          [c, r + 1, x, y + pixelSize, x + pixelSize, y + pixelSize],
        ]

        for (const [nc, nr, x1, y1, x2, y2] of edges) {
          if (!activePixels.has(`${nc},${nr}`)) {
            // White base
            ctx.strokeStyle = 'rgba(255,255,255,0.9)'
            ctx.setLineDash([4, 4])
            ctx.lineDashOffset = -marchOffset
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
            // Dark dashes offset
            ctx.strokeStyle = 'rgba(0,0,0,0.7)'
            ctx.lineDashOffset = -marchOffset + 4
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }
      ctx.setLineDash([])
    }
  }, [pixels, pixelSize, canvasWidth, canvasHeight, showGrid, selections,
      showDepthOverlay, activeSelectionId, marchOffset])

  return (
    <div className="flex items-center justify-center w-full h-full overflow-auto p-4">
      <div
        ref={containerRef}
        className="relative flex-shrink-0"
        style={{
          boxShadow: '0 0 0 2px #7a5c2e, 0 0 0 4px rgba(61,46,24,0.8), 0 8px 40px rgba(0,0,0,0.9)',
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
            width: canvasWidth * pixelSize,
            height: canvasHeight * pixelSize,
            imageRendering: 'pixelated',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}

function getCursor(tool) {
  switch (tool) {
    case 'pencil':      return 'crosshair'
    case 'eraser':      return 'cell'
    case 'fill':        return 'copy'
    case 'depth':       return 'pointer'
    case 'magic-depth': return 'pointer'
    default:            return 'crosshair'
  }
}
