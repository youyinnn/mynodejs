var http = require('http')
var url = require('url')

function onRequest(request, response) {
    var path = url.parse(request.url).pathname
    console.log('request for '+ path);
    response.writeHead(200, {
        "Content-type": "text/plain"
    });
    response.write('helloworld');
    response.end();
}

http.createServer(onRequest).listen(8888);


console.log('Server started!');