/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function isEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
    if (typeof str === `string` || str instanceof String) {
        return true
    }
    return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
    if (typeof Array.isArray === `undefined`) {
        return Object.prototype.toString.call(arg) === `[object Array]`
    }
    return Array.isArray(arg)
}

let reg = {
    number1: /^-?\d*\.?\d+$/, //数字正则
    number2: /^\d*\.?\d+$/, //正数正则
    number3: /^-?\d+$/, //整数正则
    number4: /^\d+$/, //正整数正则
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, //邮箱
    mobile: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/, //手机
    tel: /(^0\d{2}-8\d{7}$)|(^0\d{3}-3\d{6}$)/, //固定电话
    postCode: /^[1-9][0-9]{5}$/, //邮编
    ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/, //ip
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/, //url
    cardNo: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, //身份证
    userName: /^[a-zA-Z0-9_-]{4,16}$/, //用户名
}

export const validateReg = (type, value) => {
    if (!reg[type].test(value)) {
        return false
    }
    return true
}
