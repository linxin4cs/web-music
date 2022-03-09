import axios from 'axios';

import { BASE_URL, TIMEOUT, ERROR_TYPES } from "./config";

// axios 实例
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

// 拦截器
instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, err => {

});

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    console.log(ERROR_TYPES[err.response] || "其他错误信息");
  }
  return err;
});

export default instance;

