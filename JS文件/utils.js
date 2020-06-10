// 根据id获取元素
function $(id) {
  var ID = document.getElementById(id)
  return ID
}

// 根据class获取元素
function $cls(cls) {
  var result = document.getElementsByClassName(cls)
  return result
}

// 产生max,min之间的随机数
function Random(min, max) {
  max++
  var a = Math.floor(Math.random() * (max - min) + min)
  return a
}

// 根据屏幕大小动态改变根元素(html)的字体大小
function setFontSize() {
  (function(doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth
        if (!clientWidth) return
        // 改变DOM根节点fontSize大小的值;
        // (屏幕宽度/设计图宽度) = 缩放或扩大的比例值;
        docEl.style.fontSize = 40 * (clientWidth / 320) + 'px'
      }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)
}

// 构造函数的继承
function extend(Child, Parent) {
  var F = function() {}

  F.prototype = Parent.prototype

  Child.prototype = new F()

  Child.prototype.constructor = Child

  Child.uber = Parent.prototype
}

// 微信摇一摇
function yaoyiyao() {
  //首先定义一下，全局变量
  var lastTime = 0 //此变量用来记录上次摇动的时间
  var x = (y = z = lastX = lastY = lastZ = 0) //此组变量分别记录对应x、y、z三轴的数值和上次的数值
  var shakeSpeed = 6000 //设置阈值
  //编写摇一摇方法
  function shake(eventData) {
    var acceleration = eventData.accelerationIncludingGravity //获取设备加速度信息
    var nowTime = new Date().getTime() //记录当前时间
    //如果这次摇的时间距离上次摇的时间有一定间隔 才执行
    if (nowTime - lastTime > 100) {
      var diffTime = nowTime - lastTime //记录时间段
      lastTime = nowTime //记录本次摇动时间，为下次计算摇动时间做准备
      x = acceleration.x //获取x轴数值，x轴为垂直于北轴，向东为正
      y = acceleration.y //获取y轴数值，y轴向正北为正
      z = acceleration.z //获取z轴数值，z轴垂直于地面，向上为正
      //计算 公式的意思是 单位时间内运动的路程，即为我们想要的速度
      var speed = (Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime) * 10000
      if (speed > shakeSpeed) {
        //如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
        // do sth...
        //这里就是放置如果用户成功的摇一摇，将要触发的事件
      }
      lastX = x //赋值，为下一次计算做准备
      lastY = y //赋值，为下一次计算做准备
      lastZ = z //赋值，为下一次计算做准备
    }
  }
}

// 图片预加载
function loadImg(arr) {
  var now = 0
  var len = arr.length
  var imgWrap = []
  // img.src = arrey[now];

  for (var i = 0; i < len; i++) {
    imgWrap[i] = new Image()
    imgWrap[i].src = arr[i]
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

function stopBodyScroll(isFixed) {
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

// JQuery方法
//当点击跳转链接后，回到页面顶部位置
$('#back-to-top').click(function() {
  $('body,html').animate({ scrollTop: 0 }, 500)
  return false
})

// ==================================================
//获取窗口可视范围的高度
function getClientHeight() {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  }
  console.log(clientHeight)
  return clientHeight
}

// 获取窗口滚动条高度
function getScrollTop() {
  let scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}


// ==================================================
// 把数字格式化(价格)
function moneyChange(num, accuracy) {
  const tranReg = new Map([[9, 'b'], [6, 'm'], [3, 'k']])
  let ac = accuracy || 0
  let length = typeof num === 'number' ? num.toString().length : num.length,
    result = num
  tranReg.forEach((item, index) => {
    result =
      length > (index >= 6 ? index - 1 : index)
        ? ((length = 0), Math.round(num / 10 ** (index - ac)) / 10 ** ac + item)
        : result
  })
  return result
}

/**
 * 数字化为金钱格式,千分位
 * @param num
 * @returns {string|*}
 */
function toMoney(num){
  num = num.toFixed(2);
  num = parseFloat(num)
  num = num.toLocaleString();
  return num;//返回的是字符串23,245.12保留2位小数
}

/**
 * 返回今天或者指定日期
 * @param detract 减去的天数
 * @returns {string}
 */
function returnDate(detract) {
  var myDate = new Date();
  var y,m,d;
  if(!detract) {
    y = myDate.getFullYear();
    m = myDate.getMonth() + 1;
    d = myDate.getDate();
    return y+'-'+m+'-'+d;
  } else {
    // var preDate = new Date(curDate.getTime() - 24*60*60*1000); //前一天
    // y = myDate.getFullYear();
    // m = myDate.getMonth() + 1;
    var sec = 24*60*60*1000*detract;
    var theDate = new Date(myDate.getTime()-sec);
    y = theDate.getFullYear();
    m = theDate.getMonth() + 1;
    d = theDate.getDate();
    return y+'-'+m+'-'+d;
  }

}

/**
 * 判断是否手机
 * @returns {boolean|Array|{index: number, input: string}}
 */
function isMobile() {
  var ua = navigator.userAgent;
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    _isMobile = isIphone || isAndroid;

  return _isMobile
}


var t_img; // 定时器
/**
 * 检测html的fontsize是否已设置, 如果已设置则进行下一步 ,否则递归
 * @param cb 回调函数
 * @returns {boolean}
 */
function hasSetRem(cb) {
  var theHTML = document.getElementsByTagName('html')[0];
  var theFS = theHTML.style.fontSize;
  if (theFS) {
    clearTimeout(t_img); // 清除定时器
    cb()
    return false
  } else {
    t_img = setTimeout(function() {
      hasSetRem(cb); // 递归扫描
    },300);
  }
}

// js将秒转化为时分秒
function formatSeconds(value) {
    let result = parseInt(value)
    let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
    let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
    let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
    result = `${h}:${m}:${s}`
    return result
}

function removeClasss(ele,txt){
	var str =  ele.className,
		index = str.indexOf(txt);
	if(index > -1){

		ele.className = str.replace(txt,"");

	}

}
// removeClasss(document.querySelector("#tests"),"a");

function addClasss(ele,txt){
	var str =  ele.className;

	console.log(str);

	ele.className += txt;


}