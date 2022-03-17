const devBaseURL = "http://123.207.32.32:9001";
const proBaseURL = "http://123.207.32.32:9001";
// 判断是否为生产环境
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

export const ERROR_TYPES = {
  400: "请求错误",
  401: "未授权访问",
};
