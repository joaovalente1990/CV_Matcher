const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  setCV: (title) => ipcRenderer.send('set-cv', title)
})