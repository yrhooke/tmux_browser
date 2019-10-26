const { app, BrowserWindow } = require('electron')
let mainWindow // saves a global reference to mainWindow so it doesn't get garbage collected

console.log(app);
function initialize() {

    // This will create our app window, no surprise there
    function createWindow() {
        mainWindow = new BrowserWindow({
            width: 1024,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        })

        // display the index.html file
        mainWindow.loadURL(`file://${__dirname}/index.html`)

        // open dev tools by default so we can see any console errors
        mainWindow.webContents.openDevTools()

        mainWindow.on('closed', function () {
            mainWindow = null
        })
    }

    app.on('ready', () => {
        createWindow()
    })

    /* Mac Specific things */

    // when you close all the windows on a non-mac OS it quits the app
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        if (mainWindow === null) {
            createWindow()
        }
    })

}

initialize()