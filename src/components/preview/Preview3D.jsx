import { useRef, useEffect } from 'react'
import { useThreeScene } from './useThreeScene.js'
import { useStore } from '../../store/index.js'

const TOOL_LABELS = {
  pencil:     { label: 'Place voxel', color: '#00ff88' },
  fill:       { label: 'Place voxel', color: '#00ff88' },
  eraser:     { label: 'Erase voxel', color: '#ff4444' },
  eyedropper: { label: 'Pick color',  color: '#00ccff' },
}

export default function Preview3D({ onExport }) {
  const containerRef = useRef(null)
  const { exportPng } = useThreeScene(containerRef)

  const viewMode    = useStore(s => s.viewMode)
  const activeTool  = useStore(s => s.activeTool)
  const currentColor = useStore(s => s.currentColor)
  const is3DEdit    = viewMode === 'preview-only'

  useEffect(() => {
    if (onExport) onExport.current = exportPng
  }, [onExport, exportPng])

  const toolInfo = TOOL_LABELS[activeTool] ?? TOOL_LABELS.pencil

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {is3DEdit ? (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none">
          {/* Tool badge + current color */}
          <div
            className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: `1px solid ${toolInfo.color}55`,
              color: toolInfo.color,
              backdropFilter: 'blur(4px)',
            }}
          >
            <span>{toolInfo.label}</span>
            {(activeTool === 'pencil' || activeTool === 'fill') && (
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: currentColor, outline: '1px solid rgba(255,255,255,0.25)' }}
              />
            )}
          </div>
          {/* Short instruction */}
          <span className="text-xs opacity-40" style={{ color: '#fff', textShadow: '0 1px 3px #000' }}>
            Drag to paint · Hold <kbd style={{ fontFamily: 'monospace', opacity: 0.7 }}>Space</kbd> to orbit · Scroll to zoom
          </span>
        </div>
      ) : (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap">
          Drag to rotate · Scroll to zoom
        </div>
      )}
    </div>
  )
}
