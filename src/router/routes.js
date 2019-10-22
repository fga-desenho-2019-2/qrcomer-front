import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/LandingPage/Home.vue'
import ShoppingPage from '../views/ShoppingPage/ShoppingPage.vue'
import CategoriePage from '../views/CategoriePage.vue'
import EditUser from '../views/EditUserProfile/EditUser.vue'
import User from '../views/UserProfile/User.vue'
import LoggedUserHeader from '../components/LoggedUserHeader.vue'

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
    ]
})