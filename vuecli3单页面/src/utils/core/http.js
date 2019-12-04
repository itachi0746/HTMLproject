/* eslint-disable */
import theaxios from 'axios';
import cookie from './cookie.js'
import qs from 'qs'
import utils from '../index'
import {Notify} from 'vant'
import * as toast from '../toast'

let ROOT, ROOT2;
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  ROOT = "/api"; // MallService 控制器
} else {
  //生产环境下的地址
  ROOT = "/api";
}
// console.log(process.env.NODE_ENV)
const axios = theaxios.create({
    baseURL: ROOT,
    timeout: 10000,
});
// 默认配置
// axios.defaults.timeout = 10000; // 超时
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 不同环境下的BASE_URL
// console.log(axios.defaults.baseURL)
// 请求拦截
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 在发送请求之前做某件事
    toast.showLoading()
    if (config.method === "post") {
        // 序列化
        config.data = qs.stringify(config.data);
        // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
    }
    return config;
}, function (error) {
    // Do something with request error
    toast.hideLoading()
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // debugger
    const resData = response.data
    toast.hideLoading()
    if (resData.code === '401') {
        utils.doLogin()
        return null
    }
    if (resData.code === '403') {
        // debugger
        const theUrl = resData.data
        if (!theUrl) {
            Notify({ type: 'danger', message: resData.message });
            return null
        }
        let times = parseInt(utils.getStore('doWxLoginTimes'))
        if (times === 0) {
            utils.doWxLogin(theUrl)
        }
        times++
        utils.setStore('doWxLoginTimes', times) // 记录返回码403次数
        return null
    }
    return response;
}, function (error) {
    // debugger
    // toast.hideLoading()
    // Do something with response error
    return Promise.reject(error);
});

// get请求
export async function get(url, params = {}) {
    try {
        let res = await axios.get(url, params);
        return new Promise((resolve, reject) => {
            resolve(res.data);
        })
    } catch (err) {
        console.log(err);
    }
}

const os = {
    windows: /Windows/ig.test(navigator.userAgent),
    macos: /Mac OS/ig.test(navigator.userAgent)
}

// post 请求
export async function post(url, params = {}) {
    let theUrl = url
    try {
        // console.log(`开始访问: ${theUrl}`)
        // debugger
        let res = await axios.post(url, params);
        return new Promise((resolve) => {
            // console.log(res)
            if (!res) {
                // debugger
                return false
            }
            if (!res.data.success) {
                // 警告通知
                Notify({ type: 'danger', message: res.data.message || '操作失败' });
                resolve(res.data);
            }
            // debugger
            resolve(res.data);
        })
    } catch (err) {
        // console.log(`请求出错: ${theUrl}`)
        console.log(err);
        toast.hideLoading()
        toast.fail('请求出错')
    }
}

// 封装axios的post请求
let postData = function (url, params = {}) {
    let theRequestUrl = url
    console.log('开始访问:' + theRequestUrl)
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                // debugger
                if (response.data.success) {
                    resolve(response.data)
                } else {
                    console.log(response.data.message)
                    resolve(response.data)
                }
            })
            .catch((error) => {
                console.log(theRequestUrl + ':请求出错')
                reject(error)
            })
    })
}

export {postData}
