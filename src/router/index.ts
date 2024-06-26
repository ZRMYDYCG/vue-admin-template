import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes.ts'

let router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    routes: constantRoute,
    // 滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})
export default router
