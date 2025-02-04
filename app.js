// app.js
App({
    onLaunch: async function () {
      const app = this
      if (!wx.cloud) {
        console.error("请使用 2.2.3 或以上的基础库以使用云能力");
      } else {
        wx.cloud.init({
          env: "",
          traceUser: true,
        });
        
        try {
          // 获取 openid
          const openidRes = await wx.cloud.callFunction({
            name: "getOpenid"
          });
          app.globalData.openid = openidRes.result.openid;
  
          // 获取用户信息
          const userInfoRes = await wx.cloud.callFunction({
            name: "searchMessage",
            data: {
              list: "userinfo",
              condition: {
                openid: app.globalData.openid
              }
            }
          });
          app.globalData.userInfo = userInfoRes.result.data[0];
  
        } catch (error) {
          console.error('云函数调用失败:', error);
        }
      }
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
  
    },
    globalData: {
      openid:"",
      userInfo: null,
  
      test_union_id:'',
      CUR_MES:{},
      CUR_USER:{
        user_type:'',
        num:'',
        usernum:'', //union_id
        user_account:"",    //name
        realname_info:{check:'', email:""},
        contract:"",
        avail:'',
        depart_num:''
      },
  
  
  
  
      LOGIN_STATUS:'0',        //0失败 1用户登录 2管理员登录 3维护员登录 4注册 5拒绝登录
  
      userInfo: null,
      mescate_array:["直接投送给某部门","分配员小程序内转达相应部门","分配员其他平台代反馈","分配员反馈解决部门"],
      proc_unit_expl:["确认处理部门","处理与回复"],
      department_array:['本程序主管单位-权益部','团委','后勤处','学校办公室','招生办','学院_宣传部'],
      type_array:['华工学生','权益部工作人员','部门工作人员'],
      school_array:['电子与信息学院','数学学院','外国语学院'],
      unit_status_array:['等待确定','等待处理','正在处理','处理完成','处理遇到问题(已重新分配)','处理遇到问题(请补充信息/沟通)','处理失败'],//固定
      mes_status_array:['未发布','正在处理','中止进程','暂停进程','待评价','完成'],
  
      user_demo:{
        user_type:'3',
        num:'100812',
        usernum:'101391',
        user_account:"accountname",
        realname_info:{check:'false', email:"123@.edu.cn"},
        contract:"121317456@qq.com",
        avail:'true',
        depart_num:'3'
      },
  
      test_data_mes:[
        {
          num:'100792',
          usernum:'103291',
          user_account:"accountname",
          realname_info:{check:'true', email:"123456789@mail.scut.edu.cn"},
          contract:"192837456@qq.com",
  
          theme:"这里是问题的主题",
          description:"这里是问题的正文，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长end",
          file_index:[],
  
          solution:[{cate_unit:'0',department:'0',rate:'0',status:'3',display:"已指定下一步：后勤处",finish_time:"2024-5-9-18:00"},
            {cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""}],
          public:'false',
          reuse:'true',
          communicate:[{senderdep:'0',sendername:"处理员1",info:"这里是处理员1的话",user_read:'true',attachment:[],time:"2024-5-8-21:00"},
            {senderdep:'-1',sendername:"accountname",info:"这里是申请者的话",user_read:'true',attachment:[],time:"2024-5-9-6:00"},
            {senderdep:"0",sendername:"处理员2",info:"我是处理员2",user_read:'false',attachment:[],time:"2024-5-9-7:20"}],
          
            
            olution:  {cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""},
  
          mes_status:'1',
          mes_time:'2024-5-8-12:00',
          mes_finish_time:'',
        },
        {
          num:'100282',
          usernum:'100812',
          user_account:"accountname",
          realname_info:{check:'true', email:"12212"},
          contract:"121317456@qq.com",
  
          theme:"这里是问题的主题2",
          description:"这里是问题的正文2，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长end",
          file_index:[],
  
          solution:[{cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""}],
          public:'true',
          reuse:'true',
          communicate:[{senderdep:'0',sendername:"处理员1",info:"这里是处理员1的话",user_read:'true',attachment:[],time:"2024-5-8-21:00"},
            {senderdep:'-1',sendername:"accountname",info:"这里是申请者的话",user_read:'true',attachment:[],time:"2024-5-9-6:00"},
            {senderdep:"0",sendername:"处理员2",info:"我是处理员2",user_read:'false',attachment:[],time:"2024-5-9-7:20"}],
          cur_solution:{cate_unit:'1',department:'2',rate:'0',status:'2',display:"",finish_time:""},
  
          mes_status:'2',
          mes_time:'2024-5-8-12:00',
          mes_finish_time:'',
        },
        {
          num: '100913',
          usernum: '101392',
          user_account: "newaccount456",
          realname_info: { check: 'true', email: "newuser456@mail.scut.edu.cn" },
          contract: "newuser456@qq.com",
          theme: "这里是新问题的主题3",
          description: "这里是新问题的正文3，内容与之前不同，确保不重复。",
          file_index: [],
          solution: [
            { cate_unit: '0', department: '1', rate: '0', status: '1', display: "已指定下一步：团委", finish_time: "2024-12-22-10:00" },
            { cate_unit: '1', department: '3', rate: '0', status: '3', display: "已指定下一步：学校办公室", finish_time: "2024-12-23-16:00" }
          ],
          public: 'false',
          reuse: 'true',
          communicate: [
            { senderdep: '1', sendername: "处理员3", info: "这里是处理员3的话", user_read: 'true', attachment: [], time: "2024-12-21-19:00" },
            { senderdep: '-1', sendername: "newaccount456", info: "这里是新申请者的话3", user_read: 'true', attachment: [], time: "2024-12-22-9:00" },
            { senderdep: "3", sendername: "处理员4", info: "我是处理员4", user_read: 'false', attachment: [], time: "2024-12-22-11:30" }
          ],
          cur_solution: { cate_unit: '1', department: '3', rate: '0', status: '3', display: "已指定下一步：学校办公室", finish_time: "2024-12-23-16:00" },
          mes_status: '1',
          mes_time: '2024-12-21-08:00',
          mes_finish_time: '',
        }
      ]
    }
  })