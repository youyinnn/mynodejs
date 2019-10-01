var server = require('./start1')
var router = require('./router1')

server.start(router.route);