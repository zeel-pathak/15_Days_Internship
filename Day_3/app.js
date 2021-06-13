var http = require('http');

http.createServer(function(req,res){
    res.end("Welcome to Node Js       gfgsdff");
}).listen(5000);
console.log("Server is started on port 5000");