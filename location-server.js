//Location server AIzaSyDtEGHKLUczLAayBS3ZPHMr5AgHpREqWYQ  headers.URL

var request = require('request');
var prompt = require('prompt');
var http = require('http');


var requestListener = function (cReq, cRes) {
        
        var slug ="montreal";
       // var slug = req.url.substring(1);

        console.log(cReq);
        var locationRquested ="https://maps.googleapis.com/maps/api/geocode/json?address=" + slug + "&key=AIzaSyDtEGHKLUczLAayBS3ZPHMr5AgHpREqWYQ";
        request(locationRquested, function(err, res, body) {
                var googleInfo = JSON.parse(body);
                
                var x = googleInfo.results[0].geometry.location.lat;

                var y = googleInfo.results[0].geometry.location.lng;

                
                cRes.writeHead(200);
                cRes.end("Your location:"+x+y);

        })
    
}

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);
