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

  // ── Basic Shapes ──
  { type: 'box',                 name: 'Block',              category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'sphere',              name: 'Sphere',             category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'cylinder',            name: 'Cylinder',           category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'cone',                name: 'Cone',               category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.0, 1.0, 1.0] },
  { type: 'torus',               name: 'Ring',               category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [1.2, 0.4, 1.2] },
  { type: 'capsule',             name: 'Capsule',            category: 'Basic',          color: DEFAULT_MODULAR_COLOR, size: [0.8, 1.6, 0.8] },
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

export function objectGroundHeight(object) {
  return ((object.size?.[1] ?? 1) * (object.scale?.y ?? 1)) / 2
}
