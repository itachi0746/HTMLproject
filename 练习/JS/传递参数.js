function addTen(num) {
	num += 10;
	return num;
}

var count = 20;
var result = addTen(count);
console.log(count);  // 20, 没变化
console.log(result);  // 30


//按值传递,参数的传递跟变量的复制一样
function setName(obj) {
	obj.name = 'John';
	obj = new Object();
	obj.name = 'Greg';

}

var person = new Object();
setName(person);
console.log(person.name);  //"John"