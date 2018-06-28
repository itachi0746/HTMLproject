//app.js
App({
  // config: {
  //   host: 'www.jierutek.com'
  // },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: function(res) {
        if (res.code) {  // 用授权码发送请求去服务器
          wx.request({
            url: 'http://localhost:52788/api/WxApplet/login?dataType=JSON',
            data: {
              EntId: "10017",
              OrgId: "bdcf4820d9eb43c198101bb981bbbe3b",
              appId: "wx30b4a19af8d1f8fd",
              code: res.code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
              console.log('请求成功: ', res)
              wx.setStorage({  // 储存获得的3rd_session
                key: '3rd_session',
                data: res.data.Token,
                success(res) {
                  console.log('储存3rd_session成功')

                  // wx.getUserInfo({
                    
                  //   withCredentials: true,
                  //   success:function(res) {
                  //     console.log('res:', res)
                  //   },
                  //   fail: function(err) {
                  //     console.log(err)
                  //   }
                  // })
                }
              })

            },
            fail: function(res) {
              console.log(res)
            }
          })
        }
      }
    })

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         withCredentials: true,
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           // this.globalData.userInfo = res.userInfo
    //           console.log('获取用户信息成功:', res)

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //     else {
    //       console.log('还没授权')
    //     }
    //   },
    //   fail:res => {
    //     console.log('获取用户信息fail')
    //   }
    // })

  },
  globalData: {
    userInfo: null
  }
})