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
]
