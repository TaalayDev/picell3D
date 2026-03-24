import { useEffect, useRef, useState } from 'react'
import { Monitor, RotateCw, PanelLeft, PanelRight, PanelTop, PanelBottom, X } from 'lucide-react'
import { useStore } from './store/index.js'
import { getTheme, applyTheme } from './themes/index.js'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts.js'

import Toolbar          from './components/layout/Toolbar.jsx'
import StatusBar        from './components/layout/StatusBar.jsx'
import PixelCanvas      from './components/canvas/PixelCanvas.jsx'
import Preview3D        from './components/preview/Preview3D.jsx'
import ColorPalette     from './components/panels/ColorPalette.jsx'
import VoxelOptionsPanel from './components/panels/VoxelOptionsPanel.jsx'
import LayersPanel       from './components/panels/LayersPanel.jsx'
import RenderPage        from './components/render/RenderPage.jsx'

const VIEWS = [
  { id: 'front',  Icon: Monitor,     label: 'Front'  },
  { id: 'back',   Icon: RotateCw,    label: 'Back'   },
  { id: 'left',   Icon: PanelLeft,   label: 'Left'   },
  { id: 'right',  Icon: PanelRight,  label: 'Right'  },
  { id: 'top',    Icon: PanelTop,    label: 'Top'    },
  { id: 'bottom', Icon: PanelBottom, label: 'Bottom' },
]

export default function App() {
  const activeTheme = useStore(s => s.activeTheme)
  const viewMode    = useStore(s => s.viewMode)
  const setViewMode = useStore(s => s.setViewMode)
  const exportFn    = useRef(null)
  const [renderOpen, setRenderOpen] = useState(false)

  useKeyboardShortcuts()

  useEffect(() => {
    applyTheme(getTheme(activeTheme))
  }, [activeTheme])

  const theme     = getTheme(activeTheme)
  const PainterBg = theme.PainterBackground

  const showCanvas   = viewMode !== 'preview-only'
  const showPreview  = viewMode !== 'canvas-only'
  const showPalette  = viewMode !== 'canvas-only'  // show palette in split AND 3D-only
  const is3DEditMode = viewMode === 'preview-only'
  const closeCanvas = () => {
    if (showPreview) setViewMode('preview-only')
  }
  const closePreview = () => {
    if (showCanvas) setViewMode('canvas-only')
  }

  return (
    <div className="relative flex flex-col w-full h-screen overflow-hidden font-theme"
      style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>

      <PainterBg />

      <div className="relative flex flex-col w-full h-full" style={{ zIndex: 10 }}>

        <Toolbar onExport={() => exportFn.current?.()} onRender={() => setRenderOpen(true)} />

        <div className="flex flex-1 min-h-0">

          {/* Left sidebar — color palette */}
          {showPalette && (
            <div className="flex flex-col w-28 border-r border-border flex-shrink-0 overflow-y-auto"
              style={{ background: 'color-mix(in srgb, var(--color-surface) 90%, transparent)' }}>
              <div className="px-2 pt-2 pb-1 text-xs uppercase tracking-wide text-text-muted border-b border-border">
                Palette
              </div>
              <ColorPalette />
            </div>
          )}

          {/* 2D Canvas pane */}
          {showCanvas && (
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden"
              style={{ borderRight: showPreview ? '1px solid var(--color-border)' : 'none' }}>
              <ViewTabs closable={showPreview} onClose={closeCanvas} />
              <div className="flex-1 min-h-0 overflow-hidden relative"
                style={{ background: 'color-mix(in srgb, var(--color-background) 80%, transparent)' }}>
                <PixelCanvas />
              </div>
            </div>
          )}

          {/* 3D Preview pane */}
          {showPreview && (
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden"
              style={{ background: 'color-mix(in srgb, var(--color-background) 95%, transparent)' }}>
              <div className="flex items-center justify-between gap-2 px-3 py-1.5 border-b border-border flex-shrink-0"
                style={{ background: 'color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)', minHeight: 32 }}>
                <div className="text-xs text-text-muted opacity-60 uppercase tracking-widest">
                  {is3DEditMode ? '3D Edit Mode' : '3D Preview'}
                </div>
                {showCanvas && (
                  <ClosePaneButton label="Close 3D preview" onClick={closePreview} />
                )}
              </div>
              <div className="flex-1 min-h-0 relative overflow-hidden">
                <Preview3D onExport={exportFn} />
              </div>
            </div>
          )}

          {/* Right sidebar — layers + voxel options */}
          <div className="flex flex-col w-52 border-l border-border flex-shrink-0 overflow-y-auto"
            style={{ background: 'color-mix(in srgb, var(--color-surface) 95%, transparent)' }}>
            <LayersPanel />
            <div className="border-t border-border" />
            <VoxelOptionsPanel />
          </div>

        </div>

        <StatusBar />
      </div>

      {renderOpen && <RenderPage onClose={() => setRenderOpen(false)} />}
    </div>
  )
}

// ── View tab bar ──────────────────────────────────────────────────────────────

function ViewTabs({ closable, onClose }) {
  const { activeView, setActiveView } = useStore()

  return (
    <div className="flex items-center gap-1 px-2 py-1 border-b border-border flex-shrink-0 flex-wrap"
      style={{ background: 'color-mix(in srgb, var(--color-surfaceAlt) 95%, transparent)', minHeight: 32 }}>
      {VIEWS.map(({ id, Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveView(id)}
          className={`flex items-center gap-1 px-2 py-0.5 rounded border text-xs transition-colors ${
            activeView === id
              ? 'border-accent bg-accent/20 text-accent'
              : 'border-border text-text-muted hover:text-text hover:border-accent/40'
          }`}
        >
          <Icon size={11} />
          {label}
        </button>
      ))}
      {closable && (
        <div className="ml-auto">
          <ClosePaneButton label="Close 2D canvas" onClick={onClose} />
        </div>
      )}
    </div>
  )
}

function ClosePaneButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-7 h-7 rounded flex items-center justify-center border border-border text-text-muted hover:text-text hover:border-accent/50 hover:bg-surface transition-colors"
      title={label}
      aria-label={label}
    >
      <X size={14} />
    </button>
  )
}
