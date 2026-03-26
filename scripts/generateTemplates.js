// Generates public/templates/*.picell3d from the same algorithms as StartOverlay.jsx
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const CANVAS_W = 32
const CANVAS_H = 32
const DEPTH_D  = 5

function makeEmptyVoxels(W, H, D) {
  return Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(D).fill('transparent'))
  )
}

function buildTemplate(paintFn) {
  const voxels = makeEmptyVoxels(CANVAS_W, CANVAS_H, DEPTH_D)

  function paint(x, y, z, color) {
    if (x < 0 || x >= CANVAS_W || y < 0 || y >= CANVAS_H || z < 0 || z >= DEPTH_D) return
    voxels[y][x][z] = color
  }

  paintFn(paint, CANVAS_W, CANVAS_H, DEPTH_D)

  return {
    version: 1,
    canvasWidth:    CANVAS_W,
    canvasHeight:   CANVAS_H,
    depthDimension: DEPTH_D,
    activeLayerId:  'layer-1',
    palette:        [],
    activeTheme:    'synthwave',
    layers: [{
      id:             'layer-1',
      name:           'Layer 1',
      visible:        true,
      opacity:        1,
      voxels,
      voxelMaterials: {},
    }],
  }
}

// ── Templates ──────────────────────────────────────────────────────────────────

const templates = {

  coin: buildTemplate((paint, W, H, D) => {
    const z = D - 1
    const cx = (W - 1) / 2, cy = (H - 1) / 2
    const r  = Math.min(W, H) / 2 - 1
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        if (d > r) continue
        const t = d / r
        const color = t < 0.25 ? '#fffacc' : t < 0.6 ? '#ffd700' : t < 0.85 ? '#c89820' : '#7a5a10'
        paint(x, y, z, color)
        if (z > 0) paint(x, y, z - 1, t < 0.6 ? '#a07810' : '#6a4a08')
      }
    }
  }),

  character: buildTemplate((paint, W, H, D) => {
    const z  = D - 1
    const cx = Math.floor(W / 2)
    const skin = '#f5c5a0', hair = '#3a2010', shirt = '#4466cc', pants = '#223388', shoe = '#222222'
    for (let y = 2; y <= 5; y++)
      for (let x = cx - 2; x <= cx + 2; x++)
        paint(x, y, z, y === 2 ? hair : skin)
    for (let y = 6; y <= 11; y++)
      for (let x = cx - 2; x <= cx + 1; x++)
        paint(x, y, z, shirt)
    for (let y = 6; y <= 9; y++) {
      paint(cx - 3, y, z, skin)
      paint(cx + 2, y, z, skin)
    }
    for (let y = 12; y <= 15; y++) {
      for (let x = cx - 2; x <= cx - 1; x++) paint(x, y, z, y < 15 ? pants : shoe)
      for (let x = cx;     x <= cx + 1; x++) paint(x, y, z, y < 15 ? pants : shoe)
    }
  }),

  building: buildTemplate((paint, W, H, D) => {
    const z    = D - 1
    const bx1  = Math.floor((W - 10) / 2), bx2 = bx1 + 9
    const wall = '#8899bb', window_ = '#ffffaa', roof = '#556699', door = '#553322'
    for (let y = 4; y < H; y++)
      for (let x = bx1; x <= bx2; x++)
        paint(x, y, z, y === 4 ? roof : wall)
    for (const wy of [6, 9])
      for (const wx of [bx1 + 1, bx1 + 3, bx1 + 6, bx1 + 8])
        paint(wx, wy, z, window_)
    for (let y = 12; y < H; y++) {
      paint(bx1 + 4, y, z, door)
      paint(bx1 + 5, y, z, door)
    }
    for (let y = 1; y <= 4; y++) {
      paint(bx1 + 2, y, z, wall)
      paint(bx1 + 7, y, z, wall)
    }
    for (let dz = 1; dz <= Math.min(D - 1, 3); dz++) {
      const dwall = dz === 1 ? '#6677aa' : dz === 2 ? '#445588' : '#334466'
      for (let y = 4; y < H; y++)
        for (let x = bx1; x <= bx2; x++)
          if (x === bx1 || x === bx2 || y === 4 || y === H - 1)
            paint(x, y, D - 1 - dz, dwall)
    }
  }),

  gem: buildTemplate((paint, W, H, D) => {
    const z = D - 1
    const cx = Math.floor(W / 2), cy = Math.floor(H / 2)
    const colors = ['#ff44cc', '#cc22aa', '#ff88ee', '#aa0088']
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const dx = Math.abs(x - cx), dy = Math.abs(y - cy)
        const r = 7
        if (dx + dy > r) continue
        const facet = (x < cx && y < cy) ? 0 : (x >= cx && y < cy) ? 2 : (x < cx) ? 1 : 3
        const shade = (dx + dy) / r
        const c = colors[facet]
        paint(x, y, z, shade < 0.3 ? '#ffffff' : c)
        if (z > 0) paint(x, y, z - 1, c)
      }
    }
  }),
}

// ── Write files ────────────────────────────────────────────────────────────────

const outDir = resolve(__dirname, '..', 'public', 'templates')
mkdirSync(outDir, { recursive: true })

for (const [name, data] of Object.entries(templates)) {
  const path = resolve(outDir, `${name}.picell3d`)
  writeFileSync(path, JSON.stringify(data))
  console.log(`wrote ${path}`)
}
