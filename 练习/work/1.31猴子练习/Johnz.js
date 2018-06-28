
// 获得id
function $(id) {
	var ID = document.getElementById(id);
	return ID;
}

// 获取class,返回class的数组
function $cls(cls) {
	var result = document.getElementsByClassName(cls);
	return result;
}

// 产生max,min之间的随机数
function Random(max,min) {
	max++;
	var a = Math.floor(Math.random()*(max-min)+min);
	return a;
}