import request from '@/utils/request/index.ts'
import type { loginForm, loginResponseData, userResponseData } from "@/api/user/type.ts";

// 枚举请求接口地址
enum API {
    LOGIN_URL= '/user/login',
    USERINFO_URL = '/user/info'
}

export const reqLogin = (data: loginForm) =>  request.post<any, loginResponseData>(API.LOGIN_URL, data) // req-登录接口

export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL) // req-获取用户信息接口
