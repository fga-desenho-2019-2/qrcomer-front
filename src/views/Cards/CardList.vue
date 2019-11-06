<template>
  <div class="cards-list">
    <div class="cards-list__explanation">
      <p class="mb-0">
        Escolha uma forma de pagamento 
      </p>
    </div>
    <div>
      <CardItem v-for="(card, index) in cards" :key="card.number+index" :card="card" @cardClick="redirectPage($event)" />
    </div>
  </div>
</template>

<script>
import CardItem from './CardItem'

export default {
  components: {
    CardItem
  },
  props: {
    cards: {
        required: true
    }
  },
  created() {
      console.log(this.cards)
  },
  methods: {
    redirectPage: function (card) {
      console.log(card)
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss">
.cards-list {

  padding: 10px;

  &__explanation {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid $c-gray40;
    color: $c-gray60;
  }
}

</style>