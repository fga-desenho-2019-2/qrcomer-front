import Vue from 'vue';
import Services from '../services/ServicesFacade'

const HocComponent = (component, neededSetups) => {
    return Vue.component("HocComponent", {
        render(createElement) {
            return createElement(component, {
                props: {
                    shopping: this.shopping,
                    restaurants: this.restaurants,
                    shoppingCategories: this.shoppingCategories,
                    user: this.user,
                    restaurantMenu: this.restaurantMenu,
                    restaurant: this.restaurant,
                    categories: this.categories,
                    foodItem: this.foodItem
                }
            })
        },
        data() {
            return {
                shopping: null,
                restaurants: null,
                shoppingCategories: null,
                user: null,
                restaurantMenu: null,
                restaurant: null,
                categories: null,
                foodItem: null
            }
        },
        created() {
            this.setUp();
        },
        methods: {
            setUp: async function () {
                let routeName = this.$router.currentRoute.name;
                if(neededSetups) {
                    if(neededSetups.find(element => element === 'shopping')) {
                        if(routeName === 'shopping'){
                            localStorage.setItem('shoppingCNPJ', this.$route.params.cnpj)
                        }
                        let shoppingCNPJ = localStorage.getItem('shoppingCNPJ');
                        this.shopping = await Services.getShopping(shoppingCNPJ);
                    }
                    if(neededSetups.find(element => element === 'restaurants')) {
                        let shoppingCNPJ = localStorage.getItem('shoppingCNPJ');
                        this.restaurants = await Services.getAllRestaurants(shoppingCNPJ);
                    }
                    if(neededSetups.find(element => element === 'restaurantsByCategory')) {
                        let shoppingCNPJ = localStorage.getItem('shoppingCNPJ');
                        let category = this.$route.params.name;
                        this.restaurants = await Services.getAllRestaurants(shoppingCNPJ, category);
                    }
                    if(neededSetups.find(element => element === 'shoppingCategories')) {
                        let shoppingCNPJ = localStorage.getItem('shoppingCNPJ');
                        this.shoppingCategories = await Services.getShoppingCategories(shoppingCNPJ);
                    }
                    if(neededSetups.find(element => element === 'user')) {
                        this.user = await Services.getUser();
                    }
                    if(neededSetups.find(element => element === 'restaurantMenu')) {
                        let restaurantCNPJ = this.$route.params.cnpj;
                        this.restaurantMenu = await Services.getRestaurantMenu(restaurantCNPJ)
                    }
                    if(neededSetups.find(element => element === 'restaurant')) {
                        let restaurantCNPJ = this.$route.params.cnpj;
                        this.restaurant = await Services.getRestaurant(restaurantCNPJ);
                    }
                    if(neededSetups.find(element => element === 'categories')) {
                        let restaurantCNPJ = this.$route.params.cnpj;
                        this.categories = await Services.getRestaurantCategories(restaurantCNPJ)
                    }
                    if(neededSetups.find(element => element === 'item')) {
                        let itemId = this.$route.params.id;
                        this.foodItem = await Services.getItem(itemId)
                    }
                }
            }
        }
    })
}

export default HocComponent