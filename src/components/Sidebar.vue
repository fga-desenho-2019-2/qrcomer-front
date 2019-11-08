<template>
  <v-content>
    <v-app>
      <v-container>
        <v-row align="center" justify="center">
          <v-app-bar-nav-icon
            class="d-flex d-sm-flex d-md-none d-lg-none text-shadow red-header--icon"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-container>

      <v-navigation-drawer app v-model="drawer" absolute temporary color="#efefef">
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
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </v-content>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {
      drawer: null,
      shoppingCNPJ: "",
      created() {
        this.getShoppingCNPJ();
      },
      link: "",
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        {
          title: "Shopping",
          icon: "mdi-store",
          link: "/shopping/:cnpj"
        },
        { title: "Minha sacola", icon: "mdi-shopping", link: "/sacola" },
        { title: "Meu perfil", icon: "mdi-account", link: "/usuario" },
        { title: "Sair", icon: "mdi-logout", link: "/logout" }
      ]
    };
  },
  computed: {
    home: function() {
      return this.$t("Sidebar.home");
    },
    listShoppings: function() {
      return this.$t("SideBar.shopping");
    },

    myBag: function() {
      return this.$t("SideBar.sacola");
    },

    myProfile: function() {
      return this.$t("SideBar.profile");
    },

    getOut: function() {
      return this.$t("SideBar.logout");
    }
  },
  methods: {
    getShoppingCNPJ: function() {
      this.shoppingCNPJ = localStorage.shoppingCNPJ;
    }
  }
};
</script>

<style lang="scss">
.menu {
  color: black;
}
</style>