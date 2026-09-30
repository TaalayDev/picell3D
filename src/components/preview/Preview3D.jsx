import { useRef, useEffect } from 'react'
import { Check, X, Gamepad2 } from 'lucide-react'
import { useThreeScene } from './useThreeScene.js'
import { useStore } from '../../store/index.js'

const TOOL_LABELS = {
  pencil:     { label: 'Place voxel', color: '#00ff88' },
  fill:       { label: 'Fill voxels', color: '#00ff88' },
  eraser:     { label: 'Erase voxel', color: '#ff4444' },
  eyedropper: { label: 'Pick color',  color: '#00ccff' },
  blend:      { label: 'Blend voxels', color: '#00ff88' },
  material:   { label: 'Apply material', color: '#ffaa00' },
  select:     { label: 'Select voxels', color: '#22ccff' },
  rect:       { label: 'Draw rectangle', color: '#00ff88' },
  circle:     { label: 'Draw circle', color: '#00ff88' },
  ellipse:    { label: 'Draw ellipse', color: '#00ff88' },
  line:       { label: 'Draw line', color: '#00ff88' },
  box3d:      { label: 'Create box', color: '#00ff88' },
  sphere3d:   { label: 'Create sphere', color: '#00ff88' },
  cylinder3d: { label: 'Create cylinder', color: '#00ff88' },
}

const SHAPE_TOOLS = new Set(['rect', 'circle', 'ellipse', 'line', 'box3d', 'sphere3d', 'cylinder3d'])

export default function Preview3D({ onExport }) {
  const containerRef = useRef(null)
  const {
    exportPng,
    isShapeEditing,
    confirmShape,
    cancelShape,
    isPointerLocked,
    requestPointerLock,
  } = useThreeScene(containerRef)

  const viewMode      = useStore(s => s.viewMode)
  const flyMode       = useStore(s => s.flyMode)
  const toggleFlyMode = useStore(s => s.toggleFlyMode)
  const activeTool    = useStore(s => s.activeTool)
  const currentColor  = useStore(s => s.currentColor)
  const fillScope     = useStore(s => s.fillScope)
  const planeLock     = useStore(s => s.planeLock)
  const planeAxis     = useStore(s => s.planeAxis)
  const planeDepth    = useStore(s => s.planeDepth)
  const shapeMode     = useStore(s => s.shapeMode)
  const shapeThickness = useStore(s => s.shapeThickness)
  const brushSize     = useStore(s => s.brushSize)
  const selection3D   = useStore(s => s.selection3D)
  const is3DEdit      = viewMode === 'preview-only'

  useEffect(() => {
    if (onExport) onExport.current = exportPng
  }, [onExport, exportPng])

  const toolInfo = TOOL_LABELS[activeTool] ?? TOOL_LABELS.pencil

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />

      {/* Minecraft-style Center Crosshair */}
      {flyMode && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30 select-none">
          <div className="relative w-4 h-4">
            <div
              className="absolute top-[7px] left-0 w-4 h-[2px] bg-white"
              style={{
                boxShadow: '0 0 1px 1px rgba(0,0,0,0.85)',
                mixBlendMode: 'difference',
              }}
            />
            <div
              className="absolute top-0 left-[7px] w-[2px] h-4 bg-white"
              style={{
                boxShadow: '0 0 1px 1px rgba(0,0,0,0.85)',
                mixBlendMode: 'difference',
              }}
            />
          </div>
        </div>
      )}

      {/* Quick Fly Mode Toggle Button */}
      {(is3DEdit || flyMode) && (
        <button
          onClick={toggleFlyMode}
          className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-xl border backdrop-blur-md text-xs font-medium transition-all shadow-lg cursor-pointer ${
            flyMode
              ? 'border-accent bg-accent/25 text-accent ring-1 ring-accent/50'
              : 'border-white/10 bg-black/60 text-white/70 hover:text-white hover:bg-black/80'
          }`}
          title="Toggle Minecraft-style Free Flying Mode (X)"
        >
          <Gamepad2 size={13} className={flyMode ? 'animate-pulse text-accent' : ''} />
          <span>{flyMode ? 'Fly Mode ON' : 'Free Fly'}</span>
          <kbd className="text-[10px] font-mono px-1 py-0.5 rounded bg-white/10">X</kbd>
        </button>
      )}

      {/* Fly Mode Unlocked Click-to-lock Notice */}
      {flyMode && !isPointerLocked && (
        <div
          onClick={requestPointerLock}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/40 bg-black/75 backdrop-blur-md text-xs text-white/90 shadow-xl cursor-pointer hover:bg-black/85 hover:border-accent transition-all animate-bounce"
          style={{ animationDuration: '2.5s' }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>Click canvas to lock mouse look · <kbd className="font-mono text-accent">Esc</kbd> to unlock</span>
        </div>
      )}

      {is3DEdit && isShapeEditing && (
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-2.5 py-1.5 rounded-xl border shadow-2xl backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.72)', borderColor: `${toolInfo.color}66` }}
        >
          <span className="px-1.5 text-xs text-white/60 whitespace-nowrap">Drag the white and yellow handles</span>
          <button
            onClick={cancelShape}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-white/60 hover:text-red-300 hover:bg-red-950/50 transition-colors"
            title="Cancel shape (Esc)"
          >
            <X size={13} /> Cancel
          </button>
          <button
            onClick={confirmShape}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium"
            style={{ background: toolInfo.color, color: '#07120d' }}
            title="Confirm shape (Enter)"
          >
            <Check size={13} /> Confirm
          </button>
        </div>
      )}

      {flyMode ? (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none z-20 whitespace-nowrap">
          {/* Tool badge + current color */}
          <div
            className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono"
            style={{
              background: 'rgba(0,0,0,0.65)',
              border: `1px solid ${toolInfo.color}55`,
              color: toolInfo.color,
              backdropFilter: 'blur(4px)',
            }}
          >
            <span>{toolInfo.label}{['pencil', 'eraser', 'material', 'blend'].includes(activeTool) ? ` · ${brushSize}×${brushSize}` : ''}</span>
            {(activeTool === 'pencil' || activeTool === 'fill') && (
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: currentColor, outline: '1px solid rgba(255,255,255,0.25)' }}
              />
            )}
          </div>
          {/* Minecraft Controls hint */}
          <span
            className="text-xs px-3 py-1 rounded-full font-mono shadow-md backdrop-blur-md"
            style={{ background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.12)', color: '#eee' }}
          >
            {isPointerLocked ? (
              <>
                <kbd className="text-accent font-semibold">WASD / Arrows</kbd> Fly · <kbd className="text-accent font-semibold">Space</kbd> Up · <kbd className="text-accent font-semibold">Shift</kbd> Down · <kbd className="text-accent font-semibold">L-Click</kbd> Draw · <kbd className="text-accent font-semibold">R-Click</kbd> Erase · <kbd className="text-white/60">Esc</kbd> Unlock
              </>
            ) : (
              <>
                <kbd className="text-accent font-semibold">WASD / Arrows</kbd> Fly · <kbd className="text-accent font-semibold">Click</kbd> Draw · Click to lock mouse
              </>
            )}
          </span>
        </div>
      ) : is3DEdit ? (
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
            <span>
              {activeTool === 'fill'
                ? `${toolInfo.label} · ${fillScope === 'all' ? 'all sides' : 'one side'}`
                : `${toolInfo.label}${['pencil', 'eraser', 'material', 'blend'].includes(activeTool)
                  ? ` · ${brushSize}×${brushSize}`
                  : ''}${SHAPE_TOOLS.has(activeTool)
                  ? ` · ${activeTool !== 'line' && shapeMode === 'fill' ? 'Fill' : `Outline ${shapeThickness}`}`
                  : ''}${planeLock && (SHAPE_TOOLS.has(activeTool) || ['pencil', 'eraser', 'material', 'blend'].includes(activeTool))
                    ? ` · ${planeAxis.toUpperCase()} ${planeDepth + 1}`
                    : ''}`}
            </span>
            {(activeTool === 'pencil' || activeTool === 'fill' || SHAPE_TOOLS.has(activeTool)) && (
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: currentColor, outline: '1px solid rgba(255,255,255,0.25)' }}
              />
            )}
          </div>
          {/* Short instruction */}
          <span className="text-xs opacity-40" style={{ color: '#fff', textShadow: '0 1px 3px #000' }}>
            {activeTool === 'fill'
              ? 'Click a block to fill'
              : activeTool === 'select'
                ? selection3D
                  ? 'Transform selection · Enter apply · Esc cancel'
                  : 'Drag between blocks to select a volume'
              : SHAPE_TOOLS.has(activeTool)
                ? isShapeEditing
                  ? 'Edit handles · Enter confirm · Esc cancel'
                  : planeLock ? 'Drag on the locked plane' : 'Drag on a face to draw'
                : planeLock ? 'Drag on the locked plane' : 'Drag to paint'} · Hold <kbd style={{ fontFamily: 'monospace', opacity: 0.7 }}>Space</kbd> to orbit · Scroll to zoom
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
