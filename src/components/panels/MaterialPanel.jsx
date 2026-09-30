import { useStore } from '../../store/index.js'

export const MATERIAL_GROUPS = [
  {
    title: 'Surfaces',
    items: [
      {
        id: 'solid',
        label: 'Solid',
        desc: 'Standard diffuse',
        preview: (color) => ({
          background: color,
          border: '1px solid rgba(255,255,255,0.18)',
        }),
      },
      {
        id: 'glossy',
        label: 'Glossy',
        desc: 'Plastic / Toy shine',
        preview: (color) => ({
          background: `radial-gradient(circle at 35% 25%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 30%, transparent 60%), ${color}`,
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.3)',
        }),
      },
      {
        id: 'matte',
        label: 'Matte',
        desc: 'Soft clay / Velvet',
        preview: (color) => ({
          background: color,
          filter: 'contrast(0.85) brightness(0.95)',
          border: '1px dashed rgba(255,255,255,0.25)',
        }),
      },
    ],
  },
  {
    title: 'Metals',
    items: [
      {
        id: 'metal',
        label: 'Chrome',
        desc: 'Polished metal',
        preview: (color) => ({
          background: `linear-gradient(135deg, rgba(255,255,255,0.75) 0%, ${color} 45%, rgba(0,0,0,0.5) 100%)`,
          border: '1px solid rgba(255,255,255,0.35)',
        }),
      },
      {
        id: 'gold',
        label: 'Gold',
        desc: 'Gilded brass sheen',
        preview: () => ({
          background: 'linear-gradient(135deg, #fff7c2 0%, #ffd700 35%, #b8860b 70%, #5c4300 100%)',
          border: '1px solid #ffe066',
          boxShadow: '0 0 6px rgba(255,215,0,0.45)',
        }),
      },
    ],
  },
  {
    title: 'Optics',
    items: [
      {
        id: 'glass',
        label: 'Glass',
        desc: 'Clear translucent',
        preview: (color) => ({
          background: `${color}40`,
          border: `1px solid ${color}99`,
          backdropFilter: 'blur(2px)',
        }),
      },
      {
        id: 'crystal',
        label: 'Crystal',
        desc: 'Faceted gemstone',
        preview: (color) => ({
          background: `linear-gradient(135deg, ${color}cc 0%, rgba(255,255,255,0.9) 30%, ${color}aa 60%, rgba(0,255,255,0.6) 100%)`,
          border: '1px solid rgba(255,255,255,0.85)',
          boxShadow: `0 0 8px ${color}88, inset 0 0 4px rgba(255,255,255,0.8)`,
        }),
      },
    ],
  },
  {
    title: 'Glow & Energy',
    items: [
      {
        id: 'emissive',
        label: 'Emissive',
        desc: 'Self-lit soft glow',
        preview: (color) => ({
          background: color,
          boxShadow: `0 0 6px 2px ${color}cc, 0 0 12px 4px ${color}55`,
        }),
      },
      {
        id: 'neon',
        label: 'Neon',
        desc: 'High bloom radiant',
        preview: (color) => ({
          background: '#ffffff',
          boxShadow: `0 0 3px 1px ${color}, 0 0 10px 4px ${color}bb, 0 0 18px 7px ${color}44`,
        }),
      },
      {
        id: 'magma',
        label: 'Magma',
        desc: 'Molten thermal heat',
        preview: () => ({
          background: 'radial-gradient(circle, #ffff77 0%, #ff5500 55%, #8b0000 100%)',
          boxShadow: '0 0 8px #ff4500, 0 0 16px rgba(255,69,0,0.5)',
        }),
      },
      {
        id: 'hologram',
        label: 'Hologram',
        desc: 'Cyber glow projection',
        preview: () => ({
          background: 'linear-gradient(180deg, rgba(0,255,255,0.4) 0%, rgba(180,0,255,0.3) 100%)',
          border: '1px solid #00ffff',
          boxShadow: '0 0 8px rgba(0,255,255,0.7), inset 0 0 4px rgba(0,255,255,0.5)',
        }),
      },
    ],
  },
]

export default function MaterialPanel() {
  const currentColor     = useStore(s => s.currentColor)
  const activeMaterial   = useStore(s => s.activeMaterial)
  const setActiveMaterial = useStore(s => s.setActiveMaterial)

  return (
    <div className="flex flex-col gap-3 px-2 py-2">
      {MATERIAL_GROUPS.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <div className="text-[10px] uppercase font-semibold tracking-wider text-text-muted opacity-60 px-1">
            {group.title}
          </div>
          <div className="flex flex-col gap-0.5">
            {group.items.map(({ id, label, desc, preview }) => {
              const isActive = activeMaterial === id
              return (
                <button
                  key={id}
                  onClick={() => setActiveMaterial(id)}
                  className={`flex items-center gap-2.5 w-full px-2 py-1.5 rounded-lg border text-left transition-all ${
                    isActive
                      ? 'border-accent bg-accent/15 text-accent shadow-sm'
                      : 'border-border/40 text-text-muted hover:text-text hover:border-border hover:bg-surface-alt/50'
                  }`}
                >
                  {/* Visual preview swatch */}
                  <div
                    className="flex-shrink-0 rounded-md"
                    style={{ width: 20, height: 20, ...preview(currentColor) }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold leading-tight">{label}</div>
                    <div className="text-[9px] opacity-60 leading-tight truncate">{desc}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <div className="mt-1 pt-2 border-t border-border/40">
        <div className="text-[9px] text-text-muted opacity-60 leading-tight">
          Click voxels in 2D or 3D view to paint material. <strong>Solid</strong> resets to standard.
        </div>
      </div>
    </div>
  )
}
