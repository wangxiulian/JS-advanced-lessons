var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);
console.log(typeof (a==b),a==b);
console.log(typeof (a<b),a<b);

var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);

var e = !23;
var f = !!34;
var g = !!{};
console.log(e,f,g);

var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
}

Boolean();
Number();
String();
Object();

console.log(123.456.toFixed(1));
console.log(123.456.toString());
console.log(123.456.toFixed());
console.log(123.456.toPrecision());
console.log(123.456.toExponential());

toString();
valueOf();