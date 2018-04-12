window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        // var li = document.createElement("li");//闭包，单例模式
        // ol.appendChild(li);//闭包，单例模式
        return function () {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerHTML = "列表内容";
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                //console.log(new Date());
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};

