Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
//Infinity

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));
/*VM41:2 12345.68
VM41:3 1.2e+4
VM41:4 12345.6789
VM41:5 1.23e+4
undefined*/

console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));
/*VM43:1 false
VM43:2 true
VM43:3 3
VM43:4 -4
VM43:5 4
VM43:6 -3
VM43:7 -3
VM43:8 -3
VM43:9 -4
undefined*/