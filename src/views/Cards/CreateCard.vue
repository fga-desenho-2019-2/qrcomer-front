<template>
  <v-content class="create-card-page d-flex flex-column pt-0">
    <div>
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
              <v-text-field type="date" v-model="creditCard.validation" label="Data de Validade" color="#e18855"></v-text-field>
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