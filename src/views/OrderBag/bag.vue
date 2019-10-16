<template>
    <v-content class="d-flex flex-column pt-0">
        <div class="shopping-info">
            <div class="shopping-info__image-area">
                <img class="shopping-info__image-area__image" src="@/assets/images/place.svg"/>
            </div>
            <div class="shopping-info__text-area">
                <div class="shopping-info__text-area__text">
                    <p id="shopping-name">Você ta no shopping do seu zé</p>
                    <p id="localization">Av josé palmeiras</p>
                </div>
                <div class="shopping-info__text-area__button">
                    <a href="#">Não, estou em outro lugar</a>
                </div>
            </div>
        </div>


        
        <v-bottom-navigation  color="white">
            <v-btn><font color="white">Finalizar Pedido - Total: </font></v-btn>
        </v-bottom-navigation>
    </v-content>

</template>

<script>
    export default {
        components:{

        }
    };
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}

.shopping-info {
    width: 100%;
    background-color: $c-white;
    box-shadow: 0px 4px 10px #00000033;
    padding-top: 20px;
    margin-bottom: 30px;

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
        // margin-right: 10px;
        // border-bottom: 1px solid $c-gray50;

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
}

#shopping-name {
    margin-bottom: 0px !important;
    font-size: 14px;
}

#localization{
    font-size: 12px;
    color: #797979;
}
</style>

