<template>
    <v-app-bar 
        app
        absolute
        id="auth-page-header">
        <v-btn
            @click="routeTo('/')"
            icon>
            <v-icon class="d-flex d-sm-flex d-md-none d-lg-none text-shadow landing-page-header--icon">mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            @click="logout"
            icon>
            <v-icon class="d-flex d-sm-flex d-md-none d-lg-none text-shadow landing-page-header--icon">mdi-close</v-icon>
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
        logout: function () {
            this.$store.dispatch('auth/AUTH_LOGOUT')
                .then(() => {
                    this.$router.push('/auth')
            })
        }
        
    }
}
</script>

<style lang="scss">
#auth-page-header {
    transition: all 0.3s ease;
    z-index: 999;
    background: white;
    color: $c-gray90;

    @media screen and (max-width: 1920px) {
        .v-toolbar__content {
            max-width: 1300px;
            margin: 0px auto;
        }
    }

}
</style>