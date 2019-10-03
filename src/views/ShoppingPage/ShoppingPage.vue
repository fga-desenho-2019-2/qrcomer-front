<template>
    <div class='hola'>
        <h1>Qualquer coisa aqui pra ver o q acontece</h1>
        <Card image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' ></Card>
    </div>
</template>

<script>
import Card from '../../components/Card'

export default {
    components: {
        'Card': Card
    }
}
</script>

<style lang="scss">
.hola {
    width: 100%;
    border: 1px solid red;
    padding: 5em;
}
</style>