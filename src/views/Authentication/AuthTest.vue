<template>
    <v-content class="d-flex flex-column pt-0" id="auth-test">
            <h2>Página de teste, somente se logado</h2>
    </v-content>
</template>

<script>
export default {
    data() { 
        return {}
    }
}
</script>

<style lang="scss">
#auth-test {
    background: $c-true-white;
    margin-top: 56px;
    
    .v-content__wrap {
        margin-top: 20px;
        align-items: center;
        justify-content: center;
    }
}
</style>