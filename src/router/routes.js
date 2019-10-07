import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import ShoppingPage from '../views/ShoppingPage.vue'
import ShoppingCategories from '../views/CategoriesPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home
            }
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            components: {
                default: ShoppingPage
            }
        },
        {
            path: '/restaurants/categories',
            name: 'categories',
            components: {
                default: ShoppingCategories
            }
        }
    ]
})
