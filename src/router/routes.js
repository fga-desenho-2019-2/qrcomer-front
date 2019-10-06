import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import LandingPageHeader from '../views/LandingPage/Header.vue'
import User from '../views/UserProfile/User.vue'
//import UserProfileHeader from '../views/UserProfile/Header.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            components: {
                default: Home,
                LandingPageHeader
            }
        },
        {
            path: '/user-profile',
            name: 'user',
            components: {
                default: User,
            }
        },
    ]
})