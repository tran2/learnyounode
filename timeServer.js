// TCP time server
// server listens to TCP connections on the port provided by he first arg
var net = require('net');

var port = process.argv[2]; //get the port provided

function addLeadingZero(number) {
    if(number < 10)
        number = '0' + number;
    return number;
}
//YYYY-MM-DD hh:mm
function formatDate(date) {
    //month starts as 0
    var month = date.getMonth() + 1;
     
    var d = date.getFullYear() + '-' + 
                addLeadingZero(month) + '-' +
                addLeadingZero(date.getDate()) + ' ' + 
                addLeadingZero(date.getHours()) + ':' +
                addLeadingZero(date.getMinutes());
    return d;
}


// TCP server
// the callback is called every time connection is received
var server = net.createServer(function (socket) {
    // socket can be read from and written to
    var data = formatDate(new Date());
    socket.write(data);
    socket.end('\n');
    //can use socket.end(data);
});

server.listen(port);
//console.log('server litens on port: ' + port);
//
/*
 
    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

*/

