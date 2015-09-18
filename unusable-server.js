//The unusable server

// Second server with setTimeout - Hello World

var http = require('http');
var requestListener = function (req, res) {
    
    var start = new Date().getTime();
    while (new Date().getTime() - start < 10000){
        res.writeHead(200);
        res.end('Hello, World!\n');
    }
}


var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);


