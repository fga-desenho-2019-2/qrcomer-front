<template>
  <div>
    <template v-if="routeName === 'home'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="red-header">
        <v-app-bar-nav-icon
          class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <img
          v-if="white"
          src="~@/assets/images/QRComer.png"
          alt="Logo"
          class="brand pr-5 d-none d-sm-none d-md-flex d-lg-flex"
        />
        <img
          v-else
          src="~@/assets/images/logo.svg"
          alt="Logo"
          class="brand pr-5 d-none d-sm-none d-md-flex d-lg-flex"
        />
        <v-toolbar-title class="text-uppercase d-none d-sm-none d-md-flex d-lg-flex text-shadow">
          <span>QR</span>
          <span class="font-weight-light">Comer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn 
            class="mr-2 text-shadow" 
            v-if="isAuthenticated" 
            @click="logout" 
            icon>
          <v-icon>mdi-logout</v-icon>
          Sair
        </v-btn>
        <template v-else-if="!isAuthenticated">
            <v-btn
                text
                tile
                @click="routeTo('/auth/login')"
                href="#"
                >
                <span class="mr-2 text-shadow">Login</span>
                </v-btn>
                <v-btn
                text
                tile
                @click="routeTo('/auth/register')"
                href="#">
                <span class="mr-2 text-shadow">Cadastrar</span>
            </v-btn>
        </template>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='order-bag'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-app-bar-nav-icon
          class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <span style="color:black">
          <center>SACOLA</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='user'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-app-bar-nav-icon
          class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>   
        <span style="color:black">
          <center>MEU PERFIL</center>
        </span>
        <v-spacer></v-spacer>
        <v-btn
            icon
            to="./editar-usuario">
            <v-icon
                class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
            >mdi-account-edit</v-icon>
        </v-btn>
        
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='shopping'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-app-bar-nav-icon
          class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <span style="color:black">
          <center>SHOPPING</center>
        </span>
        <v-spacer></v-spacer>
        <img @click="clickFilter" id="filter" src="~@/assets/images/filter.svg" />
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='categoria'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-btn @click="routeTo('/shopping/'+ shoppingCNPJ)" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <span style="color:black">
          <center>CATEGORIA</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='edit-user'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-btn @click="routeTo('/usuario')" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>   
        <span style="color:black">
          <center>EDITAR PERFIL</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='item'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-btn @click="routeTo('/restaurante/'+ restaurantCNPJ)" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <span style="color:black">
          <center>ITEM</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName === 'auth'">
      <v-app-bar app absolute id="grey-header">
        <v-btn @click="routeTo('/')" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <span>{{isAuthenticated ? 'Logado' : 'Não logado'}}</span>
        <v-btn v-if="isAuthenticated" @click="logout" text>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-close</v-icon>Deslogar
        </v-btn>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='menu'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-btn @click="routeTo('/shopping/'+ shoppingCNPJ)" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <span style="color:black">
          <center>RESTAURANTE</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='card_list'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-app-bar-nav-icon
          class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <span style="color:black">
          <center>CARTÕES</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='create_card'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-btn @click="routeTo('/cartoes')" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <span style="color:black">
          <center>NOVO CARTAO</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <template v-else-if="routeName ==='card'">
      <v-app-bar app elevate-on-scroll v-scroll="floatingNav" id="gray-header">
        <v-btn @click="routeTo('/cartoes')" icon>
          <v-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
          >mdi-arrow-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <span style="color:black">
          <center>CARTÃO</center>
        </span>
        <v-spacer></v-spacer>
      </v-app-bar>
    </template>
    <v-navigation-drawer app clipped v-model="drawer" temporary color="#efefef">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="color: black">
            <center>QR COMER</center>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <a :href="item.link" style="color: transparent">
            <v-list-item-icon>
              <v-icon style="color: black" @click="routeTo(link)">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </a>
          <a :href="item.link" style="color: transparent">
            <v-list-item-content>
              <v-list-item-title style="color: black">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </a>
        </v-list-item>
        <v-list-item v-if="isAuthenticated" @click="logout"  link>
          <a href="/" style="color: transparent">
            <v-list-item-icon>
              <v-icon style="color: black" @click="routeTo('/')">mdi-logout</v-icon>
            </v-list-item-icon>
          </a>
          <a href="/" style="color: transparent">
            <v-list-item-content>
              <v-list-item-title style="color: black">Sair</v-list-item-title>
            </v-list-item-content>
          </a>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { routeTo } from "../services/context";

export default {
  data() {
    return {
      drawer: false,
      routeName: this.$router.currentRoute.name,
      white: false,
      shoppingCNPJ: "",
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        {
          title: "Shopping",
          icon: "mdi-store",
          link: `/shopping`
        },
        { title: "Minha sacola", icon: "mdi-shopping", link: "/sacola" },
        {
          title: "Forma de pagamento",
          icon: "mdi-card-bulleted",
          link: "/cartoes"
        },
        { title: "Meu perfil", icon: "mdi-account", link: "/usuario" }
      ]
    };
  },
  computed: mapGetters({
    isAuthenticated: "auth/isAuthenticated"
  }),
  watch: {
    shoppingCNPJ: function() {
      this.items[1].link = `/shopping/${this.shoppingCNPJ}`;
    }
  },
  created() {
    this.getShoppingCNPJ();
  },
  methods: {
    clickFilter() {
      this.$emit("clickFilter");
    },
    floatingNav() {
      if (window.scrollY > 5) {
        this.white = true;
      } else {
        this.white = false;
      }
    },
    routeTo,
    logout: function() {
      this.$store.dispatch("auth/AUTH_LOGOUT").then(() => {
        this.routeTo("/auth");
      });
    },
    getShoppingCNPJ: function() {
      this.shoppingCNPJ = localStorage.shoppingCNPJ;
    }
  }
};
</script>

<style lang="scss">
#filter {
  width: 20px;
}

#red-header {
  background: transparent;
  transition: all 0.3s ease;
  z-index: 999;
  color: $c-white;

  &.v-app-bar--is-scrolled {
    background: white;
    color: $c-gray90;

    .v-btn {
      color: $c-gray90;

      &.red-header--icon {
        color: $main-color;
      }
    }

    .text-shadow {
      text-shadow: none;
    }

    .brand {
      filter: none;
    }
  }

  .brand {
    height: 50%;
    object-fit: contain;
    filter: drop-shadow(1px 2px 1px $c-gray70);
  }

  .v-toolbar__title {
    font-size: 24px;
    font-weight: 400;
    line-height: 2rem;
  }

  .v-btn {
    color: $c-white;
    text-transform: initial;
  }

  .text-shadow {
    text-shadow: 1px 2px 4px $c-gray70;
  }

  @media screen and (max-width: 1920px) {
    .v-toolbar__content {
      max-width: 1300px;
      margin: 0px auto;
    }
  }
}

#gray-header {
  background: #efefef;
  z-index: 999;
  color: $c-white;

  &.v-app-bar--is-scrolled {
    background: #efefef;
  }

  .v-btn {
    color: $main-color;
  }
}
#auth-page-header {
  transition: all 0.3s ease;
  z-index: 999;
  background: white;
  color: $c-gray90;

  @media screen and (max-width: 1920px) {
    .v-toolbar__content {
      max-width: 1300px;
      margin: 0px auto;
    }
  }
}
</style>