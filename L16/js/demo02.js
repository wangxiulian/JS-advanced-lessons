function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();
//undefined

//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();
//false