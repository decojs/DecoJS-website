var connect = require("connect");

connect().use(connect.static(__dirname+"/www_source")).listen(80);