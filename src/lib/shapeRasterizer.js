/** Bresenham line between two integer points — returns [[x,y],...] */
function bresenham(x0, y0, x1, y1) {
  const pts = []
  let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1
  let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1
  let err = dx + dy
  while (true) {
    pts.push([x0, y0])
    if (x0 === x1 && y0 === y1) break
    const e2 = 2 * err
    if (e2 >= dy) { err += dy; x0 += sx }
    if (e2 <= dx) { err += dx; y0 += sy }
  }
  return pts
}

function makeSet() {
  const seen = new Set()
  const result = []
  return {
    add(x, y) {
      const k = `${x},${y}`
      if (!seen.has(k)) { seen.add(k); result.push({ col: x, row: y }) }
    },
    result,
  }
}

/** Polyline through array of [x,y] pairs — returns [{col,row},...] */
export function rasterizeLine(points) {
  if (points.length < 2) return []
  const { add, result } = makeSet()
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i]
    const [x1, y1] = points[i + 1]
    for (const [x, y] of bresenham(x0, y0, x1, y1)) add(x, y)
  }
  return result
}

/** Rectangle outline or fill — returns [{col,row},...] */
export function rasterizeRect(x0, y0, x1, y1, filled = false) {
  const { add, result } = makeSet()
  const minX = Math.min(x0, x1), maxX = Math.max(x0, x1)
  const minY = Math.min(y0, y1), maxY = Math.max(y0, y1)
  if (filled) {
    for (let y = minY; y <= maxY; y++)
      for (let x = minX; x <= maxX; x++) add(x, y)
  } else {
    for (let x = minX; x <= maxX; x++) { add(x, minY); add(x, maxY) }
    for (let y = minY + 1; y < maxY; y++) { add(minX, y); add(maxX, y) }
  }
  return result
}

/** Circle outline or fill — returns [{col,row},...] */
export function rasterizeCircle(cx, cy, r, filled = false) {
  const { add, result } = makeSet()
  r = Math.max(0, Math.round(r))
  if (filled) {
    for (let y = -r; y <= r; y++)
      for (let x = -r; x <= r; x++)
        if (x * x + y * y <= r * r) add(cx + x, cy + y)
    return result
  }
  // Midpoint circle
  let x = 0, y = r, d = 3 - 2 * r
  const plot = (px, py) => {
    add(cx + px, cy + py); add(cx - px, cy + py)
    add(cx + px, cy - py); add(cx - px, cy - py)
    add(cx + py, cy + px); add(cx - py, cy + px)
    add(cx + py, cy - px); add(cx - py, cy - px)
  }
  while (y >= x) {
    plot(x, y); x++
    if (d < 0) d += 4 * x + 6
    else { y--; d += 4 * (x - y) + 10 }
  }
  return result
}

/** Ellipse outline or fill — returns [{col,row},...] */
export function rasterizeEllipse(cx, cy, rx, ry, filled = false) {
  const { add, result } = makeSet()
  rx = Math.max(0, Math.round(rx))
  ry = Math.max(0, Math.round(ry))
  if (rx === 0 || ry === 0) {
    if (rx === 0) for (let y = cy - ry; y <= cy + ry; y++) add(cx, y)
    else          for (let x = cx - rx; x <= cx + rx; x++) add(x, cy)
    return result
  }
  if (filled) {
    for (let y = -ry; y <= ry; y++)
      for (let x = -rx; x <= rx; x++)
        if ((x * x) / (rx * rx) + (y * y) / (ry * ry) <= 1) add(cx + x, cy + y)
    return result
  }
  // Midpoint ellipse
  const plot4 = (px, py) => {
    add(cx + px, cy + py); add(cx - px, cy + py)
    add(cx + px, cy - py); add(cx - px, cy - py)
  }
  let x = 0, y = ry
  let dx = 0, dy = 2 * rx * rx * y
  let d1 = ry * ry - rx * rx * ry + 0.25 * rx * rx
  while (dx < dy) {
    plot4(x, y); x++; dx += 2 * ry * ry
    if (d1 < 0) d1 += dx + ry * ry
    else { y--; dy -= 2 * rx * rx; d1 += dx - dy + ry * ry }
  }
  let d2 = ry * ry * (x + 0.5) * (x + 0.5) + rx * rx * (y - 1) * (y - 1) - rx * rx * ry * ry
  while (y >= 0) {
    plot4(x, y); y--; dy -= 2 * rx * rx
    if (d2 > 0) d2 += rx * rx - dy
    else { x++; dx += 2 * ry * ry; d2 += dx - dy + rx * rx }
  }
  return result
}

/**
 * Compute preview pixels for any shape tool.
 * points: [{col,row}] — at least 2 entries.
 */
export function computeShapePixels(tool, points, filled = false) {
  if (points.length < 2) return []
  const [a, b] = points
  switch (tool) {
    case 'line':
      return rasterizeLine(points.map(p => [p.col, p.row]))
    case 'rect':
      return rasterizeRect(a.col, a.row, b.col, b.row, filled)
    case 'circle': {
      const r = Math.round(Math.hypot(b.col - a.col, b.row - a.row))
      return rasterizeCircle(a.col, a.row, r, filled)
    }
    case 'ellipse':
      return rasterizeEllipse(a.col, a.row, Math.abs(b.col - a.col), Math.abs(b.row - a.row), filled)
    default:
      return []
  }
}
