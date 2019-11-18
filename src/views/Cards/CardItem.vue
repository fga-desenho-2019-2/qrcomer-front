<template>
  <div class="card-item" @click="handleClick" >
    <div class="card-item__text">
        <p class="mb-0" >Cartão de crédito</p>
        <p class="mb-0" id="card-number" >{{masked}}</p>
    </div>
    <img class="card-item__image" src="../../assets/images/credit_card.svg"/>
  </div>
</template>

<script>
export default {
    props: {
        card: {
            required: true
        }
    },
    methods: {
        handleClick: function () {
            this.$emit('cardClick', this.card)
        }
    },
    computed: {
        masked: function() {
            return this.card.substring(0, 4) + "********" + this.card.substring(12);
        }
    }
};
</script>

<style lang="scss">

.card-item {
    height: 80px;
    border-bottom: 1px solid $c-gray40;
    display: grid;
    grid-template-columns: 1fr 50px;
    align-items: center;

    &:active {
        opacity: 0.6;
    }
}

#card-number {
    color: $c-gray50;
}
</style>