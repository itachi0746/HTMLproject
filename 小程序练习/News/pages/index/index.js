//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    motto: 'Welcome',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userConfirm: false,
    hasToken: false

  },
  // 跳转去新闻页面
  goToNews: function() {
    wx.redirectTo({
      url: '../news/news',
    })
    console.log('goToNews')
  },

  //授权后的流程
  goToNews2: function() {
    // debugger

    // ==============================
    var that = this;

    wx.checkSession({ // 检查登录态
      success: function() {
        // debugger
        console.log('登录态未过期')
        that.setData({
          hasToken: true
        })
        wx.getSetting({
          success: res => {
            console.log('getSetting', res)
          }
        })
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function() {
        console.log('登录态已经过期,重新执行登录流程')
        // session_key 已经失效，需要重新执行登录流程
        debugger
        wx.login({
          success: function(res) {
            console.log('index login');
            debugger
            if (res.code) {
              app.globalData.code = res.code;
              console.log('app.globalData.code:', app.globalData.code)
              var code = {
                code: res.code,
                appid: app.globalData.appid
              };

              app.globalData.g_userInfo = Object.assign(code, app.globalData.g_userInfo);
              // var token = wx.getStorageSync('token')
              console.log('app.globalData.g_userInfo:', app.globalData.g_userInfo)
              that.doLogin();
              that.getSystemInfo();
              app.success = false

            } else {
              console.log('获取用户登录态失败！' + res.errMsg)

            }
            console.log('login end');
          }
        })

      }
    })
  },
  onLoad: function() {
    let that = this
    console.log('index onload',this.data)


    if (app.globalData.userInfo) {
      console.log(1)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      console.log(2)
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      console.log(3)
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        // var that = this
        if (res.authSetting['scope.userInfo']) {
          // var _get = wx.getStorageSync('token')
          // console.log(_get)
          wx.getUserInfo({
            withCredentials: true,
            success: function (res) {
              //用户已经授权过
              app.globalData.g_userInfo = res.userInfo
              wx.setStorageSync('user', res.userInfo)

              console.log('用户已经授权过,用户信息:', res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true,
                hasToken: true
              })
            }
          })
        }
      }
    })
  },
  getUserInfo: function(e) { // 获得授权按钮点击事件
    var that = this;

    console.log('index 自定义getUserInfo start:', e)
    if (e.detail.userInfo) { // 用户点击授权
      app.globalData.g_userInfo = e.detail.userInfo
      wx.setStorageSync('user', e.detail.userInfo)

      console.log('用户点击授权,可获得用户信息:', e.detail.userInfo)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.goToNews2();
    } else { // 用户点击拒绝
      wx.showModal({
        title: '请前往授权',
        content: '未经授权暂无法查看该应用',
        success(res) {
          if (res.confirm) { // 用户点击确定
            // that.setData({
            //   userConfirm: true
            // })
            wx.showToast({
              title: '请点击授权',
              icon: 'none',
              duration: 2000
            })
          } else if (res.cancel) { // 用户点击拒绝
            console.log('55555555')
            wx.showToast({
              title: '拒绝授权将不能正常访问程序',
              icon: 'none',
              duration: 2000
            })

          }
        }
      })
    }
  },
  // 用code去登录
  doLogin: function() {
    console.log('index doLogin start');
    debugger
    var url = app.globalData.g_url + '/api/WxApplet/login?dataType=JSON';
    var that = this;
    // console.log(that);
    var data = app.globalData.g_userInfo;
    data.EntId = "10017";
    data.OrgId = "bdcf4820d9eb43c198101bb981bbbe3b";
    util.request2(url, data, "POST", function(res) {
      console.log(res)
      var get = wx.getStorageSync('token')
      get ? get : wx.setStorageSync('token', res.data.Token)
      app.globalData.hasToken = true,
        that.setData({
          hasToken: true
        })
      console.log(wx.getStorageSync('token'))
    })
    console.log('index doLogin end')
  },
  //用户设备信息
  getSystemInfo: function() {
    debugger
    console.log('getSystemInfo start')
    var that = this;
    var url = app.globalData.g_url + '/api/WxApplet/SyncSystemInfo?dataType=JSON';
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        app.globalData.g_phone = res
        var data = res;
        data.EntId = "10017";
        data.OrgId = "bdcf4820d9eb43c198101bb981bbbe3b";
        wx.setStorageSync('phone', app.globalData.g_phone)
        util.request2(url, data, "POST", function(res) {
          var get = wx.getStorageSync('token')
          get ? get : wx.setStorageSync('token', res.data.Token)
        })
      }
    })
    console.log('getSystemInfo end')
  }
})