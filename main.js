'use strict';
const {app, BrowserWindow} =  require('electron');
const path = require('path');
const url = require('url');
require('electron-reload')(__dirname);
let win;

function createWin(){
	win = new  BrowserWindow({width:800,height:400});
	win.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	win.on('close',() => {
		win=null;
	})
}

app.on('ready',createWin);