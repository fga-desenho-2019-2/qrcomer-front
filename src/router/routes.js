import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/LandingPage/Home.vue'
import Auth from '@/views/Authentication/Auth.vue'
import store from '@/store/store'
import OrderBagPage from '../views/OrderBag/orderBagPage.vue'
import ShoppingPage from '../views/ShoppingPage/ShoppingPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import EditUserProfile from '../views/EditUserProfile.vue'
import RestaurantMenu from '../views/MenuPage/RestaurantMenu.vue'
import ItemPage from '../views/ItemPage/ItemPage.vue'
import UserProfile from '../views/UserProfile.vue'
import HocComponent from '../components/HocComponent'
import CardList from '../views/Cards/CardList.vue'
import CardShow from '../views/Cards/CardShow'
import CreateCard from '../views/Cards/CreateCard'
import OrderPage from '@/views/Order/Order'

const ifAuthenticated = (to, from, next) => {
    if(to.name === "shopping") {
        localStorage.setItem('shoppingCNPJ', to.params.cnpj)
    }

    if (store.getters["auth/isAuthenticated"]) {
        next();
        return;
    }
    next("/auth/login");
};

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            components: {
                default: Home
            },

        },
        {
            path: "/shopping/:cnpj",
            name: "shopping",
            components: {
                default: HocComponent(ShoppingPage, [
                    "shopping",
                    "restaurants",
                    "shoppingCategories"
                ])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/categoria/:name",
            name: "categoria",
            components: {
                default: HocComponent(CategoryPage, ["restaurantsByCategory"])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/editar-usuario",
            name: "edit-user",
            components: {
                default: HocComponent(EditUserProfile, ["user"])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/usuario",
            name: "user",
            components: {
                default: HocComponent(UserProfile, ["user"])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/restaurante/:cnpj",
            name: "menu",
            components: {
                default: HocComponent(RestaurantMenu, [
                    "restaurant",
                    "restaurantMenu",
                    "categories",
                ])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/item/:id",
            name: "item",
            components: {
                default: HocComponent(ItemPage, ['foodItem'])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/sacola",
            name: "order-bag",
            components: {
                default: HocComponent(OrderBagPage, ["shopping", "restaurant", "usingCard"])
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: "/auth/:type",
            name: "auth",
            components: {
                default: Auth
            }
        },
        {
            path: '/cartoes/:from?',
            name: 'card_list',
            components: {
                default: HocComponent(CardList)
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: '/pedido',
            name: 'order',
            components: {
                default: HocComponent(OrderPage),
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: '/novo-cartao/:from?',
            name: 'create_card',
            components: {
                default: CreateCard
            },
            beforeEnter: ifAuthenticated
        },
        {
            path: '/cartao/:id',
            name: 'card',
            components: {
                default: HocComponent(CardShow, ['selectedCard'])
            },
            beforeEnter: ifAuthenticated
        },
    ]
});
