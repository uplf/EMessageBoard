// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    p:{
        user_account:"",
        realname_info:{check:'true', email:""},
        contract:'',
  
        theme:"",
        description:"",
        file_index:[],
  
        solution:[],
        public:'false',
        reuse:'true',
  
  
        mes_status:'',
        mes_time:'',
        mes_finish_time:'',
        },
        mescate_array:["直接投送给某部门","分配员小程序内转达相应部门","分配员其他平台代反馈","分配员反馈解决部门"],
        mescate_index:'',
        proc_unit_expl:["确认处理部门","处理与回复"],
        department_array:['本程序主管单位-权益部','团委','后勤处','学校办公室','招生办','学院_宣传部'],
        mes_status_array:['未发布','正在处理','中止进程','暂停进程','待评价','完成'],
        department_index:'',
        process_unit:{cate_unit:'',department:'',communicate:[],rate:'0',status:'',display:"",finish_time:""},
        unit_status_array:['等待确定','等待处理','正在处理','处理完成','处理遇到问题(已重新分配)','处理遇到问题(请补充信息/沟通)','处理失败']//固定

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    var p_tmp=this.data.p   
    p_tmp.user_account="aloumx"
    p_tmp.realname_info.check="true"
    p_tmp.realname_info.email="trial@mail.scut.edu.cn"
    p_tmp.contract="trial@mail.scut.edu.cn"
    p_tmp.theme="建议示范"
    p_tmp.discription="建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议 建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议 建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议 建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议 建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议建建议建议建议建议建议建议建议建议建议建议建议建议建议建议建议议建议建议建议建议建议建议建议建议建议建议建议建议建议"
    var q={cate_unit:'',department:'',communicate:[],rate:'',status:'',display:"",finish_time:""}
    var q2={cate_unit:'',department:'',communicate:[],rate:'',status:'',display:"",finish_time:""}
    q.cate_unit='1'
    q.department='1'
    q.status='1'
    q.clerk="操作员1"
    q.display="man what can i say"
    p_tmp.solution.push(q)
    q2.cate_unit='2'
    q2.department='0'
    q2.status='2'
    q2.clerk='0'
    p_tmp.solution.push(q2)
    p_tmp.mes_status='1'
    p_tmp.mes_time=new Date()
    this.setData({p:p_tmp})
    console.log("done")
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