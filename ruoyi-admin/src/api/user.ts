import instance from "@/utils/request";
import {LoginFormType} from '@/type/user'
import {Res} from '@/type/result'

// 登录
export const loginAPI = (data: LoginFormType): Res<string> =>
    instance.post("/login", data, {
        isToken: false,
        repeatSubmit: false
    });


// 验证码
export const getCodeApi = (): Res<null> =>
    instance.get("/captchaImage", {
        headers: {
            isToken: false,
        }
    });


// 注册
export const registerAPI = (data: LoginFormType): Res<string> =>
    instance.post("/register", data, {
        isToken: false,
    });


//  获取用户详细信息
export const getInfoAPI = (): Res<any> =>
    instance.get("/getInfo");


//  退出方法
export const logoutAPI = (): Res<any> =>
    instance.post("/logout");
