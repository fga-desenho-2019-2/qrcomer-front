<template >
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
                v-if="canRender"
                v-model="orderTab"
                class="orderContent">
                <v-tab-item
                    value="anteriores">

                    <OrderItem 
                        v-for="(order, index) in before"
                        status="INI"
                        :key="index"
                        :id="`id${index}`"
                        :restaurant="order.restaurant"
                        :itens="order.items"
                        :avaliacao="order.note"
                        :value="order.value"
                        :date="order.date"
                        @changeRating="changeRating($event)"
                    />
                </v-tab-item>
                    
                <v-tab-item
                    value="andamento">

                    <OrderItem 
                        v-for="(order, index) in onGoing"
                        status="AND"
                        :key="index"
                        :id="`id${index}`"
                        :restaurant="order.restaurant"
                        :itens="order.items"
                        :avaliacao="order.note"
                        :value="order.value"
                        :date="order.date"
                        @changeRating="changeRating($event)"
                    />
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
            canRender: false,
            orderTab: null,
            orders: null,
            before: null,
            onGoing: null
        }
    },
    async beforeCreate() {
        this.orders = await services.getOrders()
        await Promise.all(this.orders.map(async order => {
            order.restaurant = await services.getRestaurant(0)
        }))
        this.before = this.orders.filter(order => {
            return order.status == 7
        })
        this.onGoing = this.orders.filter(order => {
            return order.status != 7
        })
        this.canRender = true
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

