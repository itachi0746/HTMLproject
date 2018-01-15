var colors = ['red','blue','green']
var count = colors.push('yellow','white');  // 在数组最后添加,并返回数组的长度
console.log(count, colors);

console.log(colors.push('black'));
console.log(colors);

var item = colors.pop();  // 移除最后一项  并返回
console.log(item);

var a = ['gg'];
console.log(colors + a);  // 数组相加

var item = colors.shift();  // shift() 移除数组的第一项,并返回
console.log(item);
console.log(colors.length);

var colors = [];
console.log(colors);
var count = colors.unshift('red','blue');  // unshift() 在数组前面加入项,并返回数组项目数
console.log(count);

var count = colors.unshift('black');
console.log(count);

var item = colors.pop();
console.log(item);
console.log(colors.length);
