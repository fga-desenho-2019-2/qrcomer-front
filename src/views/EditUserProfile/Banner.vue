<template>
    <section id="banner" class="banner">
        <v-container>
            <v-row>
                <v-col cols=12 sm=12 md=12 lg=12 class="col-banner">
                    <div class="card-usuario-section">
                        <v-btn
                            href="#"
                            min-width="30px"
                            class="qrc-circle primary" fab>
                            <span class="mb-1">
                                <font size="+3.5">
                                    +
                                </font>
                            </span>
                        </v-btn>
                        <QrcEditUsuario
                            v-for="usuario in usuario"
                            :key="usuario.id"
                            :class="`usuario-${usuario.id}`"
                            :img="usuario.img"
                            :name="usuario.name"/>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import Usuario from '../../components/Usuario.vue'

export default {
    data() {
        return {
            usuario: [
                {
                    id:1,
                    name: 'Blank',
                    img: require('@/assets/images/profile/blank-profile-picture-.png')
                },
            ]
        }
    },
    components: {
        'QrcEditUsuario': Usuario,
    }
}
</script>

<style lang="scss" scoped>
#banner {
        margin:0;
        min-height: 45vh;
        background: linear-gradient(to bottom right, transparent 50%, #fafafa 40%), linear-gradient(40deg, #eb4476, #e18855) #fafafa;
        background-size:100% auto;
        transition:0.5s;

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

  /* extra test*/
    &:hover {
        background-size: 125% auto;/* add some extra tunning to deg direction and size ?*/
    }

}
</style>