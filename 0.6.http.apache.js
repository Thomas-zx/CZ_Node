var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    //console.log(request.url);
    var urls = request.url;
    if (urls == '/') {
        fs.readFile('./apache.html', 'utf8', function (err, data) {
            response.end(data);
        })
    } else if (request.url == '/file_list') {
        fs.readdir('./', 'utf8', function (err, data) {
            //response.end(JSON.stringify(data));
            var file_arr = [];
            var count = 0;
            for (var i = 0; i < data.length; i++) {
                file_arr[i] = {};
                (function(i) {
                    fs.stat(data[i], function (fsStatErr, fsStatDate) {
                        //console.log(fsStatDate.size);
                        if (fsStatDate.isFile()) {
                            file_arr[i].type = 'f';
                        } else {
                            file_arr[i].type = 'd';
                        }
                        count++;
                        file_arr[i].name = data[i];
                        file_arr[i].size = fsStatDate.size;
                        file_arr[i].mtime = fsStatDate.mtime;
                        if (count == data.length) {
                            console.log(file_arr);
                            response.end(JSON.stringify(file_arr));
                        }
                    })
                })(i);
            }
        })
    } else {
        fs.readFile('.' + urls, function (err, data) {
            response.end(data);
        })
    }
});

server.listen('8080', function () {
    console.log('127.0.0.1:8080 Server start');
});
