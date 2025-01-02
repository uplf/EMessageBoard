// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database();

exports.main = async (event, context) => {
  if(event.list == "MessageList"){
    // 将生成的流水号添加到 event.data 中
    event.data.num = '1' + Math.floor(Math.random() * 90000) + 10000;
  }

  // 插入数据到指定集合
  try {
    const res = await db.collection(event.list).add({
      data: event.data
    });

    // 返回插入的结果
    if(event.list == "MessageList"){
      return {
        success: true,
        orderId: res._id,  // 返回插入的文档ID
        num: event.data.num
      }; 
    }
    else{
      return {
        success: true
      }
    }
  } catch (error) {
    console.error('数据插入失败:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}