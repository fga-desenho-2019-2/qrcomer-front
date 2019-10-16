<template>
  <v-content class="d-flex flex-column pt-0">
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <!-- <p class="card" id="app">
              <div 
                v-for="name in user"
                class="name">
                <span style="width: 50px;">{{ user.name }}</span>
              </div>
            </p>-->
            <p class="card">
              <span style="width: 50px;">{{ user.name }}</span>
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <!-- <p class="card" id="app">
              <div 
                v-for="email in user"
                class="email">
                <span style="width: 50px;">{{ user.email }}</span>
              </div>
            </p>-->
            <p class="card">
              <span style="width: 50px;">{{ user.email }}</span>
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <!-- <p class="card" id="app">
              <div 
                v-for="telephone in user"
                class="telephone">
                <span style="width: 50px;">{{ user.telephone }}</span>
              </div>
            </p>-->
            <p class="card">
              <span style="width: 50px;">{{ user.telephone }}</span>
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <!-- <p class="card" id="app">
              <div 
                v-for="password in user"
                class="password">
                <span style="width: 50px;">{{ user.password }}</span>
              </div>
            </p>-->
            <p class="card">
              <span style="width: 50px;">{{ user.password }}</span>
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <!-- <p class="card" id="app">
              <div 
                v-for="cpf in user"
                class="cpf">
                <span style="width: 50px;">{{ user.cpf }}</span>
              </div>
            </p>-->
            <p class="card">
              <span style="width: 50px;">{{ user.cpf }}</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-bottom-navigation color="white">
      <v-btn to="./edit-user">
        <font color="white">
          <strong>Atualizar</strong>
        </font>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            <font color="white">
              <strong>Deletar</strong>
            </font>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline">Apagar a conta?</v-card-title>
          <v-card-text>Se a conta for apagada, registros de compras serão deletados. Esta não poderá ser recuperada.</v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="success" class="qrc-btn primary my-2" @click="dialog = false">Cancelar</v-btn>

            <v-btn color="success" class="qrc-btn primary my-2" @click="vueDelete">Confirmar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-bottom-navigation>
  </v-content>
</template>

<script>
export default {
  // el: "#app",
  data() {
    return {
      // user: null,
      // loading: true,
      // errored: false,
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