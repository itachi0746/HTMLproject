//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/1.jpg',
      '../../image/2.jpg',
      '../../image/3.jpg'
    ] ,
    musicUrl: '../../image/normalmusic.svg',
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    vertical: true,
    imgMode: 'scaleToFill'
  },

  onLoad: function () {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  getUserInfo: function(e) {

  }
})
