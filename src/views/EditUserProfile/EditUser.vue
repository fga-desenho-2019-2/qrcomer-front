<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <QrcBanner />
      <QrcEditUsuario />

      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="password" :rules="passwordRules" label="Senha" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="telephone" :rules="telephoneRules" label="Telefone" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="cpf" :rules="cpfRules" label="CPF" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-col cols="12" justify-content="space-between">
        <v-row justify="center">
          <v-btn
            :disabled="!valid"
            color="success"
            class="qrc-btn primary my-2"
            @click="validate"
          >Confirmar</v-btn>

          <div class="divider"></div>

          <v-btn color="error" class="qrc-btn primary my-2" @click="reset">Apagar dados</v-btn>
        </v-row>
      </v-col>
    </div>
    <QrcFooter />
  </v-content>
</template>

<script>
import Footer from "../LandingPage/Footer.vue";
import Banner from "./Banner.vue";
import EditUsuario from "./EditUsuario.vue";

export default {
  components: {
    QrcBanner: Banner,
    QrcFooter: Footer,
    QrcEditUsuario: EditUsuario
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Campo obrigatório"],
    email: "",
    emailRules: [
      v => !!v || "Campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Campo obrigatório",
      v => (v && v.length >= 8) || "Senha deve ser maior do que 8 caracteres"
    ],
    telephone: "",
    telephoneRules: [v => !!v || "Campo obrigatório"],
    cpf: "",
    cpfRules: [v => !!v || "Campo obrigatório"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss">
.v-content__wrap {
  display: flex;
  flex-direction: column;
}

#card-usuario {
  padding: 40px;
}

.card-usuario-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -10px;
  margin-left: -10px;
  align-items: center;
}

.divider {
  width: 30px;
}
</style>