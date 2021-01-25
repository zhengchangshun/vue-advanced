export default [
    {
        path: "/404",
        component: 'NotFound',
        hidden: true,
    },
    {
        path: "/",
        component: 'Layout',
        name: 'home',
        role: 1,
        meta: {
            title: '总览',
            icon: 'ios-paper'
        },
        children: [
            {
                path: "/",
                component: 'index',
                name: 'index',
                role: 2,
                meta: {
                    title: '概要',
                    icon: 'ios-paper'
                },
            }
        ]
    },
    {
        path: "/about",
        component: 'Layout',
        name: 'about',
        role: 4,
        meta: {
            title: '关于',
            icon: 'iconfont icon-tongjitubiao'
        },
    },
    { path: "*", redirect: "/404", hidden: true }
]

