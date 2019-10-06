<template>
    <section id="card-usuario" class="card-usuario">
            <div class="card-usuario-section">
                <QrcUsuario
                    v-for="usuario in cardusuario"
                    :key="usuario.id"
                    :class="`usuario-${usuario.id}`"
                    :img="usuario.img"
                    :name="usuario.name"/>
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
            </div>
    </section>
</template>

<script>
import Usuario from '../../components/Usuario.vue'

export default {
    data() {
        return {
            cardusuario: [
                {
                    id:1,
                    name: 'Blank',
                    img: require('@/assets/images/profile/blank-profile-picture-.png')
                },
            ]
        }
    },
    components: {
        'QrcUsuario': Usuario,
    }
}
</script>

<style lang="scss">
    #card-usuario {
        padding: 40px 0;
    }

    .card-usuario-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: -10px;
        margin-left: -10px;
        align-items: center;
    }

    .card-usuario-section:first-child{
        z-index: -1;
    }

</style>