// 解析器会先读取函数声明,
// 并使其在执行任何代码之前可用
console.log(sum(10,10));

function sum(num1, num2) {
	return (num1 + num2);
}


// 至于函数表达式,则必须等到解析器
// 执行到他的所在代码行, 才会真正被解析执行
console.log(sum2(10, 10));
var sum2 = function(num1, num2) {
	return (num1 + num2);
};