
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
        //##获取id
        var __id__=app.globalData.openid
        

        //##查找用户库,得到res(失败)时记为'0',成功时返回__user__
        var res = '1'
        let __user__=app.globalData.userInfo
        console.log(__user__)
        
        //if(res == '0')return
        status=((typeof(__user__)==='undefined')?'4':__user__.user_type)
        
        }

        this.setData({status_login:status})
        console.log(status)
                // 普通登录器
                switch (status.substr(-1))
                {
                    case '0':
                    case '5':return
                    case '4':{
                        this.Navigate_Reg(__id__)
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
    wx.navigateTo({url: '/pages/reg/regs?openid='+ID});
  },
})
