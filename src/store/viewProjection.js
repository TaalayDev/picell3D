/** Compute the frontmost visible color for every cell in an orthographic view. */
export function renderView2D(voxels, view, width, height, depth) {
  switch (view) {
    case 'front':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => {
          for (let z = depth - 1; z >= 0; z--) {
            const color = voxels[y]?.[x]?.[z]
            if (color && color !== 'transparent') return color
          }
          return 'transparent'
        }))
    case 'back':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, column) => {
          const x = width - 1 - column
          for (let z = 0; z < depth; z++) {
            const color = voxels[y]?.[x]?.[z]
            if (color && color !== 'transparent') return color
          }
          return 'transparent'
        }))
    case 'left':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: depth }, (_, z) => {
          for (let x = 0; x < width; x++) {
            const color = voxels[y]?.[x]?.[z]
            if (color && color !== 'transparent') return color
          }
          return 'transparent'
        }))
    case 'right':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: depth }, (_, column) => {
          const z = depth - 1 - column
          for (let x = width - 1; x >= 0; x--) {
            const color = voxels[y]?.[x]?.[z]
            if (color && color !== 'transparent') return color
          }
          return 'transparent'
        }))
    case 'top':
      return Array.from({ length: depth }, (_, z) =>
        Array.from({ length: width }, (_, x) => {
          for (let y = 0; y < height; y++) {
            const color = voxels[y]?.[x]?.[z]
            if (color && color !== 'transparent') return color
          }
          return 'transparent'
        }))
    case 'bottom':
      return Array.from({ length: depth }, (_, z) =>
        Array.from({ length: width }, (_, x) => {
          for (let y = height - 1; y >= 0; y--) {
            const color = voxels[y]?.[x]?.[z]
            if (color && color !== 'transparent') return color
          }
          return 'transparent'
        }))
    default:
      return []
  }
}

/** Return the visible voxel's view-relative depth for every orthographic cell. */
export function renderDepthMap2D(voxels, view, width, height, depth) {
  const center = Math.floor(depth / 2)
  switch (view) {
    case 'front':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => {
          for (let z = depth - 1; z >= 0; z--)
            if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return z - center
          return null
        }))
    case 'back':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, column) => {
          const x = width - 1 - column
          for (let z = 0; z < depth; z++)
            if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return z - center
          return null
        }))
    case 'left':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: depth }, (_, z) => {
          for (let x = 0; x < width; x++)
            if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return x
          return null
        }))
    case 'right':
      return Array.from({ length: height }, (_, y) =>
        Array.from({ length: depth }, (_, column) => {
          const z = depth - 1 - column
          for (let x = width - 1; x >= 0; x--)
            if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return width - 1 - x
          return null
        }))
    case 'top':
      return Array.from({ length: depth }, (_, z) =>
        Array.from({ length: width }, (_, x) => {
          for (let y = 0; y < height; y++)
            if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return y
          return null
        }))
    case 'bottom':
      return Array.from({ length: depth }, (_, z) =>
        Array.from({ length: width }, (_, x) => {
          for (let y = height - 1; y >= 0; y--)
            if (voxels[y]?.[x]?.[z] && voxels[y][x][z] !== 'transparent') return height - 1 - y
          return null
        }))
    default:
      return []
  }
}
