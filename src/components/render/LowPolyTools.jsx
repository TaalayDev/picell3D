import { Orbit, Move, Waves, Maximize2, Paintbrush, Eraser, Undo2, Redo2, RefreshCw } from 'lucide-react'
import { SectionLabel } from './LowPolyPanel.jsx'

export const EDIT_TOOLS = [
  { id: 'orbit',   label: 'View',    icon: Orbit,      hint: 'Rotate the camera only' },
  { id: 'move',    label: 'Move',    icon: Move,       hint: 'Drag vertices — soft falloff, parallel to the screen' },
  { id: 'smooth',  label: 'Smooth',  icon: Waves,      hint: 'Paint over bumpy areas to relax them' },
  { id: 'inflate', label: 'Inflate', icon: Maximize2,  hint: 'Push the surface out (hold Alt to pull in)' },
  { id: 'paint',   label: 'Paint',   icon: Paintbrush, hint: 'Recolour faces' },
  { id: 'erase',   label: 'Erase',   icon: Eraser,     hint: 'Delete faces' },
]

function Slider({ label, value, min, max, step, format, onChange }) {
  return (
    <label className="block px-4 py-1.5">
      <div className="flex items-center justify-between text-xs mb-1">
        <span>{label}</span>
        <span className="font-mono opacity-60">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full" style={{ accentColor: 'var(--color-accent)' }} />
    </label>
  )
}

function IconBtn({ icon: Icon, title, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled} title={title}
      className="p-1.5 rounded border transition-colors hover:bg-white/5 disabled:opacity-30"
      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
      <Icon size={14} />
    </button>
  )
}

/** Generate button + manual editing tools for Low Poly Studio. */
export default function LowPolyTools({
  tool, onTool, brush, onBrush, canUndo, canRedo, onUndo, onRedo,
  stale, busy, onImport, onGenerate,
}) {
  const set = (key) => (value) => onBrush({ ...brush, [key]: value })
  const showStrength = tool === 'smooth' || tool === 'inflate'
  const showColor = tool === 'paint'
  const showBrush = tool !== 'orbit'

  return (
    <>
      <SectionLabel>Mesh</SectionLabel>
      <div className="px-4 flex flex-col gap-1.5">
        <button
          onClick={onImport} disabled={busy}
          className="w-full flex items-center justify-center gap-2 py-2 rounded border text-sm font-medium transition-colors disabled:opacity-50"
          style={stale
            ? { borderColor: 'var(--color-accent)', color: '#fff', background: 'var(--color-accent)' }
            : { borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          title="Replace the mesh with the voxel model exactly as drawn. Can be undone."
        >
          <RefreshCw size={14} className={busy ? 'animate-spin' : ''} />
          {stale ? 'Re-import voxels (model changed)' : 'Re-import original voxels'}
        </button>
        <button
          onClick={onGenerate} disabled={busy}
          className="w-full py-1.5 rounded border text-xs transition-colors disabled:opacity-50"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          title="Optional: auto-smooth the voxels into low poly using the settings below. Can be undone."
        >
          Auto low poly with settings below
        </button>
      </div>

      <SectionLabel>Edit tools</SectionLabel>
      <div className="grid grid-cols-3 gap-1.5 px-4 pb-1">
        {EDIT_TOOLS.map(({ id, label, icon: Icon, hint }) => (
          <button
            key={id} onClick={() => onTool(id)} title={hint}
            className="flex flex-col items-center gap-0.5 py-1.5 rounded border text-xs transition-colors"
            style={tool === id
              ? { borderColor: 'var(--color-accent)', color: 'var(--color-accent)',
                  background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }
              : { borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {showBrush && (
        <>
          <Slider label="Brush size" value={brush.radius} min={0.03} max={0.8} step={0.01}
            format={v => v.toFixed(2)} onChange={set('radius')} />
          {showStrength && (
            <Slider label="Strength" value={brush.strength} min={0.05} max={1} step={0.05}
              format={v => `${Math.round(v * 100)}%`} onChange={set('strength')} />
          )}
          {showColor && (
            <label className="flex items-center justify-between px-4 py-1.5 text-xs">
              <span>Colour</span>
              <input type="color" value={brush.color} onChange={e => set('color')(e.target.value)}
                className="w-10 h-6 rounded border-0 bg-transparent cursor-pointer" />
            </label>
          )}
        </>
      )}

      <div className="flex items-center gap-1.5 px-4 pt-2">
        <IconBtn icon={Undo2} title="Undo (Ctrl+Z)" disabled={!canUndo} onClick={onUndo} />
        <IconBtn icon={Redo2} title="Redo (Ctrl+Shift+Z)" disabled={!canRedo} onClick={onRedo} />
        <span className="text-xs opacity-40 ml-1">
          {tool === 'orbit' ? 'Pick a tool to edit the mesh' : 'Right-drag to orbit'}
        </span>
      </div>
    </>
  )
}
