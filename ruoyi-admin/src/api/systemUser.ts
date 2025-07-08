import instance from "@/utils/request";
import {Res} from '@/type/result'
import {parseStrEmpty} from "../utils/ruoyi.ts";


// 查询用户列表
export const listUserApi = (query: any): Res<null> =>
    instance.get("/system/user/list", {
        params: query
    });



// 查询用户详细
export const getUserApi = (userId: number): Res<null> =>
    instance.get('/system/user/' + parseStrEmpty(userId), {
    });
