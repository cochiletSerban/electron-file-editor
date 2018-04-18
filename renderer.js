const app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
var $ = require('jQuery');

var fileName;
var text;
var click=0;

$("#comment").val("input file name");
$("#pl").click( () => {

	click++;
	console.log(click);
	if(click==1)
	{
		fileName = $("#comment").val();
		$("#comment").clear;
		$("#comment").val("input text");
	}
 	if(click==2)
 	{
		text = $("#comment").val();
 		fs.writeFile(fileName, text,(err)=>
 		{
 			if(err) alert('cacat');
 			else alert("file created");
 		})
 	}
})