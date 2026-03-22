import { useRef } from 'react'
import { useStore } from '../../store/index.js'

export default function ColorPalette() {
  const { palette, currentColor, setCurrentColor, addToPalette } = useStore()
  const pickerRef = useRef(null)

  return (
    <div className="flex flex-col gap-2 p-2">
      {/* Current color swatch */}
      <div className="relative">
        <div className="text-xs text-text-muted mb-1 uppercase tracking-wide">Color</div>
        <div
          className="w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors"
          style={{ background: currentColor }}
          onClick={() => pickerRef.current?.click()}
          title="Click to open color picker"
        />
        <input
          ref={pickerRef}
          type="color"
          value={currentColor === 'transparent' ? '#000000' : currentColor}
          onChange={e => setCurrentColor(e.target.value)}
          className="absolute opacity-0 w-0 h-0 pointer-events-none"
          tabIndex={-1}
        />
      </div>

      {/* Palette grid */}
      <div className="grid grid-cols-4 gap-1">
        {palette.map((color, i) => (
          <button
            key={i}
            className="w-full aspect-square rounded border transition-all duration-100 hover:scale-110"
            style={{
              background: color,
              borderColor: currentColor === color ? '#e8a820' : '#7a5c2e',
              boxShadow: currentColor === color ? '0 0 6px #c8860a' : 'none',
              outline: currentColor === color ? '1px solid #e8a820' : 'none',
            }}
            onClick={() => setCurrentColor(color)}
            title={color}
          />
        ))}
      </div>

      {/* Add custom color */}
      <button
        className="btn-brass w-full text-xs py-1"
        onClick={() => pickerRef.current?.click()}
      >
        + Custom
      </button>
    </div>
  )
}
