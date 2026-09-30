import { LOWPOLY_PRESETS } from '../../lib/lowpoly/index.js'

// ── Small controls ────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <div className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest"
      style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
      {children}
    </div>
  )
}

function Slider({ label, hint, value, min, max, step, format = (v) => v, onChange }) {
  return (
    <label className="block px-4 py-1.5" title={hint}>
      <div className="flex items-center justify-between text-xs mb-1">
        <span style={{ color: 'var(--color-text)' }}>{label}</span>
        <span className="font-mono opacity-60">{format(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full"
        style={{ accentColor: 'var(--color-accent)' }}
      />
    </label>
  )
}

function Toggle({ label, hint, checked, onChange }) {
  return (
    <label className="flex items-center justify-between px-4 py-1.5 text-xs cursor-pointer" title={hint}>
      <span style={{ color: 'var(--color-text)' }}>{label}</span>
      <input
        type="checkbox" checked={checked}
        onChange={e => onChange(e.target.checked)}
        style={{ accentColor: 'var(--color-accent)' }}
      />
    </label>
  )
}

function Segmented({ label, value, options, onChange }) {
  return (
    <div className="px-4 py-1.5">
      <div className="text-xs mb-1" style={{ color: 'var(--color-text)' }}>{label}</div>
      <div className="flex rounded border overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
        {options.map(o => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className="flex-1 py-1 text-xs transition-colors"
            style={value === o.value
              ? { background: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', color: 'var(--color-accent)' }
              : { color: 'var(--color-text-muted)' }}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Panel ─────────────────────────────────────────────────────────────────────
/** Conversion controls for Low Poly Studio. */
export default function LowPolyPanel({ params, onChange, activePreset, onPreset }) {
  const set = (key) => (value) => onChange({ ...params, [key]: value })

  return (
    <>
      <SectionLabel>Presets</SectionLabel>
      <div className="grid grid-cols-2 gap-1.5 px-4 pb-2">
        {Object.entries(LOWPOLY_PRESETS).map(([key, p]) => (
          <button
            key={key}
            onClick={() => onPreset(key)}
            className="py-1.5 rounded border text-xs transition-all"
            style={activePreset === key
              ? { borderColor: 'var(--color-accent)', color: 'var(--color-accent)',
                  background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }
              : { borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <SectionLabel>Shape</SectionLabel>
      <Slider label="Roundness" hint="How much the blocky edges are blurred away"
        value={params.roundness} min={0} max={2} step={0.1} format={v => v.toFixed(1)}
        onChange={set('roundness')} />
      <Slider label="Thickness" hint="Lower keeps more of the shape; higher carves it thinner"
        value={1 - params.threshold} min={0.3} max={0.7} step={0.01} format={v => v.toFixed(2)}
        onChange={v => onChange({ ...params, threshold: +(1 - v).toFixed(2) })} />
      <Toggle label="Keep thin parts" hint="Blades, sails and antennas never disappear"
        checked={params.keepThin} onChange={set('keepThin')} />
      <Toggle label="Fine sampling (2×)" hint="Doubles the sampling grid for smoother curves"
        checked={params.upsample >= 2} onChange={v => onChange({ ...params, upsample: v ? 2 : 1 })} />

      <SectionLabel>Smoothing</SectionLabel>
      <Slider label="Iterations" hint="Taubin smoothing passes"
        value={params.iterations} min={0} max={20} step={1}
        onChange={set('iterations')} />
      <Toggle label="Keep colour edges" hint="Stop colours bleeding into each other while smoothing"
        checked={params.keepColorEdges} onChange={set('keepColorEdges')} />

      <SectionLabel>Detail</SectionLabel>
      <Slider label="Polygon budget" hint="Share of vertices kept after decimation"
        value={params.detail} min={0.05} max={1} step={0.05} format={v => `${Math.round(v * 100)}%`}
        onChange={set('detail')} />

      <SectionLabel>Look</SectionLabel>
      <Segmented label="Shading" value={params.shading} onChange={set('shading')}
        options={[{ value: 'flat', label: 'Flat' }, { value: 'smooth', label: 'Smooth' }]} />
      <Segmented label="Colour" value={params.colorMode} onChange={set('colorMode')}
        options={[{ value: 'crisp', label: 'Per face' }, { value: 'blended', label: 'Blended' }]} />
    </>
  )
}
