import { useEffect, useRef, useCallback, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { createChunkedVoxelMesh } from '../../lib/chunkedMeshBuilder.js'
import {
  SHAPE_TOOLS_3D, VOLUME_PRIMITIVE_TOOLS_3D,
  dominantAxis, lockVoxelToPlane, compute3DShapeVoxels, computeVolumePrimitiveVoxels,
} from '../../lib/shapeRasterizer3D.js'
import { samplePointerSegment } from '../../lib/strokeSampler.js'
import { expandVoxelBrush } from '../../lib/brushFootprint.js'
import { useStore, getCompositedVoxels, getCompositedMaterials } from '../../store/index.js'

// ── 3D Edit helpers ────────────────────────────────────────────────────────────
const EDIT_UNIT = 0.1           // must match chunkMesher.js VOXEL_UNIT
const EDIT_EPS  = EDIT_UNIT * 0.6  // offset to step inside/outside a face
const ALL_SHAPE_TOOLS_3D = new Set([...SHAPE_TOOLS_3D, ...VOLUME_PRIMITIVE_TOOLS_3D])
const PLANE_DRAW_TOOLS = new Set(['pencil', 'eraser', 'material', 'blend', ...ALL_SHAPE_TOOLS_3D])
const BRUSH_TOOLS_3D = new Set(['pencil', 'eraser', 'material', 'blend'])

function isLockedPlaneActive(state) {
  return state.planeLock && PLANE_DRAW_TOOLS.has(state.activeTool)
}

function computeShapeDragVoxels(drag, W, H, D) {
  if (VOLUME_PRIMITIVE_TOOLS_3D.has(drag.tool)) {
    return computeVolumePrimitiveVoxels(
      drag.tool, drag.start, drag.end, drag.axis, W, H, D,
      {
        filled: drag.filled,
        thickness: drag.thickness,
        depth: drag.primitiveDepth,
        direction: drag.direction,
      },
    )
  }
  return compute3DShapeVoxels(
    drag.tool, drag.start, drag.end, drag.axis, W, H, D,
    drag.filled, drag.thickness,
  )
}

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

function getDrawingPlaneSpec(state) {
  const { canvasWidth: W, canvasHeight: H, depthDimension: D } = state
  const axis = state.planeAxis === 'x' || state.planeAxis === 'y' ? state.planeAxis : 'z'
  const size = axis === 'x' ? W : axis === 'y' ? H : D
  const depth = Math.max(0, Math.min(size - 1, Math.round(state.planeDepth)))
  const center = axis === 'x'
    ? voxelCenterWorld(depth, (H - 1) / 2, (D - 1) / 2, W, H, D)
    : axis === 'y'
      ? voxelCenterWorld((W - 1) / 2, depth, (D - 1) / 2, W, H, D)
      : voxelCenterWorld((W - 1) / 2, (H - 1) / 2, depth, W, H, D)
  const normal = axis === 'x'
    ? new THREE.Vector3(1, 0, 0)
    : axis === 'y' ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1)
  return {
    axis,
    depth,
    center,
    normal,
    width: (axis === 'x' ? D : W) * EDIT_UNIT,
    height: (axis === 'y' ? D : H) * EDIT_UNIT,
    plane: new THREE.Plane().setFromNormalAndCoplanarPoint(normal, center),
  }
}

function isPointInsideVoxelBounds(point, W, H, D) {
  const eps = EDIT_UNIT * 0.02
  return point.x >= -W * EDIT_UNIT / 2 - eps
    && point.x <= W * EDIT_UNIT / 2 + eps
    && point.y >= -eps
    && point.y <= H * EDIT_UNIT + eps
    && point.z >= -D * EDIT_UNIT / 2 - eps
    && point.z <= D * EDIT_UNIT / 2 + eps
}
// ──────────────────────────────────────────────────────────────────────────────

export function useThreeScene(containerRef) {
  const rendererRef     = useRef(null)
  const sceneRef        = useRef(null)
  const cameraRef       = useRef(null)
  const controlsRef     = useRef(null)
  const meshGroupRef    = useRef(null)
  const disposeGroupRef = useRef(null)
  const chunkedMeshRef  = useRef(null)
  const frameRef        = useRef(null)
  const rebuildTimerRef = useRef(null)
  const floorRef        = useRef(null)
  const ghostRef        = useRef(null)
  const shapeActionRef  = useRef(null)
  const [isShapeEditing, setIsShapeEditing] = useState(false)
  const [isPointerLocked, setIsPointerLocked] = useState(false)

  const confirmShape = useCallback(() => shapeActionRef.current?.(true), [])
  const cancelShape = useCallback(() => shapeActionRef.current?.(false), [])

  const requestPointerLock = useCallback(() => {
    try {
      rendererRef.current?.domElement?.requestPointerLock()
    } catch (_) {}
  }, [])

  const exitPointerLock = useCallback(() => {
    try {
      if (document.pointerLockElement === rendererRef.current?.domElement) {
        document.exitPointerLock?.()
      }
    } catch (_) {}
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ── Renderer ──────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.toneMapping = THREE.NoToneMapping
    // Apply the current theme's background immediately (not hardcoded)
    const initThemeName = useStore.getState().activeTheme
    import('../../themes/index.js').then(({ getTheme }) => {
      const bg = getTheme(initThemeName).sceneBackground.replace('#', '')
      if (rendererRef.current) rendererRef.current.setClearColor(parseInt(bg, 16), 1)
    })
    renderer.setClearColor(0x080015, 1) // synthwave fallback until async resolves
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

    const brushPreviewMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88, transparent: true, opacity: 0.32, depthWrite: false,
    })
    const brushPreview = new THREE.InstancedMesh(ghostBoxGeo, brushPreviewMat, 64)
    brushPreview.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    brushPreview.count = 0
    brushPreview.visible = false
    scene.add(brushPreview)

    // A dedicated face overlay makes the exact picked side visible separately
    // from the adjacent/inside voxel preview cube.
    const faceGeo = new THREE.PlaneGeometry(EDIT_UNIT * 0.94, EDIT_UNIT * 0.94)
    const faceMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88, transparent: true, opacity: 0.28,
      side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2,
    })
    const faceMesh = new THREE.Mesh(faceGeo, faceMat)
    const faceEdgeGeo = new THREE.EdgesGeometry(faceGeo)
    const faceEdgeMat = new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.95 })
    const faceEdges = new THREE.LineSegments(faceEdgeGeo, faceEdgeMat)
    faceMesh.add(faceEdges)
    faceMesh.visible = false
    scene.add(faceMesh)

    // The locked drawing plane stays visible even when there are no voxels yet.
    const drawingPlaneGeo = new THREE.PlaneGeometry(1, 1)
    const drawingPlaneMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88, transparent: true, opacity: 0.08,
      side: THREE.DoubleSide, depthWrite: false,
    })
    const drawingPlane = new THREE.Mesh(drawingPlaneGeo, drawingPlaneMat)
    const drawingPlaneEdgeGeo = new THREE.EdgesGeometry(drawingPlaneGeo)
    const drawingPlaneEdgeMat = new THREE.LineBasicMaterial({
      color: 0x00ff88, transparent: true, opacity: 0.55,
    })
    drawingPlane.add(new THREE.LineSegments(drawingPlaneEdgeGeo, drawingPlaneEdgeMat))
    drawingPlane.visible = false
    scene.add(drawingPlane)

    // Shape tools use a lightweight instanced ghost preview until confirmation.
    const shapePreviewMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88, transparent: true, opacity: 0.38, depthWrite: false,
    })
    const shapePreviewGroup = new THREE.Group()
    scene.add(shapePreviewGroup)
    let shapePreviewMesh = null

    const shapeHandleGeo = new THREE.BoxGeometry(EDIT_UNIT * 1.35, EDIT_UNIT * 1.35, EDIT_UNIT * 1.35)
    const shapeStartHandleMat = new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false })
    const shapeEndHandleMat = new THREE.MeshBasicMaterial({ color: 0xffcc33, depthTest: false })
    const shapeStartHandle = new THREE.Mesh(shapeHandleGeo, shapeStartHandleMat)
    const shapeEndHandle = new THREE.Mesh(shapeHandleGeo, shapeEndHandleMat)
    shapeStartHandle.userData.shapeHandle = 'start'
    shapeEndHandle.userData.shapeHandle = 'end'
    shapeStartHandle.renderOrder = 20
    shapeEndHandle.renderOrder = 20
    const shapeHandleGroup = new THREE.Group()
    shapeHandleGroup.add(shapeStartHandle, shapeEndHandle)
    shapeHandleGroup.visible = false
    scene.add(shapeHandleGroup)

    const selectionPreviewMat = new THREE.MeshBasicMaterial({
      color: 0x22ccff, transparent: true, opacity: 0.38, depthWrite: false,
    })
    const selectionPreviewGroup = new THREE.Group()
    scene.add(selectionPreviewGroup)
    let selectionPreviewMesh = null
    let selectionBoundsHelper = null

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

    // ── Bloom / Post-processing ────────────────────────────────────────────
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.55,  // strength
      0.40,  // radius
      0.42,  // threshold — neon (~0.85 lum) and emissive (~0.6 lum) exceed this
    )
    composer.addPass(bloomPass)

    // ── Edit: 3D interaction (active when viewMode === 'preview-only') ──
    const raycaster = new THREE.Raycaster()
    let spaceHeld    = false
    let isPainting   = false
    let lastPaintKey = null  // deduplicate voxels during drag
    let lastPointerPoint = null
    let strokePaintedKeys = new Set()
    let shapeDrag    = null  // { tool, start, end, axis, plane, voxels }
    let selectionDrag = null

    // ── Fly Mode State ────────────────────────────────────────────────
    let isFlyMode = Boolean(useStore.getState().flyMode)
    let flyYaw = 0
    let flyPitch = 0
    const flyKeys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false,
      boost: false,
    }
    const flyVelocity = new THREE.Vector3()
    let lastFrameTime = performance.now()
    let isPaintingRight = false
    let lastMousePos = null
    let isRightDragLooking = false
    let lastDragPos = null

    function isEditMode() {
      return useStore.getState().viewMode === 'preview-only'
    }

    function initFlyOrientation() {
      const forward = new THREE.Vector3()
      camera.getWorldDirection(forward)
      flyPitch = Math.asin(Math.max(-0.9999, Math.min(0.9999, forward.y)))
      flyYaw = Math.atan2(-forward.x, -forward.z)
      camera.rotation.order = 'YXZ'
      camera.rotation.set(flyPitch, flyYaw, 0)
      flyVelocity.set(0, 0, 0)
      Object.keys(flyKeys).forEach(k => { flyKeys[k] = false })
    }

    function exitFlyMode() {
      if (document.pointerLockElement === renderer.domElement) {
        document.exitPointerLock?.()
      }
      setIsPointerLocked(false)
      const forward = new THREE.Vector3()
      camera.getWorldDirection(forward)
      controls.target.copy(camera.position).addScaledVector(forward, 2.5)
      syncControls()
      controls.update()
      setCursor(isEditMode() ? 'crosshair' : 'default')
    }

    function syncControls() {
      if (isFlyMode) {
        controls.enabled = false
        controls.enableRotate = false
        controls.enableZoom = false
        controls.enablePan = false
        return
      }
      // Zoom and pan always work; rotation requires Space in edit mode
      controls.enabled      = true
      controls.enableRotate = !isEditMode() || spaceHeld
      controls.enableZoom   = true
      controls.enablePan    = true
    }

    if (isFlyMode) {
      initFlyOrientation()
      syncControls()
    }

    function setCursor(cur) {
      renderer.domElement.style.cursor = cur
    }

    function setRayFromPointer(clientX, clientY) {
      const rect = renderer.domElement.getBoundingClientRect()
      const ndcX =  ((clientX - rect.left) / rect.width)  * 2 - 1
      const ndcY = -((clientY - rect.top)  / rect.height) * 2 + 1
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera)
    }

    function setRayForCurrentMode(clientX, clientY) {
      if (isFlyMode) {
        if (document.pointerLockElement === renderer.domElement) {
          raycaster.setFromCamera(new THREE.Vector2(0, 0), camera)
          return
        }
        if (clientX !== undefined && clientY !== undefined) {
          setRayFromPointer(clientX, clientY)
          return
        }
        if (lastMousePos) {
          setRayFromPointer(lastMousePos.x, lastMousePos.y)
          return
        }
        raycaster.setFromCamera(new THREE.Vector2(0, 0), camera)
        return
      }
      if (clientX !== undefined && clientY !== undefined) {
        setRayFromPointer(clientX, clientY)
      }
    }

    function getRaycastHit(clientX, clientY) {
      setRayForCurrentMode(clientX, clientY)
      const targets = []
      if (meshGroupRef.current) targets.push(meshGroupRef.current)
      targets.push(floorPick)
      const hits = raycaster.intersectObjects(targets, true)
      return hits.length > 0 ? hits[0] : null
    }

    function getEditVoxel(hit, W, H, D, adjacent) {
      const p = hit.point.clone()
      const n = getHitWorldNormal(hit)
      const offset = adjacent ? EDIT_EPS : -EDIT_EPS
      return worldToVoxel(p.x + n.x * offset, p.y + n.y * offset, p.z + n.z * offset, W, H, D)
    }

    function getHitWorldNormal(hit) {
      return hit.face.normal.clone().transformDirection(hit.object.matrixWorld)
    }

    function getLockedPlaneTarget(clientX, clientY, state = useStore.getState()) {
      if (!isLockedPlaneActive(state)) return null
      const spec = getDrawingPlaneSpec(state)
      setRayFromPointer(clientX, clientY)
      const worldPoint = new THREE.Vector3()
      if (!raycaster.ray.intersectPlane(spec.plane, worldPoint)) return null
      const { canvasWidth: W, canvasHeight: H, depthDimension: D } = state
      if (!isPointInsideVoxelBounds(worldPoint, W, H, D)) return null
      const voxel = worldToVoxel(worldPoint.x, worldPoint.y, worldPoint.z, W, H, D)
      voxel[spec.axis] = spec.depth
      return { voxel, worldPoint, ...spec }
    }

    function updateDrawingPlane(state = useStore.getState()) {
      const visible = state.viewMode === 'preview-only' && isLockedPlaneActive(state)
      drawingPlane.visible = visible
      if (!visible) return
      const spec = getDrawingPlaneSpec(state)
      drawingPlane.position.copy(spec.center)
      drawingPlane.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), spec.normal)
      drawingPlane.scale.set(spec.width, spec.height, 1)
    }

    function hideBrushPreview() {
      brushPreview.visible = false
      brushPreview.count = 0
    }

    function updateBrushPreview(voxels, W, H, D, color) {
      const matrix = new THREE.Matrix4()
      brushPreview.count = Math.min(voxels.length, 64)
      for (let i = 0; i < brushPreview.count; i++) {
        matrix.makeTranslation(...voxelCenterWorld(
          voxels[i].x, voxels[i].y, voxels[i].z, W, H, D,
        ).toArray())
        brushPreview.setMatrixAt(i, matrix)
      }
      brushPreview.instanceMatrix.needsUpdate = true
      brushPreview.material.color.setHex(color)
      brushPreview.visible = brushPreview.count > 0
    }

    function clearShapePreview() {
      if (shapePreviewMesh) shapePreviewGroup.remove(shapePreviewMesh)
      shapePreviewMesh = null
    }

    function updateShapePreview(voxels, W, H, D) {
      clearShapePreview()
      if (!voxels.length) return
      shapePreviewMesh = new THREE.InstancedMesh(ghostBoxGeo, shapePreviewMat, voxels.length)
      const matrix = new THREE.Matrix4()
      for (let i = 0; i < voxels.length; i++) {
        matrix.makeTranslation(...voxelCenterWorld(voxels[i].x, voxels[i].y, voxels[i].z, W, H, D).toArray())
        shapePreviewMesh.setMatrixAt(i, matrix)
      }
      shapePreviewMesh.instanceMatrix.needsUpdate = true
      shapePreviewGroup.add(shapePreviewMesh)
    }

    function clearSelectionPreview() {
      if (selectionPreviewMesh) selectionPreviewGroup.remove(selectionPreviewMesh)
      selectionPreviewMesh = null
      if (selectionBoundsHelper) {
        selectionPreviewGroup.remove(selectionBoundsHelper)
        selectionBoundsHelper.geometry?.dispose()
        selectionBoundsHelper.material?.dispose()
      }
      selectionBoundsHelper = null
    }

    function updateSelectionPreview(state = useStore.getState()) {
      clearSelectionPreview()
      const selection = state.selection3D
      if (state.viewMode !== 'preview-only' || state.activeTool !== 'select' || !selection?.voxels?.length) return
      const { canvasWidth: W, canvasHeight: H, depthDimension: D } = state
      selectionPreviewMesh = new THREE.InstancedMesh(ghostBoxGeo, selectionPreviewMat, selection.voxels.length)
      const matrix = new THREE.Matrix4()
      const box = new THREE.Box3()
      for (let i = 0; i < selection.voxels.length; i++) {
        const voxel = selection.voxels[i]
        const center = voxelCenterWorld(voxel.x, voxel.y, voxel.z, W, H, D)
        matrix.makeTranslation(...center.toArray())
        selectionPreviewMesh.setMatrixAt(i, matrix)
        box.expandByPoint(center)
      }
      selectionPreviewMesh.instanceMatrix.needsUpdate = true
      selectionPreviewGroup.add(selectionPreviewMesh)
      box.min.addScalar(-EDIT_UNIT / 2)
      box.max.addScalar(EDIT_UNIT / 2)
      selectionBoundsHelper = new THREE.Box3Helper(box, 0x22ccff)
      selectionBoundsHelper.material.depthTest = false
      selectionBoundsHelper.renderOrder = 21
      selectionPreviewGroup.add(selectionBoundsHelper)
    }

    function updateShapeHandles(W, H, D) {
      if (!shapeDrag?.editing) {
        shapeHandleGroup.visible = false
        return
      }
      shapeStartHandle.position.copy(voxelCenterWorld(
        shapeDrag.start.x, shapeDrag.start.y, shapeDrag.start.z, W, H, D,
      ))
      shapeEndHandle.position.copy(voxelCenterWorld(
        shapeDrag.end.x, shapeDrag.end.y, shapeDrag.end.z, W, H, D,
      ))
      shapeHandleGroup.visible = true
    }

    function getShapeHandle(clientX, clientY) {
      if (!shapeDrag?.editing) return null
      setRayFromPointer(clientX, clientY)
      return raycaster.intersectObjects([shapeStartHandle, shapeEndHandle], false)[0]?.object?.userData?.shapeHandle ?? null
    }

    function updateShapeDrag(clientX, clientY, handle = 'end') {
      if (!shapeDrag) return
      const { canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
      setRayFromPointer(clientX, clientY)
      const worldPoint = new THREE.Vector3()
      if (!raycaster.ray.intersectPlane(shapeDrag.plane, worldPoint)) return
      if (shapeDrag.locked && !isPointInsideVoxelBounds(worldPoint, W, H, D)) return
      const rawPoint = worldToVoxel(worldPoint.x, worldPoint.y, worldPoint.z, W, H, D)
      const point = lockVoxelToPlane(rawPoint, shapeDrag.start, shapeDrag.axis)
      const start = handle === 'start' ? point : shapeDrag.start
      const end = handle === 'end' ? point : shapeDrag.end
      const nextDrag = { ...shapeDrag, start, end }
      const voxels = computeShapeDragVoxels(nextDrag, W, H, D)
      shapeDrag = { ...nextDrag, voxels }
      updateShapePreview(voxels, W, H, D)
      updateShapeHandles(W, H, D)
    }

    function finishShapeDrag(commit) {
      if (!shapeDrag) return
      const voxels = shapeDrag.voxels || []
      if (commit && voxels.length) {
        const store = useStore.getState()
        store.pushUndo()
        store.paintVoxelsDirect(voxels, store.currentColor)
      }
      shapeDrag = null
      clearShapePreview()
      shapeHandleGroup.visible = false
      setIsShapeEditing(false)
      syncControls()
    }
    shapeActionRef.current = finishShapeDrag

    function updateGhost(clientX, clientY) {
      if (clientX !== undefined && clientY !== undefined) {
        lastMousePos = { x: clientX, y: clientY }
      }
      const ghost = ghostRef.current
      if (!ghost) return
      const state = useStore.getState()
      const { activeTool, canvasWidth: W, canvasHeight: H, depthDimension: D } = state
      const isErase    = isPaintingRight ? activeTool === 'pencil' : activeTool === 'eraser'
      const isEyedrop  = activeTool === 'eyedropper'
      const isMaterial = activeTool === 'material'
      const isFill     = activeTool === 'fill'
      const isSelect   = activeTool === 'select'
      const isBrush    = BRUSH_TOOLS_3D.has(activeTool)
      const col = isErase ? 0xff4444 : isEyedrop || isSelect ? 0x22ccff : isMaterial ? 0xffaa00 : 0x00ff88
      hideBrushPreview()

      if (!isFlyMode) {
        const lockedTarget = getLockedPlaneTarget(clientX ?? lastMousePos?.x, clientY ?? lastMousePos?.y, state)
        if (lockedTarget) {
          const { voxel, normal } = lockedTarget
          const center = voxelCenterWorld(voxel.x, voxel.y, voxel.z, W, H, D)
          if (isBrush) {
            ghost.visible = false
            updateBrushPreview(
              expandVoxelBrush(voxel, lockedTarget.axis, state.brushSize, W, H, D),
              W, H, D, col,
            )
          } else {
            ghost.position.copy(center)
            ghost.visible = true
            ghost.material.color.setHex(col)
            ghost.children[0].material.color.setHex(col)
          }
          faceMesh.position.copy(center).addScaledVector(normal, 0.001)
          faceMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
          faceMesh.material.color.setHex(col)
          faceEdges.material.color.setHex(col)
          faceMesh.visible = true
          return
        }
        if (isLockedPlaneActive(state)) {
          ghost.visible = false
          faceMesh.visible = false
          return
        }
      }

      const hit = getRaycastHit(clientX, clientY)
      if (!hit) {
        ghost.visible = false
        faceMesh.visible = false
        return
      }
      const adjacent   = !isErase && !isEyedrop && !isMaterial && !isFill && !isSelect
      const vox = getEditVoxel(hit, W, H, D, adjacent)
      if (isBrush) {
        ghost.visible = false
        const axis = dominantAxis(getHitWorldNormal(hit))
        updateBrushPreview(
          expandVoxelBrush(vox, axis, state.brushSize, W, H, D),
          W, H, D, col,
        )
      } else {
        ghost.position.copy(voxelCenterWorld(vox.x, vox.y, vox.z, W, H, D))
        ghost.visible = true
        ghost.material.color.setHex(col)
        ghost.children[0].material.color.setHex(col)
      }

      const normal = getHitWorldNormal(hit).normalize()
      const surfaceVoxel = getEditVoxel(hit, W, H, D, false)
      const faceCenter = hit.object === floorPick
        ? voxelCenterWorld(vox.x, vox.y, vox.z, W, H, D).setY(floorPick.position.y + 0.002)
        : voxelCenterWorld(surfaceVoxel.x, surfaceVoxel.y, surfaceVoxel.z, W, H, D)
          .addScaledVector(normal, EDIT_UNIT / 2 + 0.001)
      faceMesh.position.copy(faceCenter)
      faceMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
      faceMesh.material.color.setHex(col)
      faceEdges.material.color.setHex(col)
      faceMesh.visible = true
    }

    function paintFlyVoxel(isRightClick = false) {
      const store = useStore.getState()
      const { activeTool, currentColor, canvasWidth: W, canvasHeight: H, depthDimension: D, brushSize } = store
      const hit = getRaycastHit()
      if (!hit) return
      const isFloor = hit.object === floorPick

      let tool = activeTool
      if (isRightClick) {
        if (tool === 'pencil') tool = 'eraser'
        else if (tool === 'eraser') tool = 'pencil'
        else return
      }

      if (tool === 'eyedropper') {
        if (isFloor) return
        const vox = getEditVoxel(hit, W, H, D, false)
        const col = getCompositedVoxels(store.layers, W, H, D)[vox.y]?.[vox.x]?.[vox.z]
        if (col && col !== 'transparent') store.setCurrentColor(col)
        return
      }

      if (tool === 'fill') {
        if (isFloor) return
        const vox = getEditVoxel(hit, W, H, D, false)
        const key = `${vox.x},${vox.y},${vox.z}`
        if (key === lastPaintKey) return
        lastPaintKey = key
        const normal = getHitWorldNormal(hit)
        store.floodFillVoxel3D(vox.x, vox.y, vox.z, currentColor, {
          x: normal.x, y: normal.y, z: normal.z,
        })
        return
      }

      const isErase = tool === 'eraser'
      const isMaterial = tool === 'material'
      const isPaint = tool === 'pencil' || tool === 'blend'

      if (isFloor && (isErase || isMaterial)) return

      const adjacent = isPaint
      const baseVoxel = getEditVoxel(hit, W, H, D, adjacent)
      const axis = dominantAxis(getHitWorldNormal(hit))
      const targets = expandVoxelBrush(baseVoxel, axis, brushSize, W, H, D)

      const newTargets = []
      for (const t of targets) {
        const key = `${t.x},${t.y},${t.z}`
        if (!strokePaintedKeys.has(key)) {
          strokePaintedKeys.add(key)
          newTargets.push(t)
        }
      }

      if (!newTargets.length) return

      if (isMaterial) {
        store.paintMaterialsDirect(newTargets)
      } else {
        store.paintVoxelsDirect(newTargets, isErase ? 'transparent' : currentColor)
      }
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

      if (activeTool === 'fill') {
        if (isFloor) return
        const vox = getEditVoxel(hit, W, H, D, false)
        const key = `${vox.x},${vox.y},${vox.z}`
        if (key === lastPaintKey) return
        lastPaintKey = key
        const normal = getHitWorldNormal(hit)
        useStore.getState().floodFillVoxel3D(vox.x, vox.y, vox.z, currentColor, {
          x: normal.x, y: normal.y, z: normal.z,
        })
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

      if (activeTool === 'material') {
        if (isFloor) return
        const vox = getEditVoxel(hit, W, H, D, false)
        const key = `${vox.x},${vox.y},${vox.z}`
        if (key === lastPaintKey) return
        lastPaintKey = key
        useStore.getState().paintMaterialDirect(vox.x, vox.y, vox.z)
        return
      }

      // Pencil and other paint tools place an adjacent voxel.
      const vox = getEditVoxel(hit, W, H, D, true)
      const key = `${vox.x},${vox.y},${vox.z}`
      if (key === lastPaintKey) return
      lastPaintKey = key
      useStore.getState().paintVoxelDirect(vox.x, vox.y, vox.z, currentColor)
    }

    function paintStableStroke(from, to) {
      const store = useStore.getState()
      const {
        activeTool, currentColor,
        canvasWidth: W, canvasHeight: H, depthDimension: D,
      } = store
      const isErase = activeTool === 'eraser'
      const isMaterial = activeTool === 'material'
      const isPaint = activeTool === 'pencil' || activeTool === 'blend'
      if (!isErase && !isMaterial && !isPaint) return

      const targets = []
      for (const point of samplePointerSegment(from, to, 2, 256)) {
        const lockedTarget = getLockedPlaneTarget(point.x, point.y, store)
        let voxel, axis
        if (lockedTarget) {
          voxel = lockedTarget.voxel
          axis = lockedTarget.axis
        } else if (isLockedPlaneActive(store)) {
          continue
        } else {
          const hit = getRaycastHit(point.x, point.y)
          if (!hit || ((isErase || isMaterial) && hit.object === floorPick)) continue
          voxel = getEditVoxel(hit, W, H, D, isPaint)
          axis = dominantAxis(getHitWorldNormal(hit))
        }
        for (const target of expandVoxelBrush(voxel, axis, store.brushSize, W, H, D)) {
          const key = `${target.x},${target.y},${target.z}`
          if (strokePaintedKeys.has(key)) continue
          strokePaintedKeys.add(key)
          targets.push(target)
        }
      }
      if (!targets.length) return
      if (isMaterial) store.paintMaterialsDirect(targets)
      else store.paintVoxelsDirect(targets, isErase ? 'transparent' : currentColor)
    }

    // ── Keyboard: Space toggles between paint-drag and orbit-drag ─────
    const onKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(e.target?.tagName)) return
      if (isFlyMode) {
        if (e.code === 'KeyW' || e.key === 'ArrowUp') {
          e.preventDefault()
          flyKeys.forward = true
          return
        }
        if (e.code === 'KeyS' || e.key === 'ArrowDown') {
          e.preventDefault()
          flyKeys.backward = true
          return
        }
        if (e.code === 'KeyA' || e.key === 'ArrowLeft') {
          e.preventDefault()
          flyKeys.left = true
          return
        }
        if (e.code === 'KeyD' || e.key === 'ArrowRight') {
          e.preventDefault()
          flyKeys.right = true
          return
        }
        if (e.code === 'Space') {
          e.preventDefault()
          flyKeys.up = true
          return
        }
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyC') {
          flyKeys.down = true
          return
        }
        if (e.code === 'ControlLeft' || e.code === 'ControlRight' || e.code === 'AltLeft' || e.code === 'AltRight') {
          flyKeys.boost = true
          return
        }
        if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
          const tools = ['pencil', 'eraser', 'fill', 'blend', 'material', 'eyedropper']
          const idx = parseInt(e.key, 10) - 1
          if (tools[idx]) useStore.getState().setActiveTool(tools[idx])
          return
        }
        if (e.key.toLowerCase() === 'x' && !e.ctrlKey && !e.metaKey) {
          useStore.getState().toggleFlyMode()
          return
        }
        if (e.key === 'Escape') {
          if (document.pointerLockElement === renderer.domElement) {
            document.exitPointerLock?.()
            return
          }
        }
      }

      if (e.key === 'Escape' && shapeDrag) {
        e.preventDefault()
        finishShapeDrag(false)
        setCursor('crosshair')
        return
      }
      if (e.key === 'Enter' && shapeDrag?.editing) {
        e.preventDefault()
        finishShapeDrag(true)
        setCursor('crosshair')
        return
      }
      if (useStore.getState().activeTool === 'select' && useStore.getState().selection3D) {
        if (e.key === 'Escape') {
          e.preventDefault()
          useStore.getState().clearSelection3D()
          return
        }
        if (e.key === 'Enter') {
          e.preventDefault()
          useStore.getState().applySelection3D()
          return
        }
        if (e.key === 'Delete' || e.key === 'Backspace') {
          e.preventDefault()
          useStore.getState().deleteSelection3D()
          return
        }
      }
      if (e.code !== 'Space' || !isEditMode()) return
      e.preventDefault()
      if (shapeDrag && !shapeDrag.editing) return
      if (spaceHeld) return
      spaceHeld = true
      syncControls()
      if (ghostRef.current) ghostRef.current.visible = false
      hideBrushPreview()
      faceMesh.visible = false
      setCursor('grab')
    }

    const onKeyUp = (e) => {
      if (isFlyMode) {
        if (e.code === 'KeyW' || e.key === 'ArrowUp')    flyKeys.forward = false
        if (e.code === 'KeyS' || e.key === 'ArrowDown')  flyKeys.backward = false
        if (e.code === 'KeyA' || e.key === 'ArrowLeft')  flyKeys.left = false
        if (e.code === 'KeyD' || e.key === 'ArrowRight') flyKeys.right = false
        if (e.code === 'Space')                          flyKeys.up = false
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyC') flyKeys.down = false
        if (e.code === 'ControlLeft' || e.code === 'ControlRight' || e.code === 'AltLeft' || e.code === 'AltRight') flyKeys.boost = false
      }
      if (e.code !== 'Space') return
      spaceHeld = false
      syncControls()
      if (isEditMode() && !isFlyMode) setCursor('crosshair')
    }

    // ── Pointer events ────────────────────────────────────────────────
    const onPointerDown = (e) => {
      if (isFlyMode) {
        if (!document.pointerLockElement && (e.button === 0 || e.button === 2)) {
          try {
            renderer.domElement.requestPointerLock()
          } catch (_) {}
        }

        if (e.button === 0) {
          isPainting = true
          isPaintingRight = false
          strokePaintedKeys = new Set()
          lastPaintKey = null
          if (useStore.getState().activeTool !== 'eyedropper') {
            useStore.getState().pushUndo()
          }
          paintFlyVoxel(false)
          updateGhost()
          return
        }
        if (e.button === 2) {
          e.preventDefault()
          isPaintingRight = true
          isPainting = false
          strokePaintedKeys = new Set()
          lastPaintKey = null
          useStore.getState().pushUndo()
          paintFlyVoxel(true)
          updateGhost()
          return
        }
        if (e.button === 1) {
          isRightDragLooking = true
          lastDragPos = { x: e.clientX, y: e.clientY }
          return
        }
        return
      }

      if (!isEditMode() || spaceHeld) return
      if (e.button !== 0) return
      const store = useStore.getState()
      const { activeTool, canvasWidth: W, canvasHeight: H, depthDimension: D } = store

      if (activeTool === 'select') {
        const hit = getRaycastHit(e.clientX, e.clientY)
        if (!hit || hit.object === floorPick) return
        const start = getEditVoxel(hit, W, H, D, false)
        selectionDrag = { start, end: start }
        store.setSelection3DBox(start, start)
        controls.enabled = false
        renderer.domElement.setPointerCapture(e.pointerId)
        if (ghostRef.current) ghostRef.current.visible = false
        hideBrushPreview()
        faceMesh.visible = false
        setCursor('crosshair')
        return
      }

      if (shapeDrag?.editing) {
        const dragHandle = getShapeHandle(e.clientX, e.clientY)
        if (!dragHandle) return
        shapeDrag = { ...shapeDrag, dragHandle }
        controls.enabled = false
        renderer.domElement.setPointerCapture(e.pointerId)
        setCursor('grabbing')
        return
      }

      if (ALL_SHAPE_TOOLS_3D.has(activeTool)) {
        const lockedTarget = getLockedPlaneTarget(e.clientX, e.clientY, store)
        if (isLockedPlaneActive(store) && !lockedTarget) return
        const hit = lockedTarget ? null : getRaycastHit(e.clientX, e.clientY)
        if (!lockedTarget && !hit) return
        const normal = lockedTarget?.normal ?? getHitWorldNormal(hit)
        const start = lockedTarget?.voxel ?? getEditVoxel(hit, W, H, D, true)
        const axis = lockedTarget?.axis ?? dominantAxis(normal)
        const plane = lockedTarget?.plane ?? new THREE.Plane().setFromNormalAndCoplanarPoint(
          normal,
          voxelCenterWorld(start.x, start.y, start.z, W, H, D),
        )
        const filled = activeTool !== 'line' && store.shapeMode === 'fill'
        const thickness = store.shapeThickness
        const primitiveDepth = store.primitiveDepth
        let direction = Math.sign(normal[axis]) || 1
        if (VOLUME_PRIMITIVE_TOOLS_3D.has(activeTool) && activeTool !== 'sphere3d') {
          const axisSize = axis === 'x' ? W : axis === 'y' ? H : D
          const coordinate = start[axis]
          const preferredRoom = direction > 0 ? axisSize - 1 - coordinate : coordinate
          const oppositeRoom = direction > 0 ? coordinate : axisSize - 1 - coordinate
          if (preferredRoom < primitiveDepth - 1 && oppositeRoom > preferredRoom) direction *= -1
        }
        const nextDrag = {
          tool: activeTool, start, end: start, axis, plane,
          locked: Boolean(lockedTarget), filled, thickness, primitiveDepth, direction,
        }
        const voxels = computeShapeDragVoxels(nextDrag, W, H, D)
        shapeDrag = { ...nextDrag, voxels }
        controls.enabled = false
        isPainting = false
        renderer.domElement.setPointerCapture(e.pointerId)
        if (ghostRef.current) ghostRef.current.visible = false
        faceMesh.visible = false
        updateShapePreview(voxels, W, H, D)
        setCursor('crosshair')
        return
      }

      const stableStroke = ['pencil', 'eraser', 'material', 'blend'].includes(activeTool)
      const clickOnly = activeTool === 'fill' || activeTool === 'eyedropper'
      // Disable all controls during active paint stroke to avoid interference
      controls.enabled = false
      isPainting = !clickOnly
      lastPaintKey = null
      lastPointerPoint = { x: e.clientX, y: e.clientY }
      strokePaintedKeys = new Set()
      if (!clickOnly) renderer.domElement.setPointerCapture(e.pointerId)
      setCursor('crosshair')
      if (activeTool !== 'eyedropper') useStore.getState().pushUndo()
      if (stableStroke) paintStableStroke(null, lastPointerPoint)
      else paintAtIfNew(e.clientX, e.clientY)
      updateGhost(e.clientX, e.clientY)
      if (clickOnly) {
        lastPaintKey = null
        lastPointerPoint = null
        syncControls()
      }
    }

    const onPointerMove = (e) => {
      if (isFlyMode) {
        if (document.pointerLockElement === renderer.domElement) {
          const movementX = e.movementX || 0
          const movementY = e.movementY || 0
          flyYaw   -= movementX * 0.0022
          flyPitch -= movementY * 0.0022
          flyPitch = Math.max(-1.55, Math.min(1.55, flyPitch))
          camera.rotation.order = 'YXZ'
          camera.rotation.set(flyPitch, flyYaw, 0)
        } else {
          lastMousePos = { x: e.clientX, y: e.clientY }
          if ((isRightDragLooking || (e.buttons & 2)) && lastDragPos) {
            const dx = e.clientX - lastDragPos.x
            const dy = e.clientY - lastDragPos.y
            lastDragPos = { x: e.clientX, y: e.clientY }
            flyYaw   -= dx * 0.003
            flyPitch -= dy * 0.003
            flyPitch = Math.max(-1.55, Math.min(1.55, flyPitch))
            camera.rotation.order = 'YXZ'
            camera.rotation.set(flyPitch, flyYaw, 0)
          } else if (e.buttons & 2) {
            lastDragPos = { x: e.clientX, y: e.clientY }
          }
        }
        updateGhost(e.clientX, e.clientY)
        if (isPainting) paintFlyVoxel(false)
        else if (isPaintingRight) paintFlyVoxel(true)
        return
      }

      if (!isEditMode()) {
        if (ghostRef.current) ghostRef.current.visible = false
        hideBrushPreview()
        faceMesh.visible = false
        return
      }
      if (selectionDrag && !spaceHeld) {
        const hit = getRaycastHit(e.clientX, e.clientY)
        if (hit && hit.object !== floorPick) {
          const { canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
          const end = getEditVoxel(hit, W, H, D, false)
          const key = `${end.x},${end.y},${end.z}`
          const previousKey = `${selectionDrag.end.x},${selectionDrag.end.y},${selectionDrag.end.z}`
          if (key !== previousKey) {
            selectionDrag = { ...selectionDrag, end }
            useStore.getState().setSelection3DBox(selectionDrag.start, end)
          }
        }
        return
      }
      if (shapeDrag && !spaceHeld) {
        if (ghostRef.current) ghostRef.current.visible = false
        hideBrushPreview()
        faceMesh.visible = false
        if (!shapeDrag.editing) {
          updateShapeDrag(e.clientX, e.clientY)
        } else if (shapeDrag.dragHandle) {
          updateShapeDrag(e.clientX, e.clientY, shapeDrag.dragHandle)
        } else {
          setCursor(getShapeHandle(e.clientX, e.clientY) ? 'grab' : 'crosshair')
        }
        return
      }
      if (isPainting && !spaceHeld) {
        const currentPoint = { x: e.clientX, y: e.clientY }
        if (['pencil', 'eraser', 'material', 'blend'].includes(useStore.getState().activeTool)) {
          paintStableStroke(lastPointerPoint, currentPoint)
        } else {
          paintAtIfNew(e.clientX, e.clientY)
        }
        lastPointerPoint = currentPoint
        updateGhost(e.clientX, e.clientY)
      } else {
        updateGhost(e.clientX, e.clientY)
      }
    }

    const onPointerUp = (e) => {
      if (isFlyMode) {
        if (e.button === 0) isPainting = false
        if (e.button === 2) isPaintingRight = false
        if (e.button === 1) isRightDragLooking = false
        lastDragPos = null
        strokePaintedKeys = new Set()
        lastPaintKey = null
        return
      }

      if (selectionDrag) {
        selectionDrag = null
        syncControls()
        try { renderer.domElement.releasePointerCapture(e.pointerId) } catch (_) {}
        setCursor('crosshair')
        return
      }

      if (shapeDrag) {
        const { canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
        if (!shapeDrag.editing) {
          updateShapeDrag(e.clientX, e.clientY)
          shapeDrag = { ...shapeDrag, editing: true, dragHandle: null }
          updateShapeHandles(W, H, D)
          setIsShapeEditing(true)
        } else if (shapeDrag.dragHandle) {
          updateShapeDrag(e.clientX, e.clientY, shapeDrag.dragHandle)
          shapeDrag = { ...shapeDrag, dragHandle: null }
        }
        syncControls()
        try { renderer.domElement.releasePointerCapture(e.pointerId) } catch (_) {}
        setCursor('grab')
        return
      }
      if (!isPainting) return
      isPainting = false
      lastPaintKey = null
      lastPointerPoint = null
      strokePaintedKeys = new Set()
      syncControls()
      try { renderer.domElement.releasePointerCapture(e.pointerId) } catch (_) {}
      setCursor(spaceHeld ? 'grab' : isEditMode() ? 'crosshair' : 'default')
    }

    const onPointerLeave = () => {
      if (ghostRef.current) ghostRef.current.visible = false
      hideBrushPreview()
      faceMesh.visible = false
    }

    // Set initial cursor when entering edit mode
    syncControls()
    if (isEditMode() || isFlyMode) setCursor('crosshair')
    updateDrawingPlane()
    updateSelectionPreview()

    const onPointerLockChange = () => {
      const locked = document.pointerLockElement === renderer.domElement
      setIsPointerLocked(locked)
      if (!locked) {
        isPainting = false
        isPaintingRight = false
        isRightDragLooking = false
        setCursor(isFlyMode ? 'crosshair' : isEditMode() ? 'crosshair' : 'default')
      }
    }
    document.addEventListener('pointerlockchange', onPointerLockChange)

    const onContextMenu = (e) => {
      if (isFlyMode) e.preventDefault()
    }
    renderer.domElement.addEventListener('contextmenu', onContextMenu)

    const onWindowBlur = () => {
      Object.keys(flyKeys).forEach(k => { flyKeys[k] = false })
      isPainting = false
      isPaintingRight = false
      isRightDragLooking = false
      lastDragPos = null
    }
    window.addEventListener('blur', onWindowBlur)

    const unsubscribeDrawingPlane = useStore.subscribe((state, previous) => {
      if (state.flyMode !== isFlyMode) {
        isFlyMode = Boolean(state.flyMode)
        if (isFlyMode) {
          initFlyOrientation()
          syncControls()
          setCursor('crosshair')
          try {
            renderer.domElement.requestPointerLock()
          } catch (_) {}
        } else {
          exitFlyMode()
        }
      }
      if (
        shapeDrag?.editing
        && (state.activeTool !== previous.activeTool || state.viewMode !== previous.viewMode)
      ) {
        finishShapeDrag(false)
      } else if (
        shapeDrag?.editing
        && (
          state.shapeMode !== previous.shapeMode
          || state.shapeThickness !== previous.shapeThickness
          || state.primitiveDepth !== previous.primitiveDepth
        )
      ) {
        const { canvasWidth: W, canvasHeight: H, depthDimension: D } = state
        const filled = shapeDrag.tool !== 'line' && state.shapeMode === 'fill'
        const thickness = state.shapeThickness
        const nextDrag = { ...shapeDrag, filled, thickness, primitiveDepth: state.primitiveDepth }
        const voxels = computeShapeDragVoxels(nextDrag, W, H, D)
        shapeDrag = { ...nextDrag, voxels }
        updateShapePreview(voxels, W, H, D)
        updateShapeHandles(W, H, D)
      }
      if (
        state.viewMode !== previous.viewMode
        || state.activeTool !== previous.activeTool
        || state.planeLock !== previous.planeLock
        || state.planeAxis !== previous.planeAxis
        || state.planeDepth !== previous.planeDepth
        || state.canvasWidth !== previous.canvasWidth
        || state.canvasHeight !== previous.canvasHeight
        || state.depthDimension !== previous.depthDimension
      ) {
        updateDrawingPlane(state)
      }
      if (
        state.selection3D !== previous.selection3D
        || state.activeTool !== previous.activeTool
        || state.viewMode !== previous.viewMode
        || state.canvasWidth !== previous.canvasWidth
        || state.canvasHeight !== previous.canvasHeight
        || state.depthDimension !== previous.depthDimension
      ) updateSelectionPreview(state)
    })

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    renderer.domElement.addEventListener('pointermove', onPointerMove)
    renderer.domElement.addEventListener('pointerup', onPointerUp)
    renderer.domElement.addEventListener('pointerleave', onPointerLeave)

    // ── Render loop ───────────────────────────────────────────────────
    function updateFlyMovement(dt) {
      if (!isFlyMode) return

      const forward = new THREE.Vector3()
      camera.getWorldDirection(forward)

      const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize()

      const wishDir = new THREE.Vector3()
      if (flyKeys.forward)  wishDir.add(forward)
      if (flyKeys.backward) wishDir.sub(forward)
      if (flyKeys.right)    wishDir.add(right)
      if (flyKeys.left)     wishDir.sub(right)
      if (flyKeys.up)       wishDir.y += 1
      if (flyKeys.down)     wishDir.y -= 1

      if (wishDir.lengthSq() > 0) wishDir.normalize()

      const speed = flyKeys.boost ? 9.0 : 4.0
      const targetVel = wishDir.multiplyScalar(speed)

      flyVelocity.lerp(targetVel, 1 - Math.exp(-18 * dt))
      camera.position.addScaledVector(flyVelocity, dt)

      if (isPainting) {
        paintFlyVoxel(false)
      } else if (isPaintingRight) {
        paintFlyVoxel(true)
      }

      updateGhost()
    }

    let running = true
    lastFrameTime = performance.now()
    function animate() {
      if (!running) return
      frameRef.current = requestAnimationFrame(animate)

      const now = performance.now()
      const dt = Math.min((now - lastFrameTime) / 1000, 0.1)
      lastFrameTime = now

      if (isFlyMode) {
        updateFlyMovement(dt)
      } else {
        controls.update()
      }

      composer.render()
    }
    animate()

    // ── Resize ────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h)
      composer.setSize(w, h)   // keep composer in sync with renderer
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    })
    ro.observe(container)

    return () => {
      running = false
      shapeActionRef.current = null
      unsubscribeDrawingPlane()
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
      document.removeEventListener('pointerlockchange', onPointerLockChange)
      renderer.domElement.removeEventListener('contextmenu', onContextMenu)
      window.removeEventListener('blur', onWindowBlur)
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
      brushPreviewMat.dispose()
      faceGeo.dispose()
      faceMat.dispose()
      faceEdgeGeo.dispose()
      faceEdgeMat.dispose()
      drawingPlaneGeo.dispose()
      drawingPlaneMat.dispose()
      drawingPlaneEdgeGeo.dispose()
      drawingPlaneEdgeMat.dispose()
      clearShapePreview()
      shapePreviewMat.dispose()
      shapeHandleGeo.dispose()
      shapeStartHandleMat.dispose()
      shapeEndHandleMat.dispose()
      clearSelectionPreview()
      selectionPreviewMat.dispose()
      floorGeo.dispose()
      floorMat.dispose()
      composer.dispose()
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

  // ── Incremental chunk mesh rebuild ────────────────────────────────────
  const rebuild = useCallback(() => {
    if (!sceneRef.current) return
    const { layers, canvasWidth, canvasHeight, depthDimension } = useStore.getState()
    const composited  = getCompositedVoxels(layers, canvasWidth, canvasHeight, depthDimension)
    const voxelMats   = getCompositedMaterials(layers)

    if (!chunkedMeshRef.current) {
      const chunkedMesh = createChunkedVoxelMesh()
      chunkedMeshRef.current = chunkedMesh
      meshGroupRef.current = chunkedMesh.group
      disposeGroupRef.current = chunkedMesh.dispose
      sceneRef.current.add(chunkedMesh.group)
    }
    chunkedMeshRef.current.update(
      composited,
      canvasWidth,
      canvasHeight,
      depthDimension,
      {},
      voxelMats,
    )
  }, [])

  useEffect(() => {
    rebuild()
    const unsub = useStore.subscribe((state, prevState) => {
      if (
        state.layers !== prevState.layers
        || state.canvasWidth !== prevState.canvasWidth
        || state.canvasHeight !== prevState.canvasHeight
        || state.depthDimension !== prevState.depthDimension
      ) {
        clearTimeout(rebuildTimerRef.current)
        rebuildTimerRef.current = setTimeout(rebuild, 80)
      }
    })
    return () => {
      unsub()
      clearTimeout(rebuildTimerRef.current)
      if (meshGroupRef.current) sceneRef.current?.remove(meshGroupRef.current)
      disposeGroupRef.current?.()
      chunkedMeshRef.current = null
      meshGroupRef.current = null
      disposeGroupRef.current = null
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

  return { exportPng, isShapeEditing, confirmShape, cancelShape, isPointerLocked, requestPointerLock, exitPointerLock }
}
