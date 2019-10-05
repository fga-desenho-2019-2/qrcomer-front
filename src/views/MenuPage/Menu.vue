<template>
    <v-content class="d-flex flex-column pt-0">
        <div class="color-back">
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

export default {
data() {
        return {
            menu: [
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
                }
            ]
        }
    },
    components: {
        "QrcCardItem": CardItem
    }
}
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
.color-back{
    background: #EFEFEF;
}
</style>