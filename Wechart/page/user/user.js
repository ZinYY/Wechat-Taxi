var index=getApp()
Page({
    data:{
        money:"1000"
    },
    findtex:function(){
        wx.navigateTo({
          url: '../map/map',
        })
    },
    redbag:function(){
      wx.navigateTo({
          url: '../redbag/redbag',
        })
    },
    mymoneybag:function(){
         wx.navigateTo({
          url: '../mymoney/mymoney',
        })
    },
    near:function(){
         wx.navigateTo({
          url: '../search/near',
        })
    }
    
})