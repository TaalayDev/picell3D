import test from 'node:test'
import assert from 'node:assert/strict'
import { saveFile, saveDataUrl } from '../src/lib/saveFile.js'

test('native saves preserve bytes, serialize dialogs, and handle cancellation and errors', async () => {
  const originalWindow = globalThis.window
  const calls = []
  const alerts = []
  let release
  globalThis.window = {
    __TAURI__: { core: { invoke: async (command, args) => {
      calls.push({ command, ...args })
      if (calls.length === 1) return new Promise(resolve => { release = resolve })
      if (calls.length === 2) return false
      throw new Error('Permission denied')
    } } },
    alert: message => alerts.push(message),
  }
  try {
    const first = saveFile(new Uint8Array([0, 128, 255]), 'model.vox')
    const second = saveDataUrl('data:image/png;base64,AAH/', 'render.png')
    await new Promise(resolve => setImmediate(resolve))
    assert.equal(calls.length, 1)
    release(true)
    assert.equal(await first, true)
    assert.equal(await second, false)
    assert.deepEqual(calls, [
      { command: 'save_user_file', filename: 'model.vox', bytes: [0, 128, 255] },
      { command: 'save_user_file', filename: 'render.png', bytes: [0, 1, 255] },
    ])
    assert.equal(await saveFile('project', 'project.picell3d'), false)
    assert.match(alerts[0], /Permission denied/)
  } finally {
    globalThis.window = originalWindow
  }
})
