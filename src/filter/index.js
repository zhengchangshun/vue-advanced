//全局过滤器
import moment from "moment"
import "moment/locale/zh-cn"

const registerFilter = Vue => {
    Vue.filter(`NumFormat`, function (value) {
        if (!value) {
            return `0`
        }
        const intPartFormat = value
            .toString()
            .replace(/(\d)(?=(?:\d{3})+$)/g, `$1,`)
        return intPartFormat
    })

// 时间格式化
    Vue.filter(`moment`, function (dataStr, pattern = `YYYY-MM-DD HH:mm:ss`) {
        return moment(dataStr).format(pattern)
    })
}

export default registerFilter
