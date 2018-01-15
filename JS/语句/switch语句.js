var i = 35;
switch (i) {
	case 25:
		console.log('25');
		break;
	case 35:
		console.log('35');
		break;
	case 45:
		console.log('45');
		break;
	default:
		console.log('other');
}


switch ('hello world') {
	case 'hello' + ' world':  // case后还可以是表达式
		console.log('111111');
		break;
	case 'goodbye':
		console.log('222222222');
		break;
	default:
		console.log('3333333');
}


var num = '25';
switch (true) {
	case num < 25:
		console.log('less than 0.');
		break;
	case num >= 0 && num <= 10:
		console.log('between 0 and 10.');
		break;

	default:
		console.log('more than 20.');
}


//switch使用了全等操作符
var test = 888;
switch (test) {
	case '888':
		console.log('没使用全等');
		break;
	default:
		console.log('使用了全等.')
}