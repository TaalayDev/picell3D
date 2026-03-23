/**
 * Converts an image File to a 2D hex color grid matching W×H canvas.
 * scaleMode: 'fit' | 'fill' | 'stretch'
 * Returns [row][col] of hex strings, null for transparent pixels.
 */
export function imageToPixelGrid(file, W, H, scaleMode = 'fit') {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const offscreen = document.createElement('canvas')
      offscreen.width  = W
      offscreen.height = H
      const ctx = offscreen.getContext('2d')
      ctx.clearRect(0, 0, W, H)

      const iw = img.naturalWidth
      const ih = img.naturalHeight
      const iRatio = iw / ih
      const cRatio = W  / H

      if (scaleMode === 'fit') {
        if (iRatio > cRatio) {
          const dh = W / iRatio
          ctx.drawImage(img, 0, (H - dh) / 2, W, dh)
        } else {
          const dw = H * iRatio
          ctx.drawImage(img, (W - dw) / 2, 0, dw, H)
        }
      } else if (scaleMode === 'fill') {
        let sx = 0, sy = 0, sw = iw, sh = ih
        if (iRatio > cRatio) { sw = ih * cRatio; sx = (iw - sw) / 2 }
        else                  { sh = iw / cRatio; sy = (ih - sh) / 2 }
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H)
      } else {
        ctx.drawImage(img, 0, 0, W, H)
      }

      const { data } = ctx.getImageData(0, 0, W, H)
      const grid = Array.from({ length: H }, (_, row) =>
        Array.from({ length: W }, (_, col) => {
          const i = (row * W + col) * 4
          if (data[i + 3] < 16) return null
          return '#' +
            data[i    ].toString(16).padStart(2, '0') +
            data[i + 1].toString(16).padStart(2, '0') +
            data[i + 2].toString(16).padStart(2, '0')
        })
      )
      URL.revokeObjectURL(url)
      resolve(grid)
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load image')) }
    img.src = url
  })
}

/** Load an image file and return a data URL + natural dimensions. */
export function loadImageMeta(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload  = () => resolve({ src: url, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight })
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load image')) }
    img.src = url
  })
}
