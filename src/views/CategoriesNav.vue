<template>
    <div class="overlay" :class="navStatus">
        <div class="filter-nav">
            <img @click="handleNav" class="filter-nav__arrow" src="../assets/images/arrow.svg" />
            <p class="filter-nav__text">FILTRO</p>
        </div>
        <div class='restaurantCategories'>
            <div class="restaurantCategories__inputArea">
                <v-text-field class="restaurantCategories__inputArea__input" color="#000000" single-line label="O que você está procurando?" prepend-inner-icon="mdi-magnify"></v-text-field>
            </div>
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
import place from '../assets/images/search.svg'

export default {
        name: "CategoriesNav",
        components: {
            'CategorieCard': CategorieCard
        },
        data() {
            return {
                categories: [],
                icon: place
            }
        },
        props: {
            navStatus: {
                required: true,
                type: String
            },
            handleNav: {
                required: true,
                type: Function
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
        justify-content: center;

        &__text {
            font-size: 15px;
        }

        &__arrow {
            position: absolute;
            left: 10px;
            transform: rotate(180deg);
        }
    }

    .restaurantCategories {
        height: calc(100% - 50px);
        margin-top: 50px;

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

        &__inputArea {
            padding-top: 40px;

            &__input {
                width: 90vw;
                margin: auto;
                font-family: 'Lexend Deca', 'Roboto', sans-serif;
            }
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