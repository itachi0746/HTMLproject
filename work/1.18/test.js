console.log('--------------1-----------------');
// ４、７、１０、１３、１６、（   ）、（   ）

function one(n) {
	var start = 4;
	var num = 4 + 3 * n;
	console.log(num);
}

// one(100);

console.log('---------------2----------------');
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
five(5);