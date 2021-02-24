import request from "@/utils/request";
// var qs = require('qs');

export class UserServer {
  /** 登录获取用户信息 */
  static login(data) {
    return request({
      url: '/api/user/login',
      method: 'post',
      data,
      headers: {
        // 指定json格式
        'Content-Type': "application/json"
      },
      // 请求前数据处理成JSON
      transformRequest: function (data) {
        return JSON.stringify(data);
      }
    })
  }
}