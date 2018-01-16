
console.log('-----------水仙花-------------------');



function shuixianhua(num) {
	var c = num;
	var a; 
	var b;  
	var result = 0;
	for (;num!==0;) {
		a = num % 10;	// 3|5|1
		b = (num-a)/10;	// 15|1|0
		result += Math.pow(a,3); //27+5^3+1
		num = b;		//15|1|0
	}
	if (result===c){
		console.log(c + '是水仙花数',result);
	} else {
		console.log(c + '不是水仙花数',result);
	}
	// console.log(result);
}
shuixianhua(153);


// var a = 3;
// console.log(Math.pow(a,3));

console.log('--------------球落地---------------');

// 一球从100米高度自由落下，每次落地后反跳回原高度的一半；
// 再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？
function ball(height, n) {
	var distance = 0;
	for (var meter,i=1;i<=n;i++) {
			meter = height;
			distance += meter*2;  //100*2+50*2
			height = meter/2;  // 50  25
			console.log(distance-100+height*2,height,i);

	}
	// console.log(distance-100, height);
}
ball(100,10);


console.log('--------------回文数---------------');
// a = 12321;
// b = a.toString();
// console.log(b,typeof b,b.length);
function huiwenshu(num) {
	var result = num.toString();
	var len = result.length;
	var start=0,
		end=len-1;
	for (;result[start]===result[end];) {
		start++;
		end--;
		if(start<end){
			continue;
		}else{
			console.log('yes');
			return;
		}
	}
	console.log('no');
	
}
huiwenshu(12321);

console.log('--------------猴子---------------');
// var x = 0;
for(var n=1,d=1;d<10;d++ ) {
	var n = (n+1)*2;
	// x = 0;
	console.log(n);
}