import { useState } from 'react'
import {
  X, Monitor, LayoutTemplate, Pencil, RotateCcw,
  Grid3X3, Tag, Columns2, Square, Box, SlidersHorizontal,
} from 'lucide-react'
import { useStore } from '../../store/index.js'

// ── Primitive controls ────────────────────────────────────────────────────────

function Toggle({ value, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      style={{
        width: 36, height: 20, borderRadius: 10, padding: 2,
        background: value ? 'var(--color-accent)' : 'var(--color-border)',
        transition: 'background .2s', flexShrink: 0, display: 'flex', alignItems: 'center',
      }}
    >
      <div style={{
        width: 16, height: 16, borderRadius: '50%', background: '#fff',
        transform: value ? 'translateX(16px)' : 'translateX(0)',
        transition: 'transform .2s', flexShrink: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,.4)',
      }} />
    </button>
  )
}

function Row({ label, hint, children }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/40">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-text">{label}</span>
        {hint && <span className="text-xs text-text-muted opacity-60">{hint}</span>}
      </div>
      <div className="flex items-center gap-2 ml-4 flex-shrink-0">{children}</div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase tracking-widest text-text-muted mb-1 pb-1">{title}</div>
      {children}
    </div>
  )
}

function NumInput({ value, onChange, min = 1, max = 256, step = 1 }) {
  return (
    <input
      type="number" min={min} max={max} step={step} value={value}
      onChange={e => onChange(Math.max(min, Math.min(max, Number(e.target.value) || min)))}
      className="w-16 text-center text-xs font-mono rounded border border-border text-text bg-transparent outline-none focus:border-accent transition-colors py-1"
    />
  )
}

function SegControl({ options, value, onChange }) {
  return (
    <div className="flex rounded border border-border overflow-hidden">
      {options.map(({ id, Icon, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          title={label}
          className={`flex items-center gap-1 px-2 py-1 text-xs transition-colors ${
            value === id
              ? 'bg-accent/20 text-accent border-r border-border last:border-r-0'
              : 'text-text-muted hover:text-text border-r border-border last:border-r-0'
          }`}
        >
          <Icon size={11} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}

// ── Sections ─────────────────────────────────────────────────────────────────

function DisplaySection() {
  const {
    showGrid, toggleGrid,
    showDepthText, setShowDepthText,
    viewMode, setViewMode,
    pixelSize, setPixelSize,
  } = useStore()

  return (
    <>
      <Section title="Canvas View">
        <Row label="Show grid" hint="Grid lines on the 2D canvas">
          <Toggle value={showGrid} onChange={toggleGrid} />
        </Row>
        <Row label="Depth labels" hint="Show depth offset number on each painted pixel">
          <Toggle value={showDepthText} onChange={setShowDepthText} />
        </Row>
      </Section>

      <Section title="Default Layout">
        <Row label="View mode" hint="Starting layout on app load">
          <SegControl
            value={viewMode}
            onChange={setViewMode}
            options={[
              { id: 'canvas-only',  Icon: Square,   label: '2D'    },
              { id: 'split',        Icon: Columns2, label: 'Split' },
              { id: 'preview-only', Icon: Box,      label: '3D'    },
            ]}
          />
        </Row>
        <Row label="Zoom level" hint={`Current: ${pixelSize}px per cell`}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPixelSize(pixelSize - 2)}
              className="w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm"
            >−</button>
            <span className="text-xs font-mono text-accent w-8 text-center">{pixelSize}</span>
            <button
              onClick={() => setPixelSize(pixelSize + 2)}
              className="w-6 h-6 rounded border border-border text-text-muted hover:text-text hover:border-accent transition-colors text-sm"
            >+</button>
          </div>
        </Row>
      </Section>
    </>
  )
}

function CanvasSection() {
  const {
    canvasWidth, canvasHeight, depthDimension,
    resizeCanvas, setDepthDimension,
  } = useStore()

  const [w, setW] = useState(canvasWidth)
  const [h, setH] = useState(canvasHeight)

  function applySize() {
    if (w !== canvasWidth || h !== canvasHeight) resizeCanvas(w, h)
  }

  const DEPTH_PRESETS = [4, 5, 8, 16, 24, 32]

  return (
    <>
      <Section title="Canvas Size">
        <Row label="Width × Height" hint="Resize the current canvas (content is preserved)">
          <div className="flex items-center gap-1.5">
            <NumInput value={w} onChange={setW} min={4} max={256} />
            <span className="text-text-muted text-xs">×</span>
            <NumInput value={h} onChange={setH} min={4} max={256} />
            <button
              onClick={applySize}
              className="text-xs px-2 py-1 rounded border border-border text-text-muted hover:text-accent hover:border-accent transition-colors"
            >Apply</button>
          </div>
        </Row>
      </Section>

      <Section title="Depth Dimension">
        <Row label="Depth (Z)" hint="Number of voxel layers along the depth axis">
          <div className="flex items-center gap-1 flex-wrap justify-end">
            {DEPTH_PRESETS.map(d => (
              <button
                key={d}
                onClick={() => setDepthDimension(d)}
                className={`text-xs px-1.5 py-0.5 rounded border transition-colors ${
                  depthDimension === d
                    ? 'border-accent bg-accent/20 text-accent'
                    : 'border-border text-text-muted hover:text-text hover:border-accent/50'
                }`}
              >{d}</button>
            ))}
          </div>
        </Row>
        <Row label="" hint="">
          <div className="w-full flex flex-col gap-1" style={{ minWidth: 180 }}>
            <input
              type="range" min={4} max={128} value={depthDimension}
              onChange={e => setDepthDimension(parseInt(e.target.value))}
              className="w-full cursor-pointer"
              style={{ accentColor: 'var(--color-accent)' }}
            />
            <div className="flex justify-between text-xs text-text-muted">
              <span>4</span>
              <span className="text-accent font-mono">{depthDimension}</span>
              <span>128</span>
            </div>
          </div>
        </Row>
      </Section>
    </>
  )
}

function PaintingSection() {
  const {
    paintDepth, setPaintDepth,
    paintDirection, setPaintDirection,
    depthDimension,
  } = useStore()

  const maxDepth = Math.ceil(depthDimension / 2)

  return (
    <>
      <Section title="Brush">
        <Row label="Paint depth" hint="Number of voxel layers painted per stroke from front/back view">
          <div className="flex flex-col gap-1" style={{ minWidth: 180 }}>
            <div className="flex items-center gap-2">
              <input
                type="range" min={1} max={maxDepth} value={paintDepth}
                onChange={e => setPaintDepth(parseInt(e.target.value))}
                className="flex-1 cursor-pointer"
                style={{ accentColor: 'var(--color-accent)' }}
              />
              <span className="text-xs font-mono text-accent w-5 text-right">{paintDepth}</span>
            </div>
          </div>
        </Row>
        <Row label="Paint direction" hint="Which direction from center to extend the brush">
          <SegControl
            value={paintDirection}
            onChange={setPaintDirection}
            options={[
              { id: 'front', Icon: SlidersHorizontal, label: '← Front' },
              { id: 'both',  Icon: SlidersHorizontal, label: '↔ Both'  },
              { id: 'back',  Icon: SlidersHorizontal, label: 'Back →'  },
            ]}
          />
        </Row>
      </Section>
    </>
  )
}

function ResetSection({ onClose }) {
  const { clearCanvas, resizeCanvas, setDepthDimension, setPaintDepth, setPaintDirection,
          setViewMode, setPixelSize, toggleGrid, showGrid, setShowDepthText } = useStore()
  const [confirming, setConfirming] = useState(null)

  function confirm(id, action) {
    if (confirming === id) { action(); setConfirming(null) }
    else setConfirming(id)
  }

  function resetAll() {
    resizeCanvas(32, 32)
    setDepthDimension(5)
    setPaintDepth(1)
    setPaintDirection('both')
    setViewMode('split')
    setPixelSize(14)
    if (!showGrid) toggleGrid()
    setShowDepthText(true)
    setConfirming(null)
  }

  const DangerButton = ({ id, label, sublabel, action }) => (
    <div className="flex items-center justify-between py-3 border-b border-border/40">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-text">{label}</span>
        {sublabel && <span className="text-xs text-text-muted opacity-60">{sublabel}</span>}
      </div>
      <button
        onClick={() => confirm(id, action)}
        className={`text-xs px-3 py-1.5 rounded border transition-colors ${
          confirming === id
            ? 'border-red-500 bg-red-950 text-red-400'
            : 'border-border text-text-muted hover:border-red-700 hover:text-red-400'
        }`}
      >
        {confirming === id ? 'Confirm' : 'Reset'}
      </button>
    </div>
  )

  return (
    <>
      <Section title="Canvas">
        <DangerButton
          id="clear"
          label="Clear canvas"
          sublabel="Erase all painted voxels on the active layer"
          action={clearCanvas}
        />
        <DangerButton
          id="size"
          label="Reset canvas size"
          sublabel="Set canvas back to 32×32×5"
          action={() => { resizeCanvas(32, 32); setDepthDimension(5) }}
        />
      </Section>
      <Section title="Settings">
        <DangerButton
          id="all"
          label="Reset all settings"
          sublabel="Restore display, canvas and painting settings to defaults"
          action={resetAll}
        />
      </Section>
      {confirming && (
        <p className="text-xs text-text-muted opacity-60 mt-1">
          Click the button again to confirm.
          <button onClick={() => setConfirming(null)} className="ml-2 text-accent hover:underline">Cancel</button>
        </p>
      )}
    </>
  )
}

// ── Main dialog ───────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'display',  label: 'Display',  Icon: Monitor        },
  { id: 'canvas',   label: 'Canvas',   Icon: LayoutTemplate },
  { id: 'painting', label: 'Painting', Icon: Pencil         },
  { id: 'reset',    label: 'Reset',    Icon: RotateCcw      },
]

export default function SettingsDialog({ onClose }) {
  const [section, setSection] = useState('display')
  const active = SECTIONS.find(s => s.id === section)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.75)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="flex rounded-xl border border-border shadow-2xl overflow-hidden"
        style={{ width: 580, maxHeight: '85vh', background: 'var(--color-surface)' }}
      >
        {/* Sidebar */}
        <div
          className="flex flex-col flex-shrink-0 py-3"
          style={{ width: 160, background: 'color-mix(in srgb, var(--color-background) 55%, transparent)', borderRight: '1px solid var(--color-border)' }}
        >
          <div className="px-4 pb-3 pt-1">
            <span className="text-xs uppercase tracking-widest font-theme"
              style={{ color: 'var(--color-accent)', opacity: 0.8 }}>Settings</span>
          </div>
          {SECTIONS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className="flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors text-left relative"
              style={{
                color: section === id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                background: section === id ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)' : 'transparent',
                borderRight: section === id ? '2px solid var(--color-accent)' : '2px solid transparent',
              }}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
            style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div className="flex items-center gap-2">
              {active && <active.Icon size={14} className="text-accent" />}
              <span className="text-sm font-theme text-text">{active?.label}</span>
            </div>
            <button onClick={onClose} className="text-text-muted hover:text-text transition-colors">
              <X size={15} />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-5 py-4" style={{ minHeight: 0 }}>
            {section === 'display'  && <DisplaySection />}
            {section === 'canvas'   && <CanvasSection />}
            {section === 'painting' && <PaintingSection />}
            {section === 'reset'    && <ResetSection onClose={onClose} />}
          </div>
        </div>
      </div>
    </div>
  )
}
