// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      GD:{},
      appli_unfold:'false',
      solu_unfold:'false',
      public_unfold:'false',
      mode:'1',//1本人查看，2仅展示，3处理人查看
    p:{
        num:'',
        user_account:"",
        realname_info:{check:'true', email:""},
        contract:'',
  
        theme:"",
        description:"",
        file_index:[],
  
        solution:[],
        public:'false',
        reuse:'true',
        communicate:[],
  
  
        mes_status:'1',
        mes_time:'',
        mes_finish_time:'',
        },
        mescate_index:'',
        department_index:'',
        process_unit:{cate_unit:'',department:'',communicate:[],rate:'0',status:'',display:"",finish_time:""},
        communicate_unit:{senderdep:"",sendername:"",info:"",user_read:'false',attachment:[],time:""},


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
      
    var glo_data=getApp()
    this.setData({GD:glo_data.globalData})
    this.setData({p:glo_data.globalData.CUR_MES})
    this.setData({mode:e.mode})
    glo_data.globalData.CUR_MES=''
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
  appli_fold_change(){
      var x=!this.data.appli_unfold
        this.setData({appli_unfold:x})
  },
  solu_fold_change(){
      var x=!this.data.solu_unfold
      this.setData({solu_unfold:x})
  },
  public_fold_change(){
        var x=!this.data.public_unfold
        this.setData({public_unfold:x})
  }
})

console.log("12231231231")