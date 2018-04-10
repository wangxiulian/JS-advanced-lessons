var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
/*
ƒ () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
}
*/

(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//undefined


(function () { 
    var x = 10;
    document.onclick = function () {
        // console.log("x = ",x);
        alert("x = "+x);
    };
})();           
// undefined