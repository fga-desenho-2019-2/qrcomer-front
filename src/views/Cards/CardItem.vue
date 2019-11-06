<template>
  <div class="card-item">
    <div class="card-item__text">
        <p class="mb-0" >Cartão de crédito</p>
        <p class="mb-0" id="card-number" >{{card.number}}</p>
    </div>
    <img class="card-item__image" src="../../assets/images/credit_card.svg"/>
  </div>
</template>

<script>
export default {
    props: {
        card: {
            required: true,
            type: Object
        }
    }
};
</script>

<style lang="scss">

.card-item {
    height: 100px;
    border-bottom: 1px solid $c-gray40;
    display: grid;
    grid-template-columns: 1fr 50px;
    align-items: center;
}

#card-number {
    color: $c-gray50;
}
</style>