<template>
  <div>
  <Navbar />
      <v-content class="d-flex flex-column pt-0" id="auth">
        <transition name="slide-x-transition" mode="out-in" hide-on-leave>
          <h3 v-if="loginType" key="loginText" class="mb-0 mt-n2 text-center" style="width: 100%;">
            Faça o
            <span class="main-color">login</span> =)
          </h3>
          <h3 v-else key="cadastroText" class="mb-0 mt-n2 text-center" style="width: 100%;">
            Faça seu
            <span class="main-color">cadastro</span> =)
          </h3>
        </transition>

        <v-row class="box-login">
          <v-col class="d-flex flex-column" cols="12" sm="12" md="6" lg="6">
            <v-form v-model="valid" ref="form">
              <div class="flex-column">
                <transition name="slide-x-transition" mode="out-in">
                  <div v-if="loginType" key="login">
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      required
                      :rules="emptyRule"
                      :error="!!errors.email"
                      :error-messages="errors"
                      background-color="#fff"
                      class="mb-4"
                      color="#e18855"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      label="Senha"
                      required
                      :rules="emptyRule"
                      :error="!!errors.password"
                      type="password"
                      background-color="#fff"
                      class="mb-4"
                      color="#e18855"
                    ></v-text-field>

                    <v-btn
                      href="#"
                      block
                      x-large
                      @click="login"
                      class="qrc-btn primary my-2 mx-auto"
                    >
                      <span class="mr-2">Entrar</span>
                    </v-btn>
                  </div>

                  <div v-else key="cadastro">
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      :error="!!errors.email"
                      :error-messages="errors.email"
                      required
                      :rules="emptyRule"
                      background-color="#fff"
                      class="mb-4"
                      color="#e18855"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      label="Senha"
                      required
                      :error="!!errors.password"
                      :error-messages="errors.password"
                      :rules="emptyRule"
                      type="password"
                      background-color="#fff"
                      class="mb-4"
                      color="#e18855"
                    ></v-text-field>

                    <v-text-field
                      v-model="cpf"
                      label="CPF"
                      required
                      v-mask="'###.###.###-##'"
                      :error="!!errors.cpf"
                      :error-messages="errors.cpf"
                      :rules="emptyRule"
                      background-color="#fff"
                      class="mb-4"
                      color="#e18855"
                    ></v-text-field>

                    <v-btn
                      href="#"
                      block
                      x-large
                      @click="login"
                      class="qrc-btn primary my-2 mx-auto"
                    >
                      <span class="mr-2">Cadastrar</span>
                    </v-btn>
                  </div>
                </transition>
              </div>
            </v-form>
            <p class="mt-auto">
              Talvez você esteja querendo
              <a
                href="#"
                @click="routeTo('/auth/register')"
                v-if="loginType"
              >criar uma conta?</a>
              <a
                href="#"
                @click="routeTo('/auth/login')"
                v-else
              >fazer login?</a>
            </p>
          </v-col>
        </v-row>
      </v-content>
  </div>
</template>

<script>
import {
  routeTo,
  login,
  loginUser,
  registerUser
} from "../../services/context";
import Navbar from "../../components/Navbar";

export default {
  data() {
    return {
      valid: false,
      cpf: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      emptyRule: [v => !!v || "Campo obrigatório"],
      username: "",
      loginType: false,
      menu: false,
      modal: false,
      errors: []
    };
  },
  components: {
    Navbar
  },
  methods: {
    routeTo,
    login,
    loginUser,
    registerUser
  },
  watch: {
    "$route.params": {
      handler: function(loginType) {
        this.loginType = loginType;
      },
    }
  },
  created() {
    if (this.$route.params.type === "login" ) {
        this.loginType = true
    }else {
        this.loginType = false
    }
  }
};
</script>
<style lang="scss">
#auth {
  background: $c-true-white;
  margin-top: 56px;

  .v-content__wrap {
    margin-top: 20px;
    align-items: center;
    justify-content: center;

    .box-login {
      display: flex;
      width: 100%;
      padding: 0 20px;
      flex-direction: column;
      align-items: center;
      background: $c-true-white;
    }
  }
}
</style>