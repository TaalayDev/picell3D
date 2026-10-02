import { useCallback, useRef, useState } from 'react'
import { getViewSize, projectEditBoundsToView, useStore } from '../store/index.js'

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

function normalizeRect(rect, w, h) {
  return {
    x1: clamp(Math.min(rect.x1, rect.x2), 0, w - 1),
    x2: clamp(Math.max(rect.x1, rect.x2), 0, w - 1),
    y1: clamp(Math.min(rect.y1, rect.y2), 0, h - 1),
    y2: clamp(Math.max(rect.y1, rect.y2), 0, h - 1),
  }
}

function moveRect(rect, dx, dy, w, h) {
  const width = rect.x2 - rect.x1
  const height = rect.y2 - rect.y1
  const x1 = clamp(rect.x1 + dx, 0, w - width - 1)
  const y1 = clamp(rect.y1 + dy, 0, h - height - 1)
  return { x1, y1, x2: x1 + width, y2: y1 + height }
}

function resizeWithAspect(rect, handle, ratio, fromCenter) {
  let width = Math.max(1, Math.abs(rect.x2 - rect.x1) + 1)
  let height = Math.max(1, Math.abs(rect.y2 - rect.y1) + 1)
  if (width / height > ratio) height = Math.max(1, Math.round(width / ratio))
  else width = Math.max(1, Math.round(height * ratio))
  const result = {
    x1: Math.min(rect.x1, rect.x2), x2: Math.max(rect.x1, rect.x2),
    y1: Math.min(rect.y1, rect.y2), y2: Math.max(rect.y1, rect.y2),
  }
  const horizontal = handle.includes('w') ? 'w' : handle.includes('e') ? 'e' : null
  const vertical = handle.includes('n') ? 'n' : handle.includes('s') ? 's' : null
  const centerX = (result.x1 + result.x2) / 2
  const centerY = (result.y1 + result.y2) / 2
  if (fromCenter || !horizontal) {
    result.x1 = Math.round(centerX - (width - 1) / 2)
    result.x2 = result.x1 + width - 1
  } else if (horizontal === 'w') result.x1 = result.x2 - width + 1
  else result.x2 = result.x1 + width - 1
  if (fromCenter || !vertical) {
    result.y1 = Math.round(centerY - (height - 1) / 2)
    result.y2 = result.y1 + height - 1
  } else if (vertical === 'n') result.y1 = result.y2 - height + 1
  else result.y2 = result.y1 + height - 1
  return result
}

function hitTestBounds(px, py, rect, pixelSize) {
  const left = rect.x1 * pixelSize
  const top = rect.y1 * pixelSize
  const right = (rect.x2 + 1) * pixelSize
  const bottom = (rect.y2 + 1) * pixelSize
  const tolerance = Math.max(6, Math.min(12, pixelSize * 0.7))
  const nearLeft = Math.abs(px - left) <= tolerance
  const nearRight = Math.abs(px - right) <= tolerance
  const nearTop = Math.abs(py - top) <= tolerance
  const nearBottom = Math.abs(py - bottom) <= tolerance
  const withinX = px >= left - tolerance && px <= right + tolerance
  const withinY = py >= top - tolerance && py <= bottom + tolerance
  if (nearLeft && nearTop) return 'nw'
  if (nearRight && nearTop) return 'ne'
  if (nearRight && nearBottom) return 'se'
  if (nearLeft && nearBottom) return 'sw'
  if (nearTop && withinX) return 'n'
  if (nearRight && withinY) return 'e'
  if (nearBottom && withinX) return 's'
  if (nearLeft && withinY) return 'w'
  if (px > left && px < right && py > top && py < bottom) return 'move'
  return 'create'
}

export function useEditBoundsInput(containerRef) {
  const drag = useRef(null)
  const [hoverHandle, setHoverHandle] = useState(null)

  const getPointer = useCallback((event) => {
    const state = useStore.getState()
    const rect = containerRef.current.getBoundingClientRect()
    const { w, h } = getViewSize(state.activeView, state.canvasWidth, state.canvasHeight, state.depthDimension)
    const px = event.clientX - rect.left
    const py = event.clientY - rect.top
    const gx = px / state.pixelSize
    const gy = py / state.pixelSize
    return {
      px, py, gx, gy, w, h,
      col: clamp(Math.floor(gx), 0, w - 1),
      row: clamp(Math.floor(gy), 0, h - 1),
    }
  }, [containerRef])

  const update = useCallback((point, event) => {
    const current = drag.current
    if (!current) return
    const { handle, start, startRect, ratio } = current
    let next
    if (handle === 'move') {
      next = moveRect(startRect, point.col - start.col, point.row - start.row, point.w, point.h)
    } else if (handle === 'create') {
      next = { x1: start.col, y1: start.row, x2: point.col, y2: point.row }
      if (event.altKey) {
        next.x1 = start.col - (point.col - start.col)
        next.y1 = start.row - (point.row - start.row)
      }
      if (event.shiftKey) next = resizeWithAspect(next, 'se', 1, event.altKey)
    } else {
      next = { ...startRect }
      const west = handle.includes('w'), east = handle.includes('e')
      const north = handle.includes('n'), south = handle.includes('s')
      if (west) next.x1 = Math.round(point.gx)
      if (east) next.x2 = Math.round(point.gx) - 1
      if (north) next.y1 = Math.round(point.gy)
      if (south) next.y2 = Math.round(point.gy) - 1
      if (event.altKey) {
        if (west) next.x2 = startRect.x2 + (startRect.x1 - next.x1)
        if (east) next.x1 = startRect.x1 - (next.x2 - startRect.x2)
        if (north) next.y2 = startRect.y2 + (startRect.y1 - next.y1)
        if (south) next.y1 = startRect.y1 - (next.y2 - startRect.y2)
      }
      if (event.shiftKey) next = resizeWithAspect(next, handle, ratio, event.altKey)
    }
    useStore.getState().setEditBoundsFromView(current.view, normalizeRect(next, point.w, point.h))
  }, [])

  const onPointerDown = useCallback((event) => {
    if (event.button !== 0) return
    const state = useStore.getState()
    const point = getPointer(event)
    const startRect = projectEditBoundsToView(state.editBounds, state.activeView, state.canvasWidth, state.canvasHeight, state.depthDimension)
    const handle = state.editBoundsEnabled ? hitTestBounds(point.px, point.py, startRect, state.pixelSize) : 'create'
    state.pushUndo()
    drag.current = {
      handle, start: point, startRect, view: state.activeView,
      ratio: (startRect.x2 - startRect.x1 + 1) / (startRect.y2 - startRect.y1 + 1),
    }
    setHoverHandle(handle)
    try { containerRef.current?.setPointerCapture(event.pointerId) } catch {}
    update(point, event)
  }, [containerRef, getPointer, update])

  const onPointerMove = useCallback((event) => {
    const point = getPointer(event)
    if (drag.current) return update(point, event)
    const state = useStore.getState()
    if (!state.editBoundsEnabled) return setHoverHandle('create')
    const rect = projectEditBoundsToView(state.editBounds, state.activeView, state.canvasWidth, state.canvasHeight, state.depthDimension)
    setHoverHandle(hitTestBounds(point.px, point.py, rect, state.pixelSize))
  }, [getPointer, update])

  const onPointerUp = useCallback((event) => {
    if (!drag.current) return
    update(getPointer(event), event)
    drag.current = null
    try { containerRef.current?.releasePointerCapture(event.pointerId) } catch {}
  }, [containerRef, getPointer, update])

  return { onPointerDown, onPointerMove, onPointerUp, hoverHandle }
}
