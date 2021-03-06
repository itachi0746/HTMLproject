var util = require('./utils/util.js')
App({
  success:true,

  onLaunch: function (options) {
    console.log('app onLaunch');

    var scene = decodeURIComponent(options.scene)
    console.log('app options', options, scene);
  },
  
  getUserInfo: function () {
    console.log('app自定义 getUserInfo start');
    // debugger
    var url = this.globalData.g_url + '/api/WxApplet/login?dataType=JSON';
    // console.log(url);
    var data = this.globalData.g_userInfo;
    data.EntId = this.globalData.EntId;
    data.OrgId = this.globalData.OrgId;
    util.request2(url, data, "POST", function (res) {
      // console.log(res)
      var get = wx.getStorageSync('token')
      console.log(get)
      get?get : wx.setStorageSync('token', res.data.Token)
      console.log(get)
    })
    console.log('app getUserInfo end')
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
        data.EntId = this.globalData.EntId;
        data.OrgId = this.globalData.OrgId;
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
    // g_url: "http://localhost:52788",

    g_url: "https://api2.jierutek.com",
    g_userInfo: {},
    g_phone: {},
    code: {},
    EntId:"10017",
    OrgId:"bdcf4820d9eb43c198101bb981bbbe3b"
  }

})