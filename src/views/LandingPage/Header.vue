<template>
    <v-app-bar app id="landing-page-header">
        <img src="~@/assets/images/QRComer.png" alt="Logo" class="brand pr-5">
        <v-toolbar-title class="text-uppercase">
            <span>QR</span>
            <span class="font-weight-light">Comer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            depressed
            href="#"
            class="primary">
            <span class="mr-2">Login</span>
        </v-btn>
    </v-app-bar>
</template>

<style lang="scss">
#landing-page-header {
    .brand {
        height: 50%;
        object-fit: contain;
    }
    .v-toolbar__title {
        font-size: 24px;
        font-weight: 400;
        line-height: 2rem;
    }
}
</style>