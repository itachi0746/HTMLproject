function factorial(num) {
	if (num <= 1) {
		return -1;
	} else {
		return (num * arguments.callee(num-1))
	}
}

var another = factorial;

factorial = function() {
	return 0;
};

console.log(another(5));
console.log(factorial(5));