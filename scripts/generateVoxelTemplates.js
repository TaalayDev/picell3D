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
