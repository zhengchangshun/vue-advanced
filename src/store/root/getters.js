const deepMenus = ({ routerConfig, roles }, router) => {
    const routers = []
    routerConfig.forEach(v => {
        v = { ...v }
        if (!router && v.hidden) {
            return
        }
        if (!roles.includes(v.role)) {
            return
        }
        if (v.children) {
            const children = deepMenus(
                { routerConfig: v.children, roles },
                router,
            )
            if (children.length) {
                v.children = children
                routers.push(v)
            }
        } else if (router && v.group) {
            v.group.forEach(j => {
                if (j.children) {
                    const children = deepMenus(
                        { routerConfig: j.children, roles },
                        router,
                    )
                    if (children.length) {
                        v.children = children
                        routers.push(v)
                    }
                }
            })
            delete v.group
        } else {
            routers.push(v)
        }
    })
    return routers
}
const deepRouter = state => {
    return deepMenus(state, `router`)
}
export default {
    menus: state => {
        const router = deepMenus(state)
        return router
    },
    router: state => {
        const router = deepRouter(state)
        return router
    },
}
