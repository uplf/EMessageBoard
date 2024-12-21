
Page({

  /**
   * 页面的初始数据
   */
  data: {
      GD:{},
      reg_info:{
          username:'',
          password:'',
          usertype:'',
          userdepartment:'',
          contract:'',
          name:'',
          unionid:'',
          userschool:'',
      },
      kkk:'d',
      type_index:'',
      department_index:'',
      school_index:'',
      errorflag:0,
      Obj_type_arrey:[
          {id:0,name:"华工学生"},{id:1,name:"权益部工作人员"},{id:2,name:"部门工作人员"}
      ],


  },




  
  

  bindTypePickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
        //index: e.detail.value
        //reg_info:{...this.reg_info,usertype:e.detail.value}
        'reg_info.usertype':e.detail.value
      })
    console.log('type_index发送选择改变，携带值为', this.data.type_index)
  },
  bindSchoolPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
        //index: e.detail.value
        'reg_info.userschool':e.detail.value
        //reg_info:{...this.reg_info,userschool:e.detail.value}
      })
    console.log('school_index发送选择改变，携带值为', this.data.school_index)
  },
  bindDepartmentPickerChange: function(e) {
    console.log('school发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      //index: e.detail.value
      'reg_info.userdepartment': e.detail.value
    })
    console.log('department_index发送选择改变，携带值为', this.data.department_index)
  },
  password_change:function(event){
    this.setData({
        //index: e.detail.value
        //reg_info:{...this.reg_info,password:event.detail.value}
        'reg_info.password': event.detail.value
      })
  },
  contract_change:function(event){
    this.setData({
        //index: e.detail.value
        //reg_info:{...this.reg_info,contract:event.detail.value}
        'reg_info.contract': event.detail.value

      })
  },
  name_change:function(event){
    this.setData({
        //index: e.detail.value
        //reg_info:{...this.reg_info,name:event.detail.value}
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
    var glo_data=getApp()
    if(glo_data.globalData.LOGIN_STATUS!='4')wx.navigateBack({})
    this.setData({GD:glo_data.globalData})
    this.setData({
        //index: e.detail.value
        reg_info:{...this.reg_info,unionid:options.unionid}
      })
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
  bindComfirmForm(){
      //登记
      
    var user_cur=this.data.reg_info

    var user_define={  
        user_type:user_cur.usertype,
        //num:'',
        usernum:user_cur.unionid, //union_id
        user_account:user_cur.name,    //name
        //realname_info:{check:'', email:""},
        contract:user_cur.contract,
        avail:(user_cur.usertype!='0'&&user_cur.password!="1111"?'0':'1'),
        depart_num:user_cur.userdepartment  ,
        num:'',
}
    //##将user_define发送数据库，等待数据库记录
    var num='100812'//temp
    var flag='1'//temp

    if(flag=='0'||(user_define.user_type=='2'&&(!user_define.depart_num))||(!user_define.user_type))
    {
        this.setData({errorflag:1})
        return
    }
    user_define.num=num
    var glo_data=getApp()
    glo_data.globalData.CUR_USER=user_define
    console.log(user_define.user_type)
    switch(user_define.user_type)
    {
        case "0":
            {
                glo_data.globalData.LOGIN_STATUS='1'
                wx.navigateTo({url: '/pages/menu/user_menu'});
                break
            }
        case "1":
            {
                glo_data.globalData.LOGIN_STATUS='3'
                wx.navigateTo({url: '/pages/menu/admin_menu'});
                break
            }
        case "2":
            {
                glo_data.globalData.LOGIN_STATUS='2'
                wx.navigateTo({url: '/pages/menu/admin_menu'});
                break
            }
    }
    console.log(user_define)
    wx.navigateBack({
      delta: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })



    

  }
},
)