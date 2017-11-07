const express = require('express');

const port = 8080;
const host = "127.0.0.1";

const app = express();

app.get('/', function(req, res){
	res.send("Hello");
});

app.listen(port, function(){
	console.log("Node is listening");
});