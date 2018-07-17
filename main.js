const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on("ready", ()=>{
    console.log('App is now ready');
    new BrowserWindow({});
});