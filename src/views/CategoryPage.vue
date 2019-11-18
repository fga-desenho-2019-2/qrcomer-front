<template>
  <div>
    <v-content>
      <Navbar />
      <div class="categorie">
        <component
          v-bind:is="component"
          v-for="restaurant in restaurants"
          :key="restaurant.cnpj"
          :name="restaurant.name"
          :description="restaurant.description"
          :wait_time="restaurant.wait_time"
          :image="restaurant.image"
          @restaurantClick="restaurantClick($event)"
        />
      </div>
    </v-content>
  </div>
</template>

<script>
import RestaurantCardExpand from "../components/Cards/RestaurantCardExpand";
import Navbar from "../components/Navbar";

//const placeholderImage = require('../assets/images/restaurant_placeholder.jpg')

export default {
  name: "CategoriePage",
  components: {
    RestaurantCardExpand,
    Navbar
  },
  props: {
    restaurants: {
      required: true
    }
  },
  data() {
    return {
      categorie: this.$route.params.name
    };
  },
  computed: {
    component: function() {
      return "RestaurantCardExpand";
    }
  },
  methods: {
    restaurantClick: function(restaurant) {
      this.$router.replace({ path: `/restaurante/${restaurant}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.categorie {
  width: 100vw;
}
</style>