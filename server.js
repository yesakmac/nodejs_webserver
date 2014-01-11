var http = require('http');
var url = require("url");

function start(route, handle) {
function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log ("Request for " + pathname + " recieved.");
    
    route(handle, pathname, response);
    
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  //var content = route(handle, pathname);
 // response.write(content);
  //  response.end();
}
    
http.createServer(onRequest).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
}

exports.start = start;