var event = require('events')
var eventEmitter = new event.EventEmitter()

var connentHandler = function connected() {
    console.log('connection successful')
    
    // fire the date receieved event
    eventEmitter.emit('data receieved')
}

// bind the connection event with eventEmitter
eventEmitter.on('connection', connentHandler)

eventEmitter.on('data receieved', function () {
    console.log('data receieved successful')
})

eventEmitter.emit('connection')
eventEmitter.emit('connection')

console.log('End')
