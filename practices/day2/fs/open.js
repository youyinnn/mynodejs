var fs = require('fs')

// Asynchronous open file 
// fs.open(path, flags[, mode], callback)
var filepath = 'D:\\Workshop\\MyNodejs\\practices\\day1\\fs\\demo.txt'
fs.open(filepath, 'r+', function (err, fd) {
    if (err) {
        console.error(err)
    } else {
        console.log('Open file successfully')
    }
})

fs.stat(filepath, function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");
    
    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());    
 });
 
 