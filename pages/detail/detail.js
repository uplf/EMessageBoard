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
    this.setData({p:glo_data.globalData.test_data_mes[1]})
/** 
    var p_tmp=this.data.p   
    p_tmp.user_account="username"
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
    q.display="处理留言"
    p_tmp.solution.push(q)
    q2.cate_unit='2'
    q2.department='0'
    q2.status='2'
    q2.clerk='0'
    p_tmp.solution.push(q2)
    p_tmp.mes_status='1'
    p_tmp.mes_time=new Date()
    
    //var info1=this.data.communicate_unit
    var info1=Object()
    info1.senderdep='0'
    info1.sendername="处理员1"
    info1.info="demo for communitcation part 一二三"
    info1.user_read='false'
    info1.time=new Date()

    var info2=this.data.communicate_unit
    info2.senderdep='-1'
    info2.info="demo2 for communitcation part 三"
    info2.user_read='true'
    info2.time=new Date()

    p_tmp.communicate.push(info1)
    p_tmp.communicate.push(info2)

    this.setData({p:p_tmp})
    console.log("done")
*/
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