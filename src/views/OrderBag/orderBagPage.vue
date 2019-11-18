<template>
  <v-content class="order-bag d-flex flex-column pt-0">
    <Navbar />
    <div v-if="shopping" class="floating_card" id="first-card">
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
      <div v-if="items == null || items.length === 0" class="floating_card__restaurant" id="items">
        <h5 class="mb-0" id="restaurant-title">Sacola vazia :(</h5>
      </div>
      <div v-else class="floating_card__restaurant" id="items">
        <h5 v-if="restaurant" class="mb-0" id="restaurant-title">{{ restaurant.name }}</h5>
        <p v-if="restaurant">{{ restaurant.orderTime }}</p>
        <div v-if="items">
          <restaurantItem
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
            :ammount="item.ammount"
            @changeQtd="handleAmmount($event, index)"
            @deleteItem="deleteItem($event, index)"
          />
        </div>
      </div>
      <div class="floating_card__price">
        <v-row id="buttons-row">
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
        <div v-if="selectedCard" class="floating_card__payment-method__credit">
          <p v-if="selectedCard">
            Cartão no app
            <br />{{ selectedCard.number }}
          </p>
          <a href="/cartoes/bag" class="floating_card__payment-method__credit__link mb-0 mt-0">ALTERAR</a>
        </div>
        <div v-else class="floating_card__payment-method__credit" id="no-card" @click="selectCard">
          <b>Selecione a forma de pagamento</b>
        </div>
        <div class="floating_card__payment-method__cpf">
          <div v-if="userCPF">
            <v-form ref="form" v-model="valid">
              <v-col cols="12" md="6">
                <v-text-field color="#e18855" v-model="cpf" :rules="cpfRules" label="CPF"></v-text-field>
              </v-col>
            </v-form>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-bottom-navigation color="white" class="form-select">
          <v-btn @click.stop="dialog = true">
            <font color="white">Finalizar Pedido - Total: R${{ total }}</font>
          </v-btn>
        </v-bottom-navigation>
      </template>
      <div class="popup">
        <v-card>
          <div class="popup__title">
            <v-card-title class="headline">Confirmar pedido</v-card-title>
          </div>
          <div class="popup__text">
            <v-card-text>
              <div class="popup__total">Você gostaria de confirmar seu pedido?</div>
              <p></p>
              <div class="popup__total">Total de: R${{ total }}</div>
            </v-card-text>
          </div>
          <div class="popup__buttons">
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="#ef596b"
                text
                @click="dialog = false"
              >
                Cancelar
              </v-btn>

              <v-btn
                color="#ef596b"
                text
                @click="requestOrder"
              >
                Confirmar
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </div>
    </v-dialog>
    <v-dialog
      v-model="error"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Algo deu errado</v-card-title>

        <v-card-text>
          Não conseguimos concluir seu pedido
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="#ef596b"
            text
            @click="acceptError"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
import restaurantItem from "./BagItem.vue";
import { handleAmmount, getItems, removeItems } from "../../services/context";
import Navbar from "../../components/Navbar";
import services from '../../services/ServicesFacade'

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
      error: false,
      cpfRules: [
        v =>
          (v && v.length >= 11 || v.length === 0) ||
          "CPF deve ser igual a 11 caracteres e não deve conter pontos ou traços"
      ],
      dialog: false,
      userCPF: null
    };
  },
  props: {
    shopping: {
      required: true
    },
    restaurant: {
      required: true
    },
    selectedCard: {
      required: false
    }
  },
  created() {
    this.getItems();
    this.getShoppingCNPJ();
    this.userCPF = localStorage.getItem('user-cpf')
  },
  computed: {
    total: function() {
      let sum = 0;
      if (this.items) {
        this.items.forEach(item => {
          let itemTotal = item.value
          item.sidedish.forEach(dish => {
            if(dish.selected) {
              itemTotal += dish.value * dish.qtd
            }
          })
          sum += itemTotal * item.ammount;
        });
      }
      return sum.toFixed(2);
    }
  },
  methods: {
    handleAmmount,
    getItems,
    removeItems,
    selectCard: function () {
      this.$router.push('/cartoes/bag')
    },
    deleteItem: function(item, index) {
      this.items.splice(index, 1);
      window.localStorage.setItem("order-bag", JSON.stringify(this.items));
    },
    acceptError: function () {
      this.error = false;
    },
    getShoppingCNPJ: function() {
      this.shoppingCNPJ = localStorage.shoppingCNPJ;
    },
    requestOrder: async function(){
      let order = {
        cpf_user: this.userCPF,
        cnpj_restaurant: this.restaurant.cnpj,
        value: this.total,
        items: []
      }
      this.items.forEach((item) => {
        let orderItem = {
          name: item.name,
          value: item.value,
          observation: item.observation,
          quantity: item.ammount
        }
        order.items.push(orderItem)
        item.sidedish.forEach(dish => {
          if(dish.selected) {
            let dishItem = {
              name: dish.name,
              value: dish.value,
              observation: "",
              quantity: dish.qtd
            }
            order.items.push(dishItem)
          }
        })
      })
      console.log(JSON.stringify(order))
      try {
        let response = await services.requestOrder(order);
        if(response.status === 201) {
          window.localStorage.setItem("order-bag", JSON.stringify([]));
          this.$router.push('/pedido')
        }
      }
      catch (error) {
        this.dialog = false
        this.error = true
      }
    }
  }
};
</script>

<style lang="scss">
#buttons-row {
  max-width: 100vw;
}

#first-card {
  margin-top: 56px;
}

#no-card {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  color: $main-color;
}

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

.total-popup {
  font-size: 20px;
}

.popup{

  &__title{
    justify-content: center;
    display: flex;
  }

  &__buttons{
    justify-content: center;
    display: flex;
    max-width: 100vw;
  }
}


</style>