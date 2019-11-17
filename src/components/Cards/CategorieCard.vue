<template>
  <div @click="handleClick()" class="categorie-card">
    <img class="categorie-card__image" :src="icon" />
    <div class="categorie-card__card">
      <div class="categorie-card__card__text">
        <p class="categorie-card__card__text__title">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCard",
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick: function() {
      this.$emit("categoryClick", this.title);
    }
  }
};
</script>

<style lang="scss" scoped>
.categorie-card {
  width: 50%;
  max-width: 200px;
  height: 60vw;
  max-height: 240px;
  contain: content;
  display: flex;
  padding: 10px;

  &__image {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 70%;
    z-index: 1;
  }

  &__card {
    width: 100%;
    height: 80%;
    background-color: #ffffff;
    bottom: 0;
    border-radius: 0px 0 0 15px;
    box-shadow: 0 4px 10px $c-shadow;
    align-self: flex-end;
    display: flex;

    &__text {
      height: 35%;
      width: 100%;
      align-self: flex-end;
      margin-right: 1em;
      margin-left: 1em;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;

      &__title {
        font-size: 18px;
        padding-bottom: 2%;
        contain: content;
        text-align: center;
      }
    }
  }

  &:active {
    opacity: 0.6;
  }
}
</style>
