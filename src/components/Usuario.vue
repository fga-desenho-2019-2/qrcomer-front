<template>
    <div class="qrc-usuario">
        <a
            target="_blank"
            class="qrc-usuario-link">
            <img
                :src="img"
                :alt="name">
        </a>
    </div>
</template>

<script>
export default {
    name: "Usuario",
    props: {
        name: {
            required: true,
            type: String,
        },
        img: {
            required: true,
            type: String,
        },
    }
}
</script>

<style lang="scss">
.qrc-usuario {
    height: 125px;
    width: 125px;
    display: flex;
    justify-content: center;
    background: transparent !important;
    margin: 20px;

    .qrc-usuario-link {
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: $c-white;
        font-size: 18px;
        font-weight: bold;
        padding: 30px;
        //box-shadow: 0 15px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        background: transparent ;

        

        img {
            object-fit: cover;
            border-radius: 0 20px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            height: 125%;
            width: 125%;
            box-shadow: 0 15px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
}

@media screen and (min-width: 360px) {
    .qrc-usuario {
        height: 140px;
        width: 140px;
    }
}

@media screen and (min-width: 400px) {
    .qrc-usuario {
        height: 160px;
        width: 160px;

        .qrc-usuario-text {
            font-size: 15px;
        }
    }
}

@media screen and (min-width: 640px) {
    .qrc-usuario {
        height: 180px;
        width: 180px;
    }
}

@media screen and (min-width: 900px) {
    .qrc-usuario {
        height: 200px;
        width: 200px;
    }
}

</style>