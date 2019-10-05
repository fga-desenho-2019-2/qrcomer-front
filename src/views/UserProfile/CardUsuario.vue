<template>
    <section id="card-usuario" class="card-usuario">
        <v-container>
            <div class="card-usuario-section">
                <QrcUsuario 
                    v-for="usuario in cardusuario"
                    :key="usuario.id"
                    :class="`usuario-${usuario.id}`"
                    :github="usuario.github"
                    :img="usuario.img"
                    :name="usuario.name"/>
            </div>
        </v-container>
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
                    name: 'Alan Ronison',
                    github: 'https://github.com/alanrslima',
                    img: require('@/assets/images/membros/alan.jpeg')
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
        border-radius: 0 20px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 18em;
    }

    .usuario-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: -10px;
        margin-left: -10px;
    }
</style>