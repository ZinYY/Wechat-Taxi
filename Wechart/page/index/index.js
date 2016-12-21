var app = getApp()
Page({
  data: {
    motto: "",
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../user/user'
    })
  },
  onLoad: function () {
    app.getUserInfo(function(userInfo){
      //更新数据
      this.setData({
        userInfo:userInfo,
        motto:"Pulsar"
      })
    })
  }
})