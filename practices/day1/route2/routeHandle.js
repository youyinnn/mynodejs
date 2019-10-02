var exec = require("child_process").exec;

function face(response) {
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(10000);
    // response.write('face')
    // response.end()

    console.log("Request handler 'face' was called.");

    exec("ls -lah",
      { timeout: 10000, maxBuffer: 20000*1024 },
      // eslint-disable-next-line no-unused-vars
      function (error, stdout, stderr) {
        response.write(stdout);
        response.end();
      });
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