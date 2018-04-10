(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
//the max is 3

(function (x,y){ 
    console.log("the min is",x<y?x:y);
})(2,3);
//the min is 2


(function() {
    console.log("111");
})();
//111
(function () {
    console.log("222");
})()
//222


var i = function(){
    return 10;
}(); 
//undefined


true && function(a,b){
    return a>b?a:b;
}(5,9);
//9


!function(x,y){
    return x==y?true:false; 
}("5",5);
//false

!function(){return 2; }(); 
//false

!function(){return 0; }();
//true