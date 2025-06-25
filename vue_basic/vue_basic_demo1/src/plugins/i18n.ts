import type {App} from "vue";

export default {
    install(app: App, options: any) {
        console.log('app', app)
        console.log('options', options)

        app.config.globalProperties.$translate = (key: any)=>{
            console.log('key', key)
            return key + 'aaaaa'
            // return key.split('.').reduce((o: any,i: any)=>{
            //     if(o) return o[i]
            // }, options)
        }

        // @ts-ignore
        app.provide('translate', app.config.globalProperties.$translate)
    }
}