import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import OrderBagPage from '../views/OrderBag/orderBagPage.vue'
import ShoppingPage from '../views/ShoppingPage/ShoppingPage.vue'
import CategoriePage from '../views/CategoriePage.vue'
import EditUser from '../views/EditUserProfile/EditUser.vue'
import LoggedUserHeader from '../components/LoggedUserHeader.vue'
import Menu from '../views/MenuPage/Menu.vue'
import Item from '../views/ItemPage/Item.vue'
import UserPage from '../views/UserProfile/Data.vue'

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
                default: UserPage,
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
    ]
})