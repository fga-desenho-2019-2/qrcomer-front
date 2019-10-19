<template>
    <v-app-bar 
        app
        elevate-on-scroll 
        v-scroll="floatingNav"
        id="landing-page-header">
        <v-app-bar-nav-icon class="d-flex d-sm-flex d-md-none d-lg-none text-shadow landing-page-header--icon"></v-app-bar-nav-icon>
        <img 
            v-if="white" 
            src="~@/assets/images/QRComer.png" 
            alt="Logo" 
            class="brand pr-5 d-none d-sm-none d-md-flex d-lg-flex">
        <img 
            v-else 
            src="~@/assets/images/logo.svg" 
            alt="Logo" 
            class="brand pr-5 d-none d-sm-none d-md-flex d-lg-flex">
        <v-toolbar-title class="text-uppercase d-none d-sm-none d-md-flex d-lg-flex text-shadow">
            <span>QR</span>
            <span class="font-weight-light">Comer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            text
            tile
            @click="routeTo({'path': '/auth', 'query': {'loginType':true}})"
            href="#">
            <span class="mr-2 text-shadow">Login</span>
        </v-btn>
        <v-btn
            text
            tile
            @click="routeTo({'path': '/auth', 'query': {'loginType':false}})"
            href="#">
            <span class="mr-2 text-shadow">Cadastrar</span>
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
            if (window.scrollY > 5) {
                this.white = true
            } else {
                this.white = false
            }

        },
        routeTo(route) {
            this.$router.push(route);
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
            
            &.landing-page-header--icon {
                color: $main-color;
            }
        }

        .text-shadow {
            text-shadow: none;
        }

        .brand {
            filter: none;
        }
    }

    
    
    .brand {
        height: 50%;
        object-fit: contain;
        filter: drop-shadow(1px 2px 1px $c-gray70)
    }
    
    .v-toolbar__title {
        font-size: 24px;
        font-weight: 400;
        line-height: 2rem;
    }
    
    .v-btn {
        color: $c-white;
        text-transform: initial;
    }

    .text-shadow {
        text-shadow: 1px 2px 4px $c-gray70;
    }

    @media screen and (max-width: 1920px) {
        .v-toolbar__content {
            max-width: 1300px;
            margin: 0px auto;
        }
    }

}
</style>