<template>
  <v-content>
    <Navbar />
    <div class="cards-list">
      <div class="cards-list__explanation">
        <p class="mb-0">Escolha uma forma de pagamento</p>
      </div>
      <div class="cards-list__cards">
        <CardItem
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          @cardClick="redirectPage($event)"
        />
      </div>
      <div class="cards-list__add-card" @click="addCard()">
        <p class="mb-0">Adicionar cartão</p>
        <img class="cards-list__add-card__image" src="../../assets/images/plus_card.svg" />
      </div>
    </div>
  </v-content>
</template>

<script>
import CardItem from "./CardItem";
import Navbar from "../../components/Navbar";
import User from "../../services/userService"
import { mapGetters } from "vuex";

const user = new User();

export default {
  components: {
    CardItem,
    Navbar,
  },
  data: () => ({
    from: null,
    cards: [],
  }),
  computed: mapGetters({
    userCpf: "auth/userCpf"
  }),
  async created() {
    // eslint-disable-next-line
    this.from = this.$route.params.from;
    let response = await user.getCardsList(this.userCpf)
    try {
        this.cards = response.data.data[0].cards
    } catch {(() => {
        return
    })}

  },
  methods: {
    redirectPage: function(card) {
      if (this.from === "bag") {
        localStorage.setItem("card-id", card);
        this.$router.push("/sacola");
      } else this.$router.push(`/cartao/${card}`);
    },
    addCard: function() {
      this.$router.push("/novo-cartao");
    },
  }
};
</script>

<style lang="scss">
.cards-list {
  background-color: $c-white;
  height: 100%;
  padding: 10px;

  &__explanation {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid $c-gray40;
    color: $c-gray60;
  }

  &__add-card {
    height: 80px;
    border-bottom: 1px solid $c-gray40;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $second-color;

    &__image {
      position: absolute;
      right: 10px;
    }

    &:active {
      opacity: 0.6;
    }
  }
}
</style>