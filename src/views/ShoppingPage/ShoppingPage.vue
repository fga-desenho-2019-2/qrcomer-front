<template>
    <div class="shopping">
        <categories-nav :navStatus="navStatus" :handleNav="handleNav" :restaurants="restaurants" />
        <v-btn
            @click="handleNav"
            min-width="250px"
            class="qrc-btn white mx-auto font-weigth-bold my-2">
            <span class="mr-2">Categorias</span>
        </v-btn>
        <shopping-card v-if="shopping" type="shopping" :title="shopping.name"  image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' :city="shopping.city" :state="shopping.state" :neighborhood="shopping.neighborhood"/>
        <div v-if="restaurants" class="shopping__restaurants">
            <restaurant-card v-for="restaurant in restaurants" :key="restaurant.cnpj" :image='restaurant.image' :title="restaurant.name" :description="restaurant.description" :orderTime="restaurant.orderTime"/>
        </div>
    </div>
</template>

<script>
import ShoppingCard from '../../components/Cards/ShoppingCard'
import RestaurantCard from '../../components/Cards/RestaurantCard'
import CategoriesNav from './CategoriesNav'
import {getAllRestaurants} from '../../services/restaurantService'
//import {getRestaurant} from '../../services/restaurantService'
import {getShopping} from '../../services/shoppingService'

const placeholderImage = require('../../assets/images/restaurant_placeholder.jpg')

export default {
    name: "ShoppingPage",
    components: {
        'shopping-card': ShoppingCard,
        'restaurant-card': RestaurantCard,
        'categories-nav': CategoriesNav
    },
    created () {
        const shoppingCNPJ = this.$route.params.cnpj;
        localStorage.setItem('shoppingCNPJ', shoppingCNPJ )
        this.getShopping(shoppingCNPJ); 
        this.getRestaurants(shoppingCNPJ);
    },
    data() {
        return {
            shopping: {},
            restaurants: {},
            navStatus: "closed"
        }
    },
    methods: {
        handleNav: function () {
            if(this.navStatus === "open") this.navStatus = "closed"
            else if(this.navStatus === "closed") this.navStatus = "open"
        },
        getShopping: function (shoppingCNPJ) {
            this.shopping = {}

            getShopping(shoppingCNPJ)
                .then(shopping => {
                    this.shopping = shopping.data
                })
        },
        getRestaurants: function (shoppingCNPJ) {
            this.restaurants = []

            getAllRestaurants()
                .then((restaurants) => {
                    let all_restaurants = restaurants.data

                    this.restaurants = all_restaurants.filter(item => {
                        return item.shopping == shoppingCNPJ
                    })

                    this.restaurants = this.restaurants.map(item => {
                        if (!item.image) {
                            item.image = placeholderImage
                        }

                        return item
                    })
                })
                .catch(err => {
                    this.restaurants = []
                    return err
                }) 
        }
    },
}
</script>

<style lang="scss" scoped>

.shopping {
    
    &__restaurants {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
    }
}

</style>