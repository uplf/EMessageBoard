// pages/reg/regs.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
      reg_info:{
          username:'',
          password:'',
          usertype:'',
          userdepartment:'',
          
      },
      type_index:'',
      department_index:'',
      school_index:'',
      errorflag:0,
      Obj_type_arrey:[
          {id:0,name:"华工学生"},{id:1,name:"权益部工作人员"},{id:2,name:"部门工作人员"}
      ],
      type_array:['华工学生','权益部工作人员','部门工作人员'],
      department_array:['团委','后勤处','学校办公室','招生办','学院_宣传部'],
      school_array:['电子与信息学院','数学学院','外国语学院']

  },

  bindTypePickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      //index: e.detail.value
      type_index: e.detail.value
    })
    console.log('type_index发送选择改变，携带值为', this.data.type_index)
  },
  bindSchoolPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      //index: e.detail.value
      school_index: e.detail.value
    })
    console.log('school_index发送选择改变，携带值为', this.data.school_index)
  },
  bindDepartmentPickerChange: function(e) {
    console.log('school发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      //index: e.detail.value
      department_index: e.detail.value
    })
    console.log('department_index发送选择改变，携带值为', this.data.department_index)
  },

  formChange:function(e){
      console.log("ff")
      if(this.data.errorflag!=4)this.setData({errorflag:0})
  },
  formSubmit:function(e){
    //check repition of account num
    if(0){this.setData({errorflag:1})}
    //check if password vaild
    if(0){this.setData({errorflag:2})}  
    //check the correspondence of pws
    if(0){this.setData({errorflag:3})}
    //check the admin pw
    if(0){this.setData({errorflag:4})}
    
    this.setData({errorflag:this.data.errorflag+1})
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})