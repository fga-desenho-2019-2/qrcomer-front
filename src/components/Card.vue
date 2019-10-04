<template>
    <div class="card" >
        <div class='card__image'>
            <img class='card__image__content' :src='image' >
        </div>
        <div class="card__content">
            <p class='card__content__title'>{{ title }}</p>
            <p class='card__content__desc'>{{ description }}</p>
            <p class='card__content__order-time'>{{ orderTime }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        type: {
            type: String,
            default: "restaurant"
        },
        title: {
            type: String,
            default: "Nome restaurante"
        },
        description: {
            type: String,
            default: "$ - Categoria"
        },
        orderTime: {
            type: String,
            default: "15-20 min"
        },
        image: {
            type: String
        }
    }
}
</script>

<style lang="scss">

$title-size: 14px;
$desc-size: 12px;

.card {
    width: 45vw;
    max-width: 200px;
    height: 45vw;
    max-height: 200px;
    background-color: $c-white;
    border-radius: 0 15px 0 15px;
    contain: content;
    box-shadow: 0 4px 10px $c-shadow;

    &__image {
        height: 45%;
        width: 100%;
        contain: content;

        &__content{
            max-width: 100%;
        }
    }

    &__content {
        height: 55%;
        width: 100%;
        contain: content;
        box-shadow: 0 -1px 15px 1px $c-gray80;
        padding: 5%;
        
        &__title {
            font-size: $title-size;
            contain: content;
        }

        &__desc {
            font-size: $desc-size;
            color: $c-gray70;
            contain: content;
        }

        &__order-time {
            position: absolute;
            bottom: 5%;
            right: 5%;
            font-size: $desc-size;
            color: $c-gray70;
            text-align: end;        
        }
    }
}


</style>