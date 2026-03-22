import { Eye, EyeOff, CircleDot, Circle, ArrowRight, ArrowLeft, ArrowLeftRight, X, Plus, Eraser } from 'lucide-react'
import { useStore } from '../../store/index.js'

export default function DepthLayersPanel() {
  const {
    selections, activeSelectionId,
    setActiveSelection, toggleSelectionActive,
    removeSelection, addSelection, updateSelection,
    clearSelectionPixels,
    showDepthOverlay, toggleDepthOverlay,
  } = useStore()

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-1.5 border-b border-border">
        <span className="text-xs uppercase tracking-wide text-text-muted">Depth Layers</span>
        <div className="flex gap-1">
          <button
            className={`flex items-center gap-1 text-xs px-1.5 py-0.5 rounded transition-colors ${
              showDepthOverlay
                ? 'bg-accent text-black'
                : 'text-text-muted hover:text-text border border-border'
            }`}
            onClick={toggleDepthOverlay}
            title="Toggle depth overlay (H)"
          >
            {showDepthOverlay ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>{showDepthOverlay ? 'On' : 'Off'}</span>
          </button>
          <button
            className="flex items-center justify-center w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors"
            onClick={() => addSelection([])}
            title="New depth layer"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Layer list */}
      <div className="flex-1 overflow-y-auto">
        {selections.length === 0 && (
          <div className="text-center text-text-muted text-xs p-4 leading-relaxed">
            No depth layers yet.<br />
            Select the <strong className="text-text">Depth</strong> tool<br />
            and paint pixels to extrude.
          </div>
        )}
        {[...selections].reverse().map(sel => (
          <LayerRow
            key={sel.id}
            sel={sel}
            isActive={sel.id === activeSelectionId}
            onSelect={() => setActiveSelection(sel.id)}
            onToggle={() => toggleSelectionActive(sel.id)}
            onDelete={() => removeSelection(sel.id)}
            onClear={() => clearSelectionPixels(sel.id)}
            onRename={(name) => updateSelection(sel.id, { name })}
          />
        ))}
      </div>
    </div>
  )
}

function DirectionIcon({ direction }) {
  if (direction === 'both')  return <ArrowLeftRight size={11} />
  if (direction === 'front') return <ArrowRight size={11} />
  return <ArrowLeft size={11} />
}

function LayerRow({ sel, isActive, onSelect, onToggle, onDelete, onClear, onRename }) {
  return (
    <div
      className={`group flex items-center gap-1.5 px-2 py-1.5 cursor-pointer border-b border-border/50 transition-colors ${
        isActive
          ? 'bg-surface-alt border-l-2 border-l-accent'
          : 'hover:bg-surface-alt/50'
      }`}
      onClick={onSelect}
      style={{ borderLeftColor: isActive ? undefined : 'transparent' }}
    >
      {/* Color swatch */}
      <div
        className="w-3 h-3 rounded-sm flex-shrink-0 border border-black/30"
        style={{ background: sel.color + '99' }}
      />

      {/* Active toggle */}
      <button
        className={`flex-shrink-0 w-4 h-4 flex items-center justify-center rounded transition-opacity ${sel.active ? 'text-accent' : 'text-text-muted opacity-40'}`}
        onClick={e => { e.stopPropagation(); onToggle() }}
        title={sel.active ? 'Disable layer' : 'Enable layer'}
      >
        {sel.active ? <CircleDot size={12} /> : <Circle size={12} />}
      </button>

      {/* Name */}
      <input
        className="flex-1 min-w-0 bg-transparent text-xs text-text border-none outline-none truncate"
        value={sel.name}
        onChange={e => onRename(e.target.value)}
        onClick={e => e.stopPropagation()}
        onFocus={onSelect}
      />

      {/* Depth badge */}
      <span className="text-xs text-text-muted flex-shrink-0">
        {sel.depth.toFixed(1)}
      </span>

      {/* Direction badge */}
      <span className="flex-shrink-0 text-text-muted opacity-70">
        <DirectionIcon direction={sel.direction} />
      </span>

      {/* Pixel count */}
      <span className="text-xs text-text-muted flex-shrink-0 opacity-50">
        {sel.pixels.length}px
      </span>

      {/* Clear pixels */}
      <button
        className="flex-shrink-0 opacity-0 group-hover:opacity-60 hover:!opacity-100 text-text-muted transition-opacity"
        onClick={e => { e.stopPropagation(); onClear() }}
        title="Clear all pixels from layer"
      >
        <Eraser size={12} />
      </button>

      {/* Delete */}
      <button
        className="flex-shrink-0 opacity-0 group-hover:opacity-60 hover:!opacity-100 text-red-400 transition-opacity"
        onClick={e => { e.stopPropagation(); onDelete() }}
        title="Delete layer"
      >
        <X size={13} />
      </button>
    </div>
  )
}
