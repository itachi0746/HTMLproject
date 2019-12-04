import utils from './index'
(function () {
    // console.log(process.env)
    utils.doLogin()
    const isWeixin = utils.isWeixin()
    window['isWeixin'] = isWeixin
    window['payUrl'] = '/api/order/doPay?orderId=' // 支付跳转
    utils.setStore('doWxLoginTimes', 0) // 记录返回码403次数
    if (isWeixin) {
        console.log('微信浏览器')
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://res2.wx.qq.com/open/js/jweixin-1.4.0.js';
        head.appendChild(script);

    } else {
        console.log('其他浏览器')
    }
})()
