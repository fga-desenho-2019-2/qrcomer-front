import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import OrderBagPage from '../views/OrderBag/orderBagPage.vue'
import LandingPageHeader from '../views/LandingPage/Header.vue'
import EditUser from '../views/EditUserProfile/EditUser.vue'
import User from '../views/UserProfile/User.vue'
import LoggedUserHeader from '../components/LoggedUserHeader.vue'

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
                LoggedUserHeader

            }
        },
        {
            path: '/user',
            name: 'user',
            components: {
                default: User,
                LoggedUserHeader
            }
        },
        {
            path: '/orderbag',
            name: 'order-bag',
            components: {
                default: OrderBagPage,
                // LandingPageHeader
            }
        },
    ]
})