import axios from 'axios'
import {tansParams} from "./ruoyi.ts";
import cache from "./cache.ts";
// 创建axios实例
const request = axios.create({
    // baseURL: '/api',//
    baseURL: 'http://localhost:3333',// 所有的请求地址前缀部分
    timeout: 40000, // 请求超时时间(毫秒)
})

// request拦截器
request.interceptors.request.use(
    config => {
        console.log('响应请求配置', config)

        // 是否需要设置token
        const isToken = config.headers?.isToken === false

        // 是否需要防止数据重复提交
        const isRepeatSubmit = config.headers?.repeatSubmit === false

        // get请求映射params参数
        if (config.method === 'get' && config.params) {
            let url = config.url + '?' + tansParams(config.params)
            url = url.slice(0, -1)
            config.params = {}
            config.url = url
        }

        if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
            const requestObj = {
                url: config.url,
                data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
                time: new Date().getTime()
            }
            const requestSize = Object.keys(JSON.stringify(requestObj)).length // 请求数据大小
            const limitSize = 5 * 1024 * 1024 // 限制存放数据5M
            if (requestSize >= limitSize) {
                console.warn(`[${config.url}]: ` + '请求数据大小超出允许的5M限制，无法进行防重复提交验证。')
                return config
            }
            const sessionObj = cache.session.getJSON('sessionObj')
            if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
                cache.session.setJSON('sessionObj', requestObj)
            } else {
                const s_url = sessionObj.url                  // 请求地址
                const s_data = sessionObj.data                // 请求数据
                const s_time = sessionObj.time                // 请求时间
                const interval = 1000                         // 间隔时间(ms)，小于此时间视为重复提交
                if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
                    const message = '数据正在处理，请勿重复提交'
                    console.warn(`[${s_url}]: ` + message)
                    return Promise.reject(new Error(message))
                } else {
                    cache.session.setJSON('sessionObj', requestObj)
                }
            }
        }

        return config
    },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)

// response 拦截器
request.interceptors.response.use(
    response => {
        // todo 处理不同状态码
        return response.data
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default request