import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import Antd, { message } from 'ant-design-vue';
import * as echarts from 'echarts' 
import pinia from '@/stores'
import 'ant-design-vue/dist/reset.css';


const app = createApp(App)


// 注册全局组件 
app.provide('$message', message)
app.provide('$echarts', echarts)

app.use(router)
app.use(Antd)
app.use(pinia)
app.mount('#app')
