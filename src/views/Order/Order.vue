<template >
    <v-content id="order">
        <Navbar/>
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
                        :id="`ant-${index}`"
                        :restaurant="order.restaurant"
                        :itens="order.items"
                        :avaliacao="order.avaliation_number"
                        :value="order.value"
                        :date="order.date"
                        @changeRating="changeRating($event, order.id, index)"
                    />
                </v-tab-item>
                    
                <v-tab-item
                    value="andamento">

                    <OrderItem 
                        v-for="(order, index) in onGoing"
                        status="AND"
                        :key="index"
                        :id="`and-${index}`"
                        :restaurant="order.restaurant"
                        :itens="order.items"
                        :avaliacao="order.note"
                        :value="order.value"
                        :date="order.date"
                        :password="order.cod"
                    />
                </v-tab-item>
            </v-tabs-items>
        </div>
        
    </v-content>
</template>

<script>
import OrderItem from '@/components/Cards/OrderItem'
import services from '../../services/ServicesFacade'
import Navbar from '@/components/Navbar'

export default {
    components: {
        OrderItem,
        Navbar
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
        let response = await services.getOrders()
        this.orders = response.data
        this.orders.sort((a, b) => {
            if(a.id > b.id) return 1
            else if(a.id < b.id) return -1
            else return 0
        })
        if(this.orders.length > 0){
            await Promise.all(this.orders.map(async order => {
                order.restaurant = await services.getRestaurant(0)
            }))
            this.before = this.orders.filter(order => {
                return order.status == 7
            })
            this.onGoing = this.orders.filter(order => {
                return order.status != 7
            })
        }
        this.canRender = true
    },
    methods: {
        async changeRating(value, id, index) {
            let body = {
                avaliation_number: value,
                avaliation_description: ""
            }
            await services.changeRating(id, body)
            this.before[index].avaliation_number = value
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

