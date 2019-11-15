<template>
    <div
        class="orderItem">
        <p class="mb-1 mt-6">Seg, 22 de agosto de 2019</p>

        <div class="orderItem__box">
            <div class="orderItem__box__content">
                <div class="orderItem__box__content__img">
                    <img src="@/assets/images/bannermc.svg" alt="">
                </div>
                <div class="orderItem__box__content__content">
                    <p class="px-3 mb-1">Mc Donalds</p>
                    <ul class="px-3 small-item" style="list-style: none">
                        <li>1x Mac Tast</li>
                        <li>1x Sandue de chocolate</li>
                    </ul>
                    <div class="d-flex align-center stars" v-if="status != 'AND' ">
                        <p class="px-3 mb-0 small-item mr-auto">Avaliação:</p>
                        <div class="d-flex pr-3">
                            <v-icon color="yellow">mdi-star</v-icon>
                            <v-icon color="yellow">mdi-star</v-icon>
                            <v-icon color="yellow">mdi-star</v-icon>
                            <v-icon color="yellow">mdi-star</v-icon>
                            <v-icon color="#a0a0a0">mdi-star</v-icon>
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
                    value="R$ 29,90"
                    shopping="ParkShopping"
                    @closeOrderModal=" dialog = false"/>
            </v-dialog>
        </div>
        
    </div>
</template>

<script>
import OrderModal from "@/components/OrderModal"

export default {
    props: {
        status: { type: String, required: true },
        restaurant: { type: String, required: true  },
        itens: { type: Array, required: true },
        avaliacao: { type: Number, required: false },
        id: { type: String },
        password: {type: String}
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
                position: relative;
                width: 30%;
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
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