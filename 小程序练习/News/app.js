var util = require('./utils/util.js')
App({
  success:true,

  onLaunch: function () {
    var that = this;
    // debugger
      wx.login({
        success: function (res){
          console.log('login ing');
          // debugger
          if (res.code) {
            var code = { code: res.code, appid: "wx30b4a19af8d1f8fd" };
            wx.getUserInfo({
              success: function (res) {
                console.log('getUserInfo成功: ',res);
               
                that.globalData.g_userInfo = Object.assign(code, res.userInfo);
                // console.log(that.globalData.g_userInfo)
                wx.setStorageSync('user', that.globalData.g_userInfo)
                var token = wx.getStorageSync('token')
                console.log('token:',token)
                that.getUserInfo();
                that.getSystemInfo();
                that.success = false
              },
              fail: function (res) {
                console.log(res);
                
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
            console.log(11);
            
          }
          console.log('login over');
        }
      })
    
  },
  //
  getUserInfo: function () {
    console.log('getUserInfo ing')
    // debugger
    var url = this.globalData.g_url + '/api/WxApplet/login?dataType=JSON';
    console.log(url);
    var data = this.globalData.g_userInfo;
    data.EntId = "10017";
    data.OrgId = "bdcf4820d9eb43c198101bb981bbbe3b";
    util.request2(url, data, "POST", function (res) {
      console.log(res)
      var get = wx.getStorageSync('token')
      get?get : wx.setStorageSync('token', res.data.Token)
      console.log(res.data.Token)
    })
    console.log('getUserInfo over')
  },
  //用户设备信息
  getSystemInfo: function () {
    console.log('getSystemInfo ing')
    var that = this;
    var url = that.globalData.g_url + '/api/WxApplet/SyncSystemInfo?dataType=JSON';
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.g_phone = res
        var data = res;
        data.EntId = "10017";
        data.OrgId = "bdcf4820d9eb43c198101bb981bbbe3b";
        wx.setStorageSync('phone', that.globalData.g_phone)
        util.request2(url, data, "POST", function (res) {
          var get = wx.getStorageSync('token')
          get ? get : wx.setStorageSync('token', res.data.Token)
        })
      }
    })
    console.log('getSystemInfo ing')
  },
  globalData: {
    
    appid: "wx30b4a19af8d1f8fd",

    g_url: "http://api2.jierutek.com",
    g_userInfo: {},
    g_phone: {},
    code: {},
    EntId:"10017",
    OrgId:"bdcf4820d9eb43c198101bb981bbbe3b"
  }

})