var hole = document.getElementsByClassName('wp')[0].children;
var score = document.getElementById('score');
var resultPage = document.getElementById('resultPage');
var result = document.getElementById('result');
var timeLine = document.getElementById('timeLine');
// hole =  hole.getElementsByTagName('div');
// console.log(hole[0].children);

// 大狼
var bigWolf = ['img/h0.png','img/h1.png','img/h2.png','img/h3.png','img/h4.png',
'img/h5.png','img/h6.png','img/h7.png','img/h8.png','img/h9.png'];
// 小狼
var smallWolf = ['img/x0.png','img/x1.png','img/x2.png','img/x3.png','img/x4.png',
'img/x5.png','img/x6.png','img/x7.png','img/x8.png','img/x9.png'];

var target = [bigWolf,smallWolf];
// console.log(bigWolf==target[0]);

// 点击布尔值
var _click = true;

// 点击狼事件
for(var i=0;i<hole.length;i++) {
	// 闭包!!!
	hole[i]._index = i;
	hole[i].onclick = function() {
		if(_click) {
            _click = false;
            if(hole[this._index].children.length!==0) {
                console.log('click');
                clearInterval(timer);
                clearInterval(timer2);
                clearTimeout(timer3);
                // console.log(i);
                // console.log(hole);
                // console.log(hole[this.index]);
                // hole[this._index].innerHTML = '';
                _img.src = '';
                // console.log(index);
                hit();
            }

		}

	}
	// console.log(i);
}

// 游戏时间倒数
var timer0 = setInterval(function() {
	gameTime--;
    timeLine.style.width = (gameTime/oriTime)*210.6 + 'px';
    // console.log(timeWidth,timeLine.style.width);
    // console.log(gameTime,oriTime);
    if(gameTime===0) {
		clearInterval(timer);
		clearInterval(timer0);
		clearInterval(timer2);
		clearTimeout(timer3);
		resultPage.style.display = 'block';
		result.innerHTML = '你的得分是: ' + _score;
	}
},1000);

// 图片下标
var index;
// 要出现的狼和地点
var tgtWolf;
var tgtHole;
// 图片对象
var _img;
// 分数
var _score = 0;
var gameTime = 60;
var oriTime = 60;
var timeWidth = timeLine.offsetWidth;
console.log(timeWidth);

// 随机选狼出现的洞和随机的狼
function select() {
	_click = true;
	index = 0;

	var num = Math.floor(Math.random()*hole.length);
	var temp = hole[num].children.length;
	// console.log(temp!=0);
	if(temp!==0) {
		select();
	}
	else{
		var num2 = Math.floor(Math.random()*target.length);
		tgtWolf = target[num2];
		tgtHole = hole[num];
		show(hole[num],target[num2]);
	}
}

var timer;
var timer2;
// 狼出现(元素,目标数组,下标)
function show(ele,tgt) {
	_img = document.createElement('img');
	ele.appendChild(_img);
	// console.log(ele);

	timer = setInterval(function() {
		// show();
		// console.log(ele);
		_img.src = tgt[index];
		index++;
		// console.log(index);
		// 敲打前的图数
		if(index>=6) {
			clearInterval(timer);
			// ele.innerHTML = '';
			// index = 0;
			// timer2 = setTimeout(function(){
                hide(ele,tgt);
			// },1000);

		}

	},100)
}
// console.log(hole);
select();


// 狼消失
var timer3;
function hide(ele,tgt) {
	// console.log(ele,tgt,_index);
    index--;
	timer3 = setInterval(function() {
        index--;
		// console.log(index);
        if(index<0) {
        	clearInterval(timer3);

        	ele.innerHTML = '';
        	select();
        	return;
		}
        _img.src = tgt[index];

	},100)
}

// 击打狼
function hit() {
	index = 5;
	// 得分
	if(tgtWolf===bigWolf) {
		_score += 10;
	} else {
		_score -= 10;
	}
	if(_score<0) {
		_score = 0;
	}
	score.innerHTML = _score;

	// 狼被打后消失
	var timer = setInterval(function() {
        index++;
		// console.log(index);
        if(index>9) {
        	clearInterval(timer);
        	tgtHole.innerHTML = '';
        	// _click = true;
        	select();
        	// 记得停止函数
        	return;
		}
		// console.log(tgtWolf[index]);
        _img.src = tgtWolf[index];

	},100)	
}
