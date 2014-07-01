// HTTP server that receives only POST requests and converts incoming POST body character to upper-case
var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
    //take a chunk of data and return a chunk of data
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);


/*
 var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
 */
