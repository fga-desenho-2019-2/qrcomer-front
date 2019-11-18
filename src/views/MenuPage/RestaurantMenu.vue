<template>
<v-content>
  <Navbar />
  <v-content class="d-flex flex-column pt-0" @scroll="handleScroll(isIntersecting)">
    <div v-if="restaurant">
      <component
        v-bind:is="component3"
        :name="restaurant.name"
        :nota="restaurant.note"
        :type="restaurant.description"
        :time="restaurant.wait_time"
        :img="restaurant.image"
      />
    </div>
    <div v-if="categories" class="qrc-tabs-sticky">
      <component
        v-bind:is="component2"
        @scrollCategory="scrollToPlace($event)"
        :categories="categories"
        :categoryTab="isIntersecting"
      />
    </div>
    <div v-if="categories && restaurantMenu">
      <div
        class="category-area"
        v-for="(category, index) in categories"
        :key="category.id"
        :id="category.name"
      >
        <h5 :id="category.id" class="category-title">{{category.name}}</h5>
        <div class="menu-itens">
          <component
            v-bind:is="component1"
            v-for="(item) in categoriesData[index]"
            :key="item.id"
            :class="`item-${item.id}`"
            :id="item.id"
            :img="item.img"
            :name="item.name"
            :details="item.details"
            :value="item.value"
            @itemClick="pageHandler($event)"
          />
        </div>
      </div>
    </div>
  </v-content>
  </v-content>
</template>

<script>
import ItemCard from "../../components/Cards/ItemCard";
import MenuBanner from "./MenuBanner.vue";
import CategoryNav from "./CategoryNav.vue";
import Navbar from "../../components/Navbar";

export default {
  props: {
    restaurantMenu: {
      required: true
    },
    restaurant: {
      required: true
    },
    categories: {
      required: true
    }
  },
  data() {
    return {
      isIntersecting: false,
      categoriesData: []
    };
  },
  components: {
    ItemCard,
    CategoryNav,
    MenuBanner,
    Navbar
  },
  watch: {
    categories: function() {
      this.arrangeItems();
    }
  },
  computed: {
    component1: function() {
      return "ItemCard";
    },
    component2: function() {
      return "CategoryNav";
    },
    component3: function() {
      return "MenuBanner";
    }
  },
  methods: {
    arrangeItems: async function() {
      this.categories.forEach(category => {
        let categoryList = this.filterItens(category.name);
        this.categoriesData.push(categoryList);
      });
    },
    pageHandler: function(itemId) {
      this.$router.replace({ path: `/item/${itemId}` });
    },
    scrollToPlace: function(id) {
      let elmnt = document.getElementById(id);
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
    filterItens: function(category) {
      let filteredMenu = this.restaurantMenu.filter(item => {
        return item.category == category;
      });
      return filteredMenu;
    }
  }
};
</script>

<style lang="scss">
.v-content__wrap {
  display: flex;
  flex-direction: column;
}
.menu-itens {
  background: #efefef;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 4vw;
  justify-content: flex-start;
}
.category-title {
  margin-bottom: 0 !important;
  margin-left: 4vw;
}
.qrc-tabs-sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}
.category-area {
  background-color: #efefef;
}
</style>
