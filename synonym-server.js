//Synonym server API Key 6652bf154c2c8f63098f4df13f50ef9f

var request = require('request');
var http = require('http');


var requestListener = function (cReq, cRes) {
     
        var slug = cReq.url.substring(1);
        if (cReq.url !== "/favicon.ico"){
                var wordRequested ="http://words.bighugelabs.com/api/2/6652bf154c2c8f63098f4df13f50ef9f/" + slug +"/json";
                request(wordRequested, function(err, res, body) {
                           if (err) {
                                cReq.writeHead(200);
                                cReq.end('There was an error: ' + err);           
                            }
                            else{
                                var synonyms = JSON.parse(body);
                                var verbs = synonyms.verb.syn.join();
                                var nouns = synonyms.noun.syn.join();
                                var adjectives = synonyms.adjective.syn.join();
                                var adverbs = synonyms.adverb.syn.join();
                                
                                if (synonyms) {
                                    cReq.writeHead(200);
                                    cReq.write("Here are your synonyms:");
                                    
                                    if(synonyms.hasOwnProperty("verb")){
                                        cReq.write("\n\nVerbs:  " + verbs);
                                    }
                                    if(synonyms.hasOwnProperty("noun")){
                                        cReq.write("\n\nNouns:  " + nouns);
                                    }
                                    if(synonyms.hasOwnProperty("adjective")){
                                        cReq.write("\n\nAdjectives:  " + adjectives);
                                    } 
                                    if(synonyms.hasOwnProperty("adverb")){
                                        cReq.write("\n\nAdverbs:  " + adverbs);
                                    } 
                                    cReq.end("\n ");
                                 
                                }
                                else {
                                    cReq.writeHead(200);
                                    cReq.end('Sorry. We did not get any results');   
                                }
                                
                            }
                });
        }
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);



    
                    