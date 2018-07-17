const electron = require('electron');
const url = require('url');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

app.on("ready", ()=>{
    console.log('App is now ready');
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }));
});

ipcMain.on('video:submit', (event, path)=>{
    ffmpeg.ffprobe(path, (err, metadata) =>{
        console.log('Video duration is: ', metadata.format.duration);
        mainWindow.close();
    });
});