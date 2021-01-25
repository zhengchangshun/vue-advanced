/**
 * 存放 权限相关的配置
 */
const pageRoles = {
    /* 匹配路由关键字 ?? */
    HOME: 1,
    INDEX: 2,
    ABOUT: 3,
    ABOUT1: 4,
    ABOUT2: 5,
}

const operation = {
    ADD_CODE: [1, 2],
    EDIT_CODE: [3, 4],
}

export default {
    ...pageRoles,
    ...operation,
}
