import { useStore } from '../../store/index.js'

// ── Template helpers ──────────────────────────────────────────────────────────

function applyTemplate(type) {
  const { canvasWidth: W, canvasHeight: H, depthDimension: D, clearCanvas, paintVoxelDirect } = useStore.getState()
  clearCanvas()

  const z = D - 1  // front face

  if (type === 'coin') {
    const cx = (W - 1) / 2, cy = (H - 1) / 2
    const r  = Math.min(W, H) / 2 - 1
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        if (d > r) continue
        const t = d / r
        const color = t < 0.25 ? '#fffacc' : t < 0.6 ? '#ffd700' : t < 0.85 ? '#c89820' : '#7a5a10'
        paintVoxelDirect(x, y, z, color)
        if (z > 0) paintVoxelDirect(x, y, z - 1, t < 0.6 ? '#a07810' : '#6a4a08')
      }
    }
  } else if (type === 'character') {
    const cx = Math.floor(W / 2)
    // skin / outfit palette
    const skin = '#f5c5a0', hair = '#3a2010', shirt = '#4466cc', pants = '#223388', shoe = '#222222'
    // head
    for (let y = 2; y <= 5; y++)
      for (let x = cx - 2; x <= cx + 2; x++) {
        paintVoxelDirect(x, y, z, y === 2 ? hair : skin)
      }
    // body
    for (let y = 6; y <= 11; y++)
      for (let x = cx - 2; x <= cx + 1; x++)
        paintVoxelDirect(x, y, z, shirt)
    // arms
    for (let y = 6; y <= 9; y++) {
      paintVoxelDirect(cx - 3, y, z, skin)
      paintVoxelDirect(cx + 2, y, z, skin)
    }
    // legs
    for (let y = 12; y <= 15; y++) {
      for (let x = cx - 2; x <= cx - 1; x++) paintVoxelDirect(x, y, z, y < 15 ? pants : shoe)
      for (let x = cx;     x <= cx + 1; x++) paintVoxelDirect(x, y, z, y < 15 ? pants : shoe)
    }
  } else if (type === 'building') {
    const bx1 = Math.floor((W - 10) / 2), bx2 = bx1 + 9
    const wall = '#8899bb', window_ = '#ffffaa', roof = '#556699', door = '#553322'
    // walls
    for (let y = 4; y < H; y++)
      for (let x = bx1; x <= bx2; x++)
        paintVoxelDirect(x, y, z, y === 4 ? roof : wall)
    // windows (2 rows of 2)
    for (const wy of [6, 9]) {
      for (const wx of [bx1 + 1, bx1 + 3, bx1 + 6, bx1 + 8])
        paintVoxelDirect(wx, wy, z, window_)
    }
    // door
    for (let y = 12; y < H; y++) {
      paintVoxelDirect(bx1 + 4, y, z, door)
      paintVoxelDirect(bx1 + 5, y, z, door)
    }
    // chimneys
    for (let y = 1; y <= 4; y++) {
      paintVoxelDirect(bx1 + 2, y, z, wall)
      paintVoxelDirect(bx1 + 7, y, z, wall)
    }
    // depth
    for (let dz = 1; dz <= Math.min(D - 1, 3); dz++) {
      const dwall = dz === 1 ? '#6677aa' : dz === 2 ? '#445588' : '#334466'
      for (let y = 4; y < H; y++)
        for (let x = bx1; x <= bx2; x++)
          if (x === bx1 || x === bx2 || y === 4 || y === H - 1)
            paintVoxelDirect(x, y, D - 1 - dz, dwall)
    }
  } else if (type === 'gem') {
    const cx = Math.floor(W / 2), cy = Math.floor(H / 2)
    // Diamond / gem facets
    const colors = ['#ff44cc', '#cc22aa', '#ff88ee', '#aa0088']
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const dx = Math.abs(x - cx), dy = Math.abs(y - cy)
        const r = 7
        if (dx + dy > r) continue
        const facet = (x < cx && y < cy) ? 0 : (x >= cx && y < cy) ? 2 : (x < cx) ? 1 : 3
        const shade = (dx + dy) / r
        const c = colors[facet]
        // Simple hex blend with white for highlight
        paintVoxelDirect(x, y, z, shade < 0.3 ? '#ffffff' : c)
        if (z > 0) paintVoxelDirect(x, y, z - 1, c)
      }
    }
  }
}

// ── Templates config ──────────────────────────────────────────────────────────

const TEMPLATES = [
  { id: 'coin',      label: 'Coin',       emoji: '🪙', desc: 'Gold coin with shading' },
  { id: 'character', label: 'Character',  emoji: '🧑', desc: 'Simple pixel character' },
  { id: 'building',  label: 'Building',   emoji: '🏠', desc: 'Multi-story building'  },
  { id: 'gem',       label: 'Gem',        emoji: '💎', desc: 'Shiny crystal gem'     },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function StartOverlay({ onDone }) {
  function handleTemplate(id) {
    applyTemplate(id)
    onDone()
  }

  function handleBlank() {
    onDone()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="relative flex flex-col gap-6 p-8 rounded-xl max-w-lg w-full mx-4"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 0 60px color-mix(in srgb, var(--color-accent) 30%, transparent), 0 24px 80px rgba(0,0,0,0.8)',
        }}
      >
        {/* Header */}
        <div className="text-center">
          <div className="text-3xl font-bold tracking-wide" style={{ color: 'var(--color-accent)' }}>
            Picell3D
          </div>
          <div className="mt-1 text-sm" style={{ color: 'var(--color-textMuted)' }}>
            3D voxel pixel art editor
          </div>
        </div>

        {/* Start hint */}
        <div
          className="text-center text-sm px-4 py-3 rounded-lg"
          style={{ background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--color-accent) 30%, transparent)' }}
        >
          <span style={{ color: 'var(--color-accent)' }}>Start here → </span>
          <span style={{ color: 'var(--color-text)' }}>Draw on the </span>
          <strong style={{ color: 'var(--color-accent)' }}>Front</strong>
          <span style={{ color: 'var(--color-text)' }}> canvas. Your art appears live in 3D.</span>
        </div>

        {/* Templates */}
        <div>
          <div className="mb-3 text-xs uppercase tracking-widest" style={{ color: 'var(--color-textMuted)' }}>
            Quick start — pick a template
          </div>
          <div className="grid grid-cols-2 gap-2">
            {TEMPLATES.map(t => (
              <button
                key={t.id}
                onClick={() => handleTemplate(t.id)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all"
                style={{
                  background: 'color-mix(in srgb, var(--color-surfaceAlt) 80%, transparent)',
                  border: '1px solid var(--color-border)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.background  = 'color-mix(in srgb, var(--color-accent) 12%, transparent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.background  = 'color-mix(in srgb, var(--color-surfaceAlt) 80%, transparent)'
                }}
              >
                <span className="text-2xl">{t.emoji}</span>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{t.label}</div>
                  <div className="text-xs" style={{ color: 'var(--color-textMuted)' }}>{t.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="grid grid-cols-3 gap-2 text-xs text-center" style={{ color: 'var(--color-textMuted)' }}>
          <div className="px-2 py-2 rounded" style={{ background: 'color-mix(in srgb, var(--color-surface) 60%, transparent)' }}>
            <div className="font-mono mb-1" style={{ color: 'var(--color-accent)' }}>P E F</div>
            Pencil · Eraser · Fill
          </div>
          <div className="px-2 py-2 rounded" style={{ background: 'color-mix(in srgb, var(--color-surface) 60%, transparent)' }}>
            <div className="font-mono mb-1" style={{ color: 'var(--color-accent)' }}>Ctrl+Z</div>
            Undo / Redo
          </div>
          <div className="px-2 py-2 rounded" style={{ background: 'color-mix(in srgb, var(--color-surface) 60%, transparent)' }}>
            <div className="font-mono mb-1" style={{ color: 'var(--color-accent)' }}>Ctrl+S</div>
            Save project
          </div>
        </div>

        {/* Blank start */}
        <button
          onClick={handleBlank}
          className="w-full py-2 text-sm rounded transition-colors"
          style={{
            border: '1px solid var(--color-border)',
            color:  'var(--color-textMuted)',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.borderColor = 'var(--color-accent)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-textMuted)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}
        >
          Start blank
        </button>
      </div>
    </div>
  )
}
