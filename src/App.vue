<template>
    <v-app id="qrcomer">
        <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap");
@import "~@/assets/styles/buttons.scss";

$main-font: "Palanquin", "Roboto", sans-serif;
$second-font: "Lexend Deca", "Roboto", sans-serif;

#qrcomer {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $main-font !important;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 42px;
  }
  h3 {
    font-size: 36px;
  }
  h4 {
    font-size: 30px;
  }
  h5 {
    font-size: 24px;
  }
  h6 {
    font-size: 18px;
  }

  p,
  span,
  a {
    font-family: $second-font !important;
  }

  body {
      background-color: $c-white;
  }
  
  b {
    color: $main-color;
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px !important;
    }
  }

  .main-color {
    color: $main-color;
  }

  .second-color {
    color: $second-color;
  }
}
</style>
