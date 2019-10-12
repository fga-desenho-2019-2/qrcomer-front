<template>
    <section id="sobre">
        <v-container>
            <v-row>
                <v-col
                    class="d-flex justify-center"
                    cols=12
                    sm=12
                    md=6
                    lg=6>
                    <img 
                        src="~@/assets/images/sobre.svg" 
                        class="sobre--img"
                        alt="">
                </v-col>
                <v-col
                    class="d-flex align-center justify-start flex-column"
                    cols=12
                    sm=12
                    md=6
                    lg=6>
                    <h2 class="main-color text-center">Deixe as filas no passado</h2>
                    <h5 class="text-center font-weight-light">Com o QrComer você não precisa mais se preocupar em perder tempo em pé. Todos os pedidos podem ser feitos apenas com seu celular. Muito mais praticidade e segurança na hora de pedir! </h5>
                </v-col>
            </v-row>
            
        </v-container>
    </section>
</template>

<style lang="scss">
#sobre {
    padding: 60px 0 0;

    .sobre--img {
        height: 350px;
        width: 280px;
        object-fit: cover;
        object-position: top;
        filter: drop-shadow(0px 4px 4px $c-gray40);
    }
}
</style>