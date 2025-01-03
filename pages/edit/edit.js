// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //num 000000-999999
      mes_data:{
      user_account:'',//user_account
      realname_info:{check:'0', email:""},//realname_info
      contract:'',//contract **点击确定之后，从CUR_USER中渠道对应信息

      theme:'',//theme **bindchange时记录并写入
      description:"",//discription  **bindchange时记录并写入
      file_index:[],//#

      solution:[],
      public:'0',//y**bindchange时记录并写入
      reuse:'0',//y**bindchange时记录并写入
      communicate:[],//y##**bindchange时记录并写入


      mes_status:'',//**点击确认之后直接确定为“正在处理状态”
      mes_time:'',//** 点击确认之后直接确定*/
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

  checkbox_change:function(e){
      if(e.detail.value.includes("1"))
      if(e.detail.value.includes("1"))console.log("gogogog")
      this.setData({'mes_data.realname_info.check':(e.detail.value.includes("1")?'1':'0')})
      this.setData({'mes_data.reuse':(e.detail.value.includes("2")?'0':'1')})
      this.setData({'mes_data.public':(e.detail.value.includes("3")?'1':'0')})
  },
  theme_change:function(e){
      console.log(e)
      this.setData({'mes_data.theme':e.detail.value})
  },
  description_change:function(e){
    this.setData({'mes_data.description':e.detail.value})
},

  /**
   *                     'mes_data.reuse':(e.detail.value.includes("2")?'1':'0'),
                    'mes_data.public':(e.detail.value.includes("3")?'1':'0')}
   * 生命周期函数--监听页面加载
   */



  onLoad(options) {
    var glo_data=getApp()
    //glo_data.globalData.CUR_USER=glo_data.globalData.user_demo
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

  add_mes: function (mes_define){
    wx.cloud.callFunction({
      name:"addMessage",//调用的云函数名称

      //传参。没有的字段会被自动忽略
      data:{
        list:"MessageList",
        data:mes_define,
      }
    }).then(res => {
        return res.result.num
    })
    .catch(console.error)// try-catch,异常会在控制台打印，可省略
  },

  onCommit(e){
    console.log('test')
    var mes_define=this.data.mes_data
    const appData=getApp()
    mes_define.user_account=appData.globalData.CUR_USER.num
    if(mes_define.realname_info.check=='1'&&appData.globalData.CUR_USER.realname_info.email)mes_define.realname_info.email=appData.globalData.CUR_USER.realname_info.email
    mes_define.contract=appData.globalData.CUR_USER.contract
    mes_define.mes_status='1'
    mes_define.mes_time=Date()
    //CUR_USER.num=account
    this.setData({mes_data:mes_define})
    mes_define.solution[0].status='2'
    mes_define.cur_solution=mes_define.solution[0]
    //##在这里将mes_define存到信息数据库中,这时可以分配微信id自建一个变量)和流水号->mes_define.num
    mes_define.num = this.add_mes(mes_define)

    wx.navigateBack();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})