console.log('--------------1-----------------');
// ４、７、１０、１３、１６、（   ）、（   ）

function one(n) {
	var start = 4;
	var num = 4 + 3 * n;
	console.log(num);
}

// one(100);

console.log('--------------2-----------------');
// ２、４、７、１１、１６（   ）、（   ）
//  0   2	3   4 		5
//  0   1   2   3      4

function two(n) {
	var arr = [2];
	var num;
	var temp = 2;
	for(var i=1;i>0;i++) {
		if(arr.length-1!==n) {
			num = i + temp + 1;
			// console.log(num);
			arr.push(num);
			temp = num;
		} else {
			break;
		}
	}
	console.log(arr[n]);
}

// two(0);

console.log('--------------3-----------------');
// ２、３、５、８、（12）、１７、２３、（   ）
//      1   2   3   4      5
//  0   1   2   3

function three(n) {
	var arr = [2];
	var num;
	var temp = 2;
	for(var i=1;i<=n;i++) {
		num = temp + i;
		arr.push(num);
		// console.log(arr);
		temp = num;
	}
	console.log(arr[n]);	
}

// three(5);

console.log('--------------4-----------------');
// ２、４、８、１４、２２、（   ）、４４、（   ）
//      2   4    6    8
//  0   1   2    3   4
function four(n) {
	var arr = [];
	var num;
	var temp = 2;
	for(var i=0;i<=n;i++) {
		num = temp + i*2;
		arr.push(num);
		// console.log(arr);
		temp = num;
	}
	console.log(arr[n]);
}
// four(5);

console.log('--------------5-----------------');
// １、１、２、３、５、８、（   ）、２１、（    ）
//      0   1   1   2

function five(n) {
	var arr = [1];
	var num;
	var before = 0;  // 前一项
	var temp = 1;  // 现在的项
	for(var i=1;i<=n;i++) {
		num = temp + before; // 下一项
		arr.push(num);
		before = temp;  // 要进行下一轮, 前一项变现在的项 
		temp = num;     //  现在的项变下一项
		// console.log(num);
	}
	console.log(arr[n]);
}
// five(0);

console.log('--------------6-----------------');
//  41  ,３０、 21 、１４、９、６、５ 
//  11     9     7     5
function six(n) {
	var arr = [41];
	var num;
	var start = 41;
	var temp = 11;
	for(var i=0;i<=n;i++) {
		num = start - temp;
		temp -= 2;
		start = num;
		arr.push(num);
	}
	console.log(arr[n]);
}
// six(10);

console.log('--------------7-----------------');
// 256 ，269 ，286 ，302 ，（ ）
//  13    17    16    5

function seven(n) {
	var  temp,
		start = num = 256,
		arr = [256];
	for(var i=1;i<=n;i++) {
		var ge = num % 10;  // 6
		num = Math.floor(num/10);  // 25
		var shi = num % 10;  // 5
		num = Math.floor(num/10);
		var bai = num % 10; // 2

		// console.log(bai,shi,ge);
		num = start + ge + shi + bai;
		start = num;
		// console.log(num);
		arr.push(num);
		console.log(arr);
	}
}  

// seven(5);

console.log('--------------8-----------------');
//  7，9，-1，5，-3，( )

function eight(n) {
	var one = 7,
		two = 9,
		temp,
		arr = [7,9];

	for(var i=2;i<=n;i++) {
		temp = (one - two)/2;
		arr.push(temp);
		one = two;
		two = temp;
	}
	console.log(arr[n]);
}

// eight(5);

console.log('--------------9-----------------');
// 3，2，5/3，3/2，7/5，( )

function nine(n) {
	var arr = [];
	for(var i=1;i<=n+1;i++){
		var fenmu = i,
			fenzi = i + 2;
		var num = fenzi / fenmu;
		arr.push(num);
		// console.log(arr);
	}
	console.log(arr[n]);
}

// nine(4);

console.log('--------------10-----------------');
// 2，12，30，56，（ ）

function ten(n) {
	var a = 1,
		b = 2,
		result,
		arr = [];

	for(var i=0;i<=n;i++) {

		result = a * b;
		arr.push(result);
		a += 2;
		b += 2;
		// console.log(arr);
	}
	console.log(arr[n]);
}

// ten(4);

console.log('--------------11-----------------');
// 2，1，2/3，1/2，2/5,（ ）

function eleven(n) {
	var arr = [];
	for(var i=1;i<=n+1;i++){
		var fenmu = 2,
			fenzi = i;
		var num = fenmu / fenzi;
		arr.push(num);
		// console.log(arr);
	}
	console.log(arr[n]);
}

eleven(3);