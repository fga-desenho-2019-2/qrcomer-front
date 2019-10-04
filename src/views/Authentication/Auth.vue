<template>
    <v-content class="d-flex flex-column pt-0" id="auth">
        <div class="box-login pa-4 pa-sm-4 pa-md-6 pa-lg-8">
            <div class="d-flex" style="width: 100%;">
                <v-btn 
                    class="mx-2 mb-n3 second-color" 
                    fab 
                    text
                    @click="routeTo('/')">
                    <v-icon >mdi-arrow-left</v-icon>
                </v-btn>
                <transition name="slide-x-transition" mode="out-in" hide-on-leave>
                    <h2 v-if="loginType" key='loginText' class="main-color mb-0 mt-n2 text-center" style="width: 100%;">Faça o login</h2>
                    <h2 v-else key="cadastroText" class="main-color mb-0 mt-n2 text-center" style="width: 100%;">Cadastrar novo usuário</h2>
                </transition>
            </div>
            
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
                            <div v-if="loginType" key="login">
                                <v-text-field
                                    v-model="username"
                                    label="Nome de usuário"
                                    required
                                    hide-details
                                    outlined
                                    background-color="#efefef"
                                    class="input-shadow mb-4"
                                ></v-text-field>

                                <v-text-field
                                    v-model="password"
                                    label="Senha"
                                    required
                                    outlined
                                    type="password"
                                    background-color="#efefef"
                                    hide-details
                                    class="input-shadow mb-4"
                                ></v-text-field>

                                <v-btn
                                    href="#"
                                    block
                                    x-large
                                    class="qrc-btn primary my-2 mx-auto">
                                    <span class="mr-2">Cadastrar</span>
                                </v-btn>
                            </div>
                            <div v-else key="cadastro" class="flex-column">
                                <v-text-field
                                    v-model="username"
                                    label="Nome de usuário"
                                    required
                                    hide-details
                                    outlined
                                    background-color="#efefef"
                                    class="input-shadow mb-4"
                                ></v-text-field>

                                <v-text-field
                                    v-model="password"
                                    label="Senha"
                                    required
                                    outlined
                                    type="password"
                                    background-color="#efefef"
                                    hide-details
                                    class="input-shadow mb-4"
                                ></v-text-field>

                                <v-text-field
                                    v-model="email"
                                    label="E-mail"
                                    required
                                    outlined
                                    hide-details
                                    background-color="#efefef"
                                    class="input-shadow mb-4"
                                ></v-text-field>

                                <v-btn
                                    href="#"
                                    block
                                    x-large
                                    class="qrc-btn primary my-2 mx-auto">
                                    <span class="mr-2">Cadastrar</span>
                                </v-btn>
                            </div>
                        </transition>
                    </v-form>
                    <p>Talvez você esteja querendo <a href="#" @click="loginType = false" v-if="loginType"> criar uma conta?</a> <a href="#" @click="loginType = true" v-else> fazer login?</a></p>
                </v-col>
            </v-row>
        </div>
    </v-content>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            username: '',
            password: '',
            email: '',
            loginType: true,
        }
    },
    methods: {
        routeTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style lang="scss">
#auth {
    min-height: 100vh;
    background: linear-gradient(135deg, #eb4476, #e18855) !important;
    
    .v-content__wrap {
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