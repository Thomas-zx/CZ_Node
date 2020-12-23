var fs = require('fs');

fs.readFile('./demo.txt', 'utf8', function(err, data) {
    console.log(err);
    console.log(data);
});
