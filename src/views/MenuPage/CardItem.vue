<template>
    <div class="qrc-item">
        <a 
            :href="description" 
            target="_blank" 
            class="qrc-item-link">
            <img 
                :src="img" 
                :alt="name">
            <p class="qrc-item-name">{{name}}</p>
            <p class="qrc-item-description"> {{details}}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "Membro",
    props: {
        description: {
            required: true,
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        img: {
            required: true,
            type: String,
        },
        details: {
            required: true,
            type: String,
        }
    }
}
</script>

<style lang="scss">
.qrc-item {
    height: 125px;
    width: 125px;
    display: flex;
    justify-content: center;
    background: #fff;
    margin: 20px;
    transition: all 0.5s;
    border-radius: 0 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    
    .qrc-item-link {
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 99;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: $c-black;
        font-size: 18px;
        font-weight: bold;
        align-items: flex-end;
        background: transparent !important;
        transition: all 0.25s;

        img {
            position: absolute;
            object-fit: cover;
            top: 0;
            z-index: -1;
            height: 50%;
            width: 90%;
            transition: all 0.25s;
        }

        .qrc-item-name{
            position: relative;
            display: flex;
            align-self: center;
            margin-top: 3em;
        }

        .qrc-item-description{
            font-size: 10px;
            color:#797979;
        }
    }

        &:hover {
            transform: translate(0, -10px);
        }

}

@media screen and (min-width: 360px) {
    .qrc-item {
        height: 140px;
        width: 140px;

        .qrc-item-name {
            font-size: 12px;
        }
    }
}

@media screen and (min-width: 400px) {
    .qrc-item {
        height: 160px;
        width: 160px;

        .qrc-item-name {
            font-size: 15px;
        }
    }
}

@media screen and (min-width: 640px) {
    .qrc-item {
        height: 180px;
        width: 180px;
    }
}

@media screen and (min-width: 900px) {
    .qrc-item {
        height: 200px;
        width: 200px;
    }
}

</style>