export function clampBrushSize(value) {
  return Math.max(1, Math.min(8, Math.round(value || 1)))
}

/** A centered pixel/voxel footprint with an exact square diameter. */
export function getBrushOffsets(size) {
  const diameter = clampBrushSize(size)
  const min = -Math.floor((diameter - 1) / 2)
  const max = Math.ceil((diameter - 1) / 2)
  const offsets = []
  for (let v = min; v <= max; v++)
    for (let u = min; u <= max; u++) offsets.push({ u, v })
  return offsets
}

export function expandVoxelBrush(center, axis, size, W, H, D) {
  const result = []
  for (const { u, v } of getBrushOffsets(size)) {
    const voxel = axis === 'x'
      ? { x: center.x, y: center.y + v, z: center.z + u }
      : axis === 'y'
        ? { x: center.x + u, y: center.y, z: center.z + v }
        : { x: center.x + u, y: center.y + v, z: center.z }
    if (
      voxel.x >= 0 && voxel.x < W
      && voxel.y >= 0 && voxel.y < H
      && voxel.z >= 0 && voxel.z < D
    ) result.push(voxel)
  }
  return result
}
