var http = require('http');

var server = http.createServer();

//绑定事件
server.on('request', function(res, rs) {
    console.log(res.method);
    rs.write('Hello');
    rs.end();
});

server.listen('8080',function () {
    console.log('127.0.0.1:8080 Server start')
});


