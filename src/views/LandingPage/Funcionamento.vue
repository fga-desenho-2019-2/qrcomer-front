<template>
    <section id="funcionamento">
        <v-container>
            <h2 class="text-center mb-0 main-color">Como funciona</h2>
            <h5 class="text-center font-weight-light">Veja como é fácil usar o QrComer:</h5>
            <v-row>
                <v-col
                    cols=12
                    sm=12
                    md=4
                    lg=4>
                    <div class="d-flex flex-column box-funcionamento">
                        <img 
                            src="~@/assets/images/qrcode.svg" 
                            class="box-funcionamento--img"
                            alt="Icon made by ultimatearm from www.flaticon.com">
                        <p class="box-funcionamento--text">Escaneie o <b>qrcode</b> que se encontra na sua mesa. Não é preciso instalar nada no seu celular!</p>
                    </div>
                </v-col>
                <v-col
                    cols=12
                    sm=12
                    md=4
                    lg=4>
                    <div class="d-flex flex-column box-funcionamento">
                        <img 
                            src="~@/assets/images/store.svg" 
                            class="box-funcionamento--img"
                            alt="">
                        <p class="box-funcionamento--text">Escolha seu restaurante preferido e <b>faça seu pedido</b>. Uma senha será gerada e você só precisa aguardar.</p>
                    </div>
                </v-col>
                <v-col
                    cols=12
                    sm=12
                    md=4
                    lg=4>
                    <div class="d-flex flex-column box-funcionamento">
                        <img 
                            src="~@/assets/images/food.svg" 
                            class="box-funcionamento--img"
                            alt="">
                        <p class="box-funcionamento--text">Agora é só <b>curtir</b> sua comida preferida! Não se esqueça de avaliar tanto o prato quanto o restaurante.</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style lang="scss">
#funcionamento {
    padding: 40px 0 0;

    .box-funcionamento {
        align-items: center;
        justify-content: center;

        &--img {
            object-fit: contain;
            height: 150px;
        }

        &--text {
            margin-top: 10px;
            text-indent: 25px;
            font-size: 16px;
            padding: 0 20px;
            text-align: center; 
        }
    }
}
</style>