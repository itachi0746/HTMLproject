// 弹窗
// alert('12421414')

// 声明
// var a;  // 只声明 未赋值  undefined
//number string boolean undefined null  基本类型
// alert(typeof a);
// var a = b = 1;
// var c = a + b;
// // 求余 % 

// console.log(a);

// if(a < b) {
// 	console.log(1);
// } else if (a == b) {
// 	console.log(2);
// } else {
// 	console.log(3);
// }

// a = 5;
// b = 2;
// a += b;
// console.log(a);

// var aa = 5;
// var bb = 7;
// var cc;
// cc = (aa > bb)?true:false;  // 三元运算符
// console.log(cc);

// 逻辑运算符 
// && 与, || 或, ! 非
// if(aa < bb && aa < cc) {

// }

// console.log('------------------------');
// var i  = 1;
// console.log(i++);  // ++i 执行在语句后
// console.log(++i);  // i++ 执行在语句前


// 循环
var oo =0;
for(var i=1;i<=5;i++) {
	// console.log(i);
	if (i == 3) {
		break;
	}
	oo += i;
}
console.log(oo); 

console.log('-----------------------------------');
console.log('1+2+3+...+100的和:');
var re = 0;
for (var i = 1; i <= 100; i++) {
	re += i;
}
console.log(re);

console.log('-----------------------------------');

var score = 60;
// var grade;
function chengji(score) {
	var grade;
	if (score >= 90) {
		grade = 'A';
	} else if (score < 90 && score >= 60) {
		grade = 'B';
	} else if (score < 60) {
		grade = 'C';
	}
	console.log('成绩等级为:' + grade);
}

chengji(score);

console.log('-----------------------------------');

// var num = 153;
// var a = num % 10;
// var b = (num-a) / 10;
// console.log(a,b);

function shuixianhua(num) {
	var a; 
	var b;  
	var result = 0;
	for (;num!==0;) {
		a = num % 10;	// 3|5|1
		b = (num-a)/10;	// 15|1|0
		result += Math.pow(a,3); //27+5^3+1
		num = b;		//15|1|0
	}
	if (result===num){
		console.log('是水仙花数');
	} else {
		console.log('不是水仙花数');
	}
	// console.log(result);
}
shuixianhua(154);


// var a = 3;
// console.log(Math.pow(a,3));