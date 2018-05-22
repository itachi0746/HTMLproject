//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
        },
        fail: res => {
          console.log('wx.getUserInfo 失败')
          this.setData({
            getUserInfoFail: true
          })
        }
      })
    }
  },
  login: function () {
    console.log('login start')
    var that = this
    // if (typeof success == "function") {
    //   console.log(6);
    //   console.log('success');
    //   this.data.getUserInfoSuccess = success
    // }
    wx.login({
      success: function (res) {
        var code = res.code;
        console.log('code: ', code);
        wx.getUserInfo({
          success: function (res) {
            console.log(7);
            app.globalData.userInfo = res.userInfo
            that.setData({
              getUserInfoFail: false,
              userInfo: res.userInfo,
              hasUserInfo: true

            })
            //平台登录
          },
          fail: function (res) {
            // console.log(8);
            console.log('未授权无法使用wx.getUserInfo:', res);
            that.setData({
              getUserInfoFail: true
            })
          }
        })
      }
    })
  },
  onShow: function () {
    this.login();
  },
  // 点击获取用户信息
  bindGetUserInfo: function(e) {
    console.log('点击获取用户信息')
    // console.log(e.detail.userInfo)
    if(e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })

    }else {
      this.openSetting();
    }
    // console.log(this.data.userInfo)
  },
  //如果用户拒绝授权,跳转设置页面授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          console.log('openSetting');
          //尝试再次登录
          that.login()
        }
      })
    } else {
      console.log(10);
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  }
})
