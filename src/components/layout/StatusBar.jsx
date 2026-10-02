import { useStore } from '../../store/index.js'
import ThemeSelector from './ThemeSelector.jsx'

export default function StatusBar() {
  const {
    canvasWidth, canvasHeight, depthDimension, activeTool, activeView,
    paintDepthStart, paintDepthEnd, paintDirection,
    editBoundsEnabled, editBounds, pencilMode, eraserMode, throughMode, operationLayerScope,
  } = useStore()

  const shortcuts = ['P: Pencil', 'E: Eraser', 'F: Fill', 'G: Grid', 'Ctrl+Z: Undo']

  return (
    <div role="status" aria-live="polite" aria-atomic="false" className="flex items-center justify-between px-3 py-0.5 border-t border-border text-xs text-text-muted"
      style={{ background: 'var(--color-surface)' }}>
      <div className="flex items-center gap-3">
        <span className="font-mono">{canvasWidth}×{canvasHeight}×{depthDimension}</span>
        <span className="capitalize">{activeTool}</span>
        {(activeTool === 'pencil' || activeTool === 'blend') && (
          <span className="text-accent">
            {pencilMode === 'surface' ? 'add on top' : pencilMode === 'through' ? 'replace through' : 'replace visible'}
          </span>
        )}
        {activeTool === 'eraser' && <span className="text-accent">{eraserMode === 'through' ? 'whole ray' : 'visible only'}</span>}
        {(
          ((activeTool === 'pencil' || activeTool === 'blend') && pencilMode === 'through')
          || (activeTool === 'eraser' && eraserMode === 'through')
        ) && <span className="text-accent opacity-80">{throughMode.replace('-', ' ')}</span>}
        {['pencil', 'eraser', 'blend', 'material', 'fill'].includes(activeTool) && (
          <span className="opacity-70">layer: {operationLayerScope.replace('-', ' ')}</span>
        )}
        <span className="text-accent capitalize">{activeView}</span>
        <span>depth: {paintDepthStart}–{paintDepthEnd} {paintDirection}</span>
        {editBoundsEnabled && (
          <span className="text-accent font-mono">
            bounds: {editBounds.maxX - editBounds.minX + 1}×{editBounds.maxY - editBounds.minY + 1}×{editBounds.maxZ - editBounds.minZ + 1}
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
