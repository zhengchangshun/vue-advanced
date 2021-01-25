const requireDirective = require.context(`./`, true, /v-(.*)\.js$/)

function registerDirective(Vue) {
    requireDirective.keys().forEach(fileName => {
        const directiveName = fileName.replace(/^\..*\/(.*)\.\w+$/, `$1`)
        const directiveConfig = requireDirective(fileName)
        const directive = directiveConfig.default || directiveConfig
        // 指令注册是不需要 v-
        Vue.directive(directiveName.substring(2), directive)
    })
}

export default registerDirective
