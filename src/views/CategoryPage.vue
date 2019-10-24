<template>
    <div class="categorie">
        <restaurant-card v-for="restaurant in restaurants" :key="restaurant.cnpj" :title="restaurant.name" :description="restaurant.description" :orderTime="restaurant.orderTime" :image="restaurant.image" />
    </div>
</template>

<script>
import RestaurantCardExpand from '../components/Cards/RestaurantCardExpand'
import Services from '../services/ServicesFacade'
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
        this.setUp()
    },
    methods: {
        setUp: async function () {
            this.restaurants = await Services.getRestaurantsByCategory()
        }
    }
}
</script>

<style lang="scss" scoped>

.categorie {
    width: 100vw;
}

</style>