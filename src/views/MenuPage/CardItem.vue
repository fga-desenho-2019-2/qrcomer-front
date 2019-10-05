<template>
  <div class="qrc-item">
    <a :href="description" target="_blank" class="qrc-item-link">
      <img :src="img" :alt="name" />
      <div class="qrc-item-details">
        <p class="qrc-item-name">{{name}}</p>
        <p class="qrc-item-description">{{details}}</p>
        <p class="qrc-item-value">R$ {{value}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Membro",
  props: {
    description: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    img: {
      required: true,
      type: String
    },
    value: {
      required: true
    },
    details: {
      required: true,
      type: String
    }
  }
};
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
        align-items: flex-end;
        text-decoration: none;
        margin-top: 0.3em;
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

        .qrc-item-details {
            margin-left: 0.5em;

            .qrc-item-name {
                position: relative;
                display: flex;
                align-self: center;
                color: $c-black;
                margin-top: 0;
                margin-bottom: 0;
            }

            .qrc-item-description {
                color: #797979;
                margin-bottom: 0em;
            }
        }

        .qrc-item-value {
            position: relative;
            display: flex;
            justify-content: flex-end;
            margin-right: 1em;
            color: $second-color;
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
        font-size: 10px;
    }
    
    .qrc-item-description{
        font-size: 8px;
    }

    .qrc-item-value{
        font-size: 10px;
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

    .qrc-item-description{
        font-size: 13px;
    }

    .qrc-item-value{
        font-size: 18px;
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