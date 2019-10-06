<template>
    <div class="qrc-user-info">
        <a 
            target="_blank" 
            class="qrc-info-link">
            <img 
                :src="img"
                :alt="field">
            <p class="qrc-info-text">{{field}}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: {
        field: {
            required: true,
            type: String,
        },
    }
}
</script>

<style lang="scss">
.qrc-user-info {
    height: 125px;
    width: 125px;
    display: flex;
    justify-content: center;
    background: transparent !important;
    margin: 20px;
    transition: all 0.5s;
    
    .qrc-info-link {
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
        background: transparent !important;
        transition: all 0.25s;

        &:hover {
            transform: translate(0, -10px);
            
            
            img {
                filter: brightness(0.25);
                box-shadow: 0 15px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
            .qrc-info-text {
                opacity: 1;
                &::before {
                    background: linear-gradient(135deg, #eb4476, #e18855);
                    transform: translateX(-50%) scale(1);
                }
                
            }
        }

        img {
            object-fit: cover;
            border-radius: 0 20px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
            transition: all 0.25s;
        }

        .qrc-info-text {
            text-decoration: none;
            text-align: center;
            position: relative;
            opacity: 0;
            transition: all 0.25s 0.15s;

            &::before {
                position: absolute;
                content: "";
                background: transparent;
                height: 3px;
                width: 100%;
                bottom: 0px;
                left: 50%;
                transition: all 0.25s 0.15s;
                transform: translateX(-50%) scale(0.2);
                
            }
        }
    }
}

@media screen and (min-width: 360px) {
    .qrc-user-info {
        height: 140px;
        width: 140px;

        .qrc-info-text {
            font-size: 12px;
        }
    }
}

@media screen and (min-width: 400px) {
    .qrc-user-info {
        height: 160px;
        width: 160px;

        .qrc-info-text {
            font-size: 15px;
        }
    }
}

@media screen and (min-width: 640px) {
    .qrc-user-info {
        height: 180px;
        width: 180px;
    }
}

@media screen and (min-width: 900px) {
    .qrc-user-info {
        height: 200px;
        width: 200px;
    }
}

</style>