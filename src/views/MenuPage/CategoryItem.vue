<template>
  <v-tabs class="qrc-style" background-color="#EFEFEF" color="#e18855" :centered="true" v-model="active_tab">
    <v-tab v-for="category in categories"
            :key="category.id"
            @click.prevent="handleClick(category.name)"
            >{{category.name}}</v-tab>
    </v-tabs>
</template>


<script>

export default {
  name: "Category",
  data: () => ({
    active_tab: 0
  }),
  methods:{
      handleClick(name){
          this.$emit('scrollCategory', name)
      },
  },
  props: {
    categories: {
      required: true
    },
  }
};
</script>

<style lang="scss">
.qrc-style{
    font-family: 'Lexend Deca', 'Roboto', sans-serif;
}

.v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev{
    display: none;
}
</style>