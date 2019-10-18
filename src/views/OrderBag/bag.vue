<template>
    <v-content class="d-flex flex-column pt-0">
        <div class="card">
            <div class="card__image-area">
                <img class="card__image-area__image" src="@/assets/images/place.svg"/>
            </div>
            <div class="card__text-area">
                <div class="card__text-area__text">
                    <p id="shopping-name">Você ta no shopping do seu zé</p>
                    <p id="localization">Av josé palmeiras</p>
                </div>
                <div class="card__text-area__button">
                    <a href="#">Não, estou em outro lugar</a>
                </div>
            </div>
        </div>
        <div class="card" id="foods">
            <div class="card__restaurant" id="items">
                <h5 id="restaurant-title">Mc Donnald's</h5>
                <p>de 30 a 40 min</p>
                <restaurantItem />
                <restaurantItem />

            </div>
            <div class="card__price">
                <p><a href="#">Adicionar mais itens</a></p>
                <div class="card__price__total">
                    <div class="card__price__total__text">
                        <p>Total</p>
                    </div>
                    <div class="card__price__total__number">
                        <p>R$ 29,40</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" id="payment">
            <div class="card__payment-method">
                <div class="card__payment-method__title">
                    <p class="mb-0">Forma de Pagamento</p>
                </div>
                <div class="card__payment-method__credit">
                    <p>Cartão no app <br> ****3387</p>
                    <a href="#" class="mb-0 mt-0">ALTERAR</a>
                </div>
                <div class="card__payment-method__cpf">
                    <a href="#">Adicionar CPF</a>
                </div>
            </div>
        </div>
        
        <v-bottom-navigation  color="white">
            <v-btn><font color="white">Finalizar Pedido - Total: </font></v-btn>
        </v-bottom-navigation>
    </v-content>

</template>

<script>
    import restaurantItem from "@/components/BagItem.vue";
    export default {
        components:{
            restaurantItem
        }
    };
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}

.card {
    width: 100%;
    background-color: $c-white;
    box-shadow: 0px 4px 10px #00000033;
    padding-top: 20px;
    margin-bottom: 15px;

    &__image-area {
        width: 20%;
        height: 100%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &__image {
            height: 60px;
        }
    }

    &__text-area{
        width: 80%;
        float: right;
        box-sizing: border-box;
        padding-right: 10px;

        &__text{
            border-bottom: 1px solid #797979;
        }

        &__button{
            display: flex;
            justify-content: center;
            font-weight: bold;
            font-size: 12px;
            padding-top: 10px;
            padding-bottom: 10px;

            a:link, a:visited {
                text-decoration: none;
                color: #797979;
            }
        }
    }

    &__restaurant {
        border-bottom: 1px solid #797979;
        padding: 0 10px 25px 10px;
    }

    &__price{        

        font-size: 14px;
        font-weight: 25px;
        padding: 5px 10px 0px 10px;

        width: 100%;
        text-align: center; 

        a:link, a:visited {
            text-decoration: none;
            width: 100%;
            color: #EF596B;
        }

        &__total {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            font-weight: normal;
        }
    }

    &__payment-method {
        width: 100%;
        padding-left: 10px;


        &__title {
            font-size: 18px;
            font-weight: normal;
            border-bottom: 1px solid #C7C7C7;
        }

        &__credit {
            display: flex;
            justify-content: space-between;
            padding-right: 10px;

            p {
                font-size: 12px;
                color: #797979;
                padding-top: 12px;
            }

            a:visited, a:link{
                padding-top: 12px;
                text-decoration: none;
                color: #000000;
            }
            border-bottom: 1px solid#C7C7C7;
        }

        &__cpf {
            padding-top: 12px;
            padding-bottom: 12px;

            a:link, a:visited {
                text-decoration: none;
                font-size: 12px;
                color: #797979;
            }
        }
    }
}

.v-bottom-navigation{
    position: fixed;
    bottom: 0;
    left: 0;
}

#shopping-name {
    margin-bottom: 0px !important;
    font-size: 14px;
}

#localization{
    font-size: 12px;
    color: #797979;
}

#restaurant-title{
    margin-bottom: 0px !important;
}

#foods{
    padding-top: 10px;
}

#payment{
    padding-top: 5px;
}
</style>
