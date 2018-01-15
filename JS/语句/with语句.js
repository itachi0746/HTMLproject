with (location) {
	var qs = search.substring(1);
	var hostName = hosename;
	var url = href;
}
//严格模式不允许使用with,大量使用with语句会导致性能下降

//与上面的with语句相同效果:
// var qs = location.search.substring(1);
// var hostName = location.hosename;
// var url = location.href;
