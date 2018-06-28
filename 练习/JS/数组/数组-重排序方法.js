var values = [1,2,3];
values.reverse();
console.log(values);

var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);  // sort()方法比较的是字符串
						// sort()可以接受一个比较函数作为参数

function compare(value1, value2) {
	if (value1 < value2) {			//如果第一个参数应该位于第二个之前则返回一个负数
		return -1;
	} else if (value1 > value2) {	//如果第一个参数应该位于第二个之后则返回一个整数
		return 1;
	} else {						//相等则返回0
		return 0;
	}
}

values.sort(compare);
console.log(values);  // 数组正确地升序排列,如果要降序,只需交换比较函数的返回值即可


// 使sort()降序排列的函数参数,返回值与上面的相反
function compare_1(value1, value2) {
	if (value1 < value2) {			
		return 1;
	} else if (value1 > value2) {	
		return -1;
	} else {						
		return 0;
	}
}

console.log(values.sort(compare_1));