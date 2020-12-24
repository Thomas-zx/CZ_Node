var fs = require('fs');

fs.readdir('./', 'utf8', function (err, data) {
    var data_arr = [];
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        data_arr[i] = {};
        (function (i) {  //回调函数里使用外部数据，使用自调用匿名函数保持数据
            fs.stat(data[i], function (fsStatErr, fsStatData) {
                //console.log(fsStatData.size);
                //console.log(data[i]);  //异步导致i丢失
                count++;
                if (fsStatData.isFile()) {
                    data_arr[i].type = 'f';
                }
                data_arr[i].name = data[i];
                data_arr[i].size = fsStatData.size;
                data_arr[i].mtime = fsStatData.mtime;
                if (count == data.length) {
                    //回调结束
                    console.log(data_arr);
                }
            });
        })(i);
    }
});

/*
var arr = ['a', 'b', 'c'];

//自调用的匿名函数
for (var i = 0; i < arr.length; i++) {
    (function (i) {  //形成新的作用域
        setTimeout(function () {
            console.log(arr[i]);
        }, 1000);
    })(i);  //调用传参
}
*/
