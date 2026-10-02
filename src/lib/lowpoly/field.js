// Scalar density field built from the voxel grid.
//
// Field layout: data[i + nx * (j + ny * k)]
//   i → x (left→right), j → height (bottom→top), k → z (back→front)
// Each voxel covers `scale`³ field cells, surrounded by `pad` empty cells on every side.

export function buildField(voxels, W, H, D, scale = 1, pad = 2) {
  const nx = W * scale + pad * 2
  const ny = H * scale + pad * 2
  const nz = D * scale + pad * 2
  const data = new Float32Array(nx * ny * nz)

  for (let k = pad; k < nz - pad; k++) {
    const vz = Math.floor((k - pad) / scale)
    for (let j = pad; j < ny - pad; j++) {
      const vh = Math.floor((j - pad) / scale)
      const row = voxels[H - 1 - vh]
      for (let i = pad; i < nx - pad; i++) {
        const c = row?.[Math.floor((i - pad) / scale)]?.[vz]
        if (c && c !== 'transparent') data[i + nx * (j + ny * k)] = 1
      }
    }
  }

  return { data, nx, ny, nz, scale, pad }
}

/** Separable 3D Gaussian blur, in place. `sigma` is in field cells. */
export function blurField(field, sigma) {
  if (sigma <= 0.01) return field
  const { nx, ny, nz } = field
  const radius = Math.ceil(sigma * 2)
  const kernel = []
  let sum = 0
  for (let r = -radius; r <= radius; r++) {
    const w = Math.exp(-(r * r) / (2 * sigma * sigma))
    kernel.push(w); sum += w
  }
  for (let r = 0; r < kernel.length; r++) kernel[r] /= sum

  let src = field.data
  let dst = new Float32Array(src.length)
  const strides = [1, nx, nx * ny]
  const sizes = [nx, ny, nz]

  for (let axis = 0; axis < 3; axis++) {
    const stride = strides[axis], size = sizes[axis]
    for (let k = 0; k < nz; k++)
      for (let j = 0; j < ny; j++)
        for (let i = 0; i < nx; i++) {
          const idx = i + nx * (j + ny * k)
          const pos = axis === 0 ? i : axis === 1 ? j : k
          let acc = 0
          for (let r = -radius; r <= radius; r++) {
            const p = pos + r
            if (p < 0 || p >= size) continue
            acc += src[idx + r * stride] * kernel[r + radius]
          }
          dst[idx] = acc
        }
    const tmp = src; src = dst; dst = tmp
  }

  field.data = src
  return field
}
