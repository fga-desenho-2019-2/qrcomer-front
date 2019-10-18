import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import OrderBagPage from '../views/OrderBag/orderBagPage.vue'
import LandingPageHeader from '../views/LandingPage/Header.vue'

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
            path: '/orderbag',
            name: 'order-bag',
            components: {
                default: OrderBagPage,
                // LandingPageHeader
            }
        },
    ]
})