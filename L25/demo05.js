//再谈事件响应与事件流
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);
    div3.addEventListener("click",function (e) {
        console.log("div3 click");
    },false);

    /*
    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    */
   
}
