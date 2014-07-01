// HTTP JSON API server
var http = require('http');
var url = require('url');

/*
 * servers JSON data when receives
 * GET '/api/parsetime'
 * request may contain query-string 'iso':ISO-format time
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z
 * 
 * JSON response:
 * {
 *  "hour": 14,
 *  "minute": 23,
 *  "second": 15
 * }
 *
 * /api/unixtime
 * { "unixtime": 1376136615474 }
 */

var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true); 
    var path = urlObj.pathname;
    var isoTime;
    res.writeHead(200, { 'Content:Type': 'application/json' });
    if(path === '/api/parsetime') {
        if(urlObj.query.iso) {
            isoTime = urlObj.query.iso;
            //get date from iso time format
            var date = new Date(isoTime);
            //turn into json
            var json = JSON.stringify(
                {
                    'hour': date.getHours(),
                    'minute': date.getMinutes(),
                    'second': date.getSeconds()
                });
            res.end(json);//respond
        }
    }
    else if (path === '/api/unixtime') {
        if(urlObj.query.iso) {
            isoTime = urlObj.query.iso;
            res.end(JSON.stringify(
                    {
                        'unixtime': new Date(isoTime).getTime()
                    }));
        }
    }
});

server.listen(port);


/*
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

 
 */

