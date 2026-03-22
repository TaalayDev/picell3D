import { useRef, useEffect } from 'react'
import { useThreeScene } from './useThreeScene.js'

export default function Preview3D({ onExport }) {
  const containerRef = useRef(null)
  const { exportPng } = useThreeScene(containerRef)

  useEffect(() => {
    if (onExport) onExport.current = exportPng
  }, [onExport, exportPng])

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-text-muted pointer-events-none opacity-60 whitespace-nowrap">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  )
}
