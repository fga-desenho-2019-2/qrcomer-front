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
                        v-for="(order, index) in orders"
                        status="INI"
                        :key="index"
                        :id="`id${index}`"
                        :restaurant="order.restaurant"
                        :itens="order.items"
                        :avaliacao="order.note"
                        :shopping="order.shopping"
                        :value="order.value"
                        :date="order.date"
                        @changeRating="changeRating($event)"
                    />
                </v-tab-item>
                    
                <v-tab-item
                    value="andamento">
                    <OrderItem 
                        status="AND"
                        id="id3"
                        password="3321"
                        restaurant="Mc donalds"
                        :itens="['Sunday', 'Big Mac']"
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
            orderTab: null,
            orders: [
                {
                "cpf_user":"05333208107",
                "cnpj_restaurant":"33345811000183",
                "value":30.59,
                "date": "Seg, 22 de agosto de 2019",
                "restaurant": {
                    name: "Mc Donalds",
                    cnpj: 12345678
                },
                "shopping": "ParkShopping",
                "note": 4.5,
                "items":[
                    {
                    "name":"Combo Big Mac",
                    "value":22.19,
                    "observation":"sem pão",
                    "quantity":1
                    },
                    {
                    "name":"Batata",
                    "value":3.2,
                    "observation":"",
                    "quantity":1
                    },
                    {
                    "name":"Refrigerante",
                    "value":5.2,
                    "observation":"",
                    "quantity":1
                    }]
                }
            ]
        }
    },
    methods: {
        changeRating() {
            //put order
            //update component
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

    .v-dialog {
        border-radius: 0 30px ;
    }
}
</style>

