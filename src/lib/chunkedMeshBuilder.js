import * as THREE from 'three'
import {
  buildChunkGeometry,
  VOXEL_CHUNK_SIZE,
  VOXEL_MATERIAL_TYPES,
} from './chunkMesher.js'

const MATERIAL_IDS = new Map(VOXEL_MATERIAL_TYPES.map((type, index) => [type, index]))
const NEIGHBORS = [
  [0, 0, 0], [1, 0, 0], [-1, 0, 0],
  [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
]

function chunkKey(x, y, z) {
  return `${x},${y},${z}`
}

function parseHexColor(color) {
  if (typeof color !== 'string' || color === 'transparent') return 0
  const normalized = color.startsWith('#') ? color.slice(1) : color
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return 0
  // Bit 24 distinguishes an occupied black voxel (#000000) from an empty cell.
  return 0x01000000 | parseInt(normalized, 16)
}

function mixHash(hash, value) {
  hash ^= value
  return Math.imul(hash, 16777619) >>> 0
}

function encodeVolume(voxels, width, height, depth, colorMaterials, voxelMaterials, chunkSize) {
  const colors = new Uint32Array(width * height * depth)
  const materials = new Uint8Array(colors.length)
  const hashes = new Map()

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        const index = (y * width + x) * depth + z
        const color = voxels[y]?.[x]?.[z]
        const packed = parseHexColor(color)
        const type = voxelMaterials[`${y},${x},${z}`] || colorMaterials[color] || 'solid'
        const materialId = MATERIAL_IDS.get(type) ?? 0
        colors[index] = packed
        materials[index] = materialId

        const key = chunkKey(
          Math.floor(x / chunkSize),
          Math.floor(y / chunkSize),
          Math.floor(z / chunkSize),
        )
        let hash = hashes.get(key) ?? 2166136261
        hash = mixHash(hash, packed)
        hash = mixHash(hash, materialId)
        hashes.set(key, hash)
      }
    }
  }

  return { colors, materials, hashes, width, height, depth }
}

function createMaterial(type) {
  switch (type) {
    case 'glossy': return new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.14, metalness: 0.02, envMapIntensity: 1.1 })
    case 'matte': return new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.98, metalness: 0 })
    case 'metal': return new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.88, roughness: 0.12, envMapIntensity: 1.2 })
    case 'gold': return new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.96, roughness: 0.08, envMapIntensity: 1.6 })
    case 'glass': return new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide, roughness: 0.05, metalness: 0.1 })
    case 'crystal': return new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, opacity: 0.78, depthWrite: true, side: THREE.DoubleSide, roughness: 0.06, metalness: 0.22, envMapIntensity: 1.8 })
    case 'hologram': return new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide, roughness: 0.2, metalness: 0.1, emissive: new THREE.Color(0x004466), emissiveIntensity: 0.7 })
    case 'emissive':
    case 'neon':
    case 'magma': return new THREE.MeshBasicMaterial({ vertexColors: true })
    default: return new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, metalness: 0.05 })
  }
}

function disposeChunk(group) {
  group.traverse(object => object.geometry?.dispose())
}

/**
 * Keeps a stable Three.js group while meshing dirty chunks off the main thread.
 * Calls made during a worker job are coalesced into the newest snapshot.
 */
export function createChunkedVoxelMesh({ chunkSize = VOXEL_CHUNK_SIZE } = {}) {
  const group = new THREE.Group()
  group.name = 'chunked-voxel-mesh'
  const chunkGroups = new Map()
  const sharedMaterials = VOXEL_MATERIAL_TYPES.map(createMaterial)
  const worker = typeof Worker === 'undefined'
    ? null
    : new Worker(new URL('./voxelMesh.worker.js', import.meta.url), { type: 'module' })

  let disposed = false
  let requestId = 0
  let appliedHashes = new Map()
  let appliedDimensions = ''
  let inFlight = null
  let queued = null

  const applyResult = (snapshot, chunks) => {
    if (disposed) return
    const validKeys = new Set(snapshot.hashes.keys())
    for (const [key, oldGroup] of chunkGroups) {
      if (!validKeys.has(key)) {
        group.remove(oldGroup)
        disposeChunk(oldGroup)
        chunkGroups.delete(key)
      }
    }

    for (const chunk of chunks) {
      const key = chunkKey(chunk.x, chunk.y, chunk.z)
      const oldGroup = chunkGroups.get(key)
      if (oldGroup) {
        group.remove(oldGroup)
        disposeChunk(oldGroup)
      }
      const nextGroup = new THREE.Group()
      nextGroup.name = `voxel-chunk-${key}`
      nextGroup.userData.chunk = { x: chunk.x, y: chunk.y, z: chunk.z }
      for (const data of chunk.meshes) {
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(data.positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(data.colors, 3))
        geometry.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3))
        geometry.computeBoundingSphere()
        nextGroup.add(new THREE.Mesh(geometry, sharedMaterials[data.materialId] || sharedMaterials[0]))
      }
      group.add(nextGroup)
      chunkGroups.set(key, nextGroup)
    }

    appliedHashes = snapshot.hashes
    appliedDimensions = `${snapshot.width},${snapshot.height},${snapshot.depth}`
  }

  const getDirtyChunks = snapshot => {
    const dimensions = `${snapshot.width},${snapshot.height},${snapshot.depth}`
    const allDirty = dimensions !== appliedDimensions
    const maxX = Math.ceil(snapshot.width / chunkSize)
    const maxY = Math.ceil(snapshot.height / chunkSize)
    const maxZ = Math.ceil(snapshot.depth / chunkSize)
    const dirty = new Map()

    for (const [key, hash] of snapshot.hashes) {
      if (!allDirty && appliedHashes.get(key) === hash) continue
      const [x, y, z] = key.split(',').map(Number)
      for (const [dx, dy, dz] of NEIGHBORS) {
        const nx = x + dx
        const ny = y + dy
        const nz = z + dz
        if (nx >= 0 && nx < maxX && ny >= 0 && ny < maxY && nz >= 0 && nz < maxZ) {
          dirty.set(chunkKey(nx, ny, nz), { x: nx, y: ny, z: nz })
        }
      }
    }
    return [...dirty.values()]
  }

  const finish = (snapshot, chunks) => {
    applyResult(snapshot, chunks)
    inFlight = null
    if (queued) {
      const next = queued
      queued = null
      dispatch(next)
    }
  }

  const dispatch = snapshot => {
    if (disposed) return
    const chunks = getDirtyChunks(snapshot)
    if (chunks.length === 0) {
      appliedHashes = snapshot.hashes
      appliedDimensions = `${snapshot.width},${snapshot.height},${snapshot.depth}`
      return
    }

    const id = ++requestId
    inFlight = { id, snapshot }
    if (worker) {
      worker.postMessage({
        requestId: id,
        colorsBuffer: snapshot.colors.buffer,
        materialsBuffer: snapshot.materials.buffer,
        width: snapshot.width,
        height: snapshot.height,
        depth: snapshot.depth,
        chunks,
        chunkSize,
      }, [snapshot.colors.buffer, snapshot.materials.buffer])
      return
    }

    queueMicrotask(() => finish(snapshot, chunks.map(chunk => ({
      ...chunk,
      meshes: buildChunkGeometry({ ...snapshot, chunk, chunkSize }),
    }))))
  }

  if (worker) {
    worker.onmessage = event => {
      if (!inFlight || event.data.requestId !== inFlight.id) return
      finish(inFlight.snapshot, event.data.chunks)
    }
    worker.onerror = error => {
      console.error('Voxel mesh worker failed', error)
      inFlight = null
      if (queued) {
        const next = queued
        queued = null
        dispatch(next)
      }
    }
  }

  const update = (voxels, width, height, depth, colorMaterials = {}, voxelMaterials = {}) => {
    if (disposed) return
    const snapshot = encodeVolume(voxels, width, height, depth, colorMaterials, voxelMaterials, chunkSize)
    if (inFlight) queued = snapshot
    else dispatch(snapshot)
  }

  const dispose = () => {
    disposed = true
    worker?.terminate()
    for (const chunkGroup of chunkGroups.values()) disposeChunk(chunkGroup)
    chunkGroups.clear()
    sharedMaterials.forEach(material => material.dispose())
    group.clear()
  }

  return { group, update, dispose }
}
