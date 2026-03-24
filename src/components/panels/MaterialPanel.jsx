import { Sparkles } from 'lucide-react'
import { useStore } from '../../store/index.js'

const MATERIALS = [
  {
    id:    'solid',
    label: 'Solid',
    desc:  'Plain flat color',
    css:   (c) => ({ background: c }),
  },
  {
    id:    'emissive',
    label: 'Emissive',
    desc:  'Soft self-lit glow',
    css:   (c) => ({
      background: c,
      boxShadow: `0 0 6px 2px ${c}99, 0 0 12px 4px ${c}44`,
    }),
  },
  {
    id:    'neon',
    label: 'Neon',
    desc:  'Intense bloom pulse',
    css:   (c) => ({
      background: c,
      boxShadow: `0 0 8px 3px ${c}cc, 0 0 18px 6px ${c}66, 0 0 30px 10px ${c}33`,
    }),
  },
  {
    id:    'metal',
    label: 'Metal',
    desc:  'Reflective specular',
    css:   (c) => ({
      background: `linear-gradient(135deg, ${c}ff 0%, ${c}88 40%, #ffffff44 50%, ${c}88 60%, ${c}ff 100%)`,
    }),
  },
  {
    id:    'glass',
    label: 'Glass',
    desc:  'Semi-transparent',
    css:   (c) => ({
      background: `${c}55`,
      border: `1.5px solid ${c}cc`,
      backdropFilter: 'blur(2px)',
    }),
  },
]

function Dot({ color, css }) {
  return (
    <div
      style={{
        width: 18, height: 18, borderRadius: 4, flexShrink: 0,
        transition: 'box-shadow .2s',
        ...css(color),
      }}
    />
  )
}

export default function MaterialPanel() {
  const { currentColor, colorMaterials, setColorMaterial } = useStore()
  const active = colorMaterials[currentColor] || 'solid'

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border flex-shrink-0">
        <Sparkles size={12} className="text-accent" />
        <span className="text-xs uppercase tracking-wide text-text-muted">Material</span>
        <div className="ml-auto flex items-center gap-1">
          <div
            className="w-3.5 h-3.5 rounded-sm border border-border/60"
            style={{ background: currentColor }}
            title={currentColor}
          />
          <span className="text-xs font-mono text-text-muted opacity-60">{currentColor}</span>
        </div>
      </div>

      {/* Material buttons */}
      <div className="flex flex-col gap-0.5 p-2">
        {MATERIALS.map(({ id, label, desc, css }) => (
          <button
            key={id}
            onClick={() => setColorMaterial(currentColor, id)}
            className={`flex items-center gap-2 px-2 py-1.5 rounded border transition-colors text-left ${
              active === id
                ? 'border-accent text-accent'
                : 'border-transparent text-text-muted hover:text-text hover:border-border'
            }`}
            style={{
              background: active === id
                ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)'
                : 'transparent',
            }}
          >
            <Dot color={currentColor} css={css} />
            <div className="flex flex-col min-w-0">
              <span className="text-xs leading-tight">{label}</span>
              <span className="text-[10px] opacity-50 leading-tight">{desc}</span>
            </div>
            {active === id && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
