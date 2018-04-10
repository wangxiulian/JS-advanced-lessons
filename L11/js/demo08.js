function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[0]();//10
tmp[1]();//10
tmp[2]();//10
tmp[6]();//10
tmp[9]();//10


function f(){
    var getNumFuncs = [];
    var i=0;
    for(;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[0]();//10
tmp[1]();//10
tmp[2]();//10
tmp[5]();//10
tmp[9]();//10


function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[1]();//1
tmp[2]();//2
tmp[3]();//3
tmp[6]();//6
tmp[8]();//8
tmp[9]();//9


function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//9
tmp[9]();//9