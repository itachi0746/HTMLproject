//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    welcomeImg: '../../image/indexLogo.png',
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
    console.log('转到新闻页')
  },
  // 检查token
  checkToken: function() {
    let that = this;
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })

    const url = app.globalData.g_url + '/api/WxApplet/LoginStatus';

    util.request2(url, '', "POST", function(res) { // 登录态检查
      console.log('登录态检查', res)

      if (res.data.Code === '200') { // 登录态未过期

        console.log('登录态未过期')
        that.setData({
          hasToken: true
        })
        that.goToNews()

      } else { // 登录态过期

        console.log('登录态已经过期,重新执行登录流程')
        debugger
        wx.login({
          success: function(res) {
            debugger
            if (res.code) {
              console.log('获取code成功');
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

  onLoad: function(options) {
    let that = this
    // console.log(options)
    console.log('index onload', this.data)


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
      success: function(res) {
        // var that = this
        if (res.authSetting['scope.userInfo']) {
          // var _get = wx.getStorageSync('token')
          // console.log(_get)
          wx.getUserInfo({
            withCredentials: true,
            success: function(res) {
              //用户已经授权过
              app.globalData.g_userInfo = res.userInfo
              wx.setStorageSync('user', res.userInfo)

              console.log('用户已经授权过,用户信息:', res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true,
              })

              that.checkToken()
            },
            fail: function(res) {
              console.log('用户没有授权过')
            }
          })
        }
      }
    })
  },

  getUserInfo: function(e) { // 授权按钮点击事件
    var that = this;

    if (e.detail.userInfo) { // 用户点击授权
      // wx.showLoading({
      //   mask: true
      // })
      app.globalData.g_userInfo = e.detail.userInfo
      wx.setStorageSync('user', e.detail.userInfo)

      console.log('用户点击授权,可获得用户信息:', e.detail.userInfo)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.checkToken();
    } else { // 用户点击拒绝
      wx.showModal({
        title: '请前往授权',
        content: '未经授权暂无法查看该应用',
        success(res) {
          if (res.confirm) { // 用户点击确定

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
    console.log('使用code去登录获取token')
    debugger
    var url = app.globalData.g_url + '/api/WxApplet/login?dataType=JSON';
    // var url = app.globalData.g_url + '/api/WxApplet/login?dataType=JSON';
    var that = this;

    var data = app.globalData.g_userInfo;
    data.EntId = app.globalData.EntId;
    data.OrgId = app.globalData.OrgId;

    util.request2(url, data, "POST", function(res) {
      console.log(res)
      var get = wx.getStorageSync('token')
      get ? get : wx.setStorageSync('token', res.data.Token) // 储存token
      app.globalData.hasToken = true,
        that.setData({
          hasToken: true
        })
      console.log(wx.getStorageSync('token'))
      that.goToNews()
    })

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
        data.EntId = app.globalData.EntId;
        data.OrgId = app.globalData.OrgId;
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