// pages/list/list.js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
      GD:{},
    list:['null'],

    list_unit:{num:'',appli:"",time:'',theme:'',realname:'',status:'',cur:''},

    
    filter:{time:{timeL:'',timeH:''},status:'',appli:'',num:'',realname:'false',    
    department_status:{department:'',depart_status:{}},public:'',reuse:'',issue:'true'},
    
    filter_changeable:{time:'true',status:'true',appli:'false',num:'true',realname:'true',
    depart_status:{department:'true',depart_status:'true'},public:'true',reuse:'true',issue:'false'},
    
    filter_alter:{},

    mode:'2',//0广场，1个人查看自己的，2部门查看, 3学代会查看
    filter_unfold:'false',

    filter_edit:'false',
    cur_depar:{department_num:'0',processorNum:''},
    cur_account:{num:'',name:''},
  },
  AutoFilterSetup: function(){
    var filter_tmp=this.data.filter
    const mode=this.data.mode
    filter_tmp.appli=((mode=='1')?this.data.cur_account.num:'')
    filter_tmp.status=((mode=='2')?1:'')
    
    if(mode=='2'){
        filter_tmp.status='1'
        filter_tmp.department_status.department=this.data.cur_depar.num
        filter_tmp.department_status.department_num=2
    }
    filter_tmp.public=((mode=='0')?'true':'')
    filter_tmp.reuse=((mode=='3'?'true':''))
    this.setData({filter,filter_tmp})
    this.setData({filter_alter:filter_tmp})
    
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      //定义list
    var glo_data=getApp()
    this.setData({GD:glo_data.globalData})
    var list_tmp=[]     //这里很有必要用var
    console.log(glo_data.globalData.test_data_mes)
    for(let i=0;i<glo_data.globalData.test_data_mes.length;i++)
    {
        list_tmp.push(glo_data.globalData.test_data_mes[i])
    }
    console.log(list_tmp)
    this.setData({list:list_tmp})
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

  filter_change(){
      var unfold=this.data.unfold
      unfold=!unfold
      this.setData({unfold:unfold})
  },
  bindDateChange(e){
    console.log(e)
  }
})