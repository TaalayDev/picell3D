import { useState } from 'react'
import {
  Pencil, Eraser, PaintBucket,
  Cog, Grid3X3, Square, Columns2, Box,
  Undo2, Redo2, Trash2, Download, Frame,
} from 'lucide-react'
import { useStore } from '../../store/index.js'
import CanvasSizeDialog from './CanvasSizeDialog.jsx'

const TOOLS = [
  { id: 'pencil', Icon: Pencil,      label: 'Pencil (P)', key: 'P' },
  { id: 'eraser', Icon: Eraser,      label: 'Eraser (E)', key: 'E' },
  { id: 'fill',   Icon: PaintBucket, label: 'Fill (F)',   key: 'F' },
]

const VIEW_MODES = [
  { id: 'canvas-only',  Icon: Square,   label: '2D only' },
  { id: 'split',        Icon: Columns2, label: 'Split view' },
  { id: 'preview-only', Icon: Box,      label: '3D only' },
]

export default function Toolbar({ onExport }) {
  const {
    activeTool, setActiveTool,
    pixelSize, setPixelSize,
    toggleGrid, showGrid,
    clearCanvas, undo, redo,
    viewMode, setViewMode,
  } = useStore()
  const [showSizeDialog, setShowSizeDialog] = useState(false)

  return (
    <>
    {showSizeDialog && <CanvasSizeDialog onClose={() => setShowSizeDialog(false)} />}
    <div className="flex items-center gap-1 px-2 py-1 border-b border-border"
      style={{ background: 'var(--color-surfaceAlt)' }}>

      {/* Logo */}
      <div className="flex items-center gap-2 mr-3 pr-3 border-r border-border">
        <Cog size={16} className="text-accent" />
        <span className="font-theme text-text text-sm tracking-wider">Picell3D</span>
      </div>

      {/* Drawing tools */}
      <div className="flex items-center gap-0.5 mr-2 pr-2 border-r border-border">
        {TOOLS.map(tool => (
          <ToolButton
            key={tool.id}
            Icon={tool.Icon}
            label={tool.label}
            active={activeTool === tool.id}
            onClick={() => setActiveTool(tool.id)}
          />
        ))}
      </div>

      {/* Zoom */}
      <div className="flex items-center gap-1 mr-2 pr-2 border-r border-border">
        <button
          className="text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors"
          onClick={() => setPixelSize(pixelSize - 2)}
          title="Zoom out"
        >−</button>
        <span className="text-xs text-text-muted font-mono w-8 text-center">{pixelSize}px</span>
        <button
          className="text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors"
          onClick={() => setPixelSize(pixelSize + 2)}
          title="Zoom in"
        >+</button>
      </div>

      {/* Grid toggle */}
      <button
        className={`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-2 ${
          showGrid
            ? 'border-accent bg-accent/20 text-accent'
            : 'border-border text-text-muted hover:text-text'
        }`}
        onClick={toggleGrid}
        title="Toggle grid (G)"
      >
        <Grid3X3 size={12} /> Grid
      </button>

      {/* View mode */}
      <div className="flex items-center gap-0.5 mr-2 pr-2 border-r border-border">
        {VIEW_MODES.map(({ id, Icon, label }) => (
          <button
            key={id}
            className={`w-8 h-8 rounded flex items-center justify-center border transition-colors ${
              viewMode === id
                ? 'border-accent bg-accent/20 text-accent'
                : 'border-border text-text-muted hover:text-text'
            }`}
            onClick={() => setViewMode(id)}
            title={label}
          >
            <Icon size={14} />
          </button>
        ))}
      </div>

      {/* Canvas size */}
      <button
        className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2"
        onClick={() => setShowSizeDialog(true)}
        title="Canvas size"
      >
        <Frame size={12} />
        <span>Size</span>
      </button>

      {/* Actions */}
      <div className="flex items-center gap-0.5 mr-auto">
        <ActionButton Icon={Undo2}  label="Undo (Ctrl+Z)" onClick={undo} />
        <ActionButton Icon={Redo2}  label="Redo (Ctrl+Y)" onClick={redo} />
        <ActionButton Icon={Trash2} label="Clear canvas"  onClick={clearCanvas} danger />
      </div>

      {/* Export */}
      <button
        className="btn-brass ml-auto flex items-center gap-1.5"
        onClick={onExport}
        title="Export as PNG"
      >
        <Download size={14} />
        <span>Export PNG</span>
      </button>
    </div>
    </>
  )
}

function ToolButton({ Icon, label, active, onClick }) {
  return (
    <button
      className={`w-8 h-8 rounded flex items-center justify-center transition-all border ${
        active
          ? 'border-accent bg-accent/20 text-accent shadow-glow-accent'
          : 'border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt'
      }`}
      title={label}
      onClick={onClick}
    >
      <Icon size={16} />
    </button>
  )
}

function ActionButton({ Icon, label, onClick, danger }) {
  return (
    <button
      className={`w-8 h-8 rounded flex items-center justify-center border border-transparent transition-colors ${
        danger
          ? 'text-text-muted hover:border-red-900 hover:bg-red-950 hover:text-red-400'
          : 'text-text-muted hover:text-text hover:bg-surface-alt hover:border-border'
      }`}
      title={label}
      onClick={onClick}
    >
      <Icon size={16} />
    </button>
  )
}
