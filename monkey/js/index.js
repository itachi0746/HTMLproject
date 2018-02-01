
var Rule = $('font'),
	List = $('font2'),
	Tips = $('tips'),
	P1 = $('p1'),
	P2 = $('p2'),
	P3 = $('p3'),
	P4 = $('p4'),P5 = $('p5'),P6 = $('p6'),
	Jishi = $cls('jishi'),
	Close = $cls('close');
	// console.log(Jishi[0],Jishi[1]);

var Music = $('music'),
	Music_btn = $('music-btn').getElementsByTagName('img')[0];
	// console.log(Music_btn);

var Count = $('count'),
	GameStart = $cls('start'),
	GameOver = $('gameover'),
	Share = $('share'),
	Again_btn = $('again-btn'),
	Share_btn = $('share-btn');
	// console.log(Again_btn,Share_btn);

var A = '椰子汁',B = '在益起',C = '核桃慧',D = '蜜檬';
var arr = [A,B,C,D];

// 从数组随机抽取
function select(arr) {
	var ran = Math.floor(Math.random() * arr.length);
	var result = arr.splice(ran,1)[0];
	return result;
}
var timer;
// 倒数到开始
function go() {
	var num = 2;
	timer = setInterval(function() {
		if(num===1) {
			Count.style.left = '325px';
		}
		Count.src = 'images/game-time' + num + '.png';
		num--;
		if(num<1) {
			clearInterval(timer);
		}

	},1000)
	var timer2 = setTimeout(function() {
		P4.style.display = 'none';
		P5.style.display = 'block';

		// 随机选一个,游戏开始
		Tips.innerHTML = select(arr);
		// 倒数时间
		countDown();
	},3000)
}

var timer3;
// 游戏倒数
function countDown() {
	var num = 9;
	timer3 = setInterval(function() {
		if(num===9){
			Jishi[0].style.padding = '0px';
			Jishi[0].src = 'images/game-time0.png';
		}
		if(num===1) {
			Jishi[1].style.padding = '0 0 0 10px';	
		}
		else {
			Jishi[1].style.padding = '0px';
		}
		Jishi[1].src = 'images/game-time' + num + '.png';
		num--;
		// 倒数完
		if(num<0) {
			clearInterval(timer3);
			console.log('RightAnswer:',RightAnswer);
			// 最后的判断,答对不够3次,gameover
			if(RightAnswer<3){
				GameOver.style.display = 'block';
			}
		}
	},1000)
}

// 游戏开始点击事件
for(var i=0;i<GameStart.length;i++) {
	GameStart[i].onclick = function() {
		P1.style.display = 'none';
		P2.style.display = 'none';
		P3.style.display = 'none';
		P4.style.display = 'block';
		Music_btn.style.display = 'block';
		go();

	}
}

// 关闭点击
Close[0].onclick = function() {
	P2.style.display = 'none';
	P1.style.display = 'block';
	check_btn();
}
Close[1].onclick = function() {
	P3.style.display = 'none';
	P1.style.display = 'block';
	check_btn();
}

// 规则,中奖名单点击
Rule.onclick = function() {
	P1.style.display = 'none';
	P2.style.display = 'block';
	check_btn();
}
List.onclick = function() {
	P1.style.display = 'none';
	P3.style.display = 'block';
	check_btn();
}

// 音乐按钮点击事件
Music_btn.onclick = function() {
	if(Music.paused) {
		Music.play();
		Music_btn.src = 'images/music-on.png';
	} else {
		Music.pause();
		Music_btn.src = 'images/music-off.png';
	}		
}

// for(let j=0;j<Music_btn.length;j++) {

// 	Music_btn[j].onclick = function() {

// 		if(Music.paused) {
// 			Music.play();
// 			Music_btn[j].src = 'images/music-on.png';
// 		} else {
// 			Music.pause();
// 			Music_btn[j].src = 'images/music-off.png';
// 		}
// 	}
// }

function reset() {
	GameOver.style.display = 'none';
	Count.src = 'images/game-time3.png';
	P4.style.display = 'block';
	P5.style.display = 'none';
	Jishi[0].src = 'images/game-time1.png';
	Jishi[1].src = 'images/game-time0.png';	
	Monkey.src = 'images/game-monkey.png';
	TrueBox.style.display = 'none';
	ErrBox.style.display = 'none';
	DialogBox.style.display = 'block';
	Count.style.left = '290px';

	
	arr = [A,B,C,D];
	// console.log(arr);
	// Chance = 3;
	RightAnswer = 0;
	// arrNum = 4;	
	// Tips.innerHTML = select(arr);

}

// 重新开始
Again_btn.onclick = function() {
	reset();
	go();

}
// 分享
Share_btn.onclick = function() {
	Share.style.display = 'block';

}
Share.onclick = function() {
	Share.style.display = 'none';

}

var	Xuanze_btn = $cls('xuanze_btn'),
	// Chance = 3,
	RightAnswer = 0,
	DialogBox = $('dialogBox'),
	TrueBox = $('trueBox'),
	ErrBox = $('errBox'),
	Monkey = $cls('monkey')[1];
	// console.log(Monkey);

// 检查音乐按钮
function check_btn() {
	var btn = Music_btn.style.display;
	if(btn==='block'){
		Music_btn.style.display = 'none';
	}else {
		Music_btn.style.display = 'block';
	}
}

// 判断通关函数
function Judge() {
	// 通关,抽奖
	if(RightAnswer>=3) {
		clearInterval(timer3);
		P5.style.display = 'none';
		P6.style.display = 'block';

	}
	else {
		// 否则继续
		goon(Answer);
	}

}

// 答对下一题,答错继续这一题
function goon(arg) {
	if(arg) {
		if(arr.length!==0){
			Tips.innerHTML = select(arr);

		}
	}
	TrueBox.style.display = 'none';
	ErrBox.style.display = 'none';
	DialogBox.style.display = 'block';
	Monkey.src = 'images/game-monkey.png';
	
}

// 布尔值
var Answer;
// 选择喂他点击事件
for(var k=0;k<Xuanze_btn.length;k++) {
	// 自定义属性储存答案
	Xuanze_btn[k].daan = arr[k];
	Xuanze_btn[k].onclick = function() {
		// console.log(DialogBox.style.display);

		if(DialogBox.style.display==='block'){
			// arrNum--;
			// console.log(this.daan,arr);
			console.log(arr);
			var temp = Tips.innerHTML;
			if(this.daan===temp) {
				RightAnswer++;
				Answer = true;
				DialogBox.style.display = 'none';
				TrueBox.style.display = 'block';
				Monkey.src = 'images/game-trueMonkey.png';

			} else {
				Answer = false;

				DialogBox.style.display = 'none';
				ErrBox.style.display = 'block';	
				Monkey.src = 'images/game-errorMonkey.png';

			}
			setTimeout(function() {
				Judge();
				// goon();
			},1000);
		}
	}
}