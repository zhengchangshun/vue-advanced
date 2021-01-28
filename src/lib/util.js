/**
 * @param {string} url
 * @returns {Object} 从URL中得到参数对象
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf(`?`) + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}

/**
 * @param {title} String
 * @return 设置浏览器标题
 */
export const setTitle = function (title) {
    title = title || `Title`
    window.document.title = title
}


/**
 * Capitalize a string.
 * 首字符大写
 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

// 获取hash路径
export const getHashPath = () => window.location.hash.split('#')[1].split('?')[0]

