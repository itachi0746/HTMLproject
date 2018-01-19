var Box1 = document.getElementById('box1');
var Box2 = document.getElementById('box2');
var Box3 = document.getElementById('box3');
var Box4 = document.getElementById('box4');
var Box5 = document.getElementById('box5');
var Box6 = document.getElementById('box6');

var Btn1 = document.getElementById('btn1');
var Btn2 = document.getElementById('btn2');
var Btn3 = document.getElementById('btn3');
var Btn4 = document.getElementById('btn4');
var Btn5 = document.getElementById('btn5');
var Btn6 = document.getElementById('btn6');

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