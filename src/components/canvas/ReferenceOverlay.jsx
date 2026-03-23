import { useRef } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'
import { useStore } from '../../store/index.js'

export default function ReferenceOverlay({ pixelSize }) {
  const { referenceImage, setReferenceImage, clearReferenceImage } = useStore()
  const dragRef = useRef(null)

  if (!referenceImage) return null

  const { src, x, y, width, height, opacity } = referenceImage

  const px = x      * pixelSize
  const py = y      * pixelSize
  const pw = width  * pixelSize
  const ph = height * pixelSize

  function startMove(e) {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = { mode: 'move', sx: e.clientX, sy: e.clientY, ox: x, oy: y }
  }

  function startResize(e, corner) {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = { mode: 'resize', corner, sx: e.clientX, sy: e.clientY, ox: x, oy: y, ow: width, oh: height }
  }

  function onMove(e) {
    if (!dragRef.current) return
    const dx = (e.clientX - dragRef.current.sx) / pixelSize
    const dy = (e.clientY - dragRef.current.sy) / pixelSize
    const d  = dragRef.current

    if (d.mode === 'move') {
      setReferenceImage({ ...referenceImage, x: d.ox + dx, y: d.oy + dy })
      return
    }

    const asp = d.ow / d.oh
    let nw = d.ow, nh = d.oh, nx = d.ox, ny = d.oy

    if (d.corner === 'br') {
      nw = Math.max(2, d.ow + dx); nh = nw / asp
    } else if (d.corner === 'bl') {
      nw = Math.max(2, d.ow - dx); nh = nw / asp; nx = d.ox + d.ow - nw
    } else if (d.corner === 'tr') {
      nw = Math.max(2, d.ow + dx); nh = nw / asp; ny = d.oy + d.oh - nh
    } else if (d.corner === 'tl') {
      nw = Math.max(2, d.ow - dx); nh = nw / asp; nx = d.ox + d.ow - nw; ny = d.oy + d.oh - nh
    }
    setReferenceImage({ ...referenceImage, x: nx, y: ny, width: nw, height: nh })
  }

  function onUp() { dragRef.current = null }

  const handle = {
    position: 'absolute', width: 10, height: 10,
    background: 'var(--color-accent)', border: '2px solid #fff',
    borderRadius: 2, zIndex: 2,
  }

  const corners = [
    { id: 'tl', style: { top: -5,  left:  -5, cursor: 'nwse-resize' } },
    { id: 'tr', style: { top: -5,  right: -5, cursor: 'nesw-resize' } },
    { id: 'bl', style: { bottom: -5, left: -5, cursor: 'nesw-resize' } },
    { id: 'br', style: { bottom: -5, right: -5, cursor: 'nwse-resize' } },
  ]

  return (
    <div
      style={{ position: 'absolute', left: px, top: py, width: pw, height: ph, zIndex: 12, touchAction: 'none' }}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
    >
      {/* The image */}
      <img
        src={src}
        draggable={false}
        onPointerDown={startMove}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          opacity, objectFit: 'fill', cursor: 'move', userSelect: 'none',
          imageRendering: 'pixelated', display: 'block',
        }}
      />

      {/* Dashed border */}
      <div style={{
        position: 'absolute', inset: 0,
        border: '1px dashed var(--color-accent)',
        opacity: 0.7, pointerEvents: 'none',
      }} />

      {/* Corner resize handles */}
      {corners.map(({ id, style }) => (
        <div
          key={id}
          style={{ ...handle, ...style }}
          onPointerDown={e => startResize(e, id)}
        />
      ))}

      {/* Controls bar above the image */}
      <div
        style={{
          position: 'absolute', top: -30, left: 0,
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'color-mix(in srgb, var(--color-surface) 95%, transparent)',
          border: '1px solid var(--color-border)', borderRadius: 4,
          padding: '3px 8px', whiteSpace: 'nowrap',
          fontSize: 10, color: 'var(--color-text-muted)',
        }}
        onPointerDown={e => e.stopPropagation()}
      >
        <SlidersHorizontal size={9} style={{ flexShrink: 0 }} />
        <input
          type="range" min={5} max={90}
          value={Math.round(opacity * 100)}
          onChange={e => setReferenceImage({ ...referenceImage, opacity: e.target.value / 100 })}
          style={{ width: 72, accentColor: 'var(--color-accent)', cursor: 'pointer' }}
          title="Opacity"
        />
        <span style={{ fontFamily: 'monospace', color: 'var(--color-accent)', minWidth: 28 }}>
          {Math.round(opacity * 100)}%
        </span>
        <button
          onClick={clearReferenceImage}
          title="Remove reference"
          style={{ color: 'var(--color-text-muted)', lineHeight: 1, padding: '0 2px' }}
          className="hover:text-red-400"
        >
          <X size={11} />
        </button>
      </div>
    </div>
  )
}
