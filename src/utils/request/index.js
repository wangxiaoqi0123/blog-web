/* 
  越秀集团
  此拦截器控制二期平台接口
*/
import axios from 'axios';
const httpRequest = axios.create({
  timeout: 720000,
  withCredentials: true,// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});

httpRequest.interceptors.request.use(
  config => {
    if (config.method.toLocaleUpperCase() === 'GET') {
      config.params = config.params || {}
    }
    return config;
  },
  err => {
    return Promise.reject(err)
  }
);

httpRequest.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {
    if (err.response) {
      return Promise.reject(err.response.data);
    }
    return Promise.reject(err);
  }
);

export default httpRequest;