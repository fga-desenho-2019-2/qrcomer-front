<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>        
            <QrcUsuario/>
                <form>
                    <div>
                        <label for="name">Seu nome</label>
                        <input type="name" id="name" name="name">
                    </div>    
                    <div>
                        <label for="email">Seu e-mail</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div>
                        <label for="password">Sua senha</label>
                        <input type="password" id="password" name="password">
                    </div>
                    <div>
                        <label for="phone">Seu telefone</label>
                        <input type="phone" id="phone" name="phone">
                    </div>
                     <div>
                        <label for="cpf">Seu CPF</label>
                        <input type="cpf" id="cpf" name="cpf">
                    </div>
                    <div><button type="submit">ATUALIZAR</button></div>
                </form>  
            <QrcFooter/>
        </div>
    </v-content>
</template>

<script>
import Footer from '../LandingPage/Footer.vue'
import Banner from './Banner.vue'
import CardUsuario from './CardUsuario.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFooter": Footer,
        "QrcUsuario": CardUsuario,
        }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>