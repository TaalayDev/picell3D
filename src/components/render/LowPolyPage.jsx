import { useRef, useState, useCallback, useEffect } from 'react'
import { X, Image, Box, Download, ChevronRight, Triangle, Eye, Grid3X3, Loader2 } from 'lucide-react'
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js'
import { useStore, getCompositedVoxels, getCompositedMaterials } from '../../store/index.js'
import { useRenderScene, LIGHT_PRESETS } from './useRenderScene.js'
import { buildLowPolyGroup, refreshWireframe } from '../../lib/meshBuilderLowPoly.js'
import { DEFAULT_LOWPOLY_PARAMS, LOWPOLY_PRESETS } from '../../lib/lowpoly/index.js'
import { downloadGroupObjMtl } from '../../lib/exportObj.js'
import LowPolyPanel, { SectionLabel } from './LowPolyPanel.jsx'
import LowPolyTools from './LowPolyTools.jsx'
import { useMeshEditor } from './useMeshEditor.js'
import { useModalAccessibility } from '../../hooks/useModalAccessibility.js'

const DEFAULT_BRUSH = { radius: 0.2, strength: 0.5, color: '#e0a040' }

const PARAMS_KEY = 'picell3d-lowpoly-params'

function presetValues(key) {
  const { label, ...values } = LOWPOLY_PRESETS[key]
  return values
}

function loadParams() {
  try {
    const saved = JSON.parse(localStorage.getItem(PARAMS_KEY) || 'null')
    if (saved) {
      const params = { ...DEFAULT_LOWPOLY_PARAMS }
      for (const key of Object.keys(params)) if (key in saved) params[key] = saved[key]
      return params
    }
  } catch { /* ignore */ }
  return { ...DEFAULT_LOWPOLY_PARAMS, ...presetValues('faceted') }
}

function getInput() {
  const { layers, canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore.getState()
  return {
    voxels: getCompositedVoxels(layers, W, H, D),
    voxelMaterials: getCompositedMaterials(layers),
    W, H, D,
  }
}

function ActionBtn({ label, sub, onClick, icon: Icon = Download, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/5 disabled:opacity-40"
    >
      <Icon size={15} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{label}</div>
        {sub && <div className="text-xs opacity-50 truncate">{sub}</div>}
      </div>
      <ChevronRight size={12} className="flex-shrink-0 opacity-30" />
    </button>
  )
}

function ViewToggle({ Icon, label, active, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs transition-colors select-none"
      style={active
        ? { borderColor: 'var(--color-accent)', color: 'var(--color-accent)',
            background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }
        : { borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.4)' }}
    >
      <Icon size={13} /> {label}
    </button>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LowPolyPage({ onClose }) {
  const pageRef = useRef(null)
  const containerRef = useRef(null)
  const { rebuild: showVoxels, setMesh, applyPreset, exportPng, getContext } = useRenderScene(containerRef, { autoBuild: false })

  const [params, setParams]           = useState(loadParams)
  const [activePreset, setActivePreset] = useState(null)
  const [lighting, setLighting]       = useState('studio')
  const [wireframe, setWireframe]     = useState(false)
  const [showOriginal, setShowOriginal] = useState(false)
  const [stats, setStats]             = useState(null)
  const [busy, setBusy]               = useState(true)
  const [error, setError]             = useState(null)
  const [stale, setStale]             = useState(false)   // settings or voxels changed since the last generate
  const [tool, setTool]               = useState('orbit')
  const [brush, setBrush]             = useState(DEFAULT_BRUSH)
  useModalAccessibility(pageRef, onClose)

  const workerRef     = useRef(null)
  const requestIdRef  = useRef(0)
  const resultRef     = useRef(null)
  const groupRef      = useRef(null)
  const wireframeRef  = useRef(wireframe)
  const paramsRef     = useRef(params)
  paramsRef.current = params
  const originalRef   = useRef(showOriginal)
  const editorRef     = useRef(null)
  wireframeRef.current = wireframe
  originalRef.current  = showOriginal

  const applyWireframe = useCallback((group, on) => {
    group?.traverse(o => { if (o.name === 'wireframe') o.visible = on })
  }, [])

  /** Put the latest low poly result into the scene (unless the original is being shown). */
  const showLowPoly = useCallback(() => {
    const result = resultRef.current
    if (!result) return
    const { group, dispose } = buildLowPolyGroup(result, { wireframe: true })
    applyWireframe(group, wireframeRef.current)
    groupRef.current = group
    setMesh(group, dispose)
  }, [setMesh, applyWireframe])

  // ── Worker lifecycle ───────────────────────────────────────────────────────
  useEffect(() => {
    const worker = new Worker(new URL('../../lib/lowpoly/lowpoly.worker.js', import.meta.url), { type: 'module' })
    worker.onmessage = (e) => {
      const { id, result, error: err } = e.data
      if (id !== requestIdRef.current) return   // superseded by a newer request
      setBusy(false)
      if (err) { setError(err); return }
      setError(null)
      // Keep the previous mesh (with the user's edits) on the undo stack
      if (resultRef.current) editorRef.current?.pushHistory()
      resultRef.current = result
      editorRef.current?.invalidate()
      setStats(result.stats)
      if (!originalRef.current) showLowPoly()
    }
    worker.onerror = (e) => { setBusy(false); setError(e.message || 'Worker failed') }
    workerRef.current = worker
    requestIdRef.current++
    worker.postMessage({ id: requestIdRef.current, input: getInput(), params: paramsRef.current, mode: 'voxels' })   // start from the model exactly as drawn
    return () => worker.terminate()
  }, [showLowPoly])

  const generate = useCallback((mode = 'lowpoly') => {
    const worker = workerRef.current
    if (!worker) return
    const id = ++requestIdRef.current
    setBusy(true)
    setStale(false)
    worker.postMessage({ id, input: getInput(), params: paramsRef.current, mode })
  }, [])

  // Nothing is rebuilt automatically: setting changes only remember themselves…
  useEffect(() => {
    try { localStorage.setItem(PARAMS_KEY, JSON.stringify(params)) } catch { /* ignore */ }
  }, [params])

  // …and so do changes to the voxel model, so manual edits are never overwritten behind the user's back
  useEffect(() => {
    const unsub = useStore.subscribe((s, prev) => {
      if (s.layers !== prev.layers || s.canvasWidth !== prev.canvasWidth ||
          s.canvasHeight !== prev.canvasHeight || s.depthDimension !== prev.depthDimension) setStale(true)
    })
    return unsub
  }, [])

  const handleEdited = useCallback(() => {
    const r = resultRef.current
    if (!r) return
    const triangles = r.groups.reduce((n, g) => n + g.positions.length / 9, 0)
    setStats(s => s && { ...s, triangles })
  }, [])

  const editor = useMeshEditor({
    containerRef, getContext, resultRef, groupRef, tool, brush,
    enabled: !showOriginal, rebuildMesh: showLowPoly, onEdited: handleEdited,
  })
  editorRef.current = editor

  useEffect(() => {
    if (wireframe) groupRef.current?.children.forEach(m => m.isMesh && refreshWireframe(m))   // catch up with edits
    applyWireframe(groupRef.current, wireframe)
  }, [wireframe, applyWireframe])

  useEffect(() => {
    if (showOriginal) { groupRef.current = null; showVoxels() }
    else showLowPoly()
  }, [showOriginal, showVoxels, showLowPoly])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target instanceof Element && e.target.closest('input, textarea, select, button, a[href], [contenteditable="true"]')) return
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        // Mesh history, not the voxel editor's: keep the app-wide shortcut from also firing
        e.preventDefault(); e.stopImmediatePropagation()
        if (e.shiftKey) editorRef.current?.redo(); else editorRef.current?.undo()
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault(); e.stopImmediatePropagation(); editorRef.current?.redo()
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [])

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleParams = (p) => { setParams(p); setActivePreset(null) }
  const handlePreset = (key) => {
    setParams(p => ({ ...p, ...presetValues(key) }))
    setActivePreset(key)
  }
  const handleLighting = (key) => { setLighting(key); applyPreset(key) }

  const exportGroup = () => resultRef.current && buildLowPolyGroup(resultRef.current)

  const exportGlb = () => {
    const built = exportGroup()
    if (!built) return
    new GLTFExporter().parse(built.group, (glb) => {
      const url = URL.createObjectURL(new Blob([glb], { type: 'application/octet-stream' }))
      const a = document.createElement('a')
      a.href = url; a.download = 'model_lowpoly.glb'; a.click()
      URL.revokeObjectURL(url)
      built.dispose()
    }, (err) => { console.error('GLB export error:', err); built.dispose() }, { binary: true })
  }

  const exportObj = () => {
    const built = exportGroup()
    if (!built) return
    downloadGroupObjMtl(built.group, 'model_lowpoly')
    built.dispose()
  }

  const exportImage = () => {
    // Hide the wireframe overlay for the render, then restore it
    applyWireframe(groupRef.current, false)
    exportPng(2048)
    applyWireframe(groupRef.current, wireframeRef.current)
  }

  const { canvasWidth: W, canvasHeight: H, depthDimension: D } = useStore()
  const empty = stats && stats.triangles === 0

  return (
    <div
      ref={pageRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="low-poly-studio-title"
      tabIndex={-1}
      className="fixed inset-0 flex flex-col"
      style={{ zIndex: 100, background: 'var(--color-background)', color: 'var(--color-text)' }}
    >
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-3 px-4 py-2 border-b flex-shrink-0"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surfaceAlt)' }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Triangle size={15} style={{ color: 'var(--color-accent)' }} />
          <span id="low-poly-studio-title" className="font-theme text-sm tracking-wider">Low Poly Studio</span>
          <span className="text-xs opacity-40 ml-1 truncate">
            {W} × {H} × {D}
            {stats && <> · {stats.rawTriangles.toLocaleString()} → <b>{stats.triangles.toLocaleString()}</b> triangles · {stats.ms} ms</>}
          </span>
          {busy && <Loader2 size={13} className="animate-spin opacity-60" />}
        </div>
        <button
          type="button"
          data-autofocus
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1 rounded border text-xs transition-colors"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
        >
          <X size={13} /> Close
        </button>
      </div>

      <div
        role="status"
        className="px-4 py-1.5 border-b text-xs text-center flex-shrink-0"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-accent) 35%, var(--color-border))',
          color: 'var(--color-accent)',
          background: 'color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))',
        }}
      >
        Experimental feature — Low Poly Studio is still in development, so results and controls may change.
      </div>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0">
        <div
          className="w-64 flex-shrink-0 border-r flex flex-col overflow-y-auto pb-2"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
        >
          <LowPolyTools
            tool={tool} onTool={setTool} brush={brush} onBrush={setBrush}
            canUndo={editor.canUndo} canRedo={editor.canRedo} onUndo={editor.undo} onRedo={editor.redo}
            stale={stale} busy={busy} onImport={() => generate('voxels')} onGenerate={() => generate('lowpoly')}
          />
          <div className="border-t mx-4 mt-3" style={{ borderColor: 'var(--color-border)' }} />
          <LowPolyPanel params={params} onChange={handleParams} activePreset={activePreset} onPreset={handlePreset} />

          <SectionLabel>Lighting</SectionLabel>
          <div className="flex flex-wrap gap-1.5 px-4 pb-2">
            {Object.entries(LIGHT_PRESETS).map(([key, p]) => (
              <button
                key={key}
                onClick={() => handleLighting(key)}
                className="px-2 py-1 rounded border text-xs"
                style={lighting === key
                  ? { borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }
                  : { borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="border-t mx-4 mt-2" style={{ borderColor: 'var(--color-border)' }} />
          <SectionLabel>Export</SectionLabel>
          <ActionBtn label="GLB / GLTF" sub="Unity · Godot · Sketchfab" icon={Box} onClick={exportGlb} disabled={!stats || empty} />
          <ActionBtn label="OBJ + MTL" sub="Blender · Maya · Cinema4D" icon={Box} onClick={exportObj} disabled={!stats || empty} />
          <ActionBtn label="PNG — 2048 px" sub="Render of the current view" icon={Image} onClick={exportImage} disabled={!stats || empty} />
        </div>

        {/* ── 3D Viewport ─────────────────────────────────────────────── */}
        <div className="flex-1 relative min-w-0" style={{ background: '#111' }}>
          <div ref={containerRef} className="w-full h-full" style={{ cursor: tool === 'orbit' ? 'grab' : 'crosshair' }} />

          <div className="absolute top-3 left-3 flex gap-1.5">
            <ViewToggle Icon={Grid3X3} label="Wireframe" active={wireframe} onClick={() => setWireframe(w => !w)} />
            <ViewToggle
              Icon={Eye} label="Hold to compare" active={showOriginal}
              onPointerDown={() => setShowOriginal(true)}
              onPointerUp={() => setShowOriginal(false)}
              onPointerLeave={() => setShowOriginal(false)}
            />
          </div>

          {(error || empty) && (
            <div className="absolute inset-x-0 top-14 flex justify-center pointer-events-none">
              <div className="px-3 py-2 rounded text-xs" style={{ background: 'rgba(0,0,0,0.7)', color: '#ffb3b3' }}>
                {error ? `Conversion failed: ${error}` : 'Nothing left to show — undo, or regenerate with more Thickness / Keep thin parts.'}
              </div>
            </div>
          )}

          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs pointer-events-none opacity-40 select-none"
            style={{ color: '#fff' }}
          >
            {tool === 'orbit'
              ? 'Drag to orbit · Scroll to zoom · Right-drag to pan'
              : 'Drag on the model to edit · Drag empty space or right-drag to orbit · Ctrl+Z to undo'}
          </div>
        </div>
      </div>
    </div>
  )
}
