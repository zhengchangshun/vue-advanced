import Vue from "vue"
import Router from "vue-router"
import pages from "./pages"
import checkRoles, { setDefaultComponent } from "./checkRoles"

Vue.use(Router)

setDefaultComponent(pages.NotFound)

const getSyncComponnet = component => {
    return pages[component || undefined]
}
const deepDealRouteConfig = routeConfig => {
    const routes = []
    routeConfig.forEach(v => {
        const { component, children, redirect, role, ...args } = v
        const route = {
            ...args,
        }
        if (redirect) {
            route.redirect = redirect
            routes.push(route)
            return
        }
        const _comp = checkRoles(getSyncComponnet(component), role)
        if (!_comp) {
            return
        }
        route.component = _comp
        if (children) {
            route.children = deepDealRouteConfig(children)
        }
        routes.push(route)
    })
    return routes
}

export default function (routeConfig) {
    const routes = deepDealRouteConfig(routeConfig)
    return routes
}
