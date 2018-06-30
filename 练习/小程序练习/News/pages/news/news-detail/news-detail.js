var WxParse = require('../../../wxParse/wxParse.js');
var util = require('../../../utils/util.js');
var app=getApp()
Page({
  data: {
    url: app.globalData.g_url,
    show:false,
    networkType: false
  },
  postId:"",
  onLoad: function (options){
    this.postId=options.id
    var we = this;
    var url= app.globalData.g_url+'/api/News/Detail?dataType=JSON',id= {Id:this.postId}
    var url1 = app.globalData.g_url + '/api/Comment/GetCommentList?dataType=JSON';
    var data1 = { CommentId: options.id, CommentType: "d3a912ec4da440ebb946af8bde835841" }
    // 获取新闻文章的请求
    util.request(we,url, id, "GET", function (res) {
      console.log('detail11',res)
       var insertData = res.Data.CM03_TEXT;
        WxParse.wxParse('insertData', 'html', insertData, we);
        we.setData({
          news:{
            id: res.Data.CM03_CONTENT_ID,
            readNum: res.Data.CM03_VISIT_COUNT,
            commentNum: res.Data.CM03_COMMENT_COUNT,
            praie: res.Data.CM03_PRAIE_COUNT,
            reward:res.Data.CM03_IS_REWARD
          },
          show:true
        })
        wx.setNavigationBarTitle({
          title: res.Data.CM03_FULL_TITILE
        })
        // 获取评论的请求
        util.request(we,url1, data1, "GET", function (res) {
          console.log('detail22', res)
          we.setData({
            comments: res.Data,
            userInfo: app.globalData.g_userInfo
          })
        })  
    })
  },
  //预览图片
  previewImg: function (event) {
    debugger
    //获取评论序号
    var commentIdx = event.currentTarget.dataset.commentIdx,
      //获取图片在图片数组中的序号
      imgIdx = event.currentTarget.dataset.imgIdx,
      imgone = event.currentTarget.dataset.imageUrl,
      //获取评论的全部图片
      imgs = this.data.comments[commentIdx].Images,
      imgAll = [];
    for (var i = 0; i < imgs.length; i++) {
      var item = this.data.url + imgs[i];
      imgAll.push(item)

    }
    wx.previewImage({
      current: imgone, // 当前显示图片的http链接
      urls: imgAll // 需要预览的图片http链接列表
    })
  },
  onCommentTap: function (event) {
    
    var id = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '/pages/comment/comment?id=' + id
    })
  },
  onUpTap:function(){
    debugger
    var url =app.globalData.g_url+"/api/News/Praise/"+this.postId+"?dataType=JSON",
    id = {}
    util.request(this,url,id,"POST",function(data){
       console.log(data)
    })
  }
 
})