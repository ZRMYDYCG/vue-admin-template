// // 路由鉴权
// import router from './router/index.ts'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'
// import pinia from './store/index.ts'
// import useUserStore from "./store/modules/user/user.ts"
// const userStore = useUserStore(pinia)
// let token = userStore.token
// let username = userStore.username
//
// router.beforeEach(async (to: any, from: any, next: any) => {
//     console.log(to, from, next)
//     if(token) {
//         // 登录成功，访问 login ，不能访问，指向首页
//         if(to.path === '/login') {
//             next({ path: '/' })
//         } else {
//             if(username) {
//                 next()
//             } else {
//                 try {
//                     // 获取到了用户信息
//                     await userStore.userInfo()
//                     // 放行
//                     next()
//                 } catch(error) {
//                     // token 过期，获取不到用户信息
//                     userStore.userLogout()
//                     next({ path: '/login', query: { redirect: to.path } })
//                 }
//             }
//         }
//     } else {
//         if(to.path === '/login') {
//             next()
//         } else {
//             next({ path: '/login', query: { redirect: to.path } })
//         }
//     }
//     nprogress.start()
// })
//
// // 全局后置守卫
// router.afterEach((to: any, from: any) => {
//     console.log(to, from)
//     document.title = to.meta.title
//     nprogress.done()
// })
