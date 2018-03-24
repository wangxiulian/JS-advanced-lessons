var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
//良

console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");
//良