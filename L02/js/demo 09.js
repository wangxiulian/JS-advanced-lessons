var obj = {x:1,y:2};
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype);

var arr = [1,2,3,4,5];
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

function foo() {
	console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);
console.log(foo.__proto__.__proto__ === Object.prototype);

console.log(obj instanceof Object);
console.log(arr instanceof Object);
console.log(foo instanceof Object);
console.log(foo === window.foo);

for(var k in obj){
    console.log(k,obj[k]);
}

console.log(Object.keys(obj));

console.log("x" in obj);

for(var k in foo){
    console.log(k,foo[k]);
}
console.log("call" in foo);
console.log("apply" in foo);
console.log("arguments" in foo);