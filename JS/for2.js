var count = 10;
for (var i = 0; i < count; i++) {
	console.log(i);
}

console.log(i);  //循环内部定义的变量, 外部也能访问;
				 //ECMAScript中不存在块级作用域