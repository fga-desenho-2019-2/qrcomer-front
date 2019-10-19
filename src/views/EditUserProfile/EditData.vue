<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="name" label="Nome" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="email" label="E-mail" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field type="password" v-model="password" label="Senha" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="telephone" label="Telefone" required color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="cpf" label="CPF" required color="#e18855"></v-text-field>
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
export default {
  // el: "#app",
  // data() {
  //     // user: null,
  //     // loading: true,
  //     // errored: false,
  // },
  data: () => ({
    user: {},
    valid: true,
    name: '',
    nameRules: [v => !!v || "Campo obrigatório"],
    email: '',
    emailRules: [
      v => !!v || "Campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
    ],
    password: '',
    passwordRules: [
      v => !!v || "Campo obrigatório",
      v => (v && v.length >= 8) || "Senha deve ser maior do que 8 caracteres"
    ],
    telephone: '',
    telephoneRules: [v => !!v || "Campo obrigatório"],
    cpf: '',
    cpfRules: [v => !!v || "Campo obrigatório"]
  }),
  created() {
    this.getUserInfo();
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    getUserInfo() {
      this.user = {
        name: "username",
        email: "email@email",
        telephone: "1234",
        password: "12345",
        cpf: "123456"
      };
      this.name = this.user.name;
      this.email = this.user.email;
      this.password = this.user.password;
      this.telephone = this.user.telephone;
      this.cpf = this.user.cpf;
    }
  }
  // mounted () {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => {
  //       this.user = response.data.bpi
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       this.errored = true
  //     })
  //     .finally(() => this.loading = false)
  // }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap");
.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.v-text-field {
  color: #eb4476;
  font-family: "Palanquin", sans-serif;
}
.v-input__control {
  color: #eb4476;
  font-family: "Palanquin", sans-serif;
}
</style>