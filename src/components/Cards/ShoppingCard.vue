<template>
    <div class="card-shopping" >
        <img class="card-shopping__image" src="../../assets/images/shopping-img.png">
        <div class="card-shopping__card">
            <div class="card-shopping__card__text">
                <p class="card-shopping__card__text__title">Você está no {{ title }}</p>
                <p class="card-shopping__card__text__desc">{{ description }}</p>
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
        description: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }
    }
}
</script>

<style lang="scss" scoped>
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