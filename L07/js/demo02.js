function test1() {
    console.log("this is",this);
}
test1();
//this is
//window

function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();  
//this is
//window

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();  //23 {name: "obj", x: 23, test: ƒ}

var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;
obj.sayHi();  //Hi，i'm obj

var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());
//ƒ fun2() {
//        return this.x;//若改为 return this;
//    }
console.log(obj.fun3()());  //1
console.log(obj.fun4());  //23

objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();  //AA
objA.foo.call(objB);  //BB

var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);  //i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);  //i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);  //i'm:ABC i can fly ___ 7 8


function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);
//(5) [1, 2, 3, "4", 5]
//undefined

function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();
//Hi,i'm Jack