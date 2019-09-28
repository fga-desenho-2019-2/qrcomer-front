<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>
        </div>

        <QrcFooter/>
    </v-content>
</template>

<script>
import Footer from './Footer.vue'
import Banner from './Banner.vue'

export default {
    components: {
        "QrcFooter": Footer,
        "QrcBanner": Banner
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