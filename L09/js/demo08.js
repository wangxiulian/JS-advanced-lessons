console.log(a);//undefined
var a = 1;
console.log(a);//1
//等价
var a;
console.log(a);//undefined
a = 1;
console.log(a);//1


console.log(a,b);//1 undefined
var b = 23;
console.log(a,b);//1 23
var a = b;
console.log(a,b);//23 23


console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//{x:25} {x:25}


foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
//等价
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2



foo();
var foo = function(){
    console.log("foo");
};
//foo

console.log(foo);
/*
ƒ (){
    console.log("foo");
}
*/
var foo = function(){
    console.log("foo");
};
foo();//foo



AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
//AA_1
//AA_2
//等价
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
//AA_1
//AA_2