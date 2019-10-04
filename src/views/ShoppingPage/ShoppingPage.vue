<template>
    <div class="shopping">
        <Card type="shopping" title="Shopping Park"  image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' ></Card>
        <div class="shopping__restaurants">
            <Card image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' title="Mcdonalds" description="$$ - Burguers" ></Card>
            <Card image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' title="Mcdonalds" description="$$ - Burguers"></Card>
            <Card image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' title="Mcdonalds" description="$$ - Burguers"></Card>
            <Card image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' title="Mcdonalds" description="$$ - Burguers"></Card>
            <Card image='https://nit.pt/wp-content/uploads/2019/04/5179b21fc1d50950b99b4eecaa48c614-754x394.jpg' title="Mcdonalds" description="$$ - Burguers"></Card>
        </div>
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

.shopping {
    
    &__restaurants {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;; 
    }
}

</style>