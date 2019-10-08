<template>
    <div class="overlay" :class="navStatus">
        <div class="filter-nav">
            <img/>
            <p>FILTRO</p>
        </div>
        <div class='restaurantCategories'>
            <h1>Categorias</h1>
            <v-input aria-placeholder="Pesquisar Categoria"></v-input>
            <div class="restaurantCategories__cards">
                <CategorieCard
                v-for="(category, index) in categories"
                :key="category.name + index" 
                :title="category.name"
                :icon="category.icon"
                />
            </div>
        </div>
    </div>
</template>

<script>

import CategorieCard from '../components/Cards/CategorieCard.vue'

export default {
        name: "CategoriesNav",
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
        props: {
            navStatus: {
                required: true,
                type: String
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
                        icon: require('../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../assets/images/icon_fastfood.png')
                    },
                    {
                        name: "Fast Food",
                        icon: require('../assets/images/icon_fastfood.png')
                    },
                ]
            }
        }
}

</script>

<style lang="scss" scoped>
    .filter-nav {
        position: absolute;
        top: 0%;
        width: 100%;
        height: 56px;
        background-color: $c-white;
        box-shadow: 0 4px 20px #0000001A;
        display: flex;
        align-items: center;
    }

    .restaurantCategories {
        height: calc(100% - 56px);
        margin-top: 56px;

        h1 {
            padding-top: .5em;
            padding-bottom: .5em;
            text-align: center;
        }

        &__cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    .overlay {
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        overflow-x: hidden;
        transition: 0.5s;
        background-color: $c-white;
    }

    .open {
        height: 100vh;
    }

    .closed {
        height: 0;
    }
</style>