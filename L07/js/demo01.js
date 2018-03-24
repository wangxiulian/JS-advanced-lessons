function max(a,b){
    return a>b?a:b;
}
max(2,3);  //3

var max = function (a,b){ 
    return a>b?a:b;
};
max(2,3);  //3

var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);
//console.trace
//max	
//(anonymous)	
//3

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);
//console.trace
//min
//(anonymous)
//2

var max = new Function("a","b","return a>b?a:b");
max(2,3);  //3