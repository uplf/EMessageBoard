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
  
      mode:'4',//0广场，1个人查看自己的，2部门查看, 3学代会查看,4调试
      filter_unfold:'false',
  
      filter_edit:'false',
      cur_depar:{department_num:'0',processorNum:''},
      user:{id:'',name:''},
    depart:{id:''},
    },
    AutoFilterSetup: function(){
        const mode=this.data.mode
        var filter_assign=this.data.filter
        var filter_alterable=this.data.filter_changeable
        switch(mode)
        {
            case '0':
                {
                  filter_alterable.public='false';
                  filter_assign.public='true';
                  break;
                }
              case '1':
              {
                  var user=this.data.user.id;
                  filter_assign.appli=user;
                  break;
              }
              case '2':
                  {
                      var depart=this.data.depart.id;
                      filter_assign.department_status.department=depart;
                      filter_assign.department_status.depart_status='2';
                      filter_alterable.depart_status.department='false';
                      filter_alterable.depart_status.depart_status='false';
                      filter_assign.status='1';
                      filter_alterable.status='false';
                      break;
                  }
              case '3':
                  {
                      filter_assign.reuse='true';
                      filter_alterable.reuse='false';
                      break;
                  }
              case '4':
                  {
                      filter_alterable.appli='true';
                      filter_alterable.issue='true';
                      break;
                  }
          }
          this.setData({filter:filter_assign})
          this.setData({filter_changeable:filter_alterable})
          this.setData({filter_alter:filter_assign})
  },


  timeH_change: function(e){
      wx.get
    var timeScope=this.data.filter_alter.time
    timeScope.timeH=e.detail.value
    
    this.setData({filter_alter:{...this.data.filter_alter,time:timeScope}})
},
timeL_change: function(e){
    var timeScope=this.data.filter_alter.time
    timeScope.timeL=e.detail.value
    
    this.setData({filter_alter:{...this.data.filter_alter,time:timeScope}})
},
departChange: function(e){
    var depart_status=this.data.filter_alter.department_status
    depart_status.department=e.detail.value
    this.setData({filter_alter:{...this.data.filter_alter,department_status:depart_status}})
},
depart_status_Change: function(e){
    var depart_status=this.data.filter_alter.department_status
    depart_status.depart_status=e.detail.value
    this.setData({filter_alter:{...this.data.filter_alter,department_status:depart_status}})
},

status_Change: function(e){
    this.setData({filter_alter:{...this.data.filter_alter,status:e.detail.value}})
},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //定义list
    this.setData({mode:options.mode});
      var glo_data=getApp()
      this.setData({GD:glo_data.globalData})
      this.setData({user:{...this.data.user,id:glo_data.globalData.CUR_USER.usernum}});
      var list_tmp=[]     //这里很有必要用var
      console.log(glo_data.globalData.test_data_mes)
      for(let i=0;i<glo_data.globalData.test_data_mes.length;i++)
      {
          list_tmp.push(glo_data.globalData.test_data_mes[i])
      }
      console.log(list_tmp)
      this.setData({list:list_tmp})
      this.AutoFilterSetup()
      
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
    },
    formSubmit(e) {
    },
    submit_handler(e){
    this.setData({filter:this.data.filter_alter})
      },
    rescan(){
  },
  inspect_handler(e){
      const APP=getApp()
      APP.globalData.CUR_MES=e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?mode=1',
    })
  }
  })