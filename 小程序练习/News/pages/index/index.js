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
    refuse: false
  },
  // 跳转
  goToNews: function() {
    wx.redirectTo({
      url: '../news/news',
    })
  },

  //事件处理函数
  goToNews2: function () {
    debugger

    // ==============================
    var that = this;

    wx.checkSession({  // 检查登录态
      success: function () {
        debugger
        console.log('登录态未过期')
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        console.log('登录态已经过期,重新执行登录流程')
        // session_key 已经失效，需要重新执行登录流程
        debugger
        wx.login({
          success: function (res) {
            console.log('index login');
            debugger
            if (res.code) {
              app.globalData.code = res.code;
              console.log(app.globalData.code)
              var code = { code: res.code, appid: "wx30b4a19af8d1f8fd" };
              wx.getUserInfo({
                success: function (res) {
                  debugger
                  console.log('index getUserInfo成功: ', res);

                  app.globalData.g_userInfo = Object.assign(code, res.userInfo);
                  console.log('g_userInfo:', app.globalData.g_userInfo)
                  wx.setStorageSync('user', app.globalData.g_userInfo)
                  // var token = wx.getStorageSync('token')
                  // console.log('index get token:', token)
                  that.doLogin();
                  // that.getSystemInfo();
                  app.success = false
                },
                fail: function (res) {
                  console.log('app getUserInfo失败: ', res);
                }
              })
            }
            else {
              console.log('获取用户登录态失败！' + res.errMsg)

            }
            console.log('login end');
          }
        })

      }
    })
  },
  onLoad: function () {
    console.log('index onload')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
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
  },
  getUserInfo: function (e) {  // 获得授权按钮点击事件
    var that = this;
    console.log('index 自定义getUserInfo start:', e)
    if (e.detail.userInfo) {  // 用户点击授权
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.goToNews2();
    }
    else {  // 用户点击拒绝
      wx.showModal({
        title: '请前往授权',
        content: '未经授权暂无法查看该应用',
        success(res) {
          if (res.confirm) {  // 用户点击确定
            app.globalData.refuse = true,
              that.setData({
              refuse: true
            })

          } else if (res.cancel) {  // 用户点击拒绝
            console.log('55555555')
          }
        }
      })
    }
  },
  // 用code去登录
  doLogin: function () {
    console.log('index doLogin start');
    debugger
    var url = app.globalData.g_url + '/api/WxApplet/login?dataType=JSON';
    // console.log(url);
    var data = app.globalData.g_userInfo;
    data.EntId = "10017";
    data.OrgId = "bdcf4820d9eb43c198101bb981bbbe3b";
    util.request2(url, data, "POST", function (res) {
      console.log(res)
      var get = wx.getStorageSync('token')
      get ? get : wx.setStorageSync('token', res.data.Token)
      console.log(wx.getStorageSync('token'))
    })
    console.log('index doLogin end')
  },
  //用户设备信息
  getSystemInfo: function () {
    debugger
    console.log('getSystemInfo start')
    var that = this;
    var url = app.globalData.g_url + '/api/WxApplet/SyncSystemInfo?dataType=JSON';
    wx.getSystemInfo({
      success: function (res) {
        app.globalData.g_phone = res
        var data = res;
        data.EntId = "10017";
        data.OrgId = "bdcf4820d9eb43c198101bb981bbbe3b";
        wx.setStorageSync('phone', app.globalData.g_phone)
        util.request2(url, data, "POST", function (res) {
          var get = wx.getStorageSync('token')
          get ? get : wx.setStorageSync('token', res.data.Token)
        })
      }
    })
    console.log('getSystemInfo end')
  }
})
