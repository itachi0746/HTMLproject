/* eslint-disable */
import * as http from './core/http'

export default {
    /**
     * 保存sessionStorage
     */
    setStore: (name, content) => {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.sessionStorage.setItem(name, content);
    },

    /**
     * 获取sessionStorage
     */
    getStore: name => {
        if (!name) return;
        return window.sessionStorage.getItem(name);
    },

    /**
     * 删除sessionStorage
     */
    removeStore: name => {
        if (!name) return;
        window.sessionStorage.removeItem(name);
    },

    /**
     * 导航到指定页面
     * @param pageName
     * @param defaultUrl
     * @param paramter
     */
    goToPage: function (pageName, defaultUrl, paramter) {
        let theParamterArray = []
        for (let key in paramter) {
            theParamterArray.push(key + '=' + paramter[key])
        }
        location.href = defaultUrl + '?' + theParamterArray.join('&')
    },
    /**
     * 对象转换为查询
     * @param obj
     * @returns {*}
     */
    toQuery (obj) {
        var theItems = [];
        for (var key in obj) {
            if (obj[key] == undefined || obj[key] == null) {
                theItems.push(key + '=' + (obj[key] || ''));
            }
            else {
                theItems.push(key + '=' + (obj[key]));
            }
        }
        return theItems.join('&');
    },
    // 获得url中的参数,放在对象中,然后返回这个对象
    getUrlParams: function () {
        let args = {}
        let query = location.search.substring(1) // 获取查询串
        let pairs = query.split('&') // 在逗号处断开
        for (let i = 0; i < pairs.length; i++) {
            let pos = pairs[i].indexOf('=') // 查找name=value
            if (pos === -1) continue // 如果没有找到就跳过
            let argname = pairs[i].substring(0, pos).toLowerCase() // 提取name
            let value = pairs[i].substring(pos + 1) // 提取value
            args[argname] = decodeURIComponent(value) // 存为属性
        }
        return args
    },
    // 获得hash字符串参数
    getHashParams: function () {
        let args = {}
        let hashStr = location.hash
        if (hashStr.indexOf('?') === -1) { // 如果没有参数
            return null
        }
        let query = hashStr.split('?')[1] // 获取查询串
        let pairs = query.split('&') // 在逗号处断开
        for (let i = 0; i < pairs.length; i++) {
            let pos = pairs[i].indexOf('=') // 查找name=value
            if (pos === -1) continue // 如果没有找到就跳过
            let argname = pairs[i].substring(0, pos).toLowerCase() // 提取name
            let value = pairs[i].substring(pos + 1) // 提取value
            args[argname] = decodeURIComponent(value) // 存为属性
        }
        return args
    },
    IOSConfig: function () {
        let userAgent = navigator.userAgent
        if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('Mac') > -1) {
            console.log('on iphone/mac')
            window.addEventListener('popstate', function (e) {
                // alert("后退");
                console.log('后退')
                self.location.reload()
            }, false)
            let state = {
                title: '',
                url: '#'
            }
            window.history.replaceState(state, '', '#')
        }
    },
    /**
     * 节流函数。
     */
    throttle: function (action, delay) {
        let timeout = null
        let lastRun = 0
        return function () {
            if (timeout) return
            let elapsed = Date.now() - lastRun
            let context = this
            let args = arguments
            let runCallback = function () {
                lastRun = Date.now()
                timeout = false
                action.apply(context, args)
            }
            if (elapsed >= delay) {
                runCallback()
            } else {
                timeout = setTimeout(runCallback, delay)
            }
        }
    },
    getClientHeight: function () {
        let clientHeight = 0
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight :
                document.documentElement.clientHeight;
        } else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight :
                document.documentElement.clientHeight;
        }
        // console.log('可视区域高度:', clientHeight)
        return clientHeight
    },
    getClientWidth: function () {
        let clientWidth = 0
        if (document.body.clientWidth && document.documentElement.clientWidth) {
            clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth :
                document.documentElement.clientWidth;
        } else {
            clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth :
                document.documentElement.clientWidth;
        }
        // console.log('可视区域宽度:', clientWidth)
        return clientWidth
    },
    add0 (m) {
        return m < 10 ? '0' + m : m
    },
    /**
     * 时间戳转为为普通日期格式
     * @param shijianchuo 时间戳
     * @param hm 是否返回小时 分钟
     * @returns {string}
     */
    formatTime: function (shijianchuo, hm = false) {
        //shijianchuo是整数，否则要parseInt转换
        // var time = new Date(shijianchuo)

        let time = shijianchuo,
            result
        let y = time.getFullYear()
        let m = time.getMonth() + 1
        let d = time.getDate()
        let h = time.getHours()
        let mm = time.getMinutes()
        if (hm) {
            result = y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm)
        } else {
            result = y + '-' + this.add0(m) + '-' + this.add0(d)
        }
        // var s = time.getSeconds()
        // return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
        // return y + '-' + this.add0(m) + '-' + this.add0(d)
        return result
    },

    /**
     * 判断是空对象
     * @param obj 对象
     * @returns {boolean}
     */
    isEmptyObject: function (obj) {
        for (var key in obj) {
            return false
        }
        return true
    },
    /**
     * 判断是不是空的
     * @param param
     * @returns {boolean}
     */
    isEmpty: function (param) {
        var me = this
        var theType = typeof param
        var empty = false
        switch (theType) {
            case 'string':
                if (param === '') {
                    console.log('参数为空字符串')
                    empty = true
                }
                break
            case 'array':
                if (param.length === 0) {
                    console.log('参数为空数组')
                    empty = true
                }
                break
            case 'object':
                empty = me.isEmptyObject(param)
                break
        }
        return empty
    },
    /**
     * 检测html的fontsize是否已设置, 如果已设置则进行下一步 ,否则递归
     * @param cb 回调函数
     * @returns {boolean}
     */
    hasSetRem (cb) {
        let theHTML = document.getElementsByTagName('html')[0]
        let theFS = theHTML.style.fontSize
        let time1 // 定时器
        if (theFS) {
            clearTimeout(time1) // 清除定时器
            cb()
            return false
        } else {
            time1 = setTimeout(() => {
                this.hasSetRem(cb) // 递归扫描
            }, 300)
        }
    },
    //生成从minNum到maxNum的随机数
    randomNum (minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    },
    /**
     * 计算字体
     * @param size 原设计图大小
     * @param nowRemSize 当前rem对应fontsize大小
     * @param originRemSize 原rem对应fontsize大小
     */
    calSize (size, nowRemSize, originRemSize = 192) {
        return (size / originRemSize) * nowRemSize
    },
    tofixed (num, wei = 0) {
        return num.toFixed(wei)
    },
    // 计算万吨
    calWandun (num) {
        if (!num) {
            return
        }
        let result = num / 10000
        return result.toFixed(1)
    },

    //获取当前年月日
    getNowFormatDate () {
        let date = new Date();
        let seperator1 = '-';
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    // 根据id获取元素
    $id (id) {
        return document.getElementById(id)
    },

    // 根据class获取元素
    $cls (cls) {
        return document.getElementsByClassName(cls)
    },
    // 第一步登录
    doLogin () {
        if (process.env.NODE_ENV === 'development') {
            window['entid'] = 10137
            window['orgid'] = 'b64069f6c3a84f8a863573b17a29b13f'
            window['appid'] = 'wx3b11020a462055b6'
        } else {
            const params = this.getHashParams()
            if (params) {
                if (params.appid && params.orgid && params.entid) {
                    window['appid'] = params.appid
                    window['orgid'] = params.orgid
                    window['entid'] = params.entid
                }
            }
        }

        const data = {
            appid: window['appid'],
            orgid: window['orgid'],
            entid: window['entid'],
        }
        http.post('/auth/clientAuth', data).then((res) => {
            console.log('登录成功')
            const resData = res.data
            if (resData&&resData.shopName) {
                window['title'] = res.data.shopName
                document.title = res.data.shopName
            }
        })
    },
    // 获取编码url
    getEncodeUrl (url = window.location.href) {
        return encodeURIComponent(url)
    },
    doWxLogin (url) {
        const loca = window.location
        const origin = loca.origin
        const path = '/' // 使别的模块也跳转主页的登录页
        window.location.href = origin + path + url + '?returnUrl=' + this.getEncodeUrl()
    },
    // 微信分享
    getShareSign (path) {
        const fullPath = window.location.origin + window.location.pathname + '#' + path
        const data = {
            url:  this.getEncodeUrl(fullPath)
        }
        console.log(`fullpath: ${fullPath}`)
        http.post('/weixin/getShareSign', data).then(res => {
            console.log('weixin share')
            console.log(res)
            this.doWxShare(res.data)
        })
    },
    doWxShare (data) {
        if (!wx) {
            console.log('没有wx对象')
            return
        }
        var obj = new Object()
        obj.title = document.title
        obj.desc = data.desc
        obj.link = data.url
        obj.imgUrl = data.imgUrl
        wx.config({
            // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data['appid'], // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'onVoicePlayEnd',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
                //'hideMenuItems'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.error(function (res) {
            console.log(JSON.stringify(res));
            //alert(location.href.split('#')[0]);
            //alert(JSON.stringify(res));
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

        });
        wx.ready(function () {

            //分享给微信朋友
            wx.onMenuShareAppMessage({
                title: obj.title, // 分享标题
                desc:obj.desc, // 分享描述
                link: obj.link, // 分享链接
                imgUrl: obj.imgUrl, // 分享图标
                success: function () {
                },
                cancel: function () {
                }
            });

            wx.onMenuShareTimeline({
                title: obj.title, // 分享标题
                link: obj.link, // 分享链接
                imgUrl: obj.imgUrl, // 分享图标
                success: function () {
                },
                cancel: function () {
                }
            });
            wx.onMenuShareQQ({
                title: obj.title, // 分享标题
                desc:obj.desc, // 分享描述
                link: obj.link, // 分享链接
                imgUrl: obj.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareWeibo({
                title: obj.title, // 分享标题
                desc:obj.desc, // 分享描述
                link: obj.link, // 分享链接
                imgUrl: obj.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQZone({
                title: obj.title, // 分享标题
                desc:obj.desc, // 分享描述
                link: obj.link, // 分享链接
                imgUrl: obj.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            //wx.hideMenuItems({
            //    //menuList: ['menuItem:favorite','menuItem:copyUrl','menuItem:originPage','menuItem:share:email','menuItem:editTag','menuItem:delete','menuItem:readMode']
            //    // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3

            //});

        });
    },
    // 处理金钱数字,返回带两位小数的字符串
    handlePriceStr (price) {
        let str = price.toString()
        const hasDecimal = str.indexOf('.') !== -1 // 是否有小数点
        if (hasDecimal) {
            let theArr = str.split('.')
            if (theArr[1].length === 1) {
                return str + '0'
            }
        } else {
            return str + '.00'
        }
        return str
    },
    // 延迟处理
    doItLater (fun, time=1000) {
        setTimeout(() => {
            fun()
        }, time)
    },
    // 判断是否是微信
    isWeixin () {
        let ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
    },
    // 压缩图片
    compress (img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        canvas.width = width;
        canvas.height = height;
        // 铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);

        let encoderOptions = 0.5 // 可以从 0 到 1 的区间内选择图片的质量,这里超过1M就进行压缩
        //进行压缩
        let ndata = canvas.toDataURL("image/jpeg", encoderOptions);
        console.log("*******压缩后的图片大小*******");
        // console.log(ndata)
        //            debugger
        console.log(ndata.length);
        return ndata;
    },
    /**
     * 检查字段 手机的值
     * @param theValue
     */
    checkPhoneNum (theValue) {
        let reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/
        return reg.test(theValue)
    },
}
