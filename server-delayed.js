// Second server with setTimeout - Hello World

var http = require('http');
var requestListener = function (req, res) {
    
  setTimeout(function(){

      res.writeHead(200);
      res.end('Hello, World!\n');
      
      
  }, 10000);
}


var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);

