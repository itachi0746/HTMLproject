var values = [1,2,3,4,5];

// 第一次迭代发生在数组的第二项上,因此第一个参数是第一项,
// 第二个参数是第二项
var sum = values.reduce(function(prev,cur,index,array) {
	return (prev + cur);
});
console.log(sum);

// reduceRight()的作用类似, 但方向相反