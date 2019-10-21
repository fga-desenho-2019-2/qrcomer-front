<template>
  <div  class="qrc-color">
    <div>
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
    <div>
        <QrcSideDish :food="item.sidedish"/> 
    </div>
  </div>
</template>


<script>
import ItemDescription from "./ItemDescription.vue";
import SideDish from "./SideDish.vue"

export default {
  data() {
    return {
      item: null
    };
  },
  components: {
    "QrcItemDescription": ItemDescription,
    "QrcSideDish": SideDish,
  },
  props: {},
  created() {
    this.getResult();
  },
  methods: {
    getResult: function() {
      this.item = {
        id: 1,
        name: "Combo Big Mac",
        description: "http://localhost:8080/",
        details: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        value: 22.19,
        img: require("@/assets/images/bigmac.svg"),
        category: "Hamburguer",
        sidedish: [{
          id: 0,
          name: "Batata",
          description: "Batatas Fritas",
          value: 3.20,
          qtd: 1
        },
        {
          id: 1,
          name: "Refrigerante",
          description: "Coca Cola",
          value: 5.20,
          qtd: 1
        },
        {
          id: 2,
          name: "Molho Especial",
          description: "Molho de Tomate",
          value: 1.20,
          qtd: 0
        }],
      };
    }
  }
};
</script>

<style lang="scss">
.qrc-color {
  background-color: #efefef;
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
</style>