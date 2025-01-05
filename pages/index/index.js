
Page({
  data: {
    status_login:''
  },


onLoad(){

},


  login_appli(e) {

      var status     
      const app=getApp()
      status='5'
      
        let __user__=app.globalData.userInfo
        let __id__=app.globalData.openid
        console.log(__user__)
        status=((typeof(__user__)==='undefined')?'4':__user__.user_type)

        if(status!='4'&&__user__.avail=='0')
        {
            var app0=getApp()
            app0.globalData.user_demo=app0.globalData.userInfo
            wx.navigateTo({
                url: '/pages/detail/user_info?CkEE=2&CkER=1',
              })
        }

        this.setData({status_login:status})

                // 普通登录器
                switch (status.substr(-1))
                {

                    case '5':return
                    case '4':{
                        this.Navigate_Reg(__id__)
                        break}
                    case '1':
                    case '2': 
                        {
                            this.Navigate_Admin()
                            break;
                         }
                        case '0': 
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
