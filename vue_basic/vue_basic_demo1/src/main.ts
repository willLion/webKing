import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import TestCom from "./components/TestCom.vue";
import i18n from "./plugins/i18n.ts";

const app = createApp(App)

const vActiveHandleObj = {
    mounted: (el: any)=>{
        el.classList.add('active')
    }
}

app
    .use(i18n, {
        greeting: {
            hello: 'Bonjour!'
        }
    })
    .directive('height', vActiveHandleObj)
    .component('TestCom', TestCom)
    .use(router)
    .mount('#app')
