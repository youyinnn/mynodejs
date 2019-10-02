function route(handle, pathname, response) {
    console.log('Router handling... ' + pathname)
    if (typeof handle[pathname] === 'function') {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        handle[pathname](response)
    } else {
        var rs = {}
        rs.code = 404
        rs.str = '404 Not Found.'
        response.writeHead(rs.code, {
            'Content-Type': 'text/plain'
        })
        response.write(rs.str)
        response.end()
    }
}

exports.route = route