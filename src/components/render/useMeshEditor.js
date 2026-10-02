import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { cloneGroups, buildTopology, vertsInRadius, setVertices, smoothBrush, inflateBrush, paintFaces, eraseFaces, countTriangles } from '../../lib/lowpoly/edit.js'
import { refreshWireframe } from '../../lib/meshBuilderLowPoly.js'

const MAX_HISTORY = 40

/**
 * Mouse editing of the low poly mesh. Pointer events are caught in the capture phase so a stroke on the
 * model takes over from OrbitControls, while a click on empty space (or a right/middle drag) still orbits.
 *
 * @param resultRef  ref to the current { groups, shading, stats } (edited in place)
 * @param groupRef   ref to the THREE.Group currently shown
 * @param rebuildMesh()  re-creates the THREE group from resultRef (needed when triangle count changes)
 * @param onEdited()     called after each finished edit / undo / redo
 */
export function useMeshEditor({ containerRef, getContext, resultRef, groupRef, tool, brush, enabled, rebuildMesh, onEdited }) {
  const toolRef = useRef(tool);       toolRef.current = tool
  const brushRef = useRef(brush);     brushRef.current = brush
  const enabledRef = useRef(enabled); enabledRef.current = enabled
  const rebuildRef = useRef(rebuildMesh); rebuildRef.current = rebuildMesh
  const editedRef = useRef(onEdited); editedRef.current = onEdited

  const topoRef = useRef(null)
  const undoRef = useRef([])
  const redoRef = useRef([])
  const [, setTick] = useState(0)

  const invalidate = useCallback(() => { topoRef.current = null }, [])

  const snapshot = () => {
    const r = resultRef.current
    return { groups: cloneGroups(r.groups), shading: r.shading }
  }

  /** Remember the current mesh so the next change can be undone. */
  const pushHistory = useCallback(() => {
    if (!resultRef.current) return
    undoRef.current.push(snapshot())
    if (undoRef.current.length > MAX_HISTORY) undoRef.current.shift()
    redoRef.current = []
    setTick(t => t + 1)
  }, [])

  const restore = useCallback((snap) => {
    resultRef.current = { ...resultRef.current, groups: snap.groups, shading: snap.shading }
    invalidate()
    rebuildRef.current()
    editedRef.current()
    setTick(t => t + 1)
  }, [invalidate])

  const undo = useCallback(() => {
    const snap = undoRef.current.pop()
    if (!snap || !resultRef.current) return
    redoRef.current.push(snapshot())
    restore(snap)
  }, [restore])

  const redo = useCallback(() => {
    const snap = redoRef.current.pop()
    if (!snap || !resultRef.current) return
    undoRef.current.push(snapshot())
    restore(snap)
  }, [restore])

  useEffect(() => {
    const container = containerRef.current
    const { scene, camera, controls, renderer } = getContext()
    if (!container || !renderer) return
    const dom = renderer.domElement

    const raycaster = new THREE.Raycaster()
    const ndc = new THREE.Vector2()
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.95, 1, 64),
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, depthTest: false, transparent: true, opacity: 0.9, fog: false }),
    )
    ring.renderOrder = 999
    ring.visible = false
    scene.add(ring)

    const getTopo = () => {
      if (!topoRef.current) {
        topoRef.current = buildTopology(resultRef.current.groups)
        topoRef.current.shading = resultRef.current.shading
      }
      return topoRef.current
    }

    const setRay = (e) => {
      const rect = dom.getBoundingClientRect()
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1)
      raycaster.setFromCamera(ndc, camera)
    }

    const pick = (e) => {
      if (!groupRef.current || !resultRef.current) return null
      setRay(e)
      const meshes = groupRef.current.children.filter(o => o.isMesh)
      const h = raycaster.intersectObjects(meshes, false)[0]
      if (!h) return null
      return {
        group: h.object.userData.groupIndex, tri: h.faceIndex,
        point: h.point.clone(), normal: h.face.normal.clone(),
      }
    }

    /** Push edited arrays to the GPU for the touched groups. */
    const commit = (touched) => {
      for (const mesh of groupRef.current?.children ?? []) {
        if (!mesh.isMesh || !touched.has(mesh.userData.groupIndex)) continue
        const g = mesh.geometry
        for (const name of ['position', 'normal', 'color']) g.getAttribute(name).needsUpdate = true
        g.computeBoundingSphere(); g.computeBoundingBox()
        const lines = mesh.children.find(c => c.name === 'wireframe')
        if (lines?.visible) refreshWireframe(mesh)
      }
    }

    let stroke = null

    const moveRing = (hit) => {
      if (!hit || toolRef.current === 'orbit' || !enabledRef.current) { ring.visible = false; return }
      ring.visible = true
      ring.position.copy(hit.point).addScaledVector(hit.normal, 0.003)
      ring.lookAt(hit.point.clone().add(hit.normal))
      ring.scale.setScalar(brushRef.current.radius)
    }

    const apply = (hit, e) => {
      const b = brushRef.current, t = toolRef.current
      const r = resultRef.current
      if (t !== 'move' && !stroke.changed) { pushHistory(); stroke.changed = true }
      if (t === 'smooth') {
        commit(smoothBrush(getTopo(), hit.point, b.radius, b.strength * 0.4))
      } else if (t === 'inflate') {
        commit(inflateBrush(getTopo(), hit.point, b.radius, b.strength * b.radius * 0.12 * (e.altKey ? -1 : 1)))
      } else if (t === 'paint') {
        commit(paintFaces(r.groups, hit, hit.point, b.radius, b.color))
      } else if (t === 'erase') {
        if (eraseFaces(r.groups, hit, hit.point, b.radius) > 0) { invalidate(); rebuildRef.current() }
      }
    }

    const onDown = (e) => {
      if (e.button !== 0 || !enabledRef.current || toolRef.current === 'orbit') return
      const hit = pick(e)
      if (!hit) return                       // empty space → let OrbitControls handle it
      controls.enabled = false
      dom.setPointerCapture?.(e.pointerId)
      stroke = { changed: false }
      if (toolRef.current === 'move') {
        const topo = getTopo()
        const { ids, weights } = vertsInRadius(topo, hit.point, brushRef.current.radius)
        const start = new Float32Array(ids.length * 3)
        ids.forEach((v, i) => start.set(topo.pos.subarray(v * 3, v * 3 + 3), i * 3))
        const normal = camera.getWorldDirection(new THREE.Vector3())
        Object.assign(stroke, { ids, weights, start, origin: hit.point, plane: new THREE.Plane().setFromNormalAndCoplanarPoint(normal, hit.point) })
      } else {
        apply(hit, e)
      }
      e.stopPropagation()
    }

    const onMove = (e) => {
      if (!stroke) { moveRing(enabledRef.current && !e.buttons ? pick(e) : null); return }
      if (toolRef.current === 'move') {
        setRay(e)
        const p = raycaster.ray.intersectPlane(stroke.plane, new THREE.Vector3())
        if (!p) return
        if (!stroke.changed) { pushHistory(); stroke.changed = true }
        const d = p.sub(stroke.origin)
        const coords = new Float32Array(stroke.start.length)
        stroke.ids.forEach((_, i) => {
          const w = stroke.weights[i]
          coords[i * 3]     = stroke.start[i * 3]     + d.x * w
          coords[i * 3 + 1] = stroke.start[i * 3 + 1] + d.y * w
          coords[i * 3 + 2] = stroke.start[i * 3 + 2] + d.z * w
        })
        commit(setVertices(getTopo(), stroke.ids, coords))
      } else {
        const hit = pick(e)
        moveRing(hit)
        if (hit) apply(hit, e)
      }
    }

    const onUp = (e) => {
      if (!stroke) return
      const changed = stroke.changed
      stroke = null
      controls.enabled = true
      dom.releasePointerCapture?.(e.pointerId)
      if (changed) editedRef.current()
    }

    const onLeave = () => { ring.visible = false }

    container.addEventListener('pointerdown', onDown, { capture: true })
    container.addEventListener('pointermove', onMove)
    container.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      container.removeEventListener('pointerdown', onDown, { capture: true })
      container.removeEventListener('pointermove', onMove)
      container.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      controls.enabled = true
      scene.remove(ring)
      ring.geometry.dispose(); ring.material.dispose()
    }
  }, [])

  return {
    undo, redo, pushHistory, invalidate,
    canUndo: undoRef.current.length > 0,
    canRedo: redoRef.current.length > 0,
    clearHistory: () => { undoRef.current = []; redoRef.current = []; setTick(t => t + 1) },
    triangleCount: () => countTriangles(resultRef.current?.groups ?? []),
  }
}
