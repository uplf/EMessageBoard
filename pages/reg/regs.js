
Page({

  /**
   * 页面的初始数据
   */
  data: {
      APP:{},
      GD:{},
      reg_info:{
          username:'',
          password:'',
          usertype:'',
          userdepartment:'',
          contract:'',
          name:'',
          openid:'',
          userschool:'',
      },

      type_index:'',
      department_index:'',
      school_index:'',
      errorflag:0,
      Obj_type_arrey:[
          {id:0,name:"华工学生"},{id:1,name:"权益部工作人员"},{id:2,name:"部门工作人员"}
      ],


  },




  
  

  bindTypePickerChange: function(e) {
    
    this.setData({
        'reg_info.usertype':e.detail.value
      })
  },
  bindSchoolPickerChange: function(e) {
    this.setData({
        'reg_info.userschool':e.detail.value
      })
 
  },
  bindDepartmentPickerChange: function(e) {

    this.setData({
      'reg_info.userdepartment': e.detail.value
    })
  },
  password_change:function(event){
    this.setData({
        'reg_info.password': event.detail.value
      })
  },
  contract_change:function(event){
    this.setData({
        'reg_info.contract': event.detail.value

      })
  },
  name_change:function(event){
    this.setData({
        'reg_info.name': event.detail.value
      })
  },

  formChange:function(e){

  },
  formSubmit:function(e){

  },

  bindResetForm:function(){
    this.setData({errorflag:0})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const glo_data=getApp()

    this.setData({
        //index: e.detail.value
        reg_info:{...this.reg_info,openid:options.openid},
        GD:glo_data.globalData
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //getApp().globalData.LOGIN_STATUS='1'

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

  new_user: function (user_define){
      console.log("user_to_add",user_define)
    wx.cloud.callFunction({
      name:"addMessage",//调用的云函数名称

      //传参。没有的字段会被自动忽略
      data:{
        list:"userinfo",
        data:user_define,
      }
    }).then(res => {
      //在这里操作返回值res
      if(res.result.success==true)
      {
        return '1'
      }
      else return '0'
    })
    .catch(console.error)// try-catch,异常会在控制台打印，可省略
  },

  bindComfirmForm(){
      //登记
    var user_cur=this.data.reg_info

    var user_define={  
        user_type:user_cur.usertype,
        num:user_cur.openid,
        openid:user_cur.openid, //union_id
        user_account:user_cur.name,    //name
        //realname_info:{check:'', email:""},
        contract:user_cur.contract,
        avail:(user_cur.usertype!='0'&&user_cur.password!="1111"?'0':'1'),
        depart_num:user_cur.userdepartment  ,
}
    //##将user_define发送数据库，等待数据库记录 返回flag（失败）对应'0'
    var flag = this.new_user(user_define)
    var glo_data=getApp()

    if(flag=='0'||(user_define.user_type=='2'&&(!user_define.depart_num))||(!user_define.user_type))
    {
        this.setData({errorflag:1})
        return
    }


    glo_data.globalData.CUR_USER=user_define
    if(user_define.avail=='0')wx.navigateBack()
    switch(user_define.user_type)
    {
        case "0":
            {
                glo_data.globalData.LOGIN_STATUS='1'
                wx.redirectTo({
                    url: ('/pages/menu/user_menu'),
                  })
                break
            }
        case "1":
            {
                glo_data.globalData.LOGIN_STATUS='3'
                wx.redirectTo({
                    url: ('/pages/menu/admin_menu'),
                  })
                break
            }
        case "2":
            {
                glo_data.globalData.LOGIN_STATUS='2'
                wx.redirectTo({
                    url: ('/pages/menu/admin_menu'),
                  })
                break
            }
    }






    

  }
},
)