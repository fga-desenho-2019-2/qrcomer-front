<template>
  <section id="banner" class="banner">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" class="col-banner">
          <div class="card-membro-section">
            <QrcMembro
              v-for="membro in membro"
              :key="membro.id"
              :class="`membro-${membro.id}`"
              :img="membro.img"
              :name="membro.name"
            />
          </div>
        </v-col>
      </v-row>
      <p class="username">
        <!-- {{ user.name }} -->
        UserName
      </p>
    </v-container>
  </section>
</template>

<script>
import Membro from "../../components/Membro.vue";

export default {
  data() {
    return {
      membro: [
        {
          id: 1 /** {{ user.id }}*/,
          name: "UserName" /*{{ user.name }}*/,
          img: require("@/assets/images/profile/blank-profile-picture-.png") /*(@assets/images/profile/{{ user.image }}.png)*/
        }
      ]
    };
  },
  components: {
    QrcMembro: Membro
  }
};
</script>

<style lang="scss" scoped>
#banner {
  margin: 0;
  min-height: 45vh;
  background: linear-gradient(to bottom right, transparent 50%, #fafafa 40%),
    linear-gradient(-40deg, #eb4476, #e18855) #fafafa;
  background-size: 125% auto;
  transition: 0.5s;

  .col-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--img {
      width: 50vw;
      height: 200px;
      margin-bottom: 5vh;
      filter: drop-shadow(0px 4px 4px $c-gray70);
    }
  }
}

.username {
  margin: auto;
  font-family: Palanquin Dark;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
}

.card-membro-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  align-items: center;
}
</style>