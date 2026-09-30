import { useMemo } from 'react'
import {
  Box, FlipHorizontal, FlipVertical, Copy, Scissors, Clipboard,
  BoxSelect, LassoSelect, RotateCw, RotateCcw, Crosshair, Layers, Trash2,
} from 'lucide-react'
import { useStore, getCompositedVoxels, OPPOSITE_VIEW } from '../../store/index.js'

const DEPTH_PRESETS = [4, 8, 16, 24, 32, 48, 64]

export default function VoxelOptionsPanel() {
  const {
    canvasWidth, canvasHeight, depthDimension, setDepthDimension,
    paintDepth, setPaintDepth, layers, activeView,
    sideDrawMode, setSideDrawMode,
    fillScope, setFillScope, viewMode,
    planeLock, setPlaneLock, planeAxis, setPlaneAxis, planeDepth, setPlaneDepth,
    shapeMode, setShapeMode, shapeThickness, setShapeThickness,
    brushSize, setBrushSize,
    symmetryX, symmetryY, symmetryOpposite,
    setSymmetryX, setSymmetryY, setSymmetryOpposite,
    activeTool,
    selectionMode, setSelectionMode,
    selection, clipboard, floatingPaste, selectionAnchor,
    copySelection, cutSelection, pasteFromClipboard, deleteSelection,
    flipClipboard, commitPaste, cancelPaste,
    rotateSelection, scaleSelection, shiftSelectionDepth, setAnchorPreset, resetSelectionAnchor,
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
  const planeToolActive = ['pencil', 'eraser', 'material', 'blend', 'rect', 'circle', 'ellipse', 'line'].includes(activeTool)
  const isShapeTool = ['rect', 'circle', 'ellipse', 'line'].includes(activeTool)
  const isBrushTool = ['pencil', 'eraser', 'material', 'blend'].includes(activeTool)
  const effectiveShapeMode = activeTool === 'line' ? 'outline' : shapeMode
  const planeSize = planeAxis === 'x'
    ? canvasWidth
    : planeAxis === 'y' ? canvasHeight : depthDimension
  const visiblePlaneDepth = Math.max(0, Math.min(planeSize - 1, planeDepth))

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border">
        <Box size={12} className="text-accent" />
        <span className="text-xs uppercase tracking-wide text-text-muted">Voxel Options</span>
      </div>

      <div className="flex flex-col gap-4 p-3">

        {/* ── Brush size ───────────────────────────────────────────────────── */}
        {isBrushTool && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="text-xs text-text-muted uppercase tracking-wide">Brush Size</div>
              <span className="text-xs font-mono text-accent">{brushSize}×{brushSize}</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[1, 2, 3, 5, 8].map(size => (
                <button
                  key={size}
                  onClick={() => setBrushSize(size)}
                  className={`py-1 rounded border text-xs font-mono transition-colors ${
                    brushSize === size
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <input
              type="range"
              min={1}
              max={8}
              value={brushSize}
              onChange={e => setBrushSize(parseInt(e.target.value))}
              className="w-full cursor-pointer"
              style={{ accentColor: 'var(--color-accent)' }}
            />
            <p className="text-xs text-text-muted leading-tight">
              {viewMode === 'preview-only'
                ? 'The brush expands across the active face or locked plane.'
                : 'The brush paints a square area around the cursor.'}
            </p>
          </div>
        )}

        {/* ── 3D fill options ─────────────────────────────────────────────── */}
        {activeTool === 'fill' && viewMode === 'preview-only' && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">3D Fill Scope</div>
            <div className="grid grid-cols-2 gap-1 p-0.5 rounded border border-border bg-surface-alt/40">
              {[
                ['side', 'One side'],
                ['all', 'All sides'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setFillScope(id)}
                  className={`py-1 rounded text-xs transition-colors ${
                    fillScope === id
                      ? 'bg-accent/20 text-accent font-medium shadow-glow-accent'
                      : 'text-text-muted hover:text-text'
                  }`}
                  title={id === 'side'
                    ? 'Fill only the connected surface on the clicked side'
                    : 'Fill the entire connected volume of the picked color'}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-tight">
              {fillScope === 'side'
                ? 'Recolors the connected flat surface under the clicked face.'
                : 'Recolors every connected block with the picked color.'}
            </p>
          </div>
        )}

        {/* ── Shape style ──────────────────────────────────────────────────── */}
        {isShapeTool && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">Shape Style</div>
            <div className="grid grid-cols-2 gap-1 p-0.5 rounded border border-border bg-surface-alt/40">
              <button
                disabled={activeTool === 'line'}
                onClick={() => setShapeMode('fill')}
                className={`py-1 rounded text-xs transition-colors disabled:opacity-35 disabled:cursor-not-allowed ${
                  effectiveShapeMode === 'fill'
                    ? 'bg-accent/20 text-accent font-medium shadow-glow-accent'
                    : 'text-text-muted hover:text-text'
                }`}
                title={activeTool === 'line' ? 'Fill is not available for lines' : 'Draw a solid filled shape'}
              >
                Fill
              </button>
              <button
                onClick={() => setShapeMode('outline')}
                className={`py-1 rounded text-xs transition-colors ${
                  effectiveShapeMode === 'outline'
                    ? 'bg-accent/20 text-accent font-medium shadow-glow-accent'
                    : 'text-text-muted hover:text-text'
                }`}
                title="Draw only the shape outline"
              >
                Outline
              </button>
            </div>

            <div className={effectiveShapeMode === 'fill' ? 'opacity-45' : ''}>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs text-text-muted">Thickness</label>
                <span className="text-xs font-mono text-accent">{shapeThickness}</span>
              </div>
              <input
                type="range"
                min={1}
                max={8}
                value={shapeThickness}
                disabled={effectiveShapeMode === 'fill'}
                onChange={e => setShapeThickness(parseInt(e.target.value))}
                className="w-full cursor-pointer disabled:cursor-default"
                style={{ accentColor: 'var(--color-accent)' }}
              />
            </div>
            <p className="text-xs text-text-muted leading-tight">
              {activeTool === 'line'
                ? 'Thickness controls the width of the line.'
                : effectiveShapeMode === 'fill'
                  ? 'Fills the entire shape.'
                  : 'Thickness grows inward without changing the outer size.'}
            </p>
          </div>
        )}

        {/* ── 3D drawing plane ────────────────────────────────────────────── */}
        {viewMode === 'preview-only' && planeToolActive && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-text-muted uppercase tracking-wide">
                <Crosshair size={12} /> Drawing Plane
              </div>
              <SymToggle label="Lock" value={planeLock} onChange={setPlaneLock} />
            </div>

            <div className={`flex flex-col gap-2 transition-opacity ${planeLock ? 'opacity-100' : 'opacity-45'}`}>
              <div className="grid grid-cols-3 gap-1 p-0.5 rounded border border-border bg-surface-alt/40">
                {['x', 'y', 'z'].map(axis => (
                  <button
                    key={axis}
                    disabled={!planeLock}
                    onClick={() => setPlaneAxis(axis)}
                    className={`py-1 rounded text-xs font-mono uppercase transition-colors disabled:cursor-default ${
                      planeAxis === axis
                        ? 'bg-accent/20 text-accent font-medium shadow-glow-accent'
                        : 'text-text-muted hover:text-text'
                    }`}
                    title={`Lock drawing to the ${axis.toUpperCase()} axis`}
                  >
                    {axis}
                  </button>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-text-muted">Layer depth</label>
                  <span className="text-xs font-mono text-accent">
                    {planeAxis.toUpperCase()} {visiblePlaneDepth + 1}/{planeSize}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={Math.max(0, planeSize - 1)}
                  value={visiblePlaneDepth}
                  disabled={!planeLock}
                  onChange={e => setPlaneDepth(parseInt(e.target.value))}
                  className="w-full cursor-pointer disabled:cursor-default"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
              </div>
            </div>

            <p className="text-xs text-text-muted leading-tight">
              {planeLock
                ? 'Strokes and shapes are projected onto this layer, including empty space.'
                : 'Enable to draw on a fixed layer instead of the model surface.'}
            </p>
          </div>
        )}

        {/* ── Selection tool options ───────────────────────────────────────── */}
        {activeTool === 'select' && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">Selection</div>

            {/* Selection Mode Switcher */}
            <div className="grid grid-cols-2 gap-1 p-0.5 rounded border border-border bg-surface-alt/40">
              <button
                onClick={() => setSelectionMode('rect')}
                className={`flex items-center justify-center gap-1.5 py-1 rounded text-xs transition-colors ${
                  selectionMode === 'rect'
                    ? 'bg-accent/20 text-accent font-medium shadow-glow-accent'
                    : 'text-text-muted hover:text-text'
                }`}
                title="Rectangle selection mode"
              >
                <BoxSelect size={13} />
                Rect
              </button>
              <button
                onClick={() => setSelectionMode('lasso')}
                className={`flex items-center justify-center gap-1.5 py-1 rounded text-xs transition-colors ${
                  selectionMode === 'lasso'
                    ? 'bg-accent/20 text-accent font-medium shadow-glow-accent'
                    : 'text-text-muted hover:text-text'
                }`}
                title="Lasso selection mode"
              >
                <LassoSelect size={13} />
                Lasso
              </button>
            </div>

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

            {/* Transform Controls (Rotate, Scale, Depth, Anchor) */}
            {(selection || floatingPaste) && (
              <div className="flex flex-col gap-2 pt-1 border-t border-border/40">
                {/* Rotate & Scale */}
                <div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Rotate & Scale</div>
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    <button
                      onClick={() => rotateSelection(-Math.PI / 2)}
                      className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs"
                      title="Rotate 90° CCW"
                    >
                      <RotateCcw size={12} /> -90°
                    </button>
                    <button
                      onClick={() => rotateSelection(Math.PI / 2)}
                      className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs"
                      title="Rotate 90° CW"
                    >
                      <RotateCw size={12} /> +90°
                    </button>
                    <button
                      onClick={() => rotateSelection(Math.PI)}
                      className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs"
                      title="Rotate 180°"
                    >
                      180°
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={() => scaleSelection(0.5, 0.5)}
                      className="flex items-center justify-center py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs font-mono"
                      title="Scale 0.5x"
                    >
                      Scale 0.5×
                    </button>
                    <button
                      onClick={() => scaleSelection(2, 2)}
                      className="flex items-center justify-center py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs font-mono"
                      title="Scale 2x"
                    >
                      Scale 2×
                    </button>
                  </div>
                </div>

                {/* Depth Adjustment */}
                <div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Depth (Z-Axis)</div>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={() => shiftSelectionDepth(-1)}
                      className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs"
                      title="Shift voxels 1 step backward in depth"
                    >
                      <Layers size={12} /> Depth -1
                    </button>
                    <button
                      onClick={() => shiftSelectionDepth(1)}
                      className="flex items-center justify-center gap-1 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent/60 transition-colors text-xs"
                      title="Shift voxels 1 step forward in depth"
                    >
                      <Layers size={12} /> Depth +1
                    </button>
                  </div>
                </div>

                {/* Moveable Anchor (Pivot) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-text-muted uppercase tracking-wider">Pivot Anchor</span>
                    <button
                      onClick={resetSelectionAnchor}
                      className="text-[10px] text-text-muted hover:text-accent transition-colors"
                      title="Reset anchor to center"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-1 max-w-[120px] mx-auto p-1 rounded border border-border bg-surface-alt/40">
                    {[
                      { id: 'nw', label: '↖' },
                      { id: 'n',  label: '↑' },
                      { id: 'ne', label: '↗' },
                      { id: 'w',  label: '←' },
                      { id: 'center', label: '⊕' },
                      { id: 'e',  label: '→' },
                      { id: 'sw', label: '↙' },
                      { id: 's',  label: '↓' },
                      { id: 'se', label: '↘' },
                    ].map(({ id, label }) => (
                      <button
                        key={id}
                        onClick={() => setAnchorPreset(id)}
                        className="w-7 h-7 flex items-center justify-center rounded text-xs text-text-muted hover:text-text hover:bg-surface-alt transition-colors font-mono"
                        title={`Snap anchor to ${id}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
            {(selection || floatingPaste) && (
              <button
                onClick={deleteSelection}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs rounded border border-border text-text-muted hover:text-red-400 hover:border-red-900 hover:bg-red-950/30 transition-colors"
                title="Clear / Delete selection (Delete key)"
              >
                <Trash2 size={13} />
                Clear / Delete
              </button>
            )}
            <div className="text-xs text-text-muted leading-relaxed opacity-60">
              Drag corners to scale · Drag top handle to rotate · Move anchor ⊕ · Enter commit · Esc cancel
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
