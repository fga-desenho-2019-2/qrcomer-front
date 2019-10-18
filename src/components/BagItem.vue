<template>
    <div class="qrc-bag-item">
        <p class="qrc-bag-item__text mb-0">Big Mac</p>
        <div class="qrc-bag-item__image">
            <img src="@/assets/images/minus.svg" />
            <span>1</span>
            <img src="@/assets/images/plus.svg" />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.qrc-bag-item{
    width: 100%;    
    height: 40px;
    display: flex;
    align-items: center;
    // margin-bottom: 5px;

   &__text{
        width: 80%;
        float: left;
        color: #797979;
    }

    &__image {
        width: 20%;
        float: right;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
}
</style>