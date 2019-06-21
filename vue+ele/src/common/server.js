import axios from 'axios'
import { Message } from 'element-ui'

let ROOT
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  // 开发环境下的代理地址，解决本地跨域跨域，配置在config目录下的index.js dev.proxyTable中
  ROOT = '/api'
  // ROOT = 'http://mockjs.com'
} else {
  // 生产环境下的地址
  ROOT = '/MallService'
}

const Axios = axios.create({
  baseURL: ROOT,
  timeout: 10000
  // responseType: "json",
  // withCredentials: true, // 是否允许带cookie这些
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded"
  // },
  // transformRequest: [function (data) {
  //   let ret = '';
  //   for (let i in data) {
  //     ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
  //   }
  //   return ret
  // }],
})

// POST(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    return config
  },

  error => {
    // error 的回调信息,看贵公司的定义
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error && error.data.error.message,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器), 统一处理响应
Axios.interceptors.response.use(
  res => {
    // 对响应数据做些事
    if (!res.data.Success) {
      Message({
        //  饿了么的消息弹窗组件,类似toast
        showClose: true,
        message: res.data.ErrMsg,
        type: 'error'
      })
      return Promise.reject(res.data.ErrMsg) // 返回promise对象,把错误信息传下去
    }
    return res
  },
  error => {
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: '请求出错',
      type: 'error'
    })

    // 下面是接口回调的status

    // if (error.response.status === 403) {
    //   router.push({
    //     path: "/error/403"
    //   });
    // }
    // if (error.response.status === 500) {
    //   router.push({
    //     path: "/error/500"
    //   });
    // }
    // if (error.response.status === 502) {
    //   router.push({
    //     path: "/error/502"
    //   });
    // }
    // if (error.response.status === 404) {
    //   router.push({
    //     path: "/error/404"
    //   });
    // }

    // 返回 response 里的错误信息
    // let errorInfo = error;
    return Promise.reject(error)
  }
)

// 封装axios的post请求
let postData = function (url, params = {}) {
  let theRequestUrl = url
  console.log('开始访问:' + theRequestUrl)
  return new Promise((resolve, reject) => {
    Axios.post(url, params)
      .then(response => { // 成功状态,把res的data传下去
        // console.log(response);
        resolve(response.data)
      })
      .catch((error) => { // 出错的情况,把error传下去
        console.log(theRequestUrl + ':请求出错')
        reject(error)
      })
  })
}

export { postData }

// // 封装axios的post请求
// export function postData(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     Axios.post(url, params)
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch((error) => {
//         console.log('请求出错');
//         reject(error);
//       })
//   })
// }

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', {value: Axios})
  }
}
