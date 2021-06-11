import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
// import userApi from '@/api/user.js'
const DateAndMulti = () => import('@/view/DateAndMulti.vue')
const HomeIndex = () => import('@/view/HomeIndex.vue')
const TestLayer = () => import('@/view/TestLayer.vue')
const TestCity = () => import('@/view/TestCity.vue')
const TwoZeroFourEight = () => import('@/view/TwoZeroFourEight.vue')
const LoadAnimation = () => import('@/view/LoadAnimation.vue')
const TestCanvas = () => import('@/view/Canvas.vue')
const GlBoom = () => import('@/view/GlBoom.vue')
const Three = () => import('@/view/Three.vue')
const CyberPunk = () => import('@/view/CyberPunk.vue')

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
    {
        path: '/test-city',
        component: TestCity,
    },
    {
        path: '/2048',
        component: TwoZeroFourEight,
    },
    {
        path: '/date-multi',
        component: DateAndMulti,
    },
    {
        path: '/load-animation',
        component: LoadAnimation,
    },
    {
        path: '/canvas',
        component: TestCanvas,
    },
    {
        path: '/gl-boom',
        component: GlBoom,
    },
    {
        path: '/three',
        component: Three
    },
    {
        path: '/cyber-punk',
        component: CyberPunk
    }
]

const router = new VueRouter({
    routes
})
export default router
