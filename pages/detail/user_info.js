// pages/detail/user_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    GD:{},
    display_user:{},
    checker:'0',//查看模式    1查看自己 2查看“被管理”者 3单纯查看 
    checkee:'0',//被查看者身份 1用户 2管理员 3维护者
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({checkee:options.CkEE});
    this.setData({checker:options.CkER});
    var glo_data=getApp()
    this.setData({GD:glo_data.globalData})
    this.setData({display_user:glo_data.globalData.user_demo})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})