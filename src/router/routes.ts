// 常量路由
export const constantRoute = [
    {
        // 登录
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login' // 命名路由 - 做菜单权限时会有作用
    },
    {
        // 登录成功后展示数据的路由
        path: '/',
        component: () => import('@/Layout/index.vue'),
        name: 'layout'
    },
    {
        // 404
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404'
    },
    {
        // 任意路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any'
    }
]
