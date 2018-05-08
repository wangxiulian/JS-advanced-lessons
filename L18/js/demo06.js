//Part1 排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);//(3) [3, 2, 1]

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//(4) ["apple", "banana", "orange", "pear"]

//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//(4) [-1, -20, 50, 7]

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//(4) [-20, -1, 7, 50]
arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序
//(4) [-20, -1, 7, 50]

//让arr2按第二个字母排序
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);
//(4) ["banana", "pear", "apple", "orange"]


//Part2 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);
//(4) ["banana", "apple", "pear", "orange"] (2) ["banana", "apple"] 
//(2) ["pear", "orange"]

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");
console.log(joinReturn,arr7);
console.log(typeof joinReturn);
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));
//3--4--5 (3) [3, 4, 5]
//string
//3******5


//Part3 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3