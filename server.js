var express = require("express");

express().use(express.static(__dirname+"/www")).listen(80);