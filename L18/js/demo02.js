//增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素
a[2] = "world";
console.log("删除a[2]前的数组a",a);
//删除a[2]前的数组a (3) ["hello", 3.14, "world"]
delete a[2];//删：直接修改length与pop方法
console.log("删除a[2]后的数组a",a);
//删除a[2]后的数组a (3) ["hello", 3.14, empty]
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始
//XX

//思考
var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);
//(4) [empty × 2, 3, undefined]

// Part2
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
//101
console.log(a);
//(101) [empty, "Hi", empty × 98, 0, -1.23: true]