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
                    foodItem: this.foodItem,
                    cards: this.cards,
                    selectedCard: this.selectedCard
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
                foodItem: null,
                cards: null,
                selectedCard: null
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
                        let restaurantCNPJ = routeName === 'order-bag' ? localStorage.restaurantCNPJ : this.$route.params.cnpj;
                        this.restaurant = await Services.getRestaurant(restaurantCNPJ);
                    }
                    if(neededSetups.find(element => element === 'categories')) {
                        let restaurantCNPJ = this.$route.params.cnpj;
                        this.categories = await Services.getRestaurantCategories(restaurantCNPJ)
                    }
                    if(neededSetups.find(element => element === 'foodItem')) {
                        let itemId = this.$route.params.id;
                        this.foodItem = await Services.getItem(itemId)
                    }
                    if(neededSetups.find(element => element === 'cards')) {
                        this.cards = await Services.getCards()
                    }
                    if(neededSetups.find(element => element === 'selectedCard')) {
                        let id = this.$route.params.id
                        this.selectedCard = await Services.getSelectedCard(id)
                    }
                    if(neededSetups.find(element => element === 'usingCard')) {
                        let id = localStorage.getItem('card-id')
                        this.selectedCard = await Services.getSelectedCard(id)
                    }
                }
            }
        }
    })
}

export default HocComponent