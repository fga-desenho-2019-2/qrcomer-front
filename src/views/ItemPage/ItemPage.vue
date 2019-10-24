<template>
  <div class="qrc-color">
    <div>
        <div v-if="item">
          <QrcItemDescription
            :key="item.id"
            :img="item.img"
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
</template>


<script>
import ItemDescription from "./ItemDescription.vue";
import SideDish from "./SideDish.vue"
import Services from '../../services/ServicesFacade'

export default {
  data() {
    return {
      item: null,
      itemId: null,
      observation: ''
    };
  },
  components: {
    "QrcItemDescription": ItemDescription,
    "QrcSideDish": SideDish,
  },
  created() {
    //this.itemId = this.$route.params.id;
    this.setUp();
  },
  methods: {
    setUp: async function() {
      this.item = await Services.getItem(0)
    },
    handleAmmount: function(qtd, index) {
      this.item.sidedish[index].qtd = qtd;
    },
    handleSelect: function(isSelected, index) {
      this.item.sidedish[index].selected = isSelected
    },
    addItem: function() {
      this.item.observation = this.observation;
      this.item.ammount = 1;
      let itemsToSend = []
      let items = JSON.parse(window.localStorage.getItem("order-bag"));
      if(items) itemsToSend = items;
      console.log(this.item)
      itemsToSend.push(this.item);
      window.localStorage.setItem("order-bag", JSON.stringify(itemsToSend));
      this.$router.replace({ path: '/sacola' })
    }
  }
};
</script>

<style lang="scss">

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