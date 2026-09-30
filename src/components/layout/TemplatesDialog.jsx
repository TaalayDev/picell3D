import { useState, useEffect, useMemo } from 'react'
import { X, Sparkles, Plus, Search } from 'lucide-react'
import { useStore } from '../../store/index.js'

export const TEMPLATES = [
  { id: 'mushroom',   label: 'Mushroom House',  emoji: '🍄', desc: 'Toadstool cottage with chimney',  size: '23×26×23', category: 'fantasy' },
  { id: 'ufo',        label: 'Flying Saucer',   emoji: '🛸', desc: 'Neon-rimmed UFO with pilot',      size: '25×14×25', category: 'scifi' },
  { id: 'duck',       label: 'Rubber Duck',     emoji: '🐤', desc: 'Bath duck floating in water',     size: '20×18×18', category: 'world' },
  { id: 'tv',         label: 'CRT Television',  emoji: '📺', desc: 'Wood TV with rabbit-ear antenna', size: '22×26×18', category: 'retro' },
  { id: 'crystals',   label: 'Crystal Cluster', emoji: '🔮', desc: 'Glowing shards on a rock base',   size: '21×23×19', category: 'fantasy' },
  { id: 'rocket',     label: 'Retro Rocket',    emoji: '🚀', desc: 'Finned rocket with porthole',     size: '17×31×17', category: 'scifi' },
  { id: 'snowman',    label: 'Snowman',         emoji: '⛄', desc: 'Top hat, scarf and carrot nose',  size: '19×28×18', category: 'world' },
  { id: 'cassette',   label: 'Cassette Tape',   emoji: '📼', desc: 'Mixtape with see-through reels',  size: '24×16×7',  category: 'retro' },
  { id: 'shield',     label: 'Knight Shield',   emoji: '🛡️', desc: 'Quartered heater shield in gold', size: '19×23×8',  category: 'fantasy' },
  { id: 'raygun',     label: 'Ray Gun',         emoji: '🔫', desc: 'Retro-future blaster pistol',     size: '25×17×9',  category: 'scifi' },
  { id: 'penguin',    label: 'Penguin',         emoji: '🐧', desc: 'Chubby penguin in a knit hat',    size: '18×22×16', category: 'world' },
  { id: 'camera',     label: 'Instant Camera',  emoji: '📷', desc: 'Rainbow-striped instant camera',  size: '20×17×15', category: 'retro' },
  { id: 'cactus',     label: 'Potted Cactus',   emoji: '🌵', desc: 'Ribbed cactus with a pink bloom', size: '17×24×15', category: 'world' },
  { id: 'mug',        label: 'Coffee Mug',      emoji: '☕', desc: 'Steaming mug with a heart',       size: '19×18×14', category: 'world' },
  { id: 'sailboat',   label: 'Sailboat',        emoji: '⛵', desc: 'Little sloop with striped sail',  size: '24×27×12', category: 'world' },
  { id: 'cat',        label: 'Ginger Cat',      emoji: '🐱', desc: 'Cute cozy tabby cat loaf',       size: '20×20×18', category: 'world' },
  { id: 'hovercar',   label: 'Cyber Hovercar',  emoji: '🏎️', desc: 'Futuristic neon hover flyer',    size: '24×16×18', category: 'scifi' },
  { id: 'cupcake',    label: 'Sweet Cupcake',   emoji: '🧁', desc: 'Swirled frosting with cherry',   size: '20×22×20', category: 'world' },
  { id: 'helicopter', label: 'Rescue Chopper',  emoji: '🚁', desc: 'Chopper with spinning rotor',    size: '24×20×18', category: 'world' },
  { id: 'moped',      label: 'Vintage Moped',   emoji: '🛵', desc: 'Classic retro Italian scooter',  size: '24×22×14', category: 'retro' },
  { id: 'burger',     label: 'Cheeseburger',    emoji: '🍔', desc: 'Gourmet 3D stacked burger',     size: '20×20×20', category: 'world' },
  { id: 'castle',     label: 'Medieval Castle', emoji: '🏰', desc: 'Citadel with towers & moat',     size: '24×24×24', category: 'fantasy' },
  { id: 'boombox',    label: '80s Boombox',     emoji: '📻', desc: 'Dual-speaker ghettoblaster',     size: '24×18×12', category: 'retro' },
  { id: 'chest',      label: 'Treasure Chest',  emoji: '📦', desc: 'Arched chest with brass & gems',  size: '20×20×16', category: 'fantasy' },
  { id: 'dragon',     label: 'Chibi Dragon',    emoji: '🐉', desc: 'Cute horned fire-breather',      size: '24×24×18', category: 'fantasy' },
  { id: 'spaceship',  label: 'Starfighter',     emoji: '🚀', desc: 'Sci-fi ship with ion thrusters', size: '24×24×14', category: 'scifi' },
  { id: 'robot',      label: 'Retro Mech Bot',  emoji: '🤖', desc: 'Armored robot with power core',  size: '20×24×14', category: 'scifi' },
  { id: 'campfire',   label: 'Cozy Campfire',   emoji: '🔥', desc: 'Roaring flames & marshmallow',   size: '20×20×20', category: 'world' },
  { id: 'tree',       label: 'Bonsai Island',   emoji: '🌳', desc: 'Floating island with canopy',    size: '24×24×24', category: 'world' },
  { id: 'gameboy',    label: 'Retro Handheld',  emoji: '🎮', desc: 'Classic handheld 8-bit console', size: '16×24×8',  category: 'retro' },
  { id: 'arcade',     label: 'Arcade Cabinet',  emoji: '🕹️', desc: 'Retro cabinet with CRT display',  size: '20×24×16', category: 'retro' },
  { id: 'staff',      label: 'Arcane Staff',    emoji: '🪄', desc: 'Elderwood staff with crystal',   size: '16×28×14', category: 'fantasy' },
  { id: 'sword',      label: 'Fantasy Sword',   emoji: '⚔️', desc: 'Double-edged blade with guard',  size: '16×16×5',  category: 'fantasy' },
  { id: 'potion',     label: 'Magic Potion',    emoji: '🧪', desc: 'Glowing magical elixir flask',   size: '16×16×6',  category: 'fantasy' },
  { id: 'lighthouse', label: 'Lighthouse',      emoji: '🗼', desc: 'Coastal tower with sea beacon',  size: '20×28×18', category: 'world' },
  { id: 'character',  label: 'Character',       emoji: '🧑', desc: 'Simple pixel character',         size: '8×8×4',    category: 'world' },
  { id: 'coin',       label: 'Gold Coin',       emoji: '🪙', desc: 'Shaded gold collector coin',    size: '32×32×5',  category: 'world' },
  { id: 'gem',        label: 'Crystal Gem',     emoji: '💎', desc: 'Shiny multi-faceted crystal',    size: '32×32×16', category: 'fantasy' },
  { id: 'building',   label: 'City Building',   emoji: '🏠', desc: 'Multi-story isometric tower',    size: '32×32×32', category: 'world' },
]

const CATEGORIES = [
  { id: 'all',     label: 'All' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'scifi',   label: 'Sci-Fi' },
  { id: 'retro',   label: 'Retro' },
  { id: 'world',   label: 'World' },
]

export default function TemplatesDialog({ onClose }) {
  const [loading, setLoading] = useState(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const { loadProjectData, palette, clearCanvas } = useStore()

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter(t => {
      const matchCat = activeCategory === 'all' || t.category === activeCategory
      const matchSearch = !search.trim() ||
        t.label.toLowerCase().includes(search.toLowerCase()) ||
        t.desc.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  async function handleSelectTemplate(id) {
    setLoading(id)
    try {
      const res = await fetch(`/templates/${id}.picell3d`)
      const data = await res.json()
      // Preserve current palette
      data.palette = palette
      loadProjectData(data)
    } catch (err) {
      console.error('Failed to load template:', err)
    } finally {
      setLoading(null)
      onClose()
    }
  }

  function handleStartBlank() {
    clearCanvas()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col gap-4 p-6 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-hidden"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 0 60px color-mix(in srgb, var(--color-accent) 25%, transparent), 0 24px 80px rgba(0,0,0,0.85)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm"
              style={{
                borderColor: 'var(--color-accent)',
                background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                color: 'var(--color-accent)',
              }}
            >
              <Sparkles size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold tracking-wide" style={{ color: 'var(--color-text)' }}>
                  Templates Library
                </h2>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold"
                  style={{
                    background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                    color: 'var(--color-accent)',
                    border: '1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)'
                  }}
                >
                  {TEMPLATES.length} Models
                </span>
              </div>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-textMuted)' }}>
                Select a high-detail 3D voxel preset or start fresh
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center border border-transparent text-text-muted hover:text-text hover:border-border hover:bg-surface-alt transition-colors"
            title="Close (Esc)"
          >
            <X size={15} />
          </button>
        </div>

        {/* Controls: Search & Category Pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
          {/* Search bar */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border flex-1 text-xs"
            style={{
              background: 'var(--color-surfaceAlt)',
              borderColor: 'var(--color-border)',
            }}
          >
            <Search size={14} className="text-text-muted flex-shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="bg-transparent text-text outline-none w-full placeholder:text-text-muted text-xs"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="text-text-muted hover:text-text text-[11px]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
            {CATEGORIES.map(cat => {
              const active = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
                  style={{
                    background: active
                      ? 'var(--color-accent)'
                      : 'color-mix(in srgb, var(--color-surfaceAlt) 80%, transparent)',
                    color: active ? '#ffffff' : 'var(--color-textMuted)',
                    border: active
                      ? '1px solid var(--color-accent)'
                      : '1px solid var(--color-border)',
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Template Grid Container (Scrollable) */}
        <div className="overflow-y-auto pr-1 flex-1 min-h-[300px] max-h-[55vh]">
          {filteredTemplates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-text-muted">
              <span className="text-3xl mb-2 opacity-50">🔍</span>
              <p className="text-sm font-medium">No templates match &quot;{search}&quot;</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('all') }}
                className="mt-2 text-xs underline hover:text-text"
                style={{ color: 'var(--color-accent)' }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5">
              {filteredTemplates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleSelectTemplate(t.id)}
                  disabled={loading !== null}
                  className="flex items-center gap-3 p-3.5 rounded-xl text-left border transition-all relative overflow-hidden group"
                  style={{
                    background: 'color-mix(in srgb, var(--color-surfaceAlt) 80%, transparent)',
                    borderColor: 'var(--color-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--color-accent) 12%, transparent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--color-surfaceAlt) 80%, transparent)'
                  }}
                >
                  <span className="text-2xl select-none flex-shrink-0 group-hover:scale-110 transition-transform">
                    {loading === t.id ? '⏳' : t.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="text-sm font-semibold truncate" style={{ color: 'var(--color-text)' }}>
                        {t.label}
                      </span>
                      <span className="text-[10px] font-mono opacity-60 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>
                        {t.size}
                      </span>
                    </div>
                    <div className="text-xs truncate" style={{ color: 'var(--color-textMuted)' }}>
                      {t.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Start Blank Option */}
        <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-3">
          <button
            onClick={handleStartBlank}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-border text-text-muted hover:text-text hover:border-accent/60 hover:bg-surface-alt transition-colors"
          >
            <Plus size={14} />
            <span>Start Blank Canvas</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs border border-transparent text-text-muted hover:text-text transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
