<template>
  <div class="qrc-bag-item">
    <p class="qrc-bag-item__text mb-0">{{ name }}</p>
    <div class="qrc-bag-item__image">
      <img
        @click="handleQtd('minus')"
        src="@/assets/images/minus.svg"
        class="qrc-bag-item__image__content"
      />
      <span>{{ qtd }}</span>
      <img
        @click="handleQtd('plus')"
        src="@/assets/images/plus.svg"
        class="qrc-bag-item__image__content"
      />
      <img
        @click="handleDelete()"
        src="@/assets/images/delete.svg"
      />
    </div>
  </div>
</template>

<script>
import { handleQtd } from "../../services/context";
export default {
  data() {
    return {
      qtd: this.ammount
    };
  },
  props: {
    name: {
      required: true,
      type: String
    },
    ammount: {
      default: 1,
      type: Number
    }
  },
  methods: {
    handleQtd,
    handleDelete: function() {
      this.$emit('deleteItem')
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
    width: 30%;
    max-width: 100px;
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