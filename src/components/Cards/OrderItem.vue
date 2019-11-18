<template>
    <div
        class="orderItem mb-4">
        <p class="mb-1 mt-6">{{ date }}</p>

        <div class="orderItem__box">
            <div class="orderItem__box__content">
                <div class="orderItem__box__content__img">
                    <img src="@/assets/images/bannermc.svg" alt="">
                </div>
                <div class="orderItem__box__content__content d-flex flex-column justify-space-between">
                    <p class="px-3 mb-1">{{ restaurant.name }}</p>
                    <ul class="px-3 small-item" style="list-style: none">
                        <li 
                            v-for="(item, index) in itens"
                            :key="index">
                            {{ item.quantity }}x {{ item.name }}</li>
                    </ul>
                    <div class="d-flex align-center stars" v-if="status != 'AND' ">
                        <p class="mb-0 small-item mx-auto">Avaliação:</p>
                        <div class="d-flex mx-auto">
                            <v-rating 
                                v-model="avaliacao"
                                dense
                                readonly
                                half-increments
                                background-color="gray"
                                color="#e18855">
                            </v-rating>
                        </div>
                    </div>
                    <div class="d-flex align-center stars pa-0" v-else>
                        <v-btn 
                            block 
                            text
                            large
                            :id="id"
                            class="main-color">
                            Acompanhar pedido  
                        </v-btn> 
                    </div>
                </div>  
            </div> 
            <div class="orderItem__box__btn" v-if="status != 'AND' ">
                <v-btn 
                    block 
                    text
                    large
                    :id="id"
                    class="main-color">
                    Ver recibo    
                </v-btn>  
            </div>    

            <v-dialog 
                v-model="dialog" 
                persistent 
                :activator="`#${id}`"
                attach="#order">
                <OrderModal 
                    :restaurant="restaurant"
                    :itens="itens"
                    :avaliacao="avaliacao"
                    :status="status"
                    :password="password"
                    :value="value"
                    :shopping="shopping"
                    @closeOrderModal=" dialog = false"
                    @starChange="changeRating($event)"
                    />
            </v-dialog>
        </div>
        
    </div>
</template>

<script>
import OrderModal from "@/components/OrderModal"

export default {
    props: {
        status: { type: String, required: true },
        restaurant: { type: Object, required: true  },
        itens: { type: Array, required: true },
        avaliacao: { type: Number, required: false },
        id: { type: String },
        password: {type: String},
        shopping: {type: String},
        value: {type: Number},
        date: {type: String}
    },
    methods: {
        changeRating(value) {
            this.$emit('changeRating', value)
        }
    },
    components: {
        OrderModal,
    },
    data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style lang="scss">
.orderItem {
    height: 100%;
    &__box {
        background: $c-true-white;
        border-radius: 0 20px;
        box-shadow: 0 4px 10px #00000040;
        
        overflow: hidden;

        &__content {
            width: 100%;
            display: flex;
        
            .small-item {
                font-size: 14px;
                color: #808080;
            }

            &__img {
                width: 30%;
                height: 100%;
                position: relative;
                overflow: hidden;
                display: flex;
                justify-content: center;
                img {
                    max-height: 100%;
                }
            }

            &__content {
                padding-top: 10px;
                width: 70%;

                .stars {
                    margin-top: 5px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    padding: 10px 0;
                }
            }   
        }

        &__btn {
            border-radius: 0 20px;
        }   
    }
}
</style>