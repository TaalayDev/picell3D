import { useState, useRef } from 'react'
import { Upload, Layers, ImageIcon } from 'lucide-react'
import { useStore } from '../../store/index.js'
import { imageToPixelGrid, loadImageMeta } from '../../lib/imageImport.js'

const SCALE_MODES = [
  { id: 'fit',     label: 'Fit'     },
  { id: 'fill',    label: 'Fill'    },
  { id: 'stretch', label: 'Stretch' },
]

export default function ImportDialog({ onClose }) {
  const { canvasWidth: W, canvasHeight: H, depthDimension: D, setReferenceImage } = useStore()

  const [tab,       setTab]       = useState('pixelart')
  const [preview,   setPreview]   = useState(null)   // { src, naturalWidth, naturalHeight }
  const [file,      setFile]      = useState(null)
  const [scaleMode, setScaleMode] = useState('fit')
  const [opacity,   setOpacity]   = useState(40)     // 0–100 integer
  const [loading,   setLoading]   = useState(false)
  const inputRef = useRef(null)

  async function handleFile(f) {
    if (!f) return
    setFile(f)
    try {
      const meta = await loadImageMeta(f)
      setPreview(meta)
    } catch { /* ignore */ }
  }

  async function importAsPixelArt() {
    if (!file) return
    setLoading(true)
    try {
      const grid = await imageToPixelGrid(file, W, H, scaleMode)
      const { layers, activeLayerId, depthDimension: D } = useStore.getState()
      const layerIdx = layers.findIndex(l => l.id === activeLayerId)
      if (layerIdx < 0) return
      const zCenter = Math.floor(D / 2)
      const layer   = layers[layerIdx]

      useStore.getState().pushUndo()

      const newVoxels = layer.voxels.map((plane, y) =>
        plane.map((xRow, x) => {
          const color = grid[y]?.[x]
          if (!color) return xRow
          const row = [...xRow]
          row[zCenter] = color
          return row
        })
      )
      const newLayers = [...layers]
      newLayers[layerIdx] = { ...layer, voxels: newVoxels }
      useStore.setState({ layers: newLayers })
      onClose()
    } finally {
      setLoading(false)
    }
  }

  function importAsReference() {
    if (!preview) return
    const aspect = preview.naturalWidth / preview.naturalHeight
    const refH = H
    const refW = Math.min(W, refH * aspect)
    setReferenceImage({
      src:     preview.src,
      x:       (W - refW) / 2,
      y:       0,
      width:   refW,
      height:  refH,
      opacity: opacity / 100,
    })
    onClose()
  }

  const zCenter = Math.floor(D / 2)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.75)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="w-96 rounded-lg border border-border shadow-2xl overflow-hidden"
        style={{ background: 'var(--color-surface)' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="text-sm font-theme text-text">Import Image</span>
          <button onClick={onClose} className="text-text-muted hover:text-text text-xl leading-none">×</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {[
            { id: 'pixelart',  Icon: Layers,    label: 'Pixel Art'  },
            { id: 'reference', Icon: ImageIcon, label: 'Reference'  },
          ].map(({ id, Icon, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs border-b-2 transition-colors ${
                tab === id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-muted hover:text-text'
              }`}
            >
              <Icon size={11} /> {label}
            </button>
          ))}
        </div>

        <div className="p-4 flex flex-col gap-4">

          {/* Drop zone / preview */}
          <div
            className="flex flex-col items-center justify-center rounded border-2 border-dashed cursor-pointer transition-colors"
            style={{
              borderColor: preview ? 'var(--color-accent)' : 'var(--color-border)',
              background:  'color-mix(in srgb, var(--color-background) 70%, transparent)',
              minHeight:   120,
            }}
            onClick={() => inputRef.current?.click()}
          >
            {preview ? (
              <img
                src={preview.src}
                alt="preview"
                className="max-h-28 max-w-full object-contain rounded"
                style={{ imageRendering: 'pixelated' }}
              />
            ) : (
              <>
                <Upload size={22} className="text-text-muted mb-2" />
                <span className="text-xs text-text-muted">Click to select image</span>
                <span className="text-xs text-text-muted opacity-50 mt-0.5">PNG · JPG · GIF · WebP</span>
              </>
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => handleFile(e.target.files?.[0])}
            />
          </div>

          {/* Pixel art options */}
          {tab === 'pixelart' && (
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs text-text-muted uppercase tracking-wide mb-1.5 block">Scale Mode</label>
                <div className="grid grid-cols-3 gap-1">
                  {SCALE_MODES.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setScaleMode(id)}
                      className={`text-xs py-1 rounded border transition-colors ${
                        scaleMode === id
                          ? 'border-accent bg-accent/20 text-accent'
                          : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-text-muted opacity-60 leading-relaxed">
                Painted onto active layer at depth center (z={zCenter}). Canvas: {W}×{H}.
              </p>
            </div>
          )}

          {/* Reference options */}
          {tab === 'reference' && (
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs text-text-muted uppercase tracking-wide">Opacity</label>
                  <span className="text-xs font-mono text-accent">{opacity}%</span>
                </div>
                <input
                  type="range" min={5} max={90} value={opacity}
                  onChange={e => setOpacity(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{ accentColor: 'var(--color-accent)' }}
                />
              </div>
              <p className="text-xs text-text-muted opacity-60 leading-relaxed">
                Overlay on the canvas. Drag to reposition, drag corners to resize.
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2 justify-end pt-1">
            <button
              onClick={onClose}
              className="text-xs px-3 py-1.5 rounded border border-border text-text-muted hover:text-text transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={tab === 'pixelart' ? importAsPixelArt : importAsReference}
              disabled={!preview || loading}
              className="btn-brass text-xs px-3 py-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Importing…' : 'Import'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
