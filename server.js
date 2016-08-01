//var http = require("http");
var express = require("express");
var app     = express();
var path    = require("path");


//app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});



// app.get('/jsSignals',function(req,res){
//   res.sendFile(path.join(__dirname+'/jsSignals.js'));
// });

app.listen(3000);

console.log("Running at Port 3000");