import { buildChunkGeometry } from './chunkMesher.js'

self.onmessage = event => {
  const { requestId, colorsBuffer, materialsBuffer, width, height, depth, chunks, chunkSize } = event.data
  const colors = new Uint32Array(colorsBuffer)
  const materials = new Uint8Array(materialsBuffer)
  const result = chunks.map(chunk => ({
    ...chunk,
    meshes: buildChunkGeometry({ colors, materials, width, height, depth, chunk, chunkSize }),
  }))
  const transfers = result.flatMap(chunk => chunk.meshes.flatMap(mesh => [
    mesh.positions.buffer,
    mesh.colors.buffer,
    mesh.normals.buffer,
  ]))

  self.postMessage({ requestId, chunks: result }, transfers)
}
