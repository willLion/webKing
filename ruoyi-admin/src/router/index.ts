 import { createRouter, createWebHistory } from "vue-router";
 
 
let routes= [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Layout/index.vue')
    },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/index.vue')
    },
    {
        // 配置404页面
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/NotFound/index.vue'),
    }
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 