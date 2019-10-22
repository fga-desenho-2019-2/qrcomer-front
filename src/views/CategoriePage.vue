<template>
    <div class="categorie">
        <restaurant-card v-for="restaurant in restaurants" :key="restaurant.cnpj" :title="restaurant.name" :description="restaurant.description" :orderTime="restaurant.orderTime" :image="restaurant.image" />
    </div>
</template>

<script>
import RestaurantCardExpand from '../components/Cards/RestaurantCardExpand'
//import { getAllRestaurants } from '../services/restaurantService'

//const placeholderImage = require('../assets/images/restaurant_placeholder.jpg')

export default {
    name: "CategoriePage",
    components: {
        'restaurant-card': RestaurantCardExpand
    },
    data () {
        return {
            categorie: this.$route.params.name,
            restaurants: []
        }
    },
    created () {
        //const shoppingCNPJ = localStorage.getItem('shoppingCNPJ');
        this.getRestaurants();
    },
    methods: {
        getRestaurants: function () {
            this.restaurants = [
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345678",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345677",
                    "name": "Burguer King",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345676",
                    "name": "Girrafas",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345675",
                    "name": "Geleia",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345674",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                }
            ]

            // getAllRestaurants()
            //     .then(restaurants => {
            //         const all_restaurants = restaurants.data
                    
            //         if(this.restaurants) {
            //             this.restaurants = all_restaurants.filter(item => {
            //                 return item.shopping == shoppingCNPJ
            //             })
    
            //             this.restaurants = this.restaurants.map(item => {
            //                 if (!item.image) {
            //                     item.image = placeholderImage
            //                 }
    
            //                 return item
            //             })
            //         }
            //     })
        }
    }
}
</script>

<style lang="scss" scoped>

.categorie {
    width: 100vw;
}

</style>