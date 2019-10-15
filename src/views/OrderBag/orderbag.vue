<template>
    <v-content class="d-flex flex-column pt-0">
        <div>
            <QrcBag />
        </div>
    </v-content>

</template>



<script>
import bag from './bag.vue';

export default {
    components:{
        QrcBag: bag,
    }
};
</script>

<style lang="scss">
.v-content__wrap {
    display: flex;
    flex-direction: column;
}
</style>

