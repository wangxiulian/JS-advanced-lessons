var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500 20 200 600

var a = 10,
    b = 20;
function fn(){
    var a = 100,
        c = 200;
    function bar(){
        var a = 500,
            d = 600;
    }
    bar();
    console.log(a,b,c,d);
}
fn();
//报错

var a = 10,
    b = 20;
function fn(){
    var a = 100,
        c = 200;
    function bar(){
        var a = 500;
            d = 600;
    }
    bar();
    console.log(a,b,c,d);
}
fn();
//100 20 200 600


