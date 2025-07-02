import instance from "@/utils/request";
import {LoginFormType} from '@/type/user'
import {Res} from '@/type/result'
 
 
export const loginAPI = (data: LoginFormType): Res<string> =>
    instance.post("/login", data, {
        isToken: false,
        repeatSubmit: false
    });


export const getCodeApi = (): Res<null> =>
    instance.get("/captchaImage", {
        headers: {
            isToken: false,
        }
    });
