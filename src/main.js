import Vue from "vue"
import store from "./store/index"
import router from "./router/index"
import ElementUI from 'element-ui';
import app from "./App.vue"
import MyPlugin from "@/plugin"
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/common.css"

Vue.use(ElementUI)
Vue.use(MyPlugin)

new Vue({
    el: `#app`,
    store,
    router,
    render: h => h(app),
})
