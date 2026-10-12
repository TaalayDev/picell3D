// Serialize Save dialogs so multi-file exports never open overlapping panels.
let pendingSave = Promise.resolve()

export function saveFile(content, filename, mime = 'application/octet-stream') {
  const operation = pendingSave.then(async () => {
    try {
      const blob = content instanceof Blob ? content : new Blob([content], { type: mime })
      const invoke = window.__TAURI__?.core?.invoke
      if (invoke) {
        return await invoke('save_user_file', {
          filename,
          bytes: Array.from(new Uint8Array(await blob.arrayBuffer())),
        })
      }
      if (window.__TAURI_INTERNALS__) throw new Error('Native Save dialog is unavailable')
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      link.click()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      return true
    } catch (error) {
      console.error('Save failed:', error)
      window.alert(`Could not save ${filename}: ${String(error)}`)
      return false
    }
  })
  pendingSave = operation.catch(() => {})
  return operation
}

export function saveDataUrl(dataUrl, filename) {
  const [header, encoded] = dataUrl.split(',')
  const bytes = Uint8Array.from(atob(encoded), character => character.charCodeAt(0))
  return saveFile(bytes, filename, header.match(/^data:([^;]+)/)?.[1])
}
