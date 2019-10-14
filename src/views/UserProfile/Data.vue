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

      <v-col cols="12" justify-content="space-between">
        <v-row justify="center">
          <v-btn to="./edit-user" color="success" class="qrc-btn primary my-2">Editar dados</v-btn>

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
                <v-btn color="success" class="qrc-btn primary my-2" @click="dialog = false">Cancelar</v-btn>

                <v-btn color="success" class="qrc-btn primary my-2" @click="vueDelete">Confirmar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </div>
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
  width: auto;
  border-bottom: solid 1px black;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: auto;
}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  color: #00a0c6;
  text-decoration: none;
  cursor: pointer;
}
</style>