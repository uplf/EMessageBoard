
Page({
  data: {
      GD:{},
    status_login:''
  },


onLoad(){
    var glo_data=getApp()
    this.setData({GD:glo_data.globalData})
},

  login_appli(e) {
      var status='1'       //0失败 1用户登录 2管理员登录 3维护员登录 4注册 5拒绝登录
      //获取unionid
      status='0'
      //查找用户库
      
        status='3'
        const app=getApp()
        app.globalData.CUR_USER=app.globalData.user_demo;
        this.setData({status_login:status})
        switch (status)
        {
            case '0':
            case '5':return;
            case '2':
            case '3': 
                this.Navigate_Admin();
                break
            case '1': 
                this.Navigate_User();
                break;
            case '4': this.Navigate_Reg('12421sdf12');
        }


  },
  
  Navigate_User: function(){
    wx.navigateTo({url: '/pages/menu/user_menu'});
  },
  Navigate_Admin: function(){
    wx.navigateTo({url: '/pages/menu/admin_menu'});
  },
  Navigate_Reg: function(ID){
    wx.navigateTo({url: '/pages/reg/regs?id='+ID});
  },
})
