var num = [1,2,3,4,5,4,3,2,1];

// 数组的every()方法, 所有项都是true则返回true
var result = num.every(function(item,index,array) {
	return (item > 2);
});

console.log(result);

// 数组的some()方法, 有一项返回true则返回true
var result2 = num.some(function(item,index,array) {
	return (item > 2);
});

console.log(result2);

// 数组的filter()方法,过滤器作用,返回符合条件的项组成的数组
var result3 = num.filter(function(item,index,array) {
	return (item > 2);
});

console.log(result3);

// 数组的map()方法,映射,返回经过函数作用后的项组成的数组
var result4 = num.map(function(item,index,array) {
	return (item * 2);
});

console.log(result4);

// 数组的forEach()方法, 对数组的每一项运行指定函数, 没有返回值
// num.forEach(function(item,index,array) {
// 	//执行某些操作
// });