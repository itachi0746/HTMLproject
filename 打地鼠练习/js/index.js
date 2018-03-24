var hole = document.getElementsByClassName('wp')[0].children;
// hole =  hole.getElementsByTagName('div');
// console.log(hole);

// 大狼
var bigWolf = ['img/h0.png','img/h1.png','img/h2.png','img/h3.png','img/h4.png',
'img/h5.png','img/h6.png','img/h7.png','img/h8.png','img/h9.png'];
// 小狼
var smallWolf = ['img/x0.png','img/x1.png','img/x2.png','img/x3.png','img/x4.png',
'img/x5.png','img/x6.png','img/x7.png','img/x8.png','img/x9.png'];

var target = [bigWolf,smallWolf];
// console.log(bigWolf==target[0]);


// 随机选狼出现的洞和随机的狼
function select() {
	var index = 0;

	var num = Math.floor(Math.random()*hole.length);
	var temp = hole[num].children.length;
	// console.log(temp!=0);
	if(temp!==0) {
		select();
	}
	else{
		var num2 = Math.floor(Math.random()*target.length);

		show(hole[num],target[num2],index);
	}
}

// 狼出现(元素,目标数组,下标)
function show(ele,tgt,_index) {
	var _img = document.createElement('img');
	ele.appendChild(_img);
	// console.log(ele);

	var timer = setInterval(function() {
		// show();
		// console.log(ele);
		_img.src = tgt[_index];
		_index++;
		// console.log(__index);
		// 敲打前的图数
		if(_index>=6) {
			clearInterval(timer);
			// ele.innerHTML = '';
			// _index = 0;
			setTimeout(function(){
                hide(ele,tgt,_index,_img);
			},1000);

		}

	},80)
}
// console.log(hole);
select();


function hide(ele,tgt,_index,img) {
	console.log(ele,tgt,_index);
    _index--;
	var timer = setInterval(function() {
        _index--;
		console.log(ele);
        if(_index<0) {
        	clearInterval(timer);
        	ele.innerHTML = '';
        	return;
		}
        img.src = tgt[_index];

	},80)
}

