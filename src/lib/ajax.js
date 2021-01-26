/**
 * 通用发送请求文件
 * 默认返回json结构
 * - retCode : 返回码  默认200为成功，其他失败
 * - retDesc : 返回信息
 * - result : 返回信息结构体，必须为Object
 * httpConfig: http请求配置
 */
import { Message } from 'element-ui';
import CONFIG from "@/config/httpConfig"
import axiosFactory from "axios"

let loadingInstance = null
// 新建axios实例，避免污染全局axios
const axios = axiosFactory.create({})
// 错误处理通用方法
const errorHandler = function (res) {
    if (res.config.loading) {
        loadingInstance && loadingInstance.close();
    }

    // 登录失效的返回码 统一都跳转到登录页
    let data = res.data
    if (CONFIG.UNLOGIN_CODE.indexOf(data.retCode) !== -1) {
        let curUrl = encodeURIComponent(location.href)
        location.href = data.retDesc + curUrl
        return
    }

    let message = res.data.retDesc || `未知错误`
    Message.error({ message })
    // 抛出错误
    return Promise.reject(res)
}

// 请求拦截器
axios.interceptors.request.use(
    config => {
        config.url = config.url
        config.timeout || (config.timeout = CONFIG.TIMEOUT)

        return config
    },
    error => {
        let { message } = error

        return errorHandler({
            config: error.config,
            data: {
                retCode: CONFIG.ERROR_RETCODE,
                retDesc: `请求错误：${message}`,
            },
        })
    },
)

// 返回拦截器
axios.interceptors.response.use(
    res => {
        if (res.config.loading) {
            loadingInstance && loadingInstance.close()
        }

        let data = res.data

        if (CONFIG.SUCCESS_CODE.includes(data.code)) {
            return Promise.resolve(data.data)
        } else {
            return errorHandler(res)
        }
    },
    error => {
        let { message } = error
        // 超时等其他catch到的错误
        return errorHandler({
            config: error.config,
            data: {
                retCode: CONFIG.ERROR_RESCODE,
                retDesc: `请求失败：${message}`,
            },
        })
    },
)

let ajax = {},
    methods = [`get`, `post`, `delete`]

methods.forEach(m => {
    /**
     * 参数说明
     * 降低修改成本，url和data参数保持原样
     * 其他所有参数改成解构，需要其他参数自行添加
     * =>timeout  number  超时时间  默认10s
     */
    ajax[m] = function (
        url,
        data = {},
        {
            timeout = CONFIG.TIMEOUT,
            loading = false,
            parseContent = false,
        } = {},
    ) {
        let config = {
            timeout,
            loading,
            parseContent,
        }

        if (config.loading) {
            loadingInstance = Loading.service({ fullscreen: true });
        }

        // post和其他method区分
        if (m !== `post`) {
            // 获取一个副本，避免修改data时影响传入的参数对象
            let params = Object.assign({}, data)
            // 非post请求 追加时间戳参数
            params.t = new Date().getTime()
            config.params = params
            return axios[m](url, config)
        } else {
            // post请求 追加header
            config.headers = {
                "Content-Type": `application/json`,
            }
            return axios[m](url, data, config)
        }
    }
})

ajax.logout = () => axios.get(`/auth/logout`, { t: new Date().getTime() })

export default ajax
