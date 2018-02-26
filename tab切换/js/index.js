var Box = document.getElementById('wp').getElementsByTagName('div');

var Btn = document.getElementsByClassName('btn_wp')[0].getElementsByTagName('span');

// console.log(Box,Btn);
var Wp = document.getElementById('wp');



Btn1.onmouseover = function() {
	// ro();
	// Box1.className = 'db';

	Wp.style.margin = '0 0 0 0%';
	ro_btn();
	Btn1.style.background = '#21b6bb';
	Btn1.style.cursor = 'pointer';
}
Btn2.onmouseover = function() {
	// ro();
	// Box2.className = 'db';
	Wp.style.margin = '0 0 0 -100%';

	ro_btn();

	Btn2.style.background = '#21b6bb';
	Btn2.style.cursor = 'pointer';

}
Btn3.onmouseover = function() {
	// ro();
	// Box3.className = 'db';
	Wp.style.margin = '0 0 0 -200%';

	ro_btn();

	Btn3.style.background = '#21b6bb';
	Btn3.style.cursor = 'pointer';

}
Btn4.onmouseover = function() {
	// ro();
	// Box4.className = 'db';
	Wp.style.margin = '0 0 0 -300%';

	ro_btn();

	Btn4.style.background = '#21b6bb';
	Btn4.style.cursor = 'pointer';

}
Btn5.onmouseover = function() {
	// ro();
	// Box5.className = 'db';
	Wp.style.margin = '0 0 0 -400%';

	ro_btn();
	Btn5.style.background = '#21b6bb';
	Btn5.style.cursor = 'pointer';

}
Btn6.onmouseover = function() {
	// ro();
	// Box6.className = 'db';
	Wp.style.margin = '0 0 0 -500%';

	ro_btn();
	Btn6.style.background = '#21b6bb';
	Btn6.style.cursor = 'pointer';

}

function ro() {
	Box1.className = 'dn';
	Box2.className = 'dn';
	Box3.className = 'dn';
	Box4.className = 'dn';
	Box5.className = 'dn';
	Box6.className = 'dn';

}
function ro_btn() {
	Btn1.style.background = '#5a5a5a';
	Btn2.style.background = '#5a5a5a';
	Btn3.style.background = '#5a5a5a';
	Btn4.style.background = '#5a5a5a';
	Btn5.style.background = '#5a5a5a';
	Btn6.style.background = '#5a5a5a';

}

function fl() {

}