var express = require("express");

var app = express();

app.use(function(req, res, next){
  if('_escaped_fragment_' in req.query){
    console.log('_escapted_fragment');
    var path = req.query['_escaped_fragment_'];
    console.log(path);
    if(path[0] == '/') path = path.substr(1);
    if(path[path.length-1] == '/') path += 'index';
    path += '.html';
    req.url = '/snapshot/'+path;
    console.log(req.url);
  }

  next();
})

app.use(express.static(__dirname+"/www"));

app.listen(8080);