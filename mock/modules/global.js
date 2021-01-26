// modules/global.js
const queryUserInfo = {
    url: "/api/queryUserInfo",
    type: "GET",
    response: () => {
        return {
            code: 200,
            data: {
                role: 'admin',
                userName: 'zcs'
            }
        }
    }
}

module.exports = [
    queryUserInfo,
]
