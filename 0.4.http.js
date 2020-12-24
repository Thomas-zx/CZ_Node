var http = require('http');
var fs = require('fs');

var server = http.createServer();

//绑定事件
server.on('request', function(res, rs) {
    console.log(res.method); //使用什么样的方式发送的请求
    if (res.method == 'GET') {
        console.log("GET请求");

        //rs.setHeader('Content-type', 'text/plain;charset=utf-8');  //设置头信息
        //rs.write('Hello，GET请求');  //返回数据给浏览器
        //rs.end();

        //rs.setHeader('Content-type', 'text/html;charset=utf-8');
        //rs.end('<html><body><div><h1>H1标签</h1><h2>H2标签</h2></div></body></html>');

        //响应一个完整的html页面
        rs.setHeader('Content-type', 'text/html;charset=utf-8');
        fs.readFile('./index.html', 'utf8', function (err, data) {
            rs.end(data);
        })
    } else if (res.method == 'POST') {
        console.log("POST请求");
    }
});

server.listen('8080',function () {
    console.log('127.0.0.1:8080 Server start')
});
