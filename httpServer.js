/*
 * HTTP File Server
 */
var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLoc = process.argv[3];

//callback got called once for each connection received
var server = http.createServer(function(req, res) {
    //req - request - fetch properties like header & query-string
    //res - response - sending data to client
    var src = fs.createReadStream(fileLoc);    
    //pipe src to dst - connect filesystem stream with HTTP response stream
    src.pipe(res);
});

server.listen(port);

/*
    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/
