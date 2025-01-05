
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
        status=((typeof(__user__)==='undefined')?'04':__user__.user_type+1)
        
        }

        this.setData({status_login:status})
                // 普通登录器
                switch (status)
                {
                    case '0':
                    case '05':return
                    case '04':{
                        this.Navigate_Reg(__id__)
                        break}
                    case '02':
                    case '03': 
                        {
                            this.Navigate_Admin()
                            break;
                         }
                        case '01': 
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
