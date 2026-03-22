/**
 * Render the Three.js scene to a PNG from an isometric angle.
 */
export function exportIsometricPng(renderer, scene, canvasWidth, canvasHeight) {
  const camera = createIsoCamera(canvasWidth, canvasHeight)

  // Save current renderer size
  const prevW = renderer.domElement.width
  const prevH = renderer.domElement.height

  const size = 512
  renderer.setSize(size, size)
  renderer.render(scene, camera)

  const dataUrl = renderer.domElement.toDataURL('image/png')

  // Restore
  renderer.setSize(prevW, prevH)

  // Trigger download
  const link = document.createElement('a')
  link.download = 'picell3d-export.png'
  link.href = dataUrl
  link.click()
}

function createIsoCamera(w, h) {
  const { PerspectiveCamera } = await import('three')
  const camera = new PerspectiveCamera(45, 1, 0.01, 100)
  const dist = Math.max(w, h) * 0.1 * 2.5
  // Isometric: 45° azimuth, ~35.26° elevation
  camera.position.set(dist, dist * 0.7, dist)
  camera.lookAt(0, 0, 0)
  return camera
}
