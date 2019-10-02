var fs = require('fs')
var data = 'This data is ready to be wirted into the file.'
var writerStream = fs.createWriteStream('d:\\Workshop\\MyNodejs\\practices\\day1\\stream\\input2.txt')

writerStream.write(data, 'utf8')

writerStream.end()

writerStream.on('finish', function () {
    console.log('Writing is finish')
})

writerStream.on('error', function (err) {
    console.log(err)
})

console.log('Program Ended')