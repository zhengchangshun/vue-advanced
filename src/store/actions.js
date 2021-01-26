import _ from 'lodash';
import commonRoutes from '@/router/commonRoutes'
import asyncRoutes from '@/router/asyncRoutes'
import { queryUserInfo } from '@/service/global'

const actions = {
    // 获取权限数据
    getPermission({ commit }, role) { /* 根据权限信息加载权限路由 */
        let routeArr = _.cloneDeep(asyncRoutes) // 含有复杂数组对象，循环进行深拷贝
        const routes = filterAsyncRouter(routeArr, role)
        const menuList = filterMenuList(routes)
        commit('setRoutes', routes)
        commit('setMenuList', menuList)
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        let userInfo = await queryUserInfo()
        commit('setUserInfo', userInfo)
        return userInfo
    }
}

// 根据权限 筛选路由
function filterAsyncRouter(asyncRouters, role) {
    const accessedRouters = asyncRouters.filter(route => {
        if (route.meta && route.meta.auth.includes(role) >= 0) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, role)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

// 根据权限筛选菜单
function filterMenuList(routes) {
    const allMenus = [].concat(commonRoutes, routes)
    const menuList = allMenus.filter(route => {
        if (route.meta && route.meta.isMenu) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children)
            }
            return true
        }
        return false
    })
    return menuList
}

export default actions
