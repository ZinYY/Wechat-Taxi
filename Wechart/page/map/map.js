var app = getApp()
Page( {
    onLoad:function(){
        wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        
    },
  data: {
      latitude:42.321321,
      longitude:10.213,
      driver:9
  }
})