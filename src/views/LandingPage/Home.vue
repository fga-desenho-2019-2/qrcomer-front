<template>
    <v-content class="d-flex flex-column">
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
    flex-direction: column;
}
</style>