function displayInfo(args) {
	var output = '';
	if (typeof args.name == 'string') {
		output += 'Name: ' + args.name + '\n';
	}

	if (typeof args.age == 'number') {
		output += 'Age: ' + args.age + '\n';
	}

	console.log(output);
}


// 这种传递参数的模式最适合需要向函数传入大量可选参数的情形
displayInfo({
	name: 'Nicholas',
	age: 29
});

displayInfo({
	name: 'Greg'
});


var person = {
	'first name': 'John'  // 属性名可以用字符串表示
};
console.log(person['first name']);  // 由于first name属性包含一个空格
									// 所以我们不能用点表示法访问它