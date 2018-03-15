console.log("A" > "a");
console.log("B".localeCompare("A"));
console.log("A".localeCompare("A")); 
console.log("A".localeCompare("B"));
/*VM45:1 false
VM45:2 1
VM45:3 0
VM45:4 -1
undefined*/

var a = "abc";
var b = "def";
var c = a+b;
console.log(c);
//VM65:1 abcdef

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);
console.log(str2,str3,str4,str5);
//VM79:1 cdef cde ef cd

var arr6 = "abcdef".split("c");
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);
console.log(arr6,arr7,arr8);
//VM92:1 (2) ["ab", "def"] ["ab"] (2) ["ab", "def"]

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);
console.log(str9,str10,str11,str12);
//VM104:1 c 100 3 9

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);
//VM105:3 abcdefghijklmn cdefg

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);
console.log(str13,str14);
//VM106:3 abcdefghijklmn cdefg

var str15 = str13.substring(2,5);
console.log(str13,str15);
//VM107:2 abcdefghijklmn cde

var str16 = "aaa".concat("bbb");
var str17 = "    abc def     \r\n  ".trim();
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();
console.log(str16,str17,str18,str19);
//VM117:1 aaabbb abc def abcdef ABCDEF

var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");
console.log(indexOf,lastIndexOf);
//VM127:1 9 15
undefined