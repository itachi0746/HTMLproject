var text = 'mom and dad and baby';
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);		// 第一项是与整个模式匹配的字符串
console.log(matches[1]);		// 其他项是与模式中的捕获组匹配的字符串
console.log(matches[2]);

console.log('----------------------------------------')

// 在不设置全局标志g的情况下,在同一个字符串多次调用exec()
// 始终返回第一个匹配项的信息
var text2 = 'cat, bat, sat, fat';
var pattern2 = /.at/;		

var matches2 = pattern2.exec(text2);
console.log(matches2.index, matches2[0], pattern2.lastIndex);

matches2 = pattern2.exec(text2);
console.log(matches2.index, matches2[0], pattern2.lastIndex);

// 如果设置了全局标志,每次调用exec()则都会在字符串中继续查找新匹配项
var pattern3 = /.at/g;

var matches3 = pattern3.exec(text2);
console.log(matches3.index, matches3[0], pattern3.lastIndex)

matches3 = pattern3.exec(text2);
console.log(matches3.index, matches3[0], pattern3.lastIndex)

console.log('----------------------------------------')

// RegExp 实例继承的toString()和toLocaleString()方法都会返回
// 正则表达式的字面量
var pattern4 = new RegExp("\\[bc\\]at", "gi");
console.log(pattern4.toString());
console.log(pattern4.toLocaleString());
console.log(pattern4.valueOf());

console.log('----------------------------------------')


// 构造函数属性
var text5 = 'this has been a short summer';
var pattern5 = /(.)hort/g;

if (pattern5.test(text5)) {
	console.log(RegExp.input);
	console.log(RegExp.leftContext);
	console.log(RegExp.rightContext);
	console.log(RegExp.lastMatch);
	console.log(RegExp.lastParen);
	console.log(RegExp.multiline);
}