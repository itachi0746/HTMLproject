// 递归的阶乘函数
// 函数里面调用自身，使这个函数的执行与这个函数名字fa
// (耦合现象), 如果以后函数的名字有变,则影响这个函数
function fa(num) {
	if (num <=1) {
		return 1;
	} else {
		return num * fa(num-1)
	}
}

// 使用函数的arguments.callee属性可以解决耦合问题
function fa(num) {
	if (num <=1) {
		return 1;
	} else {
		return num * arguments.callee(num-1)
	}
}

console.log(fa(5));

console.log('-----------------------------');


// this引用的是函数据以执行的环境对象
// window.color = 'red';
var o = {color: 'blue'};

function sayColor() {
	console.log(this.color);
}

// sayColor();  // this 引用了全局对象 window

o.sayColor = sayColor;
// o.sayColor();  // 引用对象是o

console.log('-----------------------------');

// caller保存着调用当前函数的函数的引用,
// 如果是在全局作用域中调用当前函数,它的值为null
function outer() {
	inner();
}
function inner() {
	console.log(arguments.callee.caller);
}
outer();