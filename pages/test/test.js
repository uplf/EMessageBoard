// pages/test/test.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },


  public(){
    wx.navigateTo({
        url: '/pages/list/list?mode=0',
      })
  }

})