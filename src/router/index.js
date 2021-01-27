import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import commonRoutes from './commonRoutes'
import exceptionRoute from './exceptionRoute'

Vue.use(Router)
// 关闭loading
NProgress.configure({ showSpinner: false })// NProgress Configuration

const router = new Router({
    routes: commonRoutes
})

//路由钩子
router.beforeEach((to, from, next) => {
    NProgress.start()
    // 第一步 先去vuex拉取用户信息
    let info = store.state.userInfo
    let infoLength = Object.keys(info).length === 0
    // infoLength为 true 说明是第一次访问系统或者刷新页面
    if (infoLength) {
        store.dispatch('getUserInfo').then((userInfo) => {
            const { role } = userInfo || {}
            store.dispatch('getPermission', role).then(() => {
                // 根据用户角色，动态添加权限路由
                router.addRoutes(store.state.routes)
                router.addRoutes(exceptionRoute)
                next({ ...to, replace: true })
            })
        })
    } else { // infoLength为false 说明是静态点击，不需要任何操作
        next()
    }
})

//路由钩子 --- 进入后： 回到顶部
router.afterEach(() => {
    NProgress.done()
    window.scrollTo(0, 0)
})


export default router
