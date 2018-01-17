var age = 22;

++age;

age += 1;

var text = ++age + 100;  //++age先执行,再执行整条语句

console.log(age);
console.log(text);

var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;  //先赋值, num-- 后执行
var num4 = num1 + num2;

console.log(num3, num4, num1);
