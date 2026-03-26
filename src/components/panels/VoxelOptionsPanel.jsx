import { useMemo } from 'react'
import { Box, FlipHorizontal, FlipVertical, Copy, Scissors, Clipboard } from 'lucide-react'
import { useStore, getCompositedVoxels, OPPOSITE_VIEW } from '../../store/index.js'

const DEPTH_PRESETS = [4, 8, 16, 24, 32, 48, 64]

export default function VoxelOptionsPanel() {
  const {
    canvasWidth, canvasHeight, depthDimension, setDepthDimension,
    paintDepth, setPaintDepth, layers, activeView,
    sideDrawMode, setSideDrawMode,
    symmetryX, symmetryY, symmetryOpposite,
    setSymmetryX, setSymmetryY, setSymmetryOpposite,
    activeTool,
    selection, clipboard, floatingPaste,
    copySelection, cutSelection, pasteFromClipboard, deleteSelection,
    flipClipboard, commitPaste, cancelPaste,
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

  const isFront    = activeView === 'front'
  const isFrontBack = activeView === 'front' || activeView === 'back'
  const oppLabel   = OPPOSITE_VIEW[activeView]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border">
        <Box size={12} className="text-accent" />
        <span className="text-xs uppercase tracking-wide text-text-muted">Voxel Options</span>
      </div>

      <div className="flex flex-col gap-4 p-3">

        {/* ── Selection tool options ───────────────────────────────────────── */}
        {activeTool === 'select' && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">Selection</div>
            {/* Actions */}
            <div className="grid grid-cols-3 gap-1">
              <button
                disabled={!selection}
                onClick={copySelection}
                className="flex flex-col items-center gap-0.5 py-1.5 rounded border border-border text-text-muted disabled:opacity-30 hover:enabled:text-text hover:enabled:border-accent/60 transition-colors text-xs"
                title="Copy (Ctrl+C)"
              >
                <Copy size={14} />
                Copy
              </button>
              <button
                disabled={!selection}
                onClick={cutSelection}
                className="flex flex-col items-center gap-0.5 py-1.5 rounded border border-border text-text-muted disabled:opacity-30 hover:enabled:text-text hover:enabled:border-accent/60 transition-colors text-xs"
                title="Cut (Ctrl+X)"
              >
                <Scissors size={14} />
                Cut
              </button>
              <button
                disabled={!clipboard}
                onClick={pasteFromClipboard}
                className="flex flex-col items-center gap-0.5 py-1.5 rounded border border-border text-text-muted disabled:opacity-30 hover:enabled:text-text hover:enabled:border-accent/60 transition-colors text-xs"
                title="Paste (Ctrl+V)"
              >
                <Clipboard size={14} />
                Paste
              </button>
            </div>
            {/* Flip */}
            <div className="grid grid-cols-2 gap-1">
              <button
                disabled={!clipboard && !floatingPaste}
                onClick={() => flipClipboard('h')}
                className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted disabled:opacity-30 hover:enabled:text-text hover:enabled:border-accent/60 transition-colors text-xs"
                title="Flip horizontal"
              >
                <FlipHorizontal size={13} /> Flip H
              </button>
              <button
                disabled={!clipboard && !floatingPaste}
                onClick={() => flipClipboard('v')}
                className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted disabled:opacity-30 hover:enabled:text-text hover:enabled:border-accent/60 transition-colors text-xs"
                title="Flip vertical"
              >
                <FlipVertical size={13} /> Flip V
              </button>
            </div>
            {/* Commit / cancel floating paste */}
            {floatingPaste && (
              <div className="flex gap-1">
                <button
                  onClick={commitPaste}
                  className="flex-1 py-1 text-xs rounded border text-center transition-colors"
                  style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)', background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
                  title="Commit paste (Enter)"
                >
                  Commit ↵
                </button>
                <button
                  onClick={cancelPaste}
                  className="flex-1 py-1 text-xs rounded border border-border text-text-muted hover:text-text hover:border-accent/50 transition-colors text-center"
                  title="Cancel paste (Esc)"
                >
                  Cancel
                </button>
              </div>
            )}
            {selection && (
              <button
                onClick={deleteSelection}
                className="w-full py-1 text-xs rounded border border-border text-text-muted hover:text-red-400 hover:border-red-900 transition-colors"
                title="Delete selection (Delete)"
              >
                Delete
              </button>
            )}
            <div className="text-xs text-text-muted leading-relaxed opacity-60">
              Drag inside selection to move · Enter to commit paste · Esc to cancel
            </div>
          </div>
        )}

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
            max={isFrontBack ? Math.ceil(depthDimension / 2) : depthDimension}
            value={paintDepth}
            onChange={e => setPaintDepth(parseInt(e.target.value))}
            className="w-full cursor-pointer"
            style={{ accentColor: 'var(--color-accent)' }}
          />
          <div className="flex justify-between text-xs text-text-muted mt-0.5">
            <span>1</span>
            <span>{isFrontBack ? Math.ceil(depthDimension / 2) : depthDimension}</span>
          </div>
        </div>

        {/* Draw / Edit mode — all views except front */}
        {!isFront && (
          <div>
            <div className="mb-1.5">
              <label className="text-xs text-text-muted uppercase tracking-wide">Side Mode</label>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[['edit', 'Edit'], ['draw', 'Draw']].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setSideDrawMode(id)}
                  className={`text-xs py-1 rounded border transition-colors ${
                    sideDrawMode === id
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-xs text-text-muted mt-1 leading-tight">
              Hold <kbd className="text-text font-mono px-0.5 border border-border rounded">Alt</kbd> to temporarily use the other mode.<br />
              Hold <kbd className="text-text font-mono px-0.5 border border-border rounded">Shift</kbd> + Eraser to erase full depth.
            </p>
          </div>
        )}

        {/* Symmetry */}
        <div>
          <div className="mb-1.5">
            <label className="text-xs text-text-muted uppercase tracking-wide">Symmetry</label>
          </div>
          <div className="flex flex-col gap-1.5">
            <SymToggle label="X Axis" value={symmetryX} onChange={setSymmetryX} />
            <SymToggle label="Y Axis" value={symmetryY} onChange={setSymmetryY} />
            <SymToggle
              label={`Opp. side (${oppLabel})`}
              value={symmetryOpposite}
              onChange={setSymmetryOpposite}
            />
          </div>
        </div>

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

function SymToggle({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-text-muted">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 transition-colors focus:outline-none ${
          value ? 'border-accent bg-accent/30' : 'border-border bg-surface-alt'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-3 w-3 rounded-full shadow transition-transform ${
            value ? 'translate-x-4 bg-accent' : 'translate-x-0 bg-text-muted'
          }`}
        />
      </button>
    </div>
  )
}
