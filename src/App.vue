<template>
    <v-app id="qrcomer">
        <router-view name="LandingPageHeader"></router-view>

        <router-view></router-view>

    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data: () => ({
        //
    }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap');

$main-font: 'Palanquin', 'Roboto', sans-serif;
$second-font: 'Lexend Deca', 'Roboto', sans-serif;

#qrcomer {
    font-family: $main-font !important;

    @media screen and (max-width:1920px) {
        .container {
            max-width: 1300px !important;
        }
    }

    // .v-content { }

    .v-btn {
        border-radius: 0 15px;
        &.primary {
            background: $main-color !important;
            border-color: $main-color !important;
        }
    }
}
</style>
