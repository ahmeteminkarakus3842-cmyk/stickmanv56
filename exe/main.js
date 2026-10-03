const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({ width: 1100, height: 650, autoHideMenuBar: true, backgroundColor: '#000000', title: 'Stickman Fighter', webPreferences: { autoplayPolicy: 'no-user-gesture-required' } });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
