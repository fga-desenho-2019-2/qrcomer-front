<template>

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
        padding: 40px;
        
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