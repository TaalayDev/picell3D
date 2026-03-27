// Preload script — runs in the renderer context before page load.
// Use contextBridge here to safely expose any Node/Electron APIs to the renderer.
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  platform: process.platform,
  isElectron: true,
})
