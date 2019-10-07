<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>
            <QrcCardUsuario/>
              <v-card
                class="mx-auto"
                max-width="350"
              >
                <v-card-text>
                  <p class="display-1 text--accent">
                    Nome
                  </p>
                </v-card-text>
              </v-card>
              <br />
              <v-card
                class="mx-auto"
                max-width="350"
              >
                <v-card-text>
                  <p class="display-1 text--accent">
                    email@email.com
                  </p>
                </v-card-text>
              </v-card>
              <br />
              <v-card
                class="mx-auto"
                max-width="350"
              >
                <v-card-text>
                  <p class="display-1 text--accent">
                    (XX) XXXXX-XXXX
                  </p>
                </v-card-text>
              </v-card>
              <br />
              <v-card
                class="mx-auto"
                max-width="350"
              >
                <v-card-text>
                  <p class="display-1 text--accent">
                    XXX.XXX.XXX-XX
                  </p>
                </v-card-text>
              </v-card>
              <br />
                <v-row align="center">
                    <v-row justify="space-around">

                    <v-btn
                        color="success"
                        class="qrc-btn primary my-2 "
                        @click="validate"
                    >
                        <a href="./edit-user" style="text-decoration:none">Editar dados</a>
                    </v-btn>

                      <v-dialog v-model="dialog" persistent max-width="290">
                        <template v-slot:activator="{ on }">
                          <v-btn color="success"
                        class="qrc-btn primary my-2 " v-on="on">Apagar conta</v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="headline">Apagar a conta?</v-card-title>
                              <v-card-text>Se a conta for apagada, registros de compras serão deletados. Esta não poderá ser recuperada.</v-card-text>
                                <v-card-actions>
                                  <div class="flex-grow-1"></div>
                                  <v-btn color="success"
                        class="qrc-btn primary my-2 "  @click=none>Cancelar</v-btn>
                                  <v-btn color="success"
                        class="qrc-btn primary my-2 " @click=vueDelete>Confirmar</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-row>
                    </v-row>
          </div>
        <QrcFooter/>
    </v-content>
</template>

<script>
import Banner from './Banner.vue'
import CardUsuario from './CardUsuario.vue'
import Footer from '../LandingPage/Footer.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFooter": Footer,
        "QrcCardUsuario": CardUsuario,
    },
    // data: () => ({
    //   valid: true,
    //   name: '',
    //   email: '',
    //   password: '',
    //   telephone: '',
    //   cpf: '',
    // }),

    data () {
      return {
        dialog:false,
      }
    },
    methods: {
      edit () {
        if (this.$refs.form.edit()) {
          this.snackbar = true
        }
      },
      vueDelete () {
        this.$refs.delete()
      },
    },
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}

.form{
  justify-content: space-around;
  margin-left: 3%;
  margin-right: 3%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>