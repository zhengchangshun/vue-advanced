const path = require('path')

const proxyApi = ['/api'];
const port = process.env.port || 8060;
console.log(port);
const target = process.env.proxyTarget || undefined

// 代理转发
const proxyConfig = {
    target,
    ws: true,
    changeOrigin: true,
    onProxyReq(proxyReq) {
        if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', target);
        }
        let { proxyCookie } = process.env;
        if (proxyCookie) {
            proxyReq.setHeader('Cookie', proxyCookie);
        }
    }
};

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        proxy: target && {
            ...(
                proxyApi.reduce((obj, apiKey) => {
                    obj[apiKey] = proxyConfig;
                    return obj;
                }, {})
            )
        },
        port,
        open: true
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@lib', resolve('src/lib'))
            .set('@views', resolve('src/views'))
    }
}
