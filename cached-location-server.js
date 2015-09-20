//Location server AIzaSyDtEGHKLUczLAayBS3ZPHMr5AgHpREqWYQ  headers.URL

var request = require('request');
var http = require('http');

var cachedRequest =[];
var cachedLocation=[];

var requestListener = function (cReq, cRes) {
        
        if (cReq.url !== "/favicon.ico"){
                for (var i=0; i< cachedLocation.length; i++){
                        var slug = cReq.url.substring(1);
                        if(cachedRequest[i]===slug){
                                cRes.writeHead(200);
                                cRes.end(cachedLocation[i]+ ". This is a cached response");
                        }
                        else {
                                cachedRequest.push(cReq.url.substring(1));
                                var locationRquested ="https://maps.googleapis.com/maps/api/geocode/json?address=" + slug + "&key=AIzaSyDtEGHKLUczLAayBS3ZPHMr5AgHpREqWYQ";
                                request(locationRquested, function(err, res, body) {
                                        var googleInfo = JSON.parse(body);
                                        var x = googleInfo.results[0].geometry.location.lat;
                                        var y = googleInfo.results[0].geometry.location.lng;
                                        cachedLocation.push("Your location is : " + x + " " +y);
                                        
                                        cRes.writeHead(200);
                                        cRes.end("Your location: "+x+y + ". This is a fresh response");
                                        
                                });
                                    
                                

                        }
                }
               
        }
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);
