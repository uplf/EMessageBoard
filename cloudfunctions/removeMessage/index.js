// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  if(event.doc != null)
  {
    db.collection(event.list).doc(event.doc).remove().then(res=>{
      return res})
  }
  if (event.condition != null)
  {
    db.collection(event.list).where(event.condition).remove().then(res=>{
      return res})
  }
}