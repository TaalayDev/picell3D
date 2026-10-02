// Naive Surface Nets: one vertex per cell that straddles the iso-surface,
// one quad per grid edge that crosses it. Produces a watertight, evenly
// tessellated mesh with far fewer triangles than marching cubes.
//
// Returns positions in field-cell coordinates and a triangle index list whose
// winding faces outward (away from the "inside" region where value >= iso).

const CORNERS = [
  [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0],
  [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1],
]
// Pairs of corner indices forming the 12 cube edges
const EDGES = [
  [0, 1], [2, 3], [4, 5], [6, 7],
  [0, 2], [1, 3], [4, 6], [5, 7],
  [0, 4], [1, 5], [2, 6], [3, 7],
]

export function surfaceNets(field, iso = 0.5) {
  const { data, nx, ny, nz } = field
  const cellIndex = new Int32Array(nx * ny * nz).fill(-1)
  const positions = []
  const indices = []
  const at = (i, j, k) => data[i + nx * (j + ny * k)]
  const v = new Float32Array(8)

  // ── Vertices ───────────────────────────────────────────────────────────────
  for (let k = 0; k < nz - 1; k++)
    for (let j = 0; j < ny - 1; j++)
      for (let i = 0; i < nx - 1; i++) {
        let mask = 0
        for (let c = 0; c < 8; c++) {
          const [dx, dy, dz] = CORNERS[c]
          v[c] = at(i + dx, j + dy, k + dz)
          if (v[c] >= iso) mask |= 1 << c
        }
        if (mask === 0 || mask === 255) continue

        let sx = 0, sy = 0, sz = 0, n = 0
        for (const [a, b] of EDGES) {
          if ((v[a] >= iso) === (v[b] >= iso)) continue
          const t = (iso - v[a]) / (v[b] - v[a])
          const A = CORNERS[a], B = CORNERS[b]
          sx += A[0] + (B[0] - A[0]) * t
          sy += A[1] + (B[1] - A[1]) * t
          sz += A[2] + (B[2] - A[2]) * t
          n++
        }
        cellIndex[i + nx * (j + ny * k)] = positions.length / 3
        positions.push(i + sx / n, j + sy / n, k + sz / n)
      }

  // ── Faces ──────────────────────────────────────────────────────────────────
  const cell = (i, j, k) => cellIndex[i + nx * (j + ny * k)]
  const P = (idx) => [positions[idx * 3], positions[idx * 3 + 1], positions[idx * 3 + 2]]

  function emitQuad(a, b, c, d, outward) {
    if (a < 0 || b < 0 || c < 0 || d < 0) return
    // Orient so the quad normal agrees with the expected outward direction
    const pa = P(a), pb = P(b), pc = P(c)
    const ux = pb[0] - pa[0], uy = pb[1] - pa[1], uz = pb[2] - pa[2]
    const wx = pc[0] - pa[0], wy = pc[1] - pa[1], wz = pc[2] - pa[2]
    const nxv = uy * wz - uz * wy, nyv = uz * wx - ux * wz, nzv = ux * wy - uy * wx
    if (nxv * outward[0] + nyv * outward[1] + nzv * outward[2] < 0) { const t = b; b = d; d = t }
    // Split along the shorter diagonal for better-shaped triangles
    const pd = P(d)
    const pb2 = P(b)
    const d1 = (pa[0] - pc[0]) ** 2 + (pa[1] - pc[1]) ** 2 + (pa[2] - pc[2]) ** 2
    const d2 = (pb2[0] - pd[0]) ** 2 + (pb2[1] - pd[1]) ** 2 + (pb2[2] - pd[2]) ** 2
    if (d1 <= d2) indices.push(a, b, c, a, c, d)
    else indices.push(a, b, d, b, c, d)
  }

  for (let k = 1; k < nz - 1; k++)
    for (let j = 1; j < ny - 1; j++)
      for (let i = 1; i < nx - 1; i++) {
        const inside = at(i, j, k) >= iso
        // Edge along +x
        if (i < nx - 1 && inside !== (at(i + 1, j, k) >= iso)) {
          emitQuad(cell(i, j - 1, k - 1), cell(i, j, k - 1), cell(i, j, k), cell(i, j - 1, k),
            [inside ? 1 : -1, 0, 0])
        }
        // Edge along +y
        if (j < ny - 1 && inside !== (at(i, j + 1, k) >= iso)) {
          emitQuad(cell(i - 1, j, k - 1), cell(i, j, k - 1), cell(i, j, k), cell(i - 1, j, k),
            [0, inside ? 1 : -1, 0])
        }
        // Edge along +z
        if (k < nz - 1 && inside !== (at(i, j, k + 1) >= iso)) {
          emitQuad(cell(i - 1, j - 1, k), cell(i, j - 1, k), cell(i, j, k), cell(i - 1, j, k),
            [0, 0, inside ? 1 : -1])
        }
      }

  return { positions: new Float32Array(positions), indices: new Uint32Array(indices) }
}
