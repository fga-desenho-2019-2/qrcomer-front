<template>
    <section id="nosso-time" class="nosso-time">
        <v-container>
            <h2 class="text-center">Conheça nosso time:</h2>
            <v-row>
                <v-col 
                    cols=12
                    sm=6
                    md=4
                    lg=3
                    v-for="membro in time"
                    :key="membro.id">
                    <QrcMembro 
                        :github="membro.github"
                        :img="membro.img"
                        :name="membro.name"/>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import Membro from '../../components/Membro.vue'

export default {
    data() {
        return {
            time: [
                {
                    id:1,
                    name: 'Alan Ronison de Lima e Silva',
                    github: 'https://github.com/alanrslima',
                    img: require('@/assets/images/membros/alan.jpeg')
                },
                {
                    id:2,
                    name: 'Elias Bernardo Marques Magalhães',
                    github: 'https://github.com/ebmm01',
                    img: require('@/assets/images/membros/elias.jpeg')
                },
                {
                    id:3    ,
                    name: 'Guilherme Marques Rosa',
                    github: 'https://github.com/guilhesme23',
                    img: require('@/assets/images/membros/gui.png')
                },
                {
                    id:4,
                    name: 'Leonardo dos Santos Silva Barreiros',
                    github: 'https://github.com/leossb36',
                    img: require('@/assets/images/membros/leo.jpeg')
                },
                {
                    id:5,
                    name: 'Matheus Salles Blanco',
                    github: 'https://github.com/MatheusBlanco',
                    img: require('@/assets/images/membros/blanco.jpeg')
                },
                {
                    id:6,
                    name: 'Pedro Henrique Andrade Féo',
                    github: 'https://github.com/phe0',
                    img: require('@/assets/images/membros/feo.jpeg')
                },
                {
                    id:7,
                    name: 'Pedro Rodrigues Pereira',
                    github: 'https://github.com/pedro-prp',
                    img: require('@/assets/images/membros/pedro.jpeg')
                },
                {
                    id:8,
                    name: 'Saleh Nazih Abdel Kader',
                    github: 'https://github.com/devsalula',
                    img: require('@/assets/images/membros/saleh.jpeg')
                },
                {
                    id:9,
                    name: 'Sara Conceição de Sousa Araújo Silva',
                    github: 'https://github.com/silvasara',
                    img: require('@/assets/images/membros/sara.jpeg')
                },
                {
                    id:10,
                    name: 'Shayane Marques Alcântara',
                    github: 'https://github.com/shayanealcantara',
                    img: require('@/assets/images/membros/shay.jpeg')
                },
            ]
        }
    },
    components: {
        'QrcMembro': Membro,
    }
}
</script>

<style lang="scss">
#nosso-time {
    padding: 40px 0;
}
</style>