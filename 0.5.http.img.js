var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (res, rsp) {
    console.log(res.url);
    var urls = res.url;
    rsp.setHeader('Content-type', 'text/html;charset=utf-8');
    if (urls == '/') {
        fs.readFile('./index.html', 'utf8',function (err, data) {
            rsp.end(data);
        })
    } else {
        //响应其他静态资源
        fs.readFile('.' + urls, function (err, data) {
            rsp.end(data);
        })
    }
});

server.listen('8080', function () {
    console.log('127.0.0.1:8080 Server start');
});
