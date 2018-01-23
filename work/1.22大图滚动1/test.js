function f() {
	for(var i=0;i<arguments.length;i++) {
		console.log(arguments[i]);
	}
}

setInterval(f, 1000, 'hello');
