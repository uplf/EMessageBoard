// pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    GD: {},
    list: ['null'],
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
    filter_alter: {},
    mode: '4', //0广场，1个人查看自己的，2部门查看, 3学代会查看,4调试
    filter_unfold: 'false',
    filter_edit: 'false',
    cur_depar: { department_num: '0', processorNum: '' },
    user: { id: '', name: '' },
    depart: { id: '' },
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
        var user = this.data.user.id;
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ mode: options.mode });
    var glo_data = getApp();
    this.setData({ GD: glo_data.globalData, user: { ...this.data.user, id: glo_data.globalData.CUR_USER.num } });
    var list_tmp = [];
    for (let i = 0; i < glo_data.globalData.test_data_mes.length; i++) {
      list_tmp.push(glo_data.globalData.test_data_mes[i]);
    }
    this.setData({ list: list_tmp });
    this.AutoFilterSetup();
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
  // 新增：根据筛选条件获取数据
  applyFilters: function () {
    const { filter_alter } = this.data;
    const glo_data = getApp().globalData;
    let list_tmp = glo_data.test_data_mes.filter(item => {
      const startTime = filter_alter.time.timeL ? new Date(filter_alter.time.timeL) : null;
      const endTime = filter_alter.time.timeH ? new Date(filter_alter.time.timeH) : null;
      const itemTime = new Date(item.mes_time);
      const isStatusMatch = !filter_alter.status || item.mes_status == filter_alter.status;
      const isNumMatch = !filter_alter.num || item.num == filter_alter.num;
      const isAppliMatch = !filter_alter.appli || item.user_account == filter_alter.appli;
      const isDepartmentMatch = !filter_alter.department_status.department || item.department == filter_alter.department_status.department;
      const isDepartStatusMatch = !filter_alter.department_status.depart_status || item.depart_status == filter_alter.department_status.depart_status;

      return (!startTime || itemTime >= startTime) && (!endTime || itemTime <= endTime) && isStatusMatch && isNumMatch && isAppliMatch && isDepartmentMatch && isDepartStatusMatch;
    });

    this.setData({ list: list_tmp });
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
    wx.navigateTo({
      url: '/pages/detail/detail?mode=1',
    });
  }
});