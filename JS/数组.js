var color = new Array(3);  // 创建一个包含3项的数组
var names = new Array('Grey');  // 创建一个包含1项,即字符串'Grey'的数组

var names = [];  // 创建一个空数组


var color = ['red', 'blue', 'green'];
console.log(color.length);  // 3
color.length = 2;  // length属性不是只读,可以设置,
					// 达到从数组的末尾移除项或向数组中添加新项

console.log(color.length);  // 2  
console.log(color);  // 最后一项被移除了


color.length = 3;  // 在数组最后新增一项的值是undefined
console.log(color[2]);
color[2] = 'green';

// 利用length属性也可以方便地在数组末尾添加新项
color[color.length] = 'black';  // 在位置3添加
color[color.length] = 'brown';  // 在位置4添加


// Array.isArray() 方法最终确定某个值是不是数组, 而不管它是在哪个全局执行环境中创建的
