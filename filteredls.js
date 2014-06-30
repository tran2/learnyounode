var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = "." + process.argv[3];
//console.log(dir +" "+ ext);
fs.readdir(dir, function (err, files) {
    if (err) throw err;
/*    for (var x in files){
        //console.log(path.extname(files[x]));
        if(path.extname(files[x]) == ext) {
            console.log(files[x]);
        }
    }
    */
    files.forEach(function(file) {
        if(path.extname(file) == ext) {
            console.log(file);
        }
    });
});
