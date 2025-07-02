import { defineStore } from 'pinia'
import {getToken} from '@/utils/token'
import {LoginFormType} from '@/type/user'
import {loginAPI} from "../../api/user.ts";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
           token: getToken(),
            id: '',
            name: '',
            nickName: '',
            avatar: '',
            roles: [],
            permissions: []
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.name
        },
    },
    actions: {
        // 登录
        async loginForm(loginParam:LoginFormType) {
            const userName = loginParam.userName.trim()
            const password = loginParam.password
            const code = loginParam.code
            const uuid = loginParam.uuid

             const res_login = await loginAPI({
                 userName,
                 password,
                 code,
                 uuid,
             })

            console.log('res_login', res_login)
        },
        

    },
})