<template>
    <div class="card" >
        <div class='card-image'>
            <img class='image-content' :src='image' >
        </div>
        <div class="card-content">
            <p class='card-title'>{{ title }}</p>
            <p class='card-desc'>{{ description }}</p>
            <p class='order-time'>{{ type }}</p>
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
            default: "Title"
        },
        description: {
            type: String,
            default: ""
        },
        image: {
            type: String
        }
    }
}
</script>

<style lang="scss">
.card {
    width: 18em;
    height: 18em;
    border: 1px solid purple;
    background-color: $c-gray10;
    border-radius: 0 15px 0 15px;
    contain: content;

    .card-image, .card-content {
        height: 50%;
        width: 100%;
        contain: content;

        .image-content {
            max-width: 100%;
        }
    }

    .card-content {
        box-shadow: 0 -1px 15px 1px $c-gray80;
        .card-title {
            font-weight: bold;
            font-size: 1.2em;
        }
    }
}


@media screen and (min-width: 360px) {
    .qrc-membro {
        height: 140px;
        width: 140px;

        .qrc-membro-text {
            font-size: 12px;
        }
    }
}

@media screen and (min-width: 400px) {
    .qrc-membro {
        height: 160px;
        width: 160px;

        .qrc-membro-text {
            font-size: 15px;
        }
    }
}

@media screen and (min-width: 640px) {
    .qrc-membro {
        height: 180px;
        width: 180px;
    }
}

@media screen and (min-width: 900px) {
    .qrc-membro {
        height: 200px;
        width: 200px;
    }
}

</style>