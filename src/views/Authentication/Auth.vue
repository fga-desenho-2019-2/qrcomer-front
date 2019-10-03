<template>
    <v-content class="d-flex flex-column pt-0" id="auth">
        <div class="box-login pa-12">
            <v-row 
                class="box-login-internal" 
                align="center"
                justify="center">
                <v-col
                    class="d-flex "
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
                    <v-form v-model="valid">
                        <transition name="scroll-x-transition" mode="out-in" hide-on-leave>
                            <v-row v-if="loginType" key="login">
                                <v-col
                                cols="12">
                                    <v-text-field
                                        v-model="username"
                                        label="Nome de usuário"
                                        required
                                        hide-details
                                        outlined
                                        background-color="#efefef"
                                        class="input-shadow"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12">
                                    <v-text-field
                                        v-model="password"
                                        label="Senha"
                                        required
                                        outlined
                                        type="password"
                                        background-color="#efefef"
                                        hide-details
                                        class="input-shadow"
                                    ></v-text-field>
                                </v-col>

                                <!-- <v-col
                                cols="12">
                                    <v-text-field
                                        v-model="email"
                                        label="E-mail"
                                        required
                                        outlined
                                        hide-details
                                        background-color="#efefef"
                                        class="input-shadow"
                                    ></v-text-field>
                                </v-col> -->

                                <v-col
                                cols="12">
                                    <v-btn
                                        href="#"
                                        block
                                        x-large
                                        class="qrc-btn primary my-2 mx-auto">
                                        <span class="mr-2">Cadastrar</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row v-else key="cadastro">
                                <v-col
                                cols="12">
                                    <v-text-field
                                        v-model="username"
                                        label="Nome de usuário"
                                        required
                                        hide-details
                                        outlined
                                        background-color="#efefef"
                                        class="input-shadow"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12">
                                    <v-text-field
                                        v-model="password"
                                        label="Senha"
                                        required
                                        outlined
                                        type="password"
                                        background-color="#efefef"
                                        hide-details
                                        class="input-shadow"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12">
                                    <v-text-field
                                        v-model="email"
                                        label="E-mail"
                                        required
                                        outlined
                                        hide-details
                                        background-color="#efefef"
                                        class="input-shadow"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12">
                                    <v-btn
                                        href="#"
                                        block
                                        x-large
                                        class="qrc-btn primary my-2 mx-auto">
                                        <span class="mr-2">Cadastrar</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
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
    }
}
</script>

<style lang="scss">
#auth {
    min-height: 100vh;
    background: linear-gradient(135deg, #eb4476, #e18855);
    
    .v-content__wrap {
        align-items: center;
        justify-content: center;

        .box-login {
            height: 60vh;
            min-height: 500px;
            min-width: 500px;
            display: flex;
            align-items: center;
            width: 50vw;
            background: $c-true-white;
            border-radius: 0 20px;
            box-shadow: 1px 1px 12px -3px $c-gray70;

            .box-login-internal {
                height: 100%;
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    
}
</style>