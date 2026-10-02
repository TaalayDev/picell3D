import { computeLowPoly } from './index.js'
import { computeVoxelMesh } from './voxelMesh.js'

self.onmessage = (e) => {
  const { id, input, params, mode } = e.data
  try {
    const t0 = performance.now()
    const result = mode === 'voxels' ? computeVoxelMesh(input) : computeLowPoly(input, params)
    result.stats.ms = Math.round(performance.now() - t0)
    const transfer = result.groups.flatMap(g => [g.positions.buffer, g.normals.buffer, g.colors.buffer])
    self.postMessage({ id, result }, transfer)
  } catch (err) {
    self.postMessage({ id, error: err?.message || String(err) })
  }
}
