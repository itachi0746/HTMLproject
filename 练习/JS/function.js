"use strict";

function sayHi (name, message) {
	return;  // return也可以不带有返回值,这时函数返回undefined
	console.log('hello world.');  //不会被调用
}


function doAdd(num1, num2) {
	arguments[1] = 10;  // 函数有一个argument对象来保存传进来的参数
	console.log(arguments[0], arguments[1], arguments.length);
}

doAdd(2);  // 在ECMAScript中,命名参数不是必需的