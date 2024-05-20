import { defineStore } from "pinia"
import { reqLogin } from "@/api/user/index.ts"
import type { loginForm } from "@/api/user/type.ts"
import { constantRoute } from "@/router/routes.ts"
import { UserState } from "@/store/modules/types/type.ts"; // 引入常量路由

const useUserStore = defineStore('userStore',{
    // 小仓库 - 存储数据
    state: ():UserState => {
        return {
            token: localStorage.getItem('token'),
            menuRoutes: constantRoute
        }
    },
    // 异步 | 逻辑
    actions: {
        // 用户登录的方法
       async userLogin(data: loginForm) {
           let res = await reqLogin(data)
           if(res.code === 200) {
               this.token = res.data.token
               localStorage.setItem('token', res.data.token)
               return 'ok'
           } else {
               return Promise.reject(new Error('登录失败'))
           }
        }
    },
    getters: {

    }
})


export default useUserStore
