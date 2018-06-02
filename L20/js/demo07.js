var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
//false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);
//true true false 0 "\w"

console.log(reg2.lastIndex);//0
reg2.test("abc23def");
console.log(reg2.lastIndex);//1
reg2.test("abc23def");
console.log(reg2.lastIndex);//2

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}
//3
//4
//5
//6
//7
//8

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);
//1 ["s", index: 0, input: "slfls3r3sfsf", groups: undefined]

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
//2 ["l", index: 1, input: "slfls3r3sfsf", groups: undefined]

/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/

//RegExp静态属性
console.log(RegExp.$_);//slfls3r3sfsf
console.log(RegExp.lastMatch);//1