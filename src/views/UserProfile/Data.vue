<template>
  <v-content class="user-page d-flex flex-column pt-0">
    <div>
      <v-container>
        <v-row>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field v-model="user.name" label="Nome" color="#e18855" readonly type="text"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field v-model="user.email" label="E-mail" color="#e18855" readonly type="email"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field v-model="user.telephone" label="Telefone" color="#e18855" readonly type="text"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field v-model="user.password" label="Senha" color="#e18855" readonly type="password"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field v-model="user.cpf" label="CPF" color="#e18855" readonly type="text"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-bottom-navigation class="user-bottom-navigation" v-model="activeBtn" :input-value="showNav" color="white">
      <v-btn to="./edit-user"><font color="white"><strong>ATUALIZAR</strong></font></v-btn>
    </v-bottom-navigation>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      showNav: true,
      dialog: false,
      user: {
        name: "username",
        email: "user@email.com",
        telephone: "(XX) XXXXX-XXXX",
        password: "*********",
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
    close() {
      this.$refs.close();
    },
    vueDelete() {
      this.$refs.delete();
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
  // },
  //   components: {
  //     QrcData: Data
  //   }
};
</script>

<style lang="scss">
.user-page .v-item-group.v-bottom-navigation .v-btn {
  max-width: none;
  width: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.card {
  width: auto;
  border-bottom: solid 1px black;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: auto;
}
</style>