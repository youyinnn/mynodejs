function face(response) {
    console.log("Request handler 'face' was called.");
    setTimeout(() => {
        response.write('face')
        response.end()
    }, 10000);

}

function upload(response) {
    // response.write('upload')
    // response.end()
    console.log("Request handler 'upload' was called.");
    response.write("Hello Upload");
    response.end();
}

exports.face = face
exports.upload = upload