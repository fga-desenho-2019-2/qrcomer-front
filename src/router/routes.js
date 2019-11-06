import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/LandingPage/Home.vue";
import Auth from "@/views/Authentication/Auth.vue";
import AuthTest from "@/views/Authentication/AuthTest.vue";
import store from "@/store/store";
import OrderBagPage from "../views/OrderBag/orderBagPage.vue";
import ShoppingPage from "../views/ShoppingPage/ShoppingPage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import EditUserProfile from "../views/EditUserProfile.vue";
import RestaurantMenu from "../views/MenuPage/RestaurantMenu.vue";
import ItemPage from "../views/ItemPage/ItemPage.vue";
import UserProfile from "../views/UserProfile.vue";
import HocComponent from "../components/HocComponent";

// const ifNotAuthenticated = (to, from, next) => {
//     if (!store.getters.isAuthenticated) {
//         next()
//         return
//     }
//     next('/')
// }

const ifAuthenticated = (to, from, next) => {
    if (store.getters["auth/isAuthenticated"]) {
        next();
        return;
    }
    next("/auth");
};

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            components: {
                default: Home
            }
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
            }
        },
        {
            path: "/categoria/:name",
            name: "categoria",
            components: {
                default: HocComponent(CategoryPage, ["restaurantsByCategory"])
            }
        },
        {
            path: "/editar-usuario",
            name: "edit-user",
            components: {
                default: HocComponent(EditUserProfile, ["user"])
            }
        },
        {
            path: "/usuario",
            name: "user",
            components: {
                default: HocComponent(UserProfile, ["user"])
            }
        },
        {
            path: "/restaurante/:cnpj",
            name: "menu",
            components: {
                default: HocComponent(RestaurantMenu, [
                    "restaurant",
                    "restaurantMenu",
                    "categories"
                ])
            }
        },
        {
            path: "/item/:id",
            name: "item",
            components: {
                default: HocComponent(ItemPage, ["foodItem"])
            }
        },
        {
            path: "/sacola",
            name: "order-bag",
            components: {
                default: HocComponent(OrderBagPage, ["shopping", "restaurant", "user"])
            }
        },
        {
            path: "/auth",
            name: "auth",
            components: {
                default: Auth
            }
        },
        {
            path: "/auth_test",
            name: "auth_test",
            components: {
                default: AuthTest
            },
            beforeEnter: ifAuthenticated
        }
    ]
});