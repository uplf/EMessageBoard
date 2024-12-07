// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
      mes_data:{
      user_account:'',
      realname_info:{check:'true', email:""},
      contract:'',

      theme:'',
      description:"",
      file_index:[],

      solution:[],
      public:'false',
      reuse:'true',
      communicate:[],


      mes_status:'',
      mes_time:'',
      mes_finish_time:'',
      },
      mescate_index:'',
      department_index:'',
      process_unit:{cate_unit:'',department:'',rate:'',status:'',display:"",finish_time:""},
      GD:{ff:"y"},
  },
  //1,调整下一位 2,处理或回复
  assign_task:function(cate_unit_ind,depart_ind)
  {
      var process_unit={cate_unit:'',communicate:[],rate:'',status:'',display:"",finish_time:""}
      process_unit.cate_unit=cate_unit_ind
      process_unit.department=depart_ind
      return process_unit
  },
  mescate_change:function(e){
      console.log(e.detail.value)
      var solu_tmp=this.data.mes_data.solution
    solu_tmp.splice(0,this.data.mes_data.solution.length)
      this.setData({mescate_index:e.detail.value})
      switch(e.detail.value)
      {
          case '0':{
              break
          }
          case '1':{
              solu_tmp.push(this.assign_task(1,0),this.assign_task(2,-1))
              break
          }
          case '2':{
            solu_tmp.push(this.assign_task(2,0))
            break
          }
          case '3':{
            solu_tmp.push(this.assign_task(2,0))
            break
          }
      }

      this.setData({mes_data: {...
                    this.data.mes_data,solution:solu_tmp}})


  },
  department_change:function(e){
      
      var solu_tmp=this.data.mes_data.solution
      this.setData({department_index:e.detail.value})
      solu_tmp.splice(0,solu_tmp.length)
      solu_tmp.push(this.assign_task(2,this.data.department_index))
      this.setData({mes_data: {...
        this.data.mes_data,solution:solu_tmp}})
  },



  /**
   * 生命周期函数--监听页面加载
   */



  onLoad(options) {
    var glo_data=getApp()
    this.setData({GD:glo_data.globalData})
    var tmp_list=glo_data.test_data_mes
    this.setData({list,tmp_list})
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
  onCommit(){
    //###handle
    wx.navigateBack();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})