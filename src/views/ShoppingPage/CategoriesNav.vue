<template>
    <div class="overlay" :class="navStatus">
        <div class="filter-nav">
            <img @click="handleNav" class="filter-nav__arrow" src="../../assets/images/arrow.svg" />
            <p class="filter-nav__text">FILTRO</p>
        </div>
        <div class='restaurant-filtering'>
            <div class="restaurant-filtering__inputArea">
                <v-text-field
                    class="restaurant-filtering__inputArea__input"
                    color="#000000"
                    single-line
                    label="Procura algum restaurante?"
                    prepend-inner-icon="mdi-magnify"
                    @focus="handleFocus"
                    @blur="handleFocus"
                    v-model="searchWords"
                ></v-text-field>
            </div>
            <div v-if="showCategories" class="restaurant-filtering__cards">
                <CategorieCard
                v-for="(category, index) in categories"
                :key="category.name + index" 
                :title="category.name"
                :icon="category.icon"
                />
            </div>
            <div v-else class="restaurant-filtering__restaurants"> 
                <div v-for="restaurant in filteredRestaurants" :key="restaurant.cnpj" class="restaurant-filtering__restaurants__restaurant" >
                    <p>{{ restaurant.name }}</p>
                </div>
            </div>
            <div v-if="filteredRestaurants.length === 0" class="restaurant-filtering__warning"> 
                <h5>Não há restaurentes com esse nome</h5>
            </div>
        </div>
    </div>
</template>

<script>

import CategorieCard from '../../components/Cards/CategorieCard.vue'

export default {
        name: "CategoriesNav",
        components: {
            'CategorieCard': CategorieCard
        },
        data() {
            return {
                categories: [],
                isFocused: false,
                searchWords: "",
                showCategories: true,
                filteredRestaurants: this.restaurants
            }
        },
        watch : {
            searchWords(value) {
                if(this.isFocused && value.length > 0) {
                    this.showCategories = false;
                    this.filterRestaurants(value);
                }
                else {
                    this.showCategories = true;
                }
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
            },
            restaurants: {
                required: true,
                type: Array
            }
        },
        created () {
            this.getCategories();
        },
        methods: {
            goToCategorie: function (categorie) {
                console.log('a');
                // let url = "/categorie/" + categorie;
                // this.$router.push(url);
            },
            filterRestaurants: function (search) {
                if(this.restaurants) {
                    this.filteredRestaurants = this.restaurants.filter(restaurant => {
                        return restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? true : false;
                    })
                }
            },
            handleFocus: function () {
                this.isFocused = !this.isFocused;
            },
            getCategories: function () {
                this.categories = [
                    {
                        name: "Fast Food",
                        icon: require('../../assets/images/categories/fastfood.png')
                    },
                    {
                        name: "Japonesa",
                        icon: require('../../assets/images/categories/japones.png')
                    },
                    {
                        name: "Mexicana",
                        icon: require('../../assets/images/categories/mexicana.png')
                    },
                    {
                        name: "Pizza",
                        icon: require('../../assets/images/categories/pizzas.png')
                    },
                ]
            }
        }
}

</script>

<style lang="scss" scoped>
    .filter-nav {
        position: sticky;
        top: 0%;
        width: 100%;
        height: 56px;
        background-color: $c-white;
        box-shadow: 0 4px 20px #0000001A;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;

        &__text {
            font-size: 15px;
        }

        &__arrow {
            position: absolute;
            left: 10px;
            transform: rotate(180deg);
        }
    }

    .restaurant-filtering {
        height: calc(100% - 50px);
        background-color: $c-white;

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
            position: sticky;
            top: 56px;
            background-color: $c-white;
            z-index: 2;

            &__input {
                width: 90vw;
                margin: auto;
                font-family: 'Lexend Deca', 'Roboto', sans-serif;
            }
        }

        &__restaurants {

            &__restaurant {
                padding: 15px 0;
                margin: 0 15px;
                border-bottom: 1px solid $c-black;
            }
        }

        &__warning {
            color: $c-gray50;
            padding: 15px;
            text-align: center;
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