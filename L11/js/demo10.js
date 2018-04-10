for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
/*
Tue Apr 10 2018 19:26:27 GMT+0800 (中国标准时间) 0
Tue Apr 10 2018 19:26:28 GMT+0800 (中国标准时间) 1
Tue Apr 10 2018 19:26:29 GMT+0800 (中国标准时间) 2
Tue Apr 10 2018 19:26:30 GMT+0800 (中国标准时间) 3
Tue Apr 10 2018 19:26:31 GMT+0800 (中国标准时间) 4
*/