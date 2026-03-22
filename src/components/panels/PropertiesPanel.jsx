import { ArrowRight, ArrowLeft, ArrowLeftRight, Minus, Circle, Hexagon } from 'lucide-react'
import { useStore } from '../../store/index.js'

const DIRECTIONS = [
  { value: 'front', Icon: ArrowRight,      label: 'Front', title: 'Extrude toward viewer' },
  { value: 'both',  Icon: ArrowLeftRight,  label: 'Both',  title: 'Extrude both sides symmetrically' },
  { value: 'back',  Icon: ArrowLeft,       label: 'Back',  title: 'Extrude away from viewer' },
]

const PROFILES = [
  { value: 'flat',  Icon: Minus,   label: 'Flat' },
  { value: 'round', Icon: Circle,  label: 'Round' },
  { value: 'bevel', Icon: Hexagon, label: 'Bevel' },
]

export default function PropertiesPanel() {
  const { selections, activeSelectionId, updateSelection } = useStore()
  const sel = selections.find(s => s.id === activeSelectionId)

  if (!sel) {
    return (
      <div className="p-3 text-xs text-text-muted italic">
        Select a depth layer to edit its properties.
      </div>
    )
  }

  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="text-xs text-text-muted uppercase tracking-wide border-b border-border pb-1">
        Layer Properties
      </div>

      {/* Active toggle */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={sel.active}
          onChange={e => updateSelection(sel.id, { active: e.target.checked })}
          className="accent-accent"
        />
        <span className="text-sm text-text">Active</span>
      </label>

      {/* Depth value */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <label className="text-xs text-text-muted uppercase tracking-wide">Depth</label>
          <span className="text-xs text-accent font-mono">{sel.depth.toFixed(1)}</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="10"
          step="0.5"
          value={sel.depth}
          onChange={e => updateSelection(sel.id, { depth: parseFloat(e.target.value) })}
          className="w-full accent-accent cursor-pointer"
          style={{ accentColor: 'var(--color-accent)' }}
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>0.5</span><span>10</span>
        </div>
      </div>

      {/* Direction */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-text-muted uppercase tracking-wide">Direction</label>
        <div className="grid grid-cols-3 gap-1">
          {DIRECTIONS.map(({ value, Icon, label, title }) => (
            <button
              key={value}
              title={title}
              className={`flex flex-col items-center gap-0.5 text-xs py-1.5 px-1 rounded border transition-colors ${
                sel.direction === value
                  ? 'border-accent bg-accent/20 text-accent'
                  : 'border-border text-text-muted hover:border-accent/50 hover:text-text'
              }`}
              onClick={() => updateSelection(sel.id, { direction: value })}
            >
              <Icon size={13} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-text-muted uppercase tracking-wide">Profile</label>
        <div className="grid grid-cols-3 gap-1">
          {PROFILES.map(({ value, Icon, label }) => (
            <button
              key={value}
              className={`flex flex-col items-center gap-0.5 text-xs py-1.5 px-1 rounded border transition-colors ${
                sel.profile === value
                  ? 'border-accent bg-accent/20 text-accent'
                  : 'border-border text-text-muted hover:border-accent/50 hover:text-text'
              }`}
              onClick={() => updateSelection(sel.id, { profile: value })}
            >
              <Icon size={13} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pixel count */}
      <div className="text-xs text-text-muted">
        <span className="text-text">{sel.pixels.length}</span> pixels selected
      </div>
    </div>
  )
}
