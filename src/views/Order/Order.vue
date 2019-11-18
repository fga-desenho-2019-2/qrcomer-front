<template >
    <v-content id="order" >
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
                v-if="this.orders && this.orders[0].restaurant"
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
                </v-tab-item>
            </v-tabs-items>
        </div>
        
    </v-content>
</template>

<script>
import OrderItem from '@/components/Cards/OrderItem'
import services from '../../services/ServicesFacade'

export default {
    components: {
        OrderItem
    },
    data() {
        return {
            orderTab: null,
            orders: null
        }
    },
    async beforeCreate() {
        this.orders = await services.getOrders()
        Promise.all(this.orders.forEach(async order => {
            order.restaurant = await services.getRestaurant(0)
        }))
        console.log(this.orders)
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

