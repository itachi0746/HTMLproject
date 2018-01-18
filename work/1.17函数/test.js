// var num=0;
// var result;
// for(var i=1;i<10;i++) {
// 	for(var j=1;j<10;j++) {
// 		result = i*j;
// 		num += result;
// 	}
// }
// console.log(num);



function one(n) {
	var result=0;
	for (var i=1;i<=n;i++) {
		for (var j=1;j<=i;j++) {
			result += i*j;
		}
	}
	console.log(result);
}

one(5);

console.log('--------------------------------');

function sum() {
	var result = 0;
	for(var i=1;i<100;i++) {
		result += i;
		if(i%3===0) {
			result += i;
		} else {
			continue;
		}
	}
	console.log(result);
}
sum(3);

console.log('------------------完数--------------');
//一个数如果恰好等于它的因子之和(除了本身)，
// 这个数就称为“完数”。例如6=1＋2＋3。计算出1000以内的完数的个数

function wanshu(n) {
	for(var i=2;i<=n;i++) {
		var temp = 0;
		for(var j=1;j<i;j++) {
			if(i%j===0) {
				temp += j;
				// console.log(i,j,temp);

			}
		}

		if(temp===i) {
			console.log(temp);
		}
		
	}
}
wanshu(1000);

// temp = [];
// temp.push(1);
// temp.push(1);
// console.log(temp);

console.log('------------------三角--------------');

function sanjiao(n) {
	for(var i=n;i>=1;i--){
		var string = '';
		for(var j=1;j<=i;j++) {
			string += '*';
		}
		console.log(string);
	}
}

sanjiao(5);

// console.log('*'*5);

console.log('------------------金字塔--------------');

function jinzita(n) {
	var temp = n * 2 - 1;
	var string;
	var string2 = '';
	for(var i=temp;i>=1;i-=2,string2+=' ') {

		string='';
		if(i<temp){
			string += string2;
		}

		for(var j=1;j<=i;j++) {
			string += '*';
		}

		console.log(string);
	}
}

jinzita(5);

// a = '***';
// b = ' * ';
// console.log(a.length, b.length);

console.log('------------------质数--------------');

function zhishu(n) {
	var result = [];
	for(var i=2;i<=n;i++) {
		for(var j=2;j<i;j++) {
			if(i%j===0) {
				break;
			} else if(j===i-1) {
				result.push(i);
			} else {
				continue;
			}
		}
	}

	console.log(result);
}
zhishu(100);

console.log('------------------99乘法表--------------');

function chengfabiao() {
	for(var i=1;i<10;i++) {
		var string = '';
		for(var j=1;j<=i;j++) {
			result = i.toString()+'*'+j.toString()+ '='+ i*j + ' ';
			string+=result;

		}
		console.log(string);
	}
}

chengfabiao();