<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcMenuBanner 
                    :key="banner.id"
                    :name="banner.name"
                    :nota="banner.nota"
                    :type="banner.type"
                    :time="banner.time"
                    :img="banner.img"/>
        </div>
        <div class="menu-itens">
            <QrcCardItem 
                    v-for="item in menu"
                    :key="item.id"
                    :class="`item-${item.id}`"
                    :description="item.description"
                    :img="item.img"
                    :name="item.name"
                    :details="item.details"
                    :value="item.value"/>
        </div>
    </v-content>
</template>

<script>

import CardItem from './CardItem.vue'
import MenuBanner from './MenuBanner.vue'

export default {
data() {
        return {
            menu: [],
            banner: null
        }
    },
    components: {
        "QrcCardItem": CardItem,
        "QrcMenuBanner": MenuBanner
    },
    created(){
      this.getResult()  
    },
    methods: {
        getResult: function (){
            this.menu = [
                {
                    id:1,
                    name: 'Combo Big Mac',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.19,
                    img: require('@/assets/images/bigmac.svg')
                },
                {
                    id:2,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                {
                    id:3,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                
                {
                    id:4,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                
                {
                    id:5,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                
                {
                    id:6,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                
                {
                    id:7,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                
                {
                    id:8,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                },
                
                {
                    id:9,
                    name: 'Quarteirão',
                    description: 'http://localhost:8080/',
                    details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                    value: 22.10,
                    img: require('@/assets/images/bigmac.svg')
                }

            ]

            this.banner = {
                id: 1,
                img: require('@/assets/images/bannermc.svg'),
                name: "Mc Donalds",
                nota: "4.8",
                type: "Burguer",
                time: "15-40 min"
            }
        }
    }
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
}


</style>