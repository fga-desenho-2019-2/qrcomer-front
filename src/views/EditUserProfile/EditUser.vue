<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>
            <QrcEditUsuario/>
            <v-row align="center">
                    <v-row justify="space-around">
                    <v-form
                    ref="form"
                    v-model="valid"
                    >
                    <v-text-field
                        v-model="name"
                        :counter="50"
                        :rules="nameRules"
                        label="Nome"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>

                        <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Senha"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="telephone"
                        :rules="telephoneRules"
                        label="Telefone"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="cpf"
                        :rules="cpfRules"
                        label="CPF"
                        required
                    ></v-text-field>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="qrc-btn primary my-2 "
                        @click="validate"
                    >
                        Confirmar
                    </v-btn>

                    <v-btn
                        color="error"
                        class="qrc-btn primary my-2 "
                        @click="reset"
                    >
                        Apagar dados
                    </v-btn>


                    </v-form>
                    </v-row>
                </v-row>
        </div>
            <QrcFooter/>
    </v-content>
</template>

<script>
import Footer from '../LandingPage/Footer.vue'
import Banner from './Banner.vue'
import EditUsuario from './EditUsuario.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFooter": Footer,
        "QrcEditUsuario": EditUsuario,
    },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be bigger than 8 characters',
      ],
      telephone: '',
      telefoneRules: [
        v => !!v || 'Telephone is required',
        v => /.+@.+\..+/.test(v) || 'Telephone must be valid',
      ],
      cpf: '',
      cpfRules: [
        v => !!v || 'CPF is required',
        v => /.+@.+\..+/.test(v) || 'CPF must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
}
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

</style>