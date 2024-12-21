
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
      var status     
      const app=getApp()
      //##获取unionid
      var unionid='12421sdf12'//temp
      //##查找用户库
      //###return suc->flag(1/2/3)user_info fail->flag(0) notfound->(4)

      app.globalData.LOGIN_STATUS='4' //0失败 1用户登录 2管理员登录 3维护员登录 4注册 5拒绝登录
     if(app.globalData.LOGIN_STATUS=='4')this.Navigate_Reg('100812');

      if(status=='1'||status=='2'||status=='3')
      {
        app.globalData.CUR_USER=app.globalData.user_demo;
        this.setData({status_login:status})
                // 普通登录器
                switch (app.globalData.LOGIN_STATUS)
                {
                    case '2':
                    case '3': 
                        this.Navigate_Admin();
                        break;
                    case '1': 
                        this.Navigate_User();
                        break;
                }
      }

  },
  
  Navigate_User: function(){
    wx.navigateTo({url: '/pages/menu/user_menu'});
  },
  Navigate_Admin: function(){
    wx.navigateTo({url: '/pages/menu/admin_menu'});
  },
  Navigate_Reg: function(ID){
    wx.navigateTo({url: '/pages/reg/regs?unionid='+ID});
  },
})
