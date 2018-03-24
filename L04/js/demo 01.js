//part1
var a = [1,2,3];
var b = a;
console.log(a,b);
b.pop();
console.log(a,b);
b = [4,5,6];
console.log(a,b);
//(3) [1, 2, 3] (3) [1, 2, 3]
//(2) [1, 2] (2) [1, 2]
//(2) [1, 2] (3) [4, 5, 6]

//part2
function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);
//(4) [1, 2, 3, 4]

//Part3
function foo(x) {
    x.push(4);
    //console.log(x);
    x.length = 0;
    x.push(5,6,7,8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);
// (4) [5, 6, 7, 8]
//undefined

var max = function (x,y) {
    return x>y?x:y;
};
{
    foo:max(2,3)
}
//3

var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}
//123
//456
//3