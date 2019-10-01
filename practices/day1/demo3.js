var http = require('http');

function startHttp() {    
    function onRequest(request, response) {
        console.log('request receive!');
        response.writeHead(200, {
            "Content-type": "text/plain"
        });
        response.write('helloworld');
        response.end();
    }

    http.createServer(onRequest).listen(8888);   
    console.log('Server started!');
}

exports.startHttp = startHttp;