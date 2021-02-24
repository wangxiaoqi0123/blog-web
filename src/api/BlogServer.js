import request from "@/utils/request";
// var qs = require('qs');
export class BlogServer {
  static getList(params) {
    return request({
      url: '/api/blog/list',
      method: 'get',
      params
    })
  }

  static getDetail(params) {
    return request({
      url: '/api/blog/detail',
      method: 'get',
      params
    })
  }

  static del(data) {
    return request({
      url: '/api/blog/del',
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

  static newBlog(data) {
    return request({
      url: '/api/blog/new',
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

  static undateBlog(id, data) {
    return request({
      url: '/api/blog/update?id=' + id,
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