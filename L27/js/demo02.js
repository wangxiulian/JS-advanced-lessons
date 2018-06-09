//变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
console.log("i：",i);
/*
i： 3
undefined
Sat Jun 09 2018 21:05:24 GMT+0800 (中国标准时间) 3
Sat Jun 09 2018 21:05:25 GMT+0800 (中国标准时间) 3
Sat Jun 09 2018 21:05:26 GMT+0800 (中国标准时间) 3
*/

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
/*
undefined
Sat Jun 09 2018 21:06:22 GMT+0800 (中国标准时间) 0
Sat Jun 09 2018 21:06:23 GMT+0800 (中国标准时间) 1
Sat Jun 09 2018 21:06:24 GMT+0800 (中国标准时间) 2
*/