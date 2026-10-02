import { useState, useRef, useEffect } from 'react'
import {
  Pencil, Eraser, PaintBucket, Sparkles,
  Grid3X3, Square, Columns2, Box,
  Undo2, Redo2, Trash2, Download, Frame, ImagePlus, Settings2, Aperture,
  RectangleHorizontal, Circle, Ellipse, Minus,
  BoxSelect, LassoSelect, Droplets, HelpCircle,
  Save, FolderOpen, Triangle, Menu, Pipette,
} from 'lucide-react'
import { useStore } from '../../store/index.js'
import TemplatesDialog from './TemplatesDialog.jsx'
import CanvasSizeDialog from './CanvasSizeDialog.jsx'
import ImportDialog from '../canvas/ImportDialog.jsx'
import SettingsDialog from './SettingsDialog.jsx'
import ExportDialog from '../canvas/ExportDialog.jsx'

const TOOLS = [
  { id: 'pencil',   Icon: Pencil,              label: 'Pencil (P)',    key: 'P', group: 'draw' },
  { id: 'eraser',   Icon: Eraser,              label: 'Eraser (E)',    key: 'E', group: 'draw' },
  { id: 'fill',     Icon: PaintBucket,         label: 'Fill (F)',      key: 'F', group: 'draw' },
  { id: 'blend',    Icon: Droplets,            label: 'Blend (B)',     key: 'B', group: 'draw' },
  { id: 'material', Icon: Sparkles,            label: 'Material (M)', key: 'M', group: 'draw' },
  { id: 'eyedropper', Icon: Pipette,            label: 'Pipette (I)', key: 'I', group: 'draw' },
  { id: 'select',   Icon: BoxSelect,           label: 'Select (S)',   key: 'S', group: 'draw' },
  { id: 'bounds',   Icon: Frame,               label: 'Edit bounds (Q)', key: 'Q', group: 'draw' },
  // shapes
  { id: 'rect',     Icon: RectangleHorizontal, label: 'Rectangle (R)', key: 'R', group: 'shape' },
  { id: 'circle',   Icon: Circle,              label: 'Circle (C)',    key: 'C', group: 'shape' },
  { id: 'ellipse',  Icon: Ellipse,             label: 'Ellipse',               group: 'shape' },
  { id: 'line',     Icon: Minus,               label: 'Line (L)',      key: 'L', group: 'shape' },
]
const SHAPE_TOOLS = TOOLS.filter(t => t.group === 'shape')

const PRIMITIVE_TOOLS = [
  { id: 'box3d',      Icon: Box,      label: 'Box' },
  { id: 'sphere3d',   Icon: Circle,   label: 'Sphere' },
  { id: 'cylinder3d', Icon: Columns2, label: 'Cylinder' },
]

const SELECT_MODES = [
  { id: 'rect',  Icon: BoxSelect,   label: 'Rectangle Select' },
  { id: 'lasso', Icon: LassoSelect, label: 'Lasso Select' },
]

const VIEW_MODES = [
  { id: 'canvas-only',  Icon: Square,   label: '2D only' },
  { id: 'split',        Icon: Columns2, label: 'Split view' },
  { id: 'preview-only', Icon: Box,      label: '3D only' },
]

export default function Toolbar({ onExport, onRender, onLowPoly }) {
  const {
    activeTool, setActiveTool,
    selectionMode, setSelectionMode,
    pixelSize, setPixelSize,
    toggleGrid, showGrid,
    clearCanvas, undo, redo,
    viewMode, setViewMode,
    getProjectData, loadProjectData,
    toggleShortcutsPanel,
  } = useStore()
  const [showTemplatesDialog, setShowTemplatesDialog] = useState(false)
  const [showSizeDialog,      setShowSizeDialog]      = useState(false)
  const [showImportDialog,    setShowImportDialog]    = useState(false)
  const [showSettingsDialog,  setShowSettingsDialog]  = useState(false)
  const [showExportDialog,    setShowExportDialog]    = useState(false)
  const fileInputRef = useRef(null)

  // The shape button shows the last shape used, so one click re-selects it
  const [lastShape, setLastShape] = useState('rect')
  const [lastPrimitive, setLastPrimitive] = useState('box3d')
  useEffect(() => {
    if (SHAPE_TOOLS.some(t => t.id === activeTool)) setLastShape(activeTool)
    if (PRIMITIVE_TOOLS.some(t => t.id === activeTool)) setLastPrimitive(activeTool)
  }, [activeTool])

  function handleSaveProject() {
    const data = getProjectData()
    const json = JSON.stringify(data)
    const blob = new Blob([json], { type: 'application/json' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'project.picell3d'
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleLoadProject(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result)
        if (!loadProjectData(data)) alert('Invalid .picell3d file')
      } catch {
        alert('Failed to read project file')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <>
    {showTemplatesDialog && <TemplatesDialog onClose={() => setShowTemplatesDialog(false)} />}
    {showSizeDialog      && <CanvasSizeDialog onClose={() => setShowSizeDialog(false)} />}
    {showImportDialog    && <ImportDialog     onClose={() => setShowImportDialog(false)} />}
    {showSettingsDialog  && <SettingsDialog   onClose={() => setShowSettingsDialog(false)} />}
    {showExportDialog    && <ExportDialog     onClose={() => setShowExportDialog(false)} />}
    <div className="flex items-center gap-1 px-2 py-1 border-b border-border"
      style={{ background: 'var(--color-surfaceAlt)' }}>

      {/* Logo + app menu */}
      <div className="flex items-center gap-1 mr-1 pr-1 xl:mr-2 xl:pr-2 border-r border-border">
        <div className="font-theme text-text text-sm tracking-wider flex items-center gap-1 select-none px-1.5 py-0.5">
          <span>Picell3D</span>
        </div>
        <AppMenu
          onTemplates={() => setShowTemplatesDialog(true)}
          onLowPoly={onLowPoly}
          onSettings={() => setShowSettingsDialog(true)}
          onShortcuts={toggleShortcutsPanel}
          onSize={() => setShowSizeDialog(true)}
          onImport={() => setShowImportDialog(true)}
          onSave={handleSaveProject}
          onLoad={() => fileInputRef.current?.click()}
        />
      </div>

      {/* Drawing tools */}
      <div className="flex items-center gap-0.5 mr-1 pr-1 border-r border-border">
        {TOOLS.filter(t => t.group === 'draw').map(tool => {
          if (tool.id === 'select') {
            return (
              <ToolMenuButton
                key="select"
                heading="Selection Tool"
                options={SELECT_MODES}
                value={selectionMode}
                active={activeTool === 'select'}
                title={`${SELECT_MODES.find(m => m.id === selectionMode)?.label} (S)`}
                onActivate={() => setActiveTool('select')}
                onPick={(mode) => { setSelectionMode(mode); setActiveTool('select') }}
              />
            )
          }
          return (
            <ToolButton
              key={tool.id}
              Icon={tool.Icon}
              label={tool.label}
              active={activeTool === tool.id}
              onClick={() => setActiveTool(tool.id)}
            />
          )
        })}
      </div>

      {/* Shape tools */}
      <div className="flex items-center gap-0.5 mr-1 pr-1 xl:mr-2 xl:pr-2 border-r border-border">
        <ToolMenuButton
          heading="Shape Tool"
          options={SHAPE_TOOLS}
          value={lastShape}
          active={SHAPE_TOOLS.some(t => t.id === activeTool)}
          title={SHAPE_TOOLS.find(t => t.id === lastShape)?.label}
          onActivate={() => setActiveTool(lastShape)}
          onPick={(id) => setActiveTool(id)}
        />
        <ToolMenuButton
          heading="Volume Primitive"
          options={PRIMITIVE_TOOLS}
          value={lastPrimitive}
          active={PRIMITIVE_TOOLS.some(t => t.id === activeTool)}
          title={PRIMITIVE_TOOLS.find(t => t.id === lastPrimitive)?.label}
          onActivate={() => {
            if (viewMode !== 'preview-only') setViewMode('preview-only')
            setActiveTool(lastPrimitive)
          }}
          onPick={(id) => {
            if (viewMode !== 'preview-only') setViewMode('preview-only')
            setActiveTool(id)
          }}
        />
      </div>

      {/* Zoom */}
      <div className="flex items-center gap-1 mr-1 pr-1 xl:mr-2 xl:pr-2 border-r border-border">
        <button
          type="button"
          aria-label="Zoom out"
          className="text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors"
          onClick={() => setPixelSize(pixelSize - 2)}
          title="Zoom out"
        >−</button>
        <span className="text-xs text-text-muted font-mono w-8 text-center">{pixelSize}px</span>
        <button
          type="button"
          aria-label="Zoom in"
          className="text-text-muted hover:text-text text-xs px-1.5 py-0.5 rounded border border-border hover:border-accent transition-colors"
          onClick={() => setPixelSize(pixelSize + 2)}
          title="Zoom in"
        >+</button>
      </div>

      {/* Grid toggle */}
      <button
        type="button"
        aria-pressed={showGrid}
        aria-label="Toggle grid"
        className={`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors mr-1 xl:mr-2 ${
          showGrid
            ? 'border-accent bg-accent/20 text-accent'
            : 'border-border text-text-muted hover:text-text'
        }`}
        onClick={toggleGrid}
        title="Toggle grid (G)"
      >
        <Grid3X3 size={12} /> <span className="hidden 2xl:inline">Grid</span>
      </button>

      {/* View mode */}
      <div className="flex items-center gap-0.5 mr-1 pr-1 xl:mr-2 xl:pr-2 border-r border-border">
        {VIEW_MODES.map(({ id, Icon, label }) => (
          <button
            type="button"
            aria-label={label}
            aria-pressed={viewMode === id}
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

      {/* Canvas size, import, save/load — inline on wide screens, in the app menu otherwise */}
      <div className="hidden xl:flex items-center">
      <button
        type="button"
        aria-label="Change canvas size"
        className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2"
        onClick={() => setShowSizeDialog(true)}
        title="Canvas size"
      >
        <Frame size={12} />
        <span className="hidden 2xl:inline">Size</span>
      </button>

      {/* Import image */}
      <button
        type="button"
        aria-label="Import image"
        className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors mr-2"
        onClick={() => setShowImportDialog(true)}
        title="Import image"
      >
        <ImagePlus size={12} />
        <span className="hidden 2xl:inline">Import</span>
      </button>

      {/* Save / Load project */}
      <input ref={fileInputRef} type="file" accept=".picell3d" className="hidden" onChange={handleLoadProject} />
      <div className="flex items-center gap-0.5 mr-1 pr-1 xl:mr-2 xl:pr-2 border-r border-border">
        <button
          type="button"
          aria-label="Save project"
          className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors"
          onClick={handleSaveProject}
          title="Save project (Ctrl+S)"
        >
          <Save size={12} />
          <span className="hidden 2xl:inline">Save</span>
        </button>
        <button
          type="button"
          aria-label="Load project"
          className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors"
          onClick={() => fileInputRef.current?.click()}
          title="Load project"
        >
          <FolderOpen size={12} />
          <span className="hidden 2xl:inline">Load</span>
        </button>
      </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-0.5 mr-auto">
        <ActionButton Icon={Undo2}  label="Undo (Ctrl+Z)" onClick={undo} />
        <ActionButton Icon={Redo2}  label="Redo (Ctrl+Y)" onClick={redo} />
        <ActionButton Icon={Trash2} label="Clear canvas"  onClick={clearCanvas} danger />
      </div>

      {/* Export + Render */}
      <div className="flex items-center gap-1.5 ml-auto">
        <button
          type="button"
          className="btn-brass flex items-center gap-1.5"
          onClick={() => setShowExportDialog(true)}
          title="Export as PNG"
        >
          <Download size={14} />
          <span className="hidden xl:inline">Export PNG</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium transition-all"
          style={{
            borderColor: 'var(--color-accent)',
            color:       'var(--color-accent)',
            background:  'color-mix(in srgb, var(--color-accent) 12%, transparent)',
          }}
          onClick={onRender}
          title="Open Render Studio"
        >
          <Aperture size={14} />
          <span className="hidden xl:inline">Render</span>
        </button>
      </div>
    </div>
    </>
  )
}

function ToolButton({ Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
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
      type="button"
      aria-label={label}
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

/** Closes a popup on outside pointerdown or Escape. */
function useDismiss(open, setOpen, refs, triggerRef) {
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (refs.every(r => !r.current?.contains(e.target))) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        triggerRef?.current?.focus()
      }
    }
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])
}

function MenuPanel({ menuRef, heading, children, align = 'left' }) {
  function handleKeyDown(event) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    const items = [...event.currentTarget.querySelectorAll('[role="menuitem"]')]
    if (!items.length) return
    event.preventDefault()
    const current = items.indexOf(document.activeElement)
    if (event.key === 'Home') items[0].focus()
    else if (event.key === 'End') items[items.length - 1].focus()
    else if (event.key === 'ArrowDown') items[(current + 1 + items.length) % items.length].focus()
    else items[(current - 1 + items.length) % items.length].focus()
  }
  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label={heading || 'Application menu'}
      onKeyDown={handleKeyDown}
      className={`absolute top-full ${align === 'left' ? 'left-0' : 'right-0'} mt-1.5 z-50 py-1 rounded-lg border shadow-2xl flex flex-col min-w-[165px]`}
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.85)',
      }}
    >
      {heading && (
        <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted border-b border-border/40 mb-0.5">
          {heading}
        </div>
      )}
      {children}
    </div>
  )
}

function MenuItem({ Icon, label, hint, selected, onClick, href }) {
  const className = `flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-left transition-colors ${
    selected
      ? 'bg-accent/20 text-accent font-medium'
      : 'text-text-muted hover:text-text hover:bg-surface-alt'
  }`
  const content = (
    <>
      <Icon size={14} className={selected ? 'text-accent' : ''} />
      <span className="flex-1 whitespace-nowrap">{label}</span>
      {hint && <span className="text-[10px] font-mono opacity-60 whitespace-nowrap">{hint}</span>}
      {selected && <span className="text-xs font-bold text-accent">✓</span>}
    </>
  )
  if (href) return <a role="menuitem" href={href} className={className}>{content}</a>
  return <button type="button" role="menuitem" aria-checked={selected ? true : undefined} className={className} onClick={onClick}>{content}</button>
}

/**
 * Tool button that stands for a family of tools (selection modes, shapes).
 * Shows the current option's icon; clicking activates it and toggles the picker.
 */
function ToolMenuButton({ heading, options, value, active, title, onActivate, onPick }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const menuRef   = useRef(null)
  useDismiss(open, setOpen, [buttonRef, menuRef], buttonRef)

  useEffect(() => {
    if (open) requestAnimationFrame(() => menuRef.current?.querySelector('[role="menuitem"]')?.focus())
  }, [open])

  const current = options.find(o => o.id === value) ?? options[0]
  const Icon = current.Icon

  return (
    <div className="relative">
      <button
        type="button"
        ref={buttonRef}
        aria-label={title}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`w-8 h-8 rounded flex items-center justify-center transition-all border relative ${
          active
            ? 'border-accent bg-accent/20 text-accent shadow-glow-accent'
            : 'border-transparent text-text-muted hover:border-border hover:text-text hover:bg-surface-alt'
        }`}
        title={`${title} — click to choose tool`}
        onClick={() => {
          onActivate()
          setOpen(prev => !prev)
        }}
      >
        <Icon size={16} />
        {/* Subtle sub-menu indicator caret in bottom-right corner */}
        <span
          className="absolute bottom-1 right-1 w-0 h-0 border-solid border-t-transparent border-l-transparent opacity-60"
          style={{
            borderRightWidth: '3.5px',
            borderBottomWidth: '3.5px',
            borderRightColor: 'transparent',
            borderBottomColor: 'currentColor',
          }}
        />
      </button>

      {open && (
        <MenuPanel menuRef={menuRef} heading={heading}>
          {options.map(o => (
            <MenuItem
              key={o.id}
              Icon={o.Icon}
              label={o.label.replace(/ \(.\)$/, '')}
              hint={o.key}
              selected={active && o.id === value}
              onClick={(e) => {
                e.stopPropagation()
                onPick(o.id)
                setOpen(false)
              }}
            />
          ))}
        </MenuPanel>
      )}
    </div>
  )
}

/**
 * Templates, Low Poly Studio, settings and keyboard shortcuts behind one menu button.
 * On narrow screens it also holds the project actions that don't fit in the toolbar.
 */
function AppMenu({ onTemplates, onLowPoly, onSettings, onShortcuts, onSize, onImport, onSave, onLoad }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const menuRef   = useRef(null)
  useDismiss(open, setOpen, [buttonRef, menuRef], buttonRef)

  useEffect(() => {
    if (open) requestAnimationFrame(() => menuRef.current?.querySelector('[role="menuitem"]')?.focus())
  }, [open])

  const run = (fn) => () => { setOpen(false); fn() }

  return (
    <div className="relative">
      <button
        type="button"
        ref={buttonRef}
        data-dialog-return-focus="true"
        aria-label="Application menu"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        title="Menu"
        className={`flex items-center justify-center w-7 h-7 rounded border transition-colors ${
          open
            ? 'border-accent/50 text-accent'
            : 'border-transparent text-text-muted hover:text-accent hover:border-accent/50'
        }`}
      >
        <Menu size={15} />
      </button>
      {open && (
        <MenuPanel menuRef={menuRef}>
          <div className="flex flex-col xl:hidden">
            <MenuItem Icon={Save}       label="Save project" hint="Ctrl+S" onClick={run(onSave)} />
            <MenuItem Icon={FolderOpen} label="Load project"  onClick={run(onLoad)} />
            <MenuItem Icon={ImagePlus}  label="Import image"  onClick={run(onImport)} />
            <MenuItem Icon={Frame}      label="Canvas size"   onClick={run(onSize)} />
            <div className="my-1 border-t border-border/40" />
          </div>
          <MenuItem Icon={Sparkles}   label="Templates Library"   onClick={run(onTemplates)} />
          <MenuItem Icon={Triangle}   label="Low Poly Studio"     onClick={run(onLowPoly)} />
          <div className="my-1 border-t border-border/40" />
          <MenuItem Icon={Settings2}  label="Settings"            onClick={run(onSettings)} />
          <MenuItem Icon={HelpCircle} label="Keyboard shortcuts" hint="?" onClick={run(onShortcuts)} />
        </MenuPanel>
      )}
    </div>
  )
}
