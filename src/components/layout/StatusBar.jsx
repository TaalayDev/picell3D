import { useStore } from '../../store/index.js'
import ThemeSelector from './ThemeSelector.jsx'

export default function StatusBar() {
  const { canvasWidth, canvasHeight, activeTool, activeSelectionId, selections } = useStore()
  const activeSel = selections.find(s => s.id === activeSelectionId)

  const shortcuts = [
    'P: Pencil', 'E: Eraser', 'F: Fill', 'D: Depth', 'M: Magic',
    'G: Grid', 'H: Overlay', 'Ctrl+Z: Undo'
  ]

  return (
    <div className="flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted"
      style={{ background: 'var(--color-surface)' }}>
      <div className="flex items-center gap-3">
        <span className="font-mono">{canvasWidth}×{canvasHeight}</span>
        <span className="capitalize">{activeTool.replace('-', ' ')}</span>
        {activeSel && (
          <span className="text-accent">
            Layer: {activeSel.name} · {activeSel.depth.toFixed(1)} · {activeSel.pixels.length}px
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSelector />
        <div className="hidden lg:flex gap-3 opacity-50">
          {shortcuts.map(s => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
