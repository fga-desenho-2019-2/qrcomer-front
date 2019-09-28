<template>
    <section id="banner">
        <v-container>
            <v-row>
                <v-col cols=12 sm=12 md=12 lg=12 class="col-banner">
                    <img src="~@/assets/images/logo2.svg" alt="Logo Qrcomer" class="banner-img mx-auto">
                    <v-btn
                        href="#"
                        min-width="250px"
                        class="qrc-btn white mx-auto font-weigth-bold my-2">
                        <span class="mr-2">Login</span>
                    </v-btn>
                    <v-btn
                        href="#"
                        min-width="250px"
                        class="qrc-btn primary my-2 mx-auto">
                        <span class="mr-2">Cadastrar</span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style lang="scss">
#banner {
    background: linear-gradient(135deg, #eb4476, #e18855);
    min-height: 55vh;
    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    padding-top: 64px;

    .banner {
        &--title {
            font-size: 48px;
        }
        &--subtitle {
            font-size: 36px;
            line-height: 36px;
        }
    }
    .col-banner {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .banner-img {
            width: 250px;
            height: 250px;
            filter: drop-shadow(0px 4px 4px $c-gray70)
        }
    }
}
</style>