var fs = require('fs');

fs.readFile('./demo.txt', 'utf-8', function (err, data) {
    if (!err) {
        data += '\n' + 'writeFile';
        fs.writeFile('./demo.txt', data, 'utf8', function(err) {
            if (!err) {
                console.log("write done");
            }
        });
    }
});
