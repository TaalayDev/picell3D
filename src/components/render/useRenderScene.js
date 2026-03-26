import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls }   from 'three/addons/controls/OrbitControls.js'
import { GLTFExporter }    from 'three/addons/exporters/GLTFExporter.js'
import { EffectComposer }  from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass }      from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { useStore, getCompositedVoxels, getCompositedMaterials } from '../../store/index.js'
import { buildVoxelMesh }   from '../../lib/meshBuilder.js'
import { buildVoxelMeshHQ } from '../../lib/meshBuilderHQ.js'   // used for GLB export only

// ── Lighting presets ─────────────────────────────────────────────────────────
export const LIGHT_PRESETS = {
  studio: {
    label:     'Studio',
    bg:        0x111111,
    ambient:   [0xffffff, 0.55],
    key:       [0xffffff, 1.2,  [5, 8, 5]],
    fill:      [0x8099cc, 0.5,  [-4, 2, -3]],
    rim:       [0xff9944, 0.35, [0, -4, -6]],
  },
  warm: {
    label:     'Warm',
    bg:        0x1a0e06,
    ambient:   [0xffd580, 0.5],
    key:       [0xffcc66, 1.0,  [4, 7, 3]],
    fill:      [0xff6622, 0.4,  [-3, 1, -2]],
    rim:       [0xffaa44, 0.3,  [0, -3, -5]],
  },
  cool: {
    label:     'Cool',
    bg:        0x060d1a,
    ambient:   [0x99bbff, 0.5],
    key:       [0xaaccff, 1.1,  [4, 7, 4]],
    fill:      [0x4466cc, 0.5,  [-4, 1, -3]],
    rim:       [0x22ffdd, 0.3,  [0, -3, -5]],
  },
  dramatic: {
    label:     'Dramatic',
    bg:        0x060606,
    ambient:   [0xffffff, 0.08],
    key:       [0xffffff, 2.2,  [3, 9, 2]],
    fill:      [0x4455aa, 0.15, [-4, 0, -2]],
    rim:       [0xff4400, 0.5,  [-1, -5, -7]],
  },
}

export const BG_PRESETS = [
  { label: 'Dark',     value: '#111111' },
  { label: 'Charcoal', value: '#1a1a1a' },
  { label: 'Navy',     value: '#060d1a' },
  { label: 'White',    value: '#f0f0f0' },
  { label: 'Custom',   value: null      },
]

export function useRenderScene(containerRef) {
  const rendererRef  = useRef(null)
  const sceneRef     = useRef(null)
  const cameraRef    = useRef(null)
  const controlsRef  = useRef(null)
  const composerRef  = useRef(null)
  const meshGroupRef = useRef(null)
  const disposeRef   = useRef(null)
  const frameRef     = useRef(null)

  // ── Scene setup ────────────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.toneMapping = THREE.NoToneMapping   // match 3D preview colors exactly
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x111111, 1)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x111111, 0.10)
    sceneRef.current = scene

    // Grid floor
    const grid = new THREE.GridHelper(10, 20, 0x333333, 0x222222)
    grid.position.y = -0.06
    grid.material.transparent = true
    grid.material.opacity = 0.4
    scene.add(grid)

    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.01, 60)
    camera.position.set(3, 3.5, 3)
    camera.lookAt(0, 1.5, 0)
    cameraRef.current = camera

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping  = true
    controls.dampingFactor  = 0.05
    controls.minDistance    = 0.3
    controls.maxDistance    = 20
    controls.target.set(0, 1.5, 0)
    controlsRef.current = controls

    // Post-processing — match 3D preview bloom settings
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.55, 0.40, 0.42,
    ))
    composerRef.current = composer

    let running = true
    function animate() {
      if (!running) return
      frameRef.current = requestAnimationFrame(animate)
      controls.update()
      composer.render()
    }
    animate()

    const ro = new ResizeObserver(() => {
      const w = container.clientWidth, h = container.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h)
      composer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    ro.observe(container)

    return () => {
      running = false
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
      controls.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  // ── Lighting preset apply ─────────────────────────────────────────────────
  const applyPreset = useCallback((presetKey) => {
    const scene    = sceneRef.current
    const renderer = rendererRef.current
    const composer = composerRef.current
    if (!scene) return
    const preset = LIGHT_PRESETS[presetKey] ?? LIGHT_PRESETS.studio

    scene.children.filter(c => c.isLight).forEach(l => scene.remove(l))

    const [ac, ai] = preset.ambient
    scene.add(Object.assign(new THREE.AmbientLight(ac, ai)))

    const [kc, ki, kp] = preset.key
    const key = new THREE.DirectionalLight(kc, ki)
    key.position.set(...kp)
    scene.add(key)

    const [fc, fi, fp] = preset.fill
    const fill = new THREE.DirectionalLight(fc, fi)
    fill.position.set(...fp)
    scene.add(fill)

    const [rc, ri, rp] = preset.rim
    const rim = new THREE.DirectionalLight(rc, ri)
    rim.position.set(...rp)
    scene.add(rim)

    const hex = preset.bg
    renderer?.setClearColor(hex, 1)
    if (scene.fog) scene.fog.color.setHex(hex)
  }, [])

  const applyBg = useCallback((hexStr) => {
    const hex = parseInt(hexStr.replace('#', ''), 16)
    rendererRef.current?.setClearColor(hex, 1)
    if (sceneRef.current?.fog) sceneRef.current.fog.color.setHex(hex)
  }, [])

  // ── Mesh rebuild — same pipeline as 3D preview ────────────────────────────
  const rebuild = useCallback(() => {
    const scene = sceneRef.current
    if (!scene) return
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
    const composited   = getCompositedVoxels(layers, W, H, D)
    const voxelMats    = getCompositedMaterials(layers)
    const { group, dispose } = buildVoxelMesh(composited, W, H, D, {}, voxelMats)

    if (meshGroupRef.current) {
      scene.remove(meshGroupRef.current)
      disposeRef.current?.()
    }
    scene.add(group)
    meshGroupRef.current = group
    disposeRef.current   = dispose
  }, [])

  useEffect(() => {
    rebuild()
    applyPreset('studio')
  }, [rebuild, applyPreset])

  // ── PNG export ─────────────────────────────────────────────────────────────
  const exportPng = useCallback((size = 2048) => {
    const renderer  = rendererRef.current
    const composer  = composerRef.current
    const scene     = sceneRef.current
    const camera    = cameraRef.current
    if (!renderer || !scene || !camera) return

    const { canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
    const maxDim = Math.max(W, H, D)
    const dist   = maxDim * 0.1 * 3
    const exportCam = new THREE.PerspectiveCamera(42, 1, 0.01, 60)
    exportCam.position.set(dist, dist * 0.8, dist)
    exportCam.lookAt(0, 0, 0)

    // Temporarily swap camera on the RenderPass and resize
    const rp = composer.passes[0]
    const prevCam = rp.camera
    rp.camera = exportCam
    renderer.setSize(size, size)
    composer.setSize(size, size)
    composer.render()

    const dataUrl = renderer.domElement.toDataURL('image/png')
    const link    = document.createElement('a')
    link.download = `render_${size}px.png`
    link.href = dataUrl
    link.click()

    // Restore
    rp.camera = prevCam
    const container = containerRef.current
    if (container) {
      renderer.setSize(container.clientWidth, container.clientHeight)
      composer.setSize(container.clientWidth, container.clientHeight)
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
    }
  }, [])

  // ── GLB export — still uses HQ PBR builder ────────────────────────────────
  const exportGlb = useCallback(() => {
    const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
    const composited = getCompositedVoxels(layers, W, H, D)
    const { group, dispose } = buildVoxelMeshHQ(composited, W, H, D)

    const exporter = new GLTFExporter()
    exporter.parse(group, (result) => {
      const blob = new Blob([result], { type: 'application/octet-stream' })
      const url  = URL.createObjectURL(blob)
      const a    = document.createElement('a')
      a.href = url; a.download = 'model.glb'; a.click()
      URL.revokeObjectURL(url)
      dispose()
    }, (err) => console.error('GLB export error:', err), { binary: true })
  }, [])

  return { rebuild, applyPreset, applyBg, exportPng, exportGlb }
}
