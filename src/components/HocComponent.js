import Vue from 'vue';
import Services from '../services/ServicesFacade'

const HocComponent = (component, neededSetups) => {
    return Vue.component("HocComponent", {
        render(createElement) {
            return createElement(component, {
                props: {
                    shopping: this.shopping,
                    restaurants: this.restaurants,
                    shoppingCategories: this.shoppingCategories
                }
            })
        },
        data() {
            return {
                shopping: null,
                restaurants: null,
                shoppingCategories: null
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
                }
            }
        }
    })
}

export default HocComponent