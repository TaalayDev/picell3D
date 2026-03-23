import { useState } from 'react'
import { X, ArrowRight, Frame } from 'lucide-react'
import { useStore } from '../../store/index.js'

const PRESETS = [
  { label: '8×8',    w: 8,   h: 8 },
  { label: '16×16',  w: 16,  h: 16 },
  { label: '32×32',  w: 32,  h: 32 },
  { label: '48×48',  w: 48,  h: 48 },
  { label: '64×64',  w: 64,  h: 64 },
  { label: '128×64', w: 128, h: 64 },
  { label: '128×128',w: 128, h: 128 },
]

export default function CanvasSizeDialog({ onClose }) {
  const { canvasWidth, canvasHeight, resizeCanvas } = useStore()
  const [w, setW] = useState(canvasWidth)
  const [h, setH] = useState(canvasHeight)

  function apply() {
    const nw = Math.max(4, Math.min(256, parseInt(w) || canvasWidth))
    const nh = Math.max(4, Math.min(256, parseInt(h) || canvasHeight))
    resizeCanvas(nw, nh)
    onClose()
  }

  function selectPreset(preset) {
    setW(preset.w)
    setH(preset.h)
  }

  const isGrowingW = w > canvasWidth
  const isGrowingH = h > canvasHeight
  const unchanged = w === canvasWidth && h === canvasHeight

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="panel-riveted relative flex flex-col gap-4 p-5 rounded-lg border border-border shadow-brass w-80"
        style={{ background: 'var(--color-surface)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-theme text-text tracking-wide">
            <Frame size={15} className="text-accent" />
            Canvas Size
          </div>
          <button
            className="text-text-muted hover:text-text transition-colors"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>

        {/* Current size */}
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="font-mono">{canvasWidth}×{canvasHeight}</span>
          <ArrowRight size={12} />
          <span className={`font-mono font-medium ${unchanged ? 'text-text-muted' : 'text-accent'}`}>
            {Math.max(4, Math.min(256, parseInt(w) || canvasWidth))}×{Math.max(4, Math.min(256, parseInt(h) || canvasHeight))}
          </span>
        </div>

        {/* Presets */}
        <div>
          <div className="text-xs text-text-muted uppercase tracking-wide mb-2">Presets</div>
          <div className="grid grid-cols-4 gap-1">
            {PRESETS.map(p => {
              const active = p.w === canvasWidth && p.h === canvasHeight
              const selected = p.w === w && p.h === h
              return (
                <button
                  key={p.label}
                  className={`text-xs py-1 px-1 rounded border transition-colors ${
                    selected
                      ? 'border-accent bg-accent/20 text-accent'
                      : active
                      ? 'border-border/80 text-text'
                      : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                  }`}
                  onClick={() => selectPreset(p)}
                >
                  {p.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Custom inputs */}
        <div>
          <div className="text-xs text-text-muted uppercase tracking-wide mb-2">Custom</div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="text-xs text-text-muted block mb-1">Width</label>
              <input
                type="number"
                min={4} max={256}
                value={w}
                onChange={e => setW(parseInt(e.target.value) || 4)}
                className="w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent"
              />
            </div>
            <X size={12} className="text-text-muted mt-4 flex-shrink-0" />
            <div className="flex-1">
              <label className="text-xs text-text-muted block mb-1">Height</label>
              <input
                type="number"
                min={4} max={256}
                value={h}
                onChange={e => setH(parseInt(e.target.value) || 4)}
                className="w-full bg-transparent border border-border rounded px-2 py-1 text-xs text-text font-mono
                  focus:outline-none focus:border-accent"
              />
            </div>
          </div>
        </div>

        {/* Resize behaviour hint */}
        <div className="text-xs text-text-muted leading-relaxed rounded border border-border/40 px-2 py-1.5"
          style={{ background: 'color-mix(in srgb, var(--color-background) 60%, transparent)' }}>
          {isGrowingW || isGrowingH
            ? 'Growing: existing content will be centered.'
            : !unchanged
            ? 'Shrinking: content is cropped from the right and bottom.'
            : 'Select a new size to resize the canvas.'}
        </div>

        {/* Actions */}
        <div className="flex gap-2 justify-end pt-1">
          <button
            className="text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn-brass text-xs"
            disabled={unchanged}
            onClick={apply}
            style={{ opacity: unchanged ? 0.5 : 1 }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
