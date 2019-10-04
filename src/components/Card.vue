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
                    <p class="card-shopping__card__text__title">Você está no {{ title }}</p>
                    <p class="card-shopping__card__text__desc">{{ description }}</p>
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
            default: "restaurant"
        },
        title: {
            type: String,
            default: "Nome restaurante"
        },
        description: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
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
    width: 44vw;
    max-width: 200px;
    height: 44vw;
    max-height: 200px;
    background-color: #ffffff;
    border-radius: 0 15px;
    contain: content;
    box-shadow: 0 4px 10px $c-shadow;
    margin: 10px;

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
    width: 100vw;
    max-width: 1000px;
    height: 95vw;
    max-height: 400px;
    contain: content;
    display: flex;
    padding: 10px;
    margin: auto;
  
    &__image {
        position: absolute;
        height: 50%;
        right: 10px;
        z-index: 1;
    }

    &__card {
        width: 100%;
        height: 80%;
        background-color: #ffffff;
        bottom: 0;
        border-radius: 0px 0 0 15px;
        box-shadow: 0 4px 10px $c-shadow;
        align-self: flex-end;
        display: flex;

        &__text {
            height: 50%;
            width: 100%;
            align-self: flex-end;
            margin-top: 1.5em;
            margin-right: 1em;
            margin-bottom: 1em;
            margin-left: 1em;
            overflow: hidden;
            text-overflow: ellipsis;

            &__title {
                font-size: 16px;
                padding-bottom: 2%;
                contain: content;
                font-weight: bold;
            }

            &__desc {
                font-size: 12px;
                color: $c-gray70;
                word-wrap: break-word;
            }
        }
    }
}


</style>