import * as THREE from 'three'

/**
 * Material settings per voxel material type for the low poly mesh.
 * Mirrors the look of meshBuilder.js; low poly faces carry their own normals,
 * so no per-face shading is baked into the vertex colours.
 */
const MATERIAL_PARAMS = {
  solid:    { roughness: 0.75, metalness: 0.05 },
  glossy:   { roughness: 0.14, metalness: 0.02 },
  matte:    { roughness: 0.98, metalness: 0 },
  metal:    { roughness: 0.12, metalness: 0.88 },
  gold:     { roughness: 0.08, metalness: 0.96 },
  glass:    { roughness: 0.05, metalness: 0.1,  transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide },
  crystal:  { roughness: 0.06, metalness: 0.22, transparent: true, opacity: 0.78, side: THREE.DoubleSide },
  hologram: { roughness: 0.2,  metalness: 0.1,  transparent: true, opacity: 0.6,  depthWrite: false, side: THREE.DoubleSide,
              emissive: new THREE.Color(0x004466), emissiveIntensity: 0.7 },
}
const SELF_LIT = new Set(['emissive', 'neon', 'magma'])

// Faces are pushed back slightly so the wireframe overlay isn't hidden by depth fighting
const OFFSET = { polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }

function createMaterial(type) {
  if (SELF_LIT.has(type)) return new THREE.MeshBasicMaterial({ vertexColors: true, ...OFFSET })
  return new THREE.MeshStandardMaterial({ vertexColors: true, ...OFFSET, ...(MATERIAL_PARAMS[type] ?? MATERIAL_PARAMS.solid) })
}

/**
 * Build a THREE.Group from the buffers produced by computeLowPoly().
 * With `wireframe: true` each mesh gets a hidden edge overlay child named 'wireframe'.
 */
export function buildLowPolyGroup(result, { wireframe = false } = {}) {
  const group = new THREE.Group()
  const disposables = []

  for (const g of result.groups) {
    if (!g.positions.length) continue
    const geo = new THREE.BufferGeometry()
    // BufferAttribute (not Float32BufferAttribute) shares the typed arrays, so manual edits show up live
    geo.setAttribute('position', new THREE.BufferAttribute(g.positions, 3))
    geo.setAttribute('normal',   new THREE.BufferAttribute(g.normals, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(g.colors, 3))
    const mat = createMaterial(g.mat)
    const mesh = new THREE.Mesh(geo, mat)
    mesh.name = g.mat
    mesh.userData.faceHex = g.faceHex
    mesh.userData.groupIndex = result.groups.indexOf(g)
    disposables.push(geo, mat)

    if (wireframe) {
      const wireGeo = new THREE.WireframeGeometry(geo)
      const wireMat = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.55 })
      const lines = new THREE.LineSegments(wireGeo, wireMat)
      lines.name = 'wireframe'
      lines.visible = false
      mesh.add(lines)
      disposables.push(wireGeo, wireMat)
    }
    group.add(mesh)
  }

  return { group, dispose: () => disposables.forEach(d => d.dispose()) }
}

/** Rebuild a mesh's edge overlay after its vertices were edited. */
export function refreshWireframe(mesh) {
  const lines = mesh.children.find(c => c.name === 'wireframe')
  if (!lines) return
  lines.geometry.dispose()
  lines.geometry = new THREE.WireframeGeometry(mesh.geometry)
}
