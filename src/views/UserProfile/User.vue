<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>

             <QrcUsuario/>
        </div>
        <QrcFooter/>
    </v-content>
</template>

<script>
import Footer from './Footer.vue'
import Banner from './Banner.vue'
import CardUsuario from './CardUsuario.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFooter": Footer,
        "QrcUsuario": CardUsuario,
    }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>