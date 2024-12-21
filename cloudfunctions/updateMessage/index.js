// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
 if(event.doc != null)
 {
    return await db.collection(event.list).doc(event.doc).update({
      data: event.updation
    })
 }
 if(event.condition != null)
 {
    return await db.collection(event.list).where(event.condition).update({
      data: event.updation
    })
 }
}