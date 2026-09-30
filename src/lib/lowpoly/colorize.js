// Nearest-voxel lookup used to colour the smoothed/decimated surface.
// Points are given in voxel units: (ux, uh, uz) where voxel (x, h, z) spans [x, x+1).

export function makeVoxelLookup(voxels, W, H, D, voxelMaterials = {}) {
  function voxelAt(x, h, z) {
    if (x < 0 || x >= W || h < 0 || h >= H || z < 0 || z >= D) return null
    const c = voxels[H - 1 - h]?.[x]?.[z]
    return c && c !== 'transparent' ? c : null
  }

  return function nearest(ux, uh, uz) {
    const bx = Math.floor(ux), bh = Math.floor(uh), bz = Math.floor(uz)
    for (let r = 1; r <= 4; r++) {
      let best = null, bestD = Infinity
      for (let dx = -r; dx <= r; dx++)
        for (let dh = -r; dh <= r; dh++)
          for (let dz = -r; dz <= r; dz++) {
            const x = bx + dx, h = bh + dh, z = bz + dz
            const c = voxelAt(x, h, z)
            if (!c) continue
            const d = (x + 0.5 - ux) ** 2 + (h + 0.5 - uh) ** 2 + (z + 0.5 - uz) ** 2
            if (d < bestD) { bestD = d; best = { color: c, x, h, z } }
          }
      if (best) {
        best.mat = voxelMaterials[`${H - 1 - best.h},${best.x},${best.z}`] || 'solid'
        return best
      }
    }
    return null
  }
}

export function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ]
}
