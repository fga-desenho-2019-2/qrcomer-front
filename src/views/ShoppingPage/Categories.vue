<template>
    <div class='restaurantCategories'>
        <h1>Categorias</h1>
        <v-input aria-placeholder="Pesquisar Categoria"></v-input>
        <div class="restaurantCategories__cards">
            <CategorieCard
            v-for="category in categories"
            :key="category.name" 
            :nome="category.name"
            :icon="category.icon"
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
                categories: {
                    type: Array
                }
            }
        },
        created () {
            this.getCategories();
        },
        methods: {
            getCategories: function () {
                this.categories = [
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/icon_fastfood.png')
                    },
                ]
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