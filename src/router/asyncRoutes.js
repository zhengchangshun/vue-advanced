// 动态权限的路由
export default [
    {
        path: '/about',
        name: 'About',
        redirect: '/about/a',
        component: () => import ('@views/about'),
        meta: {
            icon: 'el-icon-s-unfold',
            title: '关于部分',
            auth: ['admin'],
            isMenu: true,
        },
        children: [
            {
                path: '/about/a',
                name: 'aboutA',
                component: () => import ('@views/about/a.vue'),
                meta: {
                    title: '关于-a',
                    auth: ['admin'],
                    isMenu: true,
                },
            },
            {
                path: '/about/b',
                name: 'aboutB',
                component: () => import ('@views/about/b.vue'),
                meta: {
                    title: '关于-b',
                    auth: ['admin'],
                    isMenu: false,
                },
            },
        ]
    },
]
