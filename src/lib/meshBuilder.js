import * as THREE from 'three'
import { buildPixelDepthMap } from '../store/index.js'

const UNIT = 0.1 // world units per pixel

/**
 * Build a THREE.Group from pixel grid + depth selections.
 * Returns { group, dispose } — call dispose() when done.
 */
export function buildMeshGroup(pixels, selections, canvasWidth, canvasHeight) {
  const group = new THREE.Group()
  const depthMap = buildPixelDepthMap(selections)

  // Collect materials to dispose later
  const materials = []

  // --- Base layer: all opaque pixels with no depth ---
  const baseVerts = []
  const baseColors = []

  for (let row = 0; row < canvasHeight; row++) {
    for (let col = 0; col < canvasWidth; col++) {
      const color = pixels[row][col]
      if (color === 'transparent') continue
      const key = `${col},${row}`
      if (depthMap.has(key)) continue // handled in depth pass

      const x = (col - canvasWidth / 2 + 0.5) * UNIT
      const y = (canvasHeight / 2 - row - 0.5) * UNIT
      const rgb = hexToRgb(color)
      emitFlatFace(baseVerts, baseColors, x, y, 0, UNIT, rgb)
    }
  }

  if (baseVerts.length) {
    const mesh = buildMesh(baseVerts, baseColors)
    materials.push(mesh.material)
    group.add(mesh)
  }

  // --- Depth layer: per-selection extrusion ---
  for (const sel of selections) {
    if (!sel.active || sel.pixels.length === 0) continue

    const verts = []
    const colors = []

    for (const key of sel.pixels) {
      const [col, row] = key.split(',').map(Number)
      if (col < 0 || row < 0 || col >= canvasWidth || row >= canvasHeight) continue
      const color = pixels[row][col]
      if (color === 'transparent') continue

      const x = (col - canvasWidth / 2 + 0.5) * UNIT
      const y = (canvasHeight / 2 - row - 0.5) * UNIT
      const rgb = hexToRgb(color)

      const { zFront, zBack } = getZBounds(sel.depth * UNIT, sel.direction)

      emitVoxelFaces(verts, colors, x, y, zFront, zBack, UNIT, rgb, (dir) => {
        return shouldEmitFace(col, row, dir, sel.id, depthMap, pixels, canvasWidth, canvasHeight)
      })
    }

    if (verts.length) {
      const mesh = buildMesh(verts, colors)
      materials.push(mesh.material)
      group.add(mesh)
    }
  }

  function dispose() {
    materials.forEach(m => m.dispose())
    group.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose()
    })
  }

  return { group, dispose }
}

function getZBounds(depth, direction) {
  switch (direction) {
    case 'both':  return { zFront: depth / 2, zBack: -depth / 2 }
    case 'front': return { zFront: depth, zBack: 0 }
    case 'back':  return { zFront: 0, zBack: -depth }
    default:      return { zFront: depth, zBack: 0 }
  }
}

function shouldEmitFace(col, row, faceDir, selId, depthMap, pixels, w, h) {
  let nc = col, nr = row
  if (faceDir === 'right')  nc = col + 1
  if (faceDir === 'left')   nc = col - 1
  if (faceDir === 'top')    nr = row - 1
  if (faceDir === 'bottom') nr = row + 1
  if (faceDir === 'front' || faceDir === 'back') return true // always emit front/back

  if (nc < 0 || nr < 0 || nc >= w || nr >= h) return true
  if (pixels[nr][nc] === 'transparent') return true
  const key = `${nc},${nr}`
  const neighbor = depthMap.get(key)
  if (!neighbor) return true // neighbor has no depth — emit edge
  return neighbor.selectionId !== selId // different depth layer
}

function emitFlatFace(verts, colors, cx, cy, z, unit, rgb) {
  const h = unit / 2
  // Front face quad (2 triangles)
  const fz = z + 0.0001 // tiny offset so it doesn't z-fight with base
  pushQuad(verts, colors,
    [cx - h, cy - h, fz],
    [cx + h, cy - h, fz],
    [cx + h, cy + h, fz],
    [cx - h, cy + h, fz],
    rgb
  )
}

function emitVoxelFaces(verts, colors, cx, cy, zF, zB, unit, rgb, shouldEmit) {
  const h = unit / 2

  // Front face (+Z)
  pushQuad(verts, colors,
    [cx - h, cy - h, zF], [cx + h, cy - h, zF],
    [cx + h, cy + h, zF], [cx - h, cy + h, zF],
    rgb
  )
  // Back face (-Z)
  pushQuad(verts, colors,
    [cx + h, cy - h, zB], [cx - h, cy - h, zB],
    [cx - h, cy + h, zB], [cx + h, cy + h, zB],
    rgb
  )
  // Top face (+Y)
  if (shouldEmit('top')) {
    const shade = shadeRgb(rgb, 1.15)
    pushQuad(verts, colors,
      [cx - h, cy + h, zB], [cx + h, cy + h, zB],
      [cx + h, cy + h, zF], [cx - h, cy + h, zF],
      shade
    )
  }
  // Bottom face (-Y)
  if (shouldEmit('bottom')) {
    const shade = shadeRgb(rgb, 0.7)
    pushQuad(verts, colors,
      [cx - h, cy - h, zF], [cx + h, cy - h, zF],
      [cx + h, cy - h, zB], [cx - h, cy - h, zB],
      shade
    )
  }
  // Right face (+X)
  if (shouldEmit('right')) {
    const shade = shadeRgb(rgb, 0.85)
    pushQuad(verts, colors,
      [cx + h, cy - h, zF], [cx + h, cy - h, zB],
      [cx + h, cy + h, zB], [cx + h, cy + h, zF],
      shade
    )
  }
  // Left face (-X)
  if (shouldEmit('left')) {
    const shade = shadeRgb(rgb, 0.85)
    pushQuad(verts, colors,
      [cx - h, cy - h, zB], [cx - h, cy - h, zF],
      [cx - h, cy + h, zF], [cx - h, cy + h, zB],
      shade
    )
  }
}

function pushQuad(verts, colors, a, b, c, d, rgb) {
  // Triangle 1: a, b, c
  verts.push(...a, ...b, ...c)
  colors.push(...rgb, ...rgb, ...rgb)
  // Triangle 2: a, c, d
  verts.push(...a, ...c, ...d)
  colors.push(...rgb, ...rgb, ...rgb)
}

function buildMesh(verts, colors) {
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true })
  return new THREE.Mesh(geo, mat)
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

function shadeRgb([r, g, b], factor) {
  return [
    Math.min(1, r * factor),
    Math.min(1, g * factor),
    Math.min(1, b * factor),
  ]
}
