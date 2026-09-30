// Taubin λ/μ smoothing: alternating shrink/inflate Laplacian passes that
// round off the surface without the volume loss of plain Laplacian smoothing.

function buildNeighbors(vertexCount, indices) {
  const sets = Array.from({ length: vertexCount }, () => new Set())
  for (let t = 0; t < indices.length; t += 3) {
    const a = indices[t], b = indices[t + 1], c = indices[t + 2]
    sets[a].add(b); sets[a].add(c)
    sets[b].add(a); sets[b].add(c)
    sets[c].add(a); sets[c].add(b)
  }
  const offsets = new Uint32Array(vertexCount + 1)
  for (let i = 0; i < vertexCount; i++) offsets[i + 1] = offsets[i] + sets[i].size
  const list = new Uint32Array(offsets[vertexCount])
  for (let i = 0; i < vertexCount; i++) {
    let o = offsets[i]
    for (const n of sets[i]) list[o++] = n
  }
  return { offsets, list }
}

/**
 * Smooths `positions` in place.
 * `labels` (optional Int32Array, one per vertex) restricts averaging to
 * neighbours with the same label, so borders between colours stay put.
 */
export function taubinSmooth(positions, indices, iterations, { lambda = 0.5, mu = -0.53, labels = null } = {}) {
  if (iterations <= 0) return positions
  const count = positions.length / 3
  const { offsets, list } = buildNeighbors(count, indices)
  const next = new Float32Array(positions.length)

  function pass(factor) {
    for (let v = 0; v < count; v++) {
      let ax = 0, ay = 0, az = 0, n = 0
      for (let o = offsets[v]; o < offsets[v + 1]; o++) {
        const u = list[o]
        if (labels && labels[u] !== labels[v]) continue
        ax += positions[u * 3]; ay += positions[u * 3 + 1]; az += positions[u * 3 + 2]
        n++
      }
      const px = positions[v * 3], py = positions[v * 3 + 1], pz = positions[v * 3 + 2]
      if (n === 0) { next[v * 3] = px; next[v * 3 + 1] = py; next[v * 3 + 2] = pz; continue }
      next[v * 3]     = px + factor * (ax / n - px)
      next[v * 3 + 1] = py + factor * (ay / n - py)
      next[v * 3 + 2] = pz + factor * (az / n - pz)
    }
    positions.set(next)
  }

  for (let i = 0; i < iterations; i++) { pass(lambda); pass(mu) }
  return positions
}
