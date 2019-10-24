<template>
    <div class="categorie">
        <restaurant-card v-for="restaurant in restaurants" :key="restaurant.cnpj" :title="restaurant.name" :description="restaurant.description" :orderTime="restaurant.orderTime" :image="restaurant.image" />
    </div>
</template>

<script>
import RestaurantCardExpand from '../components/Cards/RestaurantCardExpand'
import Services from '../services/ServicesFacade'

//const placeholderImage = require('../assets/images/restaurant_placeholder.jpg')

export default {
    name: "CategoriePage",
    components: {
        'restaurant-card': RestaurantCardExpand
    },
    props: {
        restaurants: {
            required: true
        }
    },
    data () {
        return {
            categorie: this.$route.params.name
        }
    }
}
</script>

<style lang="scss" scoped>

.categorie {
    width: 100vw;
}

</style>