<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <QrcBanner />
      <QrcCardUsuario />
      <p class="card">
        <span style="width: 50px;">{{ user.name }}</span>
      </p>
      <br />
      <p class="card">
        <span style="width: 50px;">{{ user.email }}</span>
      </p>
      <br />
      <p class="card">
        <span style="width: 50px;">{{ user.telephone }}</span>
      </p>
      <br />
      <p class="card">
        <span style="width: 50px;">{{ user.cpf }}</span>
      </p>
      <br />

      <v-col cols="12" justify-content="space-between">
        <v-row justify="center">
          <v-btn color="success" class="qrc-btn primary my-2">
            <a href="./edit-user" class="a">Editar dados</a>
          </v-btn>

          <div class="divider"></div>

          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn color="success" class="qrc-btn primary my-2" v-on="on">Apagar conta</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline">Apagar a conta?</v-card-title>
              <v-card-text>Se a conta for apagada, registros de compras serão deletados. Esta não poderá ser recuperada.</v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="success" class="qrc-btn primary my-2" @click="none">Cancelar</v-btn>
                <v-btn color="success" class="qrc-btn primary my-2" @click="vueDelete">Confirmar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </div>
    <QrcFooter />
  </v-content>
</template>

<script>
import Banner from "./Banner.vue";
import CardMembro from "./CardUsuario.vue";
import Footer from "../LandingPage/Footer.vue";

export default {
  components: {
    QrcBanner: Banner,
    QrcFooter: Footer,
    QrcCardUsuario: CardMembro
  },

  data() {
    return {
      dialog: false,
      user: {
        name: "username",
        email: "user@email.com",
        telephone: "(XX) XXXXX-XXXX",
        cpf: "XXX.XXX.XXX-XX"
      }
    };
  },
  methods: {
    edit() {
      if (this.$refs.form.edit()) {
        this.snackbar = true;
      }
    },
    vueDelete() {
      this.$refs.delete();
    }
  }
};
</script>

<style lang="scss">
.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.a {
  color: white;
  text-decoration: none;
}

.form {
  justify-content: space-around;
  margin-left: 3%;
  margin-right: 3%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.divider {
  width: 30px;
}

.card {
  width: 350px;
  border-bottom: solid 1px black;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: auto;
}
</style>