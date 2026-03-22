import { useEffect, useRef } from 'react'
import { useStore } from './store/index.js'
import { getTheme, applyTheme } from './themes/index.js'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts.js'

import Toolbar from './components/layout/Toolbar.jsx'
import StatusBar from './components/layout/StatusBar.jsx'
import PixelCanvas from './components/canvas/PixelCanvas.jsx'
import Preview3D from './components/preview/Preview3D.jsx'
import ColorPalette from './components/panels/ColorPalette.jsx'
import DepthLayersPanel from './components/panels/DepthLayersPanel.jsx'
import PropertiesPanel from './components/panels/PropertiesPanel.jsx'

export default function App() {
  const activeTheme = useStore(s => s.activeTheme)
  const viewMode = useStore(s => s.viewMode)
  const exportFn = useRef(null)

  useKeyboardShortcuts()

  useEffect(() => {
    applyTheme(getTheme(activeTheme))
  }, [activeTheme])

  const theme = getTheme(activeTheme)
  const PainterBg = theme.PainterBackground

  const showCanvas = viewMode !== 'preview-only'
  const showPreview = viewMode !== 'canvas-only'

  return (
    <div className="relative flex flex-col w-full h-screen overflow-hidden font-theme"
      style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>

      <PainterBg />

      <div className="relative flex flex-col w-full h-full" style={{ zIndex: 10 }}>

        <Toolbar onExport={() => exportFn.current?.()} />

        <div className="flex flex-1 min-h-0">

          {/* Left sidebar — color palette */}
          {showCanvas && (
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
            <div className="flex-1 min-w-0 overflow-hidden relative"
              style={{
                background: 'color-mix(in srgb, var(--color-background) 80%, transparent)',
                borderRight: showPreview ? '1px solid var(--color-border)' : 'none',
              }}>
              <PixelCanvas />
            </div>
          )}

          {/* 3D Preview pane */}
          {showPreview && (
            <div className="flex-1 min-w-0 relative overflow-hidden"
              style={{ background: 'color-mix(in srgb, var(--color-background) 95%, transparent)' }}>
              <div className="absolute top-2 left-3 text-xs text-text-muted opacity-40 pointer-events-none z-10 uppercase tracking-widest">
                3D Preview
              </div>
              <Preview3D onExport={exportFn} />
            </div>
          )}

          {/* Right sidebar — depth layers + properties */}
          <div className="flex flex-col w-52 border-l border-border flex-shrink-0"
            style={{ background: 'color-mix(in srgb, var(--color-surface) 95%, transparent)' }}>
            <div className="flex-1 min-h-0 overflow-hidden border-b border-border" style={{ maxHeight: '55%' }}>
              <DepthLayersPanel />
            </div>
            <div className="flex-shrink-0">
              <div className="px-2 py-1 border-b border-border text-xs uppercase tracking-wide text-text-muted">
                Properties
              </div>
              <PropertiesPanel />
            </div>
          </div>
        </div>

        <StatusBar />
      </div>
    </div>
  )
}
