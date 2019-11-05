<template>
  <div class="categorie">
    <component
      v-bind:is="component"
      v-for="restaurant in restaurants"
      :key="restaurant.cnpj"
      :title="restaurant.name"
      :description="restaurant.description"
      :orderTime="restaurant.orderTime"
      :image="restaurant.image"
    />
  </div>
</template>

<script>
import RestaurantCardExpand from "../components/Cards/RestaurantCardExpand";

//const placeholderImage = require('../assets/images/restaurant_placeholder.jpg')

export default {
  name: "CategoriePage",
  components: {
    RestaurantCardExpand
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
  }
};
</script>

<style lang="scss" scoped>
.categorie {
  width: 100vw;
}
</style>