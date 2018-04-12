function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();
//<div></div>


function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);
//myDiv Closure is Create


var db = (function() {
    var data = {};
    return function(key, val) {
        if (val === undefined) { return data[key] } // get
        else { return data[key] = val } // set
    };
})();

db('x'); //undefined
db('x', 1); //1
db('x'); //1


(function () {
    var m = 0;
    function getM(){
        return m;
    }
    function setM(val){
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();
//100


function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());//2

