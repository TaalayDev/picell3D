import { useMemo } from 'react'
import { Box } from 'lucide-react'
import { useStore, getCompositedVoxels } from '../../store/index.js'

const DEPTH_PRESETS = [4, 8, 16, 24, 32, 48, 64]

const DIRECTIONS = [
  { id: 'front', label: '← Front' },
  { id: 'both',  label: '↔ Both'  },
  { id: 'back',  label: 'Back →'  },
]

export default function VoxelOptionsPanel() {
  const {
    canvasWidth, canvasHeight, depthDimension, setDepthDimension,
    paintDepth, setPaintDepth, paintDirection, setPaintDirection, layers, activeView,
  } = useStore()

  const voxelCount = useMemo(() => {
    const composited = getCompositedVoxels(layers, canvasWidth, canvasHeight, depthDimension)
    let count = 0
    for (const plane of composited)
      for (const row of plane)
        for (const v of row)
          if (v !== 'transparent') count++
    return count
  }, [layers, canvasWidth, canvasHeight, depthDimension])

  const isFrontBack = activeView === 'front' || activeView === 'back'

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border">
        <Box size={12} className="text-accent" />
        <span className="text-xs uppercase tracking-wide text-text-muted">Voxel Options</span>
      </div>

      <div className="flex flex-col gap-4 p-3">

        {/* Depth dimension (hidden for front/back which use canvas size) */}
        {!isFrontBack && (
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs text-text-muted uppercase tracking-wide">Depth</label>
              <span className="text-xs font-mono text-accent">{depthDimension}px</span>
            </div>
            <div className="grid grid-cols-4 gap-1 mb-1.5">
              {DEPTH_PRESETS.map(d => (
                <button
                  key={d}
                  onClick={() => setDepthDimension(d)}
                  className={`text-xs py-0.5 rounded border transition-colors ${
                    depthDimension === d
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <input
              type="range"
              min={4}
              max={128}
              value={depthDimension}
              onChange={e => setDepthDimension(parseInt(e.target.value))}
              className="w-full cursor-pointer"
              style={{ accentColor: 'var(--color-accent)' }}
            />
          </div>
        )}

        {/* Paint depth */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs text-text-muted uppercase tracking-wide">Paint Depth</label>
            <span className="text-xs font-mono text-accent">{paintDepth}</span>
          </div>
          <input
            type="range"
            min={1}
            max={isFrontBack ? Math.floor(depthDimension / 2) : depthDimension}
            value={paintDepth}
            onChange={e => setPaintDepth(parseInt(e.target.value))}
            className="w-full cursor-pointer"
            style={{ accentColor: 'var(--color-accent)' }}
          />
          <div className="flex justify-between text-xs text-text-muted mt-0.5">
            <span>1</span>
            <span>{isFrontBack ? Math.floor(depthDimension / 2) : depthDimension}</span>
          </div>
        </div>

        {/* Paint direction — front/back views only */}
        {isFrontBack && (
          <div>
            <div className="mb-1.5">
              <label className="text-xs text-text-muted uppercase tracking-wide">Direction</label>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {DIRECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setPaintDirection(id)}
                  className={`text-xs py-0.5 rounded border transition-colors ${
                    paintDirection === id
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="flex flex-col gap-1.5 text-xs">
          <div className="flex justify-between text-text-muted">
            <span>Grid size</span>
            <span className="font-mono text-text">{canvasWidth}×{canvasHeight}×{depthDimension}</span>
          </div>
          <div className="flex justify-between text-text-muted">
            <span>Voxels</span>
            <span className="font-mono text-text">{voxelCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-text-muted">
            <span>Active view</span>
            <span className="font-mono text-accent capitalize">{activeView}</span>
          </div>
        </div>

        {/* View size hint */}
        <div className="text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5"
          style={{ background: 'color-mix(in srgb, var(--color-background) 60%, transparent)' }}>
          {isFrontBack
            ? <>Canvas: <span className="text-text font-mono">{canvasWidth}×{canvasHeight}</span></>
            : <>Canvas: <span className="text-text font-mono">{
                activeView === 'top' || activeView === 'bottom'
                  ? `${canvasWidth}×${depthDimension}`
                  : `${depthDimension}×${canvasHeight}`
              }</span></>
          }
        </div>
      </div>
    </div>
  )
}
