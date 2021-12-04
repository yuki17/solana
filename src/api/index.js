import request from 'utils/request.js'
let baseUrl = "http://45.77.5.222:8081"

export const getIndexInfo = params => { return request.get(`${baseUrl}/config/get`, {params:params}) }; 
export const postWallet = params => { return request.post(`${baseUrl}/app/user/record`, params) };  //记录登录的钱包
export const clearData = params => { return request.post(`${baseUrl}/app/clear`, params) };  //清除数据
export const beforApply= params => { return request.post(`${baseUrl}/subscription/data`, params,{"Content-Type":"multipart/form-data"}) };  //申购调整阶段前数据
export const applyIng = params => { return request.post(`${baseUrl}/user/apply`, params) };  //申购
export const newApply = params => { return request.post(`${baseUrl}/subscription`, params) };  //申购调整
