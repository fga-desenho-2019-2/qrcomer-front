<template>
    <div class="qrc-color">
        <QrcItemDescription :key="item.id" 
        :img="item.img"
        :name="item.name"
        :details="item.details"
        :value="item.value"/>
    </div>
</template>


<script>
import ItemDescription from './ItemDescription.vue'

export default {
    data(){
        return {
            item: null,
        }
    },
    components: {
        "QrcItemDescription": ItemDescription,
    },
    props: {

    },
    created(){
        this.getResult()
    },
    methods: {
        getResult: function(){
            this.item = {
                id:1,
                name: 'Combo Big Mac',
                description: 'http://localhost:8080/',
                details: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
                value: 22.19,
                img: require('@/assets/images/bigmac.svg'),
                category: "Hamburguer"
            }
        }
    }
}
</script>

<style lang="scss">
    .qrc-color{
        background-color: #EFEFEF;
    }
</style>