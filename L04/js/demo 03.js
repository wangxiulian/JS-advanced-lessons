{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

//VM82:4 大括号外依然能访问到a: 20
//undefined

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);

if(true){
    var a = 20;
}
console.log(a);
/*VM84:2 in for  0
VM84:2 in for  1
VM84:2 in for  2
VM84:2 in for  3
VM84:2 in for  4
VM84:4 out of for  5
VM84:9 20
undefined*/

if(false){
    var b = 30;
}
console.log(b);
//VM86:4 3
//undefined