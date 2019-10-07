<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>
            <QrcUsuario/>
            <v-row align="center">
                    <v-row class="form">
                    <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
                    >
                    <v-text-field
                        v-model="name"
                        :counter="50"
                        :rules="nameRules"
                        label="Seu nome"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Seu e-mail"
                        required
                    ></v-text-field>

                        <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Sua senha"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="telephone"
                        :rules="telephoneRules"
                        label="Seu telefone"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="cpf"
                        :rules="cpfRules"
                        label="Seu CPF"
                        required
                    ></v-text-field>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="qrc-btn primary my-2 mx-auto"
                        @click="validate"
                    >
                        Atualizar
                    </v-btn>

                    <v-btn
                        color="error"
                        class="qrc-btn primary my-2 mx-auto"
                        @click="reset"
                    >
                        Apagar dados
                    </v-btn>
                    </v-form>
                    </v-row>
                </v-row>
        </div>
    </v-content>
</template>

<script>
import Banner from './Banner.vue'
import CardUsuario from './CardUsuario.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcUsuario": CardUsuario,
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

.form{
  justify-content: space-around;
  margin-left: 3%;
  margin-right: 3%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>