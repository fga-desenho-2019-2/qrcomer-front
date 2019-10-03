import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import Auth from '../views/Authentication/Auth.vue'
import LandingPageHeader from '../views/LandingPage/Header.vue'

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
            } 
        }
    ]
})
