var hole = document.getElementsByClassName('wp');
hole =  hole[0].getElementsByTagName('div');

console.log(hole[0]);

// 复制内容去其他洞
// for(var i=1;i<hole.length;i++) {
// 	hole[i].innerHTML = hole[0].innerHTML;
// }


var wolf = ['img/h0.png','img/h1.png','img/h2.png','img/h3.png','img/h4.png',
'img/h5.png','img/h6.png','img/h7.png','img/h8.png','img/h9.png'];

var smallWolf = ['img/x0.png','img/x1.png','img/x2.png','img/x3.png','img/x4.png',
'img/x5.png','img/x6.png','img/x7.png','img/x8.png','img/x9.png'];

var index = 0;

function show() {
	// hole[0].innerHTML = '';
	var _img = document.createElement('img');
	_img.src = wolf[index];
	index++;
	hole[0].append(_img);
	hole.removeChild(hole.childNodes[0]);
	
	// console.log(_img);

}

var timer = setInterval(function() {
	show();
	if(index>=wolf.length) {
		clearInterval(timer);
	}
},50)
