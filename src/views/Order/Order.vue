<template>
    <v-content id="order">
        <div>
            <v-tabs 
                v-model="orderTab" 
                class="orderTab"
                grow>
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#anteriores">
                    Anteriores
                </v-tab>

                <v-tab href="#andamento">
                    Em andamento
                </v-tab>
            </v-tabs>

            <v-tabs-items 
                v-model="orderTab"
                class="orderContent">
                <v-tab-item
                    value="anteriores">
                    <OrderItem 
                        restaurant=""
                        itens=""
                        avaliacao=""/>
                    <OrderItem 
                        restaurant=""
                        itens=""
                        avaliacao=""/>
                </v-tab-item>
                    
                <v-tab-item
                    value="andamento">
                    <OrderItem 
                        restaurant=""
                        status="andamento"
                        itens=""
                        avaliacao=""/>
                </v-tab-item>
            </v-tabs-items>
        </div>
        
    </v-content>
</template>

<script>
import OrderItem from './OrderItem'

export default {
    components: {
        OrderItem
    },
    data() {
        return {
            orderTab: null 
        }
    }
}
</script>

<style lang="scss">
#order {
    .orderTab {
        .v-tabs-bar {
            background: transparent !important;
        }
    }
    .orderContent {
        background: transparent !important;
        padding: 0 10px;
    }
}
</style>

