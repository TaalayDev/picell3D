import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft, Box, Circle, Columns3, Component, Copy, Disc3, DoorOpen, Flame,
  Folder, Footprints, Grid, Grid3X3, Home, Minus, Move3D, MousePointer2, PanelsTopLeft,
  Rotate3D, RotateCcw, Scaling, Sparkles, Square, Tent, Trash2, Triangle,
} from 'lucide-react'
import ExperimentViewport from './ExperimentViewport.jsx'
import {
  MODEL_TEMPLATES, OBJECT_LIBRARY, createModelTemplate, createObject,
  getHouseSet, getStarterObjects, objectGroundHeight,
} from './objectLibrary.js'

const ICONS = {
  // Walls
  wall_solid: PanelsTopLeft,
  wall_door: DoorOpen,
  wall_window: PanelsTopLeft,
  wall_double_window: PanelsTopLeft,
  wall_arch: Tent,
  wall_half: PanelsTopLeft,
  wall_low: Minus,
  wall_gable: Triangle,

  // Doors & Windows
  door_panel: DoorOpen,
  door_arch: DoorOpen,
  door_double: Columns3,
  door_glass: Square,
  window_square: Grid,
  window_arch: Circle,
  window_shutters: Columns3,
  window_round: Circle,

  // Roofs & Floors
  floor_tile: Box,
  roof_straight: Home,
  roof_corner: Home,
  roof_flat: Box,
  roof_gable_end: Triangle,

  // Structure
  column: Component,
  stairs: Footprints,
  railing: Columns3,
  chimney: Flame,

  // Basic
  box: Box,
  sphere: Circle,
  cylinder: Disc3,
  cone: Triangle,
  torus: Circle,
  capsule: Component,
}

const FOLDERS = ['Templates', 'Walls', 'Doors & Windows', 'Roofs & Floors', 'Structure', 'Basic']

const SNAP_STEPS = [0.5, 1.0, 0]

export default function ExperimentPage() {
  const starter = useMemo(() => getStarterObjects(), [])
  const [objects, setObjects] = useState(starter)
  const [selectedId, setSelectedId] = useState(starter[0].id)
  const [mode, setMode] = useState('translate')
  const [snap, setSnap] = useState(0.5) // Snap to 0.5m by default for LEGO-like grid alignment
  const [activeFolder, setActiveFolder] = useState('Templates')
  const selected = objects.find(object => object.id === selectedId) ?? null

  useEffect(() => {
    const onKeyDown = event => {
      if (event.target instanceof Element && event.target.closest('input, textarea, select, button, a[href], [contenteditable="true"]')) return
      const key = event.key.toLowerCase()
      if (key === 'w') setMode('translate')
      if (key === 'e') setMode('rotate')
      if (key === 'r') setMode('scale')
      if (key === 'x') toggleSnap()
      if ((key === 'delete' || key === 'backspace') && selectedId) deleteObject(selectedId)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedId, snap])

  function toggleSnap() {
    setSnap(current => {
      const idx = SNAP_STEPS.indexOf(current)
      return SNAP_STEPS[(idx + 1) % SNAP_STEPS.length]
    })
  }

  function addObject(type, position = { x: 0, y: 0, z: 0 }) {
    const object = createObject(type, position)
    object.position.y = objectGroundHeight(object)
    setObjects(current => [...current, object])
    setSelectedId(object.id)
  }

  function updateObject(id, patch) {
    setObjects(current => current.map(object => object.id === id ? { ...object, ...patch } : object))
  }

  function updateSelected(patch) {
    if (selectedId) updateObject(selectedId, patch)
  }

  function duplicateObject(object) {
    const copy = {
      ...createObject(object.type),
      name: `${object.name} copy`,
      color: object.color,
      size: [...object.size],
      position: { x: object.position.x + 0.5, y: object.position.y, z: object.position.z + 0.5 },
      rotation: { ...object.rotation },
      scale: { ...object.scale },
    }
    setObjects(current => [...current, copy])
    setSelectedId(copy.id)
  }

  function deleteObject(id) {
    setObjects(current => current.filter(object => object.id !== id))
    if (selectedId === id) setSelectedId(null)
  }

  function resetDemo() {
    const next = getStarterObjects()
    setObjects(next)
    setSelectedId(next[0].id)
    setMode('translate')
  }

  function addHouseSet() {
    const house = getHouseSet()
    setObjects(current => [...current, ...house])
    setSelectedId(house[house.length - 1].id)
  }

  function addTemplate(templateId, origin = { x: 0, y: 0, z: 0 }) {
    const templateObjects = createModelTemplate(templateId, origin)
    if (!templateObjects.length) return
    setObjects(current => [...current, ...templateObjects])
    setSelectedId(templateObjects[templateObjects.length - 1].id)
  }

  return (
    <div className="experiment-shell direct-model-lab">
      <header className="experiment-header">
        <div className="flex items-center gap-3 min-w-0">
          <a href="./index.html" className="experiment-icon-button" title="Back to Picell3D editor"><ArrowLeft size={17} /></a>
          <div className="experiment-mark"><Sparkles size={16} /></div>
          <div className="min-w-0">
            <div className="experiment-title">Assembly Lab <span>MODULAR KIT</span></div>
            <div className="experiment-subtitle">Snap LEGO-like modular walls, doors, windows & roofs into 3D space.</div>
          </div>
        </div>

        <div className="experiment-transform-toolbar" aria-label="Transform tool">
          <TransformButton active={mode === 'translate'} Icon={Move3D} label="Move" shortcut="W" onClick={() => setMode('translate')} />
          <TransformButton active={mode === 'rotate'} Icon={Rotate3D} label="Rotate" shortcut="E" onClick={() => setMode('rotate')} />
          <TransformButton active={mode === 'scale'} Icon={Scaling} label="Scale" shortcut="R" onClick={() => setMode('scale')} />
          <div style={{ width: 1, height: 20, background: 'var(--lab-line)', margin: '0 4px' }} />
          <button
            className={snap > 0 ? 'active' : ''}
            onClick={toggleSnap}
            title="Cycle grid snapping (X): 0.5m / 1m / Off"
          >
            <Grid3X3 size={15} />
            <span>Snap: {snap > 0 ? `${snap}m` : 'Off'}</span>
            <kbd>X</kbd>
          </button>
        </div>

        <button className="experiment-secondary-button" onClick={resetDemo}><RotateCcw size={14} /> Reset demo</button>
      </header>

      <main className="experiment-main direct-layout">
        <section className="experiment-stage direct-stage">
          <ExperimentViewport
            objects={objects}
            selectedId={selectedId}
            mode={mode}
            snap={snap}
            onSelect={setSelectedId}
            onAdd={addObject}
            onAddTemplate={addTemplate}
            onTransform={(id, transform) => updateObject(id, transform)}
          />
          <div className="experiment-stage-label">MODULAR 3D ASSEMBLY · {objects.length} OBJECTS · GRID 0.5M</div>
          <div className="experiment-preview-badge"><span /> LIVE SCENE</div>
          <div className="experiment-drop-hint">Drop modular blocks on the floor · Drag to snap</div>
          <div className="experiment-preview-help">Click to select · Drag empty space to orbit · Scroll to zoom · Press X to toggle grid snapping</div>
        </section>

        <aside className="experiment-inspector direct-inspector">
          {selected ? (
            <div className="experiment-inspector-scroll">
              <div className="experiment-panel-heading"><span>Inspector</span><span>{selected.type}</span></div>
              <div className="experiment-selected-summary">
                <span className="experiment-object-icon" style={{ '--object-color': selected.color }}>{(() => { const Icon = ICONS[selected.type] ?? Box; return <Icon size={21} /> })()}</span>
                <div><strong>{selected.name}</strong><small>Selected block</small></div>
              </div>
              <label className="experiment-field">
                <span>Name</span>
                <input value={selected.name} onChange={event => updateSelected({ name: event.target.value })} />
              </label>
              <label className="experiment-field">
                <span>Block Tint Color</span>
                <div className="experiment-color-field">
                  <input type="color" value={selected.color} onChange={event => updateSelected({ color: event.target.value })} />
                  <code>{selected.color.toUpperCase()}</code>
                </div>
              </label>
              <PropertyGroup title="Position" values={selected.position} step={snap > 0 ? snap : 0.1} onChange={(axis, value) => updateSelected({ position: { ...selected.position, [axis]: value } })} />
              <PropertyGroup title="Rotation" values={selected.rotation} step={15} suffix="°" onChange={(axis, value) => updateSelected({ rotation: { ...selected.rotation, [axis]: value } })} />
              <PropertyGroup title="Scale" values={selected.scale} step={0.1} min={0.05} onChange={(axis, value) => updateSelected({ scale: { ...selected.scale, [axis]: Math.max(0.05, value) } })} />
              <div className="experiment-inspector-actions">
                <button onClick={() => duplicateObject(selected)}><Copy size={13} /> Duplicate</button>
                <button onClick={() => deleteObject(selected.id)}><Trash2 size={13} /> Delete</button>
              </div>
            </div>
          ) : (
            <div className="experiment-no-selection direct"><MousePointer2 size={22} /><strong>Select a block</strong><span>Click any shape in the scene to transform it.</span></div>
          )}
        </aside>

        <aside className="experiment-library bottom-library">
          <div className="experiment-library-sidebar">
            <div className="experiment-panel-heading"><span>Modular Parts</span><span>{OBJECT_LIBRARY.length}</span></div>
            <div className="experiment-folder-list">
              {FOLDERS.map(folder => (
                <button key={folder} className={activeFolder === folder ? 'active' : ''} onClick={() => setActiveFolder(folder)}>
                  {folder === 'Templates' ? <Sparkles size={14} /> : <Folder size={14} />}
                  <span>{folder}</span>
                  <small>{folder === 'Templates' ? MODEL_TEMPLATES.length : OBJECT_LIBRARY.filter(item => item.category === folder).length}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="experiment-library-content">
            <div className="experiment-library-content-head">
              <div><strong>{activeFolder}</strong><span>Drag parts into 3D space or double-click to place</span></div>
              {activeFolder !== 'Templates' && <button className="experiment-add-set" onClick={addHouseSet} title="Construct a complete 4x4 modular house with walls, cutouts, doors & windows"><Home size={13} /> Add modular house</button>}
            </div>
            <div className={`experiment-asset-strip ${activeFolder === 'Templates' ? 'template-strip' : ''}`}>
              {activeFolder === 'Templates' ? MODEL_TEMPLATES.map(template => (
                <button
                  key={template.id}
                  draggable
                  onDragStart={event => {
                    event.dataTransfer.setData('application/picell-template', template.id)
                    event.dataTransfer.effectAllowed = 'copy'
                  }}
                  onDoubleClick={() => addTemplate(template.id)}
                  className="experiment-asset-card experiment-template-card"
                  title="Drag this complete template into the scene or double-click to add"
                >
                  <TemplatePreview template={template} />
                  <span>{template.name}</span>
                  <small>{template.description}</small>
                </button>
              )) : OBJECT_LIBRARY.filter(item => item.category === activeFolder).map(item => {
                const Icon = ICONS[item.type] ?? Box
                return (
                  <button
                    key={item.type}
                    draggable
                    onDragStart={event => {
                      event.dataTransfer.setData('application/picell-object', item.type)
                      event.dataTransfer.effectAllowed = 'copy'
                    }}
                    onDoubleClick={() => addObject(item.type, { x: 0, y: 0, z: 0 })}
                    className="experiment-asset-card"
                    title="Drag into the 3D canvas or double-click to add"
                  >
                    <ObjectPreview type={item.type} color={item.color} Icon={Icon} />
                    <span>{item.name}</span>
                    <small>{item.size.map(value => value.toFixed(1)).join(' × ')}</small>
                  </button>
                )
              })}
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

function ObjectPreview({ type, color, Icon }) {
  return (
    <span className={`experiment-asset-preview preview-${type}`} style={{ '--preview-color': color }}>
      <span className="experiment-preview-shape" />
      <Icon size={17} />
    </span>
  )
}

function TemplatePreview({ template }) {
  return (
    <span className={`experiment-asset-preview experiment-template-preview template-${template.preview}`} style={{ '--preview-color': template.color }}>
      <span className="template-part part-a" />
      <span className="template-part part-b" />
      <span className="template-part part-c" />
      <Home size={16} />
    </span>
  )
}

function TransformButton({ active, Icon, label, shortcut, onClick }) {
  return <button className={active ? 'active' : ''} onClick={onClick} title={`${label} (${shortcut})`}><Icon size={15} /><span>{label}</span><kbd>{shortcut}</kbd></button>
}

function PropertyGroup({ title, values, onChange, step, min, suffix = '' }) {
  return (
    <div className="experiment-property-group">
      <div className="experiment-category">{title}</div>
      <div className="experiment-axis-grid">
        {['x', 'y', 'z'].map(axis => (
          <label key={axis}><span>{axis.toUpperCase()}</span><input type="number" min={min} step={step} value={Number(values[axis].toFixed(2))} onChange={event => onChange(axis, Number(event.target.value) || 0)} />{suffix && <small>{suffix}</small>}</label>
        ))}
      </div>
    </div>
  )
}
