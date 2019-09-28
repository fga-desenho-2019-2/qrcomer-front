<template>
    <v-app-bar 
        app
        elevate-on-scroll 
        v-scroll="floatingNav"
        id="landing-page-header">
        <img v-if="white" src="~@/assets/images/QRComer.png" alt="Logo" class="brand pr-5">
        <img v-else src="~@/assets/images/logo.svg" alt="Logo" class="brand pr-5">
        <v-toolbar-title class="text-uppercase">
            <span>QR</span>
            <span class="font-weight-light">Comer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            text
            tile
            href="#">
            <span class="mr-2">Login</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            white: false,
        }
    },
    methods: {
        floatingNav() {
            let headerElement = document.getElementById('landing-page-header')
            if (window.scrollY > 5) {
                this.white = true
            } else {
                this.white = false
            }

        }
    }
}
</script>

<style lang="scss">
#landing-page-header {
    background: transparent;
    transition: all 0.3s ease;
    z-index: 999;
    color: $c-white;

    &.v-app-bar--is-scrolled {
        background: white;
        color: $c-gray90;

        .v-btn {
            color: $c-gray90;
        }
    }
    .brand {
        height: 50%;
        object-fit: contain;
    }
    .v-toolbar__title {
        font-size: 24px;
        font-weight: 400;
        line-height: 2rem;
    }
    .v-btn {
        color: $c-white;
    }
}
</style>