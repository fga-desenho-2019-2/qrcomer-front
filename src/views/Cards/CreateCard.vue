<template>
  <v-content>
    <Navbar />
    <v-content class="create-card-page d-flex flex-column pt-0">
      <div class="credit-card-area">
        <div class="credit-card-area__card">
          <img class="credit-card-area__card__chip" src="../../assets/images/chip.svg" />
          <h2 class="credit-card-area__card__number mb-0">{{formatedCardNumber}}</h2>
          <p class="credit-card-area__card__date mb-3">
            <span id="valid">Validade</span>
            {{formatedCardExpiration}}
          </p>
          <h3 class="credit-card-area__card__name mb-0">{{nameUpperCase}}</h3>
        </div>
      </div>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field
                type="number"
                :rules="cardNumberRules"
                v-model="creditCard.number"
                required
                label="Numero do Cartão"
                color="#e18855"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field
                type="text"
                v-mask="['###.###.###-##']"
                :rules="cpf_cnpjRules"
                v-model="creditCard.cpf_cnpj"
                label="CPF do Titular"
                required
                color="#e18855"
              ></v-text-field>
            </v-col>

            <v-col cols="8" md="1" class="pb-0">
              <v-text-field
                type="date"
                :rules="expirationRules"
                v-model="creditCard.validation"
                required
                label="Data de Validade"
                color="#e18855"
              ></v-text-field>
            </v-col>

            <v-col cols="4" md="1" class="pb-0">
              <v-text-field
                type="text"
                v-mask="'###'"
                :rules="cvvRules"
                v-model="creditCard.cvv"
                label="CVV"
                required
                color="#e18855"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field
                v-model="creditCard.holderName"
                :rules="holderNameRules"
                label="Nome do Titular"
                required
                color="#e18855"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-bottom-navigation color="white">
        <v-btn @click="validate">
          <font color="white">
            <strong style="text-transform: uppercase;">Confirmar</strong>
          </font>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
  </v-content>
</template>

<script>
import { card, cvc, expiration } from "creditcards/index";
import moment from "moment";
import Navbar from "../../components/Navbar";
import { mapGetters } from "vuex";
import User from '../../services/userService';
import { routeTo } from "../../services/context";
import { validationUtil } from "../../utils/ValidationUtils";

let user = new User();

function holderRules() {
  return [value => !!value || "Campo obrigatório"];
}
const requiredField = value => !!value || "Campo obrigatório";

const cardNumberRules = [
  requiredField,
  value => card.isValid(value) || "Número inválido"
];

const cpf_cnpjRules = [requiredField];

const cvvRules = [requiredField, value => cvc.isValid(value) || "CVV inválido"];

const expirationRules = [
  requiredField,
  value => {
    let expDate = moment(value);
    return (
      !expiration.isPast(expDate.month(), expDate.year()) || "Cartão expirado"
    );
  }
];

export default {
  components: {
    Navbar
  },
  data: () => ({
    creditCard: {
      number: null,
      cpf_cnpj: null,
      validation: "",
      cvv: null,
      holderName: null
    },
    newCreditCard: {},
    valid: true,
    holderNameRules: holderRules(),
    cardNumberRules,
    cpf_cnpjRules,
    cvvRules,
    expirationRules
  }),
  props: {},
  watch: {
    creditCard: function() {
      this.newCreditCard = this.creditCard;
    }
  },
  computed: {
    ...mapGetters({
        userCpf: "auth/userCpf"
    }),    
    nameUpperCase: function() {
      if (this.creditCard.holderName)
        return this.creditCard.holderName.toUpperCase();
      else return "Nome do Titular".toUpperCase();
    },
    formatedCardNumber: function() {
      if (this.creditCard.number)
        return card.format(this.creditCard.number, " ");
      else return "";
    },
    formatedCardExpiration: function() {
      if (this.creditCard.validation) {
        let exp = moment(this.creditCard.validation);
        return exp.format("MM/YYYY");
      } else {
        return "MM/YYYY";
      }
    }
  },
  methods: {
    copyCreditCard: function() {
      this.newCreditCard = this.creditCard;
    },
    async validate() {
        if (this.$refs.form.validate()) {
            let body = {
                number: this.creditCard.number,
                cvv: this.creditCard.cvv,
                validation: this.creditCard.validation,
                holder_name: this.creditCard.holderName,
                cpf_cnpj: validationUtil.cleanMaskCpf(this.creditCard.cpf_cnpj),
            };
            let response = await user.createCard(this.userCpf, body);

            if (response.status >= 400) {
                this.errors = response.data;
                return;
            } else {
                if(this.$route.params.from === 'bag')
                  routeTo('/cartoes/bag',this);
                else 
                  routeTo('/cartoes',this);
            }
        }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap");

.new-card-page {
  height: 100%;
}

.credit-card-area {
  height: 60vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 0 10px;

  &__card {
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 300px;
    background-image: linear-gradient(
      to bottom right,
      $main-color,
      $second-color
    );
    border-radius: 10px;
    color: $c-white;
    padding: 15px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 4px #00000040;

    &__chip {
      align-self: flex-start;
      margin-bottom: 15px;
    }

    &__number {
      height: 36px;
      font-size: 24px !important;
    }

    &__date {
      height: 21px;
      font-size: 14px !important;
    }

    &__name {
      height: 21px;
      font-size: 14px !important;
    }
  }
}

#valid {
  color: #975c3a;
}

.create-card-page .v-item-group.v-bottom-navigation .v-btn {
  max-width: none;
  width: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.v-text-field {
  color: #eb4476;
  font-family: "Palanquin", sans-serif;
}
</style>