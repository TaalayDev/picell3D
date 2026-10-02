/**
 * Rasterizes a lasso polygon into a bounding box and a 2D boolean mask.
 * 
 * @param {Array<{col: number, row: number}>} polygon - Freehand path points
 * @param {number} [maxW] - Optional maximum canvas width for clamping
 * @param {number} [maxH] - Optional maximum canvas height for clamping
 * @returns {{x1: number, y1: number, x2: number, y2: number, mask: boolean[][], type: 'lasso'} | null}
 */
export function rasterizeLasso(polygon, maxW, maxH) {
  if (!polygon || polygon.length === 0) return null

  // Clamp helper
  const clampCol = (c) => maxW !== undefined ? Math.max(0, Math.min(maxW - 1, c)) : c
  const clampRow = (r) => maxH !== undefined ? Math.max(0, Math.min(maxH - 1, r)) : r

  const clampedPoly = polygon.map(p => ({
    col: clampCol(Math.round(p.col)),
    row: clampRow(Math.round(p.row)),
  }))

  // Single point selection
  if (clampedPoly.length === 1) {
    const p = clampedPoly[0]
    return {
      x1: p.col,
      y1: p.row,
      x2: p.col,
      y2: p.row,
      mask: [[true]],
      type: 'lasso',
    }
  }

  // Collect boundary pixels using Bresenham's line algorithm
  const boundarySet = new Set()

  function drawLine(x0, y0, x1, y1) {
    let dx = Math.abs(x1 - x0)
    let sx = x0 < x1 ? 1 : -1
    let dy = -Math.abs(y1 - y0)
    let sy = y0 < y1 ? 1 : -1
    let err = dx + dy
    let cx = x0
    let cy = y0

    while (true) {
      boundarySet.add(`${cx},${cy}`)
      if (cx === x1 && cy === y1) break
      const e2 = 2 * err
      if (e2 >= dy) { err += dy; cx += sx }
      if (e2 <= dx) { err += dx; cy += sy }
    }
  }

  const len = clampedPoly.length
  for (let i = 0; i < len; i++) {
    const p0 = clampedPoly[i]
    const p1 = clampedPoly[(i + 1) % len]
    drawLine(p0.col, p0.row, p1.col, p1.row)
  }

  // Find coarse bounding box of polygon and boundary
  let coarseMinX = Infinity, coarseMaxX = -Infinity
  let coarseMinY = Infinity, coarseMaxY = -Infinity

  for (const p of clampedPoly) {
    if (p.col < coarseMinX) coarseMinX = p.col
    if (p.col > coarseMaxX) coarseMaxX = p.col
    if (p.row < coarseMinY) coarseMinY = p.row
    if (p.row > coarseMaxY) coarseMaxY = p.row
  }

  for (const key of boundarySet) {
    const comma = key.indexOf(',')
    const c = parseInt(key.slice(0, comma), 10)
    const r = parseInt(key.slice(comma + 1), 10)
    if (c < coarseMinX) coarseMinX = c
    if (c > coarseMaxX) coarseMaxX = c
    if (r < coarseMinY) coarseMinY = r
    if (r > coarseMaxY) coarseMaxY = r
  }

  // Ray-casting point-in-polygon test (even-odd rule)
  function isPointInside(x, y) {
    let inside = false
    for (let i = 0, j = len - 1; i < len; j = i++) {
      const xi = clampedPoly[i].col + 0.5
      const yi = clampedPoly[i].row + 0.5
      const xj = clampedPoly[j].col + 0.5
      const yj = clampedPoly[j].row + 0.5

      const intersect = ((yi > y) !== (yj > y)) &&
        (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
      if (intersect) inside = !inside
    }
    return inside
  }

  const selectedPoints = []
  for (let r = coarseMinY; r <= coarseMaxY; r++) {
    for (let c = coarseMinX; c <= coarseMaxX; c++) {
      if (boundarySet.has(`${c},${r}`) || isPointInside(c + 0.5, r + 0.5)) {
        selectedPoints.push({ c, r })
      }
    }
  }

  if (selectedPoints.length === 0) return null

  // Tight bounding box of selected pixels
  let x1 = Infinity, x2 = -Infinity, y1 = Infinity, y2 = -Infinity
  for (const { c, r } of selectedPoints) {
    if (c < x1) x1 = c
    if (c > x2) x2 = c
    if (r < y1) y1 = r
    if (r > y2) y2 = r
  }

  const w = x2 - x1 + 1
  const h = y2 - y1 + 1
  const mask = Array.from({ length: h }, () => Array(w).fill(false))

  for (const { c, r } of selectedPoints) {
    mask[r - y1][c - x1] = true
  }

  return {
    x1,
    y1,
    x2,
    y2,
    mask,
    type: 'lasso',
  }
}

/**
 * Checks whether a given grid coordinate (col, row) is within the active selection.
 * Works with both rectangular and masked lasso selections.
 * 
 * @param {number} col 
 * @param {number} row 
 * @param {object|null} sel - The selection object from store
 * @returns {boolean}
 */
export function isPointInSelection(col, row, sel) {
  if (!sel) return false
  if (col < sel.x1 || col > sel.x2 || row < sel.y1 || row > sel.y2) return false
  if (sel.mask) {
    const drow = row - sel.y1
    const dcol = col - sel.x1
    return !!sel.mask[drow]?.[dcol]
  }
  return true
}
