<template>
    <v-content class="d-flex flex-column pt-0" @scroll="handleScroll(isIntersecting)">
        <div v-if="banner" >
            <QrcMenuBanner
                    :name="banner.name"
                    :nota="banner.note"
                    :type="banner.description"
                    :time="banner.orderTime"
                    :img="banner.image"/>
        </div>
        <div v-if="categories.length > 0" class="qrc-tabs-sticky">
            <QrcCategoryNav @scrollCategory="scrollToPlace($event)" :categories="categories" :categoryTab="isIntersecting"/>
        </div>
        <div>
            <div class="category-area" v-for="(category, index) in categories"
                        :key="category.id"
                        :id="category.name">
                <h5 :id="category.id" class="category-title">{{category.name}}</h5>
                <div class="menu-itens">
                    <QrcCardItem
                            v-for="(item) in categoriesData[index]"
                            :key="item.id"
                            :class="`item-${item.id}`"
                            :id="item.id"
                            :img="item.img"
                            :name="item.name"
                            :details="item.details"
                            :value="item.value"
                            @itemClick="pageHandler($event)"/>
                </div>
            </div>
        </div>
    </v-content>
</template>

<script>

import ItemCard from '../../components/Cards/ItemCard'
import MenuBanner from './MenuBanner.vue'
import CategoryNav from './CategoryNav.vue'
import Services from '../../services/ServicesFacade'

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
        "QrcCardItem": ItemCard,
        "QrcCategoryNav": CategoryNav,
        "QrcMenuBanner": MenuBanner,
    },
    created(){
        this.setUp();
    },
    methods: {
        setUp: async function () {
            this.menu = await Services.getRestaurantMenu();
            this.banner = await Services.getRestaurant(0);
            this.categories = await Services.getRestaurantCategories();
            this.categories.forEach(category => {
                let categoryList = this.filterItens(category.name)
                this.categoriesData.push(categoryList)
            });
        },
        pageHandler: function(itemId) {
            this.$router.replace({ path: `/item/${itemId}` });
        },
        scrollToPlace: function(id){
            let elmnt = document.getElementById(id)
            elmnt.scrollIntoView({behavior: "smooth"})
        },
        filterItens: function(category){
            let filteredMenu = this.menu.filter( (item) => {
                return item.category == category
            })
            return filteredMenu  
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