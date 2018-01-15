// var num = 0;

// outer:
// for (var i=0; i < 10; i++) {
// 	for (var j=0; j < 10; j++) {
// 		if (i==5 && j==5) {
// 			break outer;  //加上outer标签,break不仅退出当前循环,也退出外循环
// 		}
// 		num++;
// 	}
// }

// console.log(num);  //55


var num = 0;
outer:
for (var i=0; i < 10; i++) {
	for (var j=0; j < 10; j++) {
		if (i==5 && j==5) {
			continue outer;  // 退出内部循环, 执行外部循环
		}
		num++;
	}
}

console.log(num);