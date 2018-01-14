var str = 'abcde';

console.log(str.match(/a.c/)); 
console.log(str.match(/\w/));
console.log(str.match(/\W/));
console.log('-------------------------------------------------')

var str2 = 'abc123';

console.log(str2.match(/\d/));
console.log(str2.match(/\D/));
console.log(/\D+/g.exec(str2));
console.log('-------------------------------------------------')

var str3 = 'Is this! all there is?';

console.log(str3.match(/\s/));
console.log(str3.match(/\S/));

console.log(/\bthis\b/g.exec(str3));
console.log('-------------------------------------------------')

var str4 = "longen<p>我是中国人</p>yunxi<p>我是男人</p>boyboy";

// 贪婪模式, 非贪婪模式
console.log(str4.match(/<p>.*<\/p>/)[0]);
console.log(str4.match(/<p>.*?<\/p>/)[0]);