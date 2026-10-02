import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { MODEL_TEMPLATES, OBJECT_LIBRARY, createModelTemplate } from '../src/components/experiment/objectLibrary.js'
import { TEMPLATES } from '../src/components/layout/templatesData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

test('all MODEL_TEMPLATES instantiate objects without error', () => {
  for (const template of MODEL_TEMPLATES) {
    const objects = createModelTemplate(template.id, { x: 0, y: 0, z: 0 })
    assert.ok(objects.length > 0, `Template ${template.id} should return objects`)
    for (const obj of objects) {
      assert.ok(obj.id, `Object in ${template.id} should have an id`)
      assert.ok(obj.type, `Object in ${template.id} should have a type`)
      assert.ok(obj.position, `Object in ${template.id} should have position`)
      assert.equal(typeof obj.position.x, 'number')
      assert.equal(typeof obj.position.y, 'number')
      assert.equal(typeof obj.position.z, 'number')
    }
  }
})

test('house set templates in MODEL_TEMPLATES contain expected parts', () => {
  const doorEntry = createModelTemplate('door-entry-set')
  assert.ok(doorEntry.some(o => o.type === 'door_panel'), 'door-entry-set should include a door')
  assert.ok(doorEntry.some(o => o.type === 'wall_door'), 'door-entry-set should include wall with doorway')

  const windowBalcony = createModelTemplate('window-balcony-set')
  assert.ok(windowBalcony.some(o => o.type === 'window_shutters'), 'window-balcony-set should include shutters window')
  assert.ok(windowBalcony.some(o => o.type === 'railing'), 'window-balcony-set should include railing')

  const diningSet = createModelTemplate('dining-set')
  assert.ok(diningSet.some(o => o.type === 'table_dining'), 'dining-set should include dining table')
  assert.ok(diningSet.filter(o => o.type === 'chair_wood').length >= 4, 'dining-set should include 4 chairs')

  const livingRoom = createModelTemplate('living-room-set')
  assert.ok(livingRoom.some(o => o.type === 'armchair'), 'living-room-set should include armchairs')
  assert.ok(livingRoom.some(o => o.type === 'table_coffee'), 'living-room-set should include coffee table')
  assert.ok(livingRoom.some(o => o.type === 'bookshelf'), 'living-room-set should include bookshelf')
})

test('OBJECT_LIBRARY contains Furniture category items', () => {
  const furniture = OBJECT_LIBRARY.filter(item => item.category === 'Furniture')
  assert.ok(furniture.length >= 5, 'Furniture category should have multiple pieces')
  const types = furniture.map(f => f.type)
  assert.ok(types.includes('chair_wood'), 'Should have chair_wood')
  assert.ok(types.includes('armchair'), 'Should have armchair')
  assert.ok(types.includes('table_dining'), 'Should have table_dining')
  assert.ok(types.includes('table_coffee'), 'Should have table_coffee')
  assert.ok(types.includes('bookshelf'), 'Should have bookshelf')
})

test('TEMPLATES in TemplatesDialog includes house set items with valid .picell3d files', () => {
  const houseSetIds = ['house', 'door', 'window', 'chair', 'armchair', 'table', 'bookshelf']
  const publicDir = path.resolve(__dirname, '..', 'public', 'templates')

  for (const id of houseSetIds) {
    const t = TEMPLATES.find(entry => entry.id === id)
    assert.ok(t, `TEMPLATES should contain item with id '${id}'`)
    assert.equal(t.category, 'house', `Item '${id}' should be in 'house' category`)

    const filePath = path.join(publicDir, `${id}.picell3d`)
    assert.ok(fs.existsSync(filePath), `Template file ${filePath} must exist`)

    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    assert.ok(content.canvasWidth > 0, `Template ${id} must have canvasWidth`)
    assert.ok(content.canvasHeight > 0, `Template ${id} must have canvasHeight`)
    assert.ok(content.depthDimension > 0, `Template ${id} must have depthDimension`)
    assert.ok(Array.isArray(content.layers) && content.layers.length > 0, `Template ${id} must have layers`)
    assert.ok(Array.isArray(content.layers[0].voxels), `Template ${id} must have voxels`)
  }
})

test('TEMPLATES includes forest set items with valid .picell3d files', () => {
  const forestSetIds = ['pine-tree', 'oak-tree', 'log-cabin', 'stump', 'deer', 'mushrooms', 'boulder']
  const publicDir = path.resolve(__dirname, '..', 'public', 'templates')

  for (const id of forestSetIds) {
    const t = TEMPLATES.find(entry => entry.id === id)
    assert.ok(t, `TEMPLATES should contain item with id '${id}'`)
    assert.equal(t.category, 'forest', `Item '${id}' should be in 'forest' category`)

    const filePath = path.join(publicDir, `${id}.picell3d`)
    assert.ok(fs.existsSync(filePath), `Template file ${filePath} must exist`)

    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    assert.ok(content.canvasWidth > 0, `Template ${id} must have canvasWidth`)
    assert.ok(content.canvasHeight > 0, `Template ${id} must have canvasHeight`)
    assert.ok(content.depthDimension > 0, `Template ${id} must have depthDimension`)
    assert.ok(Array.isArray(content.layers) && content.layers.length > 0, `Template ${id} must have layers`)
    assert.ok(Array.isArray(content.layers[0].voxels), `Template ${id} must have voxels`)
  }
})
