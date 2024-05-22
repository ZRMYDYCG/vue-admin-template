// 路由鉴权
import router from '@/router/index.ts'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局前置守卫
/*
* to: 你将要访问哪个路由
* from: 你从哪个路由过来
* next 路由放行函数
* */
router.beforeEach((to: any, from: any, next: any) => {
    console.log(to, from, next)
    nprogress.start()
    next()
})

// 全局后置守卫
router.afterEach((to: any, from: any) => {
    console.log(to, from)
    nprogress.done()
})
