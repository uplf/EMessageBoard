// pages/menu/admin_menu.js
Page({
    GD:{},

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var glo_data=getApp()
    this.setData({GD:glo_data.globalData})
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

  },
  UserInfo(){
    var app0=getApp()
    app0.globalData.user_demo=app0.globalData.CUR_USER
    wx.navigateTo({
        url: '/pages/detail/user_info?CkEE=2&CkER=1',
      })
  },
  ViewMyAppl(){
    wx.navigateTo({
        url: '/pages/list/list?mode=2',
      })
  },
  ViewGloAppl(){
    wx.navigateTo({
        url: '/pages/list/list?mode=1',
      })
  },
  Exit(){
    const APP=getApp()
    APP.CUR_USER={}
    wx.navigateBack({
      delta: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
},
//还有九个函数处理我就不写啦
})