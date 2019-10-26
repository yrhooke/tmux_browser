'use strict'
const Elm = require('./elm.js')

// get a reference to the div where we will show our UI
let container = document.getElementById('container')
console.log("here");

// start the elm app in the container
// and keep a reference for communicating with the app
let tmux_browser = Elm.Main.embed(container)
