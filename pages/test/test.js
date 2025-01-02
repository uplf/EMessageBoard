// pages/test/test.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addData:"",
    searchData:"",
    updateDaya:"",
    deleteData:"",
    userData:"",
  },

  add(){
    wx.cloud.callFunction({
      name:"addMessage",//调用的云函数名称

      //传参。没有的字段会被自动忽略
      data:{
        list:"MessageList",
        data:{
          theme:"这里是问题的主题",
          description:"这里是问题的正文",

          solution:[{cate_unit:'0',department:'0',rate:'0',status:'3',
                      display:"已指定下一步：后勤处",finish_time:"2024-5-9-18:00"},
                    {cate_unit:'1',department:'2',rate:'0',status:'2',
                    display:"",finish_time:""}
                  ],

          public: false,

          communicate:[{senderdep:'0',sendername:"处理员1",
                        info:"这里是处理员1的话",user_read:'true',
                        attachment:[],time:"2024-5-8-21:00"},
                        {senderdep:'-1',sendername:"accountname",
                        info:"这里是申请者的话",user_read:'true',
                        attachment:[],time:"2024-5-9-6:00"},
                        {senderdep:"0",sendername:"处理员2",
                        info:"我是处理员2",user_read:'false',
                        attachment:[],time:"2024-5-9-7:20"}
                      ],

          cur_solution:'2',
          mes_status:'1',
          mes_time:'2024-5-8-12:00',
          mes_finish_time:''
          }
      }
    }).then(res => {
      //在这里操作返回值res
      console.log(res.result.success)
      this.setData({
        addData:res.result.success
      })
    })
    .catch(console.error)// try-catch,异常会在控制台打印，可省略
  },

  search(){
    wx.cloud.callFunction({
      name:"searchMessage",
      data:{
        list:"MessageList",
        //筛选条件condition应该是{}集合。复杂逻辑见文档
        condition: {
          theme: "这里是问题的主题"
          //可以再加，是与的关系；其他关系去微信开发者文档增删查改（sdk）查看
        }
      }
    }).then(res => {
      console.log(res)//控制台打印输出
      this.setData({
        searchData:res.result.data//查到的所有数据的数组
      })
    })
    .catch(console.error)
  },

  update(){
    wx.cloud.callFunction({
      name:"updateMessage",
      data:{
        list:"MessageList",
        //内部集成。可以用condition筛选
        condition: {
          theme:"这里是问题的主题"
        },
        // 或者传入doc（即_id)，修改唯一Message
        // doc: "5e900b7167657688000ff2812c9261ea",
        updation: {
          description:"已修改"
        }
      }
    }).then(res => {
      console.log(res)
      this.setData({
        updateData:res
      })
    })
    .catch(console.error)
  },

  remove(){
    wx.cloud.callFunction({
      name:"removeMessage",
      data:{
        list:"MessageList",
        condition: {
          description:"已修改"
        },
        // doc: "5e900b7167657688000ff2812c9261ea",
      }
    }).then(res => {
      console.log(res)
      this.setData({
        removeData:res
      })
    })
    .catch(console.error)
  },

  display(){
      console.log(app.globalData.openid)
      console.log(app.globalData.userInfo)

    this.setData({
      userData:{
        openid: app.globalData.openid,
        userInfo: app.globalData.userInfo//还没有添加数据的逻辑，可以在控制台手动添加测试 
      }
    })
  }

})