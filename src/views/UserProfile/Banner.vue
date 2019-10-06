<template>
    <section id="banner">
        <v-container>
            <div class="card-usuario-section">
                <QrcUsuario 
                        v-for="usuario in cardusuario"
                        :key="usuario.id"
                        :class="`usuario-${usuario.id}`"
                        :img="usuario.img"
                        :name="usuario.name"/>
            </div>
        </v-container>
    </section>
</template>

<style lang="scss">
#banner {
    background: linear-gradient(135deg, #eb4476, #e18855);
//    background: url(@/assets/images/Rectangle.svg);
    
    min-height: 1vh;
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

        &--img {
            width: 50vw;
            height: 200px;
            margin-bottom: 5vh;
            filter: drop-shadow(0px 4px 4px $c-gray70)
        }
    }

    svg {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10vw;
        /* set height to pixels if you want angle to change with screen width */
    }
}
</style>