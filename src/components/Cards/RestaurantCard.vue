<template>
  <div>
    <div @click="restaurantClick()" class="card-restaurant">
      <div class="card-restaurant__image">
        <img class="card-restaurant__image__content" :src="image" />
      </div>
      <div class="card-restaurant__content">
        <p class="card-restaurant__content__name">{{ name }}</p>
        <p class="card-restaurant__content__desc">{{ description }}</p>
        <p class="card-restaurant__content__order-time">{{ wait_time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      default: "No description provided"
    },
    wait_time: {
      type: String,
      required: true,
      default: "---"
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    restaurantClick: function(restaurant) {
      this.$emit("restaurantClick", restaurant);
    }
  }
};
</script>

<style lang="scss" scoped>
$name-size: 14px;
$desc-size: 12px;

.card-restaurant {
  width: 45vw;
  max-width: 200px;
  height: 45vw;
  max-height: 200px;
  background-color: #ffffff;
  border-radius: 0 15px;
  contain: content;
  box-shadow: 0 4px 10px $c-shadow;
  margin: 2vw;
  align-self: flex-start;

  &__image {
    height: 45%;
    width: 100%;
    contain: content;

    &__content {
      max-width: 100%;
    }
  }

  &__content {
    height: 55%;
    width: 100%;
    contain: content;
    box-shadow: 0 -1px 15px 1px $c-gray80;
    padding: 5%;

    &__name {
      font-size: $name-size;
      contain: content;
      margin-bottom: 5px;
    }

    &__desc {
      font-size: $desc-size;
      color: $c-gray70;
      margin-bottom: 5px;
    }

    &__order-time {
      font-size: $desc-size;
      color: $c-gray70;
      text-align: end;
    }
  }

  &:active {
    opacity: 0.6;
  }
}
</style>
