<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>

            <QrcSobre/>

            <QrcFuncionamento/>
            
            <QrcTime/>
        </div>
        <QrcFooter/>
    </v-content>
</template>

<script>
import Footer from './Footer.vue'
import Banner from './Banner.vue'
import Time from './Time.vue'
import Funcionamento from './Funcionamento.vue'
import Sobre from './Sobre.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFuncionamento": Funcionamento,
        "QrcTime": Time,
        "QrcFooter": Footer,
        "QrcSobre": Sobre
    }
}
</script>

<style lang="scss">
.v-content {
    background: $c-white;
    
    .v-content__wrap {
        display: flex;
        flex-direction: column;
    }
}

</style>