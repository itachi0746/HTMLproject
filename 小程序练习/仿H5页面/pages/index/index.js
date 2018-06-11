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
    ewm: 'http://erp.jierutek.com/Files/10017/bdcf4820d9eb43c198101bb981bbbe3b/2016-03/PS/Images/b105803b93024526b4f665c508537eef.jpg',
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    vertical: true,
    imgMode: 'scaleToFill',
    _music: 'musicRotate',
    musicObj: {}
  },

  onLoad: function () {
    const innerAudioContext = wx.createInnerAudioContext()

    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = 'http://erp.jierutek.com/Files/10017/bdcf4820d9eb43c198101bb981bbbe3b/2017-11/OBJ_PART_CONTENT/Annex/78f3c58788c04a0687cf3179662d3154.mp3'
    this.setData({
      musicObj: innerAudioContext
    })
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
      this.setData({
        _music: 'musicRotate'
        
      })
    })
    innerAudioContext.onPause(() => {
      console.log('暂停播放')
      this.setData({
        _music : ''

      })
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  playMusic: function () {  // 点击播放 暂停
    var music = this.data.musicObj
    music.paused ? music.play() : music.pause()

  },
  preview: function(e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.ewm.split(),
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  onShow: function () {

  },

  getUserInfo: function(e) {

  }
})
