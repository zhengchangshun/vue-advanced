// require.context 实现所有的plugin的use

const requirePlugin = require.context(`./`, true, /(.*)Plugin\.js$/)

const MyPlugin = {
    install(Vue) {
        requirePlugin.keys().forEach(fileName => {
            const pluginObj = requirePlugin(fileName)
            const plugin = pluginObj.default || pluginObj
            Vue.use(plugin)
        })
    },
}

export default MyPlugin
