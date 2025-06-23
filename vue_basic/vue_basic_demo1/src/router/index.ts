import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
    {
        path:'/',
        redirect:'/basic'
    },
    {
        path:'/basic',
        component:()=>import('@/views/BasicDemo/index.vue')
    },
    {
        path:'/com',
        component:()=>import('@/views/ComDemo/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [...constantRoutes]
})

export default router;
