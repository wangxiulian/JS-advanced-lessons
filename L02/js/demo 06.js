var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));
console.log(parseFloat("23.456xy"));
console.log(parseInt === window.parseInt);
console.log(parseFloat === window.parseFloat);

console.log(Math.ceil(a2));
console.log(Math.floor(a2));
console.log(Math.round(a2));
a3 = 5e2;
console.log(a3);
console.log(typeof Math);

var x = Number("xis021");
console.log(x);
isNaN(x);
typeof NaN;

console.log(Math.log(-1));
console.log(Math.acos(2));
console.log(NaN === NaN);

var y1 = 2/0;
console.log(y1);
var y2 = -2/0;
console.log(y2);
isFinite(y2);
isFinite(23);

var z1 = 1/Infinity;
console.log(z1);
var z2 = -1/Infinity;
console.log(z2);