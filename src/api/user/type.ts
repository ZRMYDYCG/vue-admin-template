// req-登录接口
// 携带参数的数据类型
export interface loginForm {
    username: string,
    password: string
}
// 返回的数据的数据类型
interface dataType {
    token: string
}
export interface loginResponseData {
    code: number,
    data: dataType
}

// req-用户信息获取接口
// 返回的数据的数据类型
interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}
interface user {
    checkUser: userInfo
}
export interface userResponseData {
    code: number,
    data: user
}
