import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
// import userApi from '@/api/user.js'
const HomeIndex = () => import('@/view/HomeIndex.vue')
const TestLayer = () => import('@/view/TestLayer.vue')

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   component: HomeIndex
    // },
    {
        path: '/',
        component: HomeIndex,
    },
    {
        path: '/test-layer',
        component: TestLayer,
    },
]

const router = new VueRouter({
    routes
})
export default router
