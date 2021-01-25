export default [
    {
        path: '/',
        name: 'Test',
        component: () => import ('@/views/example/test'),
        meta: {
            title: '首页',
            icon: ''
        }
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import ('@/views/example/message'),
        meta: {
            title: '首页',
            icon: ''
        }
    }
]
