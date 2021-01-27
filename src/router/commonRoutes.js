export default [
    {
        path: '/',
        name: 'Home',
        component: () => import ('@views/index/index.vue'),
        meta: {
            icon: 'el-icon-s-home',
            title: '首页',
            isMenu: true,
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import ('@components/layout/Exception/404.vue'),
        meta: {
            title: '404',
            icon: ''
        }
    },
    {
        path: '*',
        redirect: '/404'
    },
]
