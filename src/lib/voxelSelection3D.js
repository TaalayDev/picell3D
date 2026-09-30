export function getVoxelBounds(voxels) {
  if (!voxels?.length) return null
  return voxels.reduce((box, voxel) => ({
    minX: Math.min(box.minX, voxel.x), maxX: Math.max(box.maxX, voxel.x),
    minY: Math.min(box.minY, voxel.y), maxY: Math.max(box.maxY, voxel.y),
    minZ: Math.min(box.minZ, voxel.z), maxZ: Math.max(box.maxZ, voxel.z),
  }), {
    minX: Infinity, maxX: -Infinity,
    minY: Infinity, maxY: -Infinity,
    minZ: Infinity, maxZ: -Infinity,
  })
}

export function collectVoxelsInBox(layer, start, end) {
  if (!layer || !start || !end) return []
  const minX = Math.min(start.x, end.x), maxX = Math.max(start.x, end.x)
  const minY = Math.min(start.y, end.y), maxY = Math.max(start.y, end.y)
  const minZ = Math.min(start.z, end.z), maxZ = Math.max(start.z, end.z)
  const result = []
  for (let y = minY; y <= maxY; y++)
    for (let x = minX; x <= maxX; x++)
      for (let z = minZ; z <= maxZ; z++) {
        const color = layer.voxels[y]?.[x]?.[z]
        if (!color || color === 'transparent') continue
        result.push({
          x, y, z, color,
          material: layer.voxelMaterials?.[`${y},${x},${z}`] ?? 'solid',
        })
      }
  return result
}

export function areVoxelsInBounds(voxels, W, H, D) {
  return voxels.every(v => v.x >= 0 && v.x < W && v.y >= 0 && v.y < H && v.z >= 0 && v.z < D)
}

export function moveVoxels(voxels, dx, dy, dz) {
  return voxels.map(v => ({ ...v, x: v.x + dx, y: v.y + dy, z: v.z + dz }))
}

export function flipVoxels(voxels, axis) {
  const box = getVoxelBounds(voxels)
  if (!box) return []
  return voxels.map(v => ({
    ...v,
    x: axis === 'x' ? box.minX + box.maxX - v.x : v.x,
    y: axis === 'y' ? box.minY + box.maxY - v.y : v.y,
    z: axis === 'z' ? box.minZ + box.maxZ - v.z : v.z,
  }))
}

export function rotateVoxels90(voxels, axis, direction = 1) {
  const box = getVoxelBounds(voxels)
  if (!box) return []
  const cx = (box.minX + box.maxX) / 2
  const cy = (box.minY + box.maxY) / 2
  const cz = (box.minZ + box.maxZ) / 2
  const sign = direction < 0 ? -1 : 1
  return voxels.map(v => {
    const x = v.x - cx, y = v.y - cy, z = v.z - cz
    if (axis === 'x') return {
      ...v, x: v.x,
      y: Math.round(cy - sign * z),
      z: Math.round(cz + sign * y),
    }
    if (axis === 'y') return {
      ...v,
      x: Math.round(cx + sign * z),
      y: v.y,
      z: Math.round(cz - sign * x),
    }
    return {
      ...v,
      x: Math.round(cx - sign * y),
      y: Math.round(cy + sign * x),
      z: v.z,
    }
  })
}
