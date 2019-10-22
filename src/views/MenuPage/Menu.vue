<template>
    <v-content class="d-flex flex-column pt-0" @scroll="handleScroll(isIntersecting)">
        <div>
            <QrcMenuBanner 
                    :key="banner.id"
                    :name="banner.name"
                    :nota="banner.nota"
                    :type="banner.type"
                    :time="banner.time"
                    :img="banner.img"/>
        </div>
        <div class="qrc-tabs-sticky">
            <QrcCategoryItem @scrollCategory="scrollToPlace($event)" :categories="categories" :categoryTab="isIntersecting"/>
        </div>
        <div class="category-area" v-for="(category, index) in categories"
                    :key="category.id"
                    :id="category.name">
            <h5 :id="category.id" class="category-title">{{category.name}}</h5>
            <div class="menu-itens">
                <QrcCardItem
                        v-for="item in categoriesData[index]"
                        :key="item.id"
                        :class="`item-${item.id}`"
                        :description="item.description"
                        :img="item.img"
                        :name="item.name"
                        :details="item.details"
                        :value="item.value"/>
            </div>
        </div>
    </v-content>
</template>

<script>

import CardItem from './CardItem.vue'
import MenuBanner from './MenuBanner.vue'
import CategoryItem from './CategoryItem.vue'

export default {
    data() {
            return {
                menu: [],
                banner: null,
                categories: [],
                isIntersecting: false,
                categoriesData: [],
            }
    },
    components: {
        "QrcCardItem": CardItem,
        "QrcCategoryItem": CategoryItem,
        "QrcMenuBanner": MenuBanner,
    },
    created(){
        this.getResult()
        this.categories.forEach(category => {
            let categoryList = this.filterItens(category.name)
            this.categoriesData.push(categoryList)
        });
    },
    methods: {
        scrollToPlace: function(id){
            let elmnt = document.getElementById(id)
            elmnt.scrollIntoView({behavior: "smooth"})
        },
        filterItens: function(category){
            let filteredMenu = this.menu.filter( (item) => {
                return item.category == category
            })
            return filteredMenu  
        },
        getResult: function (){
            this.menu = [
                {
                    id:1,
                    name: 'Combo Big Mac',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.19,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Hamburguer"
                },
                {
                    id:2,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Hamburguer"
                },
                {
                    id:3,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Hamburguer"
                },
                
                {
                    id:4,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Hamburguer"
                },
                
                {
                    id:5,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },
                
                {
                    id:6,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },
                
                {
                    id:7,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },
                
                {
                    id:8,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },
                
                {
                    id:9,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Bebida"
                },
                                {
                    id:10,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Hamburguer"
                },
                                {
                    id:11,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },
                                {
                    id:12,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },
                                {
                    id:13,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/item-page',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg'),
                    category: "Sorvete"
                },

            ]

            this.banner = {
                id: 1,
                img: require('@/assets/images/bannermc.svg'),
                name: "Mc Donalds",
                nota: "4.8",
                type: "Burguer",
                time: "15-40 min"
            }

            this.categories = [
                {
                    id: 0,
                    name: "Bebida"
                },
                {
                    id: 1,
                    name: "Hamburguer"
                },
                {
                    id: 2,
                    name: "Sorvete"
                }
            ]
        }
    },
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
.menu-itens{
    background: #EFEFEF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 4vw;
    justify-content: flex-start;
}
.category-title{
    margin-bottom: 0 !important;
    margin-left: 4vw;
}
.qrc-tabs-sticky{
    position: sticky;
    top: 0;
    z-index: 100;
}
.category-area{
    background-color: #EFEFEF;
}
</style>