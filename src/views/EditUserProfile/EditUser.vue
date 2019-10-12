<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <QrcBanner />

      <QrcEditUsuario />

      <QrcEditData />
    </div>
    <QrcFooter />
  </v-content>
</template>

<script>
import Footer from "../LandingPage/Footer.vue";
import Banner from "./Banner.vue";
import EditUsuario from "./EditUsuario.vue";
import EditData from "./EditData.vue";

export default {
  components: {
    QrcBanner: Banner,
    QrcFooter: Footer,
    QrcEditUsuario: EditUsuario,
    QrcEditData: EditData
  }
};
</script>

<style lang="scss">
.v-content__wrap {
  display: flex;
  flex-direction: column;
}
</style>