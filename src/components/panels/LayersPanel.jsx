import { useState } from 'react'
import { Eye, EyeOff, Plus, Trash2, ChevronUp, ChevronDown, Layers, Copy, Merge } from 'lucide-react'
import { useStore } from '../../store/index.js'

export default function LayersPanel() {
  const {
    layers, activeLayerId,
    addLayer, deleteLayer, setActiveLayer,
    toggleLayerVisible, renameLayer, moveLayerUp, moveLayerDown,
    duplicateLayer, setLayerOpacity, mergeLayers,
  } = useStore()

  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName]   = useState('')

  const displayLayers = [...layers].reverse()

  function startRename(layer, e) {
    e.stopPropagation()
    setEditingId(layer.id)
    setEditName(layer.name)
  }

  function commitRename(id) {
    renameLayer(id, editName)
    setEditingId(null)
  }

  const canMerge = layers.filter(l => l.visible).length > 1

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-1.5 border-b border-border flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <Layers size={12} className="text-accent" />
          <span className="text-xs uppercase tracking-wide text-text-muted">Layers</span>
        </div>
        <div className="flex items-center gap-0.5">
          {canMerge && (
            <button
              onClick={mergeLayers}
              title="Merge visible layers"
              className="flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Merge size={10} />
            </button>
          )}
          <button
            onClick={() => addLayer()}
            title="Add layer"
            className="flex items-center justify-center w-5 h-5 rounded border border-border text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            <Plus size={11} />
          </button>
        </div>
      </div>

      {/* Layer list */}
      <div className="flex flex-col overflow-y-auto" style={{ maxHeight: 220 }}>
        {displayLayers.map((layer) => {
          const origIdx   = layers.findIndex(l => l.id === layer.id)
          const isActive  = layer.id === activeLayerId
          const isTop     = origIdx === layers.length - 1
          const isBottom  = origIdx === 0
          const canDelete = layers.length > 1
          const opacity   = layer.opacity ?? 1

          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className="flex flex-col cursor-pointer select-none transition-colors"
              style={{
                borderLeft: `2px solid ${isActive ? 'var(--color-accent)' : 'transparent'}`,
                background: isActive
                  ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)'
                  : 'transparent',
              }}
            >
              {/* Main layer row */}
              <div className="flex items-center gap-1 px-1.5 py-1">
                <button
                  onClick={e => { e.stopPropagation(); toggleLayerVisible(layer.id) }}
                  title={layer.visible ? 'Hide layer' : 'Show layer'}
                  className="flex-shrink-0 text-text-muted hover:text-text transition-colors"
                >
                  {layer.visible
                    ? <Eye size={11} />
                    : <EyeOff size={11} className="opacity-40" />}
                </button>

                {editingId === layer.id ? (
                  <input
                    autoFocus
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    onBlur={() => commitRename(layer.id)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') commitRename(layer.id)
                      if (e.key === 'Escape') setEditingId(null)
                      e.stopPropagation()
                    }}
                    onClick={e => e.stopPropagation()}
                    className="flex-1 min-w-0 text-xs bg-transparent outline-none border-b"
                    style={{ borderColor: 'var(--color-accent)', color: 'var(--color-text)' }}
                  />
                ) : (
                  <span
                    className="flex-1 min-w-0 text-xs truncate"
                    style={{
                      color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                      opacity: layer.visible ? 1 : 0.45,
                    }}
                    onDoubleClick={e => startRename(layer, e)}
                    title="Double-click to rename"
                  >
                    {layer.name}
                  </span>
                )}

                <button onClick={e => { e.stopPropagation(); moveLayerUp(layer.id) }}
                  disabled={isTop} title="Move up"
                  className="flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20">
                  <ChevronUp size={10} />
                </button>
                <button onClick={e => { e.stopPropagation(); moveLayerDown(layer.id) }}
                  disabled={isBottom} title="Move down"
                  className="flex-shrink-0 text-text-muted hover:text-text transition-colors disabled:opacity-20">
                  <ChevronDown size={10} />
                </button>
                <button onClick={e => { e.stopPropagation(); duplicateLayer(layer.id) }}
                  title="Duplicate layer"
                  className="flex-shrink-0 text-text-muted hover:text-text transition-colors">
                  <Copy size={10} />
                </button>
                <button onClick={e => { e.stopPropagation(); deleteLayer(layer.id) }}
                  disabled={!canDelete} title="Delete layer"
                  className="flex-shrink-0 text-text-muted hover:text-red-400 transition-colors disabled:opacity-20">
                  <Trash2 size={10} />
                </button>
              </div>

              {/* Opacity slider — shown for active layer */}
              {isActive && (
                <div className="flex items-center gap-1.5 px-2 pb-1.5" onClick={e => e.stopPropagation()}>
                  <span className="text-text-muted flex-shrink-0" style={{ fontSize: 9 }}>
                    {Math.round(opacity * 100)}%
                  </span>
                  <input
                    type="range" min={0} max={1} step={0.01} value={opacity}
                    onChange={e => setLayerOpacity(layer.id, parseFloat(e.target.value))}
                    className="flex-1 h-1.5 accent-accent cursor-pointer"
                    title={`Opacity: ${Math.round(opacity * 100)}%`}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
