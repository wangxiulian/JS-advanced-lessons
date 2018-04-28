function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);
//Point {x: 2, y: 3}

//直接调用Point方法会
Point(5,6);
console.log(window.x,window.y);
//5 6