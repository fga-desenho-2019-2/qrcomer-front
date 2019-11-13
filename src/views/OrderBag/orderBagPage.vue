<template>
  <div>
    <v-content>
      <Navbar />
      <v-content class="order-bag d-flex flex-column pt-0">
        <div v-if="shopping" class="floating_card">
          <div class="floating_card__image-area">
            <img class="floating_card__image-area__image" src="@/assets/images/place.svg" />
          </div>
          <div class="floating_card__text-area">
            <div class="floating_card__text-area__text">
              <p id="shopping-name">Você está no {{ shopping.name }}</p>
              <p id="localization">{{ shopping.address }}</p>
            </div>
            <div class="floating_card__text-area__button">
              <a href="#">Não, estou em outro lugar</a>
            </div>
          </div>
        </div>
        <div class="floating_card" id="foods">
          <div v-if="items.length > 0" class="floating_card__restaurant" id="items">
            <h5 v-if="restaurant" class="mb-0" id="restaurant-title">{{ restaurant.name }}</h5>
            <p v-if="restaurant">{{ restaurant.orderTime }}</p>
            <div v-if="items">
              <restaurantItem
                v-for="(item, index) in items"
                :key="item.index"
                :name="item.name"
                :ammount="item.ammount"
                @changeQtd="handleAmmount($event, index)"
                @deleteItem="deleteItem($event, index)"
              />
            </div>
          </div>
          <div v-else-if="items == null || items.length === 0" class="floating_card__restaurant" id="items">
            <h5 class="mb-0" id="restaurant-title">Sacola vazia :(</h5>
          </div>
          <div class="floating_card__price">
            <v-row>
              <v-spacer></v-spacer>
              <p v-if="shoppingCNPJ">
                <a class="palanquin" v-bind:href="'/shopping/' + shoppingCNPJ">
                  <b>Adicionar mais itens</b>
                </a>
              </p>
              <v-spacer></v-spacer>
              <p>
                <a @click="removeItems()" class="palanquin">
                  <b>Esvaziar sacola</b>
                </a>
              </p>
              <v-spacer></v-spacer>
            </v-row>
            <div class="floating_card__price__total">
              <div class="floating_card__price__total__text">
                <p class="palanquin">Total</p>
              </div>
              <div class="floating_card__price__total__number">
                <p class="palanquin">R${{ total }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="floating_card" id="payment">
          <div class="floating_card__payment-method">
            <div class="floating_card__payment-method__title">
              <h6 class="mb-2">Forma de Pagamento</h6>
            </div>
            <div class="floating_card__payment-method__credit">
              <p>
                Cartão no app
                <br />**** 3387
              </p>
              <a href="#" class="floating_card__payment-method__credit__link mb-0 mt-0">ALTERAR</a>
            </div>
            <div class="floating_card__payment-method__cpf">
              <div v-if="user">
                <v-form ref="form" >
                  <v-col cols="12" md="6">
                    <v-text-field
                      color="#e18855"
                      v-model="cpf"
                      :rules="cpfRules"
                      label="CPF"
                      required
                    ></v-text-field>
                  </v-col>
                </v-form>
              </div>
            </div>
          </div>
        </div>
        <v-bottom-navigation color="white" class="form-select">
          <v-btn>
            <font color="white">Finalizar Pedido - Total: R${{ total }}</font>
          </v-btn>
        </v-bottom-navigation>
      </v-content>
    </v-content>
  </div>
</template>

<script>
import restaurantItem from "./BagItem.vue";
import { handleAmmount, getItems, removeItems } from "../../services/context";
import Navbar from "../../components/Navbar";

export default {
  components: {
    restaurantItem,
    Navbar
  },
  data() {
    return {
      valid: true,
      items: [],
      shoppingCNPJ: "",
      cpf: "",
      cpfRules: [
        v => !!v || "Campo obrigatório",
        v =>
          (v && v.length >= 11) ||
          "CPF deve ser igual a 11 caracteres e não deve conter pontos ou traços"
      ]
    };
  },
  props: {
    shopping: {
      required: true
    },
    restaurant: {
      required: true
    },
    user: {
      required: true
    }
  },
  created() {
    this.getItems();
    this.getShoppingCNPJ();
  },
  watch: {
    user: function() {
      this.cpf = this.user.cpf;
    }
  },
  computed: {
    total: function() {
      let sum = 0;
      if (this.items) {
        this.items.forEach(item => {
          sum += item.value * item.ammount;
        });
      }
      return sum.toFixed(2);
    }
  },
  methods: {
    handleAmmount,
    getItems,
    removeItems,
    deleteItem: function(item, index) {
      this.items.splice(index, 1);
      window.localStorage.setItem("order-bag", JSON.stringify(this.items));
    },
    getShoppingCNPJ: function() {
      this.shoppingCNPJ = localStorage.shoppingCNPJ;
    }
  }
};
</script>

<style lang="scss">
.order-bag {
  .v-bottom-navigation {
    position: sticky;
    bottom: 0;
  }
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.v-list-item {
  color: #eb4476;

  &__title {
    color: #eb4476;

    &__content {
      color: #eb4476;
    }
  }
}

.floating_card {
  width: 100%;
  background-color: $c-white;
  box-shadow: 0px 4px 10px #00000033;
  padding-top: 20px;
  margin-bottom: 15px;

  &__image-area {
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

    &__image {
      height: 40px;
    }
  }

  &__text-area {
    width: 80%;
    float: right;
    box-sizing: border-box;
    padding-right: 10px;

    &__text {
      border-bottom: 1px solid #c7c7c7;
    }

    &__button {
      display: flex;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
      padding-top: 10px;
      padding-bottom: 10px;

      a:link,
      a:visited {
        text-decoration: none;
        color: #797979;
      }
    }
  }

  &__restaurant {
    border-bottom: 1px solid #c7c7c7;
    padding: 0 10px 25px 10px;

    p {
      font-size: 14px;
    }
  }

  &__price {
    font-size: 14px;
    font-weight: 25px;
    padding: 5px 10px 0px 10px;

    width: 100%;
    text-align: center;

    a:link,
    a:visited {
      text-decoration: none;
      width: 100%;
      color: #ef596b;
    }

    &__total {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: normal;
    }
  }

  &__payment-method {
    width: 100%;
    padding-left: 10px;

    &__title {
      font-size: 18px;
      font-weight: normal;
      border-bottom: 1px solid #c7c7c7;
    }

    &__credit {
      display: flex;
      justify-content: space-between;
      padding-right: 10px;

      p {
        font-size: 12px;
        color: #797979;
        margin-top: 16px;
      }

      a:visited,
      a:link {
        font-size: 12px;
        text-decoration: none;
        color: #000000;
        display: flex;
        align-items: center;
      }
      border-bottom: 1px solid#C7C7C7;
    }

    &__cpf {
      padding-top: 12px;
      padding-bottom: 12px;

      a:link,
      a:visited {
        text-decoration: none;
        font-size: 12px;
        color: #797979;
      }
    }
  }
}

.v-bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
}

#shopping-name {
  margin-bottom: 0px !important;
  font-size: 14px;
}

#localization {
  font-size: 12px;
  color: #797979;
}

#restaurant-title {
  font-size: 22px !important;
}

#foods {
  padding-top: 10px;
}

#payment {
  padding-top: 5px;
}

.form-select .v-btn {
  max-width: none !important;
  width: 100%;
}
</style>