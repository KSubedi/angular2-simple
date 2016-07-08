/*
Simple static file server that will send index.html if the file is not found. Useful for developing angular apps.
*/ 

var express = require("express");
var app = express();

var PORT = 3000;

app.use(express.static("dist"));

app.use((req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(PORT, function () {
  console.log("Angular App Is Running on port " + PORT + "!");
  console.log("Open http://localhost:" + PORT + "/ on your browser!");
});