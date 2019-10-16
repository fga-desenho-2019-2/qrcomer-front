<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <qrc-header />

            <!-- <QrcBag /> -->
        </div>
    </v-content>

</template>



<script>
import bag from './bag.vue';
import header from './Header.vue'

export default {
    components:{
        QrcBag: bag,
        QrcHeader: header
    }
};
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>

