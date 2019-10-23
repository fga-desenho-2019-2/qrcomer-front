import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/LandingPage/Home.vue'
import Auth from '@/views/Authentication/Auth.vue'
import AuthTest from '@/views/Authentication/AuthTest.vue'
import AuthHeader from '@/views/Authentication/AuthHeader.vue'
import store from '@/store/store'
import OrderBagPage from '../views/OrderBag/orderBagPage.vue'
import ShoppingPage from '../views/ShoppingPage/ShoppingPage.vue'
import CategoriePage from '../views/CategoriePage.vue'
import EditUser from '../views/EditUserProfile/EditUser.vue'
import User from '../views/UserProfile/User.vue'
import LoggedUserHeader from '../components/LoggedUserHeader.vue'
import Menu from '../views/MenuPage/Menu.vue'
import Item from '../views/ItemPage/Item.vue'

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
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            components: {
                default: Home
            }
        },
        {
            path: '/shopping/:cnpj',
            name: 'shopping',
            components: {
                default: ShoppingPage
            }
        },
        {
            path: '/categorie/:name',
            name: 'categoria',
            components: {
                default: CategoriePage
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
            path: '/menu-page',
            name: 'menu',
            components: {
                default: Menu
            }
        },
        {
            path: '/item-page',
            name: 'item',
            components: {
                default: Item
            }
        },
        {
            path: '/orderbag',
            name: 'order-bag',
            components: {
                default: OrderBagPage,
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