const url = require('url');
const path = require('path');
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let ElectronApp = {};

let isDevEnv = process.env.APP_ENV === 'dev';

function createWindow() {
  ElectronApp.window = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    titleBarStyle: 'hidden'
  });

  ElectronApp.window.setVisibleOnAllWorkspaces(true);

  ElectronApp.window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (isDevEnv) {
    ElectronApp.window.webContents.openDevTools();
  }

  ElectronApp.window.on('closed', () => {
    ElectronApp.window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (ElectronApp.window === null) {
    createWindow();
  }
});
