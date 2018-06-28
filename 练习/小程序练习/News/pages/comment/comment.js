var util = require('../../utils/util.js');
var app = getApp();
const recorderManager = wx.getRecorderManager()
const recordOptions = {
  duration: 60000,
  sampleRate: 16000,
  numberOfChannels: 1,
  encodeBitRate: 48000,
  format: 'mp3',
};
Page({
  data: {
    useKeyboardFlag: true,
    keyboardInputValue: '',
    sendMoreMsgFlag: false,
    chooseFiles: [],
    deleteIndex: -1,
    currentAudio: '',
    networkType: false,
    url: app.globalData.g_url,
    isRecode:false,
    isFinishRecord:false,
    recordFilePath:"",
    second:1
  },
  postId: "",
  //获取新闻的评论数据

  onLoad: function (options) {
    debugger
    recorderManager.onStart(() => {
      console.log("recorderStart")
    });
    recorderManager.onStop((res) => {
      console.log("recorderStop")
      const { tempFilePath } = res
      that.setData({
        recordFilePath: tempFilePath
      })
      console.log("recordFilePath", tempFilePath)
    });

    this.postId = options.id;
    var that = this
    var url = app.globalData.g_url + '/api/Comment/GetCommentList?dataType=JSON';
    var data = { CommentId: options.id, CommentType: "d3a912ec4da440ebb946af8bde835841" }
    util.request(that, url, data, "GET", function (res) {
      that.setData({
        comments: res.Data,
        userInfo: app.globalData.g_userInfo
      })
    })
  },



  postComtent(postId, Message) {

    wx.request({
      url: app.globalData.g_url + '/api/Comment/AddComment?dataType=JSON',
      data: {
        CommentId: postId,
        CommentType: "d3a912ec4da440ebb946af8bde835841",
        Title: "44",
        Message: Message

      },
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded",// 默认值
        "Cookie": wx.getStorageSync('token')
      },
      success: function (res) {
        console.log(res.data)
      }
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

  //切换语音和键盘输入
  switchInputType: function (event) {
    this.setData({
      useKeyboardFlag: !this.data.useKeyboardFlag
    })
  },


  // 获取用户输入
  bindCommentInput: function (event) {
    var val = event.detail.value;
    this.data.keyboardInputValue = val;
  },
  // 提交用户评论
  submitComment: function (event) {

    var that = this;
    if (!that.data.keyboardInputValue) {
      wx.showToast({
        title: '请输入文字',
        duration: 1000,
        icon: "loading"
      })
      return false
    }
    var imgs = this.data.chooseFiles;
    if (imgs.length === 0) {
      var newData = {
        content: this.data.keyboardInputValue
      };
      var content = this.data.keyboardInputValue
      this.postComtent(this.postId, content);
      this.bindCommentData();
      wx.redirectTo({
        url: "/pages/news/news-detail/news-detail?id=" + that.postId
      })
    } else {

      for (var i = 0; i < imgs.length; i++) {

        wx.uploadFile({
          url: app.globalData.g_url + '/api/Comment/AddComment?dataType=JSON',
          filePath: imgs[i],
          name: 'file',
          header: {
            'content-type': "multipart/form-data",
            "Cookie": wx.getStorageSync('token')
          },
          formData: {
            CommentId: that.postId,
            CommentType: "d3a912ec4da440ebb946af8bde835841",
            Title: "img",
            Message: that.data.keyboardInputValue
          },
          success: function (res) {
            debugger
            if (res.statusCode == 200) {
              console.log(res)
              //do something
              that.bindCommentData();
              wx.redirectTo({
                url: "/pages/news/news-detail/news-detail?id=" + that.postId
              })
            }

          }
        })
      }
    }



    //重新渲染并绑定所有评论

    //恢复初始状态
    this.resetAllDefaultStatus();
  },

  //评论成功
  showCommitSuccessToast: function () {
    //显示操作结果

  },
  title: function (content) {
    debugger
    wx.showToast({
      title: content,
      duration: 1000,
      icon: "success"
    })
  },
  //纯文字
  bindCommentData: function () {
    wx.showToast({
      title: "评论成功",
      duration: 1000,
      icon: "success"
    })
  },

  //将所有相关的按钮状态，输入状态都回到初始化状态
  resetAllDefaultStatus: function () {
    //清空评论框
    this.setData({
      keyboardInputValue: '',
      chooseFiles: [],
      sendMoreMsgFlag: false
    });
  },


  //显示 选择照片、拍照等按钮
  sendMoreMsg: function () {
    this.setData({
      sendMoreMsgFlag: !this.data.sendMoreMsgFlag
    })
  },



  //选择本地照片与拍照
  chooseImage: function (event) {
    // 已选择图片数组
    debugger
    var imgArr = this.data.chooseFiles;
    //只能上传3张照片，包括拍照
    var leftCount = 3 - imgArr.length;
    if (leftCount <= 0) {
      return;
    }
    var sourceType = [event.currentTarget.dataset.category],
      that = this;

    wx.chooseImage({
      count: leftCount,
      sourceType: sourceType,
      success: function (res) {
        debugger
        that.setData({
          chooseFiles: imgArr.concat(res.tempFilePaths)
        });
        // 可以分次选择图片，但总数不能超过3张
      }
    })
  },


  //删除已经选择的图片
  deleteImage: function (event) {
    var index = event.currentTarget.dataset.idx,
      that = this;
    that.setData({
      deleteIndex: index
    });

    that.data.chooseFiles.splice(index, 1);
    setTimeout(function () {
      that.setData({
        deleteIndex: -1,
        chooseFiles: that.data.chooseFiles
      });
    }, 500)
  },

  /*开始录音
  recordStart: function () {
    var that = this;
    this.setData({
      recodingClass: 'recoding'
    });
    this.startTime = new Date();
    wx.startRecord({
      success: function (res) {
        console.log('success');
        var diff = (that.endTime - that.startTime) / 1000;
        diff = Math.ceil(diff);

        //发送录音
        //that.submitVoiceComment({ url: res.tempFilePath, timeLen: diff });
      },
      fail: function (res) {
        console.log('fail');
        console.log(res);
      },
      complete: function (res) {
        console.log('complete');
        console.log(res);
      }
    });
  },

  //结束录音
  recordEnd: function () {
    this.setData({
      recodingClass: ''
    });
    this.endTime = new Date();
    wx.stopRecord();
  },

  //提交录音 
  submitVoiceComment: function (audio) {
    var newData = {
      username: userInfo.nickName,
      avatar: userInfo.avatarUrl,
      create_time: new Date().getTime() / 1000,
      content: {
        txt: '',
        img: [],
        audio: audio
      },
    };

    //保存新评论到缓存数据库中
    this.dbPost.newComment(newData);

    //显示操作结果
    this.showCommitSuccessToast();

    //重新渲染并绑定所有评论
    this.bindCommentData();
  },

  playAudio: function (event) {
    var url = event.currentTarget.dataset.url,
      that = this;

    //暂停当前录音
    if (url == this.data.currentAudio) {
      wx.pauseVoice();
      this.data.currentAudio = ''
    }

    //播放录音
    else {
      this.data.currentAudio = url;
      wx.playVoice({
        filePath: url,
        complete: function () {
          //只有当录音播放完后才会执行
          that.data.currentAudio = '';
          console.log('complete')
        },
        success: function () {
          console.log('success')
        },
        fail: function () {
          console.log('fail')
        }
      });
    }
  },
  audio:function(){
    const recorderManager = wx.getRecorderManager()

    recorderManager.onStart(() => {
      console.log('recorder start')
    })
    recorderManager.onResume(() => {
      console.log('recorder resume')
    })
    recorderManager.onPause(() => {
      console.log('recorder pause')
    })
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath } = res
    })
    recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    })

    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3',
      frameSize: 50
    }

    recorderManager.start(options)
  }*/

  takeAudio: function () {
    recorderManager.onStart(() => {
      console.log("recorderStart")
    });
    debugger
    recorderManager.start(recordOptions);
  },

})