23;  //23

obj = {x:2};  //{x: 2}
arr = [1,2];  //(2) [1, 2]

var foo = function(){ 
    console.log("foo");
};
obj.x;  //2
foo();  //VM66:2 foo undefined

2+3;  //5
2>3;  //false
1&&2;  //2

var a=2,b=3;
if(a>b){
    console.log("a > b");
}else{
    console.log("a < b");
}
//VM76:5 a < b
//undefined

function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);
console.log("a:",a);
//VM78:5 b: 3
//VM78:6 a: 2
//undefined

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);
/*VM80:2 in for  0
VM80:2 in for  1
VM80:2 in for  2
VM80:2 in for  3
VM80:2 in for  4
VM80:4 out for  5
undefined*/