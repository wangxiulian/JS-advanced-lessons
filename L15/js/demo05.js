function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);//Mike
console.log(p1.age);//21
p1.sayHi();//Hi,i'm  Mike 21 years old!

console.log(p1.__proto__ === Person.prototype);//true