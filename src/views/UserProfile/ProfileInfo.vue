<template>
    <section id="profile-info" class="profile-info">
        <v-container>
            <div class="time-section">
                <QrcInfo
                    v-for="info in profile-info"
                    :key="info.id"
                    :class="`membro-${membro.id}`"
                    :field="info.field"/>
            </div>
        </v-container>
    </section>
</template>

<script>
import Info from '../../components/Info.vue'

export default {
    data() {
        return {
            time: [
                {
                    id:1,
                    field: 'Alan Ronison',
                },
                {
                    id:2,
                    name: 'Elias Bernardo',
                    github: 'https://github.com/ebmm01',
                    img: require('@/assets/images/membros/elias.jpeg')
                },
                {
                    id:3    ,
                    name: 'Guilherme Marques',
                    github: 'https://github.com/guilhesme23',
                    img: require('@/assets/images/membros/gui.png')
                },
                {
                    id:4,
                    name: 'Leonardo Barreiros',
                    github: 'https://github.com/leossb36',
                    img: require('@/assets/images/membros/leo.jpeg')
                },
                {
                    id:5,
                    name: 'Matheus Blanco',
                    github: 'https://github.com/MatheusBlanco',
                    img: require('@/assets/images/membros/blanco.jpeg')
                },
                {
                    id:6,
                    name: 'Pedro Féo',
                    github: 'https://github.com/phe0',
                    img: require('@/assets/images/membros/feo.jpeg')
                },
                {
                    id:7,
                    name: 'Pedro Rodrigues',
                    github: 'https://github.com/pedro-prp',
                    img: require('@/assets/images/membros/pedro.jpeg')
                },
                {
                    id:8,
                    name: 'Saleh Kader',
                    github: 'https://github.com/devsalula',
                    img: require('@/assets/images/membros/saleh.jpeg')
                },
                {
                    id:9,
                    name: 'Sara Silva',
                    github: 'https://github.com/silvasara',
                    img: require('@/assets/images/membros/sara.jpeg')
                },
                {
                    id:10,
                    name: 'Shayane Alcântara',
                    github: 'https://github.com/shayanealcantara',
                    img: require('@/assets/images/membros/shay.jpeg')
                },
            ]
        }
    },
    components: {
        'QrcInfo': Info,
    }
}
</script>

<style lang="scss">
    #profile-info {
        padding: 40px 0;
    }

    .info-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: -10px;
        margin-left: -10px;
    }
</style>