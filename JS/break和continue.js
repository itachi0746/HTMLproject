// var num = 0;
// for (var i=1; i < 10; i++) {
// 	if (i % 5 == 0) {
// 		break;  // 跳出当前循环
// 	}
// 	num++;
// }

// console.log(num);


var num = 0;
for (var i=1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;  //结束本次循环, 开始下一轮循环
	}
	num++;
	// console.log(num);
}

console.log(num); 