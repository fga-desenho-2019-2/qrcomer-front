<template>
    <div class='restaurantCategories'>
        <h1>Cateorias</h1>
        <v-input aria-placeholder="Pesquisar Categoria"></v-input>
        <div class="restaurantCategories__cards">
            <CategorieCard 
            nome='Fast Food'
            :icon='icon'
        />
        <CategorieCard 
            nome='Fast Food'
            :icon='icon'
        />
        <CategorieCard 
            nome='Fast Food'
            :icon='icon'
        />
        <CategorieCard 
            nome='Fast Food'
            :icon='icon'
        />
        <CategorieCard 
            nome='Fast Food'
            :icon='icon'
        />
        <CategorieCard 
            nome='Fast Food'
            :icon='icon'
        />
        </div>
    </div>
</template>

<script>

import CategorieCard from '../../components/Cards/CategorieCard.vue'

export default {
        components: {
            'CategorieCard': CategorieCard
        },
        data() {
            return {
                icon: require('../../assets/images/icon_fastfood.png')
            }
        }
}

</script>

<style lang="scss" scoped>
    .restaurantCategories {
        h1 {
            padding-top: .5em;
            padding-bottom: .5em;
            text-align: center;
        }

        &__cards {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>