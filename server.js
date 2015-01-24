var express = require("express");

var app = express();

app.use(function(req, res, next){
  if('_escaped_fragment_' in req.query){
    var match = /^(\/??)(.*?)(\/?)$/.exec(req.query['_escaped_fragment_']);
    if(match){
      res.redirect([
        '/snapshot/',
        match[2],
        (match[3] ? '/index' : ''),
        '.html'
      ].join(''));
      return;
    }
  }
  
  next();
})

app.use(express.static(__dirname+"/www"));

app.listen(8080);