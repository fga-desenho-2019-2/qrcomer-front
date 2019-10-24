import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import OrderBagPage from '../views/OrderBag/orderBagPage.vue'
import ShoppingPage from '../views/ShoppingPage/ShoppingPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import EditUserProfile from '../views/EditUserProfile.vue'
import LoggedUserHeader from '../components/LoggedUserHeader.vue'
import RestaurantMenu from '../views/MenuPage/RestaurantMenu.vue'
import ItemPage from '../views/ItemPage/ItemPage.vue'
import UserProfile from '../views/UserProfile.vue'
import HocComponent from '../components/HocComponent'

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
                default: HocComponent(ShoppingPage, ['shopping', 'restaurants', 'shoppingCategories'])
            }
        },
        {
            path: '/categoria/:name',
            name: 'categoria',
            components: {
                default: HocComponent(CategoryPage, ['restaurantsByCategory'])
            }
        },
        {
            path: '/editar-usuario',
            name: 'edit-user',
            components: {
                default: HocComponent(EditUserProfile, ['user']),
                LoggedUserHeader

            }
        },
        {
            path: '/usuario',
            name: 'user',
            components: {
                default: HocComponent(UserProfile, ['user']),
                LoggedUserHeader
            }
        },
        {
            path: '/restaurante/:cnpj',
            name: 'menu',
            components: {
                default: HocComponent(RestaurantMenu, ['restaurant', 'restaurantMenu', 'categories'])
            }
        },
        {
            path: '/item/:id',
            name: 'item',
            components: {
                default: HocComponent(ItemPage, ['foodItem'])
            }
        },
        {
            path: '/sacola',
            name: 'order-bag',
            components: {
                default: HocComponent(OrderBagPage, ['shopping', 'restaurant', 'user'])
            }
        },
    ]
})