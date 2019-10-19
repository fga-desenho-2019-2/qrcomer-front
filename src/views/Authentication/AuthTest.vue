<template>
    <v-content class="d-flex flex-column pt-0" id="auth">
            <h2>Página de teste, somente se logado</h2>
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
                    const { username, password } = this
                    this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
                        this.$router.push('/') //Todo: redirecionar para outra página
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