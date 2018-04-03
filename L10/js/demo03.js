{
    var a = 4;
}
console.log(a);
//4


var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};
/*
ƒ () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
*/
var a=2,b=3;
if(a<b){
    var userId = 234;
}
//undefined



var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//undefined
