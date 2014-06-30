var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
//console.log(buffer);
//var str = buffer.toString();
//var stra = str.split("\n");
//console.log(stra.length-1);
//
var content = buffer.toString();
var lines = content.split("\n").length - 1;
console.log(lines);
