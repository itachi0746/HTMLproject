
// 按钮
var shuomingBtn = $('shuoming-btn');
var startBtn = $('start-btn');
var rankingBtn = $('ranking-btn');
var shareBtn = $('share-btn');
var p2Return = $('p2Return');
var shareBtn = $('share-btn');
var gamestartBtn = $('gamestart-btn2');
var continueBtn = $('continue');

// 元素块
var dianjikaishi = $('dianjikaishi');
var ruleImg = $('rule-img');
var answerImg = $('answer-img');
var itemsImg = $('items');
var time = $('time');
var _gamePoint = $('gamepoint');
var _gamePoint2 = $('gamepoint2');
var _gameTime = $('gametime');
var resultPageTitle = $('result-page-title');
var resultPageTitle2 = $('result-page-title2');
var countDown = document.getElementsByClassName('countdown')[0];
var countDownImg =  countDown.getElementsByTagName('img');
// console.log(countDownImg.length);

// 页面
var homePage = $('homepage');
var shuomingPage = $('shuoming-page');
var rankingPage = $('ranking-page');
var sharePage = $('share-page');
var gamestartPage = $('gamestart-page');
var gamePage = $('game-page');
var resultPage = $('result-page');

// 图片
var imgArr = ['images/img_1.png','images/img_2.png','images/img_3.png','images/img_4.png',
'images/img_da.png','images/img_ft.png','images/img_gl.png','images/img_ha.png',
'images/img_hr.png','images/img_hw.png','images/img_jd.png','images/img_jy.png',
'images/img_lh.png','images/img_yh.png','images/img_yl.png','images/img_yq.png',
]
// 答对要显示的图
var imgArr2 = ['images/img_1_y.png','images/img_2_y.png','images/img_3_y.png','images/img_4_y.png',
'images/img_da_y.png','images/img_ft_y.png','images/img_gl_y.png','images/img_ha_y.png',
'images/img_hr_y.png','images/img_hw_y.png','images/img_jd_y.png','images/img_jy_y.png',
'images/img_lh_y.png','images/img_yh_y.png','images/img_yl_y.png','images/img_yq_y.png',
]

// 图片加载函数
function preloader() {
	var images = new Image();
	for(var i=0;i<imgArr.length;i++) {
		images.src = imgArr[i];
	}
	for(var j=0;j<imgArr2.length;j++) {
		images.src = imgArr2[j];
	}

	// console.log(images);
}
// preloader();

// 首页说明按钮
shuomingBtn.onclick = function() {
	homePage.style.display = 'none';
	shuomingPage.style.display = 'block';
}

// 说明页返回首页按钮
p2Return.onclick = function() {
	shuomingPage.style.display = 'none';
	homePage.style.display = 'block';
}

// 首页排名按钮
rankingBtn.onclick = function() {
	rankingPage.style.display = 'block';
	homePage.style.display = 'none';
}

// 首页分享按钮
shareBtn.onclick = function() {
	sharePage.style.display = 'block';
	homePage.style.display = 'none';
}
// 分享页面点击返回
sharePage.onclick = function() {
	sharePage.style.display = 'none';
	homePage.style.display = 'block';	
}
// 首页开始按钮
startBtn.onclick = function() {
	homePage.style.display = 'none';	
	gamestartPage.style.display = 'block';
}
// 点击开始按钮
gamestartBtn.onclick = function() {
	ruleImg.style.display = 'none';
	answerImg.style.display = 'block';
	gamestartBtn.style.display = 'none';
	countDown.style.display = 'block';
	createItems();
	chooseItems();
	innerImg(answerImg,answerImgArr);
	countdown();

}

// 继续挑战按钮
continueBtn.onclick = function() {
	resultPage.style.display = 'none';
	nextLevel();
}

// console.log(countDownImg[0]);
// 5秒倒计时,游戏记忆阶段
function countdown() {
	countDownImg[0].style.display = 'inline';
	var index = 1;
	var timer = setInterval(function() {
		
		for(var i=0;i<countDownImg.length;i++) {
			countDownImg[i].style.display = 'none';
		}
		if(index>countDownImg.length-1) {
			clearInterval(timer);
			playGame(min,sec);

		}else{
			// console.log(index);
			countDownImg[index].style.display = 'inline';
			index++;			
		}

	},1000)
}

// 第几关
var checkpoint = 1;
// 储存图片地址的数组
var result = [];
var answerImgArr = [];

// 游戏总时间
var min  = 3;
var sec  = 0;
// 游戏的开始时间,结束时间
var startTime;
var endTime;
// console.log(result.length);

// 随机选图片地址的函数
function selectImg(adrArr,tgtArr) {
	// console.log(tgtArr);
	// console.log(adrArr);
	var temp = _random(0,tgtArr.length-1);

	// 把地址加入数组
	for(var i=0;i<adrArr.length;i++){
		if(adrArr[i]===tgtArr[temp]){
			// console.log(123);

			selectImg(adrArr,tgtArr);
			return;
		}	
	}
	adrArr.push(tgtArr[temp]);
}

// 要生成的图片数等于游戏关数加一
var imgNum = checkpoint + 1;
// 抽出图片给HTML的函数
function innerImg(el,tgtArr) {

	var str1 = '<img src=';
	var str2 = '>';
	var temp = '';
	for(var j=0;j<tgtArr.length;j++) {
		temp += str1 + tgtArr[j] + str2;
	}
	el.innerHTML = temp;
	// marginImg(imgNum);
}

// 给图片加上相同的margin的函数,让图片等分一行
function marginImg(arg) {
	var _img = answerImg.getElementsByTagName('img');
	var imgWidth = _img[0].offsetWidth;
	var screenW = document.documentElement.clientWidth;
	var mg = (screenW - imgWidth * arg)/(arg + 5);

	if(arg<4){
		for(var i=0;i<arg;i++) {
			_img[i].style.margin = '0px ' + mg + 'px';
		}	
	}else {
		for(var i=0;i<arg;i++) {
			_img[i].style.margin = '0px 5px';
		}
	}
}

// 游戏操作阶段
function playGame(m,s) {
	gamestartPage.style.display = 'none';
	gamePage.style.display = 'block';
	startTime = timing();
	innerImg(itemsImg,result);
	gameTime(m,s);
	clickImg();
}

// 游戏操作阶段生成图的函数
function createItems() {
	if(checkpoint===1 || checkpoint===2) {
		for(var i=0;i<8;i++){
			selectImg(result,imgArr);
		}
	}
	if(checkpoint===3 || checkpoint===4) {
		for(var i=0;i<12;i++){
			selectImg(result,imgArr); 
		}
	}
	if(checkpoint===5 || checkpoint===6) {
		for(var i=0;i<16;i++){
			selectImg(result,imgArr); 
		}
	}
}

// 游戏记忆阶段抽取图的函数
function chooseItems() {
	var num = checkpoint + 1;
	for(var i=0;i<num;i++){
		selectImg(answerImgArr,result);
	}
}

var _click = false;

// 游戏操作阶段的图的点击事件
function clickImg() {
	_click = true;
	// 答对的次数
	var right = 0;
	// 过关要求答对的次数
	var allRight = checkpoint + 1;

	var allImgs = itemsImg.getElementsByTagName('img');
	// var _img = answerImg.getElementsByTagName('img');

	for(var i=0;i<allImgs.length;i++) {
		allImgs[i].index = i;
		allImgs[i].onclick = function() {
			if(_click){
				_click = false;
				for(var j=0;j<answerImgArr.length;j++) {
				// 用数组里的字符串做判断
					if(answerImgArr[j]===result[this.index]){
						right++;
						// console.log(typeof allImgs[this.index].src);
						var temp = allImgs[this.index].src;
						// console.log(temp.split('.')[0] + '_y.png');
						allImgs[this.index].src = temp.split('.')[0] + '_y.png';
						_click = true;
						// 取消点击事件,防止疯狂点击
						allImgs[this.index].onclick = null;
						if(right===allRight){
							_clear = true;
							endTime = timing();
							calTime(startTime,endTime);
							// 下一关
							// nextLevel();
							setTimeout(function() {
								gamePage.style.display = 'none';
								resultPage.style.display = 'block';
							},1000)
						}
						return;
					}else {
						continue;
						// console.log('gg');
					}
				}
				// allImgs[this.index].src = 'images/img_f.png';
				imgReset(allImgs[this.index]);			
			}

		}
	}
}

// 点错时的操作
function imgReset(el) {
	var temp = el.src;
	el.src = 'images/img_f.png';
	var timer = setTimeout(function() {
		el.src = temp;
		_click = true;
	},1000)
}

// 下一关
function nextLevel() {
	if(_clear){
		checkpoint++;
	}
	result = [];
	answerImgArr = [];
	_clear = false;
	createItems();
	chooseItems();
	innerImg(answerImg,answerImgArr);
	gamestartPage.style.display = 'block';
	countdown();
}

// 获得实时的函数
function timing() {
	var t = new Date().getTime();
	return t;
}

// 计算用时的函数
function calTime(start,end) {
	var result = end - start;
	var M = Math.floor(result/1000/60%60);
	var S = Math.floor(result/1000%60);

	if(M<10){
		M = '0' + M;
	}
	if(S<10){
		S = '0' + S;
	}
	resultPageTitle.style.display = 'block';
	resultPageTitle2.style.display = 'none';	
	_gameTime.innerHTML = M + ':' + S;
	_gamePoint.innerHTML = checkpoint;

}

// 是否过关
var _clear = false;
// 游戏倒计时函数
function gameTime(m,s) {

	innerTime(m,s);
	var timer = setInterval(function() {
		s--;
		if(_clear){
			clearInterval(timer);
		}
		if(s===0 && m===0) {
			clearInterval(timer);
			innerTime(m,s);
			resultPage.style.display = 'block';
			resultPageTitle.style.display = 'none';
			gamePage.style.display = 'none';
			resultPageTitle2.style.display = 'block';
			_gamePoint2.innerHTML = checkpoint;
			console.log(_clear);
		}
		if(s<0) {
			s = 59;
			m--;
		}
		innerTime(m,s);

	},30)
}

function innerTime(m,s) {
	if(m<10) {
		m = '0' + m;
	}
	if(s<10) {
		s = '0' + s;
	}
	var t = m + ':' + s;
	time.innerHTML = t;
}