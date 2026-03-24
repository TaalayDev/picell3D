import { useStore } from '../../store/index.js'

const MATERIALS = [
  {
    id: 'solid',
    label: 'Solid',
    desc: 'Standard flat color',
    preview: (color) => ({
      background: color,
      border: '1px solid rgba(255,255,255,0.15)',
    }),
  },
  {
    id: 'emissive',
    label: 'Emissive',
    desc: 'Self-lit, soft glow',
    preview: (color) => ({
      background: color,
      boxShadow: `0 0 6px 2px ${color}cc, 0 0 12px 4px ${color}55`,
    }),
  },
  {
    id: 'neon',
    label: 'Neon',
    desc: 'Bright bloom effect',
    preview: (color) => ({
      background: '#fff',
      boxShadow: `0 0 3px 1px ${color}, 0 0 10px 4px ${color}bb, 0 0 18px 7px ${color}44`,
    }),
  },
  {
    id: 'metal',
    label: 'Metal',
    desc: 'Metallic sheen',
    preview: (color) => ({
      background: `linear-gradient(135deg, rgba(255,255,255,0.7) 0%, ${color} 45%, rgba(0,0,0,0.4) 100%)`,
    }),
  },
  {
    id: 'glass',
    label: 'Glass',
    desc: 'Semi-transparent',
    preview: (color) => ({
      background: `${color}50`,
      border: `1px solid ${color}99`,
      backdropFilter: 'blur(2px)',
    }),
  },
]

export default function MaterialPanel() {
  const currentColor  = useStore(s => s.currentColor)
  const activeMaterial = useStore(s => s.activeMaterial)
  const setActiveMaterial = useStore(s => s.setActiveMaterial)

  return (
    <div className="flex flex-col gap-0.5 px-2 py-2">
      <div className="text-[10px] uppercase tracking-wide text-text-muted mb-1 opacity-60">
        Material
      </div>
      {MATERIALS.map(({ id, label, desc, preview }) => {
        const isActive = activeMaterial === id
        return (
          <button
            key={id}
            onClick={() => setActiveMaterial(id)}
            className={`flex items-center gap-2 w-full px-2 py-1.5 rounded border text-left transition-all ${
              isActive
                ? 'border-accent bg-accent/15 text-accent'
                : 'border-border/50 text-text-muted hover:text-text hover:border-border'
            }`}
          >
            {/* Visual preview dot */}
            <div
              className="flex-shrink-0 rounded"
              style={{ width: 18, height: 18, ...preview(currentColor) }}
            />
            <div className="min-w-0">
              <div className="text-[11px] font-medium leading-tight">{label}</div>
              <div className="text-[9px] opacity-50 leading-tight truncate">{desc}</div>
            </div>
          </button>
        )
      })}

      <div className="mt-2 pt-2 border-t border-border/40">
        <div className="text-[9px] text-text-muted opacity-50 leading-tight">
          Click pixels to apply material. Solid removes material.
        </div>
      </div>
    </div>
  )
}
