<template>
<v-content>
  <Navbar />
    <div class="qrc-color">
      <v-dialog v-model="invalidRestaurant" persistent max-width="290" light>
        <v-card-title>Pedido inválido</v-card-title>
        <v-card-text>Não é possível adicionar pedidos de restaurantes diferentes à sacola</v-card-text>
        <v-btn @click="reset()" text>OK</v-btn>
      </v-dialog>
      <div>
          <div v-if="item">
            <QrcItemDescription
              :key="item.id"
              :img="itemImage(item)"
              :name="item.name"
              :details="item.details"
              :value="item.value"
            />
          </div>
          <div class="qrc-acompanhamento-area">
              <h6 class="qrc-acompanhamento-title">Adicionar Acompanhamento</h6>
              <p class="qrc-acompanhamento-description">Escolha e selecione a quantidade</p>
          </div>
          <div v-if="item">
              <QrcSideDish 
                v-for="(sidedish, index) in item.sidedish"
                :key="sidedish.id"
                :food="sidedish"
                @changeQtd="handleAmmount($event, index)"
                @changeSelect="handleSelect($event, index)"/> 
          </div>
          <v-textarea
            v-model="observation"
            class="qrc-input"
            color="#E7E6E6"
            label="Deixe uma observação"
            rows="1"
          ></v-textarea>
        </div>
        <div class="qrc-bottom-area">
          <v-bottom-navigation color="white" class="form-select">
            <v-btn @click="addItem()">
              <font color="white">Adicionar</font>
            </v-btn>
          </v-bottom-navigation>
        </div>
    </div>
  </v-content>
</template>


<script>
import ItemDescription from "./ItemDescription.vue";
import SideDish from "./SideDish.vue";
import Navbar from "../../components/Navbar.vue";

export default {
  components: {
    "QrcItemDescription": ItemDescription,
    "QrcSideDish": SideDish,
    Navbar
  },
  data() {
    return {
      item: null,
      itemId: null,
      observation: '',
      invalidRestaurant: false
    };
  },
  props: {
    foodItem: {
      required: true
    }
  },
  watch: {
    foodItem: function () {
      this.item = this.foodItem
    }
  },
  methods: {
    handleAmmount: function(qtd, index) {
      this.item.sidedish[index].qtd = qtd;
    },
    handleSelect: function(isSelected, index) {
      this.item.sidedish[index].selected = isSelected
    },
    addItem: function() {
      let items = window.localStorage.getItem("order-bag") ? JSON.parse(window.localStorage.getItem("order-bag")) : null;

      if(!items || items.lenght === 0) {
        window.localStorage.setItem("restaurantCNPJ", this.item.restaurant_cnpj);
        this.item.observation = this.observation;
        this.item.ammount = 1;
        let itemsToSend = [];
        if(items) itemsToSend = items;
        itemsToSend.push(this.item);
        window.localStorage.setItem("order-bag", JSON.stringify(itemsToSend));
        this.$router.replace({ path: '/sacola' })
      }
      else {
        let restaurantCNPJ = localStorage.restaurantCNPJ;
        this.invalidRestaurant = restaurantCNPJ === this.item.restaurant_cnpj ? false : true;
      }
  
      if(!this.invalidRestaurant) {
        this.item.observation = this.observation;
        this.item.ammount = 1;
        let itemsToSend = [];
        if(items) itemsToSend = items;
        itemsToSend.push(this.item);
        window.localStorage.setItem("order-bag", JSON.stringify(itemsToSend));
        this.$router.replace({ path: '/sacola' })
      }
    },
    reset: function () {
      this.invalidRestaurant = false;
    },
    itemImage: function(item) {
        let image = 'http://restaurant.marques.rocks/api/item-image/' + item.id
        return image
    }
  }
};
</script>

<style lang="scss">

.v-dialog {
  background-color: #efefef;
}
.v-dialog .v-btn {
  color: $main-color
}

.qrc-acompanhamento-area{
    background-color: #E7E6E6;
    padding: 4vw;
}
.qrc-acompanhamento-title{
    font-size: 17px !important;
    margin-bottom: 0 !important;
    
}
.qrc-acompanhamento-description{
    font-size: 10px !important;
    color: #797979;
    margin-bottom: 0 !important;
}
.qrc-input{
  margin: 4vw;
}
.form-select .v-btn {
  max-width: none !important;
  width: 100%;
}
.qrc-bottom-area{
  width: 100%;
  position: sticky;
  bottom: 0;
}
.qrc-color{
  height: 100%;
  background-color: #efefef;
}
</style>
