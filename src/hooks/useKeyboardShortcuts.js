import { useEffect } from 'react'
import { useStore } from '../store/index.js'

const VIEWS = ['front', 'back', 'left', 'right', 'top', 'bottom']

function triggerProjectSave() {
  const data = useStore.getState().getProjectData()
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = 'project.picell3d'
  a.click()
  URL.revokeObjectURL(url)
}

async function copyCanvasAsPNG() {
  const canvas = document.querySelector('[data-main-canvas]')
  if (!canvas) return
  try {
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
  } catch { /* clipboard access denied in some browsers */ }
}

export function useKeyboardShortcuts() {
  const { setActiveTool, undo, redo, toggleGrid } = useStore()

  useEffect(() => {
    function onKeyDown(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      const s = useStore.getState()

      // ── Ctrl/Meta combos ──
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') { e.preventDefault(); undo(); return }
        if (e.key === 'y') { e.preventDefault(); redo(); return }
        if (e.key === 'Z') { e.preventDefault(); redo(); return }
        if (e.key === 'c' && !e.shiftKey) { e.preventDefault(); s.copySelection(); return }
        if (e.key === 'x') { e.preventDefault(); s.cutSelection();  return }
        if (e.key === 'v') { e.preventDefault(); s.pasteFromClipboard(); return }
        if (e.key === 's') { e.preventDefault(); triggerProjectSave(); return }
        if (e.key === 'C' || (e.key === 'c' && e.shiftKey)) {
          e.preventDefault(); copyCanvasAsPNG(); return
        }
        if (e.key === '0') {
          e.preventDefault()
          document.dispatchEvent(new CustomEvent('picell-zoom-fit'))
          return
        }
        return
      }

      // ── Selection shortcuts ──
      if (e.key === 'Enter') {
        if (s.floatingPaste) { s.commitPaste(); return }
      }
      if (e.key === 'Escape') {
        if (s.floatingPaste) { s.cancelPaste(); return }
        if (s.selection) { s.clearSelection(); return }
      }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (s.floatingPaste || s.selection) {
          e.preventDefault()
          s.deleteSelection()
          return
        }
      }

      // ── Tab: cycle view ──
      if (e.key === 'Tab') {
        e.preventDefault()
        const idx = VIEWS.indexOf(s.activeView)
        s.setActiveView(VIEWS[(idx + 1) % VIEWS.length])
        return
      }

      // ── [ ] — selection depth or paint depth ──
      if (e.key === '[') {
        e.preventDefault()
        if (s.selection || s.floatingPaste) {
          s.shiftSelectionDepth(-1)
        } else {
          s.setPaintDepthEnd(s.paintDepthEnd - 1)
        }
        return
      }
      if (e.key === ']') {
        e.preventDefault()
        if (s.selection || s.floatingPaste) {
          s.shiftSelectionDepth(1)
        } else {
          s.setPaintDepthEnd(s.paintDepthEnd + 1)
        }
        return
      }

      // ── X — toggle 3D Fly Mode ──
      if (e.key.toLowerCase() === 'x' && !e.ctrlKey && !e.metaKey) {
        if (s.viewMode !== 'canvas-only' || s.flyMode) {
          e.preventDefault()
          s.toggleFlyMode()
          return
        }
      }

      // If Fly Mode is active, skip WASD/movement keys from activating 2D tools
      if (s.flyMode) {
        if (['w', 'a', 's', 'd', 'c', 'e', ' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
          return
        }
        if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
          const tools = ['pencil', 'eraser', 'fill', 'blend', 'material', 'eyedropper']
          const idx = parseInt(e.key, 10) - 1
          if (tools[idx]) setActiveTool(tools[idx])
          return
        }
      }

      // ── Contextual brush behavior: number keys never change the active tool ──
      const numberKey = !e.altKey && !e.shiftKey
        ? (/^Digit[1-3]$/.test(e.code) ? Number(e.code.slice(-1))
          : /^[1-3]$/.test(e.key) ? Number(e.key) : null)
        : null
      if (numberKey && s.activeTool === 'pencil') {
        const modes = { 1: 'surface', 2: 'visible', 3: 'through' }
        e.preventDefault()
        s.setPencilMode(modes[numberKey])
        return
      }
      if (numberKey && s.activeTool === 'eraser' && numberKey <= 2) {
        e.preventDefault()
        s.setEraserMode(numberKey === 1 ? 'visible' : 'through')
        return
      }

      // ── ? — shortcuts panel ──
      if (e.key === '?') { s.toggleShortcutsPanel(); return }

      // ── Tool shortcuts ──
      switch (e.key.toLowerCase()) {
        case 'p': setActiveTool('pencil');   break
        case 'e':
          if (e.shiftKey) {
            e.preventDefault()
            s.setEraserMode(s.eraserMode === 'through' ? 'visible' : 'through')
          }
          setActiveTool('eraser')
          break
        case 'f': setActiveTool('fill');     break
        case 'm': setActiveTool('material'); break
        case 's':
          if (s.activeTool === 'select' || e.shiftKey) {
            s.setSelectionMode(s.selectionMode === 'lasso' ? 'rect' : 'lasso')
          } else {
            setActiveTool('select')
          }
          break
        case 'b': setActiveTool('blend');    break
        case 'r': setActiveTool('rect');     break
        case 'c': setActiveTool('circle');   break
        case 'l': setActiveTool('line');     break
        case 'q': setActiveTool('bounds');   break
        case 'a':
          s.setPencilMode('surface')
          setActiveTool('pencil')
          break
        case 'v':
          s.setPencilMode(e.shiftKey ? 'through' : 'visible')
          setActiveTool('pencil')
          break
        case 'g': toggleGrid(); break
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setActiveTool, undo, redo, toggleGrid])
}
