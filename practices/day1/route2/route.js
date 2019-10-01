function route(handle, pathname, response) {
    console.log('Router handling...')
    var rs = {}
    if (typeof handle[pathname] === 'function') {
        rs = handle[pathname]()
    } else {
        rs.code = 404
        rs.str = '404 Not Found.'
    }
    response.writeHead(rs.code, {
        'Content-Type': 'text/plain'
    })
    response.write(rs.str)
}

exports.route = route