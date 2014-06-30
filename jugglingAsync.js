var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var result = [];
var total = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function(res) {
        res.pipe(bl(function (err, data) {
            if(err)
                return console.error(err);
            result[index] = data.toString();
            total++;

            if(total == 3) {
                printResults();
            }
        }));
    });
}

for(var i = 0; i < 3; i++) {
    httpGet(i);
}

/*
function printResult(){
    if(total >= 3) {
        for(var i = 0; i < 3; i++) {
            console.log(result[i]);
        }
    }
}

http.get(url1, function(res) {
    res.pipe(bl(function (err, data) {
        if(err) {
            return console.error(err);
        }
        data = data.toString();
        result[0] = data;
        total++;
        printResult();
    }));
});

http.get(url2, function(res) {
    res.pipe(bl(function (err, data) {
        if(err) {
            return console.error(err);
        }
        data = data.toString();
        result[1] = data;
        total++;
        printResult();
    }));
});

http.get(url3, function(res) {
    res.pipe(bl(function (err, data) {
        if(err) {
            return console.error(err);
        }
        data = data.toString();
        result[2] = data;
        total++;
        printResult();
    }));
});
*/


