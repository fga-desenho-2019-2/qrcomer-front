<template>
    <v-content class="d-flex flex-column">
        <QrcFooter/>
    </v-content>
</template>

<script>
import Footer from './Footer.vue'
export default {
    components: {
        "QrcFooter" : Footer
    }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>