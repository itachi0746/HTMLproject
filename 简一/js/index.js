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
var countDown = document.getElementsByClassName('countdown')[0];
var countDownImg =  countDown.getElementsByTagName('img');
// console.log(countDownImg.length);

// 页面
var homePage = $('homepage');
var shuomingPage = $('shuoming-page');
var rankingPage = $('ranking-page');
var sharePage = $('share-page');
var gamestartPage = $('gamestart-page');

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

	console.log(images);
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
	countdown();
	selectImg();
}

// 5秒倒计时,游戏记忆阶段
function countdown() {
	var num =  countDownImg.length - 1;
	var index = 0;
	var timer = setInterval(function() {
		
		for(var i=0;i<countDownImg.length;i++) {
			countDownImg[i].style.display = 'none';
		}
		index++;
		countDownImg[index].style.display = 'inline';

		if(index>num) {
			clearInterval(timer);

		}

	},1000)
}

// 第几关
var checkpoint = 1;
var imgNum = checkpoint + 1;
var result = [];

// 随机选图片地址的函数
function selectImg() {
	var temp = _random(0,imgArr.length-1);
	// var temp2 = _random(0,imgArr.length-1);
	// for(;temp===temp2;){
	// 	temp2 = _random(0,imgArr.length-1);
	// }
	// 返回图片地址
	// return [imgArr[temp]]

	// 把地址加入数组
	for(var i=0;i<result.length;i++){
		if(result[i]===imgArr[temp]){
			selectImg();
		}else {
			result.push(imgArr[temp]);
		}
	}
	innerImg();
}
// var a = selectImg();
// console.log(a);

function innerImg() {
	for(var i=0;i<imgNum;i++) {
		selectImg();
	}
	var str1 = '<img src=';
	var str2 = '>';
	var temp = '';
	for(var j=0;j<result.length;j++) {
		temp += str1 + result[j] + str2;
	}
	answerImg.innerHTML = temp;
}
