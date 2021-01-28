import Vue from "vue"
import store from "./store"
import router from "./router"
import ElementUI from 'element-ui';
import MyPlugin from "@/plugin"
import app from "./App.vue"
import "@/assets/css/theme/index.scss"
import "@/assets/css/index.css"

if (process.env.VUE_APP_MOCK && process.env.NODE_ENV === 'development') {
    require("../mock");
}

Vue.use(ElementUI)
Vue.use(MyPlugin)

new Vue({
    el: `#app`,
    store,
    router,
    render: h => h(app),
})
