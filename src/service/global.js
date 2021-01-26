import ajax from "@lib/ajax";

export function queryUserInfo(params) {
    return ajax.get('/api/queryUserInfo', params)
}
