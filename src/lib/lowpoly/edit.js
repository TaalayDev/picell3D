// Manual editing of a low poly result (pure data ops; no rendering).
//
// The result is a set of non-indexed per-material groups. For editing we weld corners that share a
// position into "vertices" so one drag moves every triangle touching it. Group arrays are the source
// of truth and are mutated in place, so geometries built with shared typed arrays update for free.
import { materialColor } from '../meshBuilder.js'
import { hexToRgb } from './colorize.js'

export function cloneGroups(groups) {
  return groups.map(g => ({
    mat: g.mat,
    positions: g.positions.slice(),
    normals: g.normals.slice(),
    colors: g.colors.slice(),
    faceHex: g.faceHex.slice(),
  }))
}

export function countTriangles(groups) {
  return groups.reduce((n, g) => n + g.positions.length / 9, 0)
}

/** Weld corners by position and build adjacency. Rebuild after any change of triangle count. */
export function buildTopology(groups) {
  const map = new Map()
  const refs = []        // vertex id → [group, corner, group, corner, …]
  const pos = []
  const cornerVert = groups.map(g => new Int32Array(g.positions.length / 3))

  groups.forEach((g, gi) => {
    const n = g.positions.length / 3
    for (let c = 0; c < n; c++) {
      const x = g.positions[c * 3], y = g.positions[c * 3 + 1], z = g.positions[c * 3 + 2]
      const key = `${Math.round(x * 1e5)},${Math.round(y * 1e5)},${Math.round(z * 1e5)}`
      let id = map.get(key)
      if (id === undefined) { id = refs.length; map.set(key, id); refs.push([]); pos.push(x, y, z) }
      refs[id].push(gi, c)
      cornerVert[gi][c] = id
    }
  })

  const adj = Array.from({ length: refs.length }, () => new Set())
  groups.forEach((g, gi) => {
    const cv = cornerVert[gi]
    for (let t = 0; t < cv.length; t += 3) {
      const a = cv[t], b = cv[t + 1], c = cv[t + 2]
      adj[a].add(b).add(c); adj[b].add(a).add(c); adj[c].add(a).add(b)
    }
  })

  return { groups, refs, adj, cornerVert, pos: Float32Array.from(pos) }
}

/** Vertices within `radius` of `point`, with smooth falloff weights (1 at the centre → 0 at the rim). */
export function vertsInRadius(topo, point, radius) {
  const ids = [], weights = []
  const r2 = radius * radius
  const p = topo.pos
  for (let v = 0, n = p.length / 3; v < n; v++) {
    const dx = p[v * 3] - point.x, dy = p[v * 3 + 1] - point.y, dz = p[v * 3 + 2] - point.z
    const d2 = dx * dx + dy * dy + dz * dz
    if (d2 > r2) continue
    const t = 1 - Math.sqrt(d2) / radius
    ids.push(v); weights.push(t * t * (3 - 2 * t))
  }
  return { ids, weights }
}

function writeVertex(topo, v, x, y, z) {
  topo.pos[v * 3] = x; topo.pos[v * 3 + 1] = y; topo.pos[v * 3 + 2] = z
  const refs = topo.refs[v]
  for (let i = 0; i < refs.length; i += 2) {
    const p = topo.groups[refs[i]].positions, c = refs[i + 1] * 3
    p[c] = x; p[c + 1] = y; p[c + 2] = z
  }
}

/** Set vertex positions from a flat [x,y,z,…] array matching `ids`. Returns touched group indices. */
export function setVertices(topo, ids, coords) {
  ids.forEach((v, i) => writeVertex(topo, v, coords[i * 3], coords[i * 3 + 1], coords[i * 3 + 2]))
  return refreshNormals(topo, ids)
}

function triNormal(p, a, b, c) {
  const ux = p[b * 3] - p[a * 3], uy = p[b * 3 + 1] - p[a * 3 + 1], uz = p[b * 3 + 2] - p[a * 3 + 2]
  const vx = p[c * 3] - p[a * 3], vy = p[c * 3 + 1] - p[a * 3 + 1], vz = p[c * 3 + 2] - p[a * 3 + 2]
  return [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx]   // area weighted
}

/** Area-weighted vertex normal from all triangles touching the vertex. */
export function vertexNormal(topo, v) {
  let nx = 0, ny = 0, nz = 0
  const refs = topo.refs[v]
  for (let i = 0; i < refs.length; i += 2) {
    const cv = topo.cornerVert[refs[i]], t = Math.floor(refs[i + 1] / 3) * 3
    const n = triNormal(topo.pos, cv[t], cv[t + 1], cv[t + 2])
    nx += n[0]; ny += n[1]; nz += n[2]
  }
  const l = Math.hypot(nx, ny, nz) || 1
  return [nx / l, ny / l, nz / l]
}

/** Recompute normals around moved vertices. Returns a Set of touched group indices. */
export function refreshNormals(topo, movedIds) {
  const smooth = topo.shading === 'smooth'
  const touched = new Set()
  const tris = new Map()   // "gi:t" → [gi, t]
  for (const v of movedIds) {
    const refs = topo.refs[v]
    for (let i = 0; i < refs.length; i += 2) {
      const gi = refs[i], t = Math.floor(refs[i + 1] / 3) * 3
      tris.set(gi * 1e9 + t, [gi, t])
    }
  }

  const smoothVerts = new Set()
  for (const [gi, t] of tris.values()) {
    touched.add(gi)
    const cv = topo.cornerVert[gi]
    if (smooth) { smoothVerts.add(cv[t]); smoothVerts.add(cv[t + 1]); smoothVerts.add(cv[t + 2]); continue }
    const n = triNormal(topo.pos, cv[t], cv[t + 1], cv[t + 2])
    const l = Math.hypot(n[0], n[1], n[2]) || 1
    const out = topo.groups[gi].normals
    for (let k = 0; k < 3; k++) {
      out[(t + k) * 3] = n[0] / l; out[(t + k) * 3 + 1] = n[1] / l; out[(t + k) * 3 + 2] = n[2] / l
    }
  }
  for (const v of smoothVerts) {
    const n = vertexNormal(topo, v), refs = topo.refs[v]
    for (let i = 0; i < refs.length; i += 2) {
      const out = topo.groups[refs[i]].normals, c = refs[i + 1] * 3
      out[c] = n[0]; out[c + 1] = n[1]; out[c + 2] = n[2]
    }
  }
  return touched
}

/** Relax vertices towards the average of their neighbours. */
export function smoothBrush(topo, point, radius, strength) {
  const { ids, weights } = vertsInRadius(topo, point, radius)
  const coords = new Float32Array(ids.length * 3)
  ids.forEach((v, i) => {
    let ax = 0, ay = 0, az = 0
    const nb = topo.adj[v]
    for (const u of nb) { ax += topo.pos[u * 3]; ay += topo.pos[u * 3 + 1]; az += topo.pos[u * 3 + 2] }
    const k = nb.size || 1
    const w = Math.min(1, strength * weights[i])
    coords[i * 3]     = topo.pos[v * 3]     + (ax / k - topo.pos[v * 3])     * w
    coords[i * 3 + 1] = topo.pos[v * 3 + 1] + (ay / k - topo.pos[v * 3 + 1]) * w
    coords[i * 3 + 2] = topo.pos[v * 3 + 2] + (az / k - topo.pos[v * 3 + 2]) * w
  })
  return setVertices(topo, ids, coords)
}

/** Push vertices along their normals (negative amount pulls in). */
export function inflateBrush(topo, point, radius, amount) {
  const { ids, weights } = vertsInRadius(topo, point, radius)
  const coords = new Float32Array(ids.length * 3)
  ids.forEach((v, i) => {
    const n = vertexNormal(topo, v)
    const d = amount * weights[i]
    coords[i * 3]     = topo.pos[v * 3]     + n[0] * d
    coords[i * 3 + 1] = topo.pos[v * 3 + 1] + n[1] * d
    coords[i * 3 + 2] = topo.pos[v * 3 + 2] + n[2] * d
  })
  return setVertices(topo, ids, coords)
}

function triCentroidNear(g, t, point, r2) {
  const p = g.positions
  const cx = (p[t * 3] + p[t * 3 + 3] + p[t * 3 + 6]) / 3
  const cy = (p[t * 3 + 1] + p[t * 3 + 4] + p[t * 3 + 7]) / 3
  const cz = (p[t * 3 + 2] + p[t * 3 + 5] + p[t * 3 + 8]) / 3
  return (cx - point.x) ** 2 + (cy - point.y) ** 2 + (cz - point.z) ** 2 <= r2
}

/** Recolour triangles near `point` (plus the one under the cursor). Returns touched group indices. */
export function paintFaces(groups, hit, point, radius, hex) {
  const touched = new Set()
  const rgb = hexToRgb(hex)
  groups.forEach((g, gi) => {
    const col = materialColor(rgb, g.mat)
    for (let t = 0, n = g.positions.length / 9; t < n; t++) {
      const isHit = hit.group === gi && hit.tri === t
      if (!isHit && !triCentroidNear(g, t * 3, point, radius * radius)) continue
      g.faceHex[t] = hex
      for (let k = 0; k < 3; k++) {
        g.colors[(t * 3 + k) * 3] = col[0]; g.colors[(t * 3 + k) * 3 + 1] = col[1]; g.colors[(t * 3 + k) * 3 + 2] = col[2]
      }
      touched.add(gi)
    }
  })
  return touched
}

/** Delete triangles near `point` (plus the one under the cursor). Replaces group arrays; returns the removed count. */
export function eraseFaces(groups, hit, point, radius) {
  let removed = 0
  groups.forEach((g, gi) => {
    const n = g.positions.length / 9
    const keep = []
    for (let t = 0; t < n; t++) {
      const isHit = hit.group === gi && hit.tri === t
      if (isHit || triCentroidNear(g, t * 3, point, radius * radius)) removed++
      else keep.push(t)
    }
    if (keep.length === n) return
    const pick = (src, size) => {
      const out = new Float32Array(keep.length * size)
      keep.forEach((t, i) => out.set(src.subarray(t * size, t * size + size), i * size))
      return out
    }
    g.positions = pick(g.positions, 9)
    g.normals = pick(g.normals, 9)
    g.colors = pick(g.colors, 9)
    g.faceHex = keep.map(t => g.faceHex[t])
  })
  return removed
}
