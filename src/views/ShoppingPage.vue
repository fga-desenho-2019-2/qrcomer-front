<template>
    <div class="shopping">
        <categories-nav :navStatus="navStatus"/>
        <v-btn
            @click="handleNav"
            min-width="250px"
            class="qrc-btn white mx-auto font-weigth-bold my-2">
            <span class="mr-2">Categorias</span>
        </v-btn>
        <shopping-card type="shopping" :title="shopping.name"  image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' :city="shopping.city" :state="shopping.state" :neighborhood="shopping.neighborhood"/>
        <div class="shopping__restaurants">
            <restaurant-card v-for="restaurant in restaurants" :key="restaurant.cnpj" :image='restaurant.image' :title="restaurant.name" :description="restaurant.description" :orderTime="restaurant.orderTime"/>
        </div>
    </div>
</template>

<script>
import ShoppingCard from '../components/Cards/ShoppingCard'
import RestaurantCard from '../components/Cards/RestaurantCard'
import CategoriesNav from './CategoriesNav'

export default {
    name: "ShoppingPage",
    components: {
        'shopping-card': ShoppingCard,
        'restaurant-card': RestaurantCard,
        'categories-nav': CategoriesNav
    },
    created () {
        const shoppingCNPJ = this.$route.params.cnpj;
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
            this.shopping = {
                "cnpj": 12345678,
                "name": "Shop Brasília",
                "city": "Brasília",
                "state": "DF",
                "country": "brasil", 
                "neighborhood": "Asa suk",
                "cep": "71605-300",
                "number": 2,
                "phone": 61982712626
            }
        },
        getRestaurants: function (shoppingCNPJ) {
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
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345676",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345675",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345674",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers",
                    "orderTime": "15-20 min"
                },
            ]
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