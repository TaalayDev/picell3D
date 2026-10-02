// Generates volumetric templates into public/templates/*.picell3d.
// Run with: npm run generate-voxel-templates
//
// Coordinates used by the builders below are "world-friendly":
//   x → left to right, h → height from the ground (0 = bottom), z → back (0) to front (D-1).
// They are converted to the project format voxels[y][x][z] (y = 0 is the top row).
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── Helpers ────────────────────────────────────────────────────────────────────

function hash(x, y, z) {
  let n = (x * 374761393 + y * 668265263 + z * 2147483647) | 0
  n = Math.imul(n ^ (n >>> 13), 1274126177)
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295
}

function shade(hex, f) {
  const c = [1, 3, 5].map(i => Math.max(0, Math.min(255, Math.round(parseInt(hex.slice(i, i + 2), 16) * f))))
  return '#' + c.map(v => v.toString(16).padStart(2, '0')).join('')
}

function buildTemplate(W, H, D, modelFn) {
  const voxels = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(D).fill('transparent'))
  )
  const voxelMaterials = {}

  const inside = (x, h, z) => x >= 0 && x < W && h >= 0 && h < H && z >= 0 && z < D
  const resolveColor = (c, x, h, z) => (typeof c === 'function' ? c(x, h, z) : c)

  const api = {
    W, H, D,
    cx: (W - 1) / 2,
    cz: (D - 1) / 2,
    noise: hash,
    shade,

    set(x, h, z, color, mat) {
      x = Math.round(x); h = Math.round(h); z = Math.round(z)
      if (!inside(x, h, z) || !color) return
      const y = H - 1 - h
      voxels[y][x][z] = color
      const key = `${y},${x},${z}`
      if (mat && mat !== 'solid') voxelMaterials[key] = mat
      else delete voxelMaterials[key]
    },

    get(x, h, z) {
      x = Math.round(x); h = Math.round(h); z = Math.round(z)
      if (!inside(x, h, z)) return null
      const c = voxels[H - 1 - h][x][z]
      return c === 'transparent' ? null : c
    },

    clear(x, h, z) {
      x = Math.round(x); h = Math.round(h); z = Math.round(z)
      if (!inside(x, h, z)) return
      const y = H - 1 - h
      voxels[y][x][z] = 'transparent'
      delete voxelMaterials[`${y},${x},${z}`]
    },

    /** Calls fn(x, h, z) for every cell; fn returns [color, mat?] | color | null. */
    fill(test, color, mat) {
      for (let h = 0; h < H; h++)
        for (let x = 0; x < W; x++)
          for (let z = 0; z < D; z++) {
            if (!test(x, h, z)) continue
            const c = resolveColor(color, x, h, z)
            if (Array.isArray(c)) api.set(x, h, z, c[0], c[1])
            else api.set(x, h, z, c, mat)
          }
    },

    /** Removes every voxel matching test(x, h, z). */
    carve(test) {
      for (let h = 0; h < H; h++)
        for (let x = 0; x < W; x++)
          for (let z = 0; z < D; z++) if (test(x, h, z)) api.clear(x, h, z)
    },

    box(x0, h0, z0, x1, h1, z1, color, mat) {
      api.fill((x, h, z) => x >= x0 && x <= x1 && h >= h0 && h <= h1 && z >= z0 && z <= z1, color, mat)
    },

    ellipsoid(ex, eh, ez, rx, rh, rz, color, mat, clip = () => true) {
      api.fill((x, h, z) =>
        ((x - ex) / rx) ** 2 + ((h - eh) / rh) ** 2 + ((z - ez) / rz) ** 2 <= 1 && clip(x, h, z),
      color, mat)
    },

    sphere(ex, eh, ez, r, color, mat, clip) {
      api.ellipsoid(ex, eh, ez, r, r, r, color, mat, clip)
    },

    /** Vertical cylinder. `r` may be a function of h for tapered shapes. */
    cylY(ex, ez, r, h0, h1, color, mat, rInner = 0) {
      api.fill((x, h, z) => {
        if (h < h0 || h > h1) return false
        const rr = typeof r === 'function' ? r(h) : r
        const d = Math.hypot(x - ex, z - ez)
        return d <= rr && d >= (typeof rInner === 'function' ? rInner(h) : rInner)
      }, color, mat)
    },

    cylX(eh, ez, r, x0, x1, color, mat) {
      api.fill((x, h, z) => x >= x0 && x <= x1 && Math.hypot(h - eh, z - ez) <= (typeof r === 'function' ? r(x) : r), color, mat)
    },

    cylZ(ex, eh, r, z0, z1, color, mat) {
      api.fill((x, h, z) => z >= z0 && z <= z1 && Math.hypot(x - ex, h - eh) <= r, color, mat)
    },

    /** Straight line of voxels between two points, optionally thickened. */
    line(a, b, color, mat, radius = 0) {
      const steps = Math.ceil(Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]), Math.abs(b[2] - a[2])) * 2) + 1
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const p = a.map((v, k) => v + (b[k] - v) * t)
        if (radius <= 0) { api.set(p[0], p[1], p[2], color, mat); continue }
        const r = Math.ceil(radius)
        for (let dx = -r; dx <= r; dx++)
          for (let dh = -r; dh <= r; dh++)
            for (let dz = -r; dz <= r; dz++)
              if (Math.hypot(dx, dh, dz) <= radius) api.set(p[0] + dx, p[1] + dh, p[2] + dz, color, mat)
      }
    },

    /** Tapered cone/prism from base point along a direction; pointy near the tip. */
    shard(base, dir, length, radius, color, mat) {
      const len = Math.hypot(...dir)
      const d = dir.map(v => v / len)
      api.fill((x, h, z) => {
        const v = [x - base[0], h - base[1], z - base[2]]
        const t = v[0] * d[0] + v[1] * d[1] + v[2] * d[2]
        if (t < 0 || t > length) return false
        const perp = Math.hypot(v[0] - d[0] * t, v[1] - d[1] * t, v[2] - d[2] * t)
        const taper = Math.min(1, (length - t) / (radius * 1.6))
        return perp <= radius * taper + 0.15
      }, color, mat)
    },

    /** Paints over the front-most filled voxel of column (x, h); `lift` pushes it forward. */
    decalFront(x, h, color, mat, lift = 0) {
      for (let z = D - 1; z >= 0; z--) {
        if (api.get(x, h, z)) { api.set(x, h, Math.min(D - 1, z + lift), color, mat); return z }
      }
      return -1
    },
  }

  modelFn(api)

  return {
    version: 1,
    canvasWidth: W,
    canvasHeight: H,
    depthDimension: D,
    activeLayerId: 'layer-1',
    palette: [],
    activeTheme: 'synthwave',
    layers: [{
      id: 'layer-1',
      name: 'Layer 1',
      visible: true,
      opacity: 1,
      voxels,
      voxelMaterials,
    }],
  }
}

// ── Templates ──────────────────────────────────────────────────────────────────

const templates = {

  // ─── World ────────────────────────────────────────────────────────────────────

  duck: buildTemplate(20, 18, 18, (m) => {
    const { cx } = m
    const yellow = '#ffd23f', deep = '#f5b400', water = '#4fc3f7'
    m.cylY(cx, 8.5, 9.5, 0, 0, (x, h, z) => (m.noise(x, h, z) > 0.8 ? '#b3e9ff' : water), 'glass')
    m.ellipsoid(cx, 5.5, 7.5, 7, 4.5, 6.5, (x, h) => (h < 3 ? deep : yellow))
    m.ellipsoid(cx, 8, 1.8, 2.5, 2.2, 2, yellow)                           // tail
    m.ellipsoid(cx - 6.5, 6, 7, 1.2, 2.5, 3.8, deep)                       // wings
    m.ellipsoid(cx + 6.5, 6, 7, 1.2, 2.5, 3.8, deep)
    m.sphere(cx, 12, 10.5, 4, yellow)                                      // head
    m.box(cx - 1.5, 10, 14, cx + 1.5, 11, 16, '#ff7a1a', 'glossy')         // beak
    m.box(cx - 1, 10, 17, cx + 1, 10, 17, '#e85d00', 'glossy')
    for (const ex of [cx - 1.5, cx + 1.5]) {
      m.decalFront(ex, 13, '#1b1b1b', 'glossy')
      m.decalFront(ex, 14, '#1b1b1b', 'glossy')
    }
    m.decalFront(cx - 2.5, 11, '#ff9a8a'); m.decalFront(cx + 2.5, 11, '#ff9a8a') // cheeks
  }),

  cactus: buildTemplate(17, 24, 15, (m) => {
    const { cx, cz } = m
    const terracotta = '#c9653a', rim = '#b55530', soil = '#5b3a1e'
    m.cylY(cx, cz, (h) => 4.5 + h * 0.2, 0, 5, (x, h, z) => (h === 2 ? '#e8c07a' : terracotta), 'matte')
    m.cylY(cx, cz, 6.3, 6, 7, rim, 'matte')
    m.cylY(cx, cz, 5.2, 7, 7, (x, h, z) => (m.noise(x, h, z) > 0.75 ? '#7a5230' : soil))
    const green = (x, h, z) => {
      const a = Math.atan2(z - cz, x - cx)
      const rib = Math.cos(a * 6) > 0.4
      if (m.noise(x, h, z) > 0.93) return '#eaf7c8'                           // spines
      return rib ? '#4c9a3f' : '#357a2e'
    }
    m.cylY(cx, cz, 2.8, 8, 19, green)
    m.ellipsoid(cx, 19, cz, 2.8, 2, 2.8, green)
    // left arm
    m.cylX(12, cz, 1.6, cx - 5, cx - 2, green)
    m.cylY(cx - 5, cz, 1.6, 12, 16, green)
    m.sphere(cx - 5, 16.5, cz, 1.6, green)
    // right arm
    m.cylX(14, cz, 1.6, cx + 2, cx + 5, green)
    m.cylY(cx + 5, cz, 1.6, 14, 18, green)
    m.sphere(cx + 5, 18.5, cz, 1.6, green)
    // flower
    m.box(cx - 1, 21, cz - 1, cx + 1, 21, cz + 1, '#ff6fb5', 'glossy')
    m.set(cx, 22, cz, '#ff9fd0', 'glossy')
    m.set(cx, 21, cz, '#ffe14d', 'emissive')
  }),

  snowman: buildTemplate(19, 28, 18, (m) => {
    const { cx } = m
    const cz = 8.5
    const snow = (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.85 ? '#dfeaf7' : h < 3 ? '#d4e3f2' : '#f7fbff'
    }
    m.cylY(cx, cz, 8.5, 0, 0, (x, h, z) => (m.noise(x, h, z) > 0.5 ? '#eef5fc' : '#dde9f5'), 'matte')
    m.sphere(cx, 6, cz, 5.8, snow, 'matte')
    m.sphere(cx, 13.8, cz, 4.3, snow, 'matte')
    m.sphere(cx, 20, cz, 3.3, snow, 'matte')
    // scarf
    m.cylY(cx, cz, 3.9, 16, 17, (x, h, z) => (x % 2 ? '#d62839' : '#a81d2c'), 'matte', 2.4)
    m.box(cx + 1, 11, 12, cx + 2, 16, 12, (x, h) => (h % 2 ? '#d62839' : '#a81d2c'), 'matte')
    // hat
    m.cylY(cx, cz, 4, 22, 22, '#1d1d24', 'glossy')
    m.cylY(cx, cz, 2.5, 23, 26, (x, h) => (h === 23 ? '#d62839' : '#1d1d24'), 'glossy')
    // face
    m.decalFront(cx - 1, 21, '#15151a'); m.decalFront(cx + 1, 21, '#15151a')
    m.line([cx, 20, 11], [cx, 20, 15], '#ff7b1c', 'glossy')
    m.set(cx, 19, 12, '#ff9a47')
    for (const dx of [-2, -1, 0, 1, 2]) m.decalFront(cx + dx, 18 + (Math.abs(dx) === 2 ? 1 : 0), '#2b2b30')
    // buttons
    for (const h of [15, 13, 11]) m.decalFront(cx, h, '#2b2b30', 'glossy')
    // stick arms
    m.line([cx - 4, 14, cz], [cx - 9, 18, cz], '#6b4226')
    m.line([cx - 7, 16, cz], [cx - 8, 18, cz], '#6b4226')
    m.line([cx + 4, 14, cz], [cx + 9, 17, cz], '#6b4226')
    m.line([cx + 7, 16, cz], [cx + 9, 15, cz], '#6b4226')
  }),

  mug: buildTemplate(19, 18, 14, (m) => {
    const cx = 7.5, { cz } = m
    const body = (x, h) => (h === 7 || h === 8 ? '#fff4e0' : '#e8574b')
    m.cylY(cx, cz, 5.5, 0, 11, body, 'glossy', (h) => (h >= 2 ? 4.4 : 0))
    m.cylY(cx, cz, 4.4, 9, 9, (x, h, z) => (m.noise(x, h, z) > 0.8 ? '#8a5a3a' : '#4a2c1a'), 'glossy')
    // heart on the front stripe
    const heart = [[-1, 7], [1, 7], [-2, 8], [-1, 8], [0, 8], [1, 8], [2, 8]]
    for (const [dx, h] of heart) m.decalFront(Math.round(cx + dx), h, '#ff4f6d', 'glossy')
    // handle (torus segment in the x-h plane)
    m.fill((x, h, z) => {
      if (x <= cx + 5 || Math.abs(z - cz) > 1) return false
      const d = Math.hypot(x - (cx + 5.5), h - 6)
      return d >= 2 && d <= 3.4
    }, '#d44a3f', 'glossy')
    // steam
    for (const [x0, phase] of [[cx - 2, 0], [cx + 1, 1.5]]) {
      for (let h = 12; h <= 17; h++) m.set(x0 + Math.round(Math.sin(h * 0.9 + phase)), h, cz, '#e8f4ff', 'glass')
    }
  }),

  sailboat: buildTemplate(24, 27, 12, (m) => {
    const { cz } = m
    for (let h = 0; h <= 4; h++) {
      const x0 = 5 - h * 0.7, x1 = 18 + h * 0.9
      const half = 1.5 + h * 0.75
      m.fill((x, hh, z) => {
        if (hh !== h || x < x0 || x > x1) return false
        const taper = Math.min(1, (x1 - x) / 5 + 0.15)
        return Math.abs(z - cz) <= half * taper
      }, (x, hh, z) => {
        if (h <= 1) return '#c0392b'
        if (h === 2) return '#f7f3ea'
        if (h === 4 && Math.abs(z - cz) < half * 0.75 - 0.5) return x % 2 ? '#c8935a' : '#b5814b'
        return '#1f5f99'
      })
    }
    m.box(11, 5, cz - 0.5, 11, 24, cz + 0.5, '#6b4226')                 // mast
    m.box(4, 7, cz - 0.5, 10, 7, cz + 0.5, '#6b4226')                   // boom
    // mainsail (behind the mast)
    m.fill((x, h, z) => h >= 8 && h <= 23 && x <= 10 && x >= 10 - (23 - h) * 0.42 && Math.abs(z - cz) < 1,
      (x, h) => (h === 13 || h === 14 ? '#e63946' : '#fbf7ef'), 'matte')
    // jib (towards the bow)
    m.fill((x, h, z) => h >= 6 && h <= 21 && x >= 12 && x <= 12 + (21 - h) * 0.5 && Math.abs(z - cz) < 1,
      '#f0e9d8', 'matte')
    m.box(12, 23, cz - 0.5, 14, 24, cz + 0.5, '#e63946')                 // flag
    for (const x of [7, 13, 16]) m.set(x, 3, 11, '#ffe066', 'glossy')  // portholes
  }),

  penguin: buildTemplate(18, 22, 16, (m) => {
    const { cx } = m
    const cz = 7.5, black = '#1d2433', white = '#f4f6fa'
    m.ellipsoid(cx, 8, cz, 5.8, 8, 5.3, (x, h, z) =>
      ((z - cz) / 5.3 > 0.3 && h < 13 && Math.abs(x - cx) < 4.2 ? white : black))
    m.sphere(cx, 15.5, cz, 4.6, (x, h, z) =>
      ((z - cz) / 4.6 > 0.35 && h <= 16 && Math.abs(x - cx) < 3.4 ? white : black))
    m.ellipsoid(cx - 6, 9, cz, 1.2, 4.5, 2.6, black)                      // flippers
    m.ellipsoid(cx + 6, 9, cz, 1.2, 4.5, 2.6, black)
    m.box(cx - 0.5, 14, 12, cx + 0.5, 15, 14, '#ff9f1c', 'glossy')       // beak
    m.box(cx - 3.5, 0, 9, cx - 1.5, 0, 14, '#ff9f1c')                    // feet
    m.box(cx + 1.5, 0, 9, cx + 3.5, 0, 14, '#ff9f1c')
    for (const ex of [cx - 1.5, cx + 1.5]) m.decalFront(ex, 17, '#0c0f16', 'glossy')
    m.decalFront(cx - 2.5, 15, '#ffb3c1'); m.decalFront(cx + 2.5, 15, '#ffb3c1')
    // knitted hat
    m.ellipsoid(cx, 19, cz, 3.8, 2, 3.8, (x, h) => (h === 18 ? '#ffffff' : '#3fa7d6'), 'matte',
      (x, h) => h >= 18)
    m.sphere(cx, 21, cz, 1, '#ffffff', 'matte')
  }),

  fox: buildTemplate(21, 20, 18, (m) => {
    const { cx } = m
    const cz = 8, orange = '#e87528', dark = '#3b2721', cream = '#fff1d0'
    for (const x of [cx - 4, cx + 4]) m.ellipsoid(x, 2, 10, 2.2, 2.4, 3, dark, 'matte')
    m.ellipsoid(cx, 6.5, cz, 7, 5.5, 5.5, (x, h) => h < 4 ? '#cf5d1d' : orange, 'matte')
    m.ellipsoid(cx, 8, 13, 3.2, 4.5, 1.3, cream, 'matte')
    m.sphere(cx, 13.2, 10, 4.6, orange, 'matte')
    m.ellipsoid(cx, 11.8, 14.2, 3.2, 2.2, 2.7, cream, 'matte')
    m.set(cx, 12, 17, dark, 'glossy')
    for (const ex of [cx - 1.6, cx + 1.6]) m.decalFront(ex, 14, '#17151a', 'glossy')
    for (const side of [-1, 1]) {
      m.shard([cx + side * 2.7, 15, 9], [side * 0.2, 1, 0], 5, 2.3, orange, 'matte')
      m.shard([cx + side * 2.7, 16, 10.5], [side * 0.15, 1, 0], 3.3, 1.1, '#6b3430', 'matte')
    }
    m.ellipsoid(cx - 7, 7, 4, 3.3, 6, 3.2, '#cf5d1d', 'matte')
    m.ellipsoid(cx - 5.5, 3.5, 3.5, 3.3, 3, 3, cream, 'matte')
  }),

  whale: buildTemplate(25, 15, 16, (m) => {
    const blue = (x, h, z) => h < 5 ? '#7dc7df' : (m.noise(x, h, z) > 0.78 ? '#398ab8' : '#2b78a6')
    m.ellipsoid(11.5, 7, 7.5, 10.5, 5.8, 6.5, blue, 'matte')
    m.fill((x, h, z) => x >= 5 && x <= 18 && h >= 3 && h <= 6 && z >= 13 && m.get(x, h, z),
      (x, h) => h % 2 ? '#bfe5ec' : '#d8f0f2', 'matte')
    m.line([2, 7, 7], [0, 11, 3], '#2b78a6', 'matte', 1.6)
    m.line([2, 7, 8], [0, 11, 12], '#2b78a6', 'matte', 1.6)
    m.line([12, 5, 12], [9, 1, 15], '#246a95', 'matte', 1.2)
    m.line([12, 5, 3], [9, 1, 0], '#246a95', 'matte', 1.2)
    for (const h of [8, 9]) m.set(20, h, 13, '#101820', 'glossy')
    m.line([18, 5, 14], [22, 6, 13], '#194b6c', 'matte')
    m.set(16, 12, 8, '#173f59')
    m.line([16, 13, 8], [14, 14, 6], '#a8ecff', 'glass')
    m.line([16, 13, 8], [18, 14, 10], '#a8ecff', 'glass')
  }),

  // ─── Fantasy ──────────────────────────────────────────────────────────────────

  mushroom: buildTemplate(23, 26, 23, (m) => {
    const { cx, cz } = m
    m.cylY(cx, cz, 10.8, 0, 0, (x, h, z) => (m.noise(x, h, z) > 0.8 ? '#7cc95b' : '#5fae4a'))
    for (let z = cz + 5; z <= 22; z += 1) m.set(cx + ((z % 3) - 1), 0, z, '#a9a39a')   // path
    m.cylY(cx, cz, (h) => 5 - h * 0.08, 1, 12, (x, h, z) => (m.noise(x, h, z) > 0.88 ? '#e2cfa8' : '#f3e3c3'), 'matte')
    // door & windows
    m.fill((x, h, z) => h >= 1 && h <= 5 && Math.abs(x - cx) <= 1.5 && z >= cz + 3 && z <= cz + 5 &&
      !(h === 5 && Math.abs(x - cx) > 1), (x, h) => (x === Math.round(cx + 1) && h === 3 ? '#e0b040' : '#6b3e1f'))
    for (const [wx, wh] of [[cx - 3, 8], [cx + 3, 9]]) {
      m.decalFront(Math.round(wx), wh, '#ffd966', 'emissive')
      m.decalFront(Math.round(wx), wh + 1, '#ffd966', 'emissive')
    }
    // cap
    const spots = [[0, 21, 0], [6, 17.5, 5], [-6, 17, 5], [7, 16, -5], [-5, 18, -6], [0, 16, 9], [9, 14, 0], [-9, 14, 1]]
    m.ellipsoid(cx, 12, cz, 10.5, 9, 10.5, (x, h, z) => {
      if (h === 12) return Math.hypot(x - cx, z - cz) > 5.5 ? '#c9a27a' : '#b89068'
      for (const [sx, sh, sz] of spots) if (Math.hypot(x - cx - sx, h - sh, z - cz - sz) <= 2.2) return '#fff8ef'
      return h < 15 ? '#b92e34' : '#d63a3a'
    }, 'glossy', (x, h) => h >= 12)
    // chimney + flowers
    m.box(cx + 4, 18, cz - 3, cx + 5, 23, cz - 2, (x, h, z) => (m.noise(x, h, z) > 0.5 ? '#8a8a94' : '#6f6f7a'))
    m.set(cx + 4, 24, cz - 3, '#e8ecf2', 'glass'); m.set(cx + 5, 25, cz - 2, '#e8ecf2', 'glass')
    for (const [fx, fz, c] of [[3, 18, '#ff6fb5'], [18, 17, '#ffe14d'], [5, 5, '#9b7bff'], [17, 5, '#ff6fb5'], [15, 20, '#7ad3ff']]) {
      m.set(fx, 1, fz, '#3d8a2f'); m.set(fx, 2, fz, c, 'glossy')
    }
  }),

  shield: buildTemplate(19, 23, 8, (m) => {
    const { cx } = m
    const halfW = (h) => (h >= 10 ? 8.4 : 8.4 * Math.pow(h / 10, 0.65))
    const inShape = (x, h) => h <= 22 && Math.abs(x - cx) <= halfW(h)
    const edge = (x, h) => h >= 21 || Math.abs(x - cx) > halfW(h) - 1.5 || (h < 10 && halfW(h + 1.5) - Math.abs(x - cx) < 1.5)
    m.fill((x, h, z) => inShape(x, h) && z >= 2 && z <= 4, '#8a6a4a', 'matte')
    m.fill((x, h, z) => inShape(x, h) && z === 5, (x, h) => {
      if (edge(x, h)) return ['#e0b040', 'glossy']
      const blue = (x < cx) !== (h < 13)
      return blue ? '#2952a3' : '#b8323a'
    })
    m.fill((x, h, z) => inShape(x, h) && edge(x, h) && z === 6, '#f0c850', 'glossy')
    // cross divider & boss
    m.fill((x, h, z) => inShape(x, h) && !edge(x, h) && z === 5 && (Math.abs(x - cx) < 1 || h === 13), '#e8d8a8', 'glossy')
    m.sphere(cx, 13, 5, 2.2, '#d9dde3', 'glossy', (x, h, z) => z >= 5)
    // rivets & strap
    for (const [x, h] of [[3, 19], [15, 19], [4, 8], [14, 8]]) m.set(x, h, 6, '#f4e2a0', 'glossy')
    m.box(cx - 3, 12, 1, cx + 3, 14, 1, '#6b4226')
  }),

  crystals: buildTemplate(21, 23, 19, (m) => {
    const { cx, cz } = m
    m.ellipsoid(cx, 1.5, cz, 9, 3, 8, (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.75 ? '#7a7190' : n > 0.35 ? '#5c5470' : '#4a4360'
    }, 'matte', (x, h) => h >= 0)
    const tint = (base) => (x, h, z) => (m.noise(x, h, z) > 0.8 ? shade(base, 1.35) : base)
    const shards = [
      [[cx, 2, cz], [0, 1, 0], 20, 3.2, '#a26bff'],
      [[cx - 3, 2, cz + 2], [-0.6, 1, 0.3], 13, 2.2, '#5ce1e6'],
      [[cx + 3, 2, cz + 1], [0.7, 1, 0.2], 14, 2.4, '#ff7ad9'],
      [[cx + 1, 2, cz - 3], [0.3, 1, -0.6], 12, 2, '#a26bff'],
      [[cx - 2, 2, cz - 3], [-0.4, 1, -0.5], 10, 1.8, '#ff7ad9'],
      [[cx + 5, 1, cz + 5], [0.6, 1, 0.8], 7, 1.4, '#5ce1e6'],
      [[cx - 6, 1, cz + 4], [-0.8, 1, 0.5], 6, 1.2, '#a26bff'],
    ]
    for (const [base, dir, len, r, color] of shards) m.shard(base, dir, len, r, tint(color), 'crystal')
    // glowing tips
    for (const [base, dir, len, , color] of shards) {
      const l = Math.hypot(...dir)
      const tip = base.map((v, k) => v + (dir[k] / l) * (len - 1))
      m.set(tip[0], tip[1], tip[2], shade(color, 1.5), 'neon')
    }
  }),

  'wizard-tower': buildTemplate(21, 29, 21, (m) => {
    const { cx, cz } = m
    const stone = (x, h, z) => {
      const mortar = (Math.floor(h / 2) + Math.floor(x / 3) + Math.floor(z / 3)) % 5 === 0
      return mortar ? '#596078' : (m.noise(x, h, z) > 0.55 ? '#747c98' : '#68708a')
    }
    m.cylY(cx, cz, 7, 0, 18, stone, 'matte')
    m.fill((x, h, z) => z >= 17 && h <= 6 && Math.abs(x - cx) <= 2 && m.get(x, h, z),
      (x, h, z) => (h === 6 && Math.abs(x - cx) > 1 ? stone(x, h, z) : '#4b2b45'), 'matte')
    for (const [x, h] of [[cx - 3, 12], [cx + 3, 15]]) {
      m.decalFront(x, h, '#ffd86b', 'emissive'); m.decalFront(x, h + 1, '#ffd86b', 'emissive')
    }
    m.cylY(cx, cz, 7.6, 18, 18, '#a58acb', 'glossy')
    m.fill((x, h, z) => {
      if (h < 19 || h > 27) return false
      const r = 8.8 * (1 - (h - 19) / 9) + 0.35
      return Math.hypot(x - cx, z - cz) <= r
    }, (x, h, z) => ((x + z + h) % 3 === 0 ? '#513a83' : '#65479b'), 'glossy')
    m.set(cx, 28, cz, '#ffd86b', 'emissive')
    m.shard([cx + 5, 20, cz - 2], [0.4, 1, 0], 5, 1.2, '#ffd86b', 'glossy')
    m.box(cx - 5, 19, cz - 2, cx - 3, 24, cz, '#555c72', 'matte')
    m.set(cx - 4, 25, cz, '#c5cce0', 'glass')
    for (const [x, h] of [[2, 3], [18, 5], [3, 9], [17, 10]]) m.set(x, h, 18, '#b78cff', 'emissive')
  }),

  mimic: buildTemplate(22, 18, 16, (m) => {
    const wood = (x, h, z) => (m.noise(x, h, z) > 0.65 ? '#8f542b' : '#6f3d22')
    m.box(2, 2, 2, 19, 9, 13, wood, 'matte')
    m.box(2, 11, 3, 19, 15, 12, wood, 'matte')
    m.cylX(15, 7.5, 4.8, 2, 19, wood, 'matte')
    for (const x of [2, 10, 19]) {
      m.box(x, 2, 1, x, 9, 14, '#d6a83f', 'metal')
      m.box(x, 11, 2, x, 16, 13, '#d6a83f', 'metal')
    }
    for (let x = 4; x <= 18; x += 3) {
      m.shard([x, 10, 13], [0, -1, 0.2], 3, 0.8, '#fff2ce', 'glossy')
      m.shard([x + 1, 11, 13], [0, 1, 0.1], 2.5, 0.8, '#fff2ce', 'glossy')
    }
    m.box(4, 10, 10, 18, 10, 13, '#24131d')
    m.line([11, 9, 14], [14, 5, 15], '#d84f78', 'glossy', 1.2)
    for (const x of [7, 15]) {
      m.line([x, 15, 8], [x, 17, 10], '#7b4b28', 'matte', 0.8)
      m.sphere(x, 17, 10, 1.5, '#e8d58c', 'glossy')
      m.set(x, 17, 11, '#17131c', 'glossy')
    }
    m.box(9, 5, 14, 12, 8, 15, '#e4b644', 'metal')
  }),

  // ─── Sci-Fi ───────────────────────────────────────────────────────────────────

  ufo: buildTemplate(25, 14, 25, (m) => {
    const { cx, cz } = m
    m.ellipsoid(cx, 5.5, cz, 12, 2.6, 12, (x, h) => (h >= 6 ? '#c9d1dc' : '#8e98a8'), 'glossy')
    m.cylY(cx, cz, 7.5, 7, 7, '#6f7b8e', 'glossy')
    // rim lights
    const lights = ['#ff3df0', '#3dfff2', '#fff13d']
    m.fill((x, h, z) => {
      if (h !== 5) return false
      const d = Math.hypot(x - cx, z - cz)
      return d > 10.8 && d <= 12 && Math.round(Math.atan2(z - cz, x - cx) * 4) % 2 === 0
    }, (x, h, z) => [lights[Math.abs(Math.round(Math.atan2(z - cz, x - cx) * 2)) % 3], 'neon'])
    // pilot
    m.box(cx - 1, 8, cz - 1, cx + 1, 10, cz + 1, '#7ddc5a')
    m.set(cx - 1, 10, cz + 1, '#101010'); m.set(cx + 1, 10, cz + 1, '#101010')
    m.set(cx, 11, cz, '#7ddc5a'); m.set(cx, 12, cz, '#ff3df0', 'neon')
    // glass dome
    m.fill((x, h, z) => {
      if (h < 8) return false
      const d = Math.hypot(x - cx, h - 7, z - cz)
      return d <= 5 && d > 3.9
    }, '#8ef6ff', 'glass')
    // tractor beam emitter
    m.cylY(cx, cz, 3.2, 2, 3, (x, h) => (h === 2 ? '#7dff9a' : '#5a6576'), undefined)
    m.cylY(cx, cz, 3.2, 2, 2, '#7dff9a', 'neon')
    m.cylY(cx, cz, (h) => 5 - h, 0, 1, '#b8ffc8', 'glass')
  }),

  rocket: buildTemplate(17, 31, 17, (m) => {
    const { cx, cz } = m
    const radius = (h) => {
      if (h < 4) return 2.6 + (h - 2) * 0.5
      if (h <= 19) return 4.6
      return 4.6 * Math.sqrt(Math.max(0, 1 - ((h - 19) / 10.5) ** 2))
    }
    m.cylY(cx, cz, radius, 3, 29, (x, h) => {
      if (h >= 23) return ['#e63946', 'glossy']
      if (h === 8 || h === 9) return ['#e63946', 'glossy']
      return ['#f2f2f2', 'glossy']
    })
    m.set(cx, 30, cz, '#ffd23f', 'emissive')
    // porthole
    m.fill((x, h, z) => z >= cz + 3 && Math.hypot(x - cx, h - 15) <= 2.6 && m.get(x, h, z), (x, h) =>
      Math.hypot(x - cx, h - 15) <= 1.6 ? ['#5ec8ff', 'glass'] : ['#9aa3ad', 'metal'])
    // fins
    const finColor = '#e63946'
    for (let h = 1; h <= 11; h++) {
      const out = 4.6 + Math.min(3.4, (11 - h) * 0.55)
      for (let d = 3; d <= out; d++) {
        m.set(cx + d, h, cz, finColor, 'glossy'); m.set(cx - d, h, cz, finColor, 'glossy')
        m.set(cx, h, cz + d, finColor, 'glossy'); m.set(cx, h, cz - d, finColor, 'glossy')
      }
    }
    // nozzle + flame
    m.cylY(cx, cz, 2.5, 2, 2, '#4a4f58', 'metal')
    m.cylY(cx, cz, 2, 1, 1, '#ffb703', 'magma')
    m.cylY(cx, cz, 1.2, 0, 0, '#fb5607', 'magma')
  }),

  raygun: buildTemplate(25, 17, 9, (m) => {
    const { cz } = m
    m.ellipsoid(8, 10, cz, 5, 4, 3.2, (x, h) => (h > 11 ? '#3fd9c9' : '#2ec4b6'), 'glossy')
    m.cylX(10, cz, 2, 11, 20, '#c9d1dc', 'metal')
    for (const x of [13, 16, 19]) m.cylX(10, cz, 3, x, x, '#f0c040', 'glossy')
    m.sphere(22, 10, cz, 1.7, '#5fe07a', 'glossy')
    m.cylX(10, cz, 0.6, 21, 21, '#b8ffc8', 'emissive')
    // grip
    m.fill((x, h, z) => {
      if (h > 7 || Math.abs(z - cz) > 1.5) return false
      const shift = (7 - h) * 0.35
      return x >= 5 - shift && x <= 8 - shift
    }, (x, h) => (h % 2 ? '#6b3e1f' : '#7a4a2a'), 'matte')
    m.box(9, 5, cz - 0.5, 10, 6, cz + 0.5, '#9aa3ad', 'metal')           // trigger
    m.box(8, 3, cz - 0.5, 11, 3, cz + 0.5, '#9aa3ad', 'metal')           // guard
    m.box(11, 4, cz - 0.5, 11, 6, cz + 0.5, '#9aa3ad', 'metal')
    // energy tank
    m.cylX(14.5, cz, 1.3, 4, 10, '#d62fc8', 'glossy')
    m.box(4, 13, cz, 4, 15, cz, '#9aa3ad', 'metal')
    m.box(10, 13, cz, 10, 15, cz, '#9aa3ad', 'metal')
    // antenna
    m.line([4, 13, cz], [2, 16, cz], '#9aa3ad', 'metal')
  }),

  'moon-rover': buildTemplate(24, 16, 18, (m) => {
    const metal = (x, h, z) => (m.noise(x, h, z) > 0.7 ? '#dce3e8' : '#aeb9c2')
    m.box(4, 5, 4, 19, 10, 13, metal, 'metal')
    m.box(7, 11, 6, 15, 14, 11, '#78cbe8', 'glass')
    m.box(8, 10, 7, 14, 13, 10, '#20394f', 'glossy')
    for (const x of [5, 11.5, 18]) for (const z of [2, 15]) {
      m.cylZ(x, 4, 3, z, z, (xx, h) => ((Math.round(xx + h) % 2) ? '#252932' : '#343b45'), 'matte')
      m.cylZ(x, 4, 1.2, z, z, '#98a6b3', 'metal')
    }
    m.box(2, 8, 3, 21, 8, 14, (x, h, z) => ((x + z) % 3 ? '#244f86' : '#3972b2'), 'glossy')
    m.box(11, 14, 8, 11, 15, 9, '#aeb9c2', 'metal')
    m.set(11, 15, 10, '#e639d5', 'neon')
    for (const x of [6, 17]) m.set(x, 8, 14, '#fff2a8', 'emissive')
    m.line([19, 10, 8], [23, 14, 8], '#98a6b3', 'metal')
    m.sphere(23, 14, 8, 1.2, '#d7e0e8', 'metal')
  }),

  'space-drone': buildTemplate(21, 13, 21, (m) => {
    const { cx, cz } = m
    m.ellipsoid(cx, 7, cz, 4.5, 3.5, 4.5, '#e4e8ef', 'metal')
    m.ellipsoid(cx, 8, cz + 3, 2.6, 2.3, 2.2, '#67d9f4', 'glass')
    m.set(cx, 8, cz + 5, '#f23bd5', 'neon')
    const arms = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (const [dx, dz] of arms) {
      m.line([cx + dx * 3, 7, cz + dz * 3], [cx + dx * 8, 5, cz + dz * 8], '#828da0', 'metal', 0.9)
      m.cylY(cx + dx * 8, cz + dz * 8, 2.2, 4, 6, '#4d5668', 'metal')
      m.cylY(cx + dx * 8, cz + dz * 8, 1.4, 3, 3, '#63f5e2', 'neon')
    }
    m.line([cx, 10, cz], [cx, 12, cz - 1], '#aab4c2', 'metal')
    m.set(cx, 12, cz - 1, '#ff526f', 'neon')
    m.cylY(cx, cz, 2, 3, 4, '#596478', 'metal')
    m.set(cx, 2, cz, '#ffe55e', 'emissive')
  }),

  // ─── Retro ────────────────────────────────────────────────────────────────────

  tv: buildTemplate(22, 26, 18, (m) => {
    const wood = (x, h, z) => (m.noise(x, h, z) > 0.7 ? '#9b6a38' : (h % 3 ? '#8b5a2b' : '#7a4d24'))
    m.box(1, 3, 2, 20, 18, 16, wood, 'matte')
    m.box(3, 5, 17, 15, 17, 17, '#2b2b30')                                // bezel
    const bars = ['#f2f2f2', '#ffe14d', '#5ce1e6', '#5fd35f', '#ff5fd2', '#ff4f4f', '#4f6bff']
    m.fill((x, h, z) => x >= 4 && x <= 14 && h >= 6 && h <= 16 && z === 17 &&
      !((x === 4 || x === 14) && (h === 6 || h === 16)), (x, h) => {
      if (h <= 7) return ['#1c2233', 'glossy']
      return [bars[Math.min(6, Math.floor((x - 4) * 7 / 11))], 'glossy']
    })
    // control panel
    m.box(16, 5, 17, 19, 17, 17, '#6b4524', 'matte')
    m.cylZ(17.5, 15, 1.2, 17, 17, '#d9dde3', 'metal')
    m.cylZ(17.5, 12, 1.2, 17, 17, '#d9dde3', 'metal')
    for (const h of [6, 8]) m.box(16, h, 17, 19, h, 17, '#2b2b30')
    // legs
    for (const [x, z] of [[2, 3], [19, 3], [2, 15], [19, 15]]) m.box(x, 0, z, x, 2, z, '#2b2b30', 'metal')
    // antenna
    m.box(9, 19, 8, 12, 19, 10, '#2b2b30', 'metal')
    m.line([10, 20, 9], [4, 25, 9], '#c9d1dc', 'metal')
    m.line([11, 20, 9], [17, 25, 9], '#c9d1dc', 'metal')
    m.set(4, 25, 9, '#e63946', 'glossy'); m.set(17, 25, 9, '#e63946', 'glossy')
  }),

  cassette: buildTemplate(24, 16, 7, (m) => {
    const shell = '#26262c'
    m.fill((x, h, z) => x >= 0 && x <= 23 && h >= 0 && h <= 15 && z >= 1 && z <= 4 &&
      !((x === 0 || x === 23) && (h === 0 || h === 15)), shell, 'glossy')
    // label
    m.fill((x, h, z) => x >= 2 && x <= 21 && h >= 4 && h <= 13 && z === 5, (x, h) => {
      if (h === 13) return '#e63946'
      if (h === 12) return '#ff9f1c'
      if (h === 11) return '#ffd23f'
      if (h === 5 && x >= 4 && x <= 19 && x % 2) return '#2b2b30'
      return '#f1e3c6'
    }, 'matte')
    // window + reels
    m.carve((x, h, z) => x >= 7 && x <= 16 && h >= 6 && h <= 9 && z >= 3 && z <= 5)
    m.box(7, 6, 5, 16, 9, 5, '#a7b8cc', 'glass')
    m.box(10, 6, 3, 13, 9, 3, '#5a3a22')                                   // tape
    for (const rx of [8.5, 15]) {
      m.cylZ(rx, 7.5, 2.1, 3, 3, (x, h) => (Math.hypot(x - rx, h - 7.5) < 1 ? '#26262c' : '#f7f3ea'))
      m.cylZ(rx, 7.5, 2.8, 2, 2, '#5a3a22')
    }
    // bottom head plate
    m.fill((x, h, z) => h <= 3 && z === 5 && x >= 5 + (3 - h) * 0.5 && x <= 18 - (3 - h) * 0.5, (x, h) =>
      (h === 1 && (x === 8 || x === 15) ? '#111114' : '#3a3a42'), 'matte')
    for (const [x, h] of [[1, 1], [22, 1], [1, 14], [22, 14], [11, 1], [12, 1]])
      m.set(x, h, 5, '#c9d1dc', 'metal')
  }),

  camera: buildTemplate(20, 17, 15, (m) => {
    m.fill((x, h, z) => x >= 1 && x <= 18 && h >= 0 && h <= 12 && z >= 2 && z <= 11 &&
      !((x === 1 || x === 18) && (h === 0 || h === 12)),
    (x, h) => (h <= 4 ? '#2b2b30' : '#f4efe6'), 'matte')
    // rainbow stripe
    const rainbow = ['#e63946', '#ff9f1c', '#ffd23f', '#5fd35f', '#3a86ff']
    rainbow.forEach((c, i) => m.box(8 + i, 0, 12, 8 + i, 4, 12, c, 'glossy'))
    // lens
    for (let z = 12; z <= 14; z++) {
      m.fill((x, h, zz) => zz === z && Math.hypot(x - 9.5, h - 8) <= 3.8 - (z - 12) * 0.6, (x, h) => {
        const d = Math.hypot(x - 9.5, h - 8)
        if (d <= 1.3) return ['#1a3a66', 'glass']
        if (d <= 2.2) return ['#15151a', 'glossy']
        return ['#9aa3ad', 'metal']
      })
    }
    // flash, viewfinder, shutter
    m.box(13, 9, 12, 17, 11, 12, '#fff6c8', 'glossy')
    m.box(3, 10, 12, 5, 11, 12, '#15151a', 'glossy')
    m.box(2, 7, 12, 3, 8, 12, '#e63946', 'glossy')
    // photo sliding out
    m.box(5, 1, 12, 14, 1, 14, '#ffffff', 'matte')
  }),

  joystick: buildTemplate(18, 18, 16, (m) => {
    const { cx } = m
    m.box(1, 0, 1, 16, 3, 14, '#1e1e24', 'glossy')
    m.box(1, 4, 1, 16, 4, 14, (x, h, z) => (x === 1 || x === 16 || z === 1 || z === 14 ? '#1e1e24' : '#e63946'), 'glossy')
    m.cylY(6, 7, 2, 5, 5, '#15151a', 'matte')                             // dust boot
    m.cylY(6, 7, 0.8, 6, 11, '#c9d1dc', 'glossy')                         // shaft
    m.sphere(6, 13.5, 7, 2.6, (x, h) => (h > 14 && x < 6 ? '#ff7a85' : '#e63946'), 'glossy')
    for (const [bx, bz, c] of [[11, 9, '#ffd23f'], [14, 9, '#3a86ff'], [11, 5, '#5fd35f'], [14, 5, '#ff9f1c']])
      m.cylY(bx, bz, 1.2, 5, 5, c, 'glossy')
    m.box(cx - 2, 2, 15, cx - 1, 2, 15, '#f7f3ea')                        // start/select
    m.box(cx + 1, 2, 15, cx + 2, 2, 15, '#f7f3ea')
    m.box(3, 1, 15, 3, 1, 15, '#5fd35f', 'emissive')                      // power LED
  }),

  floppy: buildTemplate(20, 20, 5, (m) => {
    m.box(0, 0, 0, 19, 19, 2, '#2d4a8a', 'glossy')
    m.clear(19, 19, 0); m.clear(19, 19, 1); m.clear(19, 19, 2)
    // metal shutter
    m.box(5, 13, 3, 14, 19, 3, '#b8c0cc', 'glossy')
    m.carve((x, h, z) => x >= 11 && x <= 12 && h >= 14 && h <= 18 && z >= 3)
    m.box(11, 14, 2, 12, 18, 2, '#101522')
    // label
    m.box(3, 1, 3, 16, 10, 3, (x, h) => {
      if (h === 10) return '#e63946'
      if ((h === 7 || h === 5 || h === 3) && x >= 4 && x <= 15) return '#9ab8ff'
      return '#f7f7f2'
    }, 'matte')
    m.carve((x, h) => x >= 1 && x <= 2 && h >= 1 && h <= 2)            // write-protect notch
    m.cylZ(9.5, 6, 0.9, 0, 0, '#b8c0cc', 'glossy')                        // hub on the back
  }),

  lavalamp: buildTemplate(13, 25, 13, (m) => {
    const { cx, cz } = m
    m.cylY(cx, cz, (h) => 4.4 - h * 0.25, 0, 6, (x, h) => (h === 0 ? '#3a3f4c' : '#8a93a3'), 'glossy')
    m.cylY(cx, cz, (h) => 3.3 - (h - 7) * 0.1, 7, 20, '#ff8ad0', 'glass')
    for (const [bh, r, dx] of [[8.5, 2.1, 0], [12.5, 1.5, 0.6], [16.5, 1.2, -0.5], [19, 0.9, 0.3]])
      m.sphere(cx + dx, bh, cz, r, (x, h, z) => (m.noise(x, h, z) > 0.6 ? '#ffb13d' : '#ff6a2a'), 'emissive')
    m.cylY(cx, cz, (h) => 2.2 - (h - 21) * 0.4, 21, 23, '#8a93a3', 'glossy')
    m.set(cx, 24, cz, '#3a3f4c', 'glossy')
  }),

  planet: buildTemplate(25, 21, 25, (m) => {
    const { cx, cz } = m
    const ch = 10
    const bands = ['#e8a25a', '#f4d9a6', '#c9713a', '#f4d9a6', '#e8a25a', '#b35f30']
    m.sphere(cx, ch, cz, 6.6, (x, h, z) => {
      const b = bands[Math.floor(h + Math.sin(x * 0.7) * 0.6) % bands.length]
      return m.noise(x, h, z) > 0.92 ? shade(b, 0.85) : b
    }, 'glossy')
    const tilt = 0.35
    m.fill((x, h, z) => {
      const y1 = (h - ch) * Math.cos(tilt) - (z - cz) * Math.sin(tilt)
      const z1 = (h - ch) * Math.sin(tilt) + (z - cz) * Math.cos(tilt)
      const rr = Math.hypot(x - cx, z1)
      return Math.abs(y1) < 0.6 && rr >= 8.4 && rr <= 12
    }, (x, h, z) => {
      const z1 = (h - ch) * Math.sin(tilt) + (z - cz) * Math.cos(tilt)
      const rr = Math.hypot(x - cx, z1)
      return rr < 9.6 ? '#b7a6e0' : rr < 10.6 ? '#e4d9f7' : '#9c8cc8'
    }, 'glossy')
    m.sphere(3, 18, 4, 1.6, '#c9ccd6', 'matte')                           // moon
    for (const [x, h, z] of [[21, 18, 5], [2, 3, 20], [22, 2, 18]]) m.set(x, h, z, '#fff6b0', 'emissive')
  }),

  helmet: buildTemplate(21, 20, 21, (m) => {
    const { cx, cz } = m
    m.cylY(cx, cz, 6.8, 0, 2, (x, h) => (h === 1 ? '#6f7b8e' : '#9aa3ad'), 'glossy')
    m.sphere(cx, 10.5, cz, 8.2, (x, h, z) => {
      const nz = (z - cz) / 8.2
      if (nz > 0.3 && h >= 7 && h <= 13 && Math.abs(x - cx) < 6) {
        return (x - cx) - (h - 10) === -3 || (x - cx) - (h - 10) === -2 ? ['#9fb4ff', 'glossy'] : ['#243049', 'glossy']
      }
      if (Math.abs(x - cx) < 1 && h > 13) return ['#e63946', 'glossy']
      return [m.noise(x, h, z) > 0.9 ? '#e3e7ee' : '#f2f4f8', 'glossy']
    }, undefined, (x, h) => h >= 2)
    for (const side of [-1, 1]) {
      m.cylX(10, cz, 2, side < 0 ? 0 : cx + 8, side < 0 ? cx - 8 : 20, '#d9dde3', 'glossy')
      m.set(side < 0 ? 0 : 20, 10, cz, '#5ce1e6', 'emissive')
    }
    m.line([cx - 5, 15, cz - 1], [cx - 7, 19, cz - 2], '#9aa3ad', 'glossy')
    m.set(cx - 7, 19, cz - 2, '#e63946', 'emissive')
  }),

  drone: buildTemplate(25, 10, 25, (m) => {
    const { cx, cz } = m
    const corners = [[-7, -7], [7, -7], [-7, 7], [7, 7]]
    for (const [dx, dz] of corners) m.line([cx, 5, cz], [cx + dx, 5, cz + dz], '#3a3f4c', 'glossy', 0.6)
    m.ellipsoid(cx, 5, cz, 4, 2.2, 4.5, (x, h) => (h >= 6 ? '#e8ebf0' : '#2b2f3a'), 'glossy')
    for (const [dx, dz] of corners) {
      m.cylY(cx + dx, cz + dz, 1.5, 4, 6, '#2b2f3a', 'glossy')
      m.cylY(cx + dx, cz + dz, 3.8, 7, 7, (x, h, z) =>
        (Math.abs((x - cx - dx) - (z - cz - dz)) < 0.8 ? '#e8ebf0' : '#c9d1dc'), 'glass')
      m.set(cx + dx, 7, cz + dz, '#2b2f3a', 'glossy')
      m.set(cx + dx, 3, cz + dz, dz > 0 ? '#5fd35f' : '#ff4f4f', 'emissive')
    }
    // camera gimbal
    m.box(cx, 2, cz + 3, cx, 3, cz + 3, '#2b2f3a')
    m.sphere(cx, 1.5, cz + 3.5, 1.4, '#15151a', 'glossy')
    m.set(cx, 1, cz + 5, '#3a86ff', 'glass')
  }),

  wizardhat: buildTemplate(21, 25, 21, (m) => {
    const { cx, cz } = m
    const bend = (h) => (h > 12 ? ((h - 12) / 10) ** 2 * 5 : 0)
    const r = (h) => 6.2 * (1 - (h - 2) / 21)
    m.cylY(cx, cz, 9.5, 0, 1, (x, h, z) => (Math.hypot(x - cx, z - cz) > 8.6 ? '#2a2980' : '#3b3aa8'), 'matte')
    m.fill((x, h, z) => h >= 2 && h <= 22 && Math.hypot(x - cx - bend(h), z - cz) <= Math.max(0.6, r(h)),
      (x, h, z) => {
        if (h >= 2 && h <= 4) return ['#7b3fbf', 'matte']
        if (h > 5 && m.noise(x, h, z) > 0.94) return ['#ffd23f', 'glossy']
        return [h % 4 === 0 ? '#34339a' : '#3b3aa8', 'matte']
      })
    m.box(cx - 1.5, 2, cz + 6, cx + 1.5, 4, cz + 6, (x, h) => (h === 3 && Math.abs(x - cx) < 1 ? '#7b3fbf' : '#ffd23f'), 'glossy')
    const tip = [Math.round(cx + bend(23)), 23, cz]
    m.set(tip[0], 23, cz, '#ffd23f', 'emissive')
    m.set(tip[0] + 1, 24, cz, '#fff1a0', 'emissive')
  }),

  slime: buildTemplate(21, 16, 21, (m) => {
    const { cx, cz } = m
    m.sphere(cx, 4, cz, 2.5, '#2f8a3a')                                   // core
    m.ellipsoid(cx, 5.5, cz, 8.8, 7, 8.8, (x, h, z) =>
      (h > 9 && x < cx - 1 && z > cz ? '#b8ffb0' : '#5fe07a'), 'crystal', (x, h) => h >= 0)
    for (const ex of [cx - 3, cx + 3]) {
      for (const h of [7, 8, 9]) m.decalFront(ex, h, '#15151a', 'glossy')
      m.decalFront(ex - 1, 8, '#15151a', 'glossy')
      m.decalFront(ex, 9, '#ffffff', 'glossy')
    }
    for (const dx of [-1, 0, 1]) m.decalFront(cx + dx, 5, '#15151a', 'glossy')
    m.decalFront(cx - 2, 6, '#15151a', 'glossy'); m.decalFront(cx + 2, 6, '#15151a', 'glossy')
    m.decalFront(cx - 5, 6, '#ff9ab5'); m.decalFront(cx + 5, 6, '#ff9ab5')
    // tiny leaf on top
    m.set(cx, 13, cz, '#3d8a2f'); m.set(cx + 1, 14, cz, '#5fb84a'); m.set(cx + 2, 14, cz, '#5fb84a')
  }),

  ghost: buildTemplate(21, 22, 17, (m) => {
    const { cx, cz } = m
    const sheet = (x, h, z) => (h < 5 ? '#ddd8f5' : m.noise(x, h, z) > 0.9 ? '#e9e5fb' : '#f6f4ff')
    m.ellipsoid(cx, 13, cz, 7, 7, 6, sheet, 'matte', (x, h) => h >= 13)
    m.fill((x, h, z) => {
      if (h > 13) return false
      if (((x - cx) / 7) ** 2 + ((z - cz) / 6) ** 2 > 1) return false
      if (h >= 3) return true
      const wave = 1.5 + 1.5 * Math.sin(Math.atan2(z - cz, x - cx) * 5)
      return 3 - h < wave
    }, sheet, 'matte')
    m.ellipsoid(cx - 7.5, 10, cz, 2, 1.4, 1.8, sheet, 'matte')           // arms
    m.ellipsoid(cx + 7.5, 11, cz, 2, 1.4, 1.8, sheet, 'matte')
    for (const ex of [cx - 2.5, cx + 2.5]) {
      m.decalFront(ex, 13, '#1b1830', 'glossy'); m.decalFront(ex, 14, '#1b1830', 'glossy')
    }
    for (const [dx, h] of [[0, 9], [-1, 10], [1, 10], [0, 11]]) m.decalFront(cx + dx, h, '#1b1830', 'glossy')
    m.decalFront(cx - 4, 11, '#ffb3c8'); m.decalFront(cx + 4, 11, '#ffb3c8')
  }),

  well: buildTemplate(21, 24, 21, (m) => {
    const { cx, cz } = m
    m.cylY(cx, cz, 10.4, 0, 0, (x, h, z) => (m.noise(x, h, z) > 0.8 ? '#7cc95b' : '#5fae4a'))
    m.cylY(cx, cz, 7, 1, 6, (x, h, z) => {
      const n = m.noise(Math.floor((x + (h % 2) * 2) / 2), h, Math.floor(z / 2))
      return (h === 6 ? '#9c9aa6' : n > 0.6 ? '#8a8894' : n > 0.25 ? '#767482' : '#62606e')
    }, 'matte', 4.8)
    m.cylY(cx, cz, 4.8, 4, 4, '#3e8ed0', 'glass')
    m.cylY(cx, cz, 4.8, 1, 3, '#1f4f80')
    for (const px of [cx - 6, cx + 6]) m.box(px, 7, cz, px, 16, cz, '#6b4226', 'matte')
    m.cylX(13, cz, 0.7, cx - 6, cx + 6, '#8b5a2b', 'matte')                   // crank bar
    m.box(cx + 7, 11, cz, cx + 7, 13, cz, '#6b4226')                          // handle
    m.line([cx, 13, cz], [cx, 10, cz], '#d9c7a0')                             // rope
    m.box(cx - 1, 8, cz - 1, cx + 1, 9, cz + 1, (x, h) => (h === 9 ? '#555a66' : '#8b5a2b'))
    // gabled roof
    m.fill((x, h, z) => {
      if (h < 16 || h > 21 || x < cx - 8 || x > cx + 8) return false
      const inner = (21 - h) * 1.4
      return Math.abs(z - cz) >= inner - 0.1 && Math.abs(z - cz) <= inner + 1.4
    }, (x, h) => ((x + h) % 2 ? '#b5462f' : '#9c3a26'), 'matte')
    m.box(cx - 8, 22, cz, cx + 8, 22, cz, '#7a2e1e', 'matte')
  }),

  pumpkin: buildTemplate(21, 19, 21, (m) => {
    const { cx, cz } = m
    const ch = 7
    const inPumpkin = (x, h, z) => {
      const nd = Math.hypot((x - cx) / 8.5, (h - ch) / 6.8, (z - cz) / 8.5)
      return nd <= 0.93 + 0.07 * Math.cos(Math.atan2(z - cz, x - cx) * 8)
    }
    m.fill(inPumpkin, (x, h, z) => {
      const g = Math.cos(Math.atan2(z - cz, x - cx) * 8)
      return g < -0.5 ? '#d9500a' : m.noise(x, h, z) > 0.9 ? '#ff9a3c' : '#ff7518'
    }, 'glossy')
    // carved face
    const face = new Set()
    const add = (h, x0, x1, skip = []) => { for (let x = x0; x <= x1; x++) if (!skip.includes(x)) face.add(`${x},${h}`) }
    add(9, 5, 8); add(10, 6, 7); add(11, 6, 6)                  // left eye
    add(9, 12, 15); add(10, 13, 14); add(11, 14, 14)            // right eye
    add(7, 9, 11); add(8, 10, 10)                               // nose
    add(5, 5, 15, [7, 13]); add(4, 5, 15); add(3, 6, 14, [10])   // mouth
    m.carve((x, h, z) => face.has(`${x},${h}`) && z > cz + 2)
    for (const key of face) {
      const [x, h] = key.split(',').map(Number)
      m.decalFront(x, h, '#ffd23f', 'emissive')
    }
    m.cylY(cx, cz, 1.3, 13, 15, '#5b7a2a', 'matte')
    m.set(cx + 1, 16, cz, '#5b7a2a', 'matte')
    m.box(cx - 3, 14, cz + 1, cx - 1, 14, cz + 2, '#3d8a2f', 'matte')    // leaf
  }),

  donut: buildTemplate(21, 10, 21, (m) => {
    const { cx, cz } = m
    const ch = 4
    const sprinkles = ['#ff4f4f', '#ffd23f', '#5ce1e6', '#ffffff', '#9b7bff', '#5fd35f']
    m.fill((x, h, z) => Math.hypot(Math.hypot(x - cx, z - cz) - 6, h - ch) <= 3.3, (x, h, z) => {
      const drip = Math.sin(Math.atan2(z - cz, x - cx) * 7) * 0.8
      if (h < ch + drip - 0.3) return ['#d9a066', 'matte']
      const isTop = Math.hypot(Math.hypot(x - cx, z - cz) - 6, h + 1 - ch) > 3.3
      if (isTop && m.noise(x, h, z) > 0.86) return [sprinkles[Math.floor(m.noise(z, x, h) * sprinkles.length)], 'glossy']
      return ['#ff5fa2', 'glossy']
    })
    m.cylY(cx, cz, 9.8, 0, 0, '#f7f3ea', 'glossy', 8.8)                   // plate rim
    m.cylY(cx, cz, 8.8, 0, 0, '#ffffff', 'glossy')
  }),

  icecream: buildTemplate(17, 28, 17, (m) => {
    const { cx, cz } = m
    m.cylY(cx, cz, (h) => 0.6 + h * 0.3, 0, 12, (x, h, z) =>
      ((x + h) % 3 === 0 || (z + h) % 3 === 0 ? '#b8793a' : '#e0a458'), 'matte')
    m.cylY(cx, cz, 5.2, 13, 13, (x, h, z) => (Math.cos(Math.atan2(z - cz, x - cx) * 6) > 0 ? '#ff9ec4' : null), 'glossy')
    m.sphere(cx, 16, cz, 5, (x, h, z) => (m.noise(x, h, z) > 0.9 ? '#ffc4dc' : '#ff9ec4'), 'glossy')
    m.sphere(cx, 21.5, cz, 4.3, (x, h, z) => (m.noise(x, h, z) > 0.88 ? '#4a2c1a' : '#9ff0c8'), 'glossy')
    m.sphere(cx, 26, cz, 1.4, '#e63946', 'glossy')
    m.line([cx, 27, cz], [cx + 1, 28, cz - 1], '#3d8a2f')
  }),

  frog: buildTemplate(21, 15, 19, (m) => {
    const { cx, cz } = m
    m.cylY(cx, cz, 9.5, 0, 0, (x, h, z) => (Math.abs(Math.atan2(z - cz, x - cx) - 0.4) < 0.3 ? null : '#2f7d3a'), 'matte')
    const green = '#5fb84a'
    m.ellipsoid(cx - 6, 3, cz - 2, 2.2, 2, 3.5, '#4ea33c')                // back legs
    m.ellipsoid(cx + 6, 3, cz - 2, 2.2, 2, 3.5, '#4ea33c')
    m.ellipsoid(cx, 6, cz, 7.5, 4.5, 7, (x, h, z) => ((z - cz) / 7 > 0.3 && h < 6 ? '#d8f0a0' : green), 'glossy')
    for (const ex of [cx - 3.5, cx + 3.5]) {
      m.sphere(ex, 10, cz + 2, 2.3, green, 'glossy')
      m.decalFront(ex, 10, '#15151a', 'glossy'); m.decalFront(ex, 11, '#15151a', 'glossy')
      m.decalFront(ex + 1, 11, '#ffffff', 'glossy')
    }
    for (let dx = -3; dx <= 3; dx++) m.decalFront(cx + dx, Math.abs(dx) === 3 ? 7 : 6, '#2f6a28')
    m.decalFront(cx - 5, 7, '#ff9ab5'); m.decalFront(cx + 5, 7, '#ff9ab5')
    for (const fx of [cx - 4, cx + 4]) m.box(fx - 1, 1, cz + 5, fx + 1, 1, cz + 7, '#4ea33c')   // front feet
    // lily flower
    m.box(cx + 7, 1, cz + 6, cx + 8, 1, cz + 7, '#ffb3d9', 'glossy')
    m.set(cx + 7, 2, cz + 6, '#ffe14d', 'glossy')
  }),

  balloon: buildTemplate(21, 31, 21, (m) => {
    const { cx, cz } = m
    const stripes = ['#e63946', '#fff1d6', '#3a86ff', '#fff1d6']
    m.fill((x, h, z) => {
      const d = Math.hypot(x - cx, z - cz)
      if (h >= 15 && h <= 29) return ((h - 20) / 9.5) ** 2 + (d / 9.2) ** 2 <= 1
      if (h >= 8 && h < 15) return d <= 2.5 + (h - 8) * 0.9
      return false
    }, (x, h, z) => {
      if (h === 17) return '#ffd23f'
      const a = Math.atan2(z - cz, x - cx)
      return stripes[Math.floor(((a + Math.PI) / (2 * Math.PI)) * 12) % 4]
    }, 'glossy')
    m.box(cx - 2, 0, cz - 2, cx + 2, 3, cz + 2, (x, h, z) => ((x + h + z) % 2 ? '#a0703a' : '#8a5e30'), 'matte')
    m.box(cx - 2, 3, cz - 2, cx + 2, 3, cz + 2, '#6b4226', 'matte')
    m.carve((x, h, z) => h === 3 && Math.abs(x - cx) <= 1 && Math.abs(z - cz) <= 1)
    for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]])
      m.line([cx + dx, 4, cz + dz], [cx + dx * 1.2, 8, cz + dz * 1.2], '#6b4226')
    m.cylY(cx, cz, 1, 5, 6, '#ff9f1c', 'magma')                                 // burner flame
  }),

  jukebox: buildTemplate(20, 26, 12, (m) => {
    const cx = 9.5
    m.fill((x, h, z) => {
      if (z < 2 || z > 9 || h > 24) return false
      if (h <= 16) return x >= 1 && x <= 18
      return Math.hypot(x - cx, h - 16) <= 8.5 && h >= 16
    }, (x) => (x <= 2 || x >= 17 ? '#8b352f' : '#5c2827'), 'glossy')
    m.fill((x, h, z) => z === 10 && h >= 5 && h <= 23 && (x === 2 || x === 17 || h === 5 ||
      (h >= 16 && Math.abs(Math.hypot(x - cx, h - 16) - 7.2) < 1.1)), '#f0b84a', 'metal')
    m.fill((x, h, z) => z === 10 && h >= 16 && Math.hypot(x - cx, h - 16) <= 5.7,
      (x, h) => ((x + h) % 4 < 2 ? '#38e1db' : '#ef4fc9'), 'neon')
    m.cylZ(cx, 17, 3.6, 10, 11, '#1b2633', 'glass')
    m.cylZ(cx, 17, 1.2, 11, 11, '#f04d61', 'glossy')
    m.fill((x, h, z) => z === 10 && x >= 4 && x <= 15 && h >= 6 && h <= 13,
      (x, h) => ((x + h) % 2 ? '#31343d' : '#444953'), 'matte')
    for (const x of [5, 8, 11, 14]) m.set(x, 4, 10, x % 2 ? '#5de86e' : '#ffd95a', 'emissive')
    m.box(7, 1, 3, 12, 3, 9, '#b9c3cc', 'metal')
  }),

  typewriter: buildTemplate(24, 15, 16, (m) => {
    m.fill((x, h, z) => x >= 1 && x <= 22 && z >= 2 && z <= 13 && h >= 1 && h <= 3 + (13 - z) * 0.45,
      (x, h, z) => (m.noise(x, h, z) > 0.86 ? '#31595a' : '#264849'), 'glossy')
    m.box(3, 7, 4, 20, 11, 10, '#1d3537', 'metal')
    m.box(2, 10, 3, 21, 11, 5, '#202a2c', 'metal')
    m.box(4, 9, 4, 19, 14, 4, '#f3ead7', 'matte')
    for (const h of [11, 13]) m.box(6, h, 3, h === 11 ? 17 : 14, h, 3, '#73808a', 'matte')
    const rows = [[4, 19, 5], [5, 18, 3], [6, 17, 1]]
    for (const [x0, x1, h] of rows) for (let x = x0; x <= x1; x += 2)
      m.box(x, h, 13, x + 1, h + 1, 14, '#e8dfcb', 'glossy')
    m.box(8, 1, 14, 15, 2, 15, '#d8cdb8', 'glossy')
    m.box(1, 9, 6, 22, 9, 7, '#aeb8b8', 'metal')
    for (const x of [0, 23]) m.cylX(9, 6.5, 1.5, x, x, '#202426', 'matte')
    m.line([21, 10, 6], [23, 13, 6], '#aeb8b8', 'metal')
  }),

  satellite: buildTemplate(25, 18, 17, (m) => {
    const { cx, cz } = m
    // Faceted service module and gold thermal wrap.
    m.cylY(cx, cz, 3.8, 4, 11, (x, h, z) => ((x + h + z) % 3 ? '#c9d1dc' : '#9da8b5'), 'metal')
    m.cylY(cx, cz, 4.3, 5, 8, (x, h, z) => (m.noise(x, h, z) > 0.5 ? '#d8a72e' : '#f0c94d'), 'glossy')
    // Twin solar arrays with a bright grid.
    for (const side of [-1, 1]) {
      const x0 = side < 0 ? 0 : 16, x1 = side < 0 ? 8 : 24
      m.box(x0, 6, cz - 1, x1, 10, cz + 1, (x, h) =>
        ((x + h) % 3 === 0 ? '#5da7e8' : '#174f91'), 'glossy')
      m.line([cx + side * 4, 8, cz], [cx + side * 8, 8, cz], '#7f8a98', 'metal')
    }
    // Communications dish and receiver.
    m.fill((x, h, z) => {
      const d = Math.hypot(x - cx, z - cz)
      return h >= 12 && h <= 16 && d <= (h - 11) * 0.85 && d >= Math.max(0, (h - 11) * 0.85 - 1.2)
    }, '#e7ebf0', 'metal')
    m.line([cx, 12, cz], [cx, 16, cz], '#7f8a98', 'metal')
    m.sphere(cx, 17, cz, 1, '#ff526f', 'emissive')
    m.cylY(cx, cz, 2.4, 2, 3, '#596270', 'metal')
    m.set(cx, 1, cz, '#63f5e2', 'neon')
  }),

  portal: buildTemplate(23, 23, 11, (m) => {
    const cx = 11, ch = 11
    // Heavy carved ring in the x-height plane.
    m.fill((x, h, z) => {
      if (z < 2 || z > 7) return false
      const d = Math.hypot(x - cx, h - ch)
      return d >= 7.2 && d <= 10
    }, (x, h, z) => (m.noise(x, h, z) > 0.72 ? '#77708f' : '#58536f'), 'matte')
    // Layered energy surface and bright inner rim.
    m.fill((x, h, z) => z >= 7 && z <= 9 && Math.hypot(x - cx, h - ch) < 7.2,
      (x, h, z) => ((x + h + z) % 4 < 2 ? '#3cd8e8' : '#8d4de8'), 'glass')
    m.fill((x, h, z) => z === 10 && Math.abs(Math.hypot(x - cx, h - ch) - 7.1) < 0.8,
      (x, h) => ((x + h) % 3 ? '#62f5ff' : '#d284ff'), 'neon')
    // Plinth, runes and floating motes.
    m.box(2, 0, 1, 20, 2, 8, (x, h, z) => ((x + z) % 3 ? '#484458' : '#666077'), 'matte')
    for (const [x, h] of [[3, 5], [19, 5], [2, 12], [20, 12], [5, 18], [17, 18], [11, 21]])
      m.set(x, h, 8, '#d284ff', 'emissive')
    for (const [x, h] of [[7, 8], [14, 15], [10, 17]]) m.set(x, h, 10, '#ffffff', 'emissive')
  }),

  'mars-walker': buildTemplate(21, 22, 19, (m) => {
    const { cx, cz } = m
    const rust = (x, h, z) => (m.noise(x, h, z) > 0.75 ? '#c76a3b' : '#9c4930')
    m.box(4, 11, 4, 16, 16, 14, rust, 'metal')
    m.ellipsoid(cx, 15, cz, 6.5, 3.8, 5.5, rust, 'metal')
    m.box(7, 16, 8, 13, 19, 13, '#75c7de', 'glass')
    m.box(8, 16, 9, 12, 18, 12, '#19384d', 'glossy')
    // Four reverse-jointed legs with broad feet.
    for (const [dx, dz] of [[-5, -4], [5, -4], [-5, 4], [5, 4]]) {
      m.line([cx + dx, 12, cz + dz], [cx + dx * 1.5, 6, cz + dz * 1.45], '#737d88', 'metal', 1)
      m.line([cx + dx * 1.5, 6, cz + dz * 1.45], [cx + dx * 1.25, 1, cz + dz * 1.8], '#4e5660', 'metal', 1)
      m.ellipsoid(cx + dx * 1.25, 0, cz + dz * 1.8, 2.2, 0.8, 1.5, '#343940', 'matte')
    }
    // Sensor head and mast.
    m.line([cx, 19, cz], [cx, 21, cz], '#737d88', 'metal')
    m.box(cx - 2, 20, cz - 1, cx + 2, 21, cz + 1, '#d8dde3', 'metal')
    for (const x of [cx - 1, cx + 1]) m.set(x, 21, cz + 2, '#ff5b55', 'emissive')
    m.box(4, 13, 15, 7, 14, 18, '#294f87', 'glossy')
    m.box(13, 13, 15, 16, 14, 18, '#294f87', 'glossy')
  }),

  'record-player': buildTemplate(24, 13, 20, (m) => {
    // Walnut plinth and hinged transparent dust cover.
    m.box(1, 1, 1, 22, 5, 18, (x, h, z) => ((x + z) % 4 ? '#7a4728' : '#925936'), 'matte')
    m.box(2, 6, 2, 21, 11, 3, '#b8e3ed', 'glass')
    m.box(2, 11, 2, 21, 11, 17, '#b8e3ed', 'glass')
    m.box(2, 6, 17, 21, 11, 17, '#b8e3ed', 'glass')
    // Platter, vinyl and center label.
    m.cylY(10, 10, 7.5, 6, 6, '#929ba5', 'metal')
    m.cylY(10, 10, 6.8, 7, 7, (x, h, z) => (Math.round(Math.hypot(x - 10, z - 10)) % 2 ? '#17171b' : '#29292e'), 'glossy')
    m.cylY(10, 10, 2, 8, 8, '#ef4f68', 'glossy')
    m.set(10, 9, 10, '#d9dde3', 'metal')
    // Tone arm and controls.
    m.cylY(19, 6, 1.8, 6, 8, '#aeb7c0', 'metal')
    m.line([19, 9, 6], [17, 10, 12], '#d9dde3', 'metal', 0.7)
    m.line([17, 10, 12], [14, 9, 14], '#d9dde3', 'metal', 0.7)
    m.set(14, 9, 14, '#f2c14e', 'glossy')
    for (const x of [4, 19]) m.cylY(x, 16, 0.9, 6, 7, '#e7ebef', 'metal')
  }),

  'rotary-phone': buildTemplate(22, 16, 18, (m) => {
    const red = (x, h, z) => (m.noise(x, h, z) > 0.8 ? '#d9545b' : '#b53a48')
    // Sloped telephone body.
    m.fill((x, h, z) => x >= 2 && x <= 19 && z >= 3 && z <= 14 && h >= 1 && h <= 5 + (14 - z) * 0.25,
      red, 'glossy')
    // Rotary dial on the front face.
    m.cylZ(10.5, 7.5, 5, 14, 16, '#ede2ca', 'glossy')
    m.cylZ(10.5, 7.5, 3.1, 16, 17, '#31333a', 'glossy')
    m.cylZ(10.5, 7.5, 1.4, 17, 17, '#e8d8bc', 'matte')
    for (let i = 0; i < 10; i++) {
      const a = i * Math.PI * 2 / 10
      m.set(10.5 + Math.cos(a) * 3.8, 7.5 + Math.sin(a) * 3.8, 17, '#27292f', 'glossy')
    }
    // Handset with raised earpieces.
    m.line([4, 13, 8], [18, 13, 8], '#8f2938', 'glossy', 1.7)
    for (const x of [3, 19]) m.ellipsoid(x, 13, 8, 2.3, 2.3, 3.2, '#a83040', 'glossy')
    m.line([18, 11, 7], [21, 5, 2], '#27292f', 'matte')
    m.set(18, 3, 15, '#f0c94d', 'emissive')
  }),

  cauldron: buildTemplate(21, 20, 21, (m) => {
    const { cx, cz } = m
    // Rounded iron pot, hollow top and curled feet.
    m.ellipsoid(cx, 7, cz, 8, 7, 8, (x, h, z) => (m.noise(x, h, z) > 0.82 ? '#47414f' : '#2d2933'), 'metal',
      (x, h) => h <= 12)
    m.carve((x, h, z) => h >= 9 && Math.hypot(x - cx, z - cz) <= 6.2)
    m.cylY(cx, cz, 7.5, 9, 10, '#4e4658', 'metal', 5.8)
    m.cylY(cx, cz, 5.8, 9, 9, (x, h, z) => (m.noise(x, h, z) > 0.78 ? '#b7ff6a' : '#62d95f'), 'magma')
    for (const [dx, dz] of [[-5, -4], [5, -4], [-5, 4], [5, 4]])
      m.line([cx + dx, 4, cz + dz], [cx + dx * 1.3, 0, cz + dz * 1.3], '#24212a', 'metal', 1.2)
    // Bubbles, magic sparks and rising smoke curls.
    for (const [dx, dz, r] of [[-3, 1, 1.2], [2, -2, 0.9], [3, 2, 1.1], [-1, -3, 0.8]])
      m.sphere(cx + dx, 11, cz + dz, r, '#baff78', 'emissive')
    m.line([cx - 2, 12, cz], [cx + 1, 15, cz - 1], '#9af4ae', 'glass')
    m.line([cx + 1, 15, cz - 1], [cx - 1, 18, cz + 1], '#c69aff', 'glass')
    m.sphere(cx - 1, 19, cz + 1, 1, '#e2c9ff', 'emissive')
  }),

  spellbook: buildTemplate(22, 16, 14, (m) => {
    const cx = 10.5, cz = 6.5
    // Thick leather cover below two fanned page blocks.
    m.box(1, 2, 1, 20, 4, 12, '#563061', 'matte')
    m.fill((x, h, z) => h >= 4 && h <= 9 && z >= 2 && z <= 11 &&
      ((x <= cx && h <= 5 + (cx - x) * 0.35) || (x >= cx && h <= 5 + (x - cx) * 0.35)),
      (x, h, z) => ((h + z) % 3 ? '#f1dfb2' : '#ddc58d'), 'matte')
    m.box(cx, 4, 2, cx, 8, 11, '#7b4a34', 'matte')
    // Glowing runes on the open pages.
    for (const [x, h, z] of [[4, 7, 11], [6, 8, 11], [8, 6, 11], [13, 6, 11], [15, 8, 11], [17, 7, 11]])
      m.set(x, h, z, '#5ce8ff', 'emissive')
    m.line([4, 6, 12], [8, 8, 12], '#89734f', 'matte')
    m.line([13, 8, 12], [18, 6, 12], '#89734f', 'matte')
    // Floating bookmark gem and orbiting motes.
    m.line([cx, 4, 12], [cx, 0, 13], '#e34f75', 'glossy')
    m.shard([cx, 10, cz], [0, 1, 0], 5, 1.5, '#a970ff', 'crystal')
    for (const [x, h, z] of [[2, 12, 7], [19, 13, 6], [5, 15, 4], [16, 14, 10]]) m.set(x, h, z, '#ffe76a', 'emissive')
  }),

  aquarium: buildTemplate(24, 19, 16, (m) => {
    // Tank base, top frame, corners and translucent panes.
    m.box(1, 0, 1, 22, 2, 14, '#313842', 'metal')
    m.box(1, 17, 1, 22, 18, 14, '#313842', 'metal')
    for (const [x, z] of [[1, 1], [22, 1], [1, 14], [22, 14]]) m.box(x, 2, z, x, 16, z, '#596571', 'metal')
    m.box(2, 3, 1, 21, 16, 1, '#92e3ef', 'glass')
    // Keep the front face mostly open so the miniature scene remains readable.
    m.fill((x, h, z) => z === 14 && x >= 2 && x <= 21 && h >= 3 && h <= 16 &&
      (x === 2 || x === 21 || h === 3 || h === 16), '#92e3ef', 'glass')
    m.box(1, 3, 2, 1, 16, 13, '#92e3ef', 'glass')
    m.box(22, 3, 2, 22, 16, 13, '#92e3ef', 'glass')
    // Gravel, waving plants and coral.
    m.box(2, 3, 2, 21, 3, 13, (x, h, z) => (m.noise(x, h, z) > 0.55 ? '#d3b27a' : '#8d7658'), 'matte')
    for (const [x, z, c] of [[4, 5, '#4fbf62'], [7, 10, '#2d9c73'], [18, 5, '#58c96d'], [20, 11, '#2d9c73']]) {
      m.line([x, 4, z], [x - 1, 11, z], c, 'matte')
      m.line([x, 7, z], [x + 2, 10, z + 1], c, 'matte')
    }
    m.shard([12, 4, 5], [-0.3, 1, 0.2], 6, 1.2, '#f2777a', 'matte')
    m.shard([14, 4, 6], [0.4, 1, 0], 5, 1.1, '#f2a45f', 'matte')
    // Two bright fish, bubbles and a tiny castle ornament.
    m.ellipsoid(8, 12, 11, 3, 1.8, 1.2, '#ffb13d', 'glossy')
    m.shard([5, 12, 11], [-1, 0, 0], 2, 1.6, '#ff7d38', 'glossy')
    m.set(9, 12, 12, '#151922', 'glossy')
    m.ellipsoid(17, 9, 7, 2.5, 1.5, 1, '#5bc8e8', 'glossy')
    m.shard([19, 9, 7], [1, 0, 0], 2, 1.3, '#477de0', 'glossy')
    m.set(16, 9, 8, '#151922', 'glossy')
    m.box(11, 4, 10, 15, 7, 13, '#8a7b70', 'matte')
    m.box(12, 7, 11, 12, 9, 12, '#8a7b70', 'matte')
    m.box(14, 7, 11, 14, 9, 12, '#8a7b70', 'matte')
    for (const [x, h, z] of [[5, 13, 8], [6, 15, 8], [18, 12, 5], [19, 14, 5]]) m.set(x, h, z, '#e9fbff', 'glass')
  }),

  // ─── House Set ─────────────────────────────────────────────────────────────────

  door: buildTemplate(18, 26, 8, (m) => {
    const frameDark = '#452b1a'
    const frameMid = '#5c3a24'
    const woodBase = '#8a532d'
    const woodDark = '#6b3f20'
    const woodLight = '#9e6236'
    const brass = '#e5b842'
    const brassDark = '#ad8420'
    const stone = '#7d828a'
    const stoneDark = '#5a5d63'

    // Stone step at the bottom
    m.box(1, 0, 0, 16, 1, 7, (x, h, z) => (m.noise(x, h, z) > 0.6 ? stoneDark : stone), 'matte')

    // Outer door frame (casing)
    m.box(2, 1, 1, 4, 24, 6, (x, h, z) => (z >= 5 ? frameMid : frameDark))
    m.box(13, 1, 1, 15, 24, 6, (x, h, z) => (z >= 5 ? frameMid : frameDark))
    m.box(2, 23, 1, 15, 25, 6, (x, h) => (h === 25 ? frameMid : frameDark))

    // Main door slab inside frame: x: 5..12, h: 2..22, z: 2..4
    m.box(5, 2, 2, 12, 22, 4, (x, h) => ((x + h) % 3 === 0 ? woodLight : woodBase))

    // Recessed or raised panel moldings on door face (z: 4)
    // Upper panel: x: 6..11, h: 13..21
    m.box(6, 13, 4, 11, 21, 4, woodLight)
    m.box(7, 14, 4, 10, 20, 4, woodDark)
    m.box(8, 15, 4, 9, 19, 4, woodBase)

    // Lower panel: x: 6..11, h: 3..11
    m.box(6, 3, 4, 11, 11, 4, woodLight)
    m.box(7, 4, 4, 10, 10, 4, woodDark)
    m.box(8, 5, 4, 9, 9, 4, woodBase)

    // Hinges on left jamb (metal)
    m.box(4, 19, 4, 5, 21, 5, '#2e3033', 'metal')
    m.box(4, 5, 4, 5, 7, 5, '#2e3033', 'metal')

    // Door knob and escutcheon plate on right side
    m.box(11, 10, 5, 11, 13, 5, brassDark, 'metal')
    m.set(11, 11, 6, brass, 'metal')
    m.set(11, 12, 6, brass, 'metal')
    m.set(11, 10, 5, '#1a1a1a') // keyhole

    // Mail slot
    m.box(7, 12, 5, 10, 12, 5, brass, 'metal')
  }),

  window: buildTemplate(22, 22, 8, (m) => {
    const frameWhite = '#e8edf2'
    const sillWood = '#3d281a'
    const glassColor = '#a8daf5'
    const glassLight = '#ccebff'
    const shutterGreen = '#456b52'
    const shutterDark = '#324e3c'

    // Windowsill at bottom: x: 2..19, h: 3..4, z: 1..6
    m.box(2, 3, 1, 19, 4, 6, sillWood)

    // Window flower box on sill: x: 4..17, h: 3..6, z: 5..7
    m.box(4, 3, 5, 17, 6, 7, '#784323')
    m.box(5, 6, 6, 16, 6, 6, '#402615') // Soil
    for (let x = 4; x <= 17; x++) {
      m.set(x, 7, 6, m.noise(x, 7, 6) > 0.4 ? '#43a047' : '#2e7d32')
      if (x % 3 === 0) {
        const flowerColor = x % 6 === 0 ? '#e91e63' : x % 4 === 0 ? '#ffeb3b' : '#ff5722'
        m.set(x, 8, 6, flowerColor, 'glossy')
      }
    }

    // Window frame surround
    m.box(5, 20, 2, 16, 21, 4, frameWhite)
    m.box(5, 5, 2, 16, 6, 4, frameWhite)
    m.box(5, 5, 2, 6, 21, 4, frameWhite)
    m.box(15, 5, 2, 16, 21, 4, frameWhite)

    // Central crossbars (mullions)
    m.box(10, 5, 3, 11, 21, 3, frameWhite)
    m.box(5, 13, 3, 16, 13, 3, frameWhite)

    // Glass panes with 'glass' material
    m.fill((x, h, z) => {
      const inX = (x >= 7 && x <= 9) || (x >= 12 && x <= 14)
      const inH = (h >= 7 && h <= 12) || (h >= 14 && h <= 19)
      return inX && inH && z === 3
    }, (x, h) => ((x + h) % 2 === 0 ? glassLight : glassColor), 'glass')

    // Wooden shutters on left and right sides
    m.box(1, 5, 3, 4, 20, 4, (x, h) => (h % 3 === 0 ? shutterDark : shutterGreen))
    m.box(1, 5, 4, 4, 6, 4, shutterDark)
    m.box(1, 19, 4, 4, 20, 4, shutterDark)

    m.box(17, 5, 3, 20, 20, 4, (x, h) => (h % 3 === 0 ? shutterDark : shutterGreen))
    m.box(17, 5, 4, 20, 6, 4, shutterDark)
    m.box(17, 19, 4, 20, 20, 4, shutterDark)
  }),

  chair: buildTemplate(16, 24, 16, (m) => {
    const wood = '#7c4d30'
    const woodDark = '#56331e'
    const woodLight = '#9a6442'
    const cushion = '#c0392b'
    const cushionLight = '#d9534f'

    // 4 legs
    for (const [lx, lz] of [[3, 3], [12, 3], [3, 12], [12, 12]]) {
      m.box(lx, 0, lz, lx + 1, 9, lz + 1, (x, h) => (h < 2 ? woodDark : wood))
    }

    // Cross stretchers (leg braces)
    m.box(3, 4, 4, 4, 4, 11, woodDark)
    m.box(12, 4, 4, 13, 4, 11, woodDark)
    m.box(4, 3, 3, 11, 3, 4, woodDark)
    m.box(4, 3, 12, 11, 3, 13, woodDark)

    // Seat frame under cushion
    m.box(2, 9, 2, 13, 9, 13, woodDark)

    // Padded seat cushion
    m.box(2, 10, 2, 13, 11, 13, (x, h, z) => {
      const edge = x === 2 || x === 13 || z === 2 || z === 13
      return edge ? cushion : cushionLight
    })

    // Backrest posts
    m.box(3, 11, 3, 4, 23, 4, wood)
    m.box(12, 11, 3, 13, 23, 4, wood)

    // Top curved crest rail
    m.box(2, 22, 3, 13, 23, 4, woodLight)
    m.set(1, 23, 3, wood)
    m.set(14, 23, 3, wood)

    // Middle horizontal back rail
    m.box(4, 16, 3, 11, 16, 3, woodDark)

    // Vertical backrest slats
    m.box(6, 12, 3, 7, 21, 3, (x, h) => (h % 2 ? woodLight : wood))
    m.box(9, 12, 3, 10, 21, 3, (x, h) => (h % 2 ? woodLight : wood))
  }),

  armchair: buildTemplate(20, 20, 18, (m) => {
    const legWood = '#4a2c17'
    const fabric = '#296d7e'
    const fabricDark = '#1b4a56'
    const fabricLight = '#3a8c9e'
    const cushion = '#358193'
    const cushionHighlight = '#4fa3b6'

    // 4 short wooden tapered legs
    m.box(3, 0, 3, 4, 2, 4, legWood)
    m.box(15, 0, 3, 16, 2, 4, legWood)
    m.box(3, 0, 13, 4, 2, 14, legWood)
    m.box(15, 0, 13, 16, 2, 14, legWood)

    // Main base frame
    m.box(2, 3, 2, 17, 6, 15, fabricDark)

    // Deep seat cushion
    m.box(5, 7, 3, 14, 9, 13, (x, h, z) => {
      if (h === 9 && (x >= 7 && x <= 12) && (z >= 5 && z <= 10)) return cushionHighlight
      return cushion
    })

    // Backrest with tufted detailing
    m.box(3, 7, 2, 16, 19, 5, (x, h, z) => {
      const isButton = (h === 11 || h === 15) && (x === 6 || x === 10 || x === 13) && z === 5
      if (isButton) return fabricDark
      return (x === 3 || x === 16 || h === 19) ? fabricDark : fabric
    })
    m.box(4, 19, 3, 15, 19, 4, fabricLight)

    // Left & right armrests
    m.box(2, 6, 3, 4, 12, 14, fabric)
    m.box(2, 13, 3, 4, 13, 14, fabricLight)
    m.box(15, 6, 3, 17, 12, 14, fabric)
    m.box(15, 13, 3, 17, 13, 14, fabricLight)
  }),

  table: buildTemplate(22, 16, 18, (m) => {
    const legWood = '#5a351e'
    const apronWood = '#6d4125'
    const topWood = '#965a34'
    const topWoodLight = '#af6d40'
    const topBorder = '#4a2b18'

    // 4 sturdy legs at corners
    for (const [lx, lz] of [[3, 3], [17, 3], [3, 13], [17, 13]]) {
      m.box(lx, 0, lz, lx + 1, 12, lz + 1, (x, h) => (h === 0 || h === 8 ? legWood : '#754528'))
    }

    // Under-table apron rails
    m.box(3, 10, 4, 4, 12, 13, apronWood)
    m.box(17, 10, 4, 18, 12, 13, apronWood)
    m.box(5, 10, 3, 16, 12, 4, apronWood)
    m.box(5, 10, 13, 16, 12, 14, apronWood)

    // Tabletop slab
    m.box(1, 13, 1, 20, 14, 16, (x, h, z) => {
      const isEdge = x === 1 || x === 20 || z === 1 || z === 16
      if (isEdge) return topBorder
      return (x + z) % 4 === 0 ? topWoodLight : topWood
    })

    // Centerpiece runner and fruit bowl
    m.box(8, 15, 1, 13, 15, 16, (x, h, z) => (z % 3 === 0 ? '#d4af37' : '#f0e6d2'), 'matte')
    m.box(9, 15, 7, 12, 16, 10, '#ffffff', 'glossy')
    m.set(10, 17, 8, '#e74c3c', 'glossy')
    m.set(11, 17, 9, '#f1c40f', 'glossy')
    m.set(10, 17, 9, '#2ecc71', 'glossy')
  }),

  house: buildTemplate(24, 26, 24, (m) => {
    const foundation = '#6e7075'
    const foundationDark = '#4e5055'
    const wallPlaster = '#f2efe9'
    const wallTrim = '#5c3a21'
    const roofTile = '#b23b2b'
    const roofDark = '#8c281b'
    const roofRidge = '#6d1e15'
    const glass = '#a2d5ec'
    const doorWood = '#7d4a27'
    const chimneyBrick = '#9e4738'

    // Cobblestone foundation
    m.box(2, 0, 2, 21, 2, 21, (x, h, z) => (m.noise(x, h, z) > 0.5 ? foundation : foundationDark), 'matte')

    // Main house walls
    m.box(3, 3, 3, 20, 14, 20, (x, h, z) => {
      const isCorner = (x === 3 || x === 20) && (z === 3 || z === 20)
      const isBeamH = h === 3 || h === 8 || h === 14
      if (isCorner || isBeamH) return wallTrim
      return wallPlaster
    })

    // Front door
    m.box(10, 3, 20, 13, 9, 20, doorWood)
    m.box(9, 3, 20, 9, 10, 20, wallTrim)
    m.box(14, 3, 20, 14, 10, 20, wallTrim)
    m.box(9, 10, 20, 14, 10, 20, wallTrim)
    m.set(13, 6, 21, '#e5b842', 'metal')
    m.box(10, 1, 21, 13, 2, 22, foundation, 'matte') // Step

    // Porch lantern
    m.set(11, 11, 21, '#ffc107', 'neon')
    m.set(12, 11, 21, '#ffc107', 'neon')

    // Front windows
    m.box(5, 5, 20, 7, 8, 20, glass, 'glass')
    m.box(4, 4, 20, 8, 4, 21, wallTrim)
    m.box(4, 5, 20, 4, 8, 20, '#3e6b48')
    m.box(8, 5, 20, 8, 8, 20, '#3e6b48')

    m.box(16, 5, 20, 18, 8, 20, glass, 'glass')
    m.box(15, 4, 20, 19, 4, 21, wallTrim)
    m.box(15, 5, 20, 15, 8, 20, '#3e6b48')
    m.box(19, 5, 20, 19, 8, 20, '#3e6b48')

    // Side windows
    m.box(3, 6, 9, 3, 9, 14, glass, 'glass')
    m.box(20, 6, 9, 20, 9, 14, glass, 'glass')

    // Sloped roof
    for (let step = 0; step <= 8; step++) {
      const h = 14 + step
      const zMin = 2 + step
      const zMax = 21 - step
      if (zMin > zMax) break
      for (let z = zMin; z <= zMax; z++) {
        for (let x = 1; x <= 22; x++) {
          const isRidge = zMin === zMax || z === zMin || z === zMax
          const c = isRidge ? (step === 8 ? roofRidge : roofDark) : roofTile
          m.set(x, h, z, c)
        }
      }
    }

    // Gable triangular wall fill
    for (let step = 0; step <= 7; step++) {
      const h = 14 + step
      const zMin = 3 + step
      const zMax = 20 - step
      m.box(3, h, zMin, 3, h, zMax, wallPlaster)
      m.box(20, h, zMin, 20, h, zMax, wallPlaster)
    }

    // Attic round window
    m.box(11, 16, 5, 12, 17, 5, glass, 'glass')

    // Chimney with smoke
    m.box(16, 15, 6, 18, 24, 8, (x, h) => (h === 24 ? '#5c231a' : ((x + h) % 2 ? chimneyBrick : '#87392c')), 'matte')
    m.box(15, 24, 5, 19, 24, 9, '#4a1b14', 'matte')
    m.sphere(17, 26, 7, 1.2, '#e0e6ed', 'matte')
  }),

  bookshelf: buildTemplate(20, 26, 10, (m) => {
    const wood = '#5c3822'
    const woodDark = '#3e2415'
    const woodLight = '#784b2e'

    // Outer bookshelf cabinet
    m.box(2, 0, 1, 3, 25, 8, wood)
    m.box(16, 0, 1, 17, 25, 8, wood)
    m.box(2, 0, 1, 17, 1, 8, woodDark)
    m.box(1, 24, 0, 18, 25, 9, woodLight)
    m.box(3, 1, 1, 16, 24, 2, woodDark)

    // Shelf dividers
    m.box(3, 7, 2, 16, 7, 8, wood)
    m.box(3, 13, 2, 16, 13, 8, wood)
    m.box(3, 19, 2, 16, 19, 8, wood)

    // Top shelf: Plant & crystal
    m.box(4, 20, 4, 6, 21, 6, '#b55330', 'matte')
    m.sphere(5, 22, 5, 1.3, '#388e3c')
    m.shard([14, 20, 5], [0, 1, 0], 3, 1.2, '#9c27b0', 'glass')

    // Bookshelf row 3
    const bookColors = ['#c0392b', '#2980b9', '#27ae60', '#f39c12', '#8e44ad', '#d35400', '#16a085', '#34495e']
    let bx = 4
    for (let i = 0; i < 6; i++) {
      const bh = 14 + 3 + (i % 2)
      const color = bookColors[i % bookColors.length]
      m.box(bx, 14, 3, bx + 1, bh, 7, color)
      m.box(bx, 14, 7, bx + 1, bh, 7, '#fdfefe')
      bx += 2
    }

    // Bookshelf row 2
    bx = 4
    for (let i = 0; i < 5; i++) {
      const bh = 8 + 3 + ((i * 2) % 3)
      const color = bookColors[(i + 3) % bookColors.length]
      m.box(bx, 8, 3, bx + 1, bh, 7, color)
      bx += 2
    }
    m.line([14, 8, 5], [15, 12, 5], '#e74c3c', 'matte', 0.6)

    // Bottom shelf: large books
    m.box(4, 2, 3, 6, 6, 7, '#1b3a4b')
    m.box(7, 2, 3, 9, 6, 7, '#4a154b')
    m.box(10, 2, 3, 12, 5, 7, '#593e2b')
    m.box(13, 2, 3, 15, 3, 7, '#b7950b')
    m.box(13, 4, 3, 15, 4, 7, '#239b56')
  }),

  // ─── Forest Set ────────────────────────────────────────────────────────────────

  'pine-tree': buildTemplate(20, 28, 20, (m) => {
    const { cx, cz } = m
    const trunkDark = '#382315'
    const trunkMid = '#4d321f'
    const trunkLight = '#63422a'

    // Mossy ground patch with pine needle litter
    m.cylY(cx, cz, 8.5, 0, 0, (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.65 ? '#2b441f' : n > 0.35 ? '#3c5a27' : '#453020'
    }, 'matte')

    // Tree trunk tapering upwards
    m.cylY(cx, cz, (h) => Math.max(1.1, 2.3 - h * 0.08), 0, 14, (x, h, z) => {
      const a = Math.atan2(z - cz, x - cx)
      const ridge = Math.cos(a * 4) > 0.3
      return ridge ? trunkLight : ((x + h) % 2 ? trunkMid : trunkDark)
    })

    // 4 tiered needle canopy skirts
    // Tier 1 (bottom): h: 6..13
    m.fill((x, h, z) => {
      if (h < 6 || h > 13) return false
      const r = 7.6 - (h - 6) * 0.72
      const d = Math.hypot(x - cx, z - cz)
      return d <= r && d >= 1.2
    }, (x, h, z) => {
      const edge = Math.hypot(x - cx, z - cz) > (7.6 - (h - 6) * 0.72) - 0.9
      return edge ? '#346d2c' : (m.noise(x, h, z) > 0.5 ? '#1f481b' : '#275822')
    })
    // Pinecones hanging beneath tier 1
    for (const [px, pz] of [[cx - 4, cz - 3], [cx + 4, cz - 2], [cx - 2, cz + 4], [cx + 3, cz + 4]]) {
      m.box(px, 5, pz, px + 1, 6, pz + 1, '#56351d', 'matte')
    }

    // Tier 2 (lower-mid): h: 11..18
    m.fill((x, h, z) => {
      if (h < 11 || h > 18) return false
      const r = 6.2 - (h - 11) * 0.75
      const d = Math.hypot(x - cx, z - cz)
      return d <= r && d >= 1.0
    }, (x, h, z) => {
      const edge = Math.hypot(x - cx, z - cz) > (6.2 - (h - 11) * 0.75) - 0.9
      return edge ? '#3c7a33' : (m.noise(x, h, z) > 0.5 ? '#245220' : '#2d6228')
    })

    // Tier 3 (upper-mid): h: 16..23
    m.fill((x, h, z) => {
      if (h < 16 || h > 23) return false
      const r = 4.8 - (h - 16) * 0.78
      const d = Math.hypot(x - cx, z - cz)
      return d <= r && d >= 0.8
    }, (x, h, z) => {
      const edge = Math.hypot(x - cx, z - cz) > (4.8 - (h - 16) * 0.78) - 0.9
      return edge ? '#468b3c' : (m.noise(x, h, z) > 0.5 ? '#2c6628' : '#357730')
    })

    // Tier 4 (top crown): h: 21..27
    m.fill((x, h, z) => {
      if (h < 21 || h > 27) return false
      const r = 3.2 - (h - 21) * 0.52
      return Math.hypot(x - cx, z - cz) <= r
    }, (x, h, z) => (m.noise(x, h, z) > 0.5 ? '#3a7d34' : '#499342'))
    m.set(cx, 27, cz, '#5ca754')
  }),

  'oak-tree': buildTemplate(24, 28, 24, (m) => {
    const { cx, cz } = m
    const bark = '#4a2f1b'
    const barkDark = '#352011'
    const barkLight = '#5d3d25'

    // Grassy forest mound with moss
    m.ellipsoid(cx, 0, cz, 10, 1.4, 10, (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.6 ? '#2e6b22' : n > 0.3 ? '#3d822d' : '#4d9338'
    }, 'matte')

    // Sprawling tree roots radiating outwards
    m.line([cx - 2, 0, cz - 2], [cx - 8, 0, cz - 7], bark, 'matte', 1.3)
    m.line([cx + 2, 0, cz - 2], [cx + 8, 0, cz - 8], bark, 'matte', 1.3)
    m.line([cx - 2, 0, cz + 2], [cx - 8, 0, cz + 7], bark, 'matte', 1.3)
    m.line([cx + 2, 0, cz + 2], [cx + 7, 0, cz + 8], bark, 'matte', 1.3)

    // Sturdy gnarly trunk
    m.cylY(cx, cz, (h) => Math.max(2.2, 4.0 - h * 0.14), 0, 15, (x, h, z) => {
      const a = Math.atan2(z - cz, x - cx)
      const groove = Math.cos(a * 5) > 0.25
      return groove ? barkLight : ((x + h) % 2 ? bark : barkDark)
    })

    // Tree hollow / knot at front
    m.box(cx - 0.5, 6, cz + 3, cx + 0.5, 8, cz + 3, '#1c1008')

    // Major branches reaching outwards into canopy
    m.line([cx, 13, cz], [cx - 5, 17, cz - 4], bark, 'matte', 1.4)
    m.line([cx, 13, cz], [cx + 5, 17, cz - 4], bark, 'matte', 1.4)
    m.line([cx, 13, cz], [cx - 4, 18, cz + 5], bark, 'matte', 1.4)
    m.line([cx, 13, cz], [cx + 4, 18, cz + 5], bark, 'matte', 1.4)

    // Overlapping lush foliage spheres
    const leafColor = (x, h, z) => {
      const n = m.noise(x, h, z)
      if (n > 0.88) return '#e53935' // Red forest berries
      if (n > 0.82) return '#d4af37' // Golden autumn leaves
      return n > 0.55 ? '#2e7d32' : n > 0.25 ? '#388e3c' : '#1b5e20'
    }

    m.sphere(cx, 21, cz, 7.6, leafColor)
    m.sphere(cx - 4.5, 19, cz + 3.5, 5.2, leafColor)
    m.sphere(cx + 4.5, 19, cz + 3.5, 5.2, leafColor)
    m.sphere(cx - 4.5, 19, cz - 3.5, 5.2, leafColor)
    m.sphere(cx + 4.5, 19, cz - 3.5, 5.2, leafColor)
    m.sphere(cx, 24, cz, 4.8, leafColor)
  }),

  'log-cabin': buildTemplate(24, 22, 22, (m) => {
    const stone = '#687884'
    const stoneDark = '#485662'
    const logDark = '#4e331e'
    const logMid = '#634228'
    const logLight = '#785334'
    const logEnd = '#8f6440'
    const roofShingle = '#385332'
    const roofDark = '#293e25'

    // River-stone foundation
    m.box(2, 0, 2, 21, 1, 19, (x, h, z) => (m.noise(x, h, z) > 0.5 ? stoneDark : stone), 'matte')

    // Stacked log cabin walls: horizontal log courses from h: 2 to h: 12
    m.fill((x, h, z) => {
      if (h < 2 || h > 12) return false
      const inX = x >= 3 && x <= 20
      const inZ = z >= 3 && z <= 18
      const isWall = (x === 3 || x === 20) && inZ || (z === 3 || z === 18) && inX
      // Notch extensions at corners
      const isCornerNotch = (x === 2 || x === 21) && (z === 3 || z === 18) ||
                            (z === 2 || z === 19) && (x === 3 || x === 20)
      return isWall || isCornerNotch
    }, (x, h, z) => {
      const isEnd = x <= 2 || x >= 21 || z <= 2 || z >= 19
      if (isEnd) return logEnd
      const logRow = Math.floor(h / 2) % 2
      return logRow ? logMid : ((x + z) % 3 === 0 ? logLight : logDark)
    })

    // Wooden plank door
    m.box(5, 2, 18, 8, 8, 18, '#3b2314')
    m.box(4, 2, 18, 4, 9, 18, logDark)
    m.box(9, 2, 18, 9, 9, 18, logDark)
    m.box(4, 9, 18, 9, 9, 18, logDark)
    m.set(8, 5, 19, '#d4af37', 'metal') // Handle

    // Front window with glowing warm interior light
    m.box(13, 4, 18, 17, 7, 18, '#ffeb3b', 'neon')
    m.box(15, 4, 19, 15, 7, 19, logDark) // Cross bars
    m.box(13, 5, 19, 17, 5, 19, logDark)
    m.box(12, 3, 18, 18, 3, 19, logMid)  // Sill

    // Side window on right wall (x: 20)
    m.box(20, 5, 8, 20, 8, 13, '#ffeb3b', 'neon')
    m.box(21, 6, 8, 21, 6, 13, logDark)
    m.box(20, 4, 7, 21, 4, 14, logMid)

    // Front porch deck & posts
    m.box(3, 1, 19, 10, 1, 21, logMid)
    m.box(3, 2, 21, 3, 11, 21, logDark) // Left post
    m.box(10, 2, 21, 10, 11, 21, logDark) // Right post

    // Firewood stack next to porch
    for (let h = 2; h <= 4; h++) {
      for (let x = 13; x <= 18; x += 2) {
        m.box(x, h, 19, x + 1, h, 20, (x_, h_, z_) => (z_ === 20 ? '#9c6f47' : '#5c3a22'))
      }
    }

    // Gabled roof with mossy shingles
    for (let step = 0; step <= 8; step++) {
      const h = 12 + step
      const zMin = 1 + step
      const zMax = 20 - step
      if (zMin > zMax) break
      for (let z = zMin; z <= zMax; z++) {
        for (let x = 1; x <= 22; x++) {
          const isEdge = z === zMin || z === zMax
          m.set(x, h, z, isEdge ? roofDark : (m.noise(x, h, z) > 0.4 ? roofShingle : '#47633f'))
        }
      }
    }

    // Gable triangular fill on left (x=3) and right (x=20)
    for (let step = 0; step <= 7; step++) {
      const h = 12 + step
      const zMin = 3 + step
      const zMax = 18 - step
      m.box(3, h, zMin, 3, h, zMax, logMid)
      m.box(20, h, zMin, 20, h, zMax, logMid)
    }

    // River stone fireplace chimney on left wall
    m.box(1, 0, 8, 3, 20, 12, (x, h, z) => ((x + h + z) % 2 ? stone : stoneDark), 'matte')
    m.box(1, 20, 8, 3, 21, 12, '#333e46', 'matte')
  }),

  stump: buildTemplate(18, 16, 18, (m) => {
    const { cx, cz } = m
    const bark = '#48301e'
    const barkDark = '#321f11'
    const barkMoss = '#507c32'
    const woodHeart = '#986c47'
    const woodLight = '#b58b62'

    // Autumn forest leaf litter & moss ground
    m.fill((x, h, z) => h === 0 && Math.hypot(x - cx, z - cz) <= 8.5, (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.7 ? '#c25e26' : n > 0.4 ? '#3e6325' : '#453020'
    }, 'matte')

    // Root buttresses flaring outward
    m.line([cx - 2, 0, cz - 2], [cx - 6, 0, cz - 6], bark, 'matte', 1.2)
    m.line([cx + 2, 0, cz - 2], [cx + 6, 0, cz - 6], bark, 'matte', 1.2)
    m.line([cx - 2, 0, cz + 2], [cx - 6, 0, cz + 6], bark, 'matte', 1.2)
    m.line([cx + 2, 0, cz + 2], [cx + 6, 0, cz + 6], bark, 'matte', 1.2)

    // Main weathered stump body: h: 0..9
    m.cylY(cx, cz, (h) => 5.4 - h * 0.08, 0, 9, (x, h, z) => {
      // Moss climbing up north & west sides
      const isMossy = (x < cx || z > cz) && m.noise(x, h, z) > 0.45
      if (isMossy) return barkMoss
      return (x + h) % 2 ? bark : barkDark
    })

    // Cut top surface with annual growth rings at h: 9
    m.fill((x, h, z) => h === 9 && Math.hypot(x - cx, z - cz) <= 4.7, (x, h, z) => {
      const d = Math.hypot(x - cx, z - cz)
      if (d < 1.2) return '#2e1c10' // Central hollow cavity
      const ring = Math.floor(d * 2.2) % 2
      return ring ? woodLight : woodHeart
    })

    // Center hollow cavity depression
    m.box(cx - 0.5, 7, cz - 0.5, cx + 0.5, 8, cz + 0.5, '#22140a')

    // Shelf bracket fungi growing from right side bark
    m.box(cx + 4, 4, cz - 1, cx + 6, 4, cz + 2, '#d47833')
    m.box(cx + 4, 4, cz + 2, cx + 6, 4, cz + 2, '#f0ad6b') // Pale margin
    m.box(cx + 3, 6, cz + 2, cx + 5, 6, cz + 4, '#d47833')

    // Green sapling sprout emerging from the hollow center
    m.box(cx, 10, cz, cx, 13, cz, '#388e3c')
    m.set(cx - 1, 13, cz, '#4caf50')
    m.set(cx + 1, 14, cz, '#66bb6a')
  }),

  deer: buildTemplate(18, 26, 16, (m) => {
    const { cx } = m
    const cz = 7.5
    const coat = '#a8673a'
    const coatDark = '#8a5028'
    const coatLight = '#c47d4c'
    const white = '#f5efe8'
    const hoof = '#24170d'
    const antler = '#d8cfc4'
    const antlerDark = '#b8aa9a'

    // 4 slender legs
    for (const [lx, lz] of [[cx - 2.5, 3.5], [cx + 2.5, 3.5], [cx - 2.5, 11.5], [cx + 2.5, 11.5]]) {
      m.box(lx, 0, lz, lx + 0.9, 1, lz + 0.9, hoof)
      m.box(lx, 2, lz, lx + 0.9, 9, lz + 0.9, coat)
    }

    // Torso / body: h: 9..14, z: 2..12
    m.ellipsoid(cx, 12, 7.5, 3.2, 2.8, 5.0, (x, h, z) => {
      if (h <= 10) return white // Underbelly
      // White dapples along the flank
      if (h === 13 && (z === 5 || z === 7 || z === 9) && Math.abs(x - cx) >= 2.5) return white
      return (x + z) % 3 === 0 ? coatLight : coat
    })

    // Fluffy tail
    m.box(cx - 0.5, 13, 1, cx + 0.5, 15, 2, white)
    m.set(cx, 15, 1, coatDark)

    // Graceful arching neck
    m.line([cx, 13, 10.5], [cx, 19, 12.5], coat, 'matte', 1.6)
    m.box(cx - 0.5, 14, 12, cx + 0.5, 17, 13, white) // White throat patch

    // Sculpted deer head
    m.ellipsoid(cx, 20, 13.5, 2.0, 1.8, 2.5, coat)
    // Snout & black nose
    m.box(cx - 1, 19, 15, cx + 1, 20, 16, coatLight)
    m.box(cx - 0.5, 19.5, 16, cx + 0.5, 20, 16, '#1a1a1a') // Nose

    // Dark eyes with white orbital rings
    m.set(cx - 1.8, 21, 13.5, '#1a1a1a', 'glossy')
    m.set(cx + 1.8, 21, 13.5, '#1a1a1a', 'glossy')
    m.set(cx - 1.8, 21.5, 13.5, white)
    m.set(cx + 1.8, 21.5, 13.5, white)

    // Ears angled back
    m.box(cx - 3.5, 22, 11, cx - 2.5, 24, 12, coat)
    m.box(cx + 2.5, 22, 11, cx + 3.5, 24, 12, coat)
    m.set(cx - 3, 23, 11.5, white)
    m.set(cx + 3, 23, 11.5, white)

    // Branching majestic antlers
    // Left antler beam & tines
    m.line([cx - 1.5, 22, 12.5], [cx - 3, 26, 11.5], antler, 'matte', 0.6)
    m.line([cx - 2.2, 23.5, 12], [cx - 3.5, 24.5, 13], antlerDark, 'matte', 0.5)
    m.line([cx - 2.8, 25, 11.8], [cx - 1.5, 26, 12.5], antlerDark, 'matte', 0.5)
    // Right antler beam & tines
    m.line([cx + 1.5, 22, 12.5], [cx + 3, 26, 11.5], antler, 'matte', 0.6)
    m.line([cx + 2.2, 23.5, 12], [cx + 3.5, 24.5, 13], antlerDark, 'matte', 0.5)
    m.line([cx + 2.8, 25, 11.8], [cx + 1.5, 26, 12.5], antlerDark, 'matte', 0.5)
  }),

  mushrooms: buildTemplate(20, 18, 20, (m) => {
    // Forest floor with moss and humus
    m.cylY(9.5, 9.5, 9.0, 0, 0, (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.6 ? '#4e7e2e' : n > 0.3 ? '#3d6323' : '#3d281a'
    }, 'matte')

    // Big red toadstool (Fly Agaric)
    // Curved stalk: h: 1..9, x: 6..8, z: 6..8
    m.cylY(7, 7, 1.7, 1, 9, (x, h) => (h === 6 ? '#ffffff' : '#f7f4ec'), 'matte')
    // Underside gills
    m.ellipsoid(7, 9, 7, 5.0, 1.0, 5.0, '#f2ece0', 'matte')
    // Vibrant scarlet cap with domed curvature
    m.ellipsoid(7, 12, 7, 5.2, 3.8, 5.2, (x, h, z) => {
      if (h < 10) return null
      return (x + h + z) % 3 === 0 ? '#b71c1c' : '#d32f2f'
    }, 'glossy')
    // White raised warts/spots on toadstool cap
    for (const [sx, sh, sz] of [
      [7, 15, 7], [5, 14, 6], [9, 14, 7], [7, 14, 9], [7, 14, 5],
      [4, 12, 8], [9, 12, 5], [10, 12, 8], [5, 11, 4], [8, 11, 10],
    ]) {
      m.box(sx, sh, sz, sx, sh, sz, '#ffffff', 'glossy')
    }

    // Medium brown bolete mushroom: x: 13.5, z: 13
    m.cylY(13.5, 13, 1.4, 1, 6, '#eddcb9', 'matte')
    m.ellipsoid(13.5, 7.5, 13, 3.6, 2.4, 3.6, (x, h) => (h < 6.5 ? '#ded1b4' : '#8d562b'), 'matte')

    // Two baby mushrooms
    m.box(13, 1, 6, 14, 3, 7, '#f7f4ec', 'matte')
    m.sphere(13.5, 4, 6.5, 1.6, '#e53935', 'glossy')
    m.set(13.5, 5, 6.5, '#ffffff')

    m.box(4, 1, 13, 5, 3, 14, '#f7f4ec', 'matte')
    m.sphere(4.5, 3.8, 13.5, 1.4, '#9e673a', 'matte')

    // Fallen autumn oak leaf
    m.box(11, 1, 4, 15, 1, 5, '#c85a24')
    m.set(16, 1, 4, '#8a3c14')
    // Tiny snail on the leaf
    m.set(12, 2, 4, '#dfc599')
    m.set(13, 2, 4, '#7a5432')
  }),

  boulder: buildTemplate(22, 14, 20, (m) => {
    const { cx, cz } = m
    const stone = '#687884'
    const stoneDark = '#4e5b66'
    const stoneLight = '#82939f'
    const moss = '#4c8832'
    const mossDark = '#386923'

    // Sandy gravel soil base
    m.cylY(cx, cz, 9.8, 0, 0, (x, h, z) => {
      const n = m.noise(x, h, z)
      return n > 0.6 ? '#3b5c28' : n > 0.3 ? '#5c4e38' : '#4a3d2c'
    }, 'matte')

    // Main rugged rock mass (merged ellipsoids with noise)
    m.fill((x, h, z) => {
      if (h < 1 || h > 11) return false
      const d1 = ((x - cx) / 8.6) ** 2 + ((h - 4.5) / 5.2) ** 2 + ((z - cz) / 7.6) ** 2
      const d2 = ((x - (cx - 2.8)) / 5.8) ** 2 + ((h - 3.8) / 4.2) ** 2 + ((z - (cz + 2)) / 5.4) ** 2
      const d3 = ((x - (cx + 3.2)) / 5.4) ** 2 + ((h - 3.2) / 3.8) ** 2 + ((z - (cz - 2.2)) / 5.2) ** 2
      return d1 <= 1 || d2 <= 1 || d3 <= 1
    }, (x, h, z) => {
      // Moss covering top surfaces and crevasses
      if (h >= 7 && m.noise(x, h, z) > 0.35) return (x + z) % 2 ? moss : mossDark
      const n = m.noise(x, h, z)
      return n > 0.6 ? stoneLight : n > 0.3 ? stone : stoneDark
    })

    // Creeping ivy vine climbing the rock
    for (let h = 1; h <= 7; h++) {
      const x = cx + 4 - Math.floor(h * 0.4)
      const z = cz + 5 - Math.floor(h * 0.3)
      m.set(x, h, z, '#3e8428')
      if (h % 2 === 0) m.set(x + 1, h, z, '#589e3a')
    }

    // Small forest ferns at shaded base
    m.box(2, 1, 13, 5, 4, 16, (x, h, z) => {
      if ((x + h + z) % 2 === 0) return '#3d882b'
      return null
    })

    // Crystal forest spring puddle at front corner
    m.fill((x, h, z) => {
      return h === 1 && Math.hypot(x - 5, z - 5) <= 3.2
    }, '#a4e8f7', 'glass')
    m.set(4, 1, 4, '#5c6b73') // River pebble in water
  }),
}

// ── Write files ────────────────────────────────────────────────────────────────

const outDir = resolve(__dirname, '..', 'public', 'templates')
mkdirSync(outDir, { recursive: true })

const only = process.argv.slice(2)
for (const [name, data] of Object.entries(templates)) {
  if (only.length && !only.includes(name)) continue
  writeFileSync(resolve(outDir, `${name}.picell3d`), JSON.stringify(data))
  let count = 0
  for (const row of data.layers[0].voxels) for (const col of row) for (const c of col) if (c !== 'transparent') count++
  console.log(`✓ ${name}.picell3d  ${data.canvasWidth}×${data.canvasHeight}×${data.depthDimension}  (${count} voxels)`)
}
