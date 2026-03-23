import { useStore } from '../../store/index.js'
import ThemeSelector from './ThemeSelector.jsx'

export default function StatusBar() {
  const { canvasWidth, canvasHeight, depthDimension, activeTool, activeView, paintDepth } = useStore()

  const shortcuts = ['P: Pencil', 'E: Eraser', 'F: Fill', 'G: Grid', 'Ctrl+Z: Undo']

  return (
    <div className="flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted"
      style={{ background: 'var(--color-surface)' }}>
      <div className="flex items-center gap-3">
        <span className="font-mono">{canvasWidth}×{canvasHeight}×{depthDimension}</span>
        <span className="capitalize">{activeTool}</span>
        <span className="text-accent capitalize">{activeView}</span>
        <span>depth: {paintDepth}</span>
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
