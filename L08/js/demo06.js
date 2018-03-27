var foo = function (a,b){
    console.log(arguments);
    console.log(arguments === test.arguments);
    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);
/*
Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
Uncaught ReferenceError: test is not defined
    at foo (<anonymous>:3:31)
    at <anonymous>:8:1
*/


function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }

}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.



function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
console.log("没有调用的情况下test.caller为：",test.caller);
//没有调用的情况下test.caller为： null
test();
//test is called from the toppest level
function testOuter() {
    test();
}
//test is called from the function:
testOuter();
//function testOuter() {
//    test();
//}


var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();  //null
obj.foo2();
//ƒ abc(){
//        this.foo1();
//    }



var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
};
console.log(func(4));  
//24

(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));  
//24


function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();  //Hi,I'm Leo
console.log(li.sex);  //M

Man.prototype.isStrong = true;  //true
console.log(li.isStrong);  //true



var x = new String("Hello");
if (x.constructor == String){
    console.log("Object is a String.");
}
//Object is a String.

function MyObj() {
    this.number = 1;
}
var y = new MyObj();
if (y.constructor == MyObj){
    console.log("Object constructor is MyObj.");
}
//Object constructor is MyObj.



function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);//i'm: i can swim ___ 1 2
swim.call(me,3,4);//i'm:ABC i can swim ___ 3 4
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8
bird.fly.apply(me,[7,8]);//i'm:ABC i can fly ___ 7 8
swim.call(null,1,2);//i'm: i can swim ___ 1 2

swim.apply(me,[9,10]);//i'm:ABC i can swim ___ 9 10
bird.fly.apply(me,[11,12]);//i'm:ABC i can fly ___ 11 12
swim.apply(null,[13,14]);//i'm: i can swim ___ 13 14



var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)(); 
        //var fee = foo.bind(this); fee();    23
		foo();
    }
};
obj.test();
//23  45


var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};
var range = { minimum: 10, maximum: 20 };
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange (12);
console.log(result);
//true


var displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");
displayArgs2("b", "c");
//12 a b c


var foo = function () {
    console.log("foo");
};
console.log(foo.toString()," ___ ",typeof foo.toString());
console.log(foo.valueOf()," ___ ",typeof foo.valueOf());
/*
function () {
    console.log("foo");
}  ___  string
ƒ () {
    console.log("foo");
} " ___ " "function"
*/
console.log(foo.hasOwnProperty("toString"));//false
console.log(Object.prototype.hasOwnProperty("toString"));//true

console.log(foo.hasOwnProperty("valueOf"));//false
console.log(Object.prototype.hasOwnProperty("valueOf"));//true
