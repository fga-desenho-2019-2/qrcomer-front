<template>
    <section id="banner">
        <v-container>
            <v-row>
                <v-col cols=12 sm=12 md=12 lg=12>
                    <h2 class="white--text banner--title">Seu pedido sem estresse. Sem filas.</h2>
                    <h3 class="white--text banner--subtitle">Cadastre-se e aproveite todas as vantagens do Qrcomer. </h3>
                    <h3 class="white--text banner--subtitle">O shopping em suas mãos.</h3>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style lang="scss">
#banner {
    background: url('~@/assets/images/banner2.jpg');
    background-position: center 80%;
    background-size: cover;
    min-height: 55vh;
    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #eb4476, #e18855);
        opacity: 0.75;
        z-index: -1;
    }

    .banner {
        &--title {
            font-size: 48px;
        }
        &--subtitle {
            font-size: 36px;
            line-height: 36px;
        }
    }
}
</style>