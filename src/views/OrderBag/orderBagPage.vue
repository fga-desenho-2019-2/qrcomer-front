<template>
  <v-content class="order-bag d-flex flex-column pt-0">
    <div class="card">
      <div class="card__image-area">
        <img class="card__image-area__image" src="@/assets/images/place.svg" />
      </div>
      <div class="card__text-area">
        <div class="card__text-area__text">
          <p id="shopping-name">Você está no {{ shopping.name }}</p>
          <p id="localization">{{ shopping.address }}</p>
        </div>
        <div class="card__text-area__button">
          <a href="#">Não, estou em outro lugar</a>
        </div>
      </div>
    </div>
    <div class="card" id="foods">
      <div class="card__restaurant" id="items">
        <h5 class="mb-0" id="restaurant-title">{{ restaurant.name }}</h5>
        <p>{{ restaurant.time }}min</p>
        <restaurantItem
          v-for="(item, index) in items"
          :key="index"
          :name="item.name"
          :ammount="item.ammount"
          @changeQtd="handleAmmount($event, index)"
        />
      </div>

      <div class="card__price">
        <p>
          <a class="palanquin" v-bind:href="'/shopping/' + cnpj">
            <b>Adicionar mais itens</b>
          </a>
        </p>
        <div class="card__price__total">
          <div class="card__price__total__text">
            <p class="palanquin">Total</p>
          </div>
          <div class="card__price__total__number">
            <p class="palanquin">R${{ total }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card" id="payment">
      <div class="card__payment-method">
        <div class="card__payment-method__title">
          <h6 class="mb-2">Forma de Pagamento</h6>
        </div>
        <div class="card__payment-method__credit">
          <p>
            Cartão no app
            <br />****3387
          </p>
          <a href="#" class="card__payment-method__credit__link mb-0 mt-0">ALTERAR</a>
        </div>
        <div class="card__payment-method__cpf">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn text style=" font-size: 12px; color: #797979;" v-on="on">Adicionar CPF</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">CPF</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-form ref="form" v-model="valid">
                        <v-select :items="cpf" label="CPF" required color="#e18855">Adicionar</v-select>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#ef596b" text @click="dialog = false">Cancelar</v-btn>
                <v-btn :disabled="!valid" color="#ef596b" text @click="validate">Adicionar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>

    <v-bottom-navigation color="white">
      <v-btn>
        <font color="white">Finalizar Pedido - Total: R${{ total }}</font>
      </v-btn>
    </v-bottom-navigation>
  </v-content>
</template>

<script>
import restaurantItem from "./BagItem.vue";
export default {
  components: {
    restaurantItem
  },
  data() {
    return {
      shopping: {},
      restaurant: {},
      items: [],
      cnpj: "",
      dialog: false,
      valid: true,
      cpf: ["555.444.333-22"]
    };
  },
  created() {
    this.getShopping();
    this.getRestaurant();
    this.getItems();
  },
  mounted() {
    if (localStorage.cnpj) {
      this.cnpj = localStorage.cnpj;
    }

    // axios.get("link-da-api").then(response => (this.cpf = response));
  },
  watch: {
    cnpj(newCnpj) {
      localStorage.cnpj = newCnpj;
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
      return sum;
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    handleAmmount(qtd, index) {
      this.items[index].ammount = qtd;
      window.localStorage.setItem("order-bag", JSON.stringify(this.items));
    },
    getItems() {
      this.items = JSON.parse(window.localStorage.getItem("order-bag"));
    },
    getShopping() {
      this.shopping = {
        name: "Shopping do seu zé",
        address: "Rua do seu zé"
      };
    },
    getRestaurant() {
      this.restaurant = {
        name: "McDonalds",
        time: "30-40"
      };
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
  &__v-application {
    color: #eb4476 !important;
    caret-color: #eb4476 !important;
  }
}
.card {
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

.v-input__control {
  color: #eb4476;
  font-family: "Palanquin", sans-serif;
}
</style>