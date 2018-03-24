var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;
    console.trace("a:",a," x:",x);
}
console.trace("a:",a);
//a:1
foo(a);
//a:1  x:1
//a:1  x:2
console.trace("a:",a);
//a:1


var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);
}

console.trace("obj.x :",obj.x);
//obj.x : 1
fee(obj);
//obj.x : 1  o.x : 1
//obj.x : 3  o.x : 3
console.trace("obj.x :",obj.x);
//obj.x : 3