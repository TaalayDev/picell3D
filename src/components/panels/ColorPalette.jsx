import { useRef, useState } from 'react'
import { useStore } from '../../store/index.js'

export default function ColorPalette() {
  const {
    palette, currentColor, setCurrentColor,
    recentColors, blendEndColor, setBlendEndColor, activeTool,
  } = useStore()
  const pickerRef    = useRef(null)
  const blendPickRef = useRef(null)
  const [hexInput, setHexInput] = useState('')

  function handleHexCommit(raw) {
    const val = raw.trim().replace(/^#?/, '#')
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      setCurrentColor(val)
      setHexInput('')
    }
  }

  const showBlend = activeTool === 'blend'

  return (
    <div className="flex flex-col gap-2 p-2">
      {/* HEX input */}
      <input
        type="text"
        value={hexInput}
        onChange={e => setHexInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') { handleHexCommit(hexInput); e.stopPropagation() }
          e.stopPropagation()
        }}
        onBlur={() => { if (hexInput) handleHexCommit(hexInput) }}
        placeholder="#rrggbb"
        className="w-full text-xs font-mono px-2 py-1 rounded border outline-none transition-colors"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)',
          caretColor: 'var(--color-accent)',
        }}
      />

      {/* Current / start color swatch */}
      <div className="relative">
        <div className="text-xs text-text-muted mb-1 uppercase tracking-wide">
          {showBlend ? 'Start color' : 'Color'}
        </div>
        <div
          className="w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors"
          style={{ background: currentColor }}
          onClick={() => pickerRef.current?.click()}
          title={`${currentColor} — click to change`}
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

      {/* Blend end color (blend tool only) */}
      {showBlend && (
        <div className="relative">
          <div className="text-xs text-text-muted mb-1 uppercase tracking-wide">End color</div>
          <div
            className="w-full h-8 rounded cursor-pointer border border-border hover:border-accent transition-colors"
            style={{ background: blendEndColor }}
            onClick={() => blendPickRef.current?.click()}
            title={`${blendEndColor} — click to change`}
          />
          <input
            ref={blendPickRef}
            type="color"
            value={blendEndColor}
            onChange={e => setBlendEndColor(e.target.value)}
            className="absolute opacity-0 w-0 h-0 pointer-events-none"
            tabIndex={-1}
          />
        </div>
      )}

      {/* Recent colors */}
      {recentColors.length > 0 && (
        <div>
          <div className="text-xs text-text-muted mb-1 uppercase tracking-wide">Recent</div>
          <div className="flex flex-wrap gap-1">
            {recentColors.map((color, i) => (
              <button
                key={i}
                title={color}
                className="rounded border transition-all hover:scale-110"
                style={{
                  width: 18, height: 18,
                  background: color,
                  borderColor: currentColor === color ? '#e8a820' : '#7a5c2e',
                  boxShadow:   currentColor === color ? '0 0 5px #c8860a' : 'none',
                }}
                onClick={() => setCurrentColor(color)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Palette grid */}
      <div className="grid grid-cols-4 gap-1">
        {palette.map((color, i) => (
          <button
            key={i}
            title={color}
            className="w-full aspect-square rounded border transition-all duration-100 hover:scale-110"
            style={{
              background:  color,
              borderColor: currentColor === color ? '#e8a820' : '#7a5c2e',
              boxShadow:   currentColor === color ? '0 0 6px #c8860a' : 'none',
              outline:     currentColor === color ? '1px solid #e8a820' : 'none',
            }}
            onClick={() => setCurrentColor(color)}
          />
        ))}
      </div>

      {/* Add custom color */}
      <button className="btn-brass w-full text-xs py-1" onClick={() => pickerRef.current?.click()}>
        + Custom
      </button>
    </div>
  )
}
