<template>
  <div>
    <div class="qrc-organize-checkbox" v-for="card in food" :key="card.id">
      <div class="qrc-organize-descriptionbox">
        <v-checkbox v-model="checkbox1" :value="card.name" color="#e18855" />
        <div>
            <h6 class="qrc-sidedish-title">{{card.name}}</h6>
            <p class="qrc-sidedish-description">{{card.description}}</p>
            <p class="qrc-sidedish-value">R$ {{card.value}}</p>
        </div>
      </div>
      <div class="qrc-button-calc">
        <v-btn class="mx-2" fab dark x-small color="#e18855">
            <v-icon dark>mdi-minus</v-icon>
        </v-btn>
        <h6 class="qrc-button-calc__value">4</h6>
        <v-btn class="mx-2" fab dark x-small color="#e18855">
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
            checkbox1: [{}]
        }
    },
    props: {
        food: {
        required: true,
        type: Array
        }
    },
    mounted(){
        window.onclick = this.callConsole
    },
    methods: {
        callConsole(){
            console.log(this.checkbox1)
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