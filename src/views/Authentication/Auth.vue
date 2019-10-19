<template>
    <v-content class="d-flex flex-column pt-0" id="auth">
            <transition name="slide-x-transition" mode="out-in" hide-on-leave>
                <h3 v-if="loginType" key='loginText' class="main-color mb-0 mt-n2 text-center" style="width: 100%;">Faça o login</h3>
                <h3 v-else key="cadastroText" class="mb-0 mt-n2 text-center" style="width: 100%;">Faça seu <span class="main-color">cadastro</span> =)</h3>
            </transition>

            <v-row
                class="box-login">
                <v-col
                    class="d-flex flex-column"
                    cols=12
                    sm=12
                    md=6
                    lg=6>
                    <v-form v-model="valid" ref="form">
                        <div class="flex-column">
                            <transition name="slide-x-transition" mode="out-in">
                                <div v-if="loginType" key="login">
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

                                    <v-btn
                                        href="#"
                                        block
                                        x-large
                                        @click="login"
                                        class="qrc-btn primary my-2 mx-auto">
                                        <span class="mr-2">Entrar</span>
                                    </v-btn>
                                </div>

                                <div v-else key="cadastro">
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

                                    <v-text-field
                                        v-model="cpf"
                                        label="CPF"
                                        required
                                        :rules="emptyRule"
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
                                        <v-date-picker v-model="birth_date" type="date" scrollable locale="pt-br">
                                            <div class="flex-grow-1"></div>
                                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>

                                    <v-select
                                        v-model="selectedSexo"
                                        :items="sexo"
                                        label="Selecione o sexo"
                                    ></v-select>

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
                            
                        </div>
                    </v-form>
                    <p class="mt-auto">Talvez você esteja querendo 
                        <a href="#" @click="routeTo({ path: '/auth', query: { loginType: false }})" v-if="loginType"> criar uma conta?</a> 
                        <a href="#" @click="routeTo({ path: '/auth', query: { loginType: true }})" v-else> fazer login? </a>
                    </p>
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
            selectedSexo: {},
            sexo: [
                {text: 'Masculino', value: 'm'},
                {text: 'Feminino', value: 'f'}
            ],
            email: '',
            first_name: '',
            last_name: '',
            emptyRule: [
                v => !!v || 'Field is required',
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
            this.$router.push(route).catch(err => {});
        },
        async login() {
            if (this.$refs.form.validate()) {
                if (this.loginType) {
                    this.loginUser();
                } else {
                    await this.registerUser();
                    this.loginUser();
                }
            }
        },
        loginUser() {
            const { email, password } = this
            this.$store.dispatch('auth/AUTH_REQUEST', { email, password }).then(() => {
                this.$router.push('/auth_test') //Todo: redirecionar para outra página
            })
        },
        async registerUser() {
            let body = {
                cpf: this.cpf,
                password: this.password,
                birth_date: this.birth_date,
                sex: this.selectedSexo,
                email: this.email,
                first_name: this.first_name,
                last_name: this.last_name,
            }
            console.log(body)
            try {
                await auth.signUser(body)
                this.routeTo('/')
            } catch(err) {
                return
            }
            
            
        }
    },
    watch: {
        '$route.query.loginType': {
            handler: function(loginType) {
                this.loginType = loginType
            },
        }
    },
    created() {
        this.$route.query.loginType ? this.loginType = true : this.loginType = false
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