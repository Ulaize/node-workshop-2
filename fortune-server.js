//Fortune server
var fortuneTeller = require('./library/fortune');
var http = require('http');


var requestListener = function (req, res) {
  res.writeHead(200);
  res.end(fortuneTeller.getGetFortune());
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT, process.env.IP);
