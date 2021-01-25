import Vue from "vue"
import Vuex from "vuex"
import root from "./root"
import about from "./about"

Vue.use(Vuex)
const store = new Vuex.Store({
    namespaced: true,
    ...root,
    modules: {
        about,
    },
})

export default store
