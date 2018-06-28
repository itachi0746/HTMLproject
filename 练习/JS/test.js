
//定义变量
function test() {
	var msg = 'hello';  //局部变量
}

function test2() {
	msg2 = 'hello';  //全局变量
}
test();
test2();
console.log(msg2);

var arr = ['one','two'];

console.log('hello,%s and %s',arr[0],arr[1]);
