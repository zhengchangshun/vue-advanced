import Router from "vue-router"
import creatRoute from "./lib/creatRoute"
import store from "../store"

const routes = creatRoute(store.getters.router)
const createOptions = routes => {
    return {
        scrollBehavior: () => ({ y: 0 }),
        routes,
    }
}
const createRouter = routes => new Router(createOptions(routes))

const router = createRouter(routes)

export const resetRouter = routerConfig => {
    router.matcher = new Router(createOptions([])).matcher
    router.addRoutes(creatRoute(routerConfig))
    store.commit('RESETROUTER', routerConfig)
}

export default router
