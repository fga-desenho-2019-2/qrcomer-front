<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBanner/>        
            <QrcCardUsuario/>
                <form>
                    <div>
                        <label for="name">Seu nome</label>
                        <input type="text" id="name" name="name">
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
                        <label for="telephone">Seu telefone</label>
                        <input type="telephone" id="telephone" name="telephone">
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
// import ProfileInfo from './ProfileInfo.vue'

export default {
    components: {
        "QrcBanner": Banner,
        "QrcFooter": Footer,
        "QrcUsuario": CardUsuario,
        // "QrcInfo": ProfileInfo,
        }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>