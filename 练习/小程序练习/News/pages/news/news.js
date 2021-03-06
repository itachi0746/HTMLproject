var util = require('../../utils/util.js');

var app = getApp();
console.log(app.success ? app.success : true)
Page({
  data: {
    page: 1,
    networkType: false,
    loading:false,
    success: app.success ? app.success:true,
    imgUrls: []
  },
  // http://api2.jierutek.com/Help
  url: app.globalData.g_url + '/api/News/Get?EntId=' + app.globalData.EntId + '&OrgId=' + app.globalData.OrgId + '&ContentType=d3a912ec4da440ebb946af8bde835841&dataType=JSON',

  // 获取企业信息 TODO
  // getEntData: function() {
  //   let that = this
  //   let url = app.globalData.g_url + '/api/Ent/PostAds'
  //   let data = {
  //     EntId: app.globalData.EntId,
  //     OrgId: app.globalData.OrgId
  //   }

  //   util.request2(url, data, 'POST', function (res) {

  //   })

  // },

  // 获取轮播图图片url
  getImgUrls: function() {
    let that = this
    let url = app.globalData.g_url + '/api/Ent/PostAds'
    let data = {
      EntId: app.globalData.EntId,
      OrgId: app.globalData.OrgId
    }

    util.request2(url, data, 'POST', function (res) {
      console.log('getImgUrls',res.data)
      let temp = []
      
      for (let i = 0; i < res.data.Data.length; i ++ ) {
        temp.push(app.globalData.g_url + res.data.Data[i].ImageUrl)
      }
      // console.log(temp)
      that.setData({
        imgUrls: temp
      })
    })
  },
  
  getData: function(data){  // get成功后, 渲染页面
    // console.log('news getData start')
    var news = [];
    for (var i in data.Models) {
      var subject = data.Models[i]
      var title = subject.CM03_FULL_TITILE
      if (title.length >= 6) {
        title = title.substring(0, 6) + "";
      };
      var temp = {
        id: subject.CM03_CONTENT_ID,
        title: title,
        CM03_VISIT_COUNT: subject.CM03_VISIT_COUNT,
        CM03_PRAIE_COUNT: subject.CM03_PRAIE_COUNT,
        CM03_COMMENT_COUNT: subject.CM03_COMMENT_COUNT,
        CM03_TEXT: subject.CM03_TEXT,
        CM03_SUMMARY: subject.CM03_SUMMARY,
        CM03_IMG: app.globalData.g_url +subject.CM03_PIC_URL1
      }
      news.push(temp)
    }
    this.setData({news:news})
    // console.log(news);
    wx.stopPullDownRefresh();
    //隐藏loading状态
    wx.hideNavigationBarLoading();
    // console.log('news getData end')
  },
  onLoad: function (options) {

    debugger
    console.log('news onload start')
    this.getImgUrls()

    // var scene = decodeURIComponent(options.scene)
    // var query = options.query.EntId
    // console.log(scene)

    var that = this;
    var token = wx.getStorageSync('token');
    wx.showNavigationBarLoading();
    var url = that.url + "&PageIndex=1&PageSize=4";  // 页数 新闻数
    util.request(that, url, "", 'GET', function (data) {
      that.getData(data)
    });

  },

  // target 和currentTarget
  // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
  // target这里指的是image，而currentTarget指的是swiper
  // 点击swiper
  onSwiperTap: function (event) {
   console.log('点击swiper',event)
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: "news-detail/news-detail?id=" + postId
    })
  },
  onPullDownRefresh: function (event){
    var that=this
    wx.showNavigationBarLoading();
    var refreshUrl = this.url +"&PageIndex=1&PageSize=4"
    //刷新页面后将页面所有初始化参数恢复到初始值
    this.data.news = [];
    util.request(that,refreshUrl, '','GET', this.getData);
    this.setData({
      page:1
    })
  },
  onReachBottom:function (event) {
    var news1 = this.data.news,that=this
    //拼接下一组数据的URL
    var nextUrl = this.url+"&PageIndex=" + (this.data.page+1) + "&PageSize=4";
    that.setData({
      loading:true,
      loadingOver: false
    })
    util.request(that,nextUrl,'','GET', function(data){
        var news2 = [], page = that.data.page;
        for (var i in data.Models) {
          var subject = data.Models[i]
          var title = subject.CM03_FULL_TITILE
          if (title.length >= 15) {
            title = title.substring(0, 15) + "";
          };
          var temp = {
            id: subject.CM03_CONTENT_ID,
            title: title,
            CM03_VISIT_COUNT: subject.CM03_VISIT_COUNT,
            CM03_PRAIE_COUNT: subject.CM03_PRAIE_COUNT,
            CM03_COMMENT_COUNT: subject.CM03_COMMENT_COUNT,
            CM03_TEXT: subject.CM03_TEXT,
            CM03_SUMMARY: subject.CM03_SUMMARY,
            CM03_IMG: app.globalData.g_url + subject.CM03_PIC_URL1

          }
          news2.push(temp)
        }
        var news=news1.concat(news2);
        if (data.RecordCount < news.length){
          // console.log('RecordCount',data.RecordCount)
          that.setData({
            loading: false,
            loadingOver:true,
          })
          // 如果没有更多  就取消这个事件
          that.onReachBottom = function() {
            return false
          }
        }else{
          that.setData({
            loading:false,
            loadingOver:false,
            news: news,
            page: page += 1
          })
        }
      wx.stopPullDownRefresh();
      //隐藏loading状态
      wx.hideNavigationBarLoading();
    })
    //显示loading状态
    wx.showNavigationBarLoading();

  },

  // 点击新闻
  onTapToDetail(event) {
    // debugger
    var postId = event.currentTarget.dataset.postId;
    // console.log(postId);
    wx.navigateTo({
      url: "news-detail/news-detail?id=" + postId
    })

  },
  onShareAppMessage: function () {

    return {
      title: '接入信息小程序',
      desc: '欢迎使用',
      path: '/pages/index/index'
    }
  }


})



