import { useMemo } from 'react'
import {
  Box, FlipHorizontal, FlipVertical, Copy, Scissors, Clipboard,
  BoxSelect, LassoSelect, RotateCw, RotateCcw, Crosshair, Layers, Trash2,
} from 'lucide-react'
import { useStore, getCompositedVoxels, getViewDepthSize, OPPOSITE_VIEW } from '../../store/index.js'

const DEPTH_PRESETS = [4, 8, 16, 24, 32, 48, 64]

export default function VoxelOptionsPanel() {
  const {
    canvasWidth, canvasHeight, depthDimension, setDepthDimension,
    paintDepthStart, paintDepthEnd, paintDirection,
    setPaintDepthStart, setPaintDepthEnd, setPaintDirection, layers, activeView,
    sideDrawMode, setSideDrawMode,
    pencilMode, setPencilMode, eraserMode, setEraserMode,
    throughMode, setThroughMode,
    operationLayerScope, setOperationLayerScope,
    fillScope, setFillScope, viewMode,
    planeLock, setPlaneLock, planeAxis, setPlaneAxis, planeDepth, setPlaneDepth,
    shapeMode, setShapeMode, shapeThickness, setShapeThickness,
    primitiveDepth, setPrimitiveDepth,
    brushSize, setBrushSize,
    symmetryX, symmetryY, symmetryOpposite,
    setSymmetryX, setSymmetryY, setSymmetryOpposite,
    activeTool,
    editBoundsEnabled, editBounds, editBoundsAxisLocks,
    setEditBoundsEnabled, setEditBounds, resetEditBounds, setEditBoundsAxisLock,
    fitEditBoundsToModel, fitEditBoundsToSelection, showLockedVoxels, setShowLockedVoxels, pushUndo,
    selection3D, moveSelection3D, rotateSelection3D, flipSelection3D,
    applySelection3D, clearSelection3D, deleteSelection3D,
    setSelection3DFromEditBounds, duplicateSelection3D, moveSelection3DToNewLayer,
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
  const volumeTools = ['box3d', 'sphere3d', 'cylinder3d']
  const isVolumeTool = volumeTools.includes(activeTool)
  const planeToolActive = ['pencil', 'eraser', 'material', 'blend', 'rect', 'circle', 'ellipse', 'line', ...volumeTools].includes(activeTool)
  const isShapeTool = ['rect', 'circle', 'ellipse', 'line', ...volumeTools].includes(activeTool)
  const isBrushTool = ['pencil', 'eraser', 'material', 'blend'].includes(activeTool)
  const effectiveShapeMode = activeTool === 'line' ? 'outline' : shapeMode
  const planeSize = planeAxis === 'x'
    ? canvasWidth
    : planeAxis === 'y' ? canvasHeight : depthDimension
  const visiblePlaneDepth = Math.max(0, Math.min(planeSize - 1, planeDepth))
  const maxPaintDepth = getViewDepthSize(activeView, canvasWidth, canvasHeight, depthDimension)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border">
        <Box size={12} className="text-accent" />
        <span className="text-xs uppercase tracking-wide text-text-muted">Voxel Options</span>
      </div>

      <div className="flex flex-col gap-4 p-3">

        {/* ── Shared 3D edit bounds ──────────────────────────────────────── */}
        {(activeTool === 'bounds' || editBoundsEnabled) && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-text-muted uppercase tracking-wide">
                <BoxSelect size={12} /> Edit Bounds
              </div>
              <SymToggle label="Active" value={editBoundsEnabled} onChange={setEditBoundsEnabled} />
            </div>
            <p className="text-xs text-text-muted leading-tight">
              Drag edges or corners to resize; drag inside to move. Hold Alt to resize from center or Shift to preserve proportions.
            </p>
            <button
              onPointerDown={() => setShowLockedVoxels(true)}
              onPointerUp={() => setShowLockedVoxels(false)}
              onPointerCancel={() => setShowLockedVoxels(false)}
              onPointerLeave={() => setShowLockedVoxels(false)}
              className={`rounded border py-1 text-[10px] transition-colors ${
                showLockedVoxels
                  ? 'border-orange-400 bg-orange-400/20 text-orange-300'
                  : 'border-border text-text-muted hover:border-orange-400/60 hover:text-text'
              }`}
            >
              Hold to show locked voxels
            </button>
            <div className="flex items-center gap-1">
              <span className="mr-auto text-[10px] uppercase tracking-wide text-text-muted">Axis locks</span>
              {['x', 'y', 'z'].map(axis => (
                <button
                  type="button"
                  key={axis}
                  onClick={() => setEditBoundsAxisLock(axis, !editBoundsAxisLocks[axis])}
                  className={`h-6 min-w-6 rounded border px-1.5 text-[10px] font-mono uppercase transition-colors ${
                    editBoundsAxisLocks[axis]
                      ? 'border-accent bg-accent/15 text-accent'
                      : 'border-border text-text-muted hover:text-text'
                  }`}
                  aria-pressed={editBoundsAxisLocks[axis]}
                  title={`Lock ${axis.toUpperCase()} bounds`}
                >
                  {axis}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-[18px_1fr_1fr] gap-1 items-center text-xs">
              {[
                ['X', 'x', 'minX', 'maxX', canvasWidth],
                ['Y', 'y', 'minY', 'maxY', canvasHeight],
                ['Z', 'z', 'minZ', 'maxZ', depthDimension],
              ].map(([axis, axisKey, minKey, maxKey, size]) => (
                <div key={axis} className="contents">
                  <span className="font-mono text-accent">{axis}</span>
                  <input
                    type="number" min={1} max={size} value={editBounds[minKey] + 1}
                    disabled={editBoundsAxisLocks[axisKey]}
                    onFocus={pushUndo}
                    onChange={e => setEditBounds({ ...editBounds, [minKey]: Number(e.target.value) - 1 })}
                    className="w-full min-w-0 rounded border border-border bg-surface-alt px-1 py-1 font-mono text-text disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label={`${axis} minimum`}
                  />
                  <input
                    type="number" min={1} max={size} value={editBounds[maxKey] + 1}
                    disabled={editBoundsAxisLocks[axisKey]}
                    onFocus={pushUndo}
                    onChange={e => setEditBounds({ ...editBounds, [maxKey]: Number(e.target.value) - 1 })}
                    className="w-full min-w-0 rounded border border-border bg-surface-alt px-1 py-1 font-mono text-text disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label={`${axis} maximum`}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-text-muted">
              <span /> <span className="grid grid-cols-2 text-center"><span>Min</span><span>Max</span></span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button onClick={fitEditBoundsToModel} className="py-1 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60 transition-colors">
                Fit to model
              </button>
              <button
                onClick={fitEditBoundsToSelection}
                disabled={!selection3D?.voxels?.length && !selection && !floatingPaste}
                className="py-1 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60 transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              >
                Fit to selection
              </button>
            </div>
            <button
              onClick={setSelection3DFromEditBounds}
              disabled={!editBoundsEnabled}
              className="py-1 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60 transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              title="Select occupied voxels from the active layer inside Edit Bounds"
            >
              Selection from bounds
            </button>
            <button onClick={resetEditBounds} className="py-1 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60 transition-colors">
              Reset to full canvas
            </button>
          </div>
        )}

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
                  type="button"
                  aria-pressed={brushSize === size}
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
              aria-label="Brush size"
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

        {/* ── Brush ray behavior ────────────────────────────────────────── */}
        {(activeTool === 'pencil' || activeTool === 'blend') && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">Drawing Behavior</div>
            <div className="grid grid-cols-1 gap-1">
              {[
                ['surface', 'Add on top', '1 / A', 'Place new voxels just above the visible surface.'],
                ['visible', 'Replace visible', '2 / V', 'Recolor only the nearest visible voxel.'],
                ['through', 'Replace through', '3 / ⇧V', 'Recolor all occupied voxels through to the other side.'],
              ].map(([id, label, shortcut, description]) => (
                <button
                  key={id}
                  onClick={() => setPencilMode(id)}
                  title={description}
                  className={`flex items-center justify-between px-2 py-1.5 rounded border text-xs transition-colors ${
                    pencilMode === id
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  <span>{label}</span>
                  <kbd className="font-mono opacity-70">{shortcut}</kbd>
                </button>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-tight">
              <kbd className="text-text font-mono px-0.5 border border-border rounded">Alt/Option+click</kbd> picks a color; Alt-drag uses the temporary alternate mode.
            </p>
          </div>
        )}

        {activeTool === 'eraser' && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">Erase Behavior</div>
            <div className="grid grid-cols-2 gap-1">
              {[
                ['visible', 'Visible only', '1'],
                ['through', 'Whole ray', '2'],
              ].map(([id, label, shortcut]) => (
                <button
                  key={id}
                  onClick={() => setEraserMode(id)}
                  className={`py-1.5 rounded border text-xs transition-colors ${
                    eraserMode === id
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  <span>{label}</span>
                  <kbd className="ml-1 font-mono opacity-70">{shortcut}</kbd>
                </button>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-tight">
              <kbd className="text-text font-mono px-0.5 border border-border rounded">Shift+E</kbd> toggles this setting. Hold Alt for its temporary alternate.
            </p>
          </div>
        )}

        {(
          ((activeTool === 'pencil' || activeTool === 'blend') && pencilMode === 'through')
          || (activeTool === 'eraser' && eraserMode === 'through')
        ) && (
          <div className="flex flex-col gap-2">
            <div className="text-xs text-text-muted uppercase tracking-wide">Through Variant</div>
            <div className="grid grid-cols-1 gap-1">
              {[
                ['occupied', 'Occupied only', 'Skip gaps and affect every existing voxel to the opposite side.'],
                ['solid', 'Solid column', 'Affect every position in the ray, filling empty positions while painting.'],
                ['contiguous', 'Until first gap', 'Affect the connected run from the visible surface and stop at the first empty position.'],
              ].map(([id, label, description]) => (
                <button
                  key={id}
                  onClick={() => setThroughMode(id)}
                  title={description}
                  className={`px-2 py-1.5 rounded border text-left text-xs transition-colors ${
                    throughMode === id
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

        {['pencil', 'eraser', 'blend', 'material', 'fill'].includes(activeTool) && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-xs text-text-muted uppercase tracking-wide">
              <Layers size={12} /> Layer Scope
            </div>
            <div className="grid grid-cols-1 gap-1">
              {[
                ['active', 'Active layer only', 'Always edit the currently selected layer.'],
                ['all-visible', 'All visible layers', 'Edit every visible layer containing a voxel at the target.'],
                ['topmost', 'Topmost visible voxel', 'Edit only the highest visible layer that owns the target voxel.'],
              ].map(([id, label, description]) => (
                <button
                  key={id}
                  onClick={() => setOperationLayerScope(id)}
                  title={description}
                  className={`px-2 py-1.5 rounded border text-left text-xs transition-colors ${
                    operationLayerScope === id
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-tight">
              New voxels in empty space are always created on the active layer.
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
                aria-label="Shape outline thickness"
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
            {isVolumeTool && activeTool !== 'sphere3d' && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-text-muted">
                    {activeTool === 'cylinder3d' ? 'Height' : 'Depth'}
                  </label>
                  <span className="text-xs font-mono text-accent">{primitiveDepth}</span>
                </div>
                <input
                  aria-label={activeTool === 'cylinder3d' ? 'Cylinder height' : 'Primitive depth'}
                  type="range"
                  min={1}
                  max={Math.min(64, Math.max(canvasWidth, canvasHeight, depthDimension))}
                  value={primitiveDepth}
                  onChange={e => setPrimitiveDepth(parseInt(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
              </div>
            )}
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
                  aria-label={`${planeAxis.toUpperCase()} drawing plane depth`}
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

        {/* ── 3D selection and transforms ─────────────────────────────────── */}
        {activeTool === 'select' && viewMode === 'preview-only' && (
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-xs text-text-muted uppercase tracking-wide">3D Selection</div>
              <p className="text-xs text-text-muted mt-1 leading-tight">
                Drag between two blocks to select occupied voxels on the active layer.
              </p>
            </div>

            <div className="flex justify-between text-xs text-text-muted">
              <span>Selected voxels</span>
              <span className="font-mono text-accent">{selection3D?.voxels?.length ?? 0}</span>
            </div>

            <div className={!selection3D ? 'opacity-40 pointer-events-none' : ''}>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Move</div>
              <div className="grid grid-cols-2 gap-1">
                {[
                  ['X−', -1, 0, 0], ['X+', 1, 0, 0],
                  ['Y−', 0, -1, 0], ['Y+', 0, 1, 0],
                  ['Z−', 0, 0, -1], ['Z+', 0, 0, 1],
                ].map(([label, dx, dy, dz]) => (
                  <button
                    key={label}
                    onClick={() => moveSelection3D(dx, dy, dz)}
                    className="py-1 rounded border border-border text-xs font-mono text-text-muted hover:text-text hover:border-accent/60 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className={!selection3D ? 'opacity-40 pointer-events-none' : ''}>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Rotate 90°</div>
              <div className="grid grid-cols-3 gap-1">
                {['x', 'y', 'z'].map(axis => (
                  <button
                    key={axis}
                    onClick={() => rotateSelection3D(axis, 1)}
                    className="flex items-center justify-center gap-1 py-1 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60 transition-colors"
                  >
                    <RotateCw size={12} /> {axis.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className={!selection3D ? 'opacity-40 pointer-events-none' : ''}>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Flip</div>
              <div className="grid grid-cols-3 gap-1">
                {['x', 'y', 'z'].map(axis => (
                  <button
                    key={axis}
                    onClick={() => flipSelection3D(axis)}
                    className="py-1 rounded border border-border text-xs font-mono text-text-muted hover:text-text hover:border-accent/60 transition-colors"
                  >
                    {axis.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {selection3D && (
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={applySelection3D}
                  className="py-1.5 rounded text-xs font-medium bg-accent text-surface"
                  title="Apply transform (Enter)"
                >
                  Apply ↵
                </button>
                <button
                  onClick={clearSelection3D}
                  className="py-1.5 rounded border border-border text-xs text-text-muted hover:text-text"
                  title="Cancel transform (Esc)"
                >
                  Cancel Esc
                </button>
                <button
                  onClick={duplicateSelection3D}
                  className="flex items-center justify-center gap-1 py-1.5 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60"
                  title="Copy the transformed selection while keeping its original voxels"
                >
                  <Copy size={13} /> Duplicate
                </button>
                <button
                  onClick={moveSelection3DToNewLayer}
                  className="flex items-center justify-center gap-1 py-1.5 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60"
                  title="Move selected voxels into a separate layer"
                >
                  <Layers size={13} /> New layer
                </button>
                <button
                  onClick={fitEditBoundsToSelection}
                  className="col-span-2 py-1.5 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60"
                  title="Set Edit Bounds to the current selection volume"
                >
                  Bounds from selection
                </button>
                <button
                  onClick={deleteSelection3D}
                  className="col-span-2 flex items-center justify-center gap-1 py-1.5 rounded border border-border text-xs text-text-muted hover:text-red-400 hover:border-red-900 transition-colors"
                  title="Delete selected voxels"
                >
                  <Trash2 size={13} /> Delete selection
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── 2D selection tool options ────────────────────────────────────── */}
        {activeTool === 'select' && viewMode !== 'preview-only' && (
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
            {(selection || floatingPaste) && (
              <button
                onClick={fitEditBoundsToSelection}
                className="py-1.5 rounded border border-border text-xs text-text-muted hover:text-text hover:border-accent/60 transition-colors"
                title="Create Edit Bounds from the current selection volume"
              >
                Bounds from selection
              </button>
            )}
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
              aria-label="Canvas depth"
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

        {/* Paint depth range */}
        {activeTool !== 'eyedropper' && !isVolumeTool && !(activeTool === 'select' && viewMode === 'preview-only') && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-xs text-text-muted uppercase tracking-wide">Depth Range</label>
              <span className="text-xs font-mono text-accent">{paintDepthStart}–{paintDepthEnd}</span>
            </div>
            {[
              ['Start depth', paintDepthStart, setPaintDepthStart],
              ['End depth', paintDepthEnd, setPaintDepthEnd],
            ].map(([label, value, setter]) => (
              <label key={label} className="grid grid-cols-[62px_1fr_24px] items-center gap-2 text-[10px] text-text-muted">
                <span>{label}</span>
                <input
                  type="range" min={1} max={maxPaintDepth} value={value}
                  onChange={e => setter(parseInt(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
                <span className="text-right font-mono text-text">{value}</span>
              </label>
            ))}
            <div>
              <div className="mb-1 text-[10px] uppercase tracking-wide text-text-muted">Direction</div>
              <div className="grid grid-cols-3 gap-1">
                {[
                  ['inward', 'Inward'],
                  ['outward', 'Outward'],
                  ['both', 'Both'],
                ].map(([id, label]) => (
                  <button
                    type="button"
                    aria-pressed={paintDirection === id}
                    key={id}
                    onClick={() => setPaintDirection(id)}
                    className={`rounded border py-1 text-[10px] transition-colors ${
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
            <p className="text-[10px] leading-tight text-text-muted">
              Inward measures from the active view face; Outward mirrors the range from the opposite face.
            </p>
          </div>
        )}

        {/* Legacy side behavior for fill/material tools. */}
        {!isFront && ['fill', 'material'].includes(activeTool) && (
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
              Choose whether side operations affect existing voxels or draw from the surface.
            </p>
          </div>
        )}

        {/* Symmetry */}
        {activeTool !== 'eyedropper' && !isVolumeTool && !(activeTool === 'select' && viewMode === 'preview-only') && <div>
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
        </div>}

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
        aria-label={label}
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
