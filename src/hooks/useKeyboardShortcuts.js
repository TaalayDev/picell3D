import { useEffect } from 'react'
import { useStore } from '../store/index.js'

export function useKeyboardShortcuts() {
  const { setActiveTool, undo, redo, toggleGrid, toggleDepthOverlay } = useStore()

  useEffect(() => {
    function onKeyDown(e) {
      // Ignore when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') { e.preventDefault(); undo() }
        if (e.key === 'y') { e.preventDefault(); redo() }
        if (e.key === 'Z') { e.preventDefault(); redo() }
        return
      }

      switch (e.key.toLowerCase()) {
        case 'p': setActiveTool('pencil'); break
        case 'e': setActiveTool('eraser'); break
        case 'f': setActiveTool('fill'); break
        case 'd': setActiveTool('depth'); break
        case 'm': setActiveTool('magic-depth'); break
        case 'g': toggleGrid(); break
        case 'h': toggleDepthOverlay(); break
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setActiveTool, undo, redo, toggleGrid, toggleDepthOverlay])
}
