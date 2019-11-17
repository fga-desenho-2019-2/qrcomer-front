<template>
  <div @click="restaurantClick()" class="restaurant">
    <div class="restaurant__content">
      <div class="restaurant__content__img">
        <img class="restaurant__content__img__content" :src="image" />
      </div>
      <div class="restaurant__content__text">
        <p class="restaurant__content__text__title">{{ title }}</p>
        <p class="restaurant__content__text__description">{{ description }}</p>
        <p class="restaurant__content__text__orderTime">{{ orderTime }}</p>
      </div>
      <div class="restaurant__content__arrow">
        <img src="../../assets/images/arrow-right.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    orderTime: {
      type: String,
      required: true
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
.restaurant {
  width: 100vw;
  max-width: 1000px;
  height: 100px;
  padding: 10px;

  &__content {
    height: 100%;
    border-radius: 0px 20px;
    contain: content;
    background-color: $c-white;
    box-shadow: 0 4px 10px $c-shadow;

    display: grid;
    grid-template-columns: 80px 1fr 40px;

    &__img {
      height: 100%;
      position: relative;
      contain: content;

      &__content {
        position: absolute;
        top: 40px;
        left: 40px;
        transform: translate(-50%, -50%);
        height: 80px;
      }
    }

    &__text {
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding: 5px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__description {
        font-size: 12px;
        color: $c-gray50;
      }

      &__orderTime {
        font-size: 12px;
        color: $c-gray50;
      }
    }

    &__arrow {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
    }

    &:active {
      opacity: 0.6;
    }
  }
}
</style>