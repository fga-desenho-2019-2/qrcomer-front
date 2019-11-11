<template>
  <div>
    <div>
      <v-content>
        <template v-if="navStatus === 'closed'">
          <Navbar @clickFilter="handleNav" />
        </template>
        <div class="shopping">
          <component
            v-bind:is="component3"
            v-if="restaurants && shoppingCategories"
            :navStatus="navStatus"
            :handleNav="handleNav"
            :restaurants="restaurants"
            :shoppingCategories="shoppingCategories"
            @categoryClick="handleClick($event)"
          />
          <component
            v-bind:is="component1"
            v-if="shopping"
            :title="shopping.name"
            image="https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg"
            :city="shopping.city"
            :state="shopping.state"
            :neighborhood="shopping.neighborhood"
          />
          <div v-if="restaurants" class="shopping__restaurants">
            <component
              v-bind:is="component2"
              v-for="restaurant in restaurants"
              :key="restaurant.cnpj"
              :image="restaurant.image"
              :title="restaurant.name"
              :description="restaurant.description"
              :orderTime="restaurant.orderTime"
              @restaurantClick="restaurantClick($event)"
            />
          </div>
        </div>
      </v-content>
    </div>
  </div>
</template>

<script>
import ShoppingCard from "../../components/Cards/ShoppingCard";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import CategoriesNav from "./CategoriesNav";
import Navbar from "../../components/Navbar";
import { routeTo } from "../../services/context";

//const placeholderImage = require('../../assets/images/restaurant_placeholder.jpg')

export default {
  name: "ShoppingPage",
  components: {
    ShoppingCard,
    RestaurantCard,
    CategoriesNav,
    Navbar
  },
  computed: {
    component1: function() {
      return "ShoppingCard";
    },
    component2: function() {
      return "RestaurantCard";
    },
    component3: function() {
      return "CategoriesNav";
    }
  },
  props: {
    shopping: {
      required: true
    },
    restaurants: {
      required: true
    },
    shoppingCategories: {
      required: true
    }
  },

  data() {
    return {
      navStatus: "closed"
    };
  },
  methods: {
    routeTo,
    handleNav: function() {
      if (this.navStatus === "open") this.navStatus = "closed";
      else if (this.navStatus === "closed") this.navStatus = "open";
    },
    handleClick: function(category) {
      this.$router.replace({ path: `/categoria/${category}` });
    },
    restaurantClick: function(restaurant) {
      this.$router.replace({ path: `/restaurante/${restaurant}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.shopping {
  background: #efefee;
  &__restaurants {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
}
</style>