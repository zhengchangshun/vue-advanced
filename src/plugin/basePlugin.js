import ajax from "@/lib/ajax"
import registerComponents from "@/components/global"
import registerDirective from "@/directive"
import registerFilter from "@/filter"

export default {
    install(Vue) {
        // 添加 http-ajax 方法
        Vue.prototype.$ajax = ajax;
        // 添加全局组件
        registerComponents(Vue);
        // 添加全局指令
        registerDirective(Vue)
        // 添加全局过滤器
        registerFilter(Vue)
    },
}
