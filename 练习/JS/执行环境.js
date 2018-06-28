var color = 'blue';

function changeColor() {
	var anotherColor = 'red';
	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;

		// 这里可以访问color、anotherColor和temoColor
	}

	// 这里可以访问color和anotherColor,但不能访问tempcolor和swapcolors()

}

// 这里只能访问color  changecolor();