function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});//13
add(2,-3,Math.abs);//5
add(2,3,Math.sqrt);//3.1462643699419726


function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4


var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2=function(){console.log(this.word_2)};
//do something.
function_1(function_2);
//do another thing.


function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); 
// (9)[1, 4, 9, 16, 25, 36, 49, 64, 81]


var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}
//number

var arr = [1, 3, 5, 7, 9];
arr.reduce(function f(x, y) {
    return x + y;
}); 
// 25


var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; 
// (4)[1, 5, 9, 15]


var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); 
// (4)[1, 2, 10, 20]


var timeOutId = setTimeout( function () {
    console.log("你已超时！");
},1000);
//你已超时！
clearTimeout(timeOutId);
//undefined


var timeInterval = setInterval(function () {
    console.log("Hi");
},1000);
//Hi
clearInterval(timeInterval);
//undefined


document.addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
    console.log("click callback");
});
//undefined



var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
/*
输出： ƒ fun2() {
        return this.x;//若改为 return this;
    }
*/
console.log("输出：",obj.fun3()());
//输出: 12
console.log("输出：",obj.fun4());
//输出: 34

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this;//
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
/*
输出： ƒ fun2() {
        return this;
    }
*/
console.log("输出：",obj.fun3()());
//输出： Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
console.log("输出：",obj.fun4());
//输出： {x: 34, fun2: ƒ, fun3: ƒ, fun4: ƒ}