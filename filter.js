var fs = require('fs');
var path = require('path');

//var dir = process.argv[2];
//var ext = "." + process.argv[3];

module.exports = function (dir, ext, callback) {
    var filesArr = [];
    ext = '.' + ext;
    fs.readdir(dir, function (err, files) {
        if (err) 
            return callback(err);
        files.forEach(function(file) {
            if(path.extname(file) == ext) {
                filesArr.push(file);
            }
        });
        callback(null, filesArr);
    });
};
