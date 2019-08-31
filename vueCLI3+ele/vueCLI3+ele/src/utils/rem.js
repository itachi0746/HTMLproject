(function (doc, win) { // 立即执行,所以只引入多次会执行多次
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            let clientWidth = docEl.clientWidth
            if (!clientWidth) return
            // 理想字体大小(取设计图宽度的1/10就好) * (屏幕宽 / 设计图宽)
            docEl.style.fontSize = 192 * (clientWidth / 1920) + 'px'
        }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
