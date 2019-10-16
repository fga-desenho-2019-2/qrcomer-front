<template>
    <v-app-bar 
        app
        elevate-on-scroll 
        v-scroll="floatingNav"
        id="landing-page-header">
        <v-app-bar-nav-icon class="d-flex d-sm-flex d-md-none d-lg-none landing-page-header--icon"></v-app-bar-nav-icon>
        <!-- <v-spacer></v-spacer> -->
        <v-toolbar-title class="text-uppercase">
            <font color="black"><span>sacola</span></font>
        </v-toolbar-title>
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

        }
    }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>

