import { useRef, useState, useCallback, useEffect } from 'react'
import {
  X, Image, Box, Download, ChevronRight,
  Sun, Zap, Snowflake, Moon,
} from 'lucide-react'
import { useStore } from '../../store/index.js'
import { useRenderScene, LIGHT_PRESETS, BG_PRESETS } from './useRenderScene.js'
import { downloadVox }    from '../../lib/exportVox.js'
import { downloadObjMtl } from '../../lib/exportObj.js'

// ── Preset icons ──────────────────────────────────────────────────────────────
const PRESET_ICONS = { studio: Sun, warm: Zap, cool: Snowflake, dramatic: Moon }

// ── Stat helpers ──────────────────────────────────────────────────────────────
function countVoxels(layers, W, H, D) {
  let n = 0
  for (const layer of layers)
    if (layer.visible)
      for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++)
          for (let z = 0; z < D; z++)
            if (layer.voxels[y]?.[x]?.[z] && layer.voxels[y][x][z] !== 'transparent') n++
  return n
}

// ── Reusable section label ────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest"
      style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
      {children}
    </div>
  )
}

// ── Export button ─────────────────────────────────────────────────────────────
function ExportBtn({ label, sub, onClick, icon: Icon = Download }) {
  const [busy, setBusy] = useState(false)
  const handle = async () => {
    setBusy(true)
    await onClick()
    setTimeout(() => setBusy(false), 800)
  }
  return (
    <button
      onClick={handle}
      disabled={busy}
      className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors rounded-none hover:bg-white/5 disabled:opacity-50"
    >
      <Icon size={15} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
          {busy ? 'Exporting…' : label}
        </div>
        {sub && <div className="text-xs opacity-50 truncate">{sub}</div>}
      </div>
      <ChevronRight size={12} className="flex-shrink-0 opacity-30" />
    </button>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function RenderPage({ onClose }) {
  const containerRef  = useRef(null)
  const { rebuild, applyPreset, applyBg, exportPng, exportGlb } = useRenderScene(containerRef)

  const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore()

  const [activePreset, setActivePreset] = useState('studio')
  const [customBg,     setCustomBg]     = useState('#111111')
  const [bgMode,       setBgMode]       = useState('dark')

  // Rebuild whenever layers or dimensions change
  useEffect(() => {
    const unsub = useStore.subscribe((s, p) => {
      if (s.layers !== p.layers ||
          s.canvasWidth !== p.canvasWidth ||
          s.canvasHeight !== p.canvasHeight ||
          s.depthDimension !== p.depthDimension) rebuild()
    })
    return unsub
  }, [rebuild])

  const handlePreset = useCallback((key) => {
    setActivePreset(key)
    applyPreset(key)
    // Sync bg input with preset bg color
    const hex = '#' + LIGHT_PRESETS[key].bg.toString(16).padStart(6, '0')
    setCustomBg(hex)
    setBgMode('custom')
  }, [applyPreset])

  const handleBgPreset = (preset) => {
    if (preset.value === null) {
      setBgMode('custom')
    } else {
      setBgMode(preset.label.toLowerCase())
      setCustomBg(preset.value)
      applyBg(preset.value)
    }
  }

  const voxelCount = countVoxels(layers, W, H, D)

  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{
        zIndex: 100,
        background: 'var(--color-background)',
        color: 'var(--color-text)',
      }}
    >
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-3 px-4 py-2 border-b flex-shrink-0"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surfaceAlt)' }}
      >
        <div className="flex items-center gap-2 flex-1">
          <Box size={15} style={{ color: 'var(--color-accent)' }} />
          <span className="font-theme text-sm tracking-wider">Render Studio</span>
          <span className="text-xs opacity-30 ml-1">
            {W} × {H} × {D} · {voxelCount.toLocaleString()} voxels
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1 rounded border text-xs transition-colors"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
        >
          <X size={13} /> Close
        </button>
      </div>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0">

        {/* ── Left panel ─────────────────────────────────────────────── */}
        <div
          className="w-64 flex-shrink-0 border-r flex flex-col overflow-y-auto"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
        >
          {/* Lighting presets */}
          <SectionLabel>Lighting</SectionLabel>
          <div className="grid grid-cols-2 gap-1.5 px-4 pb-2">
            {Object.entries(LIGHT_PRESETS).map(([key, p]) => {
              const Icon = PRESET_ICONS[key] ?? Sun
              return (
                <button
                  key={key}
                  onClick={() => handlePreset(key)}
                  className={`flex flex-col items-center gap-1 py-2 rounded border text-xs transition-all ${
                    activePreset === key
                      ? 'border-accent bg-accent/15 text-accent'
                      : 'border-border text-text-muted hover:border-accent/40 hover:text-text'
                  }`}
                  style={activePreset === key ? { borderColor: 'var(--color-accent)' } : {}}
                >
                  <Icon size={16} />
                  {p.label}
                </button>
              )
            })}
          </div>

          {/* Background */}
          <SectionLabel>Background</SectionLabel>
          <div className="flex flex-wrap gap-1.5 px-4 pb-1">
            {BG_PRESETS.filter(b => b.value !== null).map(b => (
              <button
                key={b.label}
                onClick={() => handleBgPreset(b)}
                className="flex items-center gap-1.5 px-2 py-1 rounded border text-xs transition-colors"
                style={{
                  borderColor: bgMode === b.label.toLowerCase()
                    ? 'var(--color-accent)' : 'var(--color-border)',
                  color: bgMode === b.label.toLowerCase()
                    ? 'var(--color-accent)' : 'var(--color-text-muted)',
                }}
              >
                <span
                  className="inline-block w-3 h-3 rounded-sm border border-white/20"
                  style={{ background: b.value }}
                />
                {b.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 px-4 pb-3 pt-1">
            <span className="text-xs opacity-50">Custom</span>
            <input
              type="color"
              value={customBg}
              onChange={e => { setCustomBg(e.target.value); applyBg(e.target.value); setBgMode('custom') }}
              className="w-8 h-6 rounded cursor-pointer border"
              style={{ borderColor: 'var(--color-border)' }}
            />
            <span className="text-xs font-mono opacity-40">{customBg}</span>
          </div>

          {/* Divider */}
          <div className="border-t mx-4" style={{ borderColor: 'var(--color-border)' }} />

          {/* PNG exports */}
          <SectionLabel>Export Image</SectionLabel>
          <ExportBtn
            label="PNG — 1024 px"
            sub="Quick preview"
            icon={Image}
            onClick={() => exportPng(1024)}
          />
          <ExportBtn
            label="PNG — 2048 px"
            sub="High resolution"
            icon={Image}
            onClick={() => exportPng(2048)}
          />
          <ExportBtn
            label="PNG — 4096 px"
            sub="Print / poster"
            icon={Image}
            onClick={() => exportPng(4096)}
          />

          {/* Divider */}
          <div className="border-t mx-4 mt-1" style={{ borderColor: 'var(--color-border)' }} />

          {/* 3D exports */}
          <SectionLabel>Export 3D</SectionLabel>
          <ExportBtn
            label="OBJ + MTL"
            sub="Blender · Maya · Cinema4D"
            icon={Box}
            onClick={async () => {
              const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
              downloadObjMtl(layers, W, H, D)
            }}
          />
          <ExportBtn
            label="GLB / GLTF"
            sub="Unity · Unreal · Sketchfab"
            icon={Box}
            onClick={exportGlb}
          />
          <ExportBtn
            label="VOX"
            sub="MagicaVoxel · voxel editors"
            icon={Box}
            onClick={async () => {
              const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
              downloadVox(layers, W, H, D)
            }}
          />

          {/* Stats footer */}
          <div className="mt-auto px-4 py-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="text-xs opacity-40 space-y-0.5">
              <div>{voxelCount.toLocaleString()} voxels</div>
              <div>{W} × {H} × {D} (W×H×D)</div>
              <div>{layers.filter(l => l.visible).length} visible layer{layers.filter(l => l.visible).length !== 1 ? 's' : ''}</div>
            </div>
          </div>
        </div>

        {/* ── 3D Viewport ─────────────────────────────────────────────── */}
        <div className="flex-1 relative min-w-0" style={{ background: '#111' }}>
          <div ref={containerRef} className="w-full h-full" />
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs pointer-events-none opacity-40 select-none"
            style={{ color: '#fff' }}
          >
            Drag to orbit · Scroll to zoom · Right-drag to pan
          </div>
        </div>

      </div>
    </div>
  )
}
