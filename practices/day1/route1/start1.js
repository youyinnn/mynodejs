var http = require('http')
var url = require('url')

function start(route) {
    function onRequest(request, response) {
        var path = url.parse(request.url).pathname
        console.log('request for '+ path);

        route(path)

        response.writeHead(200, {
            "Content-type": "text/plain"
        });
        response.write('hello World');
        response.end();
    }

    http.createServer(onRequest).listen(8888)
    console.log('Server started!')
}

exports.start = start