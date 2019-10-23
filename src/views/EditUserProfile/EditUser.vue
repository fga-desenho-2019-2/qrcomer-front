<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <QrcBanner />

      <QrcEditData />
    </div>
  </v-content>
</template>

<script>
import Banner from "./Banner.vue";
import EditData from "./EditData.vue";

export default {
  components: {
    QrcBanner: Banner,
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