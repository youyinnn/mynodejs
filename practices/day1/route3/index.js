var server = require('./server')
var route = require('./route')
var routeHandle = require('./routeHandle')

var handle = {}
handle['/'] = routeHandle.face
handle['/index'] = routeHandle.face
handle['/upload'] = routeHandle.upload

server.start(route.route, handle)