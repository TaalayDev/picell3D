import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { TransformControls } from 'three/addons/controls/TransformControls.js'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

function safeMerge(geometries) {
  const nonIndexed = geometries.map(g => (g.index ? g.toNonIndexed() : g))
  return mergeGeometries(nonIndexed)
}

function geometryFor(object) {
  const [w, h, d] = object.size ?? [1, 1, 1]

  switch (object.type) {
    // ── Modular Walls (Grid unit 2.0 × 2.0 × 0.2) ──────────────────────────────
    case 'wall':
    case 'wall_solid': {
      return new THREE.BoxGeometry(w, h, d)
    }

    case 'wall_door': {
      // Standard doorway opening (width 1.0, height 1.6 from bottom)
      const doorW = w * 0.5
      const doorH = h * 0.8
      const sideW = (w - doorW) / 2
      const topH = h - doorH

      const left = new THREE.BoxGeometry(sideW, h, d)
      left.translate(-w / 2 + sideW / 2, 0, 0)

      const right = new THREE.BoxGeometry(sideW, h, d)
      right.translate(w / 2 - sideW / 2, 0, 0)

      const top = new THREE.BoxGeometry(doorW, topH, d)
      top.translate(0, h / 2 - topH / 2, 0)

      return safeMerge([left, right, top])
    }

    case 'wall_window': {
      // Standard window cutout (width 0.8, height 1.0, centered)
      const winW = w * 0.4
      const winH = h * 0.5
      const sideW = (w - winW) / 2
      const subH = (h - winH) / 2

      const left = new THREE.BoxGeometry(sideW, h, d)
      left.translate(-w / 2 + sideW / 2, 0, 0)

      const right = new THREE.BoxGeometry(sideW, h, d)
      right.translate(w / 2 - sideW / 2, 0, 0)

      const bot = new THREE.BoxGeometry(winW, subH, d)
      bot.translate(0, -h / 2 + subH / 2, 0)

      const top = new THREE.BoxGeometry(winW, subH, d)
      top.translate(0, h / 2 - subH / 2, 0)

      return safeMerge([left, right, bot, top])
    }

    case 'wall_double_window': {
      const winW = w * 0.28
      const winH = h * 0.45
      const colW = (w - winW * 2) / 3
      const subH = (h - winH) / 2

      const p1 = new THREE.BoxGeometry(colW, h, d)
      p1.translate(-w / 2 + colW / 2, 0, 0)

      const p2 = new THREE.BoxGeometry(colW, h, d)
      p2.translate(0, 0, 0)

      const p3 = new THREE.BoxGeometry(colW, h, d)
      p3.translate(w / 2 - colW / 2, 0, 0)

      const b1 = new THREE.BoxGeometry(winW, subH, d)
      b1.translate(-colW / 2 - winW / 2, -h / 2 + subH / 2, 0)

      const t1 = new THREE.BoxGeometry(winW, subH, d)
      t1.translate(-colW / 2 - winW / 2, h / 2 - subH / 2, 0)

      const b2 = new THREE.BoxGeometry(winW, subH, d)
      b2.translate(colW / 2 + winW / 2, -h / 2 + subH / 2, 0)

      const t2 = new THREE.BoxGeometry(winW, subH, d)
      t2.translate(colW / 2 + winW / 2, h / 2 - subH / 2, 0)

      return safeMerge([p1, p2, p3, b1, t1, b2, t2])
    }

    case 'wall_arch': {
      const archW = w * 0.6
      const archH = h * 0.75
      const sideW = (w - archW) / 2
      const topH = h - archH

      const left = new THREE.BoxGeometry(sideW, h, d)
      left.translate(-w / 2 + sideW / 2, 0, 0)

      const right = new THREE.BoxGeometry(sideW, h, d)
      right.translate(w / 2 - sideW / 2, 0, 0)

      const top = new THREE.BoxGeometry(archW, topH, d)
      top.translate(0, h / 2 - topH / 2, 0)

      return safeMerge([left, right, top])
    }

    case 'wall_half': {
      return new THREE.BoxGeometry(w, h, d)
    }

    case 'wall_low': {
      return new THREE.BoxGeometry(w, h, d)
    }

    case 'gable':
    case 'wall_gable': {
      const shape = new THREE.Shape()
      shape.moveTo(-w / 2, -h / 2)
      shape.lineTo(w / 2, -h / 2)
      shape.lineTo(0, h / 2)
      shape.closePath()
      const g = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false })
      g.translate(0, 0, -d / 2)
      return g
    }

    // ── Doors & Windows (Modular Inserts) ──────────────────────────────────────
    case 'door':
    case 'door_panel': {
      const fT = Math.min(w, h) * 0.07
      const fL = new THREE.BoxGeometry(fT, h, d)
      fL.translate(-w / 2 + fT / 2, 0, 0)

      const fR = new THREE.BoxGeometry(fT, h, d)
      fR.translate(w / 2 - fT / 2, 0, 0)

      const fT_ = new THREE.BoxGeometry(w - fT * 2, fT, d)
      fT_.translate(0, h / 2 - fT / 2, 0)

      const slab = new THREE.BoxGeometry(w - fT * 2, h - fT, d * 0.7)
      slab.translate(0, -fT / 2, 0)

      const p1 = new THREE.BoxGeometry((w - fT * 2) * 0.75, (h - fT) * 0.38, d * 0.2)
      p1.translate(0, h * 0.16, d * 0.35)

      const p2 = new THREE.BoxGeometry((w - fT * 2) * 0.75, (h - fT) * 0.38, d * 0.2)
      p2.translate(0, -h * 0.26, d * 0.35)

      const knob = new THREE.BoxGeometry(w * 0.08, w * 0.08, d * 0.4)
      knob.translate((w - fT * 2) * 0.35, -h * 0.04, d * 0.3)

      return safeMerge([fL, fR, fT_, slab, p1, p2, knob])
    }

    case 'door_arch': {
      const fT = Math.min(w, h) * 0.07
      const slab = new THREE.BoxGeometry(w - fT * 2, h - fT, d * 0.7)
      slab.translate(0, 0, 0)

      const handle = new THREE.BoxGeometry(w * 0.08, h * 0.18, d * 0.4)
      handle.translate(w * 0.32, -h * 0.05, d * 0.25)

      return safeMerge([slab, handle])
    }

    case 'door_double': {
      const fT = Math.min(w, h) * 0.06
      const leafW = (w - fT * 2) / 2

      const dL = new THREE.BoxGeometry(leafW * 0.96, h - fT, d * 0.7)
      dL.translate(-leafW / 2, 0, 0)

      const dR = new THREE.BoxGeometry(leafW * 0.96, h - fT, d * 0.7)
      dR.translate(leafW / 2, 0, 0)

      const hL = new THREE.BoxGeometry(w * 0.06, h * 0.15, d * 0.35)
      hL.translate(-leafW * 0.12, 0, d * 0.3)

      const hR = new THREE.BoxGeometry(w * 0.06, h * 0.15, d * 0.35)
      hR.translate(leafW * 0.12, 0, d * 0.3)

      return safeMerge([dL, dR, hL, hR])
    }

    case 'door_glass': {
      const fT = Math.min(w, h) * 0.09
      const fL = new THREE.BoxGeometry(fT, h, d)
      fL.translate(-w / 2 + fT / 2, 0, 0)

      const fR = new THREE.BoxGeometry(fT, h, d)
      fR.translate(w / 2 - fT / 2, 0, 0)

      const fTop = new THREE.BoxGeometry(w, fT, d)
      fTop.translate(0, h / 2 - fT / 2, 0)

      const fBot = new THREE.BoxGeometry(w, fT * 1.5, d)
      fBot.translate(0, -h / 2 + fT * 0.75, 0)

      const glass = new THREE.BoxGeometry(w - fT * 2, h - fT * 2.5, d * 0.3)
      glass.translate(0, -fT * 0.25, 0)

      const hdl = new THREE.BoxGeometry(w * 0.06, h * 0.3, d * 0.4)
      hdl.translate(w * 0.32, 0, d * 0.2)

      return safeMerge([fL, fR, fTop, fBot, glass, hdl])
    }

    case 'window':
    case 'window_square': {
      const fT = Math.min(w, h) * 0.09
      const fL = new THREE.BoxGeometry(fT, h, d)
      fL.translate(-w / 2 + fT / 2, 0, 0)

      const fR = new THREE.BoxGeometry(fT, h, d)
      fR.translate(w / 2 - fT / 2, 0, 0)

      const fTop = new THREE.BoxGeometry(w - fT * 2, fT, d)
      fTop.translate(0, h / 2 - fT / 2, 0)

      const fBot = new THREE.BoxGeometry(w - fT * 2, fT, d)
      fBot.translate(0, -h / 2 + fT / 2, 0)

      const sill = new THREE.BoxGeometry(w * 1.15, fT * 0.7, d * 1.4)
      sill.translate(0, -h / 2 - fT * 0.35, d * 0.18)

      const mVert = new THREE.BoxGeometry(fT * 0.5, h - fT * 2, d * 0.6)
      const mHoriz = new THREE.BoxGeometry(w - fT * 2, fT * 0.5, d * 0.6)
      const glass = new THREE.BoxGeometry(w - fT * 2, h - fT * 2, d * 0.25)

      return safeMerge([fL, fR, fTop, fBot, sill, mVert, mHoriz, glass])
    }

    case 'window_arch': {
      const fT = Math.min(w, h) * 0.09
      const frame = new THREE.BoxGeometry(w, h, d)
      const glass = new THREE.BoxGeometry(w - fT * 2, h - fT * 2, d * 0.3)
      const sill = new THREE.BoxGeometry(w * 1.15, fT * 0.7, d * 1.4)
      sill.translate(0, -h / 2 - fT * 0.35, d * 0.18)
      return safeMerge([frame, glass, sill])
    }

    case 'window_shutters': {
      const winW = w * 0.65
      const shutW = (w - winW) / 2
      const centerWin = new THREE.BoxGeometry(winW, h, d)

      const shutL = new THREE.BoxGeometry(shutW * 0.9, h * 0.92, d * 0.6)
      shutL.translate(-winW / 2 - shutW / 2, 0, 0)

      const shutR = new THREE.BoxGeometry(shutW * 0.9, h * 0.92, d * 0.6)
      shutR.translate(winW / 2 + shutW / 2, 0, 0)

      return safeMerge([centerWin, shutL, shutR])
    }

    case 'window_round': {
      const r = Math.min(w, h) / 2
      const frame = new THREE.CylinderGeometry(r, r, d, 24)
      frame.rotateX(Math.PI / 2)
      const glass = new THREE.CylinderGeometry(r * 0.78, r * 0.78, d * 0.4, 24)
      glass.rotateX(Math.PI / 2)
      return safeMerge([frame, glass])
    }

    // ── Roofs & Floors (Modular 2.0 Tiles) ─────────────────────────────────────
    case 'floor':
    case 'floor_tile': {
      return new THREE.BoxGeometry(w, h, d)
    }

    case 'roof':
    case 'roof_straight': {
      const shape = new THREE.Shape()
      shape.moveTo(-w / 2, -h / 2)
      shape.lineTo(w / 2, -h / 2)
      shape.lineTo(0, h / 2)
      shape.closePath()
      const main = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false })
      main.translate(0, 0, -d / 2)

      const ridge = new THREE.BoxGeometry(w * 0.1, h * 0.08, d * 1.01)
      ridge.translate(0, h / 2 + h * 0.04, 0)

      return safeMerge([main, ridge])
    }

    case 'roof_corner': {
      const pyramid = new THREE.ConeGeometry(Math.max(w, d) * 0.72, h, 4)
      pyramid.rotateY(Math.PI / 4)
      return pyramid
    }

    case 'roof_flat': {
      const slab = new THREE.BoxGeometry(w, h * 0.6, d)
      slab.translate(0, -h * 0.2, 0)

      const rimL = new THREE.BoxGeometry(w * 0.08, h * 0.6, d)
      rimL.translate(-w / 2 + w * 0.04, h * 0.2, 0)

      const rimR = new THREE.BoxGeometry(w * 0.08, h * 0.6, d)
      rimR.translate(w / 2 - w * 0.04, h * 0.2, 0)

      const rimF = new THREE.BoxGeometry(w, h * 0.6, d * 0.08)
      rimF.translate(0, h * 0.2, d / 2 - d * 0.04)

      const rimB = new THREE.BoxGeometry(w, h * 0.6, d * 0.08)
      rimB.translate(0, h * 0.2, -d / 2 + d * 0.04)

      return safeMerge([slab, rimL, rimR, rimF, rimB])
    }

    case 'roof_gable_end': {
      const shape = new THREE.Shape()
      shape.moveTo(-w / 2, -h / 2)
      shape.lineTo(w / 2, -h / 2)
      shape.lineTo(0, h / 2)
      shape.closePath()
      const verge = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false })
      verge.translate(0, 0, -d / 2)
      return verge
    }

    // ── Structure & Details ───────────────────────────────────────────────────
    case 'column': {
      const r = Math.min(w, d) / 2
      const baseH = h * 0.08
      const capH = h * 0.08
      const shaftH = h - baseH - capH

      const base = new THREE.BoxGeometry(r * 2.2, baseH, r * 2.2)
      base.translate(0, -h / 2 + baseH / 2, 0)

      const shaft = new THREE.BoxGeometry(r * 1.6, shaftH, r * 1.6)
      shaft.translate(0, -h / 2 + baseH + shaftH / 2, 0)

      const cap = new THREE.BoxGeometry(r * 2.2, capH, r * 2.2)
      cap.translate(0, h / 2 - capH / 2, 0)

      return safeMerge([base, shaft, cap])
    }

    case 'stairs': {
      const steps = 4
      const stepH = h / steps
      const stepD = d / steps
      const parts = []

      for (let i = 0; i < steps; i++) {
        const curH = (i + 1) * stepH
        const b = new THREE.BoxGeometry(w, curH, stepD)
        b.translate(0, -h / 2 + curH / 2, d / 2 - (i + 0.5) * stepD)
        parts.push(b)
      }

      return safeMerge(parts)
    }

    case 'railing':
    case 'fence': {
      const railH = h * 0.1
      const railD = d
      const topR = new THREE.BoxGeometry(w, railH, railD)
      topR.translate(0, h / 2 - railH / 2, 0)

      const botR = new THREE.BoxGeometry(w, railH, railD)
      botR.translate(0, -h / 2 + railH / 2, 0)

      const numP = 5
      const pW = w * 0.04
      const pH = h - railH * 2
      const sp = (w - pW) / (numP + 1)
      const pickets = []

      for (let i = 1; i <= numP; i++) {
        const p = new THREE.BoxGeometry(pW, pH, railD * 0.8)
        p.translate(-w / 2 + sp * i, 0, 0)
        pickets.push(p)
      }

      return safeMerge([topR, botR, ...pickets])
    }

    case 'chimney': {
      const shaftH = h * 0.85
      const crownH = h * 0.15

      const shaft = new THREE.BoxGeometry(w, shaftH, d)
      shaft.translate(0, -h / 2 + shaftH / 2, 0)

      const crown = new THREE.BoxGeometry(w * 1.2, crownH, d * 1.2)
      crown.translate(0, h / 2 - crownH / 2, 0)

      return safeMerge([shaft, crown])
    }

    // ── Basic Shapes ──────────────────────────────────────────────────────────
    case 'sphere': return new THREE.SphereGeometry(w / 2, 32, 20)
    case 'cylinder': return new THREE.CylinderGeometry(w / 2, d / 2, h, 28)
    case 'cone': return new THREE.ConeGeometry(w / 2, h, 28)
    case 'torus': return new THREE.TorusGeometry(w * 0.36, h * 0.32, 12, 32)
    case 'capsule': return new THREE.CapsuleGeometry(w / 2, Math.max(0.1, h - w), 8, 16)
    case 'wheel': return new THREE.CylinderGeometry(h / 2, h / 2, w, 28)
    case 'gem': return new THREE.OctahedronGeometry(w / 2, 0)

    default: return new THREE.BoxGeometry(w, h, d)
  }
}

function materialFor(object) {
  const isGlass = object.type.startsWith('window_') || object.type === 'window' || object.type === 'door_glass'

  return new THREE.MeshStandardMaterial({
    color: object.color ?? '#e2e4ea',
    roughness: isGlass ? 0.2 : 0.38,
    metalness: 0.04,
    transparent: isGlass,
    opacity: isGlass ? 0.72 : 1,
  })
}

export default function ExperimentViewport({ objects, selectedId, mode, snap = 0.5, onSelect, onAdd, onAddTemplate, onTransform }) {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const meshMapRef = useRef(new Map())
  const transformRef = useRef(null)
  const callbacksRef = useRef({ onSelect, onAdd, onAddTemplate, onTransform })
  callbacksRef.current = { onSelect, onAdd, onAddTemplate, onTransform }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#080b18')
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(9, 7, 11)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.enableDamping = true
    orbit.target.set(0, 1.25, 0)
    orbit.update()

    const transform = new TransformControls(camera, renderer.domElement)
    transform.setSize(0.82)
    if (snap > 0) {
      transform.setTranslationSnap(snap)
      transform.setRotationSnap(THREE.MathUtils.degToRad(15))
    }
    transform.addEventListener('dragging-changed', event => { orbit.enabled = !event.value })
    transform.addEventListener('objectChange', () => {
      const mesh = transform.object
      if (!mesh) return
      callbacksRef.current.onTransform(mesh.userData.objectId, {
        position: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z },
        rotation: {
          x: THREE.MathUtils.radToDeg(mesh.rotation.x),
          y: THREE.MathUtils.radToDeg(mesh.rotation.y),
          z: THREE.MathUtils.radToDeg(mesh.rotation.z),
        },
        scale: { x: mesh.scale.x, y: mesh.scale.y, z: mesh.scale.z },
      })
    })
    scene.add(transform.getHelper())
    transformRef.current = transform

    scene.add(new THREE.HemisphereLight(0xb9d9ff, 0x24152f, 2.2))
    const key = new THREE.DirectionalLight(0xffffff, 3.2)
    key.position.set(6, 9, 6)
    key.castShadow = true
    key.shadow.mapSize.width = 2048
    key.shadow.mapSize.height = 2048
    key.shadow.camera.near = 0.5
    key.shadow.camera.far = 30
    key.shadow.camera.left = -12
    key.shadow.camera.right = 12
    key.shadow.camera.top = 12
    key.shadow.camera.bottom = -12
    key.shadow.bias = -0.0005
    scene.add(key)

    const rim = new THREE.DirectionalLight(0xff3f9b, 2.2)
    rim.position.set(-6, 4, -5)
    scene.add(rim)

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(32, 32),
      new THREE.MeshStandardMaterial({ color: 0x11172b, roughness: 0.94, metalness: 0.03 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.035
    ground.receiveShadow = true
    scene.add(ground)

    const grid = new THREE.GridHelper(20, 40, 0x7455ff, 0x252c4d)
    grid.position.y = -0.02
    scene.add(grid)

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const setPointer = event => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
    }
    const onPointerDown = event => {
      if (transform.axis) return
      setPointer(event)
      const hit = raycaster.intersectObjects([...meshMapRef.current.values()], false)[0]
      callbacksRef.current.onSelect(hit?.object.userData.objectId ?? null)
    }
    const onDragOver = event => { event.preventDefault(); event.dataTransfer.dropEffect = 'copy' }
    const onDrop = event => {
      event.preventDefault()
      const type = event.dataTransfer.getData('application/picell-object')
      const templateId = event.dataTransfer.getData('application/picell-template')
      if (!type && !templateId) return
      setPointer(event)
      const point = new THREE.Vector3()
      if (!raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), point)) point.set(0, 0, 0)
      // Snap drop point to grid if snapping is enabled
      const finalX = snap > 0 ? Math.round(point.x / snap) * snap : point.x
      const finalZ = snap > 0 ? Math.round(point.z / snap) * snap : point.z
      if (templateId) callbacksRef.current.onAddTemplate?.(templateId, { x: finalX, y: 0, z: finalZ })
      else callbacksRef.current.onAdd(type, { x: finalX, y: 0, z: finalZ })
    }
    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    renderer.domElement.addEventListener('dragover', onDragOver)
    renderer.domElement.addEventListener('drop', onDrop)

    const resize = () => {
      const width = Math.max(1, container.clientWidth)
      const height = Math.max(1, container.clientHeight)
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()

    let frame
    const render = () => {
      orbit.update()
      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      renderer.domElement.removeEventListener('dragover', onDragOver)
      renderer.domElement.removeEventListener('drop', onDrop)
      transform.detach()
      transform.dispose()
      orbit.dispose()
      for (const mesh of meshMapRef.current.values()) {
        mesh.geometry.dispose(); mesh.material.dispose()
      }
      meshMapRef.current.clear()
      ground.geometry.dispose(); ground.material.dispose()
      renderer.dispose(); renderer.domElement.remove()
      sceneRef.current = null
    }
  }, [])

  useEffect(() => {
    const scene = sceneRef.current
    const transform = transformRef.current
    if (!scene || !transform) return
    const ids = new Set(objects.map(object => object.id))
    for (const [id, mesh] of meshMapRef.current) {
      if (ids.has(id)) continue
      if (transform.object === mesh) transform.detach()
      scene.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose(); meshMapRef.current.delete(id)
    }
    for (const object of objects) {
      let mesh = meshMapRef.current.get(object.id)
      if (!mesh) {
        mesh = new THREE.Mesh(geometryFor(object), materialFor(object))
        mesh.castShadow = true
        mesh.receiveShadow = true
        mesh.userData.objectId = object.id
        meshMapRef.current.set(object.id, mesh)
        scene.add(mesh)
      }
      if (!(transform.dragging && transform.object === mesh)) {
        mesh.position.set(object.position.x, object.position.y, object.position.z)
        mesh.rotation.set(...['x', 'y', 'z'].map(axis => THREE.MathUtils.degToRad(object.rotation[axis])))
        mesh.scale.set(object.scale.x, object.scale.y, object.scale.z)
      }
      mesh.material.color.set(object.color ?? '#e2e4ea')
    }
    const selectedMesh = meshMapRef.current.get(selectedId)
    if (selectedMesh) transform.attach(selectedMesh)
    else transform.detach()
  }, [objects, selectedId])

  useEffect(() => {
    transformRef.current?.setMode(mode)
  }, [mode])

  useEffect(() => {
    if (!transformRef.current) return
    if (snap > 0) {
      transformRef.current.setTranslationSnap(snap)
      transformRef.current.setRotationSnap(THREE.MathUtils.degToRad(15))
    } else {
      transformRef.current.setTranslationSnap(null)
      transformRef.current.setRotationSnap(null)
    }
  }, [snap])

  return <div ref={containerRef} className="absolute inset-0" />
}
