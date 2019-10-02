var fs = require('fs')
var data = ''

// create a readable stream
var readerStream = fs.createReadStream('d:\\Workshop\\MyNodejs\\practices\\day1\\stream\\input.txt')

readerStream.setEncoding('utf8')

readerStream.on('data', function (chunk) {
    data += chunk
})

readerStream.on('end', function () {
    console.log(data)
})

readerStream.on('error', function (err) {
    console.log(err)
})

console.log('Process End')