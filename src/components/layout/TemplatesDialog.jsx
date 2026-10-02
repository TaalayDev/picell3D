import { useState, useMemo, useRef } from 'react'
import { X, Sparkles, Plus, Search, Coffee } from 'lucide-react'
import { useStore } from '../../store/index.js'
import { useModalAccessibility } from '../../hooks/useModalAccessibility.js'

import { TEMPLATES, CATEGORIES } from './templatesData.js'

export { TEMPLATES, CATEGORIES }

export default function TemplatesDialog({ onClose }) {
  const dialogRef = useRef(null)
  const [loading, setLoading] = useState(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const { loadProjectData, palette, clearCanvas } = useStore()

  useModalAccessibility(dialogRef, onClose)

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
    clearCanvas({ skipConfirmation: true })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="templates-dialog-title"
        tabIndex={-1}
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
                <h2 id="templates-dialog-title" className="text-base font-bold tracking-wide" style={{ color: 'var(--color-text)' }}>
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
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://ko-fi.com/mirazh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all hover:brightness-110 active:scale-95"
              style={{
                color: 'var(--color-background)',
                background: 'var(--color-accent)',
                boxShadow: '0 0 18px color-mix(in srgb, var(--color-accent) 35%, transparent)',
              }}
            >
              <Coffee size={15} /> Buy me a coffee
            </a>
            <button
              type="button"
              aria-label="Close templates library"
              onClick={onClose}
              className="w-7 h-7 rounded-lg flex items-center justify-center border border-transparent text-text-muted hover:text-text hover:border-border hover:bg-surface-alt transition-colors"
              title="Close (Esc)"
            >
              <X size={15} />
            </button>
          </div>
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
              data-autofocus
              aria-label="Search templates"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="bg-transparent text-text outline-none w-full placeholder:text-text-muted text-xs"
            />
            {search && (
              <button
                type="button"
                aria-label="Clear template search"
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
                  type="button"
                  aria-pressed={active}
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
            type="button"
            onClick={handleStartBlank}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-border text-text-muted hover:text-text hover:border-accent/60 hover:bg-surface-alt transition-colors"
          >
            <Plus size={14} />
            <span>Start Blank Canvas</span>
          </button>
          <button
            type="button"
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
