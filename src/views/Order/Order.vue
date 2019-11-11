<template>
    <v-content id="order">
        <div>
            <v-tabs 
                v-model="orderTab" 
                class="orderTab"
                grow>
                <v-tabs-slider class="main-color"></v-tabs-slider>
                <v-tab href="#anteriores" class="main-color">
                    Anteriores
                </v-tab>

                <v-tab href="#andamento" class="main-color">
                    Em andamento
                </v-tab>
            </v-tabs>

            <v-tabs-items 
                v-model="orderTab"
                class="orderContent">
                <v-tab-item
                    value="anteriores">
                    <OrderItem 
                        status="INI"
                        restaurant="Mc donalds"
                        :itens="[32,65,7]"
                        :avaliacao="3"/>
                    <OrderItem 
                        status="INI"
                        restaurant="Mc donalds"
                        :itens="[32,65,7]"
                        :avaliacao="3"/>
                </v-tab-item>
                    
                <v-tab-item
                    value="andamento">
                    <OrderItem 
                        status="AND"
                        restaurant="Mc donalds"
                        :itens="[32,65,7]"
                        :avaliacao="3"
                    />
                </v-tab-item>
            </v-tabs-items>
        </div>
        
    </v-content>
</template>

<script>
import OrderItem from '@/components/Cards/OrderItem'

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

