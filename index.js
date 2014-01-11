var server = require("./server");
var router = require("./router");
var requesthandler = require("./requesthandlers.js");

var handle = {}
handle["/"] = requesthandler.start;
handle["/start"] = requesthandler.start;
handle["/upload"] = requesthandler.upload;


server.start(router.route, handle);