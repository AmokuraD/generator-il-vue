import axios from "axios";
import qs from "qs";

const URL = new Map([
  ["development", "/api"],
  ["production", "http://localhost:3000"],
]);
let baseURL = URL.get("development");

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  timeout: 5000,
});

instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
instance.defaults.headers.common["Authorization"] = localStorage.getItem(
  "token"
);

instance.interceptors.request.use(
  function(config) {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }
    if (config.method == "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) =>
    (res.status >= 200 && res.status < 300) || res.status == 304
      ? Promise.resolve(res)
      : Promise.reject(res),
  (err) => {
    console.error(err);
    const { response } = err;
    if (response) {
      errorHandle(response.status, response.data);
      return Promise.reject(response);
    } else {
      console.error("请求失败");
    }
  }
);

function errorHandle(status, other) {
  switch (status) {
    case 400:
      console.error("400：错误请求");
      break;
    case 401:
      localStorage.removeItem("Authorization");
      console.error("401：访问令牌无效或已过期");
      break;
    case 403:
      console.error("403：拒绝访问");
      break;
    case 404:
      console.error("404：资源不存在");
      break;
    case 405:
      console.error("405：请求方法未允许");
      break;
    case 408:
      console.error("408：请求超时");
      break;
    case 500:
      console.error("500：访问服务失败");
      break;
    case 501:
      console.error("501：未实现");
      break;
    case 502:
      console.error("502：无效网关");
      break;
    case 503:
      console.error("503：服务不可用");
      break;
    default:
      console.error(other);
  }
}

export default instance;
