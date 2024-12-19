// pages/menu/user_menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  UserInfo(){
      wx.navigateTo({
        url: '/pages/detail/user_info?CkEE=1&CkER=1',
      })
  },

  EditAppl(){
    wx.navigateTo({
      url: '/pages/edit/edit',
    })
  },
  ViewAppl(){
    wx.navigateTo({
      url: '/pages/list/list?mode=1',
    })
  },
  Exit(){
    console.log("exitttttt")
      const APP=getApp()
      APP.CUR_USER={}
      wx.navigateBack({
        delta: 0,
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})