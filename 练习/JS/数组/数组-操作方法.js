var colors = ['red', 'green', 'blue'];

// concat()添加到数组末尾
var colors2 = colors.concat('yellow', ['black', 'brown']);  // 返回新数组

console.log(colors);
console.log(colors2);

console.log('------------------------------------------')

//slice() 切片
var num = [1,2,3,4,5];
var num1 = num.slice(-2,-10);   // 如果结束位置小于起始位置,返回空数组
var num2 = num.slice(1);   // 从1到最后
var num3 = num.slice(1,4);  // 1到4 不包括4

console.log(num1);
console.log(num2);
console.log(num3);

console.log('------------------------------------------')


// splice(起始位置,要删除的项数,要插入的项(可多个))
var colors = ['red', 'green', 'blue'];
var removed = colors.splice(0,1);		// 返回被移除的项所组成的数组
console.log(colors, removed);

removed = colors.splice(1, 0, 'yellow', 'orange');
console.log(colors, removed);

removed = colors.splice(1, 1, 'red', 'purple');
console.log(colors, removed);
