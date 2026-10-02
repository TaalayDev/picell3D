// Default clean neutral clay/plastic color for untextured LEGO-like modular building
export const DEFAULT_MODULAR_COLOR = '#e2e4ea'

export const OBJECT_LIBRARY = [
  // ── Walls (Modular 2.0 × 2.0 × 0.2 grid) ──
  { type: 'wall_solid',          name: 'Solid Wall',         category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 2.0, 0.2] },
  { type: 'wall_door',           name: 'Wall w/ Doorway',    category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 2.0, 0.2] },
  { type: 'wall_window',         name: 'Wall w/ Window',     category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 2.0, 0.2] },
  { type: 'wall_double_window',  name: 'Wall w/ 2 Windows',  category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 2.0, 0.2] },
  { type: 'wall_arch',           name: 'Wall w/ Archway',    category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 2.0, 0.2] },
  { type: 'wall_half',           name: 'Half Wall',          category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 2.0, 0.2] },
  { type: 'wall_low',            name: 'Low Wall / Parapet', category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 0.8, 0.2] },
  { type: 'wall_gable',          name: 'Gable Wall',         category: 'Walls',          color: DEFAULT_MODULAR_COLOR, size: [2.0, 1.0, 0.2] },

  // ── Doors & Windows (Modular Inserts) ──
  { type: 'door_panel',          name: 'Panel Door',         category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.6, 0.1] },
  { type: 'door_arch',           name: 'Arched Door',        category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.6, 0.1] },
  { type: 'door_double',         name: 'Double Door',        category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.6, 0.1] },
  { type: 'door_glass',          name: 'Glass Door',         category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.6, 0.1] },
  { type: 'window_square',       name: 'Cross Window',       category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [0.8, 1.0, 0.1] },
  { type: 'window_arch',         name: 'Arched Window',      category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [0.8, 1.0, 0.1] },
  { type: 'window_shutters',     name: 'Shutter Window',     category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [1.1, 1.0, 0.12] },
  { type: 'window_round',        name: 'Round Window',       category: 'Doors & Windows', color: DEFAULT_MODULAR_COLOR, size: [0.8, 0.8, 0.1] },

  // ── Roofs & Floors (Modular 2.0 tiles) ──
  { type: 'floor_tile',          name: 'Floor Tile',         category: 'Roofs & Floors', color: DEFAULT_MODULAR_COLOR, size: [2.0, 0.2, 2.0] },
  { type: 'roof_straight',       name: 'Pitched Roof',       category: 'Roofs & Floors', color: DEFAULT_MODULAR_COLOR, size: [2.0, 1.0, 2.0] },
  { type: 'roof_corner',         name: 'Corner Roof',        category: 'Roofs & Floors', color: DEFAULT_MODULAR_COLOR, size: [2.0, 1.0, 2.0] },
  { type: 'roof_flat',           name: 'Flat Roof Tile',     category: 'Roofs & Floors', color: DEFAULT_MODULAR_COLOR, size: [2.0, 0.25, 2.0] },
  { type: 'roof_gable_end',      name: 'Roof Verge Trim',    category: 'Roofs & Floors', color: DEFAULT_MODULAR_COLOR, size: [2.0, 1.0, 0.25] },

  // ── Structure & Details ──
  { type: 'column',              name: 'Pillar',             category: 'Structure',      color: DEFAULT_MODULAR_COLOR, size: [0.3, 2.0, 0.3] },
  { type: 'stairs',              name: 'Modular Stairs',     category: 'Structure',      color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 2.0] },
  { type: 'railing',             name: 'Balcony Railing',    category: 'Structure',      color: DEFAULT_MODULAR_COLOR, size: [2.0, 0.8, 0.1] },
  { type: 'chimney',             name: 'Chimney Block',      category: 'Structure',      color: DEFAULT_MODULAR_COLOR, size: [0.6, 1.4, 0.6] },

  // ── Furniture ──
  { type: 'chair_wood',          name: 'Dining Chair',       category: 'Furniture',      color: '#8b5a2b', size: [0.6, 1.1, 0.6] },
  { type: 'armchair',            name: 'Cozy Armchair',      category: 'Furniture',      color: '#2a7886', size: [0.9, 0.9, 0.85] },
  { type: 'table_dining',        name: 'Dining Table',       category: 'Furniture',      color: '#784421', size: [1.6, 0.8, 1.0] },
  { type: 'table_coffee',        name: 'Coffee Table',       category: 'Furniture',      color: '#8c593e', size: [1.0, 0.45, 0.6] },
  { type: 'bookshelf',           name: 'Bookshelf',          category: 'Furniture',      color: '#5c3a21', size: [1.0, 1.8, 0.4] },

  // ── Basic Shapes ──
  { type: 'box',                 name: 'Block',              category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'sphere',              name: 'Sphere',             category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'cylinder',            name: 'Cylinder',           category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'cone',                name: 'Cone',               category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'torus',               name: 'Ring',               category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.2, 0.4, 1.2] },
  { type: 'capsule',             name: 'Capsule',            category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [0.8, 1.6, 0.8] },
]

export const MODEL_TEMPLATES = [
  { id: 'cottage', name: 'Classic Cottage', description: 'Gabled home · 22 pieces', preview: 'cottage', color: '#d9b98c' },
  { id: 'modern-house', name: 'Modern House', description: 'Flat-roof home · 11 pieces', preview: 'modern-house', color: '#d9e4ee' },
  { id: 'watchtower', name: 'Watchtower', description: 'Raised lookout · 9 pieces', preview: 'watchtower', color: '#c6b493' },
  { id: 'door-entry-set', name: 'Doorway & Porch', description: 'Entrance with stairs & door · 6 pieces', preview: 'door-entry-set', color: '#c49a6c' },
  { id: 'window-balcony-set', name: 'Window Balcony', description: 'Window wall & railing · 6 pieces', preview: 'window-balcony-set', color: '#88a8ba' },
  { id: 'dining-set', name: 'Dining Room Set', description: 'Table with 4 chairs · 5 pieces', preview: 'dining-set', color: '#b07a52' },
  { id: 'living-room-set', name: 'Living Room Set', description: 'Armchairs, table & rug · 5 pieces', preview: 'living-room-set', color: '#4592a4' },
  { id: 'rover', name: 'Explorer Rover', description: 'Seven-part vehicle', preview: 'rover', color: '#ef6a8a' },
  { id: 'table-set', name: 'Table Set', description: 'Table and stools · 10 pieces', preview: 'table-set', color: '#a87450' },
]

let objectSequence = 20

export function createObject(type, position = { x: 0, y: 0, z: 0 }) {
  const preset = OBJECT_LIBRARY.find(item => item.type === type) ?? OBJECT_LIBRARY[0]
  objectSequence += 1
  return {
    id: `object-${objectSequence}`,
    type: preset.type,
    name: preset.name,
    color: preset.color,
    size: [...preset.size],
    position: { ...position },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
  }
}

export function getStarterObjects() {
  return [
    { ...createObject('box', { x: 0, y: 0.5, z: 0 }), id: 'demo-body', name: 'Base Block' },
    {
      ...createObject('sphere', { x: 0, y: 1.4, z: 0 }), id: 'demo-sphere', name: 'Sphere Top',
      scale: { x: 0.8, y: 0.8, z: 0.8 },
    },
    {
      ...createObject('cylinder', { x: -1.2, y: 0.5, z: 0 }), id: 'demo-pillar-l', name: 'Left Pillar',
    },
    {
      ...createObject('cylinder', { x: 1.2, y: 0.5, z: 0 }), id: 'demo-pillar-r', name: 'Right Pillar',
    },
    {
      ...createObject('cone', { x: 0, y: 2.2, z: 0 }), id: 'demo-apex', name: 'Apex Cone',
      scale: { x: 0.6, y: 0.6, z: 0.6 },
    },
  ]
}

/**
 * Generates a clean, modular 4x4 LEGO-style house assembled entirely from
 * grid-aligned modular blocks (walls, door & window cutouts, inserts, roof segments, stairs).
 */
export function getHouseSet(origin = { x: 0, y: 0, z: 0 }) {
  const at = (type, name, x, y, z, options = {}) => ({
    ...createObject(type, { x: origin.x + x, y: origin.y + y, z: origin.z + z }),
    name,
    ...options,
  })

  return [
    // ── Modular Floor (4 x 2.0x2.0 tiles, forming 4.0x4.0 foundation at Y=0.1) ──
    at('floor_tile', 'Floor NW', -1.0, 0.1, -1.0),
    at('floor_tile', 'Floor NE',  1.0, 0.1, -1.0),
    at('floor_tile', 'Floor SW', -1.0, 0.1,  1.0),
    at('floor_tile', 'Floor SE',  1.0, 0.1,  1.0),

    // ── Front Walls & Openings (Z = 1.9, Y-center = 1.2, reaching Y = 2.2) ──
    at('wall_door', 'Front Wall w/ Doorway', -1.0, 1.2, 1.9),
    at('door_panel', 'Front Door Insert', -1.0, 1.0, 1.9), // Snaps right into the doorway cutout!

    at('wall_window', 'Front Wall w/ Window', 1.0, 1.2, 1.9),
    at('window_square', 'Front Window Insert', 1.0, 1.2, 1.9), // Snaps right into the window cutout!

    // ── Back Walls (Z = -1.9, Y-center = 1.2) ──
    at('wall_window', 'Back Wall w/ Window', -1.0, 1.2, -1.9),
    at('window_arch', 'Back Window Insert', -1.0, 1.2, -1.9),
    at('wall_solid', 'Back Solid Wall', 1.0, 1.2, -1.9),

    // ── Left Walls (X = -1.9, Rotated 90°) ──
    at('wall_solid', 'Left Wall Solid', -1.9, 1.2, -1.0, { rotation: { x: 0, y: 90, z: 0 } }),
    at('wall_window', 'Left Wall w/ Window', -1.9, 1.2, 1.0, { rotation: { x: 0, y: 90, z: 0 } }),
    at('window_shutters', 'Left Window Insert', -1.9, 1.2, 1.0, { rotation: { x: 0, y: 90, z: 0 } }),

    // ── Right Walls (X = +1.9, Rotated 90°) ──
    at('wall_double_window', 'Right Wall w/ 2 Windows', 1.9, 1.2, -1.0, { rotation: { x: 0, y: 90, z: 0 } }),
    at('wall_solid', 'Right Wall Solid', 1.9, 1.2, 1.0, { rotation: { x: 0, y: 90, z: 0 } }),

    // ── Front & Back Attic Gables (Y-center = 2.7, width scaled to 4.0) ──
    at('wall_gable', 'Front Gable Wall', 0, 2.7, 1.9, { scale: { x: 2.0, y: 1.0, z: 1.0 } }),
    at('wall_gable', 'Back Gable Wall',  0, 2.7, -1.9, { scale: { x: 2.0, y: 1.0, z: 1.0 } }),

    // ── Pitched Roof Modules (covering 4.0 x 4.0 footprint) ──
    at('roof_straight', 'Roof Front', 0, 2.7,  1.0, { scale: { x: 2.08, y: 1.0, z: 1.04 } }),
    at('roof_straight', 'Roof Back',  0, 2.7, -1.0, { scale: { x: 2.08, y: 1.0, z: 1.04 } }),

    // ── Modular Stairs (leading up to the doorway) ──
    at('stairs', 'Entrance Steps', -1.0, 0.5, 2.9),

    // ── Chimney Block (protruding through the roof) ──
    at('chimney', 'Chimney Stack', 1.1, 3.2, -0.6),
  ]
}

function makeAt(origin, type, name, x, y, z, options = {}) {
  return {
    ...createObject(type, { x: origin.x + x, y: origin.y + y, z: origin.z + z }),
    name,
    ...options,
  }
}

export function createModelTemplate(templateId, origin = { x: 0, y: 0, z: 0 }) {
  if (templateId === 'cottage') return getHouseSet(origin)

  if (templateId === 'modern-house') {
    const at = (...args) => makeAt(origin, ...args)
    return [
      at('floor_tile', 'Foundation', 0, 0.09, 0, { color: '#806958', scale: { x: 2.45, y: 1, z: 1.55 } }),
      at('wall_solid', 'Back wall', 0, 1, -1.72, { color: '#e7e5df', scale: { x: 2.42, y: 1, z: 1 } }),
      at('wall_solid', 'Left wall', -2.78, 1, 0, { color: '#d4d7dc', scale: { x: 1.43, y: 1, z: 1 }, rotation: { x: 0, y: 90, z: 0 } }),
      at('wall_solid', 'Right wall', 2.78, 1, 0, { color: '#d4d7dc', scale: { x: 1.43, y: 1, z: 1 }, rotation: { x: 0, y: 90, z: 0 } }),
      at('wall_solid', 'Front left', -1.8, 1, 1.72, { color: '#edf0f2', scale: { x: 0.75, y: 1, z: 1 } }),
      at('wall_solid', 'Front right', 1.8, 1, 1.72, { color: '#edf0f2', scale: { x: 0.75, y: 1, z: 1 } }),
      at('door_panel', 'Modern door', 0, 0.82, 1.86, { color: '#343b48' }),
      at('window_square', 'Panoramic window', 1.72, 1.15, 1.86, { scale: { x: 1.45, y: 1, z: 1 } }),
      at('window_square', 'Side window', -2.92, 1.15, 0, { scale: { x: 1.4, y: 1, z: 1 }, rotation: { x: 0, y: 90, z: 0 } }),
      at('roof_flat', 'Flat roof', 0, 1.96, 0, { color: '#3e4652', scale: { x: 2.55, y: 1.25, z: 1.62 } }),
      at('column', 'Porch column', -0.72, 0.95, 2.25, { color: '#39424e' }),
    ]
  }

  if (templateId === 'watchtower') {
    const at = (...args) => makeAt(origin, ...args)
    return [
      at('column', 'Post A', -1.15, 1.5, -1.15, { color: '#8c6848', scale: { x: 1, y: 1.55, z: 1 } }),
      at('column', 'Post B', 1.15, 1.5, -1.15, { color: '#8c6848', scale: { x: 1, y: 1.55, z: 1 } }),
      at('column', 'Post C', -1.15, 1.5, 1.15, { color: '#8c6848', scale: { x: 1, y: 1.55, z: 1 } }),
      at('column', 'Post D', 1.15, 1.5, 1.15, { color: '#8c6848', scale: { x: 1, y: 1.55, z: 1 } }),
      at('floor_tile', 'Raised platform', 0, 3, 0, { color: '#a97b54', scale: { x: 1.3, y: 1.2, z: 1.3 } }),
      at('wall_solid', 'Tower cabin', 0, 3.85, -1.2, { color: '#d6c5a6', scale: { x: 1.15, y: 0.78, z: 1 } }),
      at('wall_solid', 'Cabin side', -1.35, 3.85, 0, { color: '#d6c5a6', scale: { x: 1, y: 0.78, z: 1 }, rotation: { x: 0, y: 90, z: 0 } }),
      at('roof_straight', 'Tower roof', 0, 4.95, 0, { color: '#5f6a52', scale: { x: 1.25, y: 0.8, z: 1.25 } }),
      at('stairs', 'Access stairs', 0, 0.4, 1.85, { color: '#a98b68', scale: { x: 0.8, y: 1.2, z: 1.6 } }),
    ]
  }

  if (templateId === 'rover') {
    const at = (...args) => makeAt(origin, ...args)
    const wheel = (name, x, z) => at('cylinder', name, x, 0.46, z, { rotation: { x: 0, y: 0, z: 90 }, color: '#252b3d', scale: { x: 0.8, y: 0.45, z: 0.8 } })
    return [
      at('box', 'Rover chassis', 0, 0.72, 0, { color: '#e95d82', scale: { x: 1.45, y: 0.7, z: 1.2 } }),
      wheel('Front left wheel', -1.25, 0.68), wheel('Front right wheel', 1.25, 0.68),
      wheel('Rear left wheel', -1.25, -0.68), wheel('Rear right wheel', 1.25, -0.68),
      at('sphere', 'Sensor dome', 0, 1.48, 0, { color: '#83dff5', scale: { x: 0.62, y: 0.48, z: 0.62 } }),
      at('capsule', 'Camera mast', 0, 2.05, 0, { color: '#f0c75d', scale: { x: 0.26, y: 0.45, z: 0.26 } }),
    ]
  }

  if (templateId === 'table-set') {
    const at = (...args) => makeAt(origin, ...args)
    const stool = (name, x, z) => [
      at('cylinder', `${name} seat`, x, 0.72, z, { color: '#b07a52', scale: { x: 0.72, y: 0.18, z: 0.72 } }),
      at('column', `${name} base`, x, 0.36, z, { color: '#4a3b36', scale: { x: 0.72, y: 0.38, z: 0.72 } }),
    ]
    return [
      at('cylinder', 'Round table top', 0, 1.25, 0, { color: '#a96f48', scale: { x: 2.2, y: 0.16, z: 2.2 } }),
      at('column', 'Table pedestal', 0, 0.62, 0, { color: '#493a35', scale: { x: 1.15, y: 0.65, z: 1.15 } }),
      ...stool('North stool', 0, -1.65), ...stool('South stool', 0, 1.65),
      ...stool('West stool', -1.65, 0), ...stool('East stool', 1.65, 0),
    ]
  }

  if (templateId === 'door-entry-set') {
    const at = (...args) => makeAt(origin, ...args)
    return [
      at('floor_tile', 'Porch base', 0, 0.1, 0.4, { color: '#9fa3a9', scale: { x: 1.2, y: 1, z: 1.4 } }),
      at('wall_door', 'Entry wall', 0, 1.2, 0, { color: '#e8e5dc' }),
      at('door_panel', 'Front door', 0, 1.0, 0, { color: '#8a532d' }),
      at('stairs', 'Porch steps', 0, 0.5, 1.4, { color: '#878c94' }),
      at('column', 'Left porch post', -0.95, 1.0, 0.8, { color: '#5c3a21', scale: { x: 0.8, y: 1, z: 0.8 } }),
      at('column', 'Right porch post', 0.95, 1.0, 0.8, { color: '#5c3a21', scale: { x: 0.8, y: 1, z: 0.8 } }),
    ]
  }

  if (templateId === 'window-balcony-set') {
    const at = (...args) => makeAt(origin, ...args)
    return [
      at('floor_tile', 'Balcony floor', 0, 0.1, 0.5, { color: '#6d7582', scale: { x: 1.2, y: 1, z: 1.2 } }),
      at('wall_window', 'Window wall', 0, 1.2, -0.1, { color: '#e2e4ea' }),
      at('window_shutters', 'Shutter window', 0, 1.2, -0.1, { color: '#4a6b58' }),
      at('railing', 'Front railing', 0, 0.5, 1.0, { color: '#323a48' }),
      at('railing', 'Left railing', -1.0, 0.5, 0.4, { color: '#323a48', scale: { x: 0.6, y: 1, z: 1 }, rotation: { x: 0, y: 90, z: 0 } }),
      at('railing', 'Right railing', 1.0, 0.5, 0.4, { color: '#323a48', scale: { x: 0.6, y: 1, z: 1 }, rotation: { x: 0, y: 90, z: 0 } }),
    ]
  }

  if (templateId === 'dining-set') {
    const at = (...args) => makeAt(origin, ...args)
    return [
      at('table_dining', 'Dining table', 0, 0.4, 0, { color: '#784421' }),
      at('chair_wood', 'North chair', 0, 0.55, -0.85, { color: '#8b5a2b', rotation: { x: 0, y: 0, z: 0 } }),
      at('chair_wood', 'South chair', 0, 0.55, 0.85, { color: '#8b5a2b', rotation: { x: 0, y: 180, z: 0 } }),
      at('chair_wood', 'West chair', -1.15, 0.55, 0, { color: '#8b5a2b', rotation: { x: 0, y: 90, z: 0 } }),
      at('chair_wood', 'East chair', 1.15, 0.55, 0, { color: '#8b5a2b', rotation: { x: 0, y: -90, z: 0 } }),
    ]
  }

  if (templateId === 'living-room-set') {
    const at = (...args) => makeAt(origin, ...args)
    return [
      at('floor_tile', 'Living room rug', 0, 0.05, 0, { color: '#a04832', scale: { x: 1.4, y: 0.5, z: 1.2 } }),
      at('table_coffee', 'Coffee table', 0, 0.22, 0, { color: '#5a351e' }),
      at('armchair', 'Left armchair', -1.05, 0.45, 0, { color: '#2a7886', rotation: { x: 0, y: 90, z: 0 } }),
      at('armchair', 'Right armchair', 1.05, 0.45, 0, { color: '#2a7886', rotation: { x: 0, y: -90, z: 0 } }),
      at('bookshelf', 'Living room bookshelf', 0, 0.9, -1.05, { color: '#5c3a21', rotation: { x: 0, y: 0, z: 0 } }),
    ]
  }

  return []
}

export function objectGroundHeight(object) {
  return ((object.size?.[1] ?? 1) * (object.scale?.y ?? 1)) / 2
}
