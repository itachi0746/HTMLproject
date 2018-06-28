Page({

  /* 页面的初始数据*/
  data: {
    a:6
  },

  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {

  },

  /*生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /*生命周期函数--监听页面显示 */
  onShow: function () {

  },

  /*生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {
    console.log(111)
  },

  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {
    console.log(22)
  },
  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  },
  //预览电影海报
  viewMoviePostImg: function (event) {
    var src = event.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src]
    })
  },
  onTapToDetail: function (event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: "/pages/post/post-comment/post-comment?id=postId"
    })
  }
})