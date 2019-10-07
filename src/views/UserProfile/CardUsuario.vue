
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
        padding: 10% 20%; 
    }

    .card-usuario-section {
        justify-content: center;
        align-items: center;
    }

    .card-usuario-section:first-child{
        z-index: -1;
    }
</style>