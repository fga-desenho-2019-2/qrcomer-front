<template>
  <div
    class="orderModal">
    <div class="orderHeader">
        <v-btn 
        icon 
        @click="closeOrderModal">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </div>
    <div class="password" v-if="password">
        <p>Sua senha é</p>
        <h2>{{password}}</h2>
    </div>
    <div class="restaurant">
        <h3>{{restaurant}}</h3>
        <p>Você estava no <b>{{shopping}}</b> quando fez esse pedido</p>
        <p><a href="#">Ver o cardápio desse restaurante</a></p>
    </div>
    <div class="itens">
        <div class="itensValue">
            <p v-for="(item, index) in itens" :key="index">{{item}}</p>
        </div>
        <p class="itens__totalValue">{{value}}</p>
    </div>
    

  </div>
</template>

<script>
export default {
    props: {
        password: {
            type: String
        },
        restaurant: {
            type: String,
            required: true
        },
        itens: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        shopping: {
            type: String,
            required: true
        },
        
    },
    methods: {
        closeOrderModal() {
            this.$emit('closeOrderModal');
        }
    }
}
</script>

<style lang="scss">
.orderModal {
    padding: 15px;
    border-radius: 20px 0;
}
</style>