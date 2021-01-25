import store from "../store/index"

async function check(authority) {
    return await store.dispatch(`checkAuth`, authority)
}

// v-auth="'REMOVE'"
export default {
    // 指令定义对象的钩子函数inserted
    async inserted(el, binding) {
        if (!(await check(binding.value))) {
            el.parentNode && el.parentNode.removeChild(el)
        }
    },
    // 指令定义对象的钩子函数inserted
    async update(el, binding) {
        if (!(await check(binding.value))) {
            el.parentNode && el.parentNode.removeChild(el)
        }
    },
}
