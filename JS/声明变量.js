function add(num1, num2) {
	sum = num1 + num2;
	return sum;
}

var result = add(10, 20);
console.log(result);


// 没用var声明导致sum变声全局变量
// 严格模式不能不使用var初始化变量,会报错
