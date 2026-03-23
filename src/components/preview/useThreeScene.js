import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { buildVoxelMesh } from '../../lib/meshBuilder.js'
import { useStore, getCompositedVoxels } from '../../store/index.js'

export function useThreeScene(containerRef) {
  const rendererRef     = useRef(null)
  const sceneRef        = useRef(null)
  const cameraRef       = useRef(null)
  const controlsRef     = useRef(null)
  const meshGroupRef    = useRef(null)
  const disposeGroupRef = useRef(null)
  const frameRef        = useRef(null)
  const rebuildTimerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ── Renderer ──────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.toneMapping = THREE.NoToneMapping
    renderer.setClearColor(0x0c0804, 1)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // ── Scene ─────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0c0804, 0.18)
    sceneRef.current = scene

    // ── Lighting ──────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffe8c0, 0.45)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.6)
    keyLight.position.set(4, 6, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x8090d0, 0.35)
    fillLight.position.set(-3, -1, -2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xff8820, 0.2)
    rimLight.position.set(0, -3, -5)
    scene.add(rimLight)

    // ── Ground ────────────────────────────────────────────────────────
    const gridHelper = new THREE.GridHelper(8, 16, 0x3a2a10, 0x241808)
    gridHelper.position.y = -0.05
    gridHelper.material.transparent = true
    gridHelper.material.opacity = 0.5
    scene.add(gridHelper)

    const groundGeo = new THREE.CircleGeometry(4, 32)
    const groundMat = new THREE.MeshLambertMaterial({
      color: 0x1a1006, transparent: true, opacity: 0.6,
    })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.051
    scene.add(ground)

    // ── Camera ────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      45, container.clientWidth / container.clientHeight, 0.01, 50
    )
    camera.position.set(2.5, 2.8, 2.5)
    camera.lookAt(0, 1.6, 0)
    cameraRef.current = camera

    // ── Controls ──────────────────────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.minDistance = 0.3
    controls.maxDistance = 15
    controls.target.set(0, 1.6, 0)
    controlsRef.current = controls

    // ── Render loop ───────────────────────────────────────────────────
    let running = true
    function animate() {
      if (!running) return
      frameRef.current = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    ro.observe(container)

    return () => {
      running = false
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
      controls.dispose()
      groundMat.dispose()
      groundGeo.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  // ── Theme background sync ─────────────────────────────────────────────
  useEffect(() => {
    const unsub = useStore.subscribe((state, prev) => {
      if (state.activeTheme !== prev.activeTheme && rendererRef.current) {
        import('../../themes/index.js').then(({ getTheme }) => {
          const theme = getTheme(state.activeTheme)
          const hex = theme.sceneBackground.replace('#', '')
          rendererRef.current?.setClearColor(parseInt(hex, 16), 1)
        })
      }
    })
    return unsub
  }, [])

  // ── Mesh rebuild ──────────────────────────────────────────────────────
  const rebuild = useCallback(() => {
    if (!sceneRef.current) return
    const { layers, canvasWidth, canvasHeight, depthDimension } = useStore.getState()
    const composited = getCompositedVoxels(layers, canvasWidth, canvasHeight, depthDimension)
    const { group, dispose } = buildVoxelMesh(composited, canvasWidth, canvasHeight, depthDimension)


    if (meshGroupRef.current) {
      sceneRef.current.remove(meshGroupRef.current)
      disposeGroupRef.current?.()
    }
    sceneRef.current.add(group)
    meshGroupRef.current = group
    disposeGroupRef.current = dispose
  }, [])

  useEffect(() => {
    rebuild()
    const unsub = useStore.subscribe((state, prevState) => {
      if (state.layers !== prevState.layers || state.depthDimension !== prevState.depthDimension) {
        clearTimeout(rebuildTimerRef.current)
        rebuildTimerRef.current = setTimeout(rebuild, 80)
      }
    })
    return () => {
      unsub()
      clearTimeout(rebuildTimerRef.current)
    }
  }, [rebuild])

  // ── Export PNG ───────────────────────────────────────────────────────
  const exportPng = useCallback(() => {
    const renderer = rendererRef.current
    const scene = sceneRef.current
    const { canvasWidth, canvasHeight, depthDimension } = useStore.getState()
    if (!renderer || !scene) return

    const size = 1024
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 50)
    const maxDim = Math.max(canvasWidth, canvasHeight, depthDimension)
    const dist = maxDim * 0.1 * 2.8
    camera.position.set(dist, dist * 0.75, dist)
    camera.lookAt(0, 0, 0)

    renderer.setSize(size, size)
    renderer.render(scene, camera)
    const dataUrl = renderer.domElement.toDataURL('image/png')

    const container = containerRef.current
    if (container) {
      renderer.setSize(container.clientWidth, container.clientHeight)
      cameraRef.current.aspect = container.clientWidth / container.clientHeight
      cameraRef.current.updateProjectionMatrix()
    }

    const link = document.createElement('a')
    link.download = 'picell3d-export.png'
    link.href = dataUrl
    link.click()
  }, [])

  return { exportPng }
}
