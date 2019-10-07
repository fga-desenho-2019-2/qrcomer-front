<template>
    <div class="card-shopping" >
        <img class="card-shopping__image" src="../../assets/images/shopping-img.png">
        <div class="card-shopping__card">
            <div class="card-shopping__card__text">
                <p class="card-shopping__card__text__title">Você está no {{ title }}</p>
                <p class="card-shopping__card__text__desc">{{ city }} - {{ state }}</p>
                <p class="card-shopping__card__text__desc">{{ neighborhood }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoppingCard",
    props: {
        title: {
            type: String,
            default: "Nome shopping"
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        neighborhood: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-shopping {
        width: 100vw;
        max-width: 1000px;
        height: 80vw;
        max-height: 300px;
        contain: content;
        display: flex;
        padding: 10px;
        margin: auto;
    
        &__image {
            position: absolute;
            height: 55%;
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
                height: 35%;
                width: 100%;
                align-self: flex-end;
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