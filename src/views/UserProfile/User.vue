<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <QrcBanner />

      <QrcCardUsuario />

      <QrcData />
    </div>
  </v-content>
</template>

<script>
import Banner from "./Banner.vue";
import CardUsuario from "./CardUsuario.vue";
import Data from "./Data.vue";
export default {
  components: {
    QrcBanner: Banner,
    QrcCardUsuario: CardUsuario,
    QrcData: Data
  }
};
</script>

<style lang="scss">
.v-content__wrap {
  display: flex;
  flex-direction: column;
}
</style>