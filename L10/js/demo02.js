var name = "Jack";
function echo() {
    console.log(name);
}
echo();
//Jack


var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//Jack



var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();
//Jack



var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();
//g