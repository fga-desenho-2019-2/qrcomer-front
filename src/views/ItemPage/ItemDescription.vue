<template>
    <div>
        <div class="qrc-image-area">
            <img class="qrc-image" :src="img"/>
        </div>
        <div class="qrc-description-area">
            <h5 class="qrc-style-font">{{name}}</h5>
            <p class="qrc-style-detail">{{details}}</p>
            <div class="qrc-price-area">
                <p class="qrc-detail-price">R$ {{value}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemDescription",
    props:{
        img: {
        required: true,
        type: String
        },
        name: {
            required: true,
            type: String
        },
        details: {
            required: true,
            type: String
        },
        value: {
            required: true,
            type: Number
        }
    }
}
</script>

<style lang="scss">
    .qrc-image-area{
        height: 40%;
        width: 100%;
        max-height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    .qrc-image{
        height: 40vw;
    }
    .qrc-style-font{
        margin-bottom: 0 !important;
        font-size: 14px;
    }
    .qrc-description-area{
        margin: 0 4vw;
        padding-bottom: 10px;
        border-bottom: 1px solid #C7C7C7;
        margin-bottom: 10px;
    }
    .qrc-style-detail{
        color: #797979;
        margin-bottom: 0 !important;
        font-size: 11px;
    }
    .qrc-price-area{
        display: flex;
        justify-content: flex-end;
    }
    .qrc-detail-price{
        color: #e18855;
        margin-bottom: 0 !important;
    }
</style>
