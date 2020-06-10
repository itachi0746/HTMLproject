export default {
    /**
     * 检查字段 手机的值
     * @param theValue
     */
    checkPhoneNum (theValue) {
        let reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/
        return reg.test(theValue)
    },
    /**
     * 检查字段 网址的值
     * @param theValue
     */
    checkURL (theValue) {
        // let reg = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/
        let reg = /^((https|http|ftp|rtsp|mms){1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
        return reg.test(theValue)
    },
    /**
     * 检查年龄
     * @param theValue 字符串
     */
    checkAge (theValue) {
        if (!theValue) {
            return false
        }
        let Value = eval(theValue), min = 10, max = 70
        return Value<=min || Value>=max
    },
    // 倒数30s逻辑
    setTime () {
        if (this.countdown === 0) {
            this.sending = false
            this.btnFont = '重新发送'
            this.countdown = 30; //60秒过后button上的文字初始化,计时器初始化;
            return
        } else {
            this.sending = true
            this.btnFont = this.countdown + 'S'
            this.countdown--
        }
        setTimeout(() => {
            this.setTime()
        }, 1000)
    },
	//密码必须为大写字母、小写字母、数字、字符三组以上组合且长度不少于8位数
	checkPass(s){
		if(s.length < 8){
			return 0;
		}
		var ls = 0;
		if(s.match(/([a-z])+/)){
			ls++;
			// console.log('a-z:',ls)
		}
		if(s.match(/([0-9])+/)){
			ls++;
			// console.log('0-9:',ls)

		}
		if(s.match(/([A-Z])+/)){
			ls++;
			// console.log('A-Z:',ls)

		}
		// if(s.match(/[^a-zA-Z0-9]+/)){
		//     ls++;
		// }
		//  var myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/
		var regEn = /[`~!@#$%^&*()_+\-<>?:"{},.\/;'[\]]/im
		if (s.match(regEn)) {
			ls++;
			// console.log('myReg:',ls)

		}
		return ls
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
}