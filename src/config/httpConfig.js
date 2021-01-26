/**
 * 存放请求相关的配置，例如错误码等
 */

export default {
    UNLOGIN_CODE: '403',
    SUCCESS_CODE: [0, 200],
    TIMEOUT: 10000,
    ERROR_RETCODE: -2, //请求错误时返回code
    ERROR_RESCODE: -1, //返回时，超时等其他catch到的错误
}
