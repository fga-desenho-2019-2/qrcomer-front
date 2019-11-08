<template>
  <v-content class="create-card-page d-flex flex-column pt-0">
    <div>
      <div class="credit-card-area">
        <div class="credit-card-area__card"> 
          <img class="credit-card-area__card__chip" src="../../assets/images/chip.svg"/>
          <h2 class="credit-card-area__card__number mb-0">{{creditCard.number}}</h2>
          <p class="credit-card-area__card__date mb-3"><span id="valid">Validade</span> {{creditCard.validation}}</p>
          <h3 class="credit-card-area__card__name mb-0">{{nameUpperCase}}</h3>
        </div>
      </div>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field type="number" v-model="creditCard.number" label="Numero do Cartão" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field type="number" v-model="creditCard.cpf_cnpj" label="CPF do Titular" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="8" md="1" class="pb-0">
              <v-text-field type="number" v-model="creditCard.validation" label="Data de Validade" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="4" md="1" class="pb-0">
              <v-text-field type="number" v-model="creditCard.cvv" label="CVV" color="#e18855"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="pb-0">
              <v-text-field v-model="creditCard.holderName" label="Nome do Titular" required color="#e18855"></v-text-field>
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
    </div>
  </v-content>
</template>

<script>

export default {
  components: {
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
    holderNameRules: [v => !!v || "Campo obrigatório"],
  }),
  props: {},
  watch: {
    creditCard: function () {
      this.newCreditCard = this.creditCard;
    }
  },
  computed: {
    nameUpperCase: function () {
      if(this.creditCard.holderName)
        return this.creditCard.holderName.toUpperCase();
      else 
        return ''
    }
  },
  methods: {
    copyCreditCard: function () {
      this.newCreditCard = this.creditCard;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
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