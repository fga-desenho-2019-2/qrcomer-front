<template>
    <v-content class="d-flex flex-column pt-0" id="auth">
            <transition name="slide-x-transition" mode="out-in" hide-on-leave>
                <h3 v-if="loginType" key='loginText' class="main-color mb-0 mt-n2 text-center" style="width: 100%;">Faça o login</h3>
                <h3 v-else key="cadastroText" class="mb-0 mt-n2 text-center" style="width: 100%;">Faça seu <span class="main-color">cadastro</span> =)</h3>
            </transition>

            <v-row
                class="box-login-internal"
                align="center"
                justify="center">
                <v-col
                    class="d-none d-sm-none d-md-flex d-lg-flex"
                    cols=12
                    sm=12
                    md=6
                    lg=6>
                    <img
                        src="~@/assets/images/QRComer.png"
                        alt="Logo"
                        class="form-image ma-auto">
                </v-col>
                <v-col
                    cols=12
                    sm=12
                    md=6
                    lg=6>
                    <v-form v-model="valid" ref="form">
                        <transition name="slide-x-transition" mode="out-in">
                            <div class="flex-column">
                                <div v-if="loginType">
                                    <v-text-field
                                        v-model="email"
                                        label="E-mail"
                                        required
                                        :rules="emptyRule"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        label="Senha"
                                        required
                                        :rules="emptyRule"
                                        type="password"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>
                                </div>

                                <div v-else>
                                    <v-text-field
                                        v-model="cpf"
                                        label="CPF"
                                        required
                                        :rules="emptyRule"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        label="Senha"
                                        required
                                        :rules="emptyRule"
                                        type="password"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>

                                    <v-dialog
                                        ref="dialog"
                                        v-model="modal"
                                        :return-value.sync="date"
                                        persistent
                                        width="290px">
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                v-model="birth_date"
                                                label="Data de nascimento"
                                                readonly
                                                background-color="#fff"
                                                class="mb-4"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="birth_date" type="date" scrollable>
                                            <div class="flex-grow-1"></div>
                                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>

                                    <v-text-field
                                        v-model="sexo"
                                        label="Sexo"
                                        required
                                        :rules="emptyRule"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="email"
                                        label="E-mail"
                                        required
                                        :rules="emptyRule"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="first_name"
                                        label="First Name"
                                        required
                                        :rules="emptyRule"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="last_name"
                                        label="Last Name"
                                        required
                                        :rules="emptyRule"
                                        background-color="#fff"
                                        class="mb-4"
                                    ></v-text-field>
                                </div>
                                <v-btn
                                    href="#"
                                    block
                                    x-large
                                    @click="login"
                                    class="qrc-btn primary my-2 mx-auto">
                                    <span class="mr-2">Cadastrar</span>
                                </v-btn>
                            </div>
                        </transition>
                    </v-form>
                    <p>Talvez você esteja querendo <a href="#" @click="loginType = false" v-if="loginType"> criar uma conta?</a> <a href="#" @click="loginType = true" v-else> fazer login?</a></p>
                </v-col>
            </v-row>
    </v-content>
</template>

<script>
import AuthService from '../../services/auth'

let auth = new AuthService();

export default {
    data() {
        return {
            valid: false,
            cpf: '',
            password: '',
            birth_date: '',
            sexo: '',
            email: '',
            first_name: '',
            last_name: '',
            emptyRule: [
                v => !!v || 'Name is required',
            ],
            username: '',
            loginType: false,
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
        }
    },
    methods: {
        routeTo(route) {
            this.$router.push(route);
        },
        login: async function() {

            if (this.$refs.form.validate()) {
                if (this.loginType) {
                    const { email, password } = this
                    this.$store.dispatch('auth/AUTH_REQUEST', { email, password }).then(() => {
                        this.$router.push('/auth_test') //Todo: redirecionar para outra página
                    })
                } else {
                    console.log('teste')
                    let body = {
                        cpf: this.cpf,
                        password: this.password,
                        birth_date: this.birth_date,
                        sex: this.sexo,
                        email: this.email,
                        first_name: this.first_name,
                        last_name: this.last_name,
                    }
                    console.log(body)
                    let response = await auth.signUser(body)

                    console.log(response)
                }
            }
        }
    }
}
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
            min-height: 400px;
            min-width: 750px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: $c-true-white;
            border-radius: 0 20px;
            box-shadow: 1px 1px 12px -3px $c-gray70;

            .box-login-internal {
                height: 100%;
                width: 100%;
            }

            .form-image {
                width: 190px;
            }
        }

        @media screen and (max-width: 480px){
            .box-login {
                height: 95vh;
                width: 95vw;
                min-width: auto;
            }
        }
    }
}
</style>