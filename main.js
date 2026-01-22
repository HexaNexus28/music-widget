// main.js
import { app, BrowserWindow, session } from 'electron';
import * as path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });

    // Configuration des permissions
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

    // Charger l'URL de développement Vite
    if (process.env.NODE_ENV === 'development') {

        mainWindow.loadURL('http://localhost:5177');
        mainWindow.webContents.openDevTools();
    } else {
        ;
        mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));
    }

    mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(() => {
    // Configuration de la session pour permettre les iframes YouTube
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
        const allowedPermissions = ['autoplay', 'fullscreen', 'accelerometer', 'gyroscope'];
        if (allowedPermissions.includes(permission)) {
            callback(true);
        } else {
            callback(false);
        }
    });

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});