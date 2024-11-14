// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {

    userInfo: null,
    mescate_array:["直接投送给某部门","分配员小程序内转达相应部门","分配员其他平台代反馈","分配员反馈解决部门"],
    proc_unit_expl:["确认处理部门","处理与回复"],
    department_array:['本程序主管单位-权益部','团委','后勤处','学校办公室','招生办','学院_宣传部'],
    type_array:['华工学生','权益部工作人员','部门工作人员'],
    school_array:['电子与信息学院','数学学院','外国语学院'],
    unit_status_array:['等待确定','等待处理','正在处理','处理完成','处理遇到问题(已重新分配)','处理遇到问题(请补充信息/沟通)','处理失败'],//固定
    mes_status_array:['未发布','正在处理','中止进程','暂停进程','待评价','完成'],


    test_data_mes:[
        {
            num:'100792',
            usernum:'wx_103291',
            user_account:"accountname",
            realname_info:{check:'true', email:"123456789@mail.scut.edu.cn"},
            contract:"192837456@qq.com",
      
            theme:"这里是问题的主题",
            description:"这里是问题的正文，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长end",
            file_index:[],
      
            solution:[{cate_unit:'0',department:'0',rate:'0',status:'3',display:"已指定下一步：后勤处",finish_time:"2024-5-9-18:00"},
            {cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""}],
            public:'false',
            reuse:'true',
            communicate:[{senderdep:'0',sendername:"处理员1",info:"这里是处理员1的话",user_read:'true',attachment:[],time:"2024-5-8-21:00"},
            {senderdep:'-1',sendername:"accountname",info:"这里是申请者的话",user_read:'true',attachment:[],time:"2024-5-9-6:00"},
            {senderdep:"0",sendername:"处理员2",info:"我是处理员2",user_read:'false',attachment:[],time:"2024-5-9-7:20"}],
            cur_solution:'2',
      
            mes_status:'1',
            mes_time:'2024-5-8-12:00',
            mes_finish_time:'',
            },
            {
                num:'100812',
                usernum:'wx_101391',
                user_account:"accountname",
                realname_info:{check:'false', email:""},
                contract:"121317456@qq.com",
          
                theme:"这里是问题的主题2",
                description:"这里是问题的正文2，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长end",
                file_index:[],
          
                solution:[{cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""}],
                public:'true',
                reuse:'true',
                communicate:[{senderdep:'0',sendername:"处理员1",info:"这里是处理员1的话",user_read:'true',attachment:[],time:"2024-5-8-21:00"},
                {senderdep:'-1',sendername:"accountname",info:"这里是申请者的话",user_read:'true',attachment:[],time:"2024-5-9-6:00"},
                {senderdep:"0",sendername:"处理员2",info:"我是处理员2",user_read:'false',attachment:[],time:"2024-5-9-7:20"}],
                cur_solution:'2',

                mes_status:'1',
                mes_time:'2024-5-8-12:00',
                mes_finish_time:'',
                
            }



        ]

  }
})
