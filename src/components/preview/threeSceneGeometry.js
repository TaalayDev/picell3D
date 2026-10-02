import * as THREE from 'three'
import {
  SHAPE_TOOLS_3D,
  VOLUME_PRIMITIVE_TOOLS_3D,
  compute3DShapeVoxels,
  computeVolumePrimitiveVoxels,
} from '../../lib/shapeRasterizer3D.js'

export const EDIT_UNIT = 0.1
export const EDIT_EPS = EDIT_UNIT * 0.6
export const ALL_SHAPE_TOOLS_3D = new Set([...SHAPE_TOOLS_3D, ...VOLUME_PRIMITIVE_TOOLS_3D])
export const PLANE_DRAW_TOOLS = new Set(['pencil', 'eraser', 'material', 'blend', ...ALL_SHAPE_TOOLS_3D])
export const BRUSH_TOOLS_3D = new Set(['pencil', 'eraser', 'material', 'blend'])

export function isLockedPlaneActive(state) {
  return state.planeLock && PLANE_DRAW_TOOLS.has(state.activeTool)
}

export function computeShapeDragVoxels(drag, width, height, depth) {
  if (VOLUME_PRIMITIVE_TOOLS_3D.has(drag.tool)) {
    return computeVolumePrimitiveVoxels(
      drag.tool, drag.start, drag.end, drag.axis, width, height, depth,
      {
        filled: drag.filled,
        thickness: drag.thickness,
        depth: drag.primitiveDepth,
        direction: drag.direction,
      },
    )
  }
  return compute3DShapeVoxels(
    drag.tool, drag.start, drag.end, drag.axis, width, height, depth,
    drag.filled, drag.thickness,
  )
}

export function worldToVoxel(wx, wy, wz, width, height, depth) {
  const x = Math.round(wx / EDIT_UNIT + width / 2 - 0.5)
  const y = Math.round(height - 1 - (wy - EDIT_UNIT / 2) / EDIT_UNIT)
  const z = Math.round(wz / EDIT_UNIT + depth / 2 - 0.5)
  return {
    x: Math.max(0, Math.min(width - 1, x)),
    y: Math.max(0, Math.min(height - 1, y)),
    z: Math.max(0, Math.min(depth - 1, z)),
  }
}

export function voxelCenterWorld(x, y, z, width, height, depth) {
  return new THREE.Vector3(
    (x - width / 2 + 0.5) * EDIT_UNIT,
    (height - 1 - y) * EDIT_UNIT + EDIT_UNIT / 2,
    (z - depth / 2 + 0.5) * EDIT_UNIT,
  )
}

export function getDrawingPlaneSpec(state) {
  const { canvasWidth: width, canvasHeight: height, depthDimension: depthSize } = state
  const axis = state.planeAxis === 'x' || state.planeAxis === 'y' ? state.planeAxis : 'z'
  const size = axis === 'x' ? width : axis === 'y' ? height : depthSize
  const depth = Math.max(0, Math.min(size - 1, Math.round(state.planeDepth)))
  const center = axis === 'x'
    ? voxelCenterWorld(depth, (height - 1) / 2, (depthSize - 1) / 2, width, height, depthSize)
    : axis === 'y'
      ? voxelCenterWorld((width - 1) / 2, depth, (depthSize - 1) / 2, width, height, depthSize)
      : voxelCenterWorld((width - 1) / 2, (height - 1) / 2, depth, width, height, depthSize)
  const normal = axis === 'x'
    ? new THREE.Vector3(1, 0, 0)
    : axis === 'y' ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1)
  return {
    axis,
    depth,
    center,
    normal,
    width: (axis === 'x' ? depthSize : width) * EDIT_UNIT,
    height: (axis === 'y' ? depthSize : height) * EDIT_UNIT,
    plane: new THREE.Plane().setFromNormalAndCoplanarPoint(normal, center),
  }
}

export function isPointInsideVoxelBounds(point, width, height, depth) {
  const epsilon = EDIT_UNIT * 0.02
  return point.x >= -width * EDIT_UNIT / 2 - epsilon
    && point.x <= width * EDIT_UNIT / 2 + epsilon
    && point.y >= -epsilon
    && point.y <= height * EDIT_UNIT + epsilon
    && point.z >= -depth * EDIT_UNIT / 2 - epsilon
    && point.z <= depth * EDIT_UNIT / 2 + epsilon
}
