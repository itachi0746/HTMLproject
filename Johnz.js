
// 根据id获取元素
function $(id) {
	var ID = document.getElementById(id);
	return ID;
}

// 根据class获取元素
function $cls(cls) {
	var result = document.getElementsByClassName(cls);
	return result;
}

// 产生max,min之间的随机数
function Random(min,max) {
	max++;
	var a = Math.floor(Math.random()*(max-min)+min);
	return a;
}

// 根据屏幕大小动态改变根元素(html)的字体大小
function setFontSize() {
        (function (doc, win) {   
            var docEl = doc.documentElement,   
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',   
            recalc = function () {   
            var clientWidth = docEl.clientWidth;   
            if (!clientWidth) return;  
        	// 改变DOM根节点fontSize大小的值;
        	// (屏幕宽度/设计图宽度) = 缩放或扩大的比例值;
            docEl.style.fontSize = 40* (clientWidth / 320) + 'px';   
        };   
        if (!doc.addEventListener) return;   
        win.addEventListener(resizeEvt, recalc, false);   
        doc.addEventListener('DOMContentLoaded', recalc, false);   
        })(document, window);   
}

// 构造函数的继承
function extend(Child, Parent) {

　　　　var F = function(){};

　　　　F.prototype = Parent.prototype;

　　　　Child.prototype = new F();

　　　　Child.prototype.constructor = Child;

　　　　Child.uber = Parent.prototype;

}

// 微信摇一摇
function yaoyiyao() {
    //首先定义一下，全局变量
    var lastTime = 0;//此变量用来记录上次摇动的时间
    var x = y = z = lastX = lastY = lastZ = 0;//此组变量分别记录对应x、y、z三轴的数值和上次的数值
    var shakeSpeed = 6000;//设置阈值
    //编写摇一摇方法
    function shake(eventData){
            var acceleration = eventData.accelerationIncludingGravity;//获取设备加速度信息
            var nowTime = new Date().getTime();//记录当前时间
            //如果这次摇的时间距离上次摇的时间有一定间隔 才执行
            if(nowTime - lastTime > 100){
                    var diffTime = nowTime - lastTime;//记录时间段
                    lastTime = nowTime;//记录本次摇动时间，为下次计算摇动时间做准备
                    x = acceleration.x;//获取x轴数值，x轴为垂直于北轴，向东为正
                    y = acceleration.y;//获取y轴数值，y轴向正北为正
                    z = acceleration.z;//获取z轴数值，z轴垂直于地面，向上为正
                    //计算 公式的意思是 单位时间内运动的路程，即为我们想要的速度
                    var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
                    if(speed > shakeSpeed){//如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
                        // do sth...
                        //这里就是放置如果用户成功的摇一摇，将要触发的事件
                    }
                    lastX = x;//赋值，为下一次计算做准备
                    lastY = y;//赋值，为下一次计算做准备
                    lastZ = z;//赋值，为下一次计算做准备
            }
    }    
}


// 图片预加载
function loadImg(arr){
    var now = 0;
    var len = arr.length;
    var imgWrap = [];
    // img.src = arrey[now]; 

    for(var i=0;i<len;i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];        
    }

//     function go () {
//         now ++ ;
//         // loadingProcess.innerHTML = parseInt( now/sum *100 ) + "%";
//         if(now < picArr.length){
//             loadImg()
//         }else{
// //          console.log("全部加载完成");
//             loading.style.display = "none";
//             swiperWrapper.style.opacity = "1";
//             action();
//         }
    
    // img.onerror = go;
    // img.onload = go;
}

// ==================================================
// 阻止页面滚动

var bodyEl = document.body
var temp = 0

function stopBodyScroll (isFixed) {
  if (isFixed) {
    temp = window.scrollY

    bodyEl.style.position = 'fixed'
    bodyEl.style.top = -temp + 'px'
  } else {
    bodyEl.style.position = ''
    bodyEl.style.top = ''

    window.scrollTo(0, temp) // 回到原先的top
  }
}
// ==================================================
