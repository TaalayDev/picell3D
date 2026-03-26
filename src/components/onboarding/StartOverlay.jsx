import { useState } from 'react'
import { useStore } from '../../store/index.js'

// ── Templates config ──────────────────────────────────────────────────────────

const TEMPLATES = [
  { id: 'coin',      label: 'Coin',       emoji: '🪙', desc: 'Gold coin with shading' },
  { id: 'character', label: 'Character',  emoji: '🧑', desc: 'Simple pixel character' },
  { id: 'building',  label: 'Building',   emoji: '🏠', desc: 'Multi-story building'  },
  { id: 'gem',       label: 'Gem',        emoji: '💎', desc: 'Shiny crystal gem'     },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function StartOverlay({ onDone }) {
  const [loading, setLoading] = useState(null)

  async function handleTemplate(id) {
    setLoading(id)
    try {
      const res  = await fetch(`/templates/${id}.picell3d`)
      const data = await res.json()
      // Keep the current palette; templates don't override it
      data.palette = useStore.getState().palette
      useStore.getState().loadProjectData(data)
    } catch {
      // Fallback: just start blank if fetch fails
    }
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
                disabled={loading !== null}
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
                <span className="text-2xl">{loading === t.id ? '⏳' : t.emoji}</span>
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
