/*
Simple static file server that will send index.html if the file is not found. Useful for developing angular apps.
*/ 

var app = require("express")();

app.use(express.static("dist"));

app.use((req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(3000, function () {
  console.log('Angular App Is Running!');
});