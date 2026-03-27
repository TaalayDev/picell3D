const { app, BrowserWindow, dialog } = require('electron')
const path = require('path')

const isDev = !app.isPackaged

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  // Show a native quit confirmation dialog instead of relying on
  // the browser's beforeunload prompt (which Electron suppresses).
  win.on('close', (e) => {
    e.preventDefault()
    const choice = dialog.showMessageBoxSync(win, {
      type: 'question',
      buttons: ['Quit', 'Cancel'],
      defaultId: 0,
      cancelId: 1,
      title: 'Quit Picell3D',
      message: 'Are you sure you want to quit? Unsaved changes will be lost.',
    })
    if (choice === 0) win.destroy()
  })

  if (isDev) {
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
