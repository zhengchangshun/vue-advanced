export default [
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
