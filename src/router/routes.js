import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import LandingPageHeader from '../views/LandingPage/Header.vue'
import EditUser from '../views/EditUserProfile/EditUser.vue'
import User from '../views/UserProfile/User.vue'
import LogedUserHeader from '../components/LogedUserHeader.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            components: {
                default: Home,
                LandingPageHeader, 
            }
        },
        {
            path: '/edit-user',
            name: 'edit-user',
            components: {
                default: EditUser,
                LogedUserHeader

            }
        },
        {
            path: '/user',
            name: 'user',
            components: {
                default: User,
                LogedUserHeader
            }
        },
    ]
})