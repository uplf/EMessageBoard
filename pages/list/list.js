// pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    GD: {},
    list: ['null'],
    list_unfiltered:['null'],
    list_unit: { num: '', appli: "", time: '', theme: '', realname: '', status: '', cur: '' },
    filter: {
      time: { timeL: '', timeH: '' },
      status: '',
      appli: '', // 用户账号筛选条件
      num: '', // 留言编号筛选条件
      realname: 'false',
      department_status: { department: '', depart_status: '' },
      public: '',
      reuse: '',
      issue: 'true'
    },
    filter_changeable: {
      time: 'true',
      status: 'true',
      appli: 'false',
      num: 'true',
      realname: 'true',
      depart_status: { department: 'true', depart_status: 'true' },
      public: 'true',
      reuse: 'true',
      issue: 'false'
    },
    cloud_filter:{},
    filter_alter: {},
    mode: '4', //0广场，1个人查看自己的，2部门查看, 3学代会查看,4调试
    filter_unfold: 'false',
    filter_edit: 'false',
    cur_depar: { department_num: '0', processorNum: '' },
    user: { id: '', name: '' },
    depart: { id: '' },
  },
  BtV:function(BL){
    if(BL=='false'||BL==false||BL=='0')return '0'
    if(BL=='true'||BL==true||BL=='1')return '1'
  },
  AutoFilterSetup: function () {
    const mode = this.data.mode;
    var filter_assign = this.data.filter;
    var filter_alterable = this.data.filter_changeable;
    switch (mode) {
      case '0':
        filter_alterable.public = 'false';
        filter_assign.public = 'true';
        break;
      case '1':
        var user = this.data.GD.openid;
        filter_assign.appli = user;
        break;
      case '2':
        var depart = this.data.depart.id;
        filter_assign.department_status.department = depart;
        filter_assign.department_status.depart_status = '2';
        filter_alterable.depart_status.department = 'false';
        filter_alterable.depart_status.depart_status = 'false';
        filter_assign.status = '1';
        filter_alterable.status = 'false';
        break;
      case '3':
        filter_assign.reuse = 'true';
        filter_alterable.reuse = 'false';
        break;
      case '4':
        filter_alterable.appli = 'true';
        filter_alterable.issue = 'true';
        break;
    }
    this.setData({ filter: filter_assign, filter_changeable: filter_alterable, filter_alter: filter_assign });
  },

  timeH_change: function (e) {
    var timeScope = this.data.filter_alter.time;
    timeScope.timeH = e.detail.value;
    this.setData({ 'filter_alter.time': timeScope });
  },
  timeL_change: function (e) {
    var timeScope = this.data.filter_alter.time;
    timeScope.timeL = e.detail.value;
    this.setData({ 'filter_alter.time': timeScope });
    if(this.data.filter_alter.time.timeL>this.data.filter_alter.time.timeH)console.log("satisfied")
    else console.log("failed")
  },
  departChange: function (e) {
    var depart_status = this.data.filter_alter.department_status;
    depart_status.department = e.detail.value;
    this.setData({ 'filter_alter.department_status': depart_status });
  },
  depart_status_Change: function (e) {
    var depart_status = this.data.filter_alter.department_status;
    depart_status.depart_status = e.detail.value;
    this.setData({ 'filter_alter.department_status': depart_status });
  },
  status_Change: function (e) {
    this.setData({ 'filter_alter.status': e.detail.value });
  },
  search: function (filter){
    wx.cloud.callFunction({
      name:"searchMessage",
      data:{
        list:"MessageList",
        condition: filter
        }
    }).then(res => {
      return res.result.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ mode: options.mode });
    var glo_data = getApp();
    this.setData({ GD: glo_data.globalData, user: { ...this.data.user, id: glo_data.globalData.CUR_USER.num } });
    this.setData({'depart.id':glo_data.globalData.CUR_USER.depart_num})
    this.AutoFilterSetup();
    this.defineCloudFilter();
    console.log("filter_info",this.data.cloud_filter)
    //##在这里发送this.data.filter作为筛选条件，返回值放到list_tmp中
    var list_tmp = this.search(this.data.filter);//tmp
    //for (let i = 0; i < glo_data.globalData.test_data_mes.length; i++) {
    //  list_tmp.push(glo_data.globalData.test_data_mes[i]);
    //}
    console.log("list_info",list_tmp)
    this.setData({ list_unfiltered: list_tmp });
    this.setData({ list: list_tmp });

    
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

  filter_change: function () {
    this.setData({ filter_unfold: !this.data.filter_unfold });
  },
  bindDateChange: function (e) {
    console.log(e);
  },
  formSubmit: function (e) {
  },
  defineCloudFilter(){
    var CF=Object();//cloudFilter
    var FT=this.data.filter
    if(FT.mes_status)CF.mes_status=FT.mes_status;
    if(FT.appli)CF.usernum=FT.appli;
    if(FT.num)CF.num=FT.num;
    if(FT.department_status&&FT.department_status.department_num)
    {
        CF.cur_solution=Object();
        CF.cur_solution.department=FT.department_status.departmentt;
        CF.cur_solution.status=FT.department_status.depart_status;
    }
    if(FT.public)CF.public=FT.public;
    if(FT.reuse)CF.reuse=FT.reuse;

    this.setData({cloud_filter:CF})
  },
  // 新增：根据筛选条件获取数据
  applyFilters: function () {
      var FA=this.data.filter_alter
      var list=this.data.list_unfiltered
      var list_applied=[]
      var x=Object()
      var flag='1'
      for(var xx in list)
      {

         x=list[xx]
         if(FA.time.timeH&&FA.time.timeH<x.mes_time)continue
         if(FA.time.timeL&&FA.time.timeL>x.mes_time)continue
         if(FA.status&&FA.status!=x.mes_status)continue
         if(FA.appli&&(FA.appli!=x.usernum))continue
         if(FA.num&&FA.num!=x.num)continue
         if(FA.department_status.department&&FA.department_status.department!=x.cur_solution.department)continue
         if(FA.department_status.depart_status&&FA.department_status.depart_status!=x.cur_solution.status)continue
         if(FA.public&&FA.public!=x.public)continue
         if(FA.reuse&&FA.reuse!=x.reuse)continue
          list_applied.push(x)
      }
      console.list_applied
      this.setData({list:list_applied})
    //1.拿到筛选条件，重置list
    //2.遍历list_unfiltered,每项对比中分别对比filter的条件，如果满足就放到list里面
  },
  // 新增：重置筛选条件的方法
  resetFilters: function() {
    this.setData({
      filter_alter: {
        time: { timeL: '', timeH: '' },
        status: '',
        appli: '', // 用户账号重置
        num: '', // 留言编号重置
        realname: 'false',
        department_status: { department: '', depart_status: '' },
        public: '',
        reuse: '',
        issue: 'true',
      }
    });
    // 重新加载列表数据
    this.AutoFilterSetup();
    this.applyFilters(); // 如果您有applyFilters方法来根据条件过滤数据
  },
  submit_handler: function (e) {
    this.setData({ filter: this.data.filter_alter });
    this.applyFilters();
  },
  rescan: function () {
  },
  inspect_handler: function (e) {
    const APP = getApp();
    APP.globalData.CUR_MES = e.currentTarget.dataset.index;
    var url_tep=[2,1,3,2,3]
    console.log(url_tep[this.data.mode])
    wx.navigateTo({
      url: '/pages/detail/detail?mode='+url_tep[this.data.mode],
    });
  }
});