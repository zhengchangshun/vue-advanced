// 动态权限的路由
export default [
    {
        path: '/about',
        name: 'About',
        component: () => import ('@views/about'),
        redirect: '/about/about',
        meta: {
            icon: '',
            title: '关于部分',
            auth: ['admin'],
            isMenu: true,
        },
        children: [
            {
                path: 'about',
                component: () => import ('@views/about/about.vue'),
                meta: {
                    icon: '',
                    title: '关于',
                    auth: ['admin'],
                    isMenu: true,
                },
            },
            {
                path: '/about/doc',
                name: 'About',
                component: () => import ('@views/about/doc.vue'),
                meta: {
                    icon: '',
                    title: '关于-doc',
                    auth: ['admin'],
                    isMenu: false,
                }
            },
        ]
    },
]
