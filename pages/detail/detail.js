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
      mode:'3',//1本人查看，2仅展示，3处理人查看
      outcome_tmp:{ind:'999',info:"",attach:{type:'',depart:''}},
      outcome_array:[{name:'完成处理',ind:'done'},{name:'完成指定',ind:'assigned'},{name:'要求补充材料/补充说明',ind:'req'},
                            {name:'处理搁置',ind:'pause'},{name:'处理失败',ind:'failed'}],
        mes_array:['留言','留言','补充内容','搁置原因','失败原因'],
    p:{
        /*num:'',
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
        */
       
        num:'100792',
        usernum:'103291',
        user_account:"accountname",
        realname_info:{check:'true', email:"123456789@mail.scut.edu.cn"},
        contract:"192837456@qq.com",

        theme:"这里是问题的主题",
        description:"这里是问题的正文，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长end",
        file_index:[],

        solution:[{cate_unit:'0',department:'0',rate:'0',status:'3',display:"已指定下一步：后勤处",finish_time:"2024-5-9-18:00"},
          {cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""}],
        public:'false',
        reuse:'true',
        communicate:[{senderdep:'0',sendername:"处理员1",info:"这里是处理员1的话",user_read:'true',attachment:[],time:"2024-5-8-21:00"},
          {senderdep:'-1',sendername:"accountname",info:"这里是申请者的话",user_read:'true',attachment:[],time:"2024-5-9-6:00"},
          {senderdep:"0",sendername:"处理员2",info:"我是处理员2",user_read:'false',attachment:[],time:"2024-5-9-7:20"}],
        cur_solution:  {cate_unit:'1',department:'2',rate:'0',status:'3',display:"",finish_time:""},

        mes_status:'3',
        mes_time:'2024-5-8-12:00',
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
    //this.setData({p:glo_data.globalData.CUR_MES})//%%%%
    //this.setData({mode:e.mode})//%%%%
    this.setData({mode:'3'})
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
  },
  radioChange(e){
      console.log(e)
    var tmp0=this.data.outcome_tmp
    tmp0.ind=e.detail.value
    this.setData({outcome_tmp:tmp0})
  },
  bindDepartmentPickerChange(e){
    var tmp0=this.data.outcome_tmp
    tmp0.attach.depart=e.detail.value
    this.setData({outcome_tmp:tmp0})
  },
  bindSoluPickerChange(e){
    var tmp0=this.data.outcome_tmp
    tmp0.attach.type=e.detail.value
    this.setData({outcome_tmp:tmp0})
  },
  info_change(e){
    this.setData({'outcome_tmp.info':e.detail.value})
  },
  CommitProc(e){
    
    var mes=this.data.p
    var CPI=mes.solution.findIndex(item=>item.status=='2')
    var proc=this.data.process
    var proc1=this.data.outcome_tmp
    proc.status=this.data.proc_outp_link[proc1.ind]
    proc.display=proc1.info
    proc.finish_time=Date()
    if(proc1.ind=='1'){
        var next_proc={
            cate_unit:proc1.attach.type,
            department:proc1.attach.depart,
            rate:'',
            status:'2',
        }
        mes.solution.splice(CPI+1,0,next_proc)
    }
    mes.solution[CPI]=proc
    if(proc.status=='3'){
    if((mes.solution.length-1)<=CPI)mes.mes_status='4'
    else{mes.solution[CPI+1].status='2'}
    }
    else if(proc.status=='6')mes.mes_status='4'
    if(proc1.ind=='3')mes.status='3'
    console.log(mes)
    this.setData({p:mes})
    
  },
  undraft_appli(e){
      this.setData({'p.mes_status':'1'})
        this.commit_appli()
  },
  stop_appli(e){
    this.setData({'p.mes_status':'2'})
      this.commit_appli()
},
pause_appli(e){
    this.setData({'p.mes_status':'3'})
      this.commit_appli()
},
cont_appli(e){
    this.setData({'p.mes_status':'1'})
      this.commit_appli()
},
rateA(e){
    
},
  commit_appli:function(){
    //申请修改
    console.log(this.data.p)
  }
})

