<template>
  <v-content v-if="selectedCard" class="create-card-page d-flex flex-column pt-0">
    <div>
      <div class="credit-card-area">
        <div class="credit-card-area__card"> 
          <img class="credit-card-area__card__chip" src="../../assets/images/chip.svg"/>
          <h2 class="credit-card-area__card__number mb-0">{{formatedCardNumber}}</h2>
          <p class="credit-card-area__card__date mb-3"><span id="valid">Validade</span> {{formatedCardExpiration}}</p>
          <h3 class="credit-card-area__card__name mb-0">{{nameUpperCase}}</h3>
        </div>
      </div>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field read-only disabled :value="selectedCard.number" label="Numero do Cartão" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field read-only disabled :value="selectedCard.cpf_cnpj" label="CPF do Titular" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="8" md="1" class="pb-0">
              <v-text-field read-only disabled :value="formatedCardExpiration" label="Data de Validade" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="4" md="1" class="pb-0">
              <v-text-field read-only disabled :value="selectedCard.cvv" label="CVV" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field read-only disabled :value="selectedCard.holder_name" label="Nome do Titular" color="#e18855"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-bottom-navigation color="white">
        <v-btn @click="deleteCard">
          <font color="white">
            <strong style="text-transform: uppercase;">Deletar cartão</strong>
          </font>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-content>
</template>

<script>

import { card } from 'creditcards/index'
import moment from 'moment'
import services from '../../services/ServicesFacade'

export default {
  components: {
  },
  data: () => ({
    valid: true,
  }),
  props: {
    selectedCard: {
        required: true
    }
  },
  methods: {
    deleteCard: async function() {
      let isDeleted = await services.deleteCard()
      if(isDeleted)
        this.$router.go(-1)
    }
  },
  computed: {
    nameUpperCase: function () {
      if(this.selectedCard.holder_name)
        return this.selectedCard.holder_name.toUpperCase();
      else 
        return 'Nome do Titular'.toUpperCase()
    },
    formatedCardNumber: function () {
      if(this.selectedCard.number) {
        return card.format(this.selectedCard.number, ' ');
      } else {
        return ''
      } 
    },
    formatedCardExpiration: function () {
      if(this.selectedCard.validation) {
        let exp = moment(this.selectedCard.validation)
        return exp.format('MM/YYYY')
      } else {
        return 'MM/YYYY'
      }
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Palanquin:100,300,400,500,700&display=swap");

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
    background-image: linear-gradient(to bottom right, $main-color , $second-color);
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
  color: #975C3A;
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