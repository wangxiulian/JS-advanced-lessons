var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack



var x = "outside f1";
var f1 = function () {
    console.log(x);
};
f1();//outside f1
console.log(x);//outside f1


var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();//局部
console.log(y);//报错

var f2 = function () {
    //var y = "局部";
    y = "全局";
    console.log(y);
};
f2();//全局
console.log(y);//全局



if(true){
    var z = 23;
}
console.log(z);//23

if(true){
    (function () { 
        var z = 23;
    }());           
}
console.log(z);//23