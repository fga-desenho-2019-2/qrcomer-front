<template>
    <div>
        <div v-if="type === 'restaurant'" class="card-restaurant" >
            <div class='card-restaurant__image'>
                <img class='card-restaurant__image__content' :src='image' >
            </div>
            <div class="card-restaurant__content">
                <p class='card-restaurant__content__title'>{{ title }}</p>
                <p class='card-restaurant__content__desc'>{{ description }}</p>
                <p class='card-restaurant__content__order-time'>{{ orderTime }}</p>
            </div>
        </div>

        <div v-if="type === 'shopping'" class="card-shopping" >
            <img class="card-shopping__image" src="../assets/images/shopping-img.png">
            <div class="card-shopping__card">
                <div class="card-shopping__card__text">
                    <p class="card-shopping__card__text__title"></p>
                    <p class="card-shopping__card__text__desc"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        type: {
            type: String,
            default: "shopping"
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

.card-restaurant {
    width: 45vw;
    max-width: 200px;
    height: 45vw;
    max-height: 200px;
    background-color: #ffffff;
    border-radius: 0 15px;
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

.card-shopping {
    width: 95vw;
    max-width: 450px;
    height: 80vw;
    max-height: 380px;
    contain: content;
  
    &__image {
        position: absolute;
        height: 50%;
        right: 0;
        z-index: 1;
    }

    &__card {
        width: 100%;
        height: 80%;
        background-color: blue;
        position: absolute;
        bottom: 0;
        border-radius: 0px 0 0 15px;
        box-shadow: 0 4px 10px $c-shadow;

        &__text {

            &__title {

            }

            &__desc {

            }
        }
    }
}


</style>