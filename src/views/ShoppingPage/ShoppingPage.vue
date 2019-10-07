<template>
    <div class="shopping">
        <a href='/restaurants/categories'>Categorias</a>
        <ShoppingCard type="shopping" :title="shopping.name"  image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' :city="shopping.city" :state="shopping.state" :neighborhood="shopping.neighborhood"/>
        <div class="shopping__restaurants">
            <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.cnpj" :image='restaurant.image' :title="restaurant.name" :description="restaurant.description" />
        </div>
    </div>
</template>

<script>
import ShoppingCard from '../../components/Cards/ShoppingCard'
import RestaurantCard from '../../components/Cards/RestaurantCard'


export default {
    components: {
        'ShoppingCard': ShoppingCard,
        'RestaurantCard': RestaurantCard
    },
    data() {
        return {
            shopping: {
                type: Object
            },
            restaurants: {
                type: Array
            }
        }
    },
    created () {
        this.getShopping() ; 
        this.getRestaurants();
    },
    methods: {
        getShopping: function () {
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
        getRestaurants: function () {
            this.restaurants = [
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345678",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345677",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345676",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345675",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers"
                },
                {
                    "image": "https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg",
                    "cnpj": "12345674",
                    "name": "Mcdonalds",
                    "description": "$$ - Burguers"
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
        justify-content: center;; 
    }
}

</style>