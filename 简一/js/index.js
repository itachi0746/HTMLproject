
// 按钮
var shuomingBtn = $('shuoming-btn');
var startBtn = $('start-btn');
var rankingBtn = $('ranking-btn');
var shareBtn = $('share-btn');
var p2Return = $('p2Return');
var shareBtn = $('share-btn');
var gamestartBtn = $('gamestart-btn2');

// 元素块
var dianjikaishi = $('dianjikaishi');
var ruleImg = $('rule-img');
var answerImg = $('answer-img');
var itemsImg = $('items');
var time = $('time');
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
	innerImg(answerImg,imgNum);
	countdown();

}


// 5秒倒计时,游戏记忆阶段
function countdown() {

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
// 游戏总时间
var min = 3;
var sec = 0;
// console.log(result.length);

// 随机选图片地址的函数
function selectImg() {
	var temp = _random(0,imgArr.length-1);

	// 把地址加入数组
	for(var i=0;i<result.length;i++){
		if(result[i]===imgArr[temp]){
			selectImg();
			return;
		}	
	}
	result.push(imgArr[temp]);
}

// 要生成的图片数等于游戏关数加一
var imgNum = checkpoint + 1;
// 抽出图片给HTML的函数
function innerImg(el,imgnum) {


	// for(var i=0;i<imgNum;i++) {
	// 	selectImg();
	// }
	var str1 = '<img src=';
	var str2 = '>';
	var temp = '';
	for(var j=0;j<imgnum;j++) {
		temp += str1 + result[j] + str2;
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
	innerImg(itemsImg,result.length);
	gameTime(m,s);
	clickImg();
}

// 游戏操作阶段生成图的函数
function createItems() {
	if(checkpoint===1 || checkpoint===2) {
		for(var i=0;i<8;i++){
			selectImg(); 
		}
	}
	if(checkpoint===3 || checkpoint===4) {
		for(var i=0;i<12;i++){
			selectImg(); 
		}
	}
	if(checkpoint===5 || checkpoint===6) {
		for(var i=0;i<16;i++){
			selectImg(); 
		}
	}
}

// 游戏操作阶段的图的点击事件
function clickImg() {
	var allImgs = itemsImg.getElementsByTagName('img');
	var _img = answerImg.getElementsByTagName('img');
	var a = (JSON.stringify(_img[1])===JSON.stringify(allImgs[1]));
	console.log(a);
	// console.log(_img);
	// console.log(allImgs);
	for(var i=0;i<allImgs.length;i++) {
		allImgs[i].index = i;
		allImgs[i].onclick = function() {
			for(var j=0;j<_img.length;j++) {
				if(JSON.stringify(_img[j])===JSON.stringify(allImgs[this.index])){
					console.log(5);
					break;
				}else {
					// continue;
					console.log(j,this.index);
				}
			}
		}
	}
}

// 游戏倒计时函数
function gameTime(m,s) {

	innerTime(m,s);
	var timer = setInterval(function() {
		s--;
		if(s===0 && m===0){
			clearInterval(timer);
		}
		if(s<0) {
			s = 59;
			m--;
		}
		innerTime(m,s);

	},1000)
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