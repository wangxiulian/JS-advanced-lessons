"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct"
console.log(isStrictMode());
//false
//undefined