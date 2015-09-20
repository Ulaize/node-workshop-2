//Synonym server API  6652bf154c2c8f63098f4df13f50ef9f



var request = require('request');
var http = require('http');


var requestListener = function (cReq, cRes) {

        var slug = cReq.url.substring(1);
        console.log(slug);
   
        var wordRequested ="http://words.bighugelabs.com/api/2/6652bf154c2c8f63098f4df13f50ef9f/" + slug +"/json";
        console.log(wordRequested);
        request(wordRequested, function(err, res, body) {
                var synonyms = JSON.parse(body);
                console.log(synonyms);
                cRes.writeHead(200);
                cRes.end(synonyms);
        
        });

}

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);