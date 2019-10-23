<template>
    <div class="shopping">
        <categories-nav v-if="restaurants.length > 0" :navStatus="navStatus" :handleNav="handleNav" :restaurants="restaurants" />
        <v-btn
            @click="handleNav"
            min-width="250px"
            class="qrc-btn white mx-auto font-weigth-bold my-2">
            <span class="mr-2">Categorias</span>
        </v-btn>
        <shopping-card v-if="shopping.name" :title="shopping.name"  image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' :city="shopping.city" :state="shopping.state" :neighborhood="shopping.neighborhood"/>
        <div v-if="restaurants" class="shopping__restaurants">
            <restaurant-card v-for="restaurant in restaurants" :key="restaurant.cnpj" :image='restaurant.image' :title="restaurant.name" :description="restaurant.description" :orderTime="restaurant.orderTime"/>
        </div>
    </div>
</template>

<script>
import ShoppingCard from '../../components/Cards/ShoppingCard'
import RestaurantCard from '../../components/Cards/RestaurantCard'
import CategoriesNav from './CategoriesNav'
import Services from '../../services/ServicesFacade'

//const placeholderImage = require('../../assets/images/restaurant_placeholder.jpg')

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
        this.setUp(shoppingCNPJ)
    },
    data() {
        return {
            shopping: {},
            restaurants: [],
            navStatus: "closed"
        }
    },
    methods: {
        handleNav: function () {
            if(this.navStatus === "open") this.navStatus = "closed"
            else if(this.navStatus === "closed") this.navStatus = "open"
        },
        setUp: async function (shoppingCNPJ) {
            this.shopping = await Services.getShopping(shoppingCNPJ)
            this.restaurants = await Services.getAllRestaurants()
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