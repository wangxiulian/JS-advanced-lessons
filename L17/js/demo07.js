//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);
//5

var superObj = {
    show:function(){
        console.log(this.x,this.y);
    }
};
var subObj_First = Object.create(superObj);
subObj_First.x = 1;
subObj_First.y = 2;
subObj_First.show();
//1 2