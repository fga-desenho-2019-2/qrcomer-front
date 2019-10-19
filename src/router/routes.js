import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/LandingPage/Home.vue'
import Auth from '@/views/Authentication/Auth.vue'
import AuthTest from '@/views/Authentication/AuthTest.vue'
import LandingPageHeader from '@/views/LandingPage/Header.vue'
import AuthHeader from '@/views/Authentication/AuthHeader.vue'
import store from '@/store/store' 

// const ifNotAuthenticated = (to, from, next) => {
//     if (!store.getters.isAuthenticated) {
//         next()
//         return
//     }
//     next('/')
// }

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/isAuthenticated']) {
        next()
        return
    }
    next('/auth')
}

Vue.use(Router)

export default new Router({
    mode:  'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home,
                LandingPageHeader
            }
        },
        {
            path: '/auth',
            name: 'auth',
            components: {
                default: Auth,
                AuthHeader
            } 
        },
        {
            path: '/auth_test',
            name: 'auth_test',
            components: {
                default: AuthTest,
                AuthHeader
            },
            beforeEnter: ifAuthenticated,
        }
    ]
})
