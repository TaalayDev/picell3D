import { useState, useRef, useEffect } from 'react'
import { Download, X } from 'lucide-react'
import { useStore, getCompositedVoxels, renderView2D, getViewSize } from '../../store/index.js'

const ALL_VIEWS = [
  { id: 'front',  label: 'Front'  },
  { id: 'back',   label: 'Back'   },
  { id: 'left',   label: 'Left'   },
  { id: 'right',  label: 'Right'  },
  { id: 'top',    label: 'Top'    },
  { id: 'bottom', label: 'Bottom' },
]

const PIXEL_SCALES = [4, 8, 16, 32]

export default function ExportDialog({ onClose }) {
  const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore()

  const [selectedViews, setSelectedViews] = useState(['front'])
  const [pixelScale, setPixelScale]       = useState(8)
  const [bgType, setBgType]               = useState('transparent')
  const [bgColor, setBgColor]             = useState('#000000')
  const previewRef = useRef(null)

  function toggleView(id) {
    setSelectedViews(prev =>
      prev.includes(id)
        ? prev.length > 1 ? prev.filter(v => v !== id) : prev
        : [...prev, id]
    )
  }

  function buildSpritesheet(canvas) {
    const voxels = getCompositedVoxels(layers, W, H, D)
    const ps = pixelScale

    // Compute pixel dimensions for each selected view
    const dims = selectedViews.map(id => {
      const { w, h } = getViewSize(id, W, H, D)
      return { id, cols: w, rows: h, pw: w * ps, ph: h * ps }
    })

    const GAP    = 0
    const totalW = dims.reduce((s, d) => s + d.pw, 0)
    const totalH = Math.max(...dims.map(d => d.ph))

    canvas.width  = totalW
    canvas.height = totalH

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, totalW, totalH)

    if (bgType === 'color') {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, totalW, totalH)
    }

    let ox = 0
    for (const { id, cols, rows, pw, ph } of dims) {
      const grid = renderView2D(voxels, id, W, H, D)
      const oy = Math.floor((totalH - ph) / 2) // center vertically

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const color = grid[row]?.[col]
          if (!color || color === 'transparent') continue
          ctx.fillStyle = color
          ctx.fillRect(ox + col * ps, oy + row * ps, ps, ps)
        }
      }

      ox += pw
    }
  }

  // Update preview whenever settings change
  useEffect(() => {
    if (!previewRef.current) return
    buildSpritesheet(previewRef.current)
  }) // run every render — deps tracked implicitly via closure

  function handleExport() {
    const canvas = document.createElement('canvas')
    buildSpritesheet(canvas)
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = selectedViews.length === 1
      ? `picell3d-${selectedViews[0]}.png`
      : 'picell3d-spritesheet.png'
    a.click()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.75)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="rounded-lg border border-border shadow-2xl overflow-hidden"
        style={{ background: 'var(--color-surface)', width: 540 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="text-sm font-theme text-text">Export PNG</span>
          <button onClick={onClose} className="text-text-muted hover:text-text transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="flex gap-4 p-4">

          {/* Left: options */}
          <div className="flex flex-col gap-4" style={{ width: 180 }}>

            {/* Views */}
            <div>
              <div className="text-xs uppercase tracking-wide text-text-muted mb-2">Views</div>
              <div className="grid grid-cols-2 gap-1">
                {ALL_VIEWS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => toggleView(id)}
                    className={`text-xs py-1.5 px-2 rounded border transition-colors text-left ${
                      selectedViews.includes(id)
                        ? 'border-accent bg-accent/20 text-accent'
                        : 'border-border text-text-muted hover:text-text hover:border-accent/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pixel scale */}
            <div>
              <div className="text-xs uppercase tracking-wide text-text-muted mb-2">Pixel Scale</div>
              <div className="grid grid-cols-4 gap-1">
                {PIXEL_SCALES.map(s => (
                  <button
                    key={s}
                    onClick={() => setPixelScale(s)}
                    className={`text-xs py-1 rounded border transition-colors ${
                      pixelScale === s
                        ? 'border-accent bg-accent/20 text-accent'
                        : 'border-border text-text-muted hover:text-text'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            {/* Background */}
            <div>
              <div className="text-xs uppercase tracking-wide text-text-muted mb-2">Background</div>
              <div className="flex flex-col gap-1">
                {[
                  { id: 'transparent', label: 'Transparent' },
                  { id: 'color',       label: 'Color'       },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setBgType(id)}
                    className={`text-xs py-1.5 px-2 rounded border transition-colors text-left ${
                      bgType === id
                        ? 'border-accent bg-accent/20 text-accent'
                        : 'border-border text-text-muted hover:text-text hover:border-accent/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
                {bgType === 'color' && (
                  <input
                    type="color"
                    value={bgColor}
                    onChange={e => setBgColor(e.target.value)}
                    className="w-full h-7 rounded border border-border cursor-pointer mt-0.5"
                  />
                )}
              </div>
            </div>

            {/* Info */}
            <div className="text-xs text-text-muted opacity-50 leading-relaxed">
              {selectedViews.length > 1
                ? `${selectedViews.length} views → spritesheet`
                : `Single view export`}
            </div>
          </div>

          {/* Right: preview */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <div className="text-xs uppercase tracking-wide text-text-muted">Preview</div>
            <div
              className="flex-1 flex items-center justify-center rounded border border-border overflow-hidden"
              style={{
                minHeight: 200,
                background: bgType === 'color'
                  ? bgColor
                  : 'repeating-conic-gradient(#2a2a2a 0% 25%, #1a1a1a 0% 50%) 0 0 / 14px 14px',
              }}
            >
              <canvas
                ref={previewRef}
                style={{
                  imageRendering: 'pixelated',
                  maxWidth:  '100%',
                  maxHeight: 260,
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t border-border">
          <button
            onClick={onClose}
            className="text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            className="btn-brass flex items-center gap-1.5 text-xs px-3 py-1.5"
          >
            <Download size={13} />
            {selectedViews.length > 1 ? 'Export Spritesheet' : 'Export PNG'}
          </button>
        </div>
      </div>
    </div>
  )
}
