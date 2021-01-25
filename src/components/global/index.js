import { capitalize } from "@/lib/util"

const requireComponent = require.context(`./`, true, /.*\.vue$/)

function registerComponents(Vue) {
    requireComponent.keys().forEach(fileName => {
        const componentName = fileName.replace(/^\..*\/(.*)\.\w+$/, `$1`)
        const componentConfig = requireComponent(fileName)
        const component = componentConfig.default || componentConfig
        Vue.component(capitalize(componentName), component)
    })
}

export default registerComponents
