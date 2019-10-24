<template>
  <div>
    <div class="qrc-organize-checkbox">
      <div class="qrc-organize-descriptionbox">
        <v-checkbox v-model="checkbox" color="#e18855" />
        <div>
            <h6 class="qrc-sidedish-title">{{food.name}}</h6>
            <p class="qrc-sidedish-description">{{food.description}}</p>
            <p class="qrc-sidedish-value">R$ {{food.value}}</p>
        </div>
      </div>
      <div class="qrc-button-calc">
        <v-btn class="mx-2" @click="handleQtd('minus')" fab dark x-small color="#e18855">
            <v-icon dark>mdi-minus</v-icon>
        </v-btn>
        <h6 class="qrc-button-calc__value">{{qtd}}</h6>
        <v-btn class="mx-2" @click="handleQtd('plus')" fab dark x-small color="#e18855">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    data () {
        return {
            checkbox: this.food.selected,
            qtd: this.food.qtd
        }
    },
    props: {
        food: {
            required: true,
            type: Object
        }
    },
    watch: {
        checkbox: function () {
            this.$emit('changeSelect', this.checkbox)
        }
    },
    methods: {
        handleQtd: function(operation) {
            if(operation === "plus") this.qtd++;
            else if(operation === "minus" && this.qtd > 0) this.qtd--;

            this.$emit('changeQtd', this.qtd);
        },
        handleSelect: function() {
            this.checkbox = !this.checkbox;
        }
    }
};
</script>

<style lang="scss">

    .qrc-sidedish-title {
        margin-bottom: 0 !important;
    }
    .qrc-sidedish-description {
        color: #797979;
        margin-bottom: 0 !important;
        font-size: 12px;
    }
    .qrc-sidedish-value {
        color: #e18855;
        font-size: 12px;
        margin-bottom: 0 !important;
    }
    .qrc-organize-descriptionbox{
        display: flex;
        flex-direction: row;
    }
    .qrc-organize-checkbox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #c7c7c7;
        margin: 0 4vw;
    }
    .qrc-elimine{
        margin: 0 !important;
    }
    .qrc-button-calc{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        &__value{
            margin-bottom: 0 !important;
        }
    }
</style>