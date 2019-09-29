<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>

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

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFuncionamento": Funcionamento,
        "QrcTime": Time,
        "QrcFooter": Footer,
    }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    min-height: 120vh; // Temporário, remover
    flex-direction: column;
}
</style>