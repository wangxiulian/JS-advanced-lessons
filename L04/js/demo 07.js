"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct"
console.log(isStrictMode());
//false
//undefined

var str = "abc";
var strDescriptor = Object.getOwnPropertyDescriptor(window,"str");
console.log(strDescriptor);
//{value: "abc", writable: true, enumerable: true, configurable: false}
//undefined

function  sloppyFunc() {
    str.length = 7;
    //console.log(Object.getOwnPropertyDescriptor(str,"length"));
    console.log(str.length);//
}
sloppyFunc();
//3
//undefined

function  strictFunc() {
    'use strict';
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    str.length = 7;
    console.log(str.length);
}
strictFunc();
/*{value: 3, writable: false, enumerable: false, configurable: false}
Uncaught TypeError: Cannot assign to read only property 'length' of string 'abc'
    at strictFunc (<anonymous>:4:16)
    at <anonymous>:7:1*/

delete foo;
delete window.foo;
//false

'use strict';
delete foo;
delete window.foo;
//Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);
console.log(pair[0]);
console.log(pair[1]);
//42
//17
//undefined