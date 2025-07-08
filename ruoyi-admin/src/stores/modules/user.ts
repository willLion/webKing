import { defineStore } from 'pinia'
import {getToken} from '@/utils/token'
import {LoginFormType} from '@/type/user'
import {getInfoAPI, loginAPI, logoutAPI} from "../../api/user.ts";
import {removeToken, setToken} from "../../utils/token.ts";
import router from "../../router";
import {isEmpty, isHttp} from "../../utils/validate.ts";
import defAva from '@/assets/img/profile.jpg'

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
        async loginFormAction(loginParam:LoginFormType) {
            return new Promise(async (resolve, reject) => {
               try {
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

                   if (res_login.code === 200) {
                       setToken(res_login.token)
                       // @ts-ignore
                       await router.push('/home')
                       resolve(true)
                   } else {
                       resolve(false)
                   }
               } catch (e) {
                   reject(e)
               }
            })
        },
        // 获取用户信息
        async getInfoAction() {
           return new Promise(async (resolve, reject) => {
               try {
                   const res_info = await getInfoAPI()
                   if (res_info.code !== 200) return

                   const user = res_info.user
                   let avatar = user.avatar || ''

                   if (!isHttp(avatar)) {
                       avatar = isEmpty(avatar) ? defAva : process.env.VUE_APP_BASE_API + avatar

                       // 权限验证 
                       if (res_info?.roles.length > 0) {
                           this.roles = res_info.roles
                           this.permissions = res_info.permissions
                       } else {
                           // @ts-ignore
                           this.roles = ['ROLE_DEFAULT']
                       }

                       this.id = res_info.userId
                       this.name = res_info.userName
                       this.nickName = res_info.nickName
                       this.avatar = res_info.avatar
                       resolve(res_info)
                   }
               } catch (e) {
                   reject(e)
               }
           })
        },
        // 退出系统
        async logoutAction() {
            return new Promise(async (resolve, reject) => {
                try {
                    const res_info = await logoutAPI()
                    if (res_info.code !== 200) return
                    this.token = ''
                    this.roles = []
                    this.permissions = []
                    removeToken()
                    // @ts-ignore
                    resolve()
                   
                } catch (e) {
                    reject(e)
                }
            })
        },

    },
})