var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);
//ƒ toString() { [native code] }

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);
}
//x 1
//y 2
//z 3