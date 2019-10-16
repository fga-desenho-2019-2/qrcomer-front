<template>
<div class="qrc-color">
  <div class="qrc-banner">
      <img class="qrc-banner__image" :src="img" :alt="name"/>
  </div>
  <div class="qrc-details">
  <div class="qrc-description">
      <h5 class="qrc-style-font">{{name}}</h5>
      <div class="qrc-align-itens">
        <img class="qrc-star-image" src="~@/assets/images/Star.png"/>
        <p class="qrc-style-font">{{nota}}</p>
      </div>
  </div>
      <p class="qrc-style-detail">$ • {{type}}</p>
      <p class="qrc-style-detail">Demora em torno de {{time}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    img: {
      required: true,
      type: String
    },
    name:{
        required: true,
        type: String
    },
    nota:{
      required: true,
      type: String
    },
    type:{
      required: true,
      type: String
    },
    time: {
      require: true,
      type: String
    }
  }
};
</script>

<style lang="scss">
.qrc-banner {
    height: 40%;
    width: 100%;
    max-height: 300px;
    display: flex;
    justify-content: center;

    &__image{
      width: 100%;
    }
}

.qrc-color{
  background-color: #EFEFEF;
}

.qrc-style-font{
  margin-bottom: 0 !important;
  font-size: 14px;
}

.qrc-description{
  display: flex;
  justify-content: space-between;
}

.qrc-align-itens{
  display: flex;
  align-items: center;
}

.qrc-star-image{
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 4px;
}

.qrc-details{
  margin: 0 4vw;
  padding-bottom: 10px;
  border-bottom: 1px solid #C7C7C7;
}

.qrc-style-detail{
  color: #797979;
  margin-bottom: 0 !important;
  font-size: 15px;
}
</style>