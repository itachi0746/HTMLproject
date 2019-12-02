/* eslint-disable */
export default {
    /**
     * 存储localStorage
     */
    setStore: (name, content) => {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },
    /**
     * 获取localStorage
     */
    getStore: name => {
        if (!name) return;
        return window.localStorage.getItem(name);
    },
    /**
     * 删除localStorage
     */
    removeStore: name => {
        if (!name) return;
        window.localStorage.removeItem(name);
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
    // 获得url中的参数,放在对象中,然后返回这个对象
    getUrlParams: function () {
        let args = {}
        let query = location.search.substring(1) // 获取查询串
        let pairs = query.split('&')// 在逗号处断开
        for (let i = 0; i < pairs.length; i++) {
            let pos = pairs[i].indexOf('=')// 查找name=value
            if (pos === -1) continue// 如果没有找到就跳过
            let argname = pairs[i].substring(0, pos).toLowerCase()// 提取name
            let value = pairs[i].substring(pos + 1)// 提取value
            args[argname] = decodeURIComponent(value)// 存为属性
        }
        return args
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
    // 根据id获取元素
    $id (id) {
        return document.getElementById(id)
    },

    // 根据class获取元素
    $cls (cls) {
        return document.getElementsByClassName(cls)
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
    /**
     * 判断是否已经过指定的分钟
     * @param timeStamp 上一个时间戳(毫秒)
     * @param interval 时间间隔(分钟)
     */
    canRefresh: function (timeStamp, interval) {
        // debugger
        var curTime = new Date().valueOf()
        interval = interval * 60000
        timeStamp = timeStamp.valueOf()
        var result = curTime - timeStamp
        return result > interval
    },
    getClientHeight: function () {
        let clientHeight = 0
        // if (document.body.clientHeight && document.documentElement.clientHeight) {
        //   clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        // } else {
        //   clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        // }
        if (document.documentElement.clientHeight) {
            clientHeight = document.documentElement.clientHeight
        }
        console.log('可视区域高度:', clientHeight)
        return clientHeight
    },
    add0(m) {
        return m < 10 ? '0' + m : m
    },
    /**
     * json转formdata
     * @param jsonData
     * @returns {*}
     */
    JsonToFormData: function (jsonData) {
        let form = new FormData()
        form.append('param', JSON.stringify(jsonData))
        return form
    },
    /**
     * 把数组里的对象转为formdata
     * @param dataArr
     */
    createFormData: function (dataArr) {
        let form = new FormData()
        for (let obj of dataArr) {
            if (!obj.value) {
                console.log(`${obj.name} 的值为 ${obj.value}`)
                obj.value = ''
                // return false
            }
            try {
                obj.value = obj.value.trim() // 去除空格
            } catch (err) {
                console.log(err)
            }
            form.append(obj.fieldName, obj.value)
        }
        return form
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
     * 检查字段 手机的值
     * @param theValue
     */
    checkPhoneNum(theValue) {
        let reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/
        return reg.test(theValue)
    },
    /**
     * 检查字段 网址的值
     * @param theValue
     */
    checkURL(theValue) {
        // let reg = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/
        let reg = /^((https|http|ftp|rtsp|mms){1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
        return reg.test(theValue)
    },
    /**
     * 检查年龄
     * @param theValue 字符串
     */
    checkAge(theValue) {
        if (!theValue) {
            return false
        }
        let Value = eval(theValue), min = 10, max = 70
        return Value <= min || Value >= max
    },
    /**
     * 检查统一社会信用代码
     * 市面上现在有2中企业营业执照注册号(统一社会信用代码)，一种是15位(从2007年开始)，一种是18位(从2015年开始)
     * @param val
     */
    checkCreditCode(val) {
        if (typeof val !== 'string') {
            console.log(`参数类型错误: ${val}`)
            return
        }
        let reg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/
        return reg.test(val)
    },
    /**
     * 获取经纬度
     */
    getLocation() {
        let lng, // 经度
            lat // 纬度
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    console.log('经度:', position.coords.longitude)
                    console.log('纬度:', position.coords.latitude)
                    lng = position.coords.longitude
                    lat = position.coords.latitude
                },
                function (e) {
                    console.log('获取经纬度失败')
                    throw(e.message)
                }
            )
        } else {
            console.log('该浏览器不支持获取地理位置。')
        }
        return {'lng': lng, 'lat': lat}
    },
    /**
     * 检测html的fontsize是否已设置, 如果已设置则进行下一步 ,否则递归
     * @param cb 回调函数
     * @returns {boolean}
     */
    hasSetRem(cb) {
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
    /**
     * 用微信对象获取经纬度
     */
    getLocation2() {
        try {
            wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    // var speed = res.speed; // 速度，以米/每秒计
                    // var accuracy = res.accuracy; // 位置精度
                    return ({'lng': longitude, 'lat': latitude})
                }

            })
        } catch (err) {
            console.log('没有找到wx对象:', err)
            return ({'lng': 0, 'lat': 0})
        }
    },
    /**
     * 用微信对象获取经纬度
     */
    //微信JS-SDK获取经纬度方法
    weichatLatAndLon(callback, error) {
        var that = this;
        var data = null
        var timestamp = new Date().getTime() + "";
        timestamp = timestamp.substring(0, 10);
        // var ranStr = randomString();

        //微信接口配置
        // wx.config({
        // debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        // appId: 'XXXXXXXXXXXXXXXXX', // 必填，公众号的唯一标识
        // timestamp: timestamp, // 必填，生成签名的时间戳
        // nonceStr: ranStr, // 必填，生成签名的随机串
        // signature: 'XXXXXXXXXXXXXXXXX',// 必填，签名，见附录1
        // jsApiList: ['checkJsApi',
        //   'getLocation'
        // ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        // });

        //参见微信JS SDK文档：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
        return new Promise(function (resolve, reject) {
            try {
                // wx.ready(function () {
                wx.getLocation({
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度
                        localStorage.setItem("latitude", latitude);
                        localStorage.setItem("longitude", longitude);
                        data = {
                            lat: latitude,
                            lng: longitude
                        };
                        console.log('获取位置成功: ', JSON.stringify(data))
                        resolve(data)
                    },
                    cancel: function () {
                        //这个地方是用户拒绝获取地理位置
                        console.log('获取位置失败: 用户拒绝')
                        data = {
                            lat: 0,
                            lng: 0
                        };
                        resolve(data)
                    },
                    fail: function (res) {
                        console.log('获取位置失败: ', JSON.stringify(res))
                        data = {
                            lat: 0,
                            lng: 0
                        };
                        resolve(data)
                    }
                });
                wx.error(function (res) {
                    console.log('获取位置失败: ', JSON.stringify(res))
                    data = {
                        lat: 0,
                        lng: 0
                    };
                    resolve(data)
                });
                // });
            } catch (err) {
                console.log('没有err对象: ', JSON.stringify(err))
                data = {
                    lat: 0,
                    lng: 0
                };
                resolve(data)
            }
        })
    },
}
