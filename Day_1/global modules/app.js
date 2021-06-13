var http = require('http');

var server = http.createServer(function(req,res){
    res.end("Welcome to virtual World");
})

server.listen(5000);