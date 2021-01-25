/** ------------------------------ BROWSER ------------------------------------ */
export function windowResizeEvent() {
    const event = document.createEvent(`HTMLEvents`)
    event.initEvent(`resize`, true, true)
    event.eventType = `message`
    window.dispatchEvent(event)
}

/**
 * @returns {Boolean} 是否是IE
 */
export function isIE() {
    const bw = window.navigator.userAgent
    const compare = s => bw.indexOf(s) >= 0
    const ie11 = (() => `ActiveXObject` in window)()
    return compare(`MSIE`) || ie11
}

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
    const ua = window.navigator.userAgent
    const isExplorer = exp => {
        return ua.indexOf(exp) > -1
    }
    if (isExplorer(`MSIE`)) {
        return `IE`
    } else if (isExplorer(`Firefox`)) {
        return `Firefox`
    } else if (isExplorer(`Chrome`)) {
        return `Chrome`
    } else if (isExplorer(`Opera`)) {
        return `Opera`
    } else if (isExplorer(`Safari`)) {
        return `Safari`
    }
}

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
 * 简单的深克隆
 * @param {Object} origin
 * @returns {Object}
 */
export function deepClone(origin) {
    if (!origin && typeof origin !== `object`) {
        throw new Error(`error arguments`, `deepClone`)
    }
    const targetObj = origin.constructor === Array ? [] : {}
    Object.keys(origin).forEach(keys => {
        if (origin[keys] && typeof origin[keys] === `object`) {
            targetObj[keys] = deepClone(origin[keys])
        } else {
            targetObj[keys] = origin[keys]
        }
    })
    return targetObj
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 是否早于当前时间戳
 */
export const isEarly = (timeStamp, currentTime) => {
    return timeStamp < currentTime
}

/**
 * Capitalize a string.
 * 首字符大写
 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
