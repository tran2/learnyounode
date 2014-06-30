var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (res) {
    
    res.pipe(bl(function (err, data) {
        if(err) {
            console.log(err);
            return;
        }
        data = data.toString()
        console.log(data.length);
        console.log(data);
    }));
});
