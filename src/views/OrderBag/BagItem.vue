<template>
  <div class="qrc-bag-item">
    <p class="qrc-bag-item__text mb-0">{{ name }}</p>
    <div class="qrc-bag-item__image">
      <img @click="handleQtd" src="@/assets/images/minus.svg" class="qrc-bag-item__image__content" />
      <span>{{ qtd }}</span>
      <img @click="handleQtd" src="@/assets/images/plus.svg" class="qrc-bag-item__image__content" />
    </div>
  </div>
</template>

<script>
import HandleQtdModel from "../../utils/CommandPattern/HandleQtdModel.vue";

export default {
  data() {
    return HandleQtdModel;
  },
  methods: {
    handleQtd() {
      this.$context.events.notify("handle.qtd");
    }
  }
};
</script>

<style lang="scss">
.qrc-bag-item {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  // margin-bottom: 5px;

  &__text {
    width: 80%;
    float: left;
    color: #797979;
  }

  &__image {
    width: 20%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__content:active {
      opacity: 0.6;
    }
  }
}
</style>