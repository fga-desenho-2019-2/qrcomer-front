<template>
    <div class="categorie-card" >
        <img class="categorie-card__image" :src='icon'>
        <div class="categorie-card__card">
            <div class="categorie-card__card__text">
                <p class="categorie-card__card__text__title">{{ title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoppingCard",
    props: {
        icon: {
            type: String
        },
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
    .categorie-card {
        width: 50%;
        max-width: 1000px;
        height: 60vw;
        max-height: 400px;
        contain: content;
        display: flex;
        padding: 10px;
        margin: auto;
    
        &__image {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            height: 70%;
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
                margin-top: 1.5em;
                margin-right: 1em;
                margin-bottom: 1em;
                margin-left: 1em;
                overflow: hidden;
                text-overflow: ellipsis;

                &__title {
                    font-size: 18px;
                    padding-bottom: 2%;
                    contain: content;
                    font-weight: bold;
                }
            }
        }
    }
</style>