var filter = require('./filter.js');

var dir = process.argv[2];
var ext = process.argv[3];

var files = filter(dir, ext, function (err, data) {
    if(err) throw err;
    for(var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});
