<template>
  <v-content class="edit-user-page d-flex flex-column pt-0">
    <qrc-banner />
    <div>
      <v-form>
        <v-container>
          <v-row v-if="userCopy">
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userCopy.name" label="Nome" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userCopy.email" label="E-mail" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field type="password" v-model="userCopy.password" label="Senha" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userCopy.telephone" label="Telefone" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="userCopy.cpf" label="CPF" required color="#e18855"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-bottom-navigation color="white">
        <v-btn @click="validate">
          <font color="white">
            <strong>CONFIRMAR</strong>
          </font>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-content>
</template>

<script>
import UserBanner from "../components/UserBanner";

export default {
  components: {
    "qrc-banner": UserBanner
  },
  data: () => ({
    userCopy: {},
    valid: true,
    nameRules: [v => !!v || "Campo obrigatório"],
    emailRules: [
      v => !!v || "Campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
    ],
    passwordRules: [
      v => !!v || "Campo obrigatório",
      v => (v && v.length >= 8) || "Senha deve ser maior do que 8 caracteres"
    ],
    telephoneRules: [v => !!v || "Campo obrigatório"],
    cpfRules: [v => !!v || "Campo obrigatório"]
  }),
  props: {
    user: {
      required: true
    }
  },
  watch: {
    user: function () {
      this.userCopy = this.user;
    }
  },
  methods: {
    copyUser: function () {
      this.userCopy = this.user;
    },
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
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap");

.edit-user-page .v-item-group.v-bottom-navigation .v-btn {
  max-width: none;
  width: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.v-text-field {
  color: #eb4476;
  font-family: "Palanquin", sans-serif;
}
</style>