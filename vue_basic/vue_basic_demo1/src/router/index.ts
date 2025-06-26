import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
    {
        path:'/',
        redirect:'/com2'
    },
    {
        path: '/basic',
        component: () => import('@/views/BasicDemo/index.vue')
    },
    {
        path:'/basic2',
        component:()=>import('@/views/BasicDemo2/index.vue')
    },    {
        path:'/com',
        component:()=>import('@/views/ComDemo/index.vue')
    },
    {
        path:'/com2',
        component:()=>import('@/views/ComDemo2/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [...constantRoutes]
})

export default router;
