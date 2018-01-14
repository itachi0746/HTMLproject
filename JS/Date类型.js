var now = new Date();
console.log(now);

var someDate = new Date(Date.parse('January 14, 2018'));
console.log(someDate);

var now2 = new Date('January 14, 2018');  // 调用了Date.parse()方法
console.log(now2);

// GMT时间2000年1月1日午夜零时
var y2k = new Date(Date.UTC(2000, 0));

// GMT时间2005年5月5日下午5.55.55
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(y2k, allFives);


var start = new Date();

// GMT时间2000年1月1日午夜零时
var y2k2 = new Date(2000, 0);

// GMT时间2005年5月5日下午5.55.55
var allFives2 = new Date(2005, 4, 5, 17, 55, 55);
console.log(y2k2, allFives2);

var stop = new Date(),
	result = stop - start;
console.log(result);


var date1 = new Date(2007,0,1);
var date2 = new Date(2007,1,1);
console.log(date1 < date2);			// 比较毫秒值
console.log(date1 > date2);