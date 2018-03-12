
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