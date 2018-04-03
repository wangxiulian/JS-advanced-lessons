if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//j:undefined
    var j = 10;
    console.log("j:",j);//j:10
}
foo();

console.log("i:",i);//i:0
console.log("j:",j);//报错
//等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//j:undefined
    j = 10;
    console.log("j:",j);//j:10
}
foo();

console.log("i:",i);//i:0
console.log("j:",j);//报错