/**
 * Return evenly spaced pointer positions between two events, including the end.
 * Sampling in screen space keeps strokes attached to the visible model surface,
 * including when the cursor crosses an edge onto another face.
 */
export function samplePointerSegment(from, to, spacing = 2, maxSteps = 256) {
  if (!from) return [{ x: to.x, y: to.y }]
  const dx = to.x - from.x
  const dy = to.y - from.y
  const distance = Math.hypot(dx, dy)
  const steps = Math.max(1, Math.min(maxSteps, Math.ceil(distance / Math.max(0.5, spacing))))
  const points = []
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    points.push({ x: from.x + dx * t, y: from.y + dy * t })
  }
  return points
}
