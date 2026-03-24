import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { buildVoxelMesh } from '../../lib/meshBuilder.js'
import { useStore, getCompositedVoxels } from '../../store/index.js'

// ── 3D Edit helpers ────────────────────────────────────────────────────────────
const EDIT_UNIT = 0.1           // must match meshBuilder.js UNIT
const EDIT_EPS  = EDIT_UNIT * 0.6  // offset to step inside/outside a face

function worldToVoxel(wx, wy, wz, W, H, D) {
  const x = Math.round(wx / EDIT_UNIT + W / 2 - 0.5)
  const y = Math.round(H - 1 - (wy - EDIT_UNIT / 2) / EDIT_UNIT)
  const z = Math.round(wz / EDIT_UNIT + D / 2 - 0.5)
  return {
    x: Math.max(0, Math.min(W - 1, x)),
    y: Math.max(0, Math.min(H - 1, y)),
    z: Math.max(0, Math.min(D - 1, z)),
  }
}

function voxelCenterWorld(x, y, z, W, H, D) {
  return new THREE.Vector3(
    (x - W / 2 + 0.5) * EDIT_UNIT,
    (H - 1 - y) * EDIT_UNIT + EDIT_UNIT / 2,
    (z - D / 2 + 0.5) * EDIT_UNIT,
  )
}
// ──────────────────────────────────────────────────────────────────────────────

export function useThreeScene(containerRef) {
  const rendererRef     = useRef(null)
  const sceneRef        = useRef(null)
  const cameraRef       = useRef(null)
  const controlsRef     = useRef(null)
  const meshGroupRef    = useRef(null)
  const disposeGroupRef = useRef(null)
  const frameRef        = useRef(null)
  const rebuildTimerRef = useRef(null)
  const floorRef        = useRef(null)
  const ghostRef        = useRef(null)

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
    // No fog — prevents objects darkening as camera moves away
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

    // ── Edit: Floor picking plane (invisible, used for ground-level voxel placement) ──
    const floorGeo  = new THREE.PlaneGeometry(20, 20)
    const floorMat  = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide, transparent: true, opacity: 0, depthWrite: false,
    })
    const floorPick = new THREE.Mesh(floorGeo, floorMat)
    floorPick.rotation.x = -Math.PI / 2
    floorPick.position.y = -0.002
    scene.add(floorPick)
    floorRef.current = floorPick

    // ── Edit: Ghost hover cube ─────────────────────────────────────────
    const ghostBoxGeo  = new THREE.BoxGeometry(EDIT_UNIT * 0.96, EDIT_UNIT * 0.96, EDIT_UNIT * 0.96)
    const ghostBoxMat  = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.35 })
    const ghostMesh    = new THREE.Mesh(ghostBoxGeo, ghostBoxMat)
    const ghostEdgeGeo = new THREE.EdgesGeometry(ghostBoxGeo)
    const ghostEdgeMat = new THREE.LineBasicMaterial({ color: 0x00ff88 })
    const ghostEdges   = new THREE.LineSegments(ghostEdgeGeo, ghostEdgeMat)
    ghostMesh.add(ghostEdges)
    ghostMesh.visible = false
    scene.add(ghostMesh)
    ghostRef.current = ghostMesh

    // ── Camera ────────────────────────────────────────────────────────────
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

    // ── Edit: 3D interaction (active when viewMode === 'preview-only') ──
    const raycaster = new THREE.Raycaster()
    let spaceHeld    = false
    let isPainting   = false
    let lastPaintKey = null  // deduplicate voxels during drag

    function isEditMode() {
      return useStore.getState().viewMode === 'preview-only'
    }

    function syncControls() {
      // Zoom and pan always work; rotation requires Space in edit mode
      controls.enabled      = true
      controls.enableRotate = !isEditMode() || spaceHeld
      controls.enableZoom   = true
      controls.enablePan    = true
    }

    function setCursor(cur) {
      renderer.domElement.style.cursor = cur
    }

    function getRaycastHit(clientX, clientY) {
      const rect = renderer.domElement.getBoundingClientRect()
      const ndcX =  ((clientX - rect.left) / rect.width)  * 2 - 1
      const ndcY = -((clientY - rect.top)  / rect.height) * 2 + 1
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera)
      const targets = []
      if (meshGroupRef.current) targets.push(meshGroupRef.current)
      targets.push(floorPick)
      const hits = raycaster.intersectObjects(targets, true)
      return hits.length > 0 ? hits[0] : null
    }

    function getEditVoxel(hit, W, H, D, adjacent) {
      const p = hit.point.clone()
      const n = hit.face.normal.clone().transformDirection(hit.object.matrixWorld)
      const offset = adjacent ? EDIT_EPS : -EDIT_EPS
      return worldToVoxel(p.x + n.x * offset, p.y + n.y * offset, p.z + n.z * offset, W, H, D)
    }

    function updateGhost(clientX, clientY) {
      const ghost = ghostRef.current
      if (!ghost) return
      const { activeTool, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
      const hit = getRaycastHit(clientX, clientY)
      if (!hit) { ghost.visible = false; return }
      const isErase   = activeTool === 'eraser'
      const isEyedrop = activeTool === 'eyedropper'
      const adjacent  = !isErase && !isEyedrop
      const vox = getEditVoxel(hit, W, H, D, adjacent)
      ghost.position.copy(voxelCenterWorld(vox.x, vox.y, vox.z, W, H, D))
      ghost.visible = true
      const col = isErase ? 0xff4444 : isEyedrop ? 0x00ccff : 0x00ff88
      ghost.material.color.setHex(col)
      ghost.children[0].material.color.setHex(col)
    }

    // Paint one voxel, deduplicating by voxel key during a drag stroke.
    function paintAtIfNew(clientX, clientY) {
      const { activeTool, currentColor, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
      const hit = getRaycastHit(clientX, clientY)
      if (!hit) return
      const isFloor = hit.object === floorPick

      if (activeTool === 'eyedropper') {
        if (isFloor) return
        const vox = getEditVoxel(hit, W, H, D, false)
        const col = getCompositedVoxels(useStore.getState().layers, W, H, D)[vox.y]?.[vox.x]?.[vox.z]
        if (col && col !== 'transparent') useStore.getState().setCurrentColor(col)
        return
      }

      if (activeTool === 'eraser') {
        if (isFloor) return
        const vox = getEditVoxel(hit, W, H, D, false)
        const key = `${vox.x},${vox.y},${vox.z}`
        if (key === lastPaintKey) return
        lastPaintKey = key
        const col = getCompositedVoxels(useStore.getState().layers, W, H, D)[vox.y]?.[vox.x]?.[vox.z]
        if (!col || col === 'transparent') return
        useStore.getState().paintVoxelDirect(vox.x, vox.y, vox.z, 'transparent')
        return
      }

      // pencil / fill → place adjacent voxel
      const vox = getEditVoxel(hit, W, H, D, true)
      const key = `${vox.x},${vox.y},${vox.z}`
      if (key === lastPaintKey) return
      lastPaintKey = key
      useStore.getState().paintVoxelDirect(vox.x, vox.y, vox.z, currentColor)
    }

    // ── Keyboard: Space toggles between paint-drag and orbit-drag ─────
    const onKeyDown = (e) => {
      if (e.code !== 'Space' || !isEditMode()) return
      e.preventDefault()
      if (spaceHeld) return
      spaceHeld = true
      syncControls()
      if (ghostRef.current) ghostRef.current.visible = false
      setCursor('grab')
    }

    const onKeyUp = (e) => {
      if (e.code !== 'Space') return
      spaceHeld = false
      syncControls()
      if (isEditMode()) setCursor('crosshair')
    }

    // ── Pointer events ────────────────────────────────────────────────
    const onPointerDown = (e) => {
      if (!isEditMode() || spaceHeld) return
      if (e.button !== 0) return
      // Disable all controls during active paint stroke to avoid interference
      controls.enabled = false
      isPainting = true
      lastPaintKey = null
      renderer.domElement.setPointerCapture(e.pointerId)
      setCursor('crosshair')
      useStore.getState().pushUndo()
      paintAtIfNew(e.clientX, e.clientY)
    }

    const onPointerMove = (e) => {
      if (!isEditMode()) {
        if (ghostRef.current) ghostRef.current.visible = false
        return
      }
      if (isPainting && !spaceHeld) {
        if (ghostRef.current) ghostRef.current.visible = false
        paintAtIfNew(e.clientX, e.clientY)
      } else {
        updateGhost(e.clientX, e.clientY)
      }
    }

    const onPointerUp = (e) => {
      if (!isPainting) return
      isPainting = false
      lastPaintKey = null
      syncControls()
      try { renderer.domElement.releasePointerCapture(e.pointerId) } catch (_) {}
      setCursor(spaceHeld ? 'grab' : isEditMode() ? 'crosshair' : 'default')
    }

    const onPointerLeave = () => {
      if (ghostRef.current) ghostRef.current.visible = false
    }

    // Set initial cursor when entering edit mode
    syncControls()
    if (isEditMode()) setCursor('crosshair')

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    renderer.domElement.addEventListener('pointermove', onPointerMove)
    renderer.domElement.addEventListener('pointerup', onPointerUp)
    renderer.domElement.addEventListener('pointerleave', onPointerLeave)

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
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('pointerup', onPointerUp)
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave)
      controls.dispose()
      groundMat.dispose()
      groundGeo.dispose()
      ghostBoxGeo.dispose()
      ghostBoxMat.dispose()
      ghostEdgeGeo.dispose()
      ghostEdgeMat.dispose()
      floorGeo.dispose()
      floorMat.dispose()
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
