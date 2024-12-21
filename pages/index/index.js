
Page({
  data: {
    status_login:''
  },


onLoad(){

},


  login_appli(e) {

      var status     
      const app=getApp()
      status=app.globalData.LOGIN_STATUS
      
      if(status=='0'){
        //##获取unionid
        var unionid='12421sdf12'//temp
        //##查找用户库
        //###return suc->flag(1/2/3)user_info fail->flag(0) notfound->(4)
        status='4' //0未登录或登陆失败 1用户登录 2管理员登录 3维护员登录 4注册 5拒绝登录
        }

        this.setData({status_login:status})
                // 普通登录器
                switch (status)
                {
                    case '0':
                    case '5':return
                    case '4':{
                        this.Navigate_Reg('100812')
                        console.log('1')
                        break}
                    case '2':
                    case '3': 
                        {
                            this.Navigate_Admin()
                            break;
                         }
                        case '1': 
                        {
                            this.Navigate_User()
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
