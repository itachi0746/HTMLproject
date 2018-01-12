var colors = ['red','blue','green']
var count = colors.push('yellow','white');  // 在数组最后添加,并返回数组的长度
console.log(count, colors);

console.log(colors.push('black'));

var item = colors.pop();  // 移除最后一项  并赋值
console.log(item);

var a = ['gg'];
console.log(colors + a);