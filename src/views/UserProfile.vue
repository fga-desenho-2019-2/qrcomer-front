<template>
  <v-content class="user-page d-flex flex-column pt-0">
    <qrc-banner />
    <div>
      <v-container>
        <v-row v-if="user">

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field :value="user.name" label="Nome" color="#e18855" readonly type="text"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field :value="user.email" label="E-mail" color="#e18855" readonly type="email"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field :value="user.telephone" label="Telefone" color="#e18855" readonly type="text"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field :value="user.password" label="Senha" color="#e18855" readonly type="password"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="pb-0">
            <v-text-field :value="user.cpf" label="CPF" color="#e18855" readonly type="text"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-bottom-navigation class="user-bottom-navigation" v-model="activeBtn" :input-value="showNav" color="white">
      <v-btn to="./editar-usuario"><font color="white"><strong>ATUALIZAR</strong></font></v-btn>
    </v-bottom-navigation>
  </v-content>
</template>

<script>
import UserBanner from '../components/UserBanner';

export default {
  components: {
    "qrc-banner": UserBanner
  },
  data() {
    return {
      activeBtn: 1,
      showNav: true,
      dialog: false
    };
  },
  props: {
    user: {
      required: true
    }
  },
};
</script>

<style lang="scss">
.user-page .v-item-group.v-bottom-navigation .v-btn {
  max-width: none;
  width: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.card {
  width: auto;
  border-bottom: solid 1px black;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: auto;
}
</style>