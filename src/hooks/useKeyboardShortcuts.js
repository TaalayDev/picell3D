import { useEffect } from 'react'
import { useStore } from '../store/index.js'

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
        if (e.key === 'c') { e.preventDefault(); s.copySelection(); return }
        if (e.key === 'x') { e.preventDefault(); s.cutSelection();  return }
        if (e.key === 'v') { e.preventDefault(); s.pasteFromClipboard(); return }
        if (e.key === 's') { e.preventDefault(); triggerProjectSave(); return }
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
        if (s.selection) { e.preventDefault(); s.deleteSelection(); return }
      }

      // ── Tool shortcuts ──
      switch (e.key.toLowerCase()) {
        case 'p': setActiveTool('pencil');   break
        case 'e': setActiveTool('eraser');   break
        case 'f': setActiveTool('fill');     break
        case 'm': setActiveTool('material'); break
        case 's': setActiveTool('select');   break
        case 'r': setActiveTool('rect');     break
        case 'c': setActiveTool('circle');   break
        case 'l': setActiveTool('line');     break
        case 'g': toggleGrid(); break
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setActiveTool, undo, redo, toggleGrid])
}
